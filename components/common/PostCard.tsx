import { PostDetail } from "@/utils/types";
import { FC } from "react";

interface Props {
  post: PostDetail;
}

const PostCard: FC<Props> = ({ post }): JSX.Element => {
  return <div>{post.title}</div>;
};

export default PostCard;
