import DesktopRecommendations from "./DesktopRecommendations"
import NewsletterCTA from "./NewsletterCTA"
import SocialsCTA from "./SocialsCTA"

export default async function CallForActionSidebar() {
  return (
    <>
      <DesktopRecommendations />
      <NewsletterCTA className="max-w-[284px] xl:max-w-[384px]" />
      <div className="flex items-end justify-between">
        <span className="pb-5 pt-12 text-2xl font-bold">Follow RMS</span>
      </div>
      <SocialsCTA />
    </>
  )
}
