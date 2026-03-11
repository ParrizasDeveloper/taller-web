"use client"
import { rajdhani } from "@/styles/fonts"
import { PhoneCall } from "lucide-react"
import { useRef } from "react"
import EngineCanvas from "./EngineCanvas"
import { brands } from "@/data/brands"
import MainCTA from "../buttons/mainCTA"



export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  return (
    <section ref={container} className="h-screen">
      <div 
        className={`
          relative grid grid-cols-12 pt-header-mobile px-neutral z-10 h-full min-h-0
          lg:px-lg
        `}
      >
        <div 
          className={`
            col-span-full flex flex-col justify-between pb-neutral
            lg:col-span-7 lg:grid lg:grid-rows-[1fr_auto] lg:pb-lg
          `}
        >
          <div className="flex flex-col justify-center">
            <div className={`
              ${rajdhani.className} font-semibold text-[10vw] lg:text-[clamp(2rem,7.5vw,8rem)] leading-[1em] tracking-[-0.05em]
            `}>
              <h1>Ingeniería aplicada.</h1>
              <h1>Tracción extrema.</h1>
            </div>
            <p 
              className={`
                my-neutral leading-[1.3em] text-text-secondary tracking-[-0.05em]
                max-w-[600px]
              `}>
              Mecánica de precisión que funciona como tu equipo de boxes privado. 
              Una tarifa clara, diagnóstico continuo y sin sorpresas en la factura.
            </p>
            <div className="flex gap-neutral mt-neutral items-center">
              <MainCTA
                href="tel:+34600000000"
                label="LLAMAR AHORA"
                icon={PhoneCall}
                ariaLabel="Llamar ahora al taller"
              />
              <a 
                href="mailto:presupuesto@example.com" 
                className="relative flex flex-col gap-2 items-center"
              >
                <span>Pedir presupuesto</span>
                <div className="inset-x-0 bg-text-primary h-px w-full bottom-0"></div>
              </a>
            </div>
          </div>
          <div className={`
            relative z-10 text-text-secondary text-xs flex flex-col text-center gap-neutral bg-transparent
            lg:items-start
          `}>
            <p className="text-center">SOLUCIONES TÉCNICAS PARA QUIENES BUSCAN LA PERFECCIÓN.</p>
            <div className="flex flex-wrap items-center gap-2 justify-center">
              <div className="flex justify-center gap-neutral h-10">
                {
                  brands.map((brand) => (
                    <div key={brand.name} className="group flex items-center justify-center">
                      <div
                        style={{
                          maskImage: `url(${brand.logoUrl})`,
                          WebkitMaskImage: `url(${brand.logoUrl})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center',
                        }}
                        className="aspect-square h-full bg-text-secondary group-hover:bg-accent transition-colors duration-300"
                      />
                    </div>
                  ))
                }
              </div>
              <div>+ MUCHAS MÁS</div>
            </div>
          </div>
        </div>
        <EngineCanvas 
          className={`
            absolute inset-x-0 bottom-0 top-[38%] w-full mx-auto opacity-100 z-0
            lg:right-0 lg:col-span-5 lg:relative lg:top-0
          `} />
      </div>
    </section>
  )
}