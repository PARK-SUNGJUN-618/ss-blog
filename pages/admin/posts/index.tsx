import PostCard from "@/components/common/PostCard";
import AdminLayout from "@/components/layout/AdminLayout";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const posts = [
  {
    title: "240505_4_title",
    slug: "240505_4_title",
    content: "<p>240505_4_content</p>",
    meta: "240505_4_descriptio n240505_4_description240 505_4_description 240505_4_description2 40505_4_descripti on240505_4_des cription2405 05_4_description240505_4_description240505_4_description",
    tags: ["240505_4_1", "240505_4_2"],
    thumbnail:
      "https://res.cloudinary.com/ss-blog/image/upload/v1714903596/ssblog/e1yvrxh5rclajlt7mgf3.png",
    createdAt: "Tue Oct 11 2022 19:28:49 GMT+0900 (Japan Standard Time)",
  },
  {
    title: "240505_4_title2",
    slug: "240505_4_title2",
    content: "<p>240505_4_content2</p>",
    meta: "240505_4_description2",
    tags: ["240505_4_12", "240505_4_22"],
    thumbnail:
      "https://res.cloudinary.com/ss-blog/image/upload/v1714903596/ssblog/e1yvrxh5rclajlt7mgf3.png",
    createdAt: "Tue Oct 11 2022 19:28:49 GMT+0900 (Japan Standard Time)",
  },
  {
    title: "240505_4_title3",
    slug: "240505_4_title3",
    content: "<p>240505_4_content3</p>",
    meta: "240505_4_description3",
    tags: ["240505_4_13", "240505_4_23"],
    thumbnail:
      "https://res.cloudinary.com/ss-blog/image/upload/v1714903596/ssblog/e1yvrxh5rclajlt7mgf3.png",
    createdAt: "Tue Oct 11 2022 19:28:49 GMT+0900 (Japan Standard Time)",
  },
  {
    title: "240505_4_title4",
    slug: "240505_4_title4",
    content: "<p>240505_4_content4</p>",
    meta: "240505_4_description4",
    tags: ["240505_4_14", "240505_4_24"],
    thumbnail:
      "https://res.cloudinary.com/ss-blog/image/upload/v1714903596/ssblog/e1yvrxh5rclajlt7mgf3.png",
    createdAt: "Tue Oct 11 2022 19:28:49 GMT+0900 (Japan Standard Time)",
  },
];

const Posts: NextPage<Props> = () => {
  const [postsToRender, setPostsToRender] = useState(posts);

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto p-3">
        <div className="grid grid-cols-3 gap-4">
          {postsToRender.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Posts;
