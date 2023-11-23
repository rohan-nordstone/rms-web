import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

import DropDown from "./DropDown"

type Props = {
  job: {
    title: string
  }
}

export default function JobCard({ job }: Props) {
  return (
    <Card className="relative p-3 sm:p-6">
      <DropDown className="absolute right-0 top-2" />
      <div className="flex items-center gap-x-5 gap-y-2 sm:gap-x-7">
        <Image
          src="/images/rms_logo.webp"
          alt="Station Logo"
          width={91}
          height={70}
        />
        <div className="flex flex-col justify-center">
          <Link
            href={"/jobs/any"}
            className="text-2xl font-bold leading-[30.50px] text-black hover:underline"
          >
            {job.title}
          </Link>
          <p className="text-base font-light leading-relaxed text-secondary">
            RateMyStation.com
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-5 rounded-lg bg-zinc-100 px-5 py-2">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M3.46232 14.1058C3.24403 14.1104 3.04897 13.999 2.88178 13.8225C2.15262 13.0562 1.56743 12.1923 1.13551 11.2263C0.564262 9.94913 0.280959 8.61157 0.332047 7.20899C0.415644 4.90541 1.26555 2.92228 2.88178 1.27355C3.24403 0.902006 3.78742 0.892717 4.14503 1.23175C4.51193 1.58008 4.53051 2.12346 4.15896 2.50429C3.35085 3.34027 2.73316 4.28771 2.4127 5.40699C1.65103 8.04496 2.19442 10.395 4.02428 12.4478C4.16825 12.6103 4.32151 12.7868 4.38189 12.9865C4.56302 13.5624 4.10788 14.1104 3.46232 14.1058ZM17.1584 3.58178C16.7404 2.71329 16.1877 1.93769 15.505 1.25962C15.2217 0.976315 14.827 0.911295 14.4833 1.07849C14.1303 1.25033 13.9445 1.60794 13.991 2.012C14.0235 2.27672 14.1907 2.45785 14.3672 2.63898C16.8797 5.27695 16.9866 9.42897 14.604 12.1877C14.4786 12.3317 14.3439 12.4664 14.2186 12.6103C13.8795 12.9912 13.912 13.5671 14.2929 13.8829C14.7248 14.2451 15.2078 14.2126 15.5561 13.776C15.8023 13.4649 16.0484 13.1491 16.2713 12.8147C17.3767 11.1474 17.9712 9.31751 17.999 7.50158C17.9851 5.96431 17.7111 4.73357 17.1584 3.58178ZM3.94997 8.51868C4.14967 9.6101 4.64662 10.5482 5.43151 11.3285C5.67765 11.5746 5.97953 11.6443 6.31392 11.5421C6.63903 11.44 6.84338 11.2124 6.91769 10.8826C6.99199 10.5436 6.87589 10.2649 6.63438 10.0142C6.03062 9.38717 5.69159 8.63015 5.64514 7.75702C5.58477 6.69811 5.93774 5.79247 6.67154 5.02616C7.04308 4.64068 7.02915 4.08801 6.6576 3.73968C6.29535 3.396 5.75196 3.41922 5.38506 3.80006C4.37725 4.84503 3.87566 6.09435 3.85708 7.69199C3.87102 7.87777 3.88959 8.20287 3.94997 8.51868ZM14.4043 6.36372C14.1907 5.36055 13.703 4.49206 12.9785 3.76755C12.7277 3.51676 12.4212 3.44245 12.0822 3.55391C11.7431 3.66073 11.5434 3.90223 11.4784 4.25056C11.418 4.58959 11.5574 4.84967 11.7849 5.09582C12.5791 5.95502 12.8903 6.96748 12.7138 8.11927C12.6023 8.87165 12.2586 9.50792 11.7338 10.056C11.3623 10.4461 11.3716 10.9941 11.7431 11.3424C12.11 11.6861 12.6534 11.6629 13.0203 11.2821C14.0235 10.2417 14.5204 8.9924 14.5529 7.36689C14.5204 7.15325 14.4879 6.75384 14.4043 6.36372ZM9.20733 5.7646C8.23667 5.75532 7.42392 6.55878 7.41927 7.53409C7.41463 8.51868 8.21809 9.33144 9.20269 9.32679C10.1826 9.32679 10.9815 8.52797 10.9815 7.54802C10.9861 6.56807 10.1966 5.77389 9.20733 5.7646Z"
                fill="#194D79"
              />
            </svg>
          </div>
          <p className="text-base font-light leading-relaxed text-sky-900">
            Remote working
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M8.78738 0.834778C9.13962 0.834778 9.49186 0.834778 9.84411 0.834778C9.88814 0.843584 9.92776 0.856793 9.97179 0.861196C10.4033 0.927241 10.8436 0.966869 11.2707 1.06374C14.5201 1.80785 17.0783 4.52452 17.6287 7.81358C17.6815 8.12179 17.7123 8.43 17.7563 8.74262C17.7563 9.09486 17.7563 9.4471 17.7563 9.79934C17.7475 9.83017 17.7343 9.86099 17.7299 9.89181C17.6727 10.2837 17.6419 10.6799 17.5582 11.063C16.4486 16.2938 10.6851 19.1866 5.83295 16.9587C2.24888 15.3163 0.289533 11.5121 1.03805 7.64186C1.6941 4.23392 4.44159 1.54367 7.86274 0.962466C8.17095 0.909629 8.47917 0.878808 8.78738 0.834778ZM10.6322 11.1114C10.6367 11.8203 10.0599 12.4191 9.36417 12.4368C8.62887 12.4544 8.03006 11.8996 7.99483 11.1643C7.98162 10.812 7.76147 10.5831 7.44886 10.5919C7.14505 10.6007 6.9293 10.8561 6.93811 11.1995C6.96012 12.1682 7.61617 13.0488 8.54521 13.357C8.71693 13.4142 8.80499 13.4979 8.78298 13.6872C8.76977 13.7885 8.77857 13.8942 8.78298 13.9998C8.78738 14.3124 9.01193 14.5414 9.30694 14.5458C9.59313 14.5502 9.82649 14.3124 9.8397 14.0086C9.8441 13.9118 9.8397 13.8105 9.8397 13.7136C9.8397 13.4495 9.8397 13.4495 10.0863 13.3614C11.6361 12.811 12.1865 10.9309 11.1694 9.64964C10.7027 9.05964 10.0775 8.76463 9.32455 8.74702C8.60245 8.72941 8.03006 8.19224 7.99483 7.50096C7.95961 6.77887 8.51879 6.14923 9.22768 6.11401C9.9762 6.07438 10.597 6.63797 10.6278 7.38648C10.6411 7.73873 10.8612 7.96768 11.1738 7.95888C11.4776 7.95007 11.7066 7.6947 11.6758 7.35126C11.6537 7.10029 11.6141 6.84491 11.5305 6.61155C11.2663 5.89386 10.7555 5.41393 10.029 5.17176C9.89254 5.12773 9.8309 5.05728 9.8397 4.91198C9.84851 4.78429 9.8441 4.66101 9.8397 4.53332C9.8309 4.23392 9.60634 4.00936 9.31574 4.00496C9.03835 4.00056 8.80499 4.22511 8.78738 4.51131C8.77857 4.63019 8.77417 4.75347 8.78738 4.87235C8.80499 5.05288 8.72133 5.13654 8.55402 5.18937C7.35639 5.58565 6.68273 6.86252 7.03057 8.07336C7.32117 9.08605 8.22379 9.78173 9.28492 9.80375C10.051 9.81696 10.6278 10.3761 10.6322 11.1114Z"
                fill="#194D79"
              />
            </svg>
          </div>
          <p className="text-base font-light leading-relaxed text-sky-900">
            $100,000 - $130,000
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M0.756836 12.5719C0.756836 10.7219 0.756836 8.87199 0.756836 7.01768C0.774288 7.02205 0.787377 7.02205 0.80483 7.02641C3.38776 7.88593 5.9707 8.74546 8.54927 9.60934C8.9245 9.73587 9.29099 9.74024 9.66622 9.61807C12.2099 8.76727 14.7579 7.92084 17.3016 7.0744C17.3539 7.05695 17.4107 7.0395 17.4674 7.02205C17.4717 7.05695 17.4761 7.0744 17.4761 7.09185C17.4761 8.8589 17.4805 10.6303 17.4674 12.3973C17.4674 12.6417 17.4019 12.8991 17.2972 13.1216C16.9307 13.8895 16.3024 14.2516 15.4516 14.2473C11.2326 14.2429 7.01784 14.2473 2.79875 14.2473C2.72458 14.2473 2.64604 14.2473 2.57187 14.2429C1.7647 14.2124 1.04044 13.6365 0.826645 12.8555C0.80483 12.7638 0.783014 12.6679 0.756836 12.5719ZM0.756836 5.90946C0.769925 5.91819 0.787377 5.92692 0.800467 5.93128C3.5012 6.83007 6.20194 7.73322 8.90704 8.62329C9.0423 8.66692 9.21246 8.66256 9.34771 8.61893C12.0135 7.73759 14.6794 6.84752 17.3452 5.96182C17.4543 5.92692 17.4805 5.87456 17.4805 5.76548C17.4761 5.31172 17.4761 4.86233 17.4761 4.40857C17.4761 3.22618 16.6602 2.40592 15.4778 2.40592C14.3521 2.40592 13.2265 2.40592 12.0964 2.40592C12.0354 2.40592 11.9699 2.40592 11.9001 2.40592C11.9001 2.17904 11.9045 1.98707 11.9001 1.79073C11.8957 1.67293 11.8957 1.55076 11.8739 1.43296C11.7343 0.765408 11.1933 0.320375 10.4952 0.316012C9.57459 0.307286 8.65399 0.311649 7.73338 0.316012C7.63739 0.316012 7.53704 0.324738 7.44105 0.342191C6.79096 0.481809 6.35029 1.00974 6.33283 1.67293C6.32411 1.90853 6.33283 2.1485 6.33283 2.40156C6.24557 2.40156 6.18013 2.40156 6.11468 2.40156C4.97156 2.40156 3.82843 2.39719 2.68531 2.40156C1.82142 2.41465 1.09716 2.94258 0.844097 3.75411C0.809193 3.86319 0.783014 3.97226 0.756836 4.08134C0.756836 4.69217 0.756836 5.303 0.756836 5.90946ZM7.72902 1.72092C8.64962 1.72092 9.57023 1.72092 10.5039 1.72092C10.5039 1.94344 10.5039 2.16159 10.5039 2.3972C9.58332 2.3972 8.66708 2.3972 7.72902 2.3972C7.72902 2.16595 7.72902 1.95216 7.72902 1.72092Z"
                fill="#194D79"
              />
            </svg>
          </div>
          <p className="text-base font-light leading-relaxed text-sky-900">
            Full time
          </p>
        </div>
      </div>
      <ul className="my-6 list-disc space-y-2 pl-5">
        <li className="text-base font-light leading-relaxed text-black">
          Massa fringilla quam pretium adipiscing in non tellus. Turpis quis
          turpis sit euismod lobortis sapien rhoncus condimentum dolor.
        </li>
        <li className="text-base font-light leading-relaxed text-black">
          Massa fringilla quam pretium adipiscing in non tellus.
        </li>
        <li className="text-base font-light leading-relaxed text-black">
          Massa fringilla quam pretium.
        </li>
      </ul>
      <div className="flex items-center justify-between gap-5">
        <Badge className="flex items-center gap-2 px-3 py-2">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M8.21412 16.3537C3.96302 16.3758 0.442585 12.8819 0.424872 8.63083C0.40716 4.30446 3.8656 0.819444 8.20084 0.792874C12.4519 0.766305 15.9768 4.27789 15.9901 8.55555C16.0078 12.8509 12.5316 16.3359 8.21412 16.3537ZM7.50118 9.39692C7.43475 9.30835 7.40818 9.25078 7.3639 9.21093C6.8768 8.7194 6.38526 8.23229 5.89816 7.74519C5.69446 7.54149 5.45091 7.45735 5.17193 7.53706C4.64054 7.68762 4.48555 8.32528 4.88409 8.72825C5.55718 9.40577 6.2347 10.0833 6.91222 10.7564C7.31076 11.1549 7.68716 11.1549 8.09013 10.7564C8.94921 9.8973 9.80828 9.03823 10.6674 8.17915C10.9508 7.89575 11.2297 7.61677 11.5131 7.33336C11.7168 7.12524 11.7833 6.88168 11.6991 6.60271C11.5353 6.08017 10.9021 5.94733 10.4991 6.3503C9.54259 7.30236 8.59052 8.25443 7.63845 9.21093C7.59417 9.25078 7.5676 9.30835 7.50118 9.39692Z"
              fill="white"
            />
          </svg>
          <p>Actively Hiring</p>
        </Badge>
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M17.1117 8.59741C17.0301 9.9893 16.6692 11.2394 16.0334 12.3134C15.3933 13.396 14.4654 14.311 13.284 15.0242C11.9608 15.8232 10.5776 16.2313 9.18137 16.2313C8.03864 16.2313 6.86585 15.9564 5.69735 15.4194C4.60617 14.9168 3.66536 14.1349 2.89638 13.0867C2.61715 12.7043 2.67299 12.2361 3.02956 11.974C3.38612 11.7077 3.85009 11.7936 4.13362 12.1673C5.14317 13.512 6.47492 14.3239 8.0859 14.5731C11.136 15.0456 14.0358 13.396 15.1356 10.5564C16.2912 7.57497 15.1141 4.2456 12.3389 2.63032C9.79139 1.15681 6.3804 1.68951 4.40426 3.88474C3.72121 4.64513 3.23576 5.51291 2.96512 6.4752C3.24006 6.36781 3.55367 6.42795 3.77276 6.64275C3.92312 6.78881 4.00474 6.97783 4.00474 7.17974C4.00474 7.39024 3.91882 7.59215 3.75987 7.7554C3.41619 8.10337 2.96082 8.55874 2.49256 9.01841C2.31643 9.19454 2.09304 9.27617 1.86535 9.25469C1.64197 9.23321 1.44435 9.11292 1.30688 8.91101C1.04053 8.52008 0.774182 8.12055 0.520721 7.73821C0.439098 7.61363 0.353179 7.48475 0.271555 7.36017C0.241484 7.31721 0.220004 7.27425 0.198524 7.23559C0.189932 7.2227 0.18134 7.20552 0.172748 7.19263L0.146973 7.13249V6.74585L0.177044 6.69C0.42621 6.21745 0.812846 6.04561 1.21237 6.23033C1.2854 6.2647 1.34984 6.31196 1.40569 6.36351C2.17896 3.38641 4.06918 1.43175 7.0205 0.546786C8.49831 0.104302 10.0835 0.130078 11.6043 0.628409C13.1165 1.12244 14.4224 2.02889 15.3847 3.25324C16.6434 4.85133 17.2234 6.65134 17.1117 8.59741ZM9.66681 3.89763C9.66681 3.42508 9.34461 3.0814 8.89783 3.0771H8.89354C8.68733 3.0771 8.49831 3.15443 8.35654 3.2919C8.20619 3.44226 8.12027 3.65276 8.12027 3.88904C8.12027 4.48188 8.12027 5.07472 8.12027 5.66756V5.81792C8.12027 6.69 8.12027 7.56638 8.12027 8.43846C8.12027 8.73917 8.24485 8.98404 8.48972 9.16447C8.91931 9.47808 9.34891 9.80457 9.76991 10.1182C9.92457 10.2342 10.0835 10.3545 10.2382 10.4704C10.3713 10.5692 10.5045 10.6724 10.642 10.7712C10.9255 10.9817 11.2048 11.1965 11.4883 11.4027C11.6344 11.5144 11.7933 11.5659 11.9566 11.5659C12.094 11.5659 12.2315 11.5272 12.3604 11.4456C12.631 11.2824 12.7642 10.9945 12.7169 10.6681C12.6783 10.3974 12.5021 10.2299 12.3475 10.1139C12.021 9.86901 11.6945 9.62414 11.3723 9.37497L11.2606 9.29335C10.7322 8.89383 10.2081 8.4986 9.6797 8.09908C9.67111 8.09048 9.66681 8.08619 9.66251 8.08619C9.66251 8.08189 9.66251 8.0776 9.66251 8.069C9.66681 7.54919 9.66681 7.01649 9.66681 6.50528C9.66681 6.33344 9.66681 6.1616 9.66681 5.98547V5.34966C9.66681 4.86852 9.66681 4.38307 9.66681 3.89763Z"
              fill="#828282"
            />
          </svg>
          <p className="text-sm font-light text-zinc-500">
            Updated 8 hours ago
          </p>
        </div>
      </div>
    </Card>
  )
}
