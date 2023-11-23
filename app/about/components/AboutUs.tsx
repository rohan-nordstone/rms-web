import { Card } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <Card className="relative p-8">
      <div className="mb-3 text-base font-bold uppercase leading-[30.50px] text-secondary">
        About Us
      </div>
      <div className="text-base font-normal leading-[33px] text-black lg:text-2xl lg:font-semibold">
        We offers a safe place for people in TV news to anonymously review a
        news station they work for, or have worked for in the past, without fear
        of retribution. <br />
        <br />
        Plus, you can subscribe to our job center for access to job
        applications, hand picked from the most highly rated stations.
        <br />
        <br />
        Rate My Station also offers a newsletter written by two women who still
        work in the business, and a Vlog produced by the website’s creator,
        Valeria.
      </div>
    </Card>
  )
}
