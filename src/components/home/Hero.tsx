"use client"
import { geistMono, geistSans } from "@/styles/fonts"
import { Phone, PhoneCall } from "lucide-react"
import { useRef } from "react"
import EngineCanvas from "./EngineCanvas"

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  return (
    <section ref={container} className="h-screen">
      <div className="relative grid grid-cols-12 pt-header-mobile px-neutral z-10">
        <div className={`${geistSans.className} col-span-full text-[9vw] leading-[1.1em] tracking-[-0.05em]`}>
          <h1>Ingeniería aplicada.</h1>
          <h1 className="text-accent">Tracción extrema.</h1>
        </div>
        <p 
          className={`
            col-span-full my-neutral leading-[1.3em] text-text-secondary tracking-[-0.05em]
            max-w-[600px]
          `}>
          Mecánica de precisión que funciona como tu equipo de boxes privado. 
          Una tarifa clara, diagnóstico continuo y sin sorpresas en la factura.
        </p>
        <div className="flex col-span-full gap-neutral mt-neutral">
          <div className={`${geistMono.className} flex gap-1 text-black text-sm`}>
            <div className=" bg-accent font-medium px-2 py-1.5 flex items-center">
              LLAMAR AHORA
            </div>
            <div className="bg-accent p-1.5 flex items-center justify-center aspect-square">
              <PhoneCall className="stroke-[1.5] size-[1.3em]" />
            </div>
          </div>
          <div className="relative flex items-center">
            Pedir presupuesto
            <div className="absolute inset-x-0 bottom-0 bg-text-primary h-px"></div>
          </div>
        </div>
      </div>
      <EngineCanvas />
    </section>
  )
}