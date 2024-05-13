import Image from "next/image";
import { Inter } from "next/font/google";
import DefaultLayout from "@/components/layout/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <DefaultLayout>Home</DefaultLayout>;
}
