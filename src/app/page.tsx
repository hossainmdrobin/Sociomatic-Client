import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/app/dashboard'}>Go to ap</Link>
      <h1 className="text-center"> Welcome to my Page</h1>
    </div>
  );
}
