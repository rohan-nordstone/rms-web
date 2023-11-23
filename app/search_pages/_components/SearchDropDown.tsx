"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  selectOptions: z.string({
    required_error: "Please select an option to search.",
  }),
})

const options = [
  {
    value: "TV News",
    label: "TV News",
    icon: (
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6"
      >
        <path
          d="M25.7596 7.29554C25.7596 11.9872 25.7596 16.6789 25.7596 21.3776C25.6817 21.6328 25.6391 21.9021 25.5258 22.143C25.0722 23.0714 24.2926 23.4825 23.2791 23.4825C16.5322 23.4825 9.79237 23.4825 3.04544 23.4825C2.81157 23.4825 2.56352 23.4683 2.33673 23.4045C1.23823 23.1069 0.557868 22.2423 0.557868 21.1012C0.550781 16.5938 0.543694 12.1006 0.564955 7.60737C0.564955 7.25301 0.650001 6.86322 0.805917 6.5443C1.23823 5.63007 2.01073 5.2261 3.01001 5.2261C6.09999 5.2261 9.19705 5.2261 12.287 5.2261C12.3721 5.2261 12.4571 5.2261 12.606 5.2261C11.0822 3.71655 9.60102 2.26369 8.16234 0.83918C8.43873 0.562783 8.70096 0.30056 8.97027 0.03125C10.4869 1.52663 12.0319 3.04327 13.5911 4.58117C15.1502 3.05036 16.6952 1.53372 18.2189 0.0383371C18.5024 0.307647 18.7717 0.56987 19.0481 0.83918C17.5811 2.28495 16.107 3.74489 14.5833 5.24736C14.7604 5.24736 14.8597 5.24736 14.9518 5.24736C17.7158 5.24736 20.4797 5.24736 23.2437 5.24736C24.08 5.24736 24.81 5.5025 25.2919 6.20412C25.5116 6.52304 25.6037 6.92701 25.7596 7.29554ZM9.98372 8.90431C8.53795 8.90431 7.09927 8.90431 5.6535 8.90431C5.45506 8.90431 5.25662 8.9114 5.07236 8.96101C4.2219 9.18071 3.74707 9.83272 3.74707 10.7611C3.74707 13.1778 3.74707 15.6016 3.74707 18.0183C3.74707 19.1877 4.46287 19.8964 5.63933 19.8964C8.52378 19.8964 11.4153 19.8964 14.2998 19.8964C15.4833 19.8964 16.2062 19.1735 16.2062 17.9971C16.2062 15.5945 16.2062 13.192 16.2062 10.7895C16.2062 10.584 16.1849 10.3784 16.1353 10.18C15.9156 9.36497 15.2636 8.89722 14.3494 8.89722C12.8894 8.90431 11.4366 8.90431 9.98372 8.90431ZM20.5364 15.1622C19.4167 15.1622 18.5237 16.0552 18.5237 17.175C18.5166 18.3018 19.4308 19.209 20.5506 19.2019C21.6704 19.1948 22.5633 18.3018 22.5633 17.1821C22.5633 16.0552 21.6704 15.1622 20.5364 15.1622ZM22.8468 9.2941C21.2947 9.2941 19.7639 9.2941 18.2473 9.2941C18.2473 9.68389 18.2473 10.0595 18.2473 10.428C19.7923 10.428 21.316 10.428 22.8468 10.428C22.8468 10.0453 22.8468 9.67681 22.8468 9.2941ZM22.8468 12.1927C21.2947 12.1927 19.7639 12.1927 18.2402 12.1927C18.2402 12.5754 18.2402 12.944 18.2402 13.3267C19.7781 13.3267 21.3089 13.3267 22.8468 13.3267C22.8468 12.9369 22.8468 12.5754 22.8468 12.1927Z"
          fill="current"
        />
      </svg>
    ),
  },
  {
    value: "Radio",
    label: "Radio",
    icon: (
      <svg
        width="26"
        height="23"
        viewBox="0 0 26 23"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6"
      >
        <path
          d="M25.5349 8.30706C25.5349 12.7245 25.5349 17.1353 25.5349 21.5528C25.5152 21.606 25.4955 21.6593 25.4823 21.7125C25.2653 22.4443 24.6865 22.8967 23.9302 22.8967C16.597 22.8967 9.26384 22.8967 1.93067 22.8967C1.00992 22.8967 0.332505 22.2048 0.332505 21.2734C0.325928 17.0422 0.325928 12.811 0.325928 8.57982C0.325928 7.86797 0.766575 7.28252 1.43083 7.06963C1.51633 7.04302 1.60183 7.01641 1.68733 6.9898C6.21219 5.24676 10.7305 3.50372 15.2553 1.76068C16.209 1.39478 17.1626 1.01557 18.1228 0.656314C18.7213 0.430118 19.3132 0.889163 19.2146 1.50122C19.1554 1.86713 18.912 2.06006 18.5832 2.18646C14.9133 3.59686 11.2435 5.01391 7.56702 6.43096C7.1461 6.59728 6.71861 6.7636 6.29769 6.92327C6.30427 6.93658 6.30427 6.94988 6.31084 6.96319C6.40949 6.96319 6.50815 6.96319 6.60022 6.96319C12.3023 6.96319 18.0044 6.96319 23.7066 6.96319C23.8052 6.96319 23.9039 6.96319 24.0025 6.96319C24.6668 6.98315 25.2324 7.40893 25.4494 8.0476C25.4757 8.13408 25.502 8.22057 25.5349 8.30706ZM8.19181 19.71C10.7962 19.7166 12.9271 17.5744 12.9337 14.9399C12.9403 12.3054 10.8225 10.1499 8.21812 10.1432C5.6137 10.1366 3.48281 12.2788 3.47623 14.9133C3.46965 17.5545 5.58739 19.7033 8.19181 19.71ZM22.3715 11.7599C20.2669 11.7599 18.182 11.7599 16.1037 11.7599C16.1037 12.2921 16.1037 12.811 16.1037 13.3233C18.2017 13.3233 20.2866 13.3233 22.3715 13.3233C22.3715 12.7977 22.3715 12.2921 22.3715 11.7599ZM16.0906 16.51C18.1952 16.51 20.28 16.51 22.3583 16.51C22.3583 15.9778 22.3583 15.4588 22.3583 14.9466C20.2603 14.9466 18.182 14.9466 16.0906 14.9466C16.0906 15.4655 16.0906 15.9778 16.0906 16.51ZM16.0906 19.6967C18.1952 19.6967 20.28 19.6967 22.3583 19.6967C22.3583 19.1645 22.3583 18.6455 22.3583 18.1333C20.2603 18.1333 18.182 18.1333 16.0906 18.1333C16.0906 18.6522 16.0906 19.1645 16.0906 19.6967ZM11.3553 14.9466C11.3618 13.1902 9.9544 11.7532 8.2247 11.7466C6.47526 11.7399 5.05467 13.1636 5.05467 14.9333C5.05467 16.6896 6.46211 18.12 8.19839 18.12C9.9281 18.12 11.3487 16.6963 11.3553 14.9466Z"
          fill="current"
        />
      </svg>
    ),
  },
  {
    value: "Publications",
    label: "Publications",
    icon: (
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6"
      >
        <path
          d="M2.22134 20.4697C7.82157 20.4697 13.4218 20.4697 19.0171 20.4697C19.037 20.4598 19.0519 20.4498 19.0718 20.4448C19.8924 20.2558 20.3301 19.7038 20.3301 18.8533C20.3301 13.1536 20.3301 7.4539 20.3301 1.75917C20.3301 1.59007 20.3201 1.41102 20.2754 1.24689C20.0814 0.550592 19.5094 0.132812 18.7485 0.132812C14.1231 0.132812 9.49766 0.132812 4.87225 0.132812C4.74791 0.132812 4.6186 0.14276 4.49923 0.162654C4.03669 0.247204 3.68357 0.495883 3.51944 0.938529C3.42992 1.17229 3.3951 1.44086 3.3951 1.69451C3.38515 4.19124 3.39013 6.68299 3.39013 9.17972C3.39013 9.26427 3.39013 9.34882 3.39013 9.45327C3.29563 9.45327 3.22103 9.45327 3.1514 9.45327C2.4551 9.45327 1.7588 9.46819 1.06748 9.44829C0.535305 9.43337 0.172234 9.62237 0.00313187 10.1396C0.00313187 12.8403 0.00313187 15.5409 0.00313187 18.2416C0.0130806 18.2714 0.0329742 18.2963 0.0379486 18.3311C0.192129 19.2014 0.669592 19.8381 1.46536 20.221C1.69912 20.3354 1.96769 20.3852 2.22134 20.4697ZM14.3966 7.84978C13.581 7.84978 12.7703 7.84978 11.9546 7.84978C11.3478 7.84978 11.0096 7.51158 11.0047 6.90481C10.9997 5.56194 10.9997 5.72509 11.0047 4.38223C11.0047 3.76551 11.3478 3.42731 11.9645 3.42731C13.5859 3.42731 15.2073 3.42731 16.8237 3.42731C17.4404 3.42731 17.7786 3.76551 17.7786 4.38721C17.7786 5.72509 17.7786 5.552 17.7786 6.88988C17.7786 7.51158 17.4504 7.84978 16.8287 7.84978C16.023 7.84978 15.2123 7.84978 14.3966 7.84978ZM11.8701 10.2988C13.1284 10.2988 14.3817 10.2988 15.64 10.2988C16.0777 10.2988 16.5154 10.2888 16.9481 10.3037C17.5399 10.3187 17.9278 10.8857 17.7339 11.4327C17.6046 11.8008 17.2863 11.9948 16.8237 11.9948C13.5113 11.9948 10.194 11.9948 6.88157 11.9948C6.78707 11.9948 6.69755 11.9848 6.60802 11.9699C6.18527 11.8903 5.88686 11.4825 5.94157 11.0548C6.00125 10.5872 6.34443 10.2988 6.85173 10.2988C8.52284 10.2988 10.1989 10.2988 11.8701 10.2988ZM3.38515 11.1542C3.38515 11.2338 3.38515 11.2935 3.38515 11.3532C3.38515 13.5017 3.38515 15.6503 3.38515 17.7989C3.38515 17.8636 3.38515 17.9332 3.37521 17.9978C3.33045 18.4107 2.91764 18.7737 2.49986 18.7638C2.01743 18.7489 1.69415 18.3758 1.69415 17.8238C1.69415 15.6702 1.69415 13.5117 1.69415 11.3581C1.69415 11.2935 1.69912 11.2288 1.70409 11.1542C2.2661 11.1542 2.80822 11.1542 3.38515 11.1542ZM8.47311 12.8452C9.03015 12.8452 9.58221 12.8403 10.1393 12.8452C10.4625 12.8452 10.7162 12.9795 10.8853 13.258C11.2384 13.8399 10.8256 14.5313 10.1044 14.5412C9.01523 14.5512 7.92104 14.5462 6.83183 14.5412C6.69257 14.5412 6.53839 14.5064 6.40908 14.4517C6.05098 14.2925 5.87193 13.9046 5.95151 13.5117C6.02612 13.1387 6.35934 12.8602 6.76718 12.8552C7.33416 12.8353 7.90612 12.8452 8.47311 12.8452ZM8.46813 15.3867C9.01025 15.3867 9.55237 15.3818 10.0945 15.3867C10.6267 15.3917 10.9997 15.7398 11.0047 16.2273C11.0096 16.7196 10.6466 17.0777 10.1094 17.0827C9.0202 17.0927 7.92602 17.0927 6.83681 17.0777C6.64284 17.0728 6.42898 16.9982 6.26485 16.8937C5.96643 16.6997 5.86696 16.3168 5.97141 15.9786C6.08082 15.6354 6.38919 15.3967 6.7622 15.3917C7.32919 15.3818 7.90115 15.3867 8.46813 15.3867ZM15.2272 12.8452C15.7892 12.8452 16.3512 12.8403 16.9132 12.8452C17.3161 12.8502 17.6294 13.079 17.7438 13.4321C17.9278 14.009 17.5051 14.5362 16.8436 14.5412C15.7793 14.5462 14.7149 14.5462 13.6506 14.5412C13.5312 14.5412 13.4119 14.5263 13.2975 14.4965C12.9145 14.3821 12.6608 13.9842 12.7106 13.5913C12.7653 13.1735 13.1035 12.8602 13.5362 12.8502C14.1032 12.8353 14.6652 12.8452 15.2272 12.8452ZM15.2272 15.3867C15.7892 15.3867 16.3512 15.3818 16.9132 15.3867C17.2415 15.3867 17.5051 15.526 17.6692 15.8145C18.0124 16.4063 17.5847 17.0777 16.8635 17.0827C15.7842 17.0877 14.705 17.0877 13.6307 17.0827C13.5213 17.0827 13.4069 17.0678 13.2975 17.0379C12.9145 16.9236 12.6608 16.5257 12.7106 16.1328C12.7653 15.715 13.1035 15.4016 13.5362 15.3917C14.1032 15.3768 14.6652 15.3867 15.2272 15.3867ZM8.0603 5.21579C7.63755 5.21579 7.2148 5.22077 6.79204 5.21579C6.35935 5.21082 6.01617 4.92235 5.94654 4.51949C5.85204 3.96245 6.24993 3.52478 6.86168 3.51981C7.6475 3.51483 8.43332 3.51483 9.21914 3.51981C9.33851 3.51981 9.45787 3.53473 9.57227 3.56954C9.95523 3.68394 10.2089 4.08182 10.1542 4.47473C10.0995 4.88754 9.76623 5.20087 9.34846 5.21082C8.92073 5.22574 8.48803 5.21579 8.0603 5.21579ZM8.04538 7.75728C7.62263 7.75728 7.19988 7.76226 6.77712 7.75728C6.35437 7.74733 6.01617 7.46384 5.94654 7.07093C5.84707 6.51389 6.24495 6.07125 6.8567 6.06627C7.6475 6.0613 8.44327 6.0613 9.23406 6.06627C9.35343 6.06627 9.47279 6.08119 9.58221 6.12098C9.9602 6.24035 10.1989 6.62828 10.1542 7.01622C10.0995 7.434 9.76126 7.75231 9.33353 7.76226C8.90581 7.76723 8.47808 7.75728 8.04538 7.75728Z"
          fill="current"
        />
      </svg>
    ),
  },
  {
    value: "Podcasts",
    label: "Podcasts",
    icon: (
      <svg
        width="16"
        height="23"
        viewBox="0 0 16 23"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6"
      >
        <path
          d="M8.91955 0.808502C9.20794 0.883484 9.50787 0.935394 9.79049 1.02768C11.342 1.54101 12.4956 3.04641 12.5533 4.62102C12.5533 4.6614 12.5533 4.70754 12.5533 4.77675C12.4725 4.77675 12.3918 4.77675 12.3168 4.77675C11.8035 4.77675 11.2959 4.77675 10.7826 4.77675C10.3327 4.78252 9.99236 5.10552 10.0039 5.52657C10.0097 5.94185 10.3384 6.24754 10.7826 6.24754C11.3651 6.25331 11.9477 6.24754 12.5475 6.24754C12.5475 6.83009 12.5475 7.38957 12.5475 7.97789C12.4668 7.98365 12.3802 7.98942 12.2995 7.98942C11.7515 7.99519 11.2036 7.98365 10.6614 8.00673C10.3384 8.01826 10.0962 8.26051 10.027 8.58351C9.96353 8.87766 10.0904 9.20066 10.3557 9.33909C10.4942 9.41407 10.6672 9.45444 10.8287 9.46021C11.3247 9.47752 11.8208 9.46598 12.3168 9.46598C12.3918 9.46598 12.4725 9.46598 12.559 9.46598C12.559 10.0543 12.559 10.608 12.559 11.2079C12.4841 11.2079 12.4091 11.2079 12.3341 11.2079C11.8035 11.2079 11.267 11.2021 10.7364 11.2136C10.35 11.2194 10.0558 11.5078 10.0154 11.8827C9.98083 12.2172 10.2115 12.5575 10.5461 12.6498C10.6326 12.6729 10.7306 12.6786 10.8229 12.6786C11.319 12.6786 11.815 12.6786 12.311 12.6786C12.386 12.6786 12.4668 12.6786 12.559 12.6786C12.5648 13.2266 12.4495 13.7226 12.2303 14.184C11.4978 15.7298 10.275 16.5662 8.55618 16.6527C7.65064 16.6988 6.77393 16.6008 5.97797 16.1278C4.76096 15.4011 4.06306 14.3398 3.9131 12.9209C3.90733 12.869 3.90733 12.8228 3.90733 12.7709C3.90733 12.7479 3.9131 12.7306 3.92463 12.6844C4.03422 12.6844 4.14958 12.6844 4.25917 12.6844C4.74366 12.6844 5.22239 12.6902 5.70688 12.6844C6.1337 12.6786 6.4567 12.3614 6.4567 11.9519C6.4567 11.5482 6.1337 11.2194 5.71265 11.2136C5.19355 11.2079 4.67445 11.2136 4.16111 11.2136C4.08613 11.2136 4.00538 11.2136 3.9131 11.2136C3.9131 10.6311 3.9131 10.0658 3.9131 9.47175C4.04576 9.47175 4.17265 9.47175 4.30531 9.47175C4.76673 9.47175 5.22816 9.47752 5.68381 9.47175C6.12793 9.46598 6.4567 9.15452 6.46247 8.73924C6.46823 8.32396 6.15101 8.00672 5.70112 8.00096C5.18778 7.98942 4.68021 7.99519 4.16688 7.99519C4.0919 7.99519 4.01115 7.99519 3.91886 7.99519C3.91886 7.40687 3.91886 6.8474 3.91886 6.24754C3.99961 6.24754 4.0746 6.24754 4.14958 6.24754C4.66868 6.24754 5.18778 6.25331 5.70112 6.24754C6.13947 6.24178 6.46823 5.91878 6.46247 5.5035C6.4567 5.09975 6.1337 4.78252 5.70688 4.77675C5.11857 4.77099 4.53025 4.77675 3.87849 4.77675C3.9477 4.40761 3.97077 4.05578 4.08036 3.73278C4.62254 2.10049 5.75303 1.1315 7.45453 0.843109C7.48914 0.837341 7.51798 0.820038 7.55258 0.802734C7.9967 0.808502 8.45813 0.808502 8.91955 0.808502ZM7.23535 21.4399C6.22022 21.4399 5.20509 21.4399 4.18995 21.4399C3.74006 21.4399 3.4286 21.7514 3.4286 22.1725C3.4286 22.5935 3.74583 22.905 4.18995 22.905C6.88352 22.905 9.57131 22.905 12.2649 22.905C12.3745 22.905 12.4956 22.8819 12.5994 22.8358C12.9166 22.7031 13.0839 22.3628 13.0147 22.0167C12.9513 21.688 12.6571 21.4399 12.3053 21.4342C11.2786 21.4284 10.2461 21.4342 9.21948 21.4342C9.1445 21.4342 9.06375 21.4342 8.983 21.4342C8.983 20.9208 8.983 20.4306 8.983 19.9346C10.1769 19.8077 11.2728 19.4443 12.2706 18.8041C13.9779 17.7197 15.0969 16.197 15.6275 14.2417C15.7602 13.7572 15.4487 13.3189 14.9642 13.29C14.5893 13.267 14.3125 13.5034 14.1856 13.9533C13.0897 17.8639 8.63116 19.6865 5.12434 17.6447C3.65355 16.7853 2.70186 15.5106 2.24043 13.8726C2.11354 13.4285 1.7271 13.2035 1.31758 13.3246C0.925373 13.44 0.711964 13.838 0.838856 14.2706C1.62328 16.9641 3.34785 18.7579 6.01258 19.6289C6.48554 19.7846 6.98734 19.8596 7.48914 19.9749C7.48914 20.4363 7.48914 20.9151 7.48914 21.4342C7.39108 21.4399 7.31033 21.4399 7.23535 21.4399Z"
          fill="current"
        />
      </svg>
    ),
  },
  {
    value: "Youtube",
    label: "Youtube",
    icon: (
      <svg
        width="26"
        height="19"
        viewBox="0 0 26 19"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6"
      >
        <path
          d="M24.8419 3.48019C24.5514 2.42482 23.7 1.59289 22.6201 1.30871C20.6475 0.78125 12.7566 0.78125 12.7566 0.78125C12.7566 0.78125 4.86596 0.78125 2.89327 1.28871C1.83423 1.57259 0.961975 2.42497 0.67148 3.48019C0.152344 5.40779 0.152344 9.40538 0.152344 9.40538C0.152344 9.40538 0.152344 13.4231 0.67148 15.3306C0.962282 16.3858 1.81346 17.2177 2.89343 17.5019C4.88673 18.0295 12.7569 18.0295 12.7569 18.0295C12.7569 18.0295 20.6475 18.0295 22.6201 17.522C23.7001 17.238 24.5514 16.4061 24.8422 15.3509C25.3612 13.4231 25.3612 9.42567 25.3612 9.42567C25.3612 9.42567 25.382 5.40779 24.8419 3.48019ZM10.2443 13.0985V5.71227L16.8059 9.40538L10.2443 13.0985Z"
          fill="current"
        />
      </svg>
    ),
  },
]

export function SearchDropDown() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="space-y-6">
        <FormField
          control={form.control}
          name="selectOptions"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={options[0].value}
              >
                <FormControl>
                  <SelectTrigger className="mr-auto h-full min-h-[53px] w-[220px] rounded-[25px] bg-primary text-base font-bold leading-tight text-primary-foreground text-white shadow hover:bg-primary-hover md:max-w-[257px]">
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="rounded-[15px]">
                  {options.map((option, index) => (
                    <SelectItem key={index} value={option.value}>
                      <div className="ml-4 flex flex-row items-center justify-center gap-4">
                        {option.icon}
                        <span className="text-base font-medium leading-[17.50px]">
                          {option.label}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
