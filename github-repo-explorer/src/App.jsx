import React, { useState } from 'react';
import axios from 'axios';

// --- Ícones SVG para feedback visual ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// --- Componente Header ---
// Contém o input e o botão de busca
const Header = ({ username, setUsername, onSearch, isLoading }) => (
  <header className="bg-gray-800 p-6 rounded-t-xl shadow-lg">
    <h1 className="text-3xl font-bold text-white text-center mb-4">GitHub Repo Explorer</h1>
    <div className="flex space-x-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        placeholder="Digite um nome de usuário do GitHub"
        className="flex-grow p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        disabled={isLoading}
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition flex items-center"
        disabled={isLoading}
      >
        <SearchIcon />
      </button>
    </div>
  </header>
);

// --- Componente RepoCard ---
// Exibe as informações de um único repositório
const RepoCard = ({ repo }) => (
  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block bg-gray-700 p-4 rounded-lg hover:bg-gray-600 hover:scale-105 transition-transform duration-200">
    <h3 className="text-xl font-semibold text-blue-400 truncate">{repo.name}</h3>
    <p className="text-gray-400 mt-1 text-sm h-10 overflow-hidden">{repo.description || 'Sem descrição.'}</p>
    <div className="flex items-center mt-3 text-sm text-gray-300">
      <StarIcon />
      <span>{repo.stargazers_count}</span>
    </div>
  </a>
);

// --- Componente RepoList ---
// Responsável por renderizar a lista de repositórios ou os estados de loading/erro
const RepoList = ({ repos, isLoading, error }) => {
  if (isLoading) {
    return <p className="text-center text-gray-400 p-8">Buscando repositórios...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 p-8">{error}</p>;
  }

  if (repos.length === 0) {
    return <p className="text-center text-gray-400 p-8">Nenhum repositório encontrado. Digite um usuário e clique em buscar.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {repos.map(repo => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

// --- Componente Principal ---
function App() {
  const [username, setUsername] = useState('SamuelAlexandrinoCodes'); // Inicia com seu usuário como exemplo
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Função de busca que chama a API do GitHub
  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Por favor, digite um nome de usuário.");
      setRepos([]);
      return;
    }

    setIsLoading(true);
    setError('');
    setRepos([]);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      // Ordena os repositórios por número de estrelas, do maior para o menor
      const sortedRepos = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(sortedRepos);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Usuário não encontrado. Verifique o nome e tente novamente.');
      } else {
        setError('Ocorreu um erro ao buscar os repositórios. Tente novamente mais tarde.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen flex justify-center p-4 pt-10 font-sans">
      <div className="w-full max-w-4xl">
        <div className="bg-gray-800 rounded-xl shadow-2xl">
          <Header username={username} setUsername={setUsername} onSearch={handleSearch} isLoading={isLoading} />
          <RepoList repos={repos} isLoading={isLoading} error={error} />
        </div>
      </div>
    </main>
  );
}

export default App;

