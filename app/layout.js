import "@/styles/index.scss"
import { Navbar, Footer } from "@/components/index"

export const metadata = {
  title: "Kevin Lam",
  description: "Kevin Lam Portfolio",
}
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
