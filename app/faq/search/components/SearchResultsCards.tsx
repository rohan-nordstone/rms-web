import Link from "next/link"

import { convertTimestamp } from "@/lib/util_functions/convertTimestamp"
import { Card } from "@/components/ui/card"

import { TFaqQuestion } from "../hooks/types/TFaqQuestion"

type Props = {
  body: TFaqQuestion
}

export default function SearchResultsCards({ body }: Props) {
  return (
    <Card className="space-y-3 px-7 py-6">
      <Link href={`/faq/${body.category.id}/${body.id}`}>
        <h4 className="text-lg font-semibold text-black">{body.question}</h4>
        <div className="group flex items-center gap-5">
          <p className="line-clamp-3 text-base font-light leading-relaxed text-black group-hover:underline">
            {body.answer}
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
                  d="M0.524232 1.33087C1.22321 0.631897 2.35647 0.631897 3.05545 1.33087L9.72067 7.99609C10.4196 8.69507 10.4196 9.82833 9.72067 10.5273L3.05545 17.1925C2.35647 17.8915 1.22321 17.8915 0.524232 17.1925C-0.174744 16.4935 -0.174744 15.3603 0.524232 14.6613L5.92384 9.2617L0.524232 3.86209C-0.174744 3.16311 -0.174744 2.02985 0.524232 1.33087Z"
                  fill="#194D79"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="text-sm font-light leading-relaxed text-zinc-500">
          {body.category.name} • {convertTimestamp(new Date(body.updated_at))}
        </div>
      </Link>
    </Card>
  )
}
