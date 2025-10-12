'use client'

import React, { useActionState } from 'react'

// Componente do botão que reflete o estado de submissão
function SubmitButton({ pending }) {
  return (
    <button type="submit" disabled={pending} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500">
      {pending ? 'A criar...' : 'Criar Post'}
    </button>
  )
}

// Componente principal do formulário
export default function PostForm({ createPostAction }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch, pending] = useActionState(createPostAction, initialState);

  return (
    <form action={dispatch} className="space-y-4 bg-gray-800 p-4 rounded-lg">
      <div>
        <input name="title" placeholder="Título do post" required className="w-full p-2 bg-gray-700 rounded text-white"/>
        {state.errors?.title && <p className="text-red-400 text-sm mt-1">{state.errors.title}</p>}
      </div>
      <div>
        <textarea name="content" placeholder="Conteúdo do post" required className="w-full p-2 bg-gray-700 rounded h-32 text-white"></textarea>
      </div>
      <SubmitButton pending={pending} />
      {state.message && state.errors && <p className="text-red-400 text-sm mt-1">{state.message}</p>}
    </form>
  )
}