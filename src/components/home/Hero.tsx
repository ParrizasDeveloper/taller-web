"use client"
import { geistMono, geistSans } from "@/styles/fonts"
import { PhoneCall } from "lucide-react"
import { useRef } from "react"
import EngineCanvas from "./EngineCanvas"

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  return (
    <section ref={container} className="h-screen">
      <div className="relative grid grid-cols-12 grid-rows-[auto_minmax(0,1fr)] pt-header-mobile px-neutral z-10 h-full min-h-0">
        <div className="col-span-full">
          <div className={`
            ${geistSans.className}  text-[9vw] leading-[1.1em] tracking-[-0.05em]
          `}>
            <h1>Ingeniería aplicada.</h1>
            <h1 className="text-accent">Tracción extrema.</h1>
          </div>
          <p 
            className={`
              my-neutral leading-[1.3em] text-text-secondary tracking-[-0.05em]
              max-w-[600px]
            `}>
            Mecánica de precisión que funciona como tu equipo de boxes privado. 
            Una tarifa clara, diagnóstico continuo y sin sorpresas en la factura.
          </p>
          <div className="flex gap-neutral mt-neutral">
            <div className={`${geistMono.className} flex gap-1 text-black text-sm`}>
              <div className=" bg-accent font-medium px-2 py-1.5 flex items-center whitespace-nowrap">
                LLAMAR AHORA
              </div>
              <div className="bg-accent p-1.5 flex items-center justify-center aspect-square">
                <PhoneCall className="stroke-[1.5] size-[1.3em]" />
              </div>
            </div>
            <div className="relative flex items-center">
              Pedir presupuesto
              <div className="absolute inset-x-0 bg-text-primary h-px bottom-0"></div>
            </div>
          </div>
        </div>
        
        <EngineCanvas className="absolute inset-x-0 bottom-0 top-[35%] w-9/10 mx-auto" />
      </div>
      
    </section>
  )
}