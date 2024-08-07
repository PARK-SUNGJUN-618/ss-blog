import ContentWrapper from "@/components/admin/ContentWrapper";
import LatestCommentListCard from "@/components/admin/LatestCommentListCard";
import LatestPostListCard from "@/components/admin/LatestPostListCard";
import LatestUserTable from "@/components/admin/LatestUserTable";
import AdminNav from "@/components/common/nav/AdminNav";
import AdminLayout from "@/components/layout/AdminLayout";
import { LatestComment, LatestUserProfile, PostDetail } from "@/utils/types";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {}

const Admin: NextPage<Props> = () => {
  const [latestPosts, setLatestPosts] = useState<PostDetail[]>();
  const [latestComments, setLatestComments] = useState<LatestComment[]>();
  const [latestUsers, setLatestUsers] = useState<LatestUserProfile[]>();

  useEffect(() => {
    // fetching latest posts
    axios("/api/posts?limit=5&skip=0")
      .then(({ data }) => {
        setLatestPosts(data.posts);
      })
      .catch((err) => console.log(err));

    // fetching latest comments
    axios("/api/comment/latest")
      .then(({ data }) => {
        setLatestComments(data.comments);
      })
      .catch((err) => console.log(err));

    // fetching latest users
    axios("/api/user")
      .then(({ data }) => {
        setLatestUsers(data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AdminLayout>
      <div>
        <ContentWrapper seeAllRoute="/admin/posts" title="Latest Posts">
          {latestPosts?.map(({ id, title, meta, slug }) => {
            return (
              <LatestPostListCard
                key={id}
                title={title}
                meta={meta}
                slug={slug}
              />
            );
          })}
        </ContentWrapper>
      </div>
      <div>
        <ContentWrapper seeAllRoute="/admin/comments" title="Latest Comments">
          {latestComments?.map((comment) => {
            return <LatestCommentListCard comment={comment} key={comment.id} />;
          })}
        </ContentWrapper>
      </div>

      {/* Latest Users */}
      {/* <div className="max-w-[600px]"> */}
      <div>
        <ContentWrapper title="Latest User" seeAllRoute="/admin/users">
          <LatestUserTable users={latestUsers} />
        </ContentWrapper>
      </div>
    </AdminLayout>
  );
};

export default Admin;
