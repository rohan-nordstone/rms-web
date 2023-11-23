"use client"

import { ReactNode, useState } from "react"

import { cn } from "@/lib/utils"

import EditAbout from "./(About)/EditAbout"
import AddEducation from "./(Education)/AddEducation"
import AddExperience from "./(Experience)/AddExperience"
import AddSkills from "./Skills/AddSkills"

type Props = {
  children: ReactNode
  className?: string
}

export default function ProfileSectionDropdown({ className, children }: Props) {
  const [state, setState] = useState(false)

  return (
    <div className={cn(className && className)}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setState(!state)
        }}
        className="flex items-center space-x-4"
      >
        {children}
      </div>
      <div className="relative">
        <ul
          className={`absolute left-0 right-0 top-1 z-10 mt-0 space-y-0 rounded-md border bg-white text-sm shadow-md ${
            state ? "" : "hidden"
          }`}
        >
          <EditAbout>
            <li
              onClick={(e) => {
                e.stopPropagation()
                setState(!state)
              }}
              className="flex cursor-pointer items-center gap-3 px-5 py-3 text-base font-medium leading-[33px] text-black hover:bg-zinc-200"
            >
              <div className="flex h-5 w-5 items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Union"
                    d="M7.92253 0.523438C7.18511 0.523438 6.58732 1.12123 6.58732 1.85865V6.84627H1.59889C0.861467 6.84627 0.263672 7.44406 0.263672 8.18148C0.263672 8.9189 0.861466 9.51669 1.59888 9.51669H6.58732V14.5052C6.58732 15.2426 7.18511 15.8404 7.92253 15.8404C8.65995 15.8404 9.25774 15.2426 9.25774 14.5052V9.51669H14.2454C14.9828 9.51669 15.5806 8.9189 15.5806 8.18148C15.5806 7.44406 14.9828 6.84627 14.2454 6.84627H9.25774V1.85865C9.25774 1.12123 8.65995 0.523438 7.92253 0.523438Z"
                    fill="black"
                  />
                </svg>
              </div>
              Add About
            </li>
          </EditAbout>
          <AddExperience>
            <li
              onClick={(e) => {
                e.stopPropagation()
                setState(!state)
              }}
              className="flex cursor-pointer items-center gap-3 px-5 py-3 text-base font-medium leading-[33px] text-black hover:bg-zinc-200"
            >
              <div className="flex h-5 w-5 items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Union"
                    d="M7.92253 0.523438C7.18511 0.523438 6.58732 1.12123 6.58732 1.85865V6.84627H1.59889C0.861467 6.84627 0.263672 7.44406 0.263672 8.18148C0.263672 8.9189 0.861466 9.51669 1.59888 9.51669H6.58732V14.5052C6.58732 15.2426 7.18511 15.8404 7.92253 15.8404C8.65995 15.8404 9.25774 15.2426 9.25774 14.5052V9.51669H14.2454C14.9828 9.51669 15.5806 8.9189 15.5806 8.18148C15.5806 7.44406 14.9828 6.84627 14.2454 6.84627H9.25774V1.85865C9.25774 1.12123 8.65995 0.523438 7.92253 0.523438Z"
                    fill="black"
                  />
                </svg>
              </div>
              Add Experiance
            </li>
          </AddExperience>
          <AddSkills>
            <li
              onClick={(e) => {
                e.stopPropagation()
                setState(!state)
              }}
              className="flex cursor-pointer items-center gap-3 px-5 py-3 text-base font-medium leading-[33px] text-black hover:bg-zinc-200"
            >
              <div className="flex h-5 w-5 items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Union"
                    d="M7.92253 0.523438C7.18511 0.523438 6.58732 1.12123 6.58732 1.85865V6.84627H1.59889C0.861467 6.84627 0.263672 7.44406 0.263672 8.18148C0.263672 8.9189 0.861466 9.51669 1.59888 9.51669H6.58732V14.5052C6.58732 15.2426 7.18511 15.8404 7.92253 15.8404C8.65995 15.8404 9.25774 15.2426 9.25774 14.5052V9.51669H14.2454C14.9828 9.51669 15.5806 8.9189 15.5806 8.18148C15.5806 7.44406 14.9828 6.84627 14.2454 6.84627H9.25774V1.85865C9.25774 1.12123 8.65995 0.523438 7.92253 0.523438Z"
                    fill="black"
                  />
                </svg>
              </div>
              Add Skill
            </li>
          </AddSkills>
          <AddEducation>
            <li
              onClick={(e) => {
                e.stopPropagation()
                setState(!state)
              }}
              className="flex cursor-pointer items-center gap-3 px-5 py-3 text-base font-medium leading-[33px] text-black hover:bg-zinc-200"
            >
              <div className="flex h-5 w-5 items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Union"
                    d="M7.92253 0.523438C7.18511 0.523438 6.58732 1.12123 6.58732 1.85865V6.84627H1.59889C0.861467 6.84627 0.263672 7.44406 0.263672 8.18148C0.263672 8.9189 0.861466 9.51669 1.59888 9.51669H6.58732V14.5052C6.58732 15.2426 7.18511 15.8404 7.92253 15.8404C8.65995 15.8404 9.25774 15.2426 9.25774 14.5052V9.51669H14.2454C14.9828 9.51669 15.5806 8.9189 15.5806 8.18148C15.5806 7.44406 14.9828 6.84627 14.2454 6.84627H9.25774V1.85865C9.25774 1.12123 8.65995 0.523438 7.92253 0.523438Z"
                    fill="black"
                  />
                </svg>
              </div>
              Add Education
            </li>
          </AddEducation>
        </ul>
      </div>
    </div>
  )
}
