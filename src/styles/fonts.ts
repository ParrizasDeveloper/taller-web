import { Archivo, Geist, Geist_Mono, Roboto_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"],
})

const roboto = Roboto_Mono({
    variable: "--font-roboto",
    subsets: ["latin"],
})

export { geistSans, geistMono, archivo, roboto };