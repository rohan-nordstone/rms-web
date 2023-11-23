import { Card } from "@/components/ui/card"

export default function FromTheCreator() {
  return (
    <Card className="relative mb-14 p-8">
      <h3 className="mb-3 text-base font-bold uppercase leading-[30.50px] text-secondary">
        From the Creator
      </h3>
      <div className="grid gap-x-20 gap-y-6 lg:grid-cols-2">
        <div className="grid-span-1">
          <div className="relative mb-16">
            <div className="aspect-h-4 aspect-w-3 sm:aspect-h-3 sm:aspect-w-4 md:aspect-h-10 md:aspect-w-16 lg:aspect-h-3 lg:aspect-w-3">
              <img
                className="rounded-2xl object-cover"
                src={"/user/Valeria-Sistrunk-Heashot-300x273 1.webp"}
                alt="Valeria-Sistrunk-Heashot"
              />
            </div>
            <Card className="absolute -bottom-8 right-5 overflow-hidden rounded-2xl rounded-tl-sm py-4 pl-8 pr-3 shadow-lg sm:px-11 lg:-right-16 lg:bottom-8">
              <div className="text-2xl font-semibold leading-[33px] text-black">
                Valeria Sistrunk
              </div>
              <div className="text-base font-light leading-relaxed text-zinc-500">
                RateMyStation.com Creator
              </div>
              <div className="absolute bottom-0 left-0 top-0 w-4 bg-primary"></div>
            </Card>
          </div>
        </div>
        <div className="grid-span-1 text-base font-normal leading-relaxed text-black">
          I decided to create Rate My Station in November 2017, almost a year
          after I left the newsroom forever.
          <br />
          <br />
          For years I worked as a Reporter/MMJ/Anchor, and spent time at two
          news stations that just weren’t right for me. In fact, my last News
          Director created such a toxic work environment I eventually lost my
          passion for local news. So I left.
          <br />
          <br />A few months later, I decided to do something to help prevent
          others from being trapped in a toxic newsroom.
          <br />
          <br />
          If you’ve ever worked for a bad news station, then you know how
          difficult, and risky, it can be to try and warn new hires about what’s
          really going on in the newsroom. Plus, News Directors are always great
          at hiding anything that might make us reconsider taking the job.
          <br />
          <br />
          So I created this website, to shine a light on the newsrooms you
          should probably avoid, while highlighting the news stations you’ll
          definitely want to apply to.
          <br />
          <br />
          Today, Rate My Station has helped thousands find the best news station
          to work for, and with your support, we can help thousands more in the
          future!
          <br />
          <br />
        </div>
      </div>
    </Card>
  )
}
