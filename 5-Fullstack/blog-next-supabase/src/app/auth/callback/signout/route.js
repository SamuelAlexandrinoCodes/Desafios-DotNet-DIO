import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const supabase = createRouteHandlerClient({ cookies })

  // Ordem para invalidar a sessão do utilizador
  await supabase.auth.signOut()

  // Redireciona de volta para a página de login
  return NextResponse.redirect(new URL('/login', request.url), {
    status: 302,
  })
}