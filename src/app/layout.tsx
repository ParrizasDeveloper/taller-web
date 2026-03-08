import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { roboto } from "@/styles/fonts";



export const metadata: Metadata = {
  title: "Talleres D'Cars",
  description: "Talleres D'Cars es un taller de reparación de automóviles ubicado en la ciudad de Córdoba, Argentina. Ofrecemos servicios de mantenimiento y reparación para todo tipo de vehículos, desde autos hasta camionetas y motos. Nuestro equipo de mecánicos altamente capacitados se dedica a brindar un servicio de calidad y confiable a nuestros clientes. En Talleres D'Cars, nos comprometemos a garantizar la satisfacción del cliente y la seguridad en cada trabajo que realizamos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
