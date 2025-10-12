'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function DeleteButton({ postId }) {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleDelete = async () => {
    if (window.confirm('Tem a certeza que deseja deletar este post? Esta ação é irreversível.')) {
      await supabase.from('posts').delete().eq('id', postId)
      // Força a atualização do router e redireciona
      router.refresh()
      router.push('/dashboard')
    }
  }

  return (
    <button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Deletar
    </button>
  )
}