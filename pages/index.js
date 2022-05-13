import Layout from "@/components/Layout";
import AdminLayout from "@/components/AdminLayout";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return <>{session ? <AdminLayout /> : <Layout />}</>;
}
