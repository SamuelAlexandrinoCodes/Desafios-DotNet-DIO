import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export default async function EditPost({ params }) {
  const supabase = createServerComponentClient({ cookies })

  // 1. Busca a sessão para garantir que o utilizador está logado
  const { data: { session } } = await supabase.auth.getSession()

  // 2. Busca os dados do post a ser editado
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!post) {
    notFound()
  }

  // 3. Defesa: se o utilizador não for o dono do post, redireciona
  if (session?.user.id !== post.user_id) {
    redirect('/dashboard')
  }
  
  // 4. A Server Action que executa a atualização
  async function updatePostAction(formData) {
    'use server'
    const title = formData.get('title')
    const content = formData.get('content')
    
    if (!title || title.length < 3) {
      // Num projeto real, teríamos um feedback de erro mais robusto
      return
    }

    const supabase = createServerComponentClient({ cookies })
    await supabase
      .from('posts')
      .update({ title, content })
      .eq('id', post.id)

    // Revalida os caches e redireciona de volta para a página do post
    revalidatePath(`/post/${post.id}`)
    revalidatePath('/dashboard')
    redirect(`/post/${post.id}`)
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <Link href={`/post/${post.id}`} className="text-blue-400 hover:underline mb-6 block">&larr; Cancelar Edição</Link>
      <h1 className="text-4xl font-bold mb-6">Editar Post</h1>
      <form action={updatePostAction}>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">Título</label>
            <input 
              id="title" 
              name="title" 
              defaultValue={post.title} 
              required 
              className="w-full p-2 bg-gray-700 rounded text-white"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">Conteúdo</label>
            <textarea 
              id="content" 
              name="content" 
              defaultValue={post.content} 
              required 
              className="w-full p-2 bg-gray-700 rounded h-48 text-white"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  )
}