import { PostDetail } from "@/utils/types";
import { FC, ReactNode, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import ConfirmModal from "./ConfirmModal";

interface Props {
  posts: PostDetail[];
  showControls?: boolean;
  hasMore: boolean;
  next(): void;
  dataLength: number;
  loader?: ReactNode;
}

const InfiniteScrollPosts: FC<Props> = ({
  posts,
  showControls,
  hasMore,
  next,
  dataLength,
  loader,
}): JSX.Element => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [postToRemove, setPostToRemove] = useState<PostDetail | null>(null);

  const handleOnDeleteClick = (post: PostDetail) => {
    setPostToRemove(post);
    setShowConfirmModal(true);
  };

  const handleDeleteCancel = () => {
    setShowConfirmModal(false);
  };

  const handleOnDeleteConfirm = () => {
    console.log(postToRemove);
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
            {posts.map((post) => (
              // <Link key={post.slug} href={"/" + post.slug}>
              <PostCard
                key={post.slug}
                post={post}
                controls={showControls}
                onDeleteClick={() => handleOnDeleteClick(post)}
              />
              // </Link>
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
