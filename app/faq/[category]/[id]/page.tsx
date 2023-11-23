import Link from "next/link"

import ContactUsCTA from "../../components/ContactUsCTA"
import FAQLike from "../../components/FAQLike"
import getQuestion from "../../components/hooks/utils/getQuestion"

type Props = {
  params: { category: string; id: string }
}

export const revalidate = 3600

export default async function page({ params }: Props) {
  const data = await getQuestion(params.id)

  return (
    <>
      {/* <div className="bg-backgroundSVG bg-cover bg-center">
        <div className="container py-6">
          <div className="breadcrumbs mb-3 text-base font-light leading-relaxed text-white">
            <ul>
              <li>
                <Link href={`/faq`}>FAQs</Link>
              </li>
              <li>
                <a>
                  <Link href={`/faq/search?category=${data?.category.name}`}>
                    {data?.category.name}
                  </Link>
                </a>
              </li>
              <li>{data?.question}</li>
            </ul>
          </div>
          <h1 className="mb-16 text-[32px] font-bold text-white md:text-5xl">
            Here is your result for {data?.question}
          </h1>
        </div>
      </div>
      <section className="container items-center pb-8 pt-12">
        <div className="rounded-2xl bg-white px-5 py-7 lg:px-7">
          <div className="space-y-5">
            <p className="text-xl font-medium leading-relaxed text-black">
              {data?.question}
            </p>
            <p className="text-base font-light leading-relaxed text-black">
              {data?.answer}
            </p>
          </div>
          <FAQLike questionID={data?.id} />
        </div>
        <div className="mb-16 mt-11">
          <h3 className="mb-2 text-2xl font-bold leading-[30.50px] text-black">
            Related articles
          </h3>
          <div className="mb-16 mt-6 grid gap-3 md:grid-cols-2 lg:gap-5">
            <div className="group cursor-pointer space-y-3 p-5 lg:space-y-0 lg:px-10">
              <div className="flex items-center justify-between gap-4 rounded-md">
                <p className="text-lg font-light leading-normal text-zinc-800 group-hover:underline lg:text-xl lg:leading-loose">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam?
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
            </div>
            <div className="group cursor-pointer space-y-3 p-5 lg:space-y-0 lg:px-10">
              <div className="flex items-center justify-between gap-4 rounded-md">
                <p className="text-lg font-light leading-normal text-zinc-800 group-hover:underline lg:text-xl lg:leading-loose">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam?
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
            </div>
            <div className="group cursor-pointer space-y-3 p-5 lg:space-y-0 lg:px-10">
              <div className="flex items-center justify-between gap-4 rounded-md">
                <p className="text-lg font-light leading-normal text-zinc-800 group-hover:underline lg:text-xl lg:leading-loose">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam?
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
            </div>
            <div className="group cursor-pointer space-y-3 p-5 lg:space-y-0 lg:px-10">
              <div className="flex items-center justify-between gap-4 rounded-md">
                <p className="text-lg font-light leading-normal text-zinc-800 group-hover:underline lg:text-xl lg:leading-loose">
                  Pellentesque vel tristique ultrices habitasse feugiat nulla
                  tempor quam?
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
            </div>
          </div>
        </div>
        <ContactUsCTA />
      </section> */}
    </>
  )
}
