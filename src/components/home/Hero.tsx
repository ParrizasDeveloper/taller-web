"use client"
import { archivo } from "@/styles/fonts"
import { useRef } from "react"

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  return (
    <section ref={container}>
      <div className="grid grid-cols-12 pt-20">
        <div className={`${archivo.className} col-span-12 md:col-span-6 flex flex-col gap-4 text-2xl md:text-4xl`}>
          <div>TU EQUIPO DE INGENIERÍA</div>
          <div>PRECISIÓN SIN CONCESIONES</div>
        </div>
      </div>
    </section>
  )
}
