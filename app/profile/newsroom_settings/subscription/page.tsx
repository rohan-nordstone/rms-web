import Link from "next/link"

import TimeLeft from "./components/TimeLeft"

export default function page() {
  return (
    <div className="space-y-9 px-12 py-9">
      <h4 className="text-2xl font-bold leading-[30.50px] text-black">
        Your account subcription
      </h4>
      <TimeLeft />
      <div>
        <Link
          href="/"
          className="text-base font-bold text-sky-900 hover:underline"
        >
          Change Plan or Cancel Subcription
        </Link>
      </div>
    </div>
  )
}
