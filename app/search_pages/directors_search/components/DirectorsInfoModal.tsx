import { ReactNode } from "react"
import Image from "next/image"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

type Props = {
  children: ReactNode
}

const contacts = [
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto my-4"
      >
        <path
          id="Vector"
          d="M5.28722 0.0673828C5.78098 0.177106 6.25645 0.323405 6.65267 0.658671C6.70753 0.707438 6.76849 0.750108 6.81726 0.798874C7.93888 1.92049 9.06659 3.03602 10.1821 4.16373C11.0111 5.00495 11.1513 6.15705 10.5722 7.11408C10.3101 7.54688 9.93829 7.85167 9.46282 8.02235C8.774 8.27227 8.24367 8.69288 7.94497 9.37561C7.74991 9.83279 7.71943 10.2961 7.84744 10.7776C8.18271 12.0334 8.87153 13.0879 9.71274 14.0511C10.7185 15.2092 11.8706 16.1907 13.2605 16.8734C13.8396 17.1599 14.437 17.4037 15.1075 17.3123C15.9914 17.1904 16.668 16.7576 17.0155 15.9164C17.241 15.3616 17.5214 14.8679 18.0578 14.5509C18.9295 14.0389 20.0329 14.1059 20.7826 14.7886C21.4654 15.4104 22.1115 16.0809 22.7638 16.7393C23.3611 17.3367 23.9829 17.9158 24.5376 18.5558C25.2386 19.3544 25.2569 20.6101 24.6413 21.4757C24.5132 21.6525 24.373 21.8231 24.2206 21.9755C23.5623 22.64 22.8857 23.2861 22.2395 23.9689C21.5507 24.6943 20.7034 25.0112 19.7342 25.0539C18.6918 25.0966 17.6982 24.8649 16.7229 24.5358C14.8027 23.8835 13.0715 22.8777 11.4317 21.7073C8.71304 19.7628 6.3296 17.4647 4.28142 14.8313C2.76967 12.8929 1.47737 10.8203 0.678829 8.47953C0.33137 7.46154 0.0936358 6.41307 0.148498 5.32193C0.197264 4.37099 0.508148 3.53587 1.22135 2.86534C1.81874 2.29843 2.39783 1.71933 2.96474 1.12195C3.46459 0.597714 4.00711 0.164915 4.7508 0.0673828C4.92757 0.0673828 5.10435 0.0673828 5.28722 0.0673828Z"
          fill="#194D79"
        />
      </svg>
    ),
    title: "Email",
    details: "email@address.com",
  },
  {
    icon: (
      <svg
        width="31"
        height="23"
        viewBox="0 0 31 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto my-4"
      >
        <path
          id="Vector"
          d="M0.765625 6.28997C2.65093 7.4509 4.5448 8.61182 6.4301 9.77274C9.1295 11.4362 11.8375 13.0996 14.5369 14.7803C15.2567 15.2308 15.9337 15.2221 16.6536 14.7803C21.1354 12.0079 25.6173 9.25292 30.1078 6.48924C30.202 6.42859 30.3049 6.36795 30.4591 6.28131C30.4591 6.41993 30.4591 6.52389 30.4591 6.61919C30.4591 10.2666 30.4591 13.9053 30.4591 17.5527C30.4591 20.2384 28.5652 22.153 25.883 22.153C19.5586 22.153 13.2257 22.153 6.90142 22.153C6.0616 22.153 5.21322 22.1877 4.39054 22.0577C2.52238 21.7718 1.10841 20.2644 0.825612 18.4017C0.817042 18.3497 0.791334 18.2977 0.765625 18.2457C0.765625 14.2605 0.765625 10.2752 0.765625 6.28997ZM5.29892 0.0348563C3.21652 0.0435199 1.51118 1.30841 0.971294 3.23172C0.911307 3.43965 0.945585 3.54361 1.12555 3.65624C5.89878 6.58454 10.6635 9.5215 15.4195 12.4585C15.5738 12.5538 15.6852 12.5451 15.8309 12.4498C16.405 12.0859 16.9792 11.7307 17.5619 11.3755C21.7182 8.80242 25.8744 6.23799 30.0392 3.67357C30.2534 3.54361 30.322 3.41366 30.2192 3.18841C30.0992 2.91117 30.0221 2.61661 29.8678 2.3567C29.0023 0.805917 27.6654 0.0435199 25.9001 0.0348563C22.4723 0.0261927 19.0445 0.0348563 15.6081 0.0348563C12.1717 0.0348563 8.7353 0.0348563 5.29892 0.0348563Z"
          fill="#194D79"
        />
      </svg>
    ),
    title: "Phone",
    details: "1234 - 33341413",
  },
  {
    icon: (
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto my-4"
      >
        <path
          id="Vector"
          d="M0.679688 15.433C0.679688 14.8941 0.679688 14.3445 0.679688 13.8056C0.700832 13.7105 0.711404 13.6153 0.732548 13.5202C0.817124 12.9179 0.869984 12.3155 0.996848 11.7237C1.72632 8.38418 3.43898 5.6365 6.16656 3.57574C9.56017 1.00772 13.3767 0.151714 17.542 1.01829C20.8722 1.71578 23.5787 3.4595 25.6508 6.15434C27.892 9.06053 28.8224 12.3683 28.4735 16.0143C28.188 18.9627 27.0463 21.573 25.0799 23.8029C22.9232 26.2441 20.2379 27.7659 17.024 28.3366C16.4954 28.4317 15.9668 28.4845 15.4382 28.5585C14.899 28.5585 14.3493 28.5585 13.8101 28.5585C13.7361 28.5479 13.6727 28.5162 13.5987 28.5162C11.4208 28.3577 9.38045 27.7342 7.51978 26.6034C3.91472 24.3947 1.68403 21.2032 0.912272 17.0394C0.79598 16.4898 0.753692 15.9614 0.679688 15.433ZM19.9525 11.2692C20.1533 13.5202 20.1428 15.7289 19.9525 17.9588C21.6968 18.2336 23.3778 18.614 25.0164 19.3009C26.3485 16.1622 26.3485 13.0552 25.0164 9.92711C23.3778 10.614 21.6968 10.9945 19.9525 11.2692ZM9.27473 11.2692C7.53035 10.9945 5.8494 10.614 4.25303 9.94825C2.89981 12.1358 2.91038 17.4621 4.2636 19.2904C5.85997 18.6246 7.55149 18.2441 9.27473 17.9694C9.08443 15.7289 9.08443 13.5202 9.27473 11.2692ZM11.7909 17.6312C13.6938 17.6312 15.5651 17.6312 17.4363 17.6312C17.6055 15.6233 17.6055 13.5942 17.4363 11.6074C15.5334 11.6074 13.6727 11.6074 11.7909 11.6074C11.6217 13.6153 11.6217 15.6233 11.7909 17.6312ZM17.1192 9.02883C17.098 8.91258 17.0769 8.83861 17.0663 8.7752C16.8126 7.43306 16.4954 6.1015 15.914 4.85447C15.6708 4.32607 15.3959 3.81881 14.9519 3.41723C14.6876 3.17416 14.529 3.17416 14.2753 3.41723C14.0956 3.58631 13.937 3.77654 13.8101 3.97733C12.8269 5.50969 12.4569 7.25341 12.1186 9.02883C13.789 9.15565 15.4382 9.15565 17.1192 9.02883ZM12.0975 20.1675C12.1609 20.4951 12.2137 20.7593 12.2666 21.0129C12.5309 22.3656 12.9009 23.6972 13.5775 24.902C13.7784 25.2507 14.0533 25.5572 14.3176 25.8636C14.4867 26.0539 14.7087 26.0539 14.8885 25.8636C15.0682 25.6734 15.2585 25.4832 15.4065 25.2718C16.0302 24.3419 16.3791 23.2956 16.6646 22.2283C16.8337 21.573 16.9712 20.8967 17.1297 20.1675C15.4382 20.1675 13.789 20.1675 12.0975 20.1675ZM5.53224 7.73954C6.86431 8.2468 8.20696 8.5427 9.5496 8.74349C9.75047 7.88749 9.90905 7.06318 10.1416 6.24945C10.3636 5.43571 10.6597 4.65368 10.9345 3.83994C8.7567 4.60084 6.97003 5.9007 5.53224 7.73954ZM5.53224 21.4991C6.95946 23.3485 8.74613 24.6378 10.9874 25.4198C10.2685 23.8029 9.87733 22.1754 9.58132 20.4845C8.19638 20.6959 6.85374 20.9918 5.53224 21.4991ZM18.2292 25.4198C20.4705 24.6378 22.2572 23.3379 23.6844 21.4991C22.3523 20.9918 21.0202 20.6959 19.6353 20.4845C19.3393 22.1754 18.9481 23.8135 18.2292 25.4198ZM18.2927 3.83994C18.5675 4.66425 18.853 5.44628 19.075 6.24945C19.3076 7.06318 19.4661 7.89806 19.667 8.74349C21.0202 8.53214 22.3734 8.2468 23.6844 7.72897C22.2572 5.9007 20.4705 4.60084 18.2927 3.83994Z"
          fill="#194D79"
        />
      </svg>
    ),
    title: "Website",
    details: "socialmedialink.com",
  },
  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto my-4"
      >
        <path
          id="Vector"
          d="M14.1202 24.8135C12.407 24.8135 10.7259 24.8135 9.02071 24.8135C9.02071 19.344 9.02071 13.8745 9.02071 8.38085C10.6294 8.38085 12.2461 8.38085 13.9111 8.38085C13.9111 9.1128 13.9111 9.8367 13.9111 10.5686C14.265 10.1584 14.5626 9.74018 14.9245 9.39432C15.8254 8.54172 16.9273 8.10738 18.1499 7.99477C19.2036 7.89825 20.2573 7.97064 21.2788 8.29238C22.976 8.82324 23.9814 10.0137 24.4801 11.6867C24.8098 12.7886 24.9305 13.9308 24.9385 15.0729C24.9627 18.2581 24.9546 21.4352 24.9546 24.6204C24.9546 24.6606 24.9466 24.7008 24.9385 24.7652C23.2494 24.7652 21.5603 24.7652 19.831 24.7652C19.831 24.6445 19.831 24.5319 19.831 24.4113C19.831 21.6926 19.839 18.974 19.823 16.2553C19.823 15.6842 19.7667 15.1132 19.6621 14.5501C19.3484 12.861 18.2545 12.2738 16.67 12.4669C15.2463 12.6438 14.4661 13.4803 14.2489 15.0327C14.1685 15.5958 14.1363 16.1749 14.1283 16.7379C14.1122 19.3037 14.1202 21.8776 14.1202 24.4435C14.1202 24.5561 14.1202 24.6767 14.1202 24.8135ZM5.77924 8.37281C4.07404 8.37281 2.39298 8.37281 0.703873 8.37281C0.703873 13.8584 0.703873 19.3359 0.703873 24.8135C2.40907 24.8135 4.09013 24.8135 5.77924 24.8135C5.77924 19.3118 5.77924 13.8423 5.77924 8.37281ZM3.2134 0.152488C1.59669 0.168575 0.269531 1.50377 0.269531 3.11245C0.269531 4.75329 1.62886 6.11262 3.25362 6.10458C4.87034 6.09654 6.19749 4.73721 6.18945 3.1044C6.18141 1.46356 4.84621 0.136402 3.2134 0.152488Z"
          fill="#194D79"
        />
      </svg>
    ),
    title: "Linkedin",
    details: "socialmedialink.com",
  },
  {
    icon: (
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto my-4"
      >
        <path
          id="Vector"
          d="M27.0221 3.35349C26.0248 3.8091 24.9621 4.11109 23.8541 4.25772C24.9939 3.549 25.8638 2.4353 26.2728 1.09292C25.2101 1.75276 24.0368 2.21884 22.7864 2.47894C21.7773 1.36 20.3391 0.666992 18.7702 0.666992C15.7263 0.666992 13.2757 3.24003 13.2757 6.39435C13.2757 6.84821 13.3126 7.28461 13.4031 7.70007C8.83212 7.4679 4.78749 5.18638 2.07039 1.71087C1.59603 2.56796 1.31779 3.549 1.31779 4.6051C1.31779 6.58811 2.29836 8.34594 3.75999 9.36364C2.87664 9.34618 2.01005 9.0791 1.27588 8.65841C1.27588 8.67587 1.27588 8.69856 1.27588 8.72125C1.27588 11.5038 3.18171 13.8149 5.6809 14.3474C5.23336 14.4748 4.74559 14.5359 4.23938 14.5359C3.88738 14.5359 3.53203 14.5149 3.19847 14.4381C3.91085 16.7057 5.93233 18.3727 8.33597 18.4269C6.46535 19.9508 4.0902 20.869 1.51893 20.869C1.06804 20.869 0.635581 20.848 0.203125 20.7904C2.63862 22.4261 5.52501 23.36 8.63769 23.36C18.7551 23.36 24.2866 14.6319 24.2866 7.06641C24.2866 6.8133 24.2782 6.56891 24.2664 6.32627C25.3576 5.5198 26.2745 4.51258 27.0221 3.35349Z"
          fill="#194D79"
        />
      </svg>
    ),
    title: "Twitter",
    details: "socialmedialink.com",
  },
  {
    icon: (
      <svg
        width="13"
        height="28"
        viewBox="0 0 13 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto my-4"
      >
        <path
          id="Vector"
          d="M12.1275 0.801087L9.26596 0.795502C6.05113 0.795502 3.97357 3.38841 3.97357 7.40162V10.4475H1.09643C0.847813 10.4475 0.646484 10.6927 0.646484 10.9951V15.4082C0.646484 15.7107 0.848043 15.9556 1.09643 15.9556H3.97357V27.0912C3.97357 27.3937 4.1749 27.6386 4.42352 27.6386H8.17736C8.42598 27.6386 8.62731 27.3934 8.62731 27.0912V15.9556H11.9914C12.24 15.9556 12.4413 15.7107 12.4413 15.4082L12.4427 10.9951C12.4427 10.8499 12.3952 10.7108 12.3109 10.6081C12.2267 10.5053 12.1119 10.4475 11.9925 10.4475H8.62731V7.86547C8.62731 6.62445 8.87042 5.99444 10.1994 5.99444L12.127 5.9936C12.3754 5.9936 12.5767 5.74841 12.5767 5.44626V1.34843C12.5767 1.04655 12.3756 0.801645 12.1275 0.801087Z"
          fill="#194D79"
        />
      </svg>
    ),
    title: "Facebook",
    details: "socialmedialink.com",
  },
]

export default function ContactInfoModal({ children }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="h-[95vh] max-w-[866px] overflow-y-scroll bg-white scrollbar-hide">
        <AlertDialogHeader className="text-left">
          <AlertDialogTitle>
            <div className="flex justify-between">
              <div className="flex flex-1 items-center gap-6 pr-10">
                <Image
                  className="h-[74px] w-[74px] rounded-[13px]"
                  alt="avatar"
                  width={74}
                  height={74}
                  src="https://via.placeholder.com/74x74"
                />
                <div>
                  <p className="text-[26px] font-bold leading-relaxed text-black">
                    Brooklyn Simmons
                  </p>
                  <p className="text-base font-light leading-relaxed text-zinc-500">
                    News Director
                  </p>
                </div>
                <Button
                  className="ml-auto min-h-[47px] min-w-[187px] rounded-[10px]"
                  variant={"secondary"}
                >
                  See Profile
                </Button>
              </div>
              <div>
                <AlertDialogCancel>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2522 0.636916C17.4041 -0.211193 16.029 -0.211191 15.1809 0.636918L9.44463 6.37319L3.70752 0.636082C2.85942 -0.212027 1.48436 -0.212027 0.636252 0.636081C-0.211857 1.48419 -0.211855 2.85925 0.636254 3.70736L6.37336 9.44446L0.636082 15.1817C-0.212027 16.0298 -0.212027 17.4049 0.636081 18.253C1.48419 19.1011 2.85925 19.1011 3.70736 18.253L9.44463 12.5157L15.1811 18.2522C16.0292 19.1003 17.4042 19.1003 18.2523 18.2522C19.1005 17.4041 19.1005 16.029 18.2523 15.1809L12.5159 9.44446L18.2522 3.70819C19.1003 2.86008 19.1003 1.48502 18.2522 0.636916Z"
                      fill="#828282"
                    />
                  </svg>
                </AlertDialogCancel>
              </div>
            </div>
            <Separator className="my-8 border-stone-300" />
            <p className="mb-8 text-[26px] font-medium leading-relaxed text-black">
              Contact Info
            </p>
            <div className="space-y-11">
              {contacts.map((contact, index) => (
                <div key={index} className="flex gap-5">
                  <div className="h-[57px] w-[57px] rounded-[9px] bg-zinc-100">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-[22px] font-bold leading-[30.50px] text-black">
                      {contact.title}
                    </p>
                    <p className="text-xl font-light text-lime-500">
                      {contact.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-8 border-stone-300" />
            <p className="mb-8 text-[26px] font-medium leading-relaxed text-black">
              Work History
            </p>
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Image
                  className="h-9 w-[46px]"
                  width={46}
                  height={36}
                  alt="news_station"
                  src="/images/station_logo.webp"
                />
                <div>
                  <p className="text-lg font-semibold leading-relaxed text-black">
                    Office Name
                  </p>
                  <p className="text-sm font-light leading-relaxed text-neutral-500">
                    14 months
                  </p>
                </div>
              </div>
              <ol className="relative ml-7 border-l border-gray-200 pl-7 dark:border-gray-700">
                <li className="mb-5 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold leading-relaxed text-sky-900">
                      Job Title (Current)
                    </p>
                    <time className="text-right text-base font-medium leading-relaxed text-lime-500">
                      Oct 2021 - Apr 2022
                    </time>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-light leading-relaxed text-zinc-500">
                      Fulltime
                    </p>
                    <p className="text-sm font-light leading-relaxed text-zinc-500">
                      7 months
                    </p>
                  </div>
                </li>
                <li className="mb-5 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold leading-relaxed text-sky-900">
                      Job Title (Past)
                    </p>
                    <time className="text-right text-base font-medium leading-relaxed text-lime-500">
                      Feb 2021 - Apr 2022
                    </time>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-light leading-relaxed text-zinc-500">
                      Fulltime
                    </p>
                    <p className="text-sm font-light leading-relaxed text-zinc-500">
                      3 months
                    </p>
                  </div>
                </li>
              </ol>
              <div className="mb-5 flex items-center gap-3">
                <Image
                  className="h-9 w-[46px]"
                  width={46}
                  height={36}
                  alt="news_station"
                  src="/images/station_logo.webp"
                />
                <div>
                  <p className="text-lg font-semibold leading-relaxed text-black">
                    Office Name
                  </p>
                  <p className="text-sm font-light leading-relaxed text-neutral-500">
                    7 months
                  </p>
                </div>
              </div>
              <ol className="relative ml-7 border-l border-gray-200 pl-7 dark:border-gray-700">
                <li className="mb-5 ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold leading-relaxed text-sky-900">
                      Job Title (Current)
                    </p>
                    <time className="text-right text-base font-medium leading-relaxed text-lime-500">
                      Oct 2021 - Apr 2022
                    </time>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-light leading-relaxed text-zinc-500">
                      Fulltime
                    </p>
                    <p className="text-sm font-light leading-relaxed text-zinc-500">
                      7 months
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}
