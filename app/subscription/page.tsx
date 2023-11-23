import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function page() {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-0 h-[456px] bg-backgroundSVG bg-cover bg-center bg-no-repeat p-16"></div>
      <section className="container relative items-center pb-8 pt-20">
        <Card className="grid grid-cols-3 gap-x-2 px-3 py-5 lg:py-8">
          <div className="col-span-3 flex flex-col gap-x-10 gap-y-6 xl:col-span-1 xl:flex-col">
            <div className="mx-auto max-w-[900px]">
              <div>
                <h1 className="mb-4 text-3xl font-bold leading-[33.60px] text-black sm:text-4xl md:text-5xl md:leading-[63px]">
                  Subscribe Now!
                </h1>
                <p className="text-base font-light leading-relaxed text-black xl:max-w-sm">
                  Subscribe today to get instant access to all the latest
                  television newsroom job openings, exclusively from our most
                  highly rated stations.
                  <br />
                  <br />
                  As a subscriber, you will also have access to:
                </p>
              </div>
              <div className="my-6 flex flex-col gap-5">
                <div className="flex">
                  <div>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-1.5 mr-4 inline-block h-4 w-4"
                    >
                      <path
                        id="Vector"
                        d="M8.53248 16.0309C4.28138 16.053 0.760945 12.5592 0.743232 8.30808C0.725519 3.9817 4.18396 0.49669 8.51919 0.47012C12.7703 0.443551 16.2952 3.95513 16.3084 8.2328C16.3262 12.5282 12.85 16.0132 8.53248 16.0309ZM7.81953 9.07416C7.75311 8.9856 7.72654 8.92803 7.68226 8.88818C7.19515 8.39664 6.70362 7.90954 6.21652 7.42243C6.01282 7.21874 5.76927 7.1346 5.49029 7.21431C4.9589 7.36487 4.80391 8.00253 5.20245 8.4055C5.87554 9.08302 6.55306 9.76054 7.23058 10.4336C7.62912 10.8322 8.00552 10.8322 8.40849 10.4336C9.26756 9.57455 10.1266 8.71548 10.9857 7.8564C11.2691 7.57299 11.5481 7.29401 11.8315 7.01061C12.0352 6.80248 12.1016 6.55893 12.0175 6.27995C11.8536 5.75742 11.2204 5.62457 10.8174 6.02754C9.86095 6.97961 8.90888 7.93168 7.95681 8.88818C7.91253 8.92803 7.88596 8.9856 7.81953 9.07416Z"
                        fill="#89C400"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium leading-relaxed text-black">
                    Station Ratings
                  </h4>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-1.5 mr-4 inline-block h-4 w-4"
                    >
                      <path
                        id="Vector"
                        d="M8.53248 16.0309C4.28138 16.053 0.760945 12.5592 0.743232 8.30808C0.725519 3.9817 4.18396 0.49669 8.51919 0.47012C12.7703 0.443551 16.2952 3.95513 16.3084 8.2328C16.3262 12.5282 12.85 16.0132 8.53248 16.0309ZM7.81953 9.07416C7.75311 8.9856 7.72654 8.92803 7.68226 8.88818C7.19515 8.39664 6.70362 7.90954 6.21652 7.42243C6.01282 7.21874 5.76927 7.1346 5.49029 7.21431C4.9589 7.36487 4.80391 8.00253 5.20245 8.4055C5.87554 9.08302 6.55306 9.76054 7.23058 10.4336C7.62912 10.8322 8.00552 10.8322 8.40849 10.4336C9.26756 9.57455 10.1266 8.71548 10.9857 7.8564C11.2691 7.57299 11.5481 7.29401 11.8315 7.01061C12.0352 6.80248 12.1016 6.55893 12.0175 6.27995C11.8536 5.75742 11.2204 5.62457 10.8174 6.02754C9.86095 6.97961 8.90888 7.93168 7.95681 8.88818C7.91253 8.92803 7.88596 8.9856 7.81953 9.07416Z"
                        fill="#89C400"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium leading-relaxed text-black">
                    Email updates when new jobs become available
                  </h4>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-1.5 mr-4 inline-block h-4 w-4"
                    >
                      <path
                        id="Vector"
                        d="M8.53248 16.0309C4.28138 16.053 0.760945 12.5592 0.743232 8.30808C0.725519 3.9817 4.18396 0.49669 8.51919 0.47012C12.7703 0.443551 16.2952 3.95513 16.3084 8.2328C16.3262 12.5282 12.85 16.0132 8.53248 16.0309ZM7.81953 9.07416C7.75311 8.9856 7.72654 8.92803 7.68226 8.88818C7.19515 8.39664 6.70362 7.90954 6.21652 7.42243C6.01282 7.21874 5.76927 7.1346 5.49029 7.21431C4.9589 7.36487 4.80391 8.00253 5.20245 8.4055C5.87554 9.08302 6.55306 9.76054 7.23058 10.4336C7.62912 10.8322 8.00552 10.8322 8.40849 10.4336C9.26756 9.57455 10.1266 8.71548 10.9857 7.8564C11.2691 7.57299 11.5481 7.29401 11.8315 7.01061C12.0352 6.80248 12.1016 6.55893 12.0175 6.27995C11.8536 5.75742 11.2204 5.62457 10.8174 6.02754C9.86095 6.97961 8.90888 7.93168 7.95681 8.88818C7.91253 8.92803 7.88596 8.9856 7.81953 9.07416Z"
                        fill="#89C400"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium leading-relaxed text-black">
                    Application tips for individual stations
                  </h4>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-1.5 mr-4 inline-block h-4 w-4"
                    >
                      <path
                        id="Vector"
                        d="M8.53248 16.0309C4.28138 16.053 0.760945 12.5592 0.743232 8.30808C0.725519 3.9817 4.18396 0.49669 8.51919 0.47012C12.7703 0.443551 16.2952 3.95513 16.3084 8.2328C16.3262 12.5282 12.85 16.0132 8.53248 16.0309ZM7.81953 9.07416C7.75311 8.9856 7.72654 8.92803 7.68226 8.88818C7.19515 8.39664 6.70362 7.90954 6.21652 7.42243C6.01282 7.21874 5.76927 7.1346 5.49029 7.21431C4.9589 7.36487 4.80391 8.00253 5.20245 8.4055C5.87554 9.08302 6.55306 9.76054 7.23058 10.4336C7.62912 10.8322 8.00552 10.8322 8.40849 10.4336C9.26756 9.57455 10.1266 8.71548 10.9857 7.8564C11.2691 7.57299 11.5481 7.29401 11.8315 7.01061C12.0352 6.80248 12.1016 6.55893 12.0175 6.27995C11.8536 5.75742 11.2204 5.62457 10.8174 6.02754C9.86095 6.97961 8.90888 7.93168 7.95681 8.88818C7.91253 8.92803 7.88596 8.9856 7.81953 9.07416Z"
                        fill="#89C400"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium leading-relaxed text-black">
                    News Director’s emails
                  </h4>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="m-1.5 mr-4 inline-block h-4 w-4"
                    >
                      <path
                        id="Vector"
                        d="M8.53248 16.0309C4.28138 16.053 0.760945 12.5592 0.743232 8.30808C0.725519 3.9817 4.18396 0.49669 8.51919 0.47012C12.7703 0.443551 16.2952 3.95513 16.3084 8.2328C16.3262 12.5282 12.85 16.0132 8.53248 16.0309ZM7.81953 9.07416C7.75311 8.9856 7.72654 8.92803 7.68226 8.88818C7.19515 8.39664 6.70362 7.90954 6.21652 7.42243C6.01282 7.21874 5.76927 7.1346 5.49029 7.21431C4.9589 7.36487 4.80391 8.00253 5.20245 8.4055C5.87554 9.08302 6.55306 9.76054 7.23058 10.4336C7.62912 10.8322 8.00552 10.8322 8.40849 10.4336C9.26756 9.57455 10.1266 8.71548 10.9857 7.8564C11.2691 7.57299 11.5481 7.29401 11.8315 7.01061C12.0352 6.80248 12.1016 6.55893 12.0175 6.27995C11.8536 5.75742 11.2204 5.62457 10.8174 6.02754C9.86095 6.97961 8.90888 7.93168 7.95681 8.88818C7.91253 8.92803 7.88596 8.9856 7.81953 9.07416Z"
                        fill="#89C400"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium leading-relaxed text-black">
                    Weekly Newsletter updates
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 xl:col-span-2">
            <div className="mx-auto my-6 flex flex-wrap justify-center gap-5">
              <Card className="group flex min-w-[250px] flex-col justify-start border-2 p-3 pt-0 hover:border-secondary lg:p-7 lg:pt-0">
                <div className="flex h-11 items-center justify-center rounded-b-2xl bg-neutral-200 text-center text-xl font-semibold leading-relaxed text-muted-foreground text-zinc-500 group-hover:bg-secondary group-hover:text-white">
                  <h2 className="text-center text-base font-semibold leading-relaxed text-zinc-500 group-hover:text-white lg:text-xl">
                    Starter
                  </h2>
                </div>
                <h1 className="mt-12 text-center text-4xl font-bold leading-relaxed text-secondary">
                  1 Month
                </h1>
                <p className="text-center text-2xl font-light leading-relaxed text-zinc-500">
                  subcription
                </p>
                <h3 className="mt-8 text-center text-2xl font-semibold leading-relaxed text-black">
                  $34.95/m
                </h3>
                <Button
                  variant="secondary_outline"
                  className="mt-auto min-h-[46px] w-full rounded-[10px]"
                >
                  Subscribe
                </Button>
              </Card>
              <Card className="group flex min-w-[250px] flex-col justify-start border-2 p-3 pt-0 hover:border-secondary lg:p-7 lg:pt-0">
                <div className="flex h-11 items-center justify-center rounded-b-2xl bg-neutral-200 text-center text-xl font-semibold leading-relaxed text-muted-foreground text-zinc-500 group-hover:bg-secondary group-hover:text-white">
                  <h2 className="text-center text-base font-semibold leading-relaxed text-zinc-500 group-hover:text-white lg:text-xl">
                    Recommendation
                  </h2>
                </div>
                <h1 className="mt-12 text-center text-4xl font-bold leading-relaxed text-secondary">
                  2 Months
                </h1>
                <p className="text-center text-2xl font-light leading-relaxed text-zinc-500">
                  subcription
                </p>
                <h3 className="mt-8 text-center text-2xl font-semibold leading-relaxed text-black">
                  $19.95/m
                </h3>
                <Badge className="mx-auto my-4 inline-block cursor-default px-4 py-1 hover:bg-primary-hover">
                  Save more than 30%
                </Badge>
                <Button
                  variant="secondary_outline"
                  className="mt-auto min-h-[46px] w-full rounded-[10px]"
                >
                  Subscribe
                </Button>
              </Card>
              <Card className="group flex min-w-[250px] flex-col justify-start border-2 p-3 pt-0 hover:border-secondary lg:p-7 lg:pt-0">
                <div className="flex h-11 items-center justify-center rounded-b-2xl bg-neutral-200 text-center text-xl font-semibold leading-relaxed text-muted-foreground text-zinc-500 group-hover:bg-secondary group-hover:text-white">
                  <h2 className="text-center text-base font-semibold leading-relaxed text-zinc-500 group-hover:text-white lg:text-xl">
                    Best Value
                  </h2>
                </div>
                <h1 className="mt-12 text-center text-4xl font-bold leading-relaxed text-secondary">
                  6 Months
                </h1>
                <p className="text-center text-2xl font-light leading-relaxed text-zinc-500">
                  subcription
                </p>
                <h3 className="mt-8 text-center text-2xl font-semibold leading-relaxed text-black">
                  $9.95/m
                </h3>
                <Badge className="mx-auto my-4 inline-block cursor-default px-4 py-1 hover:bg-primary-hover">
                  Save more than 40%
                </Badge>
                <Button
                  variant="secondary_outline"
                  className="mt-auto min-h-[46px] w-full rounded-[10px]"
                >
                  Subscribe
                </Button>
              </Card>
            </div>
            <div className="mx-auto flex w-full max-w-[900px] flex-col items-center justify-between gap-x-5 gap-y-3 rounded-lg bg-primary p-3 sm:flex-row sm:p-6">
              <div className="text-base font-light leading-relaxed text-white">
                New Subscribers!{" "}
                <span className="font-bold">
                  Get 50% off your first payment!{" "}
                </span>
                Use this Discount Code:
              </div>
              <Button className="min-h-[45px] min-w-[149px] rounded-[5px] border border-dashed border-white">
                MYSTATION
              </Button>
            </div>
          </div>
          <Separator className="col-span-3 my-6 lg:my-9" />
          <div className="col-span-3 flex flex-wrap items-center justify-between gap-5">
            <div className="sm:flex sm:gap-3">
              <div className="sm:mr-none float-left mb-3 mr-5 sm:float-none sm:mb-0 sm:inline-block">
                <svg
                  width="29"
                  height="39"
                  viewBox="0 0 29 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M25.8845 38.5818C18.2128 38.5818 10.5412 38.5818 2.86952 38.5818C2.52336 38.4795 2.16784 38.4145 1.84975 38.2564C0.596087 37.6336 0.0253906 36.5926 0.0253906 35.2261C0.0253906 28.8215 0.0253906 22.4076 0.0253906 16.003C0.0253906 15.0642 0.259283 14.8318 1.1855 14.8318C1.84975 14.8318 2.52336 14.8318 3.21568 14.8318C3.21568 13.8093 3.21568 12.8332 3.21568 11.8572C3.21568 8.82688 4.20738 6.15907 6.34983 4.00252C9.27816 1.05584 12.8333 -0.00384486 16.903 0.888523C21.8335 1.9761 25.4448 6.38217 25.5103 11.4482C25.529 12.4335 25.5196 13.4282 25.5196 14.4135C25.5196 14.5436 25.5196 14.6738 25.5196 14.8318C26.2962 14.8318 27.0165 14.8318 27.7369 14.8318C28.3918 14.8318 28.7099 15.1385 28.7099 15.7799C28.7099 22.2961 28.7099 28.8215 28.7099 35.3377C28.7099 36.4159 28.3076 37.3455 27.4001 37.9497C26.9604 38.2472 26.3897 38.3773 25.8845 38.5818ZM20.7295 14.8225C20.7295 13.6791 20.7482 12.5637 20.7295 11.4575C20.7108 10.1004 20.2711 8.87336 19.4197 7.82297C17.8105 5.83373 15.6962 4.97854 13.1701 5.47121C10.616 5.96387 8.95071 7.5441 8.23033 10.0353C7.79061 11.5784 8.05257 13.1865 8.01515 14.7574C8.01515 14.776 8.04321 14.7946 8.07128 14.8225C12.272 14.8225 16.4727 14.8225 20.7295 14.8225ZM14.3396 32.2608C14.8167 32.2608 15.2845 32.2701 15.7617 32.2608C16.5101 32.2516 16.8282 31.8797 16.744 31.1547C16.585 29.8068 16.4353 28.4497 16.2949 27.1018C16.2856 26.9903 16.3417 26.8323 16.4259 26.7579C17.2773 26.005 17.6421 25.0847 17.5299 23.9414C17.3521 22.1473 15.4155 20.7902 13.6566 21.255C12.3936 21.5896 11.561 22.3983 11.2803 23.6625C11.009 24.8616 11.3832 25.9027 12.3188 26.7393C12.4123 26.823 12.4778 26.9903 12.4685 27.1111C12.3281 28.4776 12.1691 29.8347 12.0194 31.2012C11.9445 31.8611 12.2626 32.2423 12.9456 32.2516C13.3947 32.2701 13.8718 32.2608 14.3396 32.2608Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              <div className="text-base font-light leading-relaxed text-muted-foreground">
                Rate My Station is a secured website that never captures or
                stores credit card information.
                <br />
                All credit card transactions are handled by a 3rd party merchant
                processor (Stripe.com).
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-light leading-relaxed text-muted-foreground">
                We accept all major credit cards.
              </p>
              <img src="/shop/credit_cards.webp" alt="credit_cards" />
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
