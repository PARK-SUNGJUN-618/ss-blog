import { PostDetail } from "@/utils/types";
import { FC, ReactNode, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import ConfirmModal from "./ConfirmModal";
import axios from "axios";

interface Props {
  posts: PostDetail[];
  showControls?: boolean;
  hasMore: boolean;
  next(): void;
  dataLength: number;
  loader?: ReactNode;
  onPostRemoved(post: PostDetail): void;
}

const InfiniteScrollPosts: FC<Props> = ({
  posts,
  showControls,
  hasMore,
  next,
  dataLength,
  loader,
  onPostRemoved,
}): JSX.Element => {
  const [removing, setRemoving] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [postToRemove, setPostToRemove] = useState<PostDetail | null>(null);

  const handleOnDeleteClick = (post: PostDetail) => {
    setPostToRemove(post);
    setShowConfirmModal(true);
  };

  const handleDeleteCancel = () => {
    setShowConfirmModal(false);
  };

  const handleOnDeleteConfirm = async () => {
    if (!postToRemove) return handleDeleteCancel();
    setShowConfirmModal(false);
    setRemoving(true);

    const { data } = await axios.delete(`/api/posts/${postToRemove.id}`);
    if (data.removed) onPostRemoved(postToRemove);

    setRemoving(false);
  };

  const defaultLoader = (
    <p className="p-3 text-secondary-dark opacity-50 text-center font-semibold text-xl animate-pulse">
      Loading...
    </p>
  );
  return (
    <>
      <InfiniteScroll
        hasMore={hasMore}
        next={next}
        dataLength={dataLength}
        loader={loader || defaultLoader}
      >
        <div className="max-w-4xl mx-auto p-3">
          <div className="grid grid-cols-3 gap-4">
            {posts.map((post, index) => (
              <div key={post.slug}>
                {/* // to test
                <p className="font-semibold text-xl absolute p-2 z-50">
                  {index + 1}
                </p> */}
                {/* <Link key={post.slug} href={"/" + post.slug}> */}
                <PostCard
                  post={post}
                  controls={showControls}
                  onDeleteClick={() => handleOnDeleteClick(post)}
                  busy={post.id === postToRemove?.id && removing}
                />
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      <ConfirmModal
        visible={showConfirmModal}
        onClose={handleDeleteCancel}
        onCancel={handleDeleteCancel}
        onConfirm={handleOnDeleteConfirm}
        title="Are you sure?"
        subTitle="This action will remove this post permanently!"
        // busy
      />
    </>
  );
};

export default InfiniteScrollPosts;
