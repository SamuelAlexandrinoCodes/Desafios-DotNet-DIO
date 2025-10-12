"use client";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const supabase = createClientComponentClient()
  const router = useRouter();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        router.push('/dashboard');
      }
    })
    return () => subscription.unsubscribe()
  }, [supabase, router])
  
  return (
    <div className="max-w-md mx-auto">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={['github']} // Opcional: permite login com GitHub
        redirectTo={`${location.origin}/auth/callback`}
      />
    </div>
  )
}