import AdminLayout from "@/components/layout/AdminLayout";
import { PostDetail } from "@/utils/types";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {}

const Search: NextPage<Props> = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PostDetail[]>([]);

  const { query } = useRouter();

  const title = query.title as string;

  const handleSearch = async () => {
    try {
      setLoading(true);
      const { data } = await axios("/api/posts/search?title=" + title);
      setLoading(false);

      setResults(data.results);
    } catch (error: any) {
      console.log("error while searching posts: ", error.message);
    }
  };

  useEffect(() => {
    if (loading) return;
    handleSearch();
  }, [title]);

  return <AdminLayout>search</AdminLayout>;
};

export default Search;
