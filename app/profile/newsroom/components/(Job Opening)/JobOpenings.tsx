"use client"

import { useState } from "react"

import { Card } from "@/components/ui/card"

import { TJobsPosted } from "../../page"
import JobOpeningsCard from "./JobOpeningsCard"

type Props = {
  jobsPosted: TJobsPosted[]
}

export default function JobOpenings({ jobsPosted }: Props) {
  const [showAll, setShowAll] = useState(false)

  const toggleShowMore = () => {
    setShowAll(!showAll)
  }

  const visibleJobs = showAll ? jobsPosted : jobsPosted.slice(0, 3)

  return (
    <Card className="p-5 md:p-8">
      <h3 className="text-2xl font-bold leading-[30.50px] text-black">
        Job Opening{" "}
        <span className="text-2xl font-normal leading-[30.50px] text-zinc-500">
          ({jobsPosted.length})
        </span>
      </h3>
      {jobsPosted.length === 0 && (
        <div className="flex min-h-[300px] w-full items-center justify-center">
          <p className="text-center text-xl font-semibold">
            No Job Openings Posted Yet
          </p>
        </div>
      )}
      {visibleJobs.map((job, index) => (
        <JobOpeningsCard key={index} job={job} />
      ))}
      {jobsPosted.length > 3 && !showAll && (
        <div
          onClick={toggleShowMore}
          className="cursor-pointer text-center text-lg font-semibold text-secondary"
        >
          + {jobsPosted.length - 3} more
        </div>
      )}
    </Card>
  )
}
