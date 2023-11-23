import Image from "next/image"

import { cn } from "@/lib/utils"

type Props = {
  notif: { isSeen: boolean }
}

export default function NotificationCard({ notif }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-x-6 gap-y-3 rounded-lg bg-blue-100 p-5 sm:flex-row sm:items-center",
        {
          "bg-white": notif.isSeen,
        }
      )}
    >
      <Image
        src="/images/station_logo.webp"
        alt="station_logo"
        width={72}
        height={56}
      />
      <div>
        <h4 className="mb-2 text-base font-semibold leading-tight text-black">
          You received an interview request from{" "}
          <span className="text-base font-semibold leading-tight text-sky-900">
            KABC
          </span>
        </h4>
        <p className="mb-4 text-base font-light leading-relaxed text-black">
          In magna ipsum suscipit quam aenean lectus id aenean. Ac adipiscing
          tellus, laoreet sem in mattis euismod aliquam. Pharetra vitae dui
          tortor ut porta pretium.
        </p>
        <div className="flex items-center gap-2">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M11.9457 5.85965C11.9519 4.90898 11.7259 4.01096 11.2676 3.17486C11.2583 3.15628 11.249 3.1377 11.2366 3.11912C10.3262 1.45622 8.61993 0.291885 6.63498 0.146343C6.60711 0.143246 6.58234 0.143246 6.55447 0.140149C6.5266 0.137053 6.49873 0.137053 6.47086 0.137053C6.44918 0.137053 6.4275 0.133956 6.40273 0.133956C6.37486 0.133956 6.34389 0.130859 6.31602 0.130859C6.28196 0.130859 6.2448 0.130859 6.21074 0.130859C6.18287 0.130859 6.1581 0.130859 6.13023 0.130859C6.11784 0.130859 6.10236 0.130859 6.08997 0.130859C6.07139 0.130859 6.05281 0.130859 6.03423 0.130859C6.02184 0.130859 6.00946 0.130859 5.99397 0.130859C5.99088 0.130859 5.98778 0.130859 5.98778 0.130859C5.95991 0.130859 5.93204 0.133956 5.90417 0.133956C4.94421 0.183502 4.04618 0.474587 3.26583 0.94218C1.59364 1.95478 0.472656 3.79419 0.472656 5.89681C0.472656 6.02997 0.475753 6.16312 0.485043 6.29628C0.602715 8.0304 1.48526 9.55705 2.79514 10.5325C2.80753 10.5418 2.81991 10.5511 2.8292 10.5573C2.95926 10.6533 3.09242 10.7431 3.23177 10.8267C3.24725 10.836 3.25964 10.8422 3.27512 10.8514C4.11431 11.3531 5.08975 11.6473 6.13332 11.6597C6.1581 11.6597 6.18287 11.6597 6.20764 11.6597C6.23242 11.6597 6.25719 11.6597 6.28196 11.6597C6.29744 11.6597 6.31602 11.6597 6.33151 11.6597C6.35009 11.6597 6.36557 11.6597 6.38415 11.6597C6.39963 11.6597 6.41202 11.6597 6.4275 11.6597C8.07182 11.5977 9.53654 10.8391 10.5429 9.67162C10.5429 9.66853 10.546 9.66853 10.5491 9.66543C10.7783 9.40841 10.9827 9.13281 11.1561 8.83862C11.3914 8.43916 11.5772 8.00872 11.7073 7.54423C11.7104 7.52874 11.7166 7.51636 11.7197 7.50087C11.8652 6.99302 11.9457 6.45421 11.9457 5.89681C11.9457 5.88443 11.9457 5.87204 11.9457 5.85965ZM10.769 6.6431C10.7164 6.95586 10.6327 7.26553 10.5151 7.5721C9.72233 9.61898 7.6321 10.8081 5.43348 10.4675C5.29723 10.4458 5.16407 10.421 5.03401 10.3869C4.41469 10.2228 3.8449 9.93484 3.35873 9.54776C3.34944 9.54156 3.34325 9.53537 3.33396 9.52918C3.06145 9.30312 2.81372 9.03681 2.58457 8.73334C2.54741 8.6807 2.50406 8.63734 2.45761 8.60328C1.97763 7.9344 1.67106 7.13237 1.60603 6.26222C1.59674 6.14145 1.59054 6.02068 1.59054 5.89681C1.59054 5.45399 1.65248 5.02356 1.76705 4.6179C2.15413 3.25537 3.14816 2.14678 4.43326 1.60796C5.45825 1.19301 6.62259 1.14346 7.67545 1.49338C7.68784 1.49648 7.70022 1.50267 7.70951 1.50577C7.73738 1.51506 7.76525 1.52435 7.79312 1.53674C8.03776 1.62654 8.27001 1.73492 8.49297 1.86188L8.50535 1.86808C8.52393 1.88046 8.54251 1.88975 8.56109 1.90214C8.58896 1.91762 8.61683 1.9362 8.6416 1.95169C8.65399 1.95788 8.66328 1.96407 8.67257 1.97336C8.67567 1.97646 8.67876 1.97646 8.68186 1.97956C8.67876 1.97956 8.67876 1.97646 8.67567 1.97646C8.68805 1.98265 8.69734 1.99194 8.70973 1.99814C8.70044 1.99194 8.69115 1.98575 8.68186 1.97956C8.69425 1.98885 8.70973 1.99814 8.72212 2.00743C8.82121 2.07246 8.91721 2.14058 9.01011 2.2118C8.99462 2.19942 8.97604 2.18703 8.96056 2.17464C8.97295 2.18393 8.98533 2.19322 8.99772 2.20251C9.00701 2.2118 9.01939 2.218 9.03178 2.22729C9.05346 2.24587 9.07514 2.26135 9.09681 2.27993C9.11539 2.29541 9.13707 2.3109 9.15565 2.32948C9.17423 2.34496 9.18971 2.35735 9.20829 2.37283C9.21448 2.37593 9.22068 2.38212 9.22377 2.38831C9.24545 2.40689 9.26713 2.42547 9.2888 2.44715C9.30738 2.46573 9.32906 2.48431 9.34764 2.50289C9.36003 2.51528 9.37551 2.52766 9.3879 2.54315C9.41267 2.56792 9.43744 2.5896 9.46222 2.61437C9.48079 2.63295 9.49938 2.65153 9.51486 2.67011C9.53344 2.68869 9.55202 2.71036 9.5706 2.72894C9.5644 2.72275 9.56131 2.71656 9.55511 2.71346C9.56131 2.71965 9.5675 2.72894 9.57369 2.73514C9.57369 2.73514 9.5706 2.73204 9.5675 2.73204C9.58608 2.75062 9.60466 2.7723 9.62324 2.79088C9.64492 2.81255 9.6635 2.83733 9.68517 2.859C9.71924 2.89926 9.7502 2.93642 9.78427 2.97668C9.79356 2.98597 9.80285 2.99835 9.80904 3.00764C9.82762 3.03242 9.8493 3.05719 9.86788 3.08196C9.87717 3.09435 9.88646 3.10674 9.89884 3.12222C9.91433 3.14389 9.93291 3.16557 9.94839 3.19034C9.95458 3.19963 9.96387 3.21202 9.97007 3.22131C9.97316 3.2275 9.97935 3.2337 9.98245 3.23679C9.98555 3.23989 9.98555 3.24299 9.98864 3.24299C10.0041 3.26157 10.0165 3.28324 10.032 3.30492C10.0351 3.30802 10.0382 3.31421 10.0413 3.31731C10.0568 3.34208 10.0723 3.36376 10.0877 3.38853C10.1094 3.42259 10.1342 3.45975 10.1528 3.49382C10.1466 3.48143 10.1373 3.46904 10.1311 3.45975C10.5708 4.16888 10.8247 5.00808 10.8247 5.9061C10.8278 6.15074 10.8093 6.40157 10.769 6.6431ZM8.76857 7.6588C8.80263 7.89724 8.70663 8.10162 8.51155 8.2193C8.41865 8.27504 8.31955 8.306 8.22046 8.306C8.10279 8.306 7.98821 8.26575 7.88293 8.18833C7.67855 8.03659 7.47727 7.88486 7.27289 7.73003C7.17689 7.6588 7.0809 7.58448 6.9818 7.51326C6.87032 7.42965 6.75575 7.34295 6.64427 7.25934C6.34389 7.03328 6.03113 6.79794 5.72147 6.57188C5.54496 6.44182 5.45516 6.26531 5.45516 6.04855C5.45516 5.41993 5.45516 4.78821 5.45516 4.15959V4.05431C5.45516 3.62697 5.45516 3.19963 5.45516 2.7723C5.45516 2.60508 5.51399 2.45025 5.62547 2.34186C5.72766 2.23967 5.86391 2.18703 6.01255 2.18703H6.01565C6.3346 2.19013 6.56685 2.43786 6.56995 2.77849C6.56995 3.12841 6.56995 3.47833 6.56995 3.82825V4.28656C6.56995 4.41042 6.56995 4.53429 6.56995 4.65815V4.66435C6.56995 5.03285 6.56995 5.41683 6.56685 5.79153C6.56685 5.79772 6.56685 5.80082 6.56685 5.80391C6.56995 5.80391 6.57305 5.81011 6.57924 5.8132C6.96013 6.09809 7.34101 6.38608 7.7188 6.67407L7.79932 6.73291C8.03466 6.90942 8.26691 7.08902 8.50226 7.26553C8.61064 7.34295 8.7407 7.46371 8.76857 7.6588ZM8.90482 2.1282C8.91101 2.13129 8.91411 2.13439 8.9203 2.14058C8.90482 2.1282 8.88934 2.11581 8.87076 2.10652C8.88314 2.11271 8.89243 2.11891 8.90482 2.1282Z"
              fill="#194D79"
            />
          </svg>
          <span className="text-sm font-light leading-[21px] text-sky-900">
            May 24, 2022
          </span>
        </div>
      </div>
    </div>
  )
}
