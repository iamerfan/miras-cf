import React from "react";
import ProfilePanel from "@/components/Profile";
import axios from "axios";
import { server } from "@/lib/config";
export const runtime = "edge";

const getData = async (id) => {
  try {
    const res = await fetch(`${server}/api/auth/profile/${id}`, {
      cache: "no-cache",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Profile({ params }) {
  const data = await getData(params.slug);
  return <ProfilePanel {...data} />;
}
