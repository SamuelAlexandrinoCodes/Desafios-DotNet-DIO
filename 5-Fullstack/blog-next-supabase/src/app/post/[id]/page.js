import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import DeleteButton from './DeleteButton'

export const revalidate = 0

export default async function PostPage({ params }) {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const { data: post } = await supabase.from('posts').select('*').eq('id', params.id).single()

  if (!post) {
    notFound()
  }

  const isOwner = session?.user?.id === post.user_id;

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        {session ? (
          <Link href="/dashboard" className="text-blue-400 hover:underline">&larr; Voltar para o Dashboard</Link>
        ) : (
          <Link href="/" className="text-blue-400 hover:underline">&larr; Voltar para todos os posts</Link>
        )}
        
        {/* Renderiza os botões de ação apenas se for o dono */}
        {isOwner && (
          <div className="flex space-x-2">
            <Link href={`/post/${post.id}/edit`} className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Editar
            </Link>
            <DeleteButton postId={post.id} />
          </div>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-8">Publicado em: {new Date(post.inserted_at).toLocaleDateString()}</p>
      <div className="text-gray-300 whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  )
}