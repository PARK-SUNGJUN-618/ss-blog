import AdminLayout from "@/components/layout/AdminLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface Props {}

const Search: NextPage<Props> = () => {
  const { query } = useRouter();

  const title = query.title as string;

  return <AdminLayout>search</AdminLayout>;
};

export default Search;
