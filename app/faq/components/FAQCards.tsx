import Link from "next/link"

import { TFaqQuestionResponse } from "../hooks/types/TFaqQuestionResponse"

type Props = {
  faq: TFaqQuestionResponse
}

export default function FAQCards({ faq }: Props) {
  return (
    <Link href={`/faq/${faq.category_id}/${faq.id}`}>
      <div className="group flex h-full cursor-pointer items-center justify-between gap-4 rounded-md p-3">
        <p className="line-clamp-3 text-lg font-light leading-loose text-zinc-800 group-hover:underline lg:text-xl">
          {faq.question}
        </p>
        <div className="h-4 w-3">
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Rectangle 53 (Stroke)">
              <path
                id="Rectangle 53 (Stroke)_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.832826 1.48126C1.5318 0.782287 2.66507 0.782287 3.36404 1.48126L10.0293 8.14648C10.7282 8.84546 10.7282 9.97872 10.0293 10.6777L3.36404 17.3429C2.66507 18.0419 1.5318 18.0419 0.832826 17.3429C0.13385 16.6439 0.13385 15.5107 0.832826 14.8117L6.23244 9.41209L0.832826 4.01248C0.13385 3.3135 0.13385 2.18024 0.832826 1.48126Z"
                fill="#194D79"
              />
            </g>
          </svg>
        </div>
      </div>
    </Link>
  )
}
