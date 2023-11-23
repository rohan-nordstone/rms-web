import FilterSelect from "./components/FilterSelect"
import PostJobCard from "./components/PostJobCard"
import PostedJob from "./components/PostedJob"
import ShortSelect from "./components/ShortSelect"
import ToBePostedJob from "./components/ToBePostedJob"

export default function page() {
  return (
    <div className="flex flex-col gap-7 lg:flex-row">
      <div className="flex-1">
        <div className="flex flex-col justify-between gap-y-8 pb-5 pt-8 sm:flex-row md:gap-x-8">
          <div className="relative w-full sm:max-w-[50%]">
            <h4 className="text-2xl font-bold text-black">
              All jobs post{" "}
              <span className="font-medium text-zinc-500">(19)</span>
            </h4>
          </div>
          <div className="flex flex-1 gap-x-5 sm:ml-auto">
            <FilterSelect className="md:ml-auto" />
            <ShortSelect />
          </div>
        </div>
        <div className="mt-6 space-y-7">
          <PostedJob />
          <PostedJob />
          <ToBePostedJob />
          <ToBePostedJob />
        </div>
      </div>
      <div className="">
        <PostJobCard />
      </div>
    </div>
  )
}
