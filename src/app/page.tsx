import Link from "next/link";

import { auth } from "~/server/auth";
import Feed from "./_components/Feed";
import { LatestPost } from "./_components/latestPost";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex h-full min-h-screen flex-col items-center justify-center border-x border-slate-399 md:max-w-4xl">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>
        {session?.user && <Feed />}
      </div>
    </main>
  );
}
