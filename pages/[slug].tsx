import DefaultLayout from "@/components/layout/DefaultLayout";
import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {}

const SinglePost: NextPage<Props> = () => {
  return <DefaultLayout>SinglePost</DefaultLayout>;
};

export default SinglePost;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await dbConnect();
    const posts = await Post.find().select("slug");
    const paths = posts.map(({ slug }) => ({ params: { slug } }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    return {
      paths: [{ params: { slug: "/" } }],
      fallback: false,
    };
  }
};

// export const getStaticProps: GetStaticProps = () => {};
