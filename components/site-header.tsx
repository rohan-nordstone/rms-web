import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

export function SiteHeader() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </>
  )
}
