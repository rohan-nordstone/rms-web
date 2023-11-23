"use client"

import React from "react"
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Textarea,
  cn,
  useDisclosure,
} from "@nextui-org/react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios, { isAxiosError } from "axios"
import { useSession } from "next-auth/react"
import { toast } from "sonner"

type Props = {
  news_id: number | undefined
}

export default function ReportPopupModal({ news_id }: Props) {
  const { data: session } = useSession()
  const queryClient = useQueryClient()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState("opaque")
  const [reasonValue, setReasonValue] = React.useState<string>("")
  const [isReasonInvalid, setIsReasonInvalid] = React.useState(
    reasonValue.length < 10 || reasonValue.length > 256
  )

  const getIsReported = async (news_id: number | undefined) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.token}`,
      }

      // http://localhost:5000/news/1/isNewsReported
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${news_id}/isNewsReported`
      const response = await fetch(url, {
        cache: "no-store",
        method: "GET",
        headers: headers,
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.log("IsReported", errorData.message)
        return false
      }

      const data = (await response.json()) as boolean
      return data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const reportSubmitHandler = async (reason: string) => {
    // Accept 'reason' as an argument
    try {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session?.token}`
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/news/${news_id}/report`
      const { data } = await axios.post<boolean>(url, {
        reason: reason, // Use 'reason' from the argument
      })
      console.log("data", data)
      return data
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.response?.data.message)
      }
      return null
    }
  }

  const reportMutation = useMutation({
    mutationFn: (reason: string) => reportSubmitHandler(reason), // Pass 'reason' to 'reportSubmitHandler'
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["news/reported", news_id],
      })
    },
    onError: () => {
      toast.error("Mutation failed")
    },
  })

  const {
    data: isReported,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["news/reported", news_id],
    queryFn: async () => await getIsReported(news_id),
    enabled: !!session?.token,
  })

  React.useEffect(() => {
    setIsReasonInvalid(reasonValue.length < 10 || reasonValue.length > 256)
  }, [reasonValue])

  const handleOpen = () => {
    setBackdrop("opaque")
    onOpen()
  }

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <div onClick={handleOpen}>
          {" "}
          {reportMutation.isPending ? (
            <Spinner size="sm" color="default" />
          ) : (
            <svg
              className={cn(
                "cursor-pointer fill-current",
                isReported ? "text-red-600" : "text-[#828282]"
              )}
              width="17"
              height="22"
              viewBox="0 0 17 22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.63036 2.88941C4.1852 2.94884 4.71363 2.95544 5.21564 3.07429C6.37157 3.35821 7.5209 3.68175 8.66362 4.0185C9.7469 4.33543 10.8236 4.66558 11.9531 4.77122C13.2741 4.89667 14.5622 4.7184 15.8238 4.30902C16.3853 4.13074 16.8674 4.45428 16.9269 5.04194C16.9335 5.13438 16.9335 5.22021 16.9335 5.31265C16.9335 8.06604 16.9335 10.826 16.9335 13.5794C16.9335 14.3784 16.7419 14.6359 15.9625 14.8736C13.9875 15.481 12.0191 15.4282 10.0573 14.7943C8.92783 14.4312 7.81153 14.0482 6.67542 13.7181C5.75067 13.4474 4.7995 13.3549 3.84173 13.4143C3.78228 13.4143 3.72944 13.4275 3.63696 13.4408C3.63696 13.5398 3.63696 13.6388 3.63696 13.7313C3.63696 15.9432 3.63696 18.1552 3.63696 20.3671C3.63696 20.5256 3.63696 20.6841 3.61054 20.8359C3.51146 21.3774 3.11514 21.7273 2.5669 21.7471C2.09792 21.7603 1.62894 21.7603 1.15996 21.7471C0.545666 21.7273 0.12953 21.3047 0.0766872 20.6775C0.0634766 20.5982 0.0634766 20.5124 0.0634766 20.4332C0.0634766 14.3784 0.0634766 8.31695 0.0634766 2.26214C0.0634766 1.35095 0.598509 0.644444 1.43739 0.439756C2.50745 0.175643 3.57751 0.967984 3.63036 2.07066C3.63696 2.34137 3.63036 2.61209 3.63036 2.88941Z" />
            </svg>
          )}
        </div>
      </div>
      <Modal size="xl" backdrop={"opaque"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Report</ModalHeader>
              <ModalBody>
                <Textarea
                  value={reasonValue}
                  onChange={(e) => {
                    setReasonValue(e.target.value)
                  }}
                  isInvalid={isReasonInvalid}
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  errorMessage={
                    isReasonInvalid
                      ? "The report reason should be at between 10 and 256 characters long."
                      : ""
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    reportMutation.mutate(reasonValue) // Pass your reason as an argument
                    setReasonValue("")
                    onClose()
                  }}
                  color="secondary"
                  onPress={onClose}
                >
                  Report
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
