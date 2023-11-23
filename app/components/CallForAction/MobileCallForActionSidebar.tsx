import MobileRecommendations from "./MobileRecommendations"
import NewsletterCTA from "./NewsletterCTA"
import SocialsCTA from "./SocialsCTA"

export default async function MobileCallForActionSidebar() {
  return (
    <>
      <MobileRecommendations />
      <NewsletterCTA className="mb-16" />
      <div className="space-y-6 md:hidden">
        <h4 className="text-3xl font-bold text-black">Follow RMS</h4>
        <SocialsCTA />
      </div>
    </>
  )
}
