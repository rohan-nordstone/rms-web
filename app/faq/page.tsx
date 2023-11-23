import { Card } from "@/components/ui/card"

import ContactUsCTA from "./components/ContactUsCTA"
import FAQCategory from "./components/FAQCategory"
import FAQSearch from "./components/FAQSearch"
import Top10FAQ from "./components/Top10FAQ"

export default function page() {
  return (
    <>
      {/* <div className="space-y-12 bg-backgroundSVG bg-cover bg-center">
        <div className="container space-y-12 py-16">
          <h1 className="text-center text-[28px] font-bold text-white md:text-start md:text-5xl">
            How can we help?
          </h1>
          <FAQSearch />
        </div>
      </div>
      <section className="container items-center pb-8 pt-12">
        <Card className="p-5 md:px-7 md:py-8">
          <h3 className="mb-9 text-2xl font-bold leading-[30.50px] text-black">
            Top 10 question
          </h3>
          <Top10FAQ />
        </Card>
        <FAQCategory />
        <ContactUsCTA />
      </section> */}
    </>
  )
}
