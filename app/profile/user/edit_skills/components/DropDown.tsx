"use client"

import { useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import EditSkillsComponent from "../../components/Skills/EditSkillsComponent"
import { TSkill } from "../../hooks/types/TSkill"
import deleteSkill from "../../hooks/utils/deleteSkilll"

type Props = {
  className?: string
  skill: TSkill
}

export default function DropDown({ className, skill }: Props) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <summary className="btn border-none bg-transparent hover:bg-transparent">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            className="h-[27px] w-[27px] cursor-pointer fill-current text-[#828282] hover:text-primary"
          >
            <g id="Vector">
              <g id="Vector_2">
                <path d="M0.560534 26.0052C0.716529 25.4358 0.872524 24.8664 1.01292 24.297C1.39511 22.7917 1.76169 21.2863 2.14388 19.7888C2.18288 19.6406 2.26868 19.4846 2.37007 19.3754C7.08892 14.6487 11.8078 9.92988 16.5266 5.21104C16.5656 5.17204 16.6046 5.14084 16.6202 5.12524C18.4765 6.98158 20.3251 8.83012 22.197 10.7021C22.1658 10.7411 22.1034 10.8035 22.041 10.8737C17.369 15.5457 12.6969 20.2177 8.01709 24.882C7.87669 25.0224 7.6739 25.1394 7.4789 25.1862C5.45877 25.701 3.43864 26.2001 1.41851 26.7071C0.958321 26.8241 0.802326 26.7539 0.552734 26.3561C0.560534 26.2391 0.560534 26.1221 0.560534 26.0052Z" />
                <path d="M23.8662 9.05631C21.9942 7.18438 20.1457 5.33584 18.3127 3.5029C18.9991 2.80092 19.6621 2.04435 20.4031 1.38137C21.3858 0.492197 23.0394 0.515597 24.03 1.40477C24.7007 2.01315 25.3481 2.65273 25.9487 3.3313C26.8613 4.35307 26.8301 5.94422 25.9331 6.96598C25.8473 7.06738 25.7459 7.16098 25.6523 7.26237C25.0517 7.86295 24.4589 8.46353 23.8662 9.05631Z" />
              </g>
            </g>
          </svg>
        </summary>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("", className ?? className)}>
        <EditSkillsComponent skill={skill}>
          <DropdownMenuItem onSelect={(e: any) => e.preventDefault()}>
            <div className="flex items-center gap-3 text-base font-bold leading-loose text-black">
              <div className="flex h-6 w-6 items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="h-[20px] w-[20px] cursor-pointer fill-current text-[#828282] group-hover:text-primary"
                >
                  <g id="Vector">
                    <path d="M0.00598441 19.4214C0.125673 18.9839 0.245361 18.5465 0.35308 18.109C0.646317 16.9525 0.927584 15.796 1.22082 14.6454C1.25074 14.5316 1.31657 14.4117 1.39437 14.3279C5.01494 10.6965 8.63551 7.07109 12.2561 3.4457C12.286 3.41574 12.3159 3.39177 12.3279 3.37979C13.7522 4.80597 15.1705 6.22616 16.6068 7.66433C16.5828 7.6943 16.5349 7.74224 16.4871 7.79617C12.9024 11.3856 9.31773 14.975 5.72708 18.5585C5.61936 18.6663 5.46377 18.7562 5.31416 18.7922C3.7642 19.1877 2.21423 19.5712 0.66427 19.9607C0.31119 20.0506 0.191501 19.9966 0 19.691C0.00598441 19.6011 0.00598441 19.5113 0.00598441 19.4214Z" />
                    <path d="M17.8874 6.39994C16.4512 4.96177 15.0328 3.54158 13.6265 2.13337C14.1531 1.59406 14.6618 1.0128 15.2303 0.503448C15.9844 -0.179683 17.2531 -0.161705 18.0131 0.521425C18.5277 0.98883 19.0245 1.48021 19.4853 2.00154C20.1854 2.78654 20.1615 4.00899 19.4733 4.79399C19.4075 4.87189 19.3297 4.9438 19.2578 5.0217C18.797 5.48311 18.3422 5.94452 17.8874 6.39994Z" />
                  </g>
                </svg>
              </div>
              Edit
            </div>
          </DropdownMenuItem>
        </EditSkillsComponent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            deleteSkill(skill.id, session?.token || "")
            queryClient.invalidateQueries({
              queryKey: ["user/skills"],
            })
          }}
        >
          <div className="flex items-center gap-3 text-base font-bold leading-loose text-black">
            <div className="flex h-6 w-6 items-center justify-center">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                className="h-[21px] w-[17px] cursor-pointer fill-current text-[#828282] group-hover:text-warning"
              >
                <path
                  id="Vector"
                  d="M1.23222 5.26304H15.7807C15.7444 5.91755 15.7107 6.55861 15.6734 7.19966C15.589 8.65788 15.5035 10.1172 15.417 11.5777C15.3171 13.2954 15.2175 15.0133 15.1182 16.7314C15.0741 17.4924 15.0227 18.2535 14.9901 19.0151C14.9382 20.1929 14.1755 20.9994 13.088 21C10.0266 21 6.96547 21 3.90472 21C2.83074 21 2.07221 20.1873 2.01254 19.0241C1.9259 17.3197 1.81643 15.6164 1.71837 13.9131C1.62186 12.244 1.5264 10.5749 1.43197 8.90578C1.36452 7.75453 1.29794 6.60236 1.23222 5.44924C1.22911 5.39372 1.23222 5.33763 1.23222 5.26304ZM16.2913 3.94055C16.7582 3.94055 16.9984 3.68031 17 3.17947C17 2.8295 17 2.47953 17 2.12956C17 1.553 16.7769 1.31071 16.2472 1.31015C14.8489 1.31015 13.4507 1.31015 12.0524 1.31352C11.8968 1.31352 11.8018 1.28211 11.7411 1.11441C11.6648 0.922205 11.5781 0.73494 11.4817 0.553561C11.3053 0.194616 11.0267 0.00504767 10.6516 0.00448682C9.21478 0.00149561 7.77796 0 6.34115 0C5.97278 0 5.6978 0.187325 5.52347 0.537858C5.4219 0.732867 5.3296 0.933352 5.24693 1.13853C5.19505 1.28099 5.11048 1.31127 4.97922 1.31071C3.54828 1.30623 2.11769 1.30623 0.68745 1.31071C0.249557 1.31127 0.00363181 1.57992 0 2.05384C0 2.41167 0 2.76781 0 3.12507C0 3.69826 0.225691 3.94111 0.756455 3.94111H16.2913V3.94055Z"
                />
              </svg>
            </div>
            Delete
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
