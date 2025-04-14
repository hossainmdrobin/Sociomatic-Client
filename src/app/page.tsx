import Banner from "@/components/Home/Banner";
import HomeNav from "@/components/partials/HomeNav/HomeNav";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HomeNav />
      <Banner />
      <Link href={'/app/dashboard'}>Go to ap</Link>
      <h1 className="text-center"> Welcome to my Page</h1>
    </div>
  );
}
