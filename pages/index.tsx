import { useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { formatPosts, readPostsFromDb } from "@/lib/utils";
import { PostDetail, UserProfile } from "@/utils/types";
import InfiniteScrollPosts from "@/components/common/InfiniteScrollPosts";
import axios from "axios";
import { useSession } from "next-auth/react";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage<Props> = ({ posts }) => {
  const [postsToRender, setPostsToRender] = useState(posts);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const { data } = useSession();
  const profile = data?.user as UserProfile;

  const isAdmin = profile && profile.role === "admin";

  const fetchMorePosts = async () => {
    try {
      pageNo++;
      const { data } = await axios(
        `/api/posts?limit=${limit}&pageNo=${pageNo}`
      );
      setPostsToRender([...postsToRender, ...data.posts]);
      console.log("data.posts.length:", data.posts.length);
      console.log("limit:", limit);
      if (data.posts.length < limit) {
        setHasMorePosts(false);
      }
    } catch (error) {
      setHasMorePosts(false);
      console.log(error);
    }
  };

  return (
    <DefaultLayout>
      <div className="pb-20">
        <InfiniteScrollPosts
          hasMore={hasMorePosts}
          next={fetchMorePosts}
          dataLength={postsToRender.length}
          posts={postsToRender}
          showControls={isAdmin}
        />
      </div>
    </DefaultLayout>
  );
};

interface ServerSideResponse {
  posts: PostDetail[];
}

let pageNo = 0;
const limit = 9;

export const getServerSideProps: GetServerSideProps<
  ServerSideResponse
> = async () => {
  try {
    // read posts
    const posts = await readPostsFromDb(limit, pageNo);
    // format posts
    const formattedPosts = formatPosts(posts);
    return {
      props: {
        posts: formattedPosts,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Home;

