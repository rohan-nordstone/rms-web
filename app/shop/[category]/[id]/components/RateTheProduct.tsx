import { ReactNode } from "react"

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

import RateTheProductForm from "./RateTheProductForm"

type Props = {
  children: ReactNode
}

export default function RateTheProduct({ children }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-h-[95vh] max-w-[866px] overflow-y-scroll bg-white scrollbar-hide">
        <AlertDialogHeader className="text-left">
          <AlertDialogTitle>
            <div className="relative">
              <h4 className="text-2xl font-bold leading-[30.50px] text-black">
                Rate this product
              </h4>
              <AlertDialogCancel className="absolute right-0 top-0">
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
          </AlertDialogTitle>
          <AlertDialogDescription>
            <RateTheProductForm />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-5 flex items-center gap-5">
          <AlertDialogAction className="p-0">
            <Button
              className="min-h-[46px] min-w-[134px]"
              variant={"secondary"}
            >
              <p className="text-center text-base font-bold leading-[33px]">
                Submit
              </p>
            </Button>
          </AlertDialogAction>
          <AlertDialogCancel className="p-0">
            <Button
              className="min-h-[46px] min-w-[134px]"
              variant={"secondary_outline"}
            >
              <p className="text-center text-base font-bold leading-[33px]">
                Cancel
              </p>
            </Button>
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
