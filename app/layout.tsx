import './globals.css'

export const metadata = {
  title: 'Jason & Jolee Wedding',
  description: 'RSVP Here - Done by Jason',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
