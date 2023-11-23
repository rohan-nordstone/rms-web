"use client"

import LikesCommentsShares from "../../components/LikesCommentsShares"
import ReportPopupModal from "./ReportPopupModal"

type Props = {
  news_id: number | undefined
}

export default function BottomIcons({ news_id }: Props) {
  return (
    <div className="flex items-center gap-6">
      <LikesCommentsShares news_id={news_id} showCount={false} />
      <svg
        width="16"
        height="21"
        viewBox="0 0 16 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer fill-current"
      >
        <path
          d="M15.6351 19.5734C15.6351 20.3248 14.7789 20.7554 14.1757 20.3073L8.36271 15.9888C8.03903 15.7483 7.59603 15.7483 7.27235 15.9888L1.45937 20.3073C0.856187 20.7554 0 20.3248 0 19.5734V0.914195C0 0.409299 0.409299 0 0.914196 0H14.7209C15.2258 0 15.6351 0.409299 15.6351 0.914196V19.5734Z"
          fill="#828282"
        />
      </svg>

      <div className="ml-auto">
        <ReportPopupModal news_id={news_id} />
      </div>
    </div>
  )
}
