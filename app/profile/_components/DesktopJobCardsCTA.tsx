import DesktopRecommendations from "@/app/components/CallForAction/DesktopRecommendations"

import JobOpenings from "../user/components/JobOpenings"

export default function DesktopJobCardsCTA() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-bold text-black">Job Openings</h4>
        <div className="text-center text-lg font-light text-sky-900">
          See all
        </div>
      </div>
      <div className="my-9 flex flex-col gap-7">
        {[1, 2, 3].map((job, index) => (
          <JobOpenings key={index} />
        ))}
      </div>
      <DesktopRecommendations />
    </>
  )
}
