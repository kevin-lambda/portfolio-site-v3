import "@/styles/index.scss"
import { Navbar, Footer } from "@/components/index"

export const metadata = {
  title: "Kevin Lam",
  description: "Kevin Lam Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
