import './globals.css'

export const metadata = {
  title: 'Blog com Next.js e Supabase',
  description: 'Um projeto de blog fullstack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-900 text-white">
        <main className="max-w-4xl mx-auto p-4">
          <h1 className="text-4xl font-bold text-center my-8">Cidadela Digital</h1>
          {children}
        </main>
      </body>
    </html>
  )
}