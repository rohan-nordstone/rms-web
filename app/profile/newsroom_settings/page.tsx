import Image from "next/image"

import ProfileForm from "./components/ProfileForm"

export default function page() {
  return (
    <div className="px-12 py-9">
      <h4 className="mb-8 text-2xl font-bold leading-[30.50px] text-black">
        Profile
      </h4>
      <div className="mb-9 flex items-center gap-12">
        <Image
          className="h-[158px] w-[158px] rounded-[15px]"
          src="https://via.placeholder.com/158x158"
          alt="profile image"
          width={158}
          height={158}
        />
        <div>
          <span className="text-xl font-light text-sky-900">
            Upload Image in{" "}
          </span>
          <span className="text-xl font-bold text-sky-900">
            jpg or png format
          </span>
        </div>
      </div>
      <ProfileForm />
    </div>
  )
}
