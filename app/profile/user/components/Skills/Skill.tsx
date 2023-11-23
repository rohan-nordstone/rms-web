"use client"

import { Separator } from "@/components/ui/separator"

import useGetSkills from "../../hooks/useGetSkills"

export default function Skill() {
  const { skills, isLoading, isError, error } = useGetSkills()

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    )
  }

  return (
    <>
      {skills?.map((skill, index) => (
        <div key={skill.id}>
          <div className="space-y-2 py-6">
            <h5 className="text-lg font-semibold leading-relaxed text-sky-900">
              {skill.skill}
            </h5>
            <p className="text-base font-light leading-relaxed text-black">
              {skill.description}
            </p>
          </div>
          {index !== skills.length - 1 && <Separator />}
        </div>
      ))}
    </>
  )
}
