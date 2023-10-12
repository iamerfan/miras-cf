import ProfilePanel from "@/components/Profile";

export const runtime = "edge";

const getData = async (id) => {
  try {
    const res = await fetch(`${server}/api/auth/profile/${id}`, {
      cache: "no-cache",
    });
    console.log(res);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Profile({ params }) {
  const data = await getData(params.slug);
  return <ProfilePanel {...data} />;
}
