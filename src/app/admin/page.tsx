"use client";

import Dashboard from "@/components/admin/dashboard";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { isAuthenticated } from "../lib/auth";

const Admin = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     router.push("/login");
  //   }
  // }, []);
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Admin;
