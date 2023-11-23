"use client"

import React, { ReactNode, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import moment from "moment"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

import MessageAccordion from "./components/MessageAccordion"

function getRandomTimestamp(now: Date) {
  const seconds = Math.floor(Math.random() * now.getTime())

  const timestamp = new Date(seconds)

  const time = moment(timestamp).format("h:mm A")

  return time
}

export default function page() {
  const searchParams = useSearchParams()

  const id = searchParams.get("id")

  const [value, setValue] = useState("")

  const [messages, setMessages] = useState([
    {
      sender: "other",
      message: "It's over Anakin",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "I have the high ground.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "you",
      message: "You underestimate my power!",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "You were the chosen one!",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "you",
      message: "I hate you!",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "Fear is the path to the dark side.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "The Force will be with you, always.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "you",
      message: "I find your lack of faith disturbing.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "Do or do not. There is no try.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "you",
      message: "I am altering the deal. Pray I don't alter it any further.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "In my experience, there is no such thing as luck.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "Help me, Obi-Wan Kenobi. You're my only hope.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "you",
      message: "I've got a bad feeling about this.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "you",
      message:
        "The dark side of the Force is a pathway to many abilities some consider to be unnatural.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "other",
      message: "I love you.",
      timestamp: getRandomTimestamp(new Date()),
    },
    {
      sender: "you",
      message: "I know.",
      timestamp: getRandomTimestamp(new Date()),
    },
  ])

  const showMessages = () => {
    const messageElements: ReactNode[] = []
    for (let i = messages.length - 1; i >= 0; i--) {
      const inst = messages[i]
      //This is a daisy ui component
      if (inst.sender === "other") {
        messageElements.push(
          <div className="chat chat-start" key={i}>
            <p className="chat-bubble bg-zinc-100 text-base font-light leading-loose text-black">
              {inst.message}
            </p>
            <p className="chat-footer text-right text-xs font-light text-zinc-500">
              {inst.timestamp}
            </p>
          </div>
        )
      }
      //This is a daisy ui component
      else {
        messageElements.push(
          <div className="chat chat-end" key={i}>
            <p className="chat-bubble bg-secondary text-base font-light leading-loose text-white">
              {inst.message}
            </p>
            <p className="chat-footer text-right text-xs font-light text-zinc-500">
              {inst.timestamp}
            </p>
          </div>
        )
      }
    }
    return messageElements
  }

  const [finalMessages, setFinalMessages] = useState(showMessages())

  const pushMessages = ({
    sender,
    message,
    timestamp,
  }: {
    sender: string
    message: string
    timestamp: Date
  }) => {
    setMessages((prev) => [
      ...prev,
      {
        sender,
        message,
        timestamp: getRandomTimestamp(timestamp),
      },
    ])
  }

  useEffect(() => {
    setFinalMessages(showMessages())
  }, [messages])

  return (
    <>
      {id ? (
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 bg-sky-900 p-3 md:bg-white">
            <Image
              className="w-[45px] rounded-lg lg:w-14 lg:rounded-2xl"
              width={56}
              height={56}
              alt="avatar"
              src="https://via.placeholder.com/59x59"
            />
            <div className="space-y-1">
              <p className="text-base font-bold leading-5 text-white md:text-black lg:text-xl">
                {id.replace("%20", " ")}
              </p>
              <p className="text-sm font-light leading-4 text-white md:text-zinc-500">
                online 5 minutes ago
              </p>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <div className="flex w-[30px] items-center justify-center">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer fill-current text-white md:text-[#828282]"
                >
                  <g id="Vector">
                    <path d="M7.62122 0.989318C9.04368 0.989318 10.4661 0.989318 11.8925 0.989318C12.7752 0.989318 13.5038 1.55376 13.7235 2.40441C13.7698 2.57931 13.7891 2.76613 13.7891 2.94898C13.7891 5.88649 13.7891 8.824 13.7891 11.7615C13.7891 12.8824 12.9757 13.7132 11.8886 13.7172C10.2734 13.7172 8.65819 13.7172 7.04299 13.7172C6.76543 13.7172 6.55727 13.586 6.45319 13.3237C6.35681 13.0772 6.39922 12.8427 6.57269 12.6439C6.71532 12.481 6.90421 12.4412 7.10852 12.4412C8.68517 12.4412 10.2618 12.4412 11.8385 12.4412C11.9233 12.4412 12.012 12.4412 12.0968 12.4213C12.3589 12.3577 12.5478 12.1113 12.5555 11.8251C12.5593 11.6462 12.5555 11.4674 12.5555 11.2885C12.5555 8.52985 12.5555 5.77519 12.5555 3.01656C12.5555 2.51173 12.3203 2.26926 11.8308 2.26926C9.02826 2.26926 6.22575 2.27324 3.41938 2.26529C3.03389 2.26529 2.69466 2.51173 2.69851 3.01258C2.71393 4.63835 2.70622 6.26014 2.70237 7.8859C2.70237 7.99323 2.69466 8.1085 2.66382 8.20787C2.5713 8.49805 2.2976 8.665 1.99307 8.62127C1.71937 8.5855 1.49578 8.33507 1.47651 8.0449C1.47265 8.00913 1.47265 7.97733 1.47265 7.94155C1.47265 6.26809 1.4688 4.59462 1.47265 2.91718C1.47265 1.97909 2.101 1.20397 2.98763 1.02907C3.12641 1.00124 3.27289 0.997269 3.41938 0.997269C4.82256 0.989319 6.22189 0.989318 7.62122 0.989318Z" />
                    <path d="M3.56155 12.4294C4.04727 12.9303 4.51371 13.4073 4.97245 13.8883C5.27698 14.2102 5.22301 14.6991 4.85294 14.9019C4.75272 14.9575 4.6255 14.9853 4.50986 14.9893C3.30327 14.9893 2.1044 14.9893 0.901671 14.9893C0.500762 14.9893 0.242483 14.723 0.242483 14.3056C0.238628 13.0694 0.242483 11.8332 0.242483 10.593C0.242483 10.275 0.381259 10.0405 0.635682 9.94507C0.90938 9.83775 1.14067 9.92122 1.34113 10.1319C1.79215 10.6009 2.24318 11.066 2.72889 11.5669C2.76359 11.5112 2.79057 11.4556 2.83298 11.4118C4.267 9.92917 5.70102 8.44651 7.13504 6.96384C7.3008 6.79292 7.48584 6.68559 7.72484 6.72534C7.96385 6.76509 8.12961 6.90819 8.21056 7.14272C8.29151 7.37326 8.24526 7.58394 8.09491 7.77076C8.06022 7.81449 8.02167 7.85026 7.98312 7.89001C6.55681 9.36075 5.13435 10.8355 3.70804 12.3062C3.66949 12.346 3.61938 12.3778 3.56155 12.4294Z" />
                  </g>
                </svg>
              </div>
              <div className="flex w-[30px] items-center justify-center">
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer fill-current text-white md:text-[#828282]"
                >
                  <path
                    id="Vector"
                    d="M3.2003 2.1981C3.66075 2.24742 4.09928 2.2529 4.51588 2.35153C5.47516 2.58715 6.42896 2.85565 7.37727 3.1351C8.27626 3.39812 9.16976 3.6721 10.1071 3.75977C11.2034 3.86388 12.2723 3.71593 13.3193 3.3762C13.7853 3.22825 14.1854 3.49675 14.2348 3.98443C14.2402 4.06114 14.2402 4.13238 14.2402 4.20909C14.2402 6.49405 14.2402 8.7845 14.2402 11.0695C14.2402 11.7325 14.0813 11.9462 13.4344 12.1434C11.7954 12.6476 10.1619 12.6037 8.53389 12.0777C7.59654 11.7763 6.67015 11.4585 5.72731 11.1845C4.95989 10.9599 4.17054 10.8832 3.37571 10.9325C3.32637 10.9325 3.28252 10.9434 3.20578 10.9544C3.20578 11.0366 3.20578 11.1188 3.20578 11.1955C3.20578 13.0311 3.20578 14.8668 3.20578 16.7024C3.20578 16.8339 3.20578 16.9654 3.18385 17.0915C3.10163 17.5408 2.77273 17.8312 2.31776 17.8476C1.92857 17.8586 1.53937 17.8586 1.15018 17.8476C0.640391 17.8312 0.29505 17.4805 0.251198 16.96C0.240234 16.8942 0.240234 16.823 0.240234 16.7572C0.240234 11.7325 0.240234 6.70227 0.240234 1.67755C0.240234 0.921371 0.684244 0.335062 1.38041 0.165197C2.26843 -0.0539846 3.15644 0.603559 3.2003 1.51864C3.20578 1.7433 3.2003 1.96796 3.2003 2.1981Z"
                  />
                </svg>
              </div>
              <Link
                href={"/chat"}
                className="flex w-[30px] items-center justify-center md:hidden"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer fill-current text-white md:text-[#828282]"
                >
                  <path
                    id="Union"
                    d="M13.8828 1.4612C13.2744 0.832597 12.288 0.832598 11.6796 1.4612L7.56429 5.71313L3.44857 1.46077C2.84017 0.832169 1.85376 0.832169 1.24536 1.46077C0.636962 2.08937 0.636963 3.10853 1.24536 3.73713L5.36108 7.9895L1.2457 12.2415C0.637304 12.8701 0.637304 13.8893 1.2457 14.5179C1.8541 15.1465 2.84051 15.1465 3.44891 14.5179L7.56429 10.2659L11.6792 14.5174C12.2876 15.146 13.2741 15.146 13.8825 14.5174C14.4909 13.8888 14.4909 12.8697 13.8825 12.2411L9.7675 7.9895L13.8828 3.73756C14.4912 3.10896 14.4912 2.0898 13.8828 1.4612Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <Separator />
          <div className="flex flex-1 flex-col-reverse overflow-y-scroll p-3">
            {finalMessages.map((inst, index) => (
              <div key={index}>{inst}</div>
            ))}
          </div>
          <div className="relative m-3 mt-0">
            <Textarea
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type here..."
              value={value}
              className="h-11 w-full rounded-lg bg-zinc-100"
            />
            <div className="absolute bottom-0 right-0 top-0 flex items-center gap-4 px-3">
              <svg
                width="15"
                height="23"
                viewBox="0 0 15 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <g id="Vector">
                  <path
                    id="Vector_2"
                    d="M9.35697 0.399902C9.82457 0.516803 10.3089 0.583604 10.7598 0.750606C12.7137 1.48541 14.033 3.38923 14.0497 5.47675C14.0664 8.96708 14.0664 12.4574 14.0497 15.9477C14.033 19.3212 11.5447 22.2103 8.20466 22.7781C4.28012 23.4461 0.522588 20.6572 0.0549833 16.6993C0.021583 16.4154 0.00488281 16.1315 0.00488281 15.8475C0.00488281 12.591 0.00488281 9.33449 0.00488281 6.07796C0.00488281 5.35985 0.622789 4.89224 1.25739 5.14275C1.5747 5.25965 1.7918 5.49345 1.8419 5.84415C1.8586 5.96105 1.8753 6.09466 1.8753 6.21156C1.8753 9.40129 1.8753 12.591 1.8753 15.7807C1.8753 18.0019 3.16121 19.8723 5.19863 20.6572C8.25476 21.8429 11.695 19.7888 12.1125 16.5323C12.1459 16.2818 12.1626 16.0145 12.1626 15.764C12.1626 12.3739 12.1626 8.98378 12.1626 5.61035C12.1626 3.99044 11.1439 2.70452 9.60747 2.33712C7.62015 1.86952 5.63283 3.40593 5.61614 5.46005C5.59943 8.59968 5.61614 11.756 5.61614 14.8956C5.61614 15.6805 6.25074 16.3152 7.01895 16.3152C7.78716 16.3152 8.42176 15.6805 8.42176 14.8956C8.42176 11.9731 8.42176 9.05058 8.42176 6.11136C8.42176 5.84415 8.47186 5.59365 8.67226 5.37655C8.92277 5.09265 9.25677 5.00915 9.60747 5.10935C9.97488 5.20955 10.2087 5.46005 10.2755 5.84415C10.2922 5.94435 10.2922 6.02786 10.2922 6.12806C10.2922 9.03388 10.2922 11.9397 10.2922 14.8455C10.2922 16.549 9.15657 17.8683 7.48655 18.1522C5.71634 18.4528 3.92942 17.0834 3.76242 15.2964C3.74572 15.096 3.72902 14.8956 3.72902 14.6785C3.72902 11.6725 3.72902 8.64978 3.72902 5.64375C3.72902 3.32243 5.13183 1.36851 7.30285 0.650405C7.65355 0.533504 8.03766 0.483403 8.40506 0.399902C8.73906 0.399902 9.03967 0.399902 9.35697 0.399902Z"
                    fill="#828282"
                  />
                </g>
              </svg>

              <svg
                onClick={() => {
                  pushMessages({
                    sender: "you",
                    message: value,
                    timestamp: new Date(),
                  })
                  setValue("")
                }}
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  id="Vector"
                  d="M10.1492 10.4967C10.017 10.5599 9.93651 10.5944 9.86178 10.6289C8.79268 11.1634 7.71782 11.6922 6.65446 12.2383C6.30959 12.4165 6.01645 12.3992 5.68882 12.1923C3.94146 11.0887 2.1826 9.99086 0.423748 8.89876C0.153597 8.73207 -0.0303358 8.51939 0.00415153 8.18602C0.032891 7.85264 0.251311 7.6802 0.550201 7.56525C6.90162 5.07066 13.2473 2.57608 19.593 0.0757424C20.162 -0.148425 20.5759 0.161961 20.6276 0.524078C20.6506 0.702263 20.6103 0.909187 20.5414 1.08162C19.4952 3.76589 18.4376 6.45015 17.3858 9.13442C15.9545 12.7843 14.5176 16.4342 13.0864 20.0842C12.9082 20.544 12.5518 20.7452 12.1724 20.5842C12.0287 20.5267 11.885 20.406 11.8046 20.2796C10.6607 18.469 9.52841 16.6527 8.39607 14.8363C8.23513 14.5777 8.24663 14.3305 8.37883 14.0604C8.93063 12.9683 9.47668 11.8704 10.0227 10.7783C10.0515 10.7093 10.086 10.6289 10.1492 10.4967Z"
                  fill="#194D79"
                />
              </svg>
            </div>
          </div>
          <MessageAccordion
            value={value}
            setValue={setValue}
            pushMessages={pushMessages}
            finalMessages={finalMessages}
            className="hidden lg:flex"
          />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Badge className="bg-secondary">
            Select a chat to start messaging
          </Badge>
        </div>
      )}
    </>
  )
}
