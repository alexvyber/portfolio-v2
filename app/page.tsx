import { BgGrid } from "@/components/bg-grid/bg-grid"
import { Deck } from "@/components/deck"

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <BgGrid />
      <div className="text-sm font-extralight">Alex Vyber Portfolio v2.0</div>
      <Deck />
    </div>
  )
}
