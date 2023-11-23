import JobsCards from "./components/JobsCards"

const jobs = [
  {
    title: "Freelance Writer",
  },
  {
    title: "Social Media Manager",
  },
  {
    title: "Freelance Writer",
  },
  {
    title: "Social Media Manager",
  },
]

export default function page() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 rotate-180 bg-backgroundSVG bg-cover bg-center"></div>
        <div className="container relative py-14">
          <h2 className="text-[28px] font-bold text-white lg:text-5xl">
            Work for Us
          </h2>
          <p className="text-sm font-light text-white lg:text-lg lg:font-normal">
            See our latest vacancies below.
          </p>
        </div>
      </div>
      <section className="container items-center pb-9 pt-12">
        <div className="grid gap-5 md:grid-cols-2">
          {jobs.map((job, index) => (
            <JobsCards key={index} job={job} />
          ))}
        </div>
      </section>
    </>
  )
}
