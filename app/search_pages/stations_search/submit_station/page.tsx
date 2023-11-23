import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import SubmitStationForm from "./components/SubmitStationForm"

export default function page() {
  return (
    <section className="container">
      <Card className="mb-8 mt-16 p-9">
        <h4 className="text-4xl font-bold text-black">
          Fill out the form with the Station information
        </h4>
        <Separator className="my-9 border-stone-300" />
        <SubmitStationForm />
      </Card>
    </section>
  )
}
