import './globals.css'
import UserContext from '@/UserContext/UserContext.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <UserContext>{children}</UserContext>
        </body>
    </html>
  )
}
