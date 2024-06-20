import { BgGrid } from "@/components/bg-grid/bg-grid"

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <div className="text-sm font-extralight">Alex Vyber Portfolio v2.0</div>
      <BgGrid />
    </div>
  )
}
