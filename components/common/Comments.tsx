import { FC, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { GitHubAuthButton } from "../button";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { CommentResponse } from "@/utils/types";
import CommentCard from "./CommentCard";

interface Props {
  belongsTo: string;
}

const Comments: FC<Props> = ({ belongsTo }): JSX.Element => {
  const [comments, setComments] = useState<CommentResponse[]>();
  const userProfile = useAuth();

  const handleNewCommentSubmit = async (content: string) => {
    const newComment = await axios
      .post("/api/comment", { content, belongsTo })
      .then(({ data }) => data.comment)
      .catch((err) => console.log(err));
    if (newComment && comments) setComments([...comments, newComment]);
    else setComments([newComment]);
  };

  const handleReplySubmit = (replyComment: {
    content: string;
    repliedTo: string;
  }) => {
    axios
      .post("/api/comment/add-reply", replyComment)
      .then(({ data }) => data.comment)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios(`/api/comment?belongsTo=${belongsTo}`)
      .then(({ data }) => {
        setComments(data.comments);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-20 space-y-4">
      {userProfile ? (
        <CommentForm onSubmit={handleNewCommentSubmit} title="Add comment" />
      ) : (
        <div className="flex flex-col items-end space-y-2">
          <h3 className="text-secondary-dark text-xl font-semibold">
            Log in to add comment
          </h3>
          <GitHubAuthButton />
        </div>
      )}

      {comments?.map((comment) => {
        return (
          <div key={comment.id}>
            <CommentCard
              comment={comment}
              onReplySubmit={(content) =>
                handleReplySubmit({ content, repliedTo: comment.id })
              }
              onUpdateSubmit={(content) => {
                console.log("Update:", content);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
