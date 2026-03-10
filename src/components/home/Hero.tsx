"use client"
import { geistMono, geistSans, rajdhani } from "@/styles/fonts"
import { PhoneCall } from "lucide-react"
import { useRef } from "react"
import EngineCanvas from "./EngineCanvas"
import { brands } from "@/data/brands"

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  return (
    <section ref={container} className="h-screen">
      <div className="relative grid grid-cols-12 pt-header-mobile px-neutral z-10 h-full min-h-0">
        <div 
          className={`
            col-span-full flex flex-col justify-between pb-neutral
            lg:col-span-7 lg:grid lg:grid-rows-[1fr_auto]`
          }
        >
          <div className="flex flex-col justify-center">
            <div className={`
              ${rajdhani.className} font-semibold text-[10vw] lg:text-[clamp(2rem,8vw,8rem)] leading-[1em] tracking-[-0.05em]
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
            <div className="flex gap-neutral mt-neutral">
              <div className={`${rajdhani.className} flex gap-1 text-black text-sm`}>
                <div className=" bg-accent font-semibold px-2 py-1.5 flex items-center whitespace-nowrap">
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
          <div className="relative z-10 text-text-secondary text-xs flex flex-col text-center gap-neutral bg-transparent">
            <p className="text-center">SOLUCIONES TÉCNICAS PARA QUIENES BUSCAN LA PERFECCIÓN.</p>
            <div className="flex flex-col gap-2">
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