import Editor, { FinalPost } from "@/components/editor";
import AdminLayout from "@/components/layout/AdminLayout";
import axios from "axios";
import { NextPage } from "next";

interface Props {}

const Create: NextPage<Props> = () => {
  const handleSubmit = async (post: FinalPost) => {
    try {
      // generate FormData
      const formData = new FormData();
      for (let key in post) {
        const value = (post as any)[key];
        if (key === "tags") {
          const tags = value.split(",").map((tag: string) => tag.trim());
          formData.append("tags", JSON.stringify(tags));
          console.log("JSON.stringify(tags):", JSON.stringify(tags));
        } else formData.append(key, value);
      }
      // submit our post
      console.log("formData:", formData);
      const { data } = await axios.post("/api/posts", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <AdminLayout title="New Post">
      <div className="max-w-4xl mx-auto">
        <Editor onSubmit={handleSubmit} />
      </div>
    </AdminLayout>
  );
};

export default Create;
