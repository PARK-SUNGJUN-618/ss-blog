import Editor from "@/components/editor";
import { NextPage } from "next";

interface Props {}

const Create: NextPage<Props> = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Editor
        onSubmit={(post) => {
          console.log(post);
        }}
        initialValue={{
          title: "This is from create",
          content: "<h2>I am Header</h2>",
          meta: "little meta description",
          slug: "this-is-from-create",
          tags: "javascript",
          thumbnail:
            "https://res.cloudinary.com/ss-blog/image/upload/v1711363577/ss-blogs/q6k6sica6ctzvu3jcyxv.png",
        }}
      />
    </div>
  );
};

export default Create;
