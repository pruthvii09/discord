"use client";

import qs from "query-string";
import { VideoOff, Video } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";

export const ChatVideoButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const isVideo = searchParams?.get("video");

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname || "",
        query: {
          video: isVideo ? undefined : true,
        },
      },
      { skipNull: true }
    );
    router.push(url);
  };
  const Icon = isVideo ? VideoOff : Video;

  const toolTipLabel = isVideo ? "End Video call" : "Start Video call";

  return (
    <ActionTooltip side="bottom" label={toolTipLabel}>
      <button onClick={onClick} className="hover:opacity-75 transition ">
        <Icon className="h-6 w-6 dark:text-zinc-400 text-zinc-500" />
      </button>
    </ActionTooltip>
  );
};
