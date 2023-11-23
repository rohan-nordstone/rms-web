"use client"

import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import JobOpenings from "../components/JobOpenings"
import useGetSkills from "../hooks/useGetSkills"
import DropDown from "./components/DropDown"

export default function page() {
  const { skills, isLoading, isError, error } = useGetSkills()

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    )
  }
  return (
    <div className="flex gap-7">
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between">
          <h4 className="text-[28px] font-bold text-black">Edit Skills</h4>
          <Link
            href={"/profile/user"}
            className="text-center text-lg font-light text-sky-900"
          >
            Back
          </Link>
        </div>
        <Card className="px-9 py-5">
          {skills?.map((skill, index) => (
            <div key={skill.id}>
              <div className="relative flex gap-10">
                <div className="space-y-2 py-6">
                  <h5 className="text-lg font-semibold leading-relaxed text-sky-900">
                    {skill.skill}
                  </h5>
                  <p className="text-base font-light leading-relaxed text-black">
                    {skill.description}
                  </p>
                </div>
                <div className="absolute right-0 top-2">
                  <DropDown
                    skill={skill}
                    className="absolute right-0 top-0 min-w-[221px]"
                  />
                </div>
              </div>
              {index !== skills.length - 1 && <Separator />}
            </div>
          ))}
        </Card>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          <h4 className="text-[28px] font-bold text-black">Job Openings</h4>
          <div className="text-center text-lg font-light text-sky-900">
            See all
          </div>
        </div>
        <div className="my-9 flex flex-col gap-7">
          {[1, 2, 3].map((job, index) => (
            <JobOpenings key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
