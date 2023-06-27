import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'



export const metadata = {
  title: 'Flexibble 2.0',
  description: 'Showcase and Discover remarkable developer projects for',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
              {/* navbar */}
        <Navbar />
        <main>
          {children}
          </main>
              {/* footer */}
        <Footer />
      </body>
    </html>
  )
}
