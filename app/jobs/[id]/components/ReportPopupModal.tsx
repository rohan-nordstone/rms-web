"use client"

import { useEffect, useState } from "react"
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

import useIsJobReported from "../../hooks/useIsJobReported"
import useJobReportMutation from "../../hooks/useJobReportMutation"

type Props = {
  job_id: number | undefined
}

export default function ReportPopupModal({ job_id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = useState("opaque")
  const [reasonValue, setReasonValue] = useState<string>("")
  const [isReasonInvalid, setIsReasonInvalid] = useState(
    reasonValue.length < 10 || reasonValue.length > 256
  )

  const handleOpen = () => {
    setBackdrop("opaque")
    onOpen()
  }

  const { mutate, isPending } = useJobReportMutation(job_id)

  const { isReported, isLoading, isError, error } = useIsJobReported(job_id)

  useEffect(() => {
    setIsReasonInvalid(reasonValue.length < 10 || reasonValue.length > 256)
  }, [reasonValue])

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <div
          onClick={handleOpen}
          className={cn(
            "flex cursor-pointer items-center gap-1 rounded-lg bg-white p-2 font-bold",
            isReported ? "text-warning" : "text-muted-foreground"
          )}
        >
          {isPending ? (
            <Spinner size="sm" color="default" />
          ) : isReported ? (
            <div>
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline-block"
              >
                <path
                  d="M3.59389 2.58948C4.11295 2.64507 4.60731 2.65125 5.07694 2.76243C6.15833 3.02805 7.23354 3.33072 8.30258 3.64575C9.316 3.94225 10.3232 4.2511 11.3799 4.34994C12.6158 4.4673 13.8208 4.30052 15.001 3.91754C15.5263 3.75076 15.9774 4.05344 16.033 4.6032C16.0392 4.68967 16.0392 4.76998 16.0392 4.85645C16.0392 7.43229 16.0392 10.0143 16.0392 12.5901C16.0392 13.3375 15.86 13.5785 15.1308 13.8008C13.2832 14.3691 11.4417 14.3197 9.60643 13.7267C8.54975 13.387 7.50544 13.0287 6.44258 12.7198C5.57747 12.4666 4.68764 12.3801 3.79163 12.4357C3.73601 12.4357 3.68658 12.4481 3.60007 12.4604C3.60007 12.5531 3.60007 12.6457 3.60007 12.7322C3.60007 14.8015 3.60007 16.8708 3.60007 18.9401C3.60007 19.0884 3.60007 19.2366 3.57535 19.3787C3.48266 19.8852 3.11189 20.2126 2.59901 20.2311C2.16027 20.2435 1.72153 20.2435 1.2828 20.2311C0.708114 20.2126 0.318813 19.8173 0.269378 19.2305C0.257019 19.1563 0.257019 19.076 0.257019 19.0019C0.257019 13.3375 0.257019 7.66701 0.257019 2.00266C0.257019 1.15022 0.757549 0.489279 1.54233 0.29779C2.54339 0.0507083 3.54445 0.791954 3.59389 1.82352C3.60007 2.07678 3.59389 2.33004 3.59389 2.58948Z"
                  fill="#eb5757"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline-block"
              >
                <path
                  d="M3.59389 2.58948C4.11295 2.64507 4.60731 2.65125 5.07694 2.76243C6.15833 3.02805 7.23354 3.33072 8.30258 3.64575C9.316 3.94225 10.3232 4.2511 11.3799 4.34994C12.6158 4.4673 13.8208 4.30052 15.001 3.91754C15.5263 3.75076 15.9774 4.05344 16.033 4.6032C16.0392 4.68967 16.0392 4.76998 16.0392 4.85645C16.0392 7.43229 16.0392 10.0143 16.0392 12.5901C16.0392 13.3375 15.86 13.5785 15.1308 13.8008C13.2832 14.3691 11.4417 14.3197 9.60643 13.7267C8.54975 13.387 7.50544 13.0287 6.44258 12.7198C5.57747 12.4666 4.68764 12.3801 3.79163 12.4357C3.73601 12.4357 3.68658 12.4481 3.60007 12.4604C3.60007 12.5531 3.60007 12.6457 3.60007 12.7322C3.60007 14.8015 3.60007 16.8708 3.60007 18.9401C3.60007 19.0884 3.60007 19.2366 3.57535 19.3787C3.48266 19.8852 3.11189 20.2126 2.59901 20.2311C2.16027 20.2435 1.72153 20.2435 1.2828 20.2311C0.708114 20.2126 0.318813 19.8173 0.269378 19.2305C0.257019 19.1563 0.257019 19.076 0.257019 19.0019C0.257019 13.3375 0.257019 7.66701 0.257019 2.00266C0.257019 1.15022 0.757549 0.489279 1.54233 0.29779C2.54339 0.0507083 3.54445 0.791954 3.59389 1.82352C3.60007 2.07678 3.59389 2.33004 3.59389 2.58948Z"
                  fill="#828282"
                />
              </svg>
            </div>
          )}
          {isReported ? "Reported" : "Report"}
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
                    mutate(reasonValue)
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
