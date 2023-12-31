"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

import { messages } from "../messages"
import MessageCard from "./MessageCard"

type Props = {
  finalMessages: any
  value: string
  setValue: any
  pushMessages: any
  className?: string
}

export default function MessageAccordion({
  finalMessages,
  value,
  setValue,
  pushMessages,
  className,
}: Props) {
  const pathname = usePathname().split("/").pop()?.replace("%20", " ")
  return (
    <div
      className={cn(
        "fixed bottom-0 right-6 z-50 flex items-end gap-4",
        className ?? className
      )}
    >
      {pathname && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="h-16 w-96 rounded-tl-2xl rounded-tr-2xl bg-sky-900 p-5 hover:no-underline">
              <div className="flex w-full items-center gap-5 pr-5">
                {/* This is a daisy ui component  */}
                <div className="avatar relative">
                  <div className="w-10 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      alt={"avatar"}
                      src="https://via.placeholder.com/40x40"
                    />
                  </div>
                  <span className="absolute -bottom-[3px] -right-[3px] h-3 w-3 rounded-full bg-primary"></span>
                </div>
                <p className="text-lg font-bold leading-loose text-white">
                  {pathname}
                </p>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-auto"
                >
                  <g id="Vector">
                    <path
                      d="M8.55142 18.8343C6.58916 18.8343 4.6269 18.8343 2.65932 18.8343C1.44155 18.8343 0.436485 18.0807 0.133371 16.9449C0.0695577 16.7114 0.0429688 16.462 0.0429688 16.2178C0.0429687 12.2958 0.0429688 8.37376 0.0429688 4.45173C0.0429688 2.95509 1.16502 1.84589 2.66464 1.84058C4.89279 1.84058 7.12094 1.84058 9.34909 1.84058C9.73197 1.84058 10.0191 2.01572 10.1627 2.36599C10.2957 2.69504 10.2372 3.00816 9.99786 3.27353C9.8011 3.49112 9.54053 3.54419 9.25869 3.54419C7.08371 3.54419 4.90874 3.54419 2.73377 3.54419C2.61678 3.54419 2.49447 3.54419 2.37748 3.57073C2.01587 3.65564 1.75529 3.98469 1.74466 4.36681C1.73934 4.60564 1.74466 4.84446 1.74466 5.08328C1.74466 8.76649 1.74466 12.4444 1.74466 16.1276C1.74466 16.8016 2.06904 17.1254 2.7444 17.1254C6.61043 17.1254 10.4765 17.12 14.3478 17.1307C14.8796 17.1307 15.3475 16.8016 15.3422 16.1329C15.321 13.9623 15.3316 11.7969 15.3369 9.62626C15.3369 9.48296 15.3475 9.32906 15.3901 9.19638C15.5177 8.80895 15.8953 8.58605 16.3154 8.64442C16.6929 8.69219 17.0014 9.02654 17.028 9.41397C17.0333 9.46174 17.0333 9.50419 17.0333 9.55196C17.0333 11.7863 17.0386 14.0206 17.0333 16.2603C17.0333 17.5128 16.1665 18.5477 14.9434 18.7812C14.752 18.8184 14.5499 18.8237 14.3478 18.8237C12.4121 18.8343 10.4818 18.8343 8.55142 18.8343Z"
                      fill="white"
                    />
                    <path
                      d="M14.1517 3.55993C13.4816 2.89123 12.8382 2.25436 12.2054 1.61219C11.7853 1.1823 11.8597 0.529516 12.3702 0.258849C12.5085 0.184548 12.684 0.147397 12.8435 0.14209C14.508 0.14209 16.1618 0.14209 17.8209 0.14209C18.374 0.14209 18.7303 0.497673 18.7303 1.05493C18.7356 2.70547 18.7303 4.35602 18.7303 6.01187C18.7303 6.43644 18.5388 6.74957 18.1879 6.87694C17.8103 7.02024 17.4912 6.90879 17.2147 6.6275C16.5925 6.00125 15.9704 5.38031 15.3003 4.7116C15.2525 4.7859 15.2152 4.8602 15.1567 4.91858C13.1785 6.89817 11.2003 8.87776 9.22209 10.8574C8.99343 11.0856 8.73818 11.2289 8.40847 11.1758C8.07877 11.1227 7.85011 10.9317 7.73843 10.6185C7.62676 10.3107 7.69057 10.0294 7.89797 9.77999C7.94583 9.72161 7.999 9.67384 8.05218 9.62077C10.0198 7.6571 11.982 5.68813 13.9496 3.72446C14.0028 3.67139 14.0719 3.62893 14.1517 3.55993Z"
                      fill="white"
                    />
                  </g>
                </svg>
                {/* <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Union"
                    d="M13.1002 0.857405C12.5034 0.260639 11.5359 0.26064 10.9391 0.857405L6.9025 4.89401L2.86549 0.856998C2.26872 0.260232 1.30118 0.260232 0.70441 0.856998C0.107644 1.45376 0.107645 2.42131 0.70441 3.01808L4.74142 7.05509L0.704745 11.0918C0.10798 11.6885 0.10798 12.6561 0.704745 13.2528C1.30151 13.8496 2.26906 13.8496 2.86582 13.2528L6.9025 9.21617L10.9388 13.2524C11.5355 13.8492 12.5031 13.8492 13.0998 13.2524C13.6966 12.6557 13.6966 11.6881 13.0998 11.0914L9.06358 7.05509L13.1002 3.01848C13.6969 2.42172 13.6969 1.45417 13.1002 0.857405Z"
                    fill="white"
                  />
                </svg> */}
              </div>
            </AccordionTrigger>
            <AccordionContent className="max-h-[50vh] overflow-y-scroll border border-zinc-100 bg-white shadow-2xl">
              <div className="flex h-[50vh] flex-col">
                <div className="flex w-96 flex-1 flex-col-reverse overflow-y-scroll px-9 py-3">
                  {finalMessages.map((inst: any, index: number) => (
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
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger className="h-16 w-96 rounded-tl-2xl rounded-tr-2xl bg-sky-900 p-5 hover:no-underline">
            <div className="flex w-full items-center gap-5 pr-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M24.5596 12.4943C24.5051 18.2982 20.2611 23.3324 14.573 24.2792C11.7528 24.7493 9.10286 24.2793 6.60281 22.8964C6.50063 22.8419 6.34395 22.8283 6.23495 22.8691C4.83847 23.3664 3.44198 23.8841 2.0455 24.3814C1.33704 24.6335 0.642199 24.2111 0.574078 23.4754C0.553641 23.2847 0.608138 23.0667 0.67626 22.8828C1.15992 21.5272 1.65721 20.1715 2.15449 18.8159C2.20899 18.6593 2.2158 18.5434 2.12724 18.3936C-1.65349 11.7177 1.69808 3.31154 9.02793 1.04991C15.7583 -1.02779 22.9042 3.22298 24.253 10.1237C24.4097 10.9071 24.4642 11.7041 24.5596 12.4943Z"
                  fill="white"
                />
              </svg>
              <p className="text-lg font-bold leading-loose text-white">
                Messaging
              </p>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
              >
                <g id="Vector">
                  <path
                    d="M8.55142 18.8343C6.58916 18.8343 4.6269 18.8343 2.65932 18.8343C1.44155 18.8343 0.436485 18.0807 0.133371 16.9449C0.0695577 16.7114 0.0429688 16.462 0.0429688 16.2178C0.0429687 12.2958 0.0429688 8.37376 0.0429688 4.45173C0.0429688 2.95509 1.16502 1.84589 2.66464 1.84058C4.89279 1.84058 7.12094 1.84058 9.34909 1.84058C9.73197 1.84058 10.0191 2.01572 10.1627 2.36599C10.2957 2.69504 10.2372 3.00816 9.99786 3.27353C9.8011 3.49112 9.54053 3.54419 9.25869 3.54419C7.08371 3.54419 4.90874 3.54419 2.73377 3.54419C2.61678 3.54419 2.49447 3.54419 2.37748 3.57073C2.01587 3.65564 1.75529 3.98469 1.74466 4.36681C1.73934 4.60564 1.74466 4.84446 1.74466 5.08328C1.74466 8.76649 1.74466 12.4444 1.74466 16.1276C1.74466 16.8016 2.06904 17.1254 2.7444 17.1254C6.61043 17.1254 10.4765 17.12 14.3478 17.1307C14.8796 17.1307 15.3475 16.8016 15.3422 16.1329C15.321 13.9623 15.3316 11.7969 15.3369 9.62626C15.3369 9.48296 15.3475 9.32906 15.3901 9.19638C15.5177 8.80895 15.8953 8.58605 16.3154 8.64442C16.6929 8.69219 17.0014 9.02654 17.028 9.41397C17.0333 9.46174 17.0333 9.50419 17.0333 9.55196C17.0333 11.7863 17.0386 14.0206 17.0333 16.2603C17.0333 17.5128 16.1665 18.5477 14.9434 18.7812C14.752 18.8184 14.5499 18.8237 14.3478 18.8237C12.4121 18.8343 10.4818 18.8343 8.55142 18.8343Z"
                    fill="white"
                  />
                  <path
                    d="M14.1517 3.55993C13.4816 2.89123 12.8382 2.25436 12.2054 1.61219C11.7853 1.1823 11.8597 0.529516 12.3702 0.258849C12.5085 0.184548 12.684 0.147397 12.8435 0.14209C14.508 0.14209 16.1618 0.14209 17.8209 0.14209C18.374 0.14209 18.7303 0.497673 18.7303 1.05493C18.7356 2.70547 18.7303 4.35602 18.7303 6.01187C18.7303 6.43644 18.5388 6.74957 18.1879 6.87694C17.8103 7.02024 17.4912 6.90879 17.2147 6.6275C16.5925 6.00125 15.9704 5.38031 15.3003 4.7116C15.2525 4.7859 15.2152 4.8602 15.1567 4.91858C13.1785 6.89817 11.2003 8.87776 9.22209 10.8574C8.99343 11.0856 8.73818 11.2289 8.40847 11.1758C8.07877 11.1227 7.85011 10.9317 7.73843 10.6185C7.62676 10.3107 7.69057 10.0294 7.89797 9.77999C7.94583 9.72161 7.999 9.67384 8.05218 9.62077C10.0198 7.6571 11.982 5.68813 13.9496 3.72446C14.0028 3.67139 14.0719 3.62893 14.1517 3.55993Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </AccordionTrigger>
          <AccordionContent className="max-h-[50vh] w-96 overflow-y-scroll border border-zinc-100 bg-white shadow-2xl">
            {messages.map((message, index) => (
              <div key={index}>
                <MessageCard message={message} />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
