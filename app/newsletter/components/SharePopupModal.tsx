"use client"

import React, { ReactNode } from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  Snippet,
  useDisclosure,
} from "@nextui-org/react"

import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  className?: string
  targetUrl?: string
}

export default function SharePopupModal({
  children,
  targetUrl,
  className,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState("opaque")
  const [url, setUrl] = React.useState(targetUrl || window.location.href)

  const handleOpen = () => {
    setBackdrop("opaque")
    onOpen()
  }

  return (
    <div className={className ?? className}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          handleOpen()
        }}
      >
        {children}
      </div>
      <Modal size="xl" backdrop={"opaque"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Share</ModalHeader>
              <Snippet hideSymbol={true} className="m-5">
                {url}
              </Snippet>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
