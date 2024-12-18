import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import relativeTime from "dayjs/plugin/relativeTime";
import { RouterOutputs } from "~/trpc/react";
dayjs.extend(relativeTime);

type PostProps = RouterOutputs["post"]["getAll"][number];
export const Post = ({ post }: { post: PostProps }) => {
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        src={post.createdBy.image ?? "/default-profile.png"}
        className="h-14 w-14 rounded-full"
        alt={`@${post.createdBy.name}'s profile picture`}
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <Link href={`/@${post.createdBy.name}`}>
            <span>{`@${post.createdBy.name} `}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span className="font-thin">{` · ${dayjs(
              post.createdAt,
            ).fromNow()}`}</span>
          </Link>
        </div>
        <span className="text-2xl">{post.name}</span>
      </div>
    </div>
  );
};
