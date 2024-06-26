import { PostDetail } from "@/utils/types";
import Image from "next/image";
import { FC } from "react";
import dateformat from "dateformat";
import Link from "next/link";
import { trimText } from "@/utils/helper";

interface Props {
  post: PostDetail;
  busy?: boolean;
  controls?: boolean;
  onDeleteClick?(): void;
}

const PostCard: FC<Props> = ({
  controls = false,
  post,
  busy,
  onDeleteClick,
}): JSX.Element => {
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
          // <Image src={thumbnail} fill alt="thumbnail" />
          <Image
            src={thumbnail}
            fill
            alt="thumbnail"
            sizes="99vw"
            priority={true}
          />
        )}
      </div>

      {/* Post Info */}
      <div className="p-2 flex-1 flex flex-col">
        <Link href={"/" + slug}>
          <div className="flex items-center justify-between text-sm text-primary-dark dark:text-primary">
            <div className="flex items-center flex-wrap space-x-1 text-xs">
              {tags.map((t, index) => (
                <span key={t + index}>#{t}</span>
              ))}
            </div>
            <span className="flex-shrink-0">
              {dateformat(createdAt, "d-mmm-yyyy")}
            </span>
          </div>
          <h1 className="font-semibold text-primary-dark dark:text-primary">
            {trimText(title, 50)}
          </h1>
          <p className="text-secondary-dark">{trimText(meta, 70)}</p>
        </Link>

        {controls && (
          <div className="flex justify-end items-center h-8 mt-auto space-x-4 text-primary-dark dark:text-primary">
            {busy ? (
              <span className="animate-pulse">Removing</span>
            ) : (
              <>
                <Link
                  href={"/admin/posts/update/" + slug}
                  className="hover:underline"
                >
                  Edit
                </Link>
                <button onClick={onDeleteClick} className="hover:underline">
                  Delete
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
