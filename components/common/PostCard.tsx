import { PostDetail } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";
import dateformat from "dateformat";

interface Props {
  post: PostDetail;
}

const trimText = (text: string, trimBy: number) => {
  if (text.length <= trimBy) return text;
  return text.substring(0, trimBy).trim() + "...";
};

const PostCard: FC<Props> = ({ post }): JSX.Element => {
  const { title, slug, meta, tags, createdAt, thumbnail } = post;
  return (
    <div
      className="rounded shadow-sm shadow-secondary-dark overflow-hidden bg-primary dark:bg-primary-dark
        transition flex flex-col h-full"
    >
      {/* thumbnail */}
      <div className="aspect-video relative">
        {!thumbnail ? (
          <div className="w-full h-full flex items-center justify-center text-secondary-dark opacity-50 font-semibold">
            No Image
          </div>
        ) : (
          <Image src={thumbnail} layout="fill" alt="thumbnail" />
        )}
      </div>

      {/* Post Info */}
      <div className="p-2 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-sm text-primary-dark dark:text-primary">
          <div className="flex items-center space-x-1">
            {tags.map((t, index) => (
              <span key={t + index}>#{t}</span>
            ))}
          </div>
          <span>{dateformat(createdAt, "d-mmm-yyyy")}</span>
        </div>
        <h1 className="font-semibold text-primary-dark dark:text-primary">
          {trimText(title, 50)}
        </h1>
        <p className="text-secondary-dark">{trimText(meta, 70)}</p>

        <div className="flex justify-end items-center h-8 mt-auto space-x-4 text-primary-dark dark:text-primary">
          <button className="hover:underline">Edit</button>
          <button className="hover:underline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
