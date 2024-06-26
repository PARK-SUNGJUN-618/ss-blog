import ConfirmModal from "@/components/common/ConfirmModal";
import InfiniteScrollPosts from "@/components/common/InfiniteScrollPosts";
import PostCard from "@/components/common/PostCard";
import AdminLayout from "@/components/layout/AdminLayout";
import { formatPosts, readPostsFromDb } from "@/lib/utils";
import { filterPosts } from "@/utils/helper";
import { PostDetail } from "@/utils/types";
import axios from "axios";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { useState } from "react";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

let pageNo = 0;
const limit = 9;

const Posts: NextPage<Props> = ({ posts }) => {
  const [postsToRender, setPostsToRender] = useState(posts);
  const [hasMorePosts, setHasMorePosts] = useState(posts.length >= limit);

  const fetchMorePosts = async () => {
    console.log("here!?");
    try {
      pageNo++;
      const { data } = await axios(
        `/api/posts?limit=${limit}&skip=${postsToRender.length}`
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
    <>
      <AdminLayout>
        <InfiniteScrollPosts
          hasMore={hasMorePosts}
          next={fetchMorePosts}
          dataLength={postsToRender.length}
          posts={postsToRender}
          showControls
          onPostRemoved={(post) => {
            setPostsToRender(filterPosts(postsToRender, post));
          }}
        />
      </AdminLayout>
    </>
  );
};

interface ServerSideResponse {
  posts: PostDetail[];
}

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

export default Posts;
