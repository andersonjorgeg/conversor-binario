import { Inter } from 'next/font/google'
import ConversorBinario from '@/components/ConversorBinario'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen">
      <ConversorBinario />
    </main>
  )
}
