import { ReactNode } from "react"
import Image from "next/image"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import RateTheStationForm from "./RateTheStationForm"

type Props = {
  children: ReactNode
}

export default function RateTheStation({ children }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="h-[95vh] max-w-[866px] overflow-y-scroll bg-white scrollbar-hide">
        <AlertDialogHeader className="text-left">
          <AlertDialogTitle>
            <div className="flex items-start justify-between pb-6">
              <div className="flex items-center gap-3">
                <Image
                  alt="station_logo"
                  width={57}
                  height={44}
                  className="h-[44px] w-[57px]"
                  src="/images/station_logo.webp"
                />
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-bold leading-[30.50px] text-sky-900">
                      KABC
                    </h4>
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M14.2764 17.6017C14.0871 17.578 13.8327 17.5603 13.5901 17.5129C13.4718 17.4892 13.4245 17.5188 13.3594 17.6135C12.5667 18.7501 11.4781 19.3125 10.0938 19.2592C8.88096 19.2119 7.92256 18.6613 7.21855 17.6727C7.1239 17.5425 7.0529 17.4951 6.88725 17.5247C4.77522 17.8918 2.82293 16.4888 2.53896 14.3636C2.48571 13.967 2.54487 13.5526 2.57445 13.15C2.58037 13.0317 2.58037 12.9725 2.47388 12.9014C0.261277 11.38 0.267193 8.26625 2.4798 6.72119C2.57445 6.65608 2.5922 6.6028 2.57445 6.49032C2.18991 4.33553 3.52694 2.42937 5.6863 2.08602C6.0945 2.02091 6.52046 2.09194 6.9405 2.11562C7.04699 2.12154 7.10615 2.12746 7.17714 2.02683C8.73898 -0.199002 11.8094 -0.204922 13.3653 2.02091C13.4304 2.11562 13.4896 2.12746 13.602 2.1097C15.7554 1.72492 17.6545 3.06278 17.9976 5.22941C18.0627 5.63196 17.9976 6.05226 17.968 6.46072C17.9562 6.58504 17.968 6.65016 18.0804 6.72711C20.2753 8.22481 20.2694 11.3978 18.0745 12.8955C17.9739 12.9665 17.9503 13.0198 17.9739 13.1441C18.3585 15.293 17.0096 17.1932 14.8503 17.5484C14.6728 17.5839 14.5012 17.5839 14.2764 17.6017ZM9.38383 10.4033C9.35425 10.4092 9.31875 10.4151 9.28917 10.4151C9.24776 10.3441 9.21226 10.2671 9.15902 10.2079C8.80405 9.84682 8.44909 9.4798 8.07638 9.13053C7.69184 8.76943 7.11798 8.78719 6.7571 9.14829C6.39622 9.5094 6.37847 10.0895 6.74527 10.4625C7.3842 11.1196 8.02905 11.7648 8.68573 12.4042C9.05844 12.7653 9.61455 12.7712 9.98726 12.4042C11.2592 11.1492 12.5193 9.88234 13.7735 8.61551C14.0279 8.36096 14.0989 8.03538 13.9983 7.69203C13.7913 6.98758 12.9453 6.78631 12.401 7.31909C11.4367 8.27217 10.4783 9.23709 9.5199 10.202C9.47257 10.2612 9.43115 10.3382 9.38383 10.4033Z"
                          fill="#89C400"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-base font-light leading-relaxed text-zinc-500">
                    TV News | Los Angeles, CA | DMA: 2
                  </p>
                </div>
              </div>
              <AlertDialogCancel>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6858 1.00117C17.8377 0.153065 16.4626 0.153067 15.6145 1.00118L9.87822 6.73745L4.14112 1.00034C3.29301 0.152231 1.91795 0.152231 1.06985 1.00034C0.221737 1.84845 0.221739 3.2235 1.06985 4.07161L6.80695 9.80872L1.06968 15.546C0.221566 16.3941 0.221567 17.7692 1.06968 18.6173C1.91778 19.4654 3.29284 19.4654 4.14095 18.6173L9.87823 12.88L15.6147 18.6164C16.4628 19.4645 17.8378 19.4645 18.6859 18.6164C19.534 17.7683 19.534 16.3933 18.6859 15.5452L12.9495 9.80872L18.6858 4.07245C19.5339 3.22434 19.5339 1.84928 18.6858 1.00117Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </AlertDialogCancel>
            </div>
            <Separator className="h-[1.5px]" />
          </AlertDialogTitle>
          <AlertDialogDescription>
            <RateTheStationForm />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-5 flex items-center gap-5">
          <AlertDialogAction className="p-0">
            <Button className="h-[46px] w-[134px]" variant={"secondary"}>
              <p className="text-center text-base font-bold leading-[33px] text-white">
                Submit
              </p>
            </Button>
          </AlertDialogAction>
          <AlertDialogCancel className="p-0">
            <Button className="h-[46px] w-[134px]" variant={"muted_outline"}>
              <p className="text-center text-base font-bold leading-[33px] text-sky-900">
                Cancel
              </p>
            </Button>
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
