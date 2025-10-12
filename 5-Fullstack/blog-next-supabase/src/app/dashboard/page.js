import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import PostForm from '../components/PostForm'
import Link from 'next/link'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }
  
  const { data: posts } = await supabase.from('posts').select('*').eq('user_id', session.user.id)

  // --- SERVER ACTION REFINADA ---
  async function createPostAction(prevState, formData) {
    'use server'
    const title = formData.get('title')
    const content = formData.get('content')
    
    // 1ª LINHA DE DEFESA: Validação rápida no servidor
    if (!title || title.length <= 3) {
      return { 
        message: 'Falha na validação.', 
        errors: { title: 'O título deve ter pelo menos 3 caracteres.' } 
      }
    }

    const supabase = createServerComponentClient({ cookies })
    const { error } = await supabase.from('posts').insert({ title, content, user_id: session.user.id })

    if (error) {
      // 2ª LINHA DE DEFESA: Tradução do erro do banco de dados
      if (error.message.includes('posts_title_check')) {
        return { 
          message: 'Falha na validação do banco de dados.', 
          errors: { title: 'O título deve ter pelo menos 3 caracteres.' } 
        }
      }
      // Para outros erros inesperados do banco de dados
      return { message: `Falha na comunicação com a base de dados.`, errors: {} }
    }

    revalidatePath('/dashboard')
    // Limpa o formulário no cliente enviando um estado de sucesso sem erros
    return { message: 'Post criado com sucesso!', errors: {} }
  }

  return (
    <div>
        <div className="flex justify-between items-center mb-4">
            <p>Bem-vindo, {session.user.email}</p>
            <form action="/auth/signout" method="post">
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Sair
                </button>
            </form>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Criar Novo Post</h2>
        
        <PostForm createPostAction={createPostAction} />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Seus Posts</h2>
        <div className="space-y-4">
            {posts?.map(post => 
                <Link key={post.id} href={`/post/${post.id}`} className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl text-blue-400 truncate">{post.title}</h3>
                </Link>
            )}
            {posts?.length === 0 && <p className="text-gray-400">Nenhum post criado ainda.</p>}
        </div>
    </div>
  )
}