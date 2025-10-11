import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaUser, FaEnvelope, FaLock, FaSignOutAlt } from 'react-icons/fa';

// --- Estilos Globais e Animações ---
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    background-color: #1E192C;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Componentes Estilizados (Reutilizáveis) ---
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const FormWrapper = styled.div`
  background-color: #2D273D;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #E0E0E0;
`;

const Subtitle = styled.p`
  color: #A0A0A0;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #8C8C8C;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  background-color: #1E192C;
  border: 1px solid ${({ hasError }) => (hasError ? '#E53E3E' : '#4A4A4A')};
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  transition: border-color 0.2s;
  &:focus { outline: none; border-color: #8A4BFF; }
  &::placeholder { color: #8C8C8C; }
`;

const Button = styled.button`
  padding: 14px;
  background-color: #8A4BFF;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  &:hover { background-color: #702de4; }
  &:active { transform: scale(0.98); }
  &:disabled { background-color: #5A5A5A; cursor: not-allowed; }
`;

const ErrorMessage = styled.p`
  color: #F56565;
  font-size: 0.875rem;
  margin-top: 4px;
  text-align: left;
  animation: ${fadeIn} 0.3s;
`;

const SuccessMessage = styled.div`
  color: #48BB78;
  background-color: rgba(72, 187, 120, 0.1);
  border: 1px solid #48BB78;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  animation: ${fadeIn} 0.5s;
`;

const LinkPrompt = styled.p`
  color: #A0A0A0;
  margin-top: 24px;
  font-size: 0.875rem;
  span {
    color: #8A4BFF;
    font-weight: 600;
    cursor: pointer;
    &:hover { text-decoration: underline; }
  }
`;

// --- Página de Cadastro (Register) ---
const RegisterPage = ({ onRegister, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onRegister(formData);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome completo é obrigatório.';
    if (!formData.email) newErrors.email = 'E-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Formato de e-mail inválido.';
    if (!formData.password) newErrors.password = 'Senha é obrigatória.';
    else if (formData.password.length < 6) newErrors.password = 'A senha deve ter no mínimo 6 caracteres.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'As senhas não coincidem.';
    return newErrors;
  };

  return (
    <FormWrapper>
      <Title>Crie sua conta</Title>
      <Subtitle>Faça seu cadastro para começar.</Subtitle>
      <Form onSubmit={handleSubmit} noValidate>
        {/* Inputs para nome, email, senha... */}
        <InputGroup>
          <IconWrapper><FaUser /></IconWrapper>
          <Input type="text" name="name" placeholder="Nome completo" value={formData.name} onChange={handleChange} hasError={!!errors.name} />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <IconWrapper><FaEnvelope /></IconWrapper>
          <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} hasError={!!errors.email} />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <IconWrapper><FaLock /></IconWrapper>
          <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} hasError={!!errors.password} />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <IconWrapper><FaLock /></IconWrapper>
          <Input type="password" name="confirmPassword" placeholder="Confirme a senha" value={formData.confirmPassword} onChange={handleChange} hasError={!!errors.confirmPassword} />
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </InputGroup>
        <Button type="submit">Criar minha conta</Button>
      </Form>
      <LinkPrompt>Já tem uma conta? <span onClick={onNavigateToLogin}>Faça login</span></LinkPrompt>
    </FormWrapper>
  );
};

// --- Página de Login ---
const LoginPage = ({ onLogin, onNavigateToRegister }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Limpa erro anterior
        const loginError = onLogin(formData.email, formData.password);
        if (loginError) {
            setError(loginError);
        }
    };

    return(
        <FormWrapper>
            <Title>Faça seu login</Title>
            <Subtitle>Entre com suas credenciais.</Subtitle>
            <Form onSubmit={handleSubmit} noValidate>
                <InputGroup>
                    <IconWrapper><FaEnvelope /></IconWrapper>
                    <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} hasError={!!error} />
                </InputGroup>
                <InputGroup>
                    <IconWrapper><FaLock /></IconWrapper>
                    <Input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} hasError={!!error} />
                </InputGroup>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button type="submit">Entrar</Button>
            </Form>
            <LinkPrompt>Ainda não tem conta? <span onClick={onNavigateToRegister}>Cadastre-se</span></LinkPrompt>
        </FormWrapper>
    );
};

// --- Página do Painel (Dashboard) ---
const DashboardPage = ({ user, onLogout }) => {
    return(
        <FormWrapper>
            <Title>Bem-vindo, {user.name}!</Title>
            <Subtitle>Sua operação foi um sucesso.</Subtitle>
            <Button onClick={onLogout}>
                <FaSignOutAlt style={{ marginRight: '8px' }}/>
                Sair
            </Button>
        </FormWrapper>
    );
};


// --- Componente Principal (Controlador) ---
function App() {
  const [page, setPage] = useState('register'); // 'register', 'login', 'dashboard'
  const [users, setUsers] = useState([]); // Nosso "banco de dados" de usuários
  const [currentUser, setCurrentUser] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = (newUser) => {
    // Verifica se o usuário já existe
    if (users.find(user => user.email === newUser.email)) {
        alert("Erro: Este e-mail já está cadastrado.");
        return;
    }
    // Adiciona o novo usuário ao nosso "banco de dados"
    setUsers(prevUsers => [...prevUsers, newUser]);
    setShowSuccess(true); // Mostra a mensagem de sucesso
    setTimeout(() => {
        setShowSuccess(false);
        setPage('login'); // Navega para a página de login após um tempo
    }, 2000);
  };

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email);
    if (!user || user.password !== password) {
        return "E-mail ou senha inválidos.";
    }
    setCurrentUser(user);
    setPage('dashboard');
    return null; // Retorna null em caso de sucesso
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setPage('login');
  };

  const renderPage = () => {
    if (page === 'register') {
        if(showSuccess){
            return (
                <FormWrapper>
                    <SuccessMessage>
                        <h3>Cadastro realizado com sucesso!</h3>
                        <p>Redirecionando para a página de login...</p>
                    </SuccessMessage>
                </FormWrapper>
            );
        }
        return <RegisterPage onRegister={handleRegister} onNavigateToLogin={() => setPage('login')} />;
    }
    if (page === 'login') {
      return <LoginPage onLogin={handleLogin} onNavigateToRegister={() => setPage('register')} />;
    }
    if (page === 'dashboard') {
      return <DashboardPage user={currentUser} onLogout={handleLogout} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {renderPage()}
      </Container>
    </>
  );
}

export default App;

