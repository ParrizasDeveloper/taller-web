import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
