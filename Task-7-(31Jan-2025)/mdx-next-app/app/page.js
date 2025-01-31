import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="pb-1">MDX Playground</h1> <br />
      <Link href="/mdx-file" className="bg-red-500 text-white p-2">
        Go to MDX page?
      </Link>
    </div>
  );
}
