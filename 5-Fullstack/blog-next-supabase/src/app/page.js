import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const { data: posts } = await supabase.from('posts').select('*')

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Fazer Login
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Posts Recentes</h2>
      <div className="space-y-4">
        {posts?.map((post) => (
          // O item da lista agora é um Link
          <Link key={post.id} href={`/post/${post.id}`} className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
            <h3 className="text-xl text-blue-400 truncate">{post.title}</h3>
            {/* Adicionamos uma prévia do conteúdo */}
            <p className="text-gray-400 mt-2 line-clamp-2">{post.content}</p>
          </Link>
        ))}
        {posts?.length === 0 && <p>Nenhum post encontrado.</p>}
      </div>
    </div>
  )
}