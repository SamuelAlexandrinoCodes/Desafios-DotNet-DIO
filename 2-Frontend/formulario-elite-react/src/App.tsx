// --- INSTRUÇÕES DE INSTALAÇÃO ---
// Para que este ficheiro funcione, execute o seguinte comando no seu terminal
// para instalar as dependências necessárias:
// npm install react-hook-form yup @hookform/resolvers styled-components react-icons

import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useForm} from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaUser, FaEnvelope, FaLock, FaArrowLeft, FaArrowRight, FaSignOutAlt } from 'react-icons/fa';

// --- ESTILOS GLOBAIS ---
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(45deg, #1e192c, #2d273d);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
  }
`;

// --- COMPONENTES ESTILIZADOS ---
const StageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const PanelContainer = styled.div<{ activePanel: 'register' | 'login' }>`
  display: flex;
  width: 200vw;
  height: 100vh;
  transform: translateX(${({ activePanel }) => (activePanel === 'login' ? '-100vw' : '0vw')});
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
`;

const Panel = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background-color: ${({ color }) => color || '#2D273D'};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #E0E0E0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute; top: 50%; left: 15px; transform: translateY(-50%); color: #8C8C8C;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 14px 14px 45px;
  background-color: #1E192C;
  border: 1px solid #4A4A4A;
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  transition: border-color 0.2s;
  &:focus { outline: none; border-color: #8A4BFF; }
`;

const ErrorMessage = styled.p`
  color: #F56565;
  font-size: 0.875rem;
  margin-top: 6px;
  text-align: left;
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
  &:hover { background-color: #702de4; }
  &:disabled { background-color: #5A5A5A; cursor: not-allowed; }
`;

const NavArrow = styled.div<{ direction: 'left' | 'right'; isVisible: boolean }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => direction === 'left' ? 'left: -50px;' : 'right: -50px;'}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ isVisible }) => (isVisible ? 0.7 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: opacity 0.3s, transform 0.3s;
  ${StageContainer}:hover & {
    opacity: ${({ isVisible }) => (isVisible ? 0.7 : 0)};
  }
  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
`;

// --- TIPOS E SCHEMAS DE VALIDAÇÃO ---
const registerSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().min(6, "Mínimo 6 caracteres").required("Senha é obrigatória"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não coincidem').required("Confirmação é obrigatória"),
});
type RegisterFormInputs = yup.InferType<typeof registerSchema>;

const loginSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});
type LoginFormInputs = yup.InferType<typeof loginSchema>;

// --- COMPONENTES DE PÁGINA ---
const RegisterForm = ({ onRegister, onNavigate }: { onRegister: (data: RegisterFormInputs) => void, onNavigate: () => void }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({ resolver: yupResolver(registerSchema) });
    const onSubmit: SubmitHandler<RegisterFormInputs> = data => onRegister(data);

    return (
        <Panel color="#2D273D">
            <Title>Crie sua Conta</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup><IconWrapper><FaUser /></IconWrapper><Input type="text" placeholder="Nome completo" {...register("name")} /></InputGroup>
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                <InputGroup><IconWrapper><FaEnvelope /></IconWrapper><Input type="email" placeholder="E-mail" {...register("email")} /></InputGroup>
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                <InputGroup><IconWrapper><FaLock /></IconWrapper><Input type="password" placeholder="Senha" {...register("password")} /></InputGroup>
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                <InputGroup><IconWrapper><FaLock /></IconWrapper><Input type="password" placeholder="Confirme a senha" {...register("confirmPassword")} /></InputGroup>
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
                <Button type="submit">Criar Conta</Button>
            </Form>
            <p style={{color: '#A0A0A0', marginTop: '24px'}}>Já tem conta? <span style={{color: '#8A4BFF', cursor: 'pointer'}} onClick={onNavigate}>Faça Login</span></p>
        </Panel>
    );
};

const LoginForm = ({ onLogin, onNavigate }: { onLogin: (email: string, password: string) => void, onNavigate: () => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({ resolver: yupResolver(loginSchema) });
  const onSubmit: SubmitHandler<LoginFormInputs> = data => onLogin(data.email, data.password);

  return (
    <Panel color="#221d33">
      <Title>Faça Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup><IconWrapper><FaEnvelope /></IconWrapper><Input type="email" placeholder="E-mail" {...register("email")} /></InputGroup>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <InputGroup><IconWrapper><FaLock /></IconWrapper><Input type="password" placeholder="Senha" {...register("password")} /></InputGroup>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Button type="submit">Entrar</Button>
      </Form>
      <p style={{color: '#A0A0A0', marginTop: '24px'}}>Não tem conta? <span style={{color: '#8A4BFF', cursor: 'pointer'}} onClick={onNavigate}>Cadastre-se</span></p>
    </Panel>
  );
};

const Dashboard = ({ user, onLogout }: { user: { name: string }, onLogout: () => void }) => (
    <Panel color="#1a202c">
        <Title>Bem-vindo, {user.name}!</Title>
        <Button onClick={onLogout}><FaSignOutAlt style={{marginRight: '8px'}}/>Sair</Button>
    </Panel>
);

// --- COMPONENTE PRINCIPAL ---
function App() {
  const [activePanel, setActivePanel] = useState<'register' | 'login'>('register');
  const [users, setUsers] = useState<RegisterFormInputs[]>([]);
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null);

  const handleRegister = (data: RegisterFormInputs) => {
    if (users.find(u => u.email === data.email)) {
      alert("E-mail já cadastrado!"); return;
    }
    setUsers([...users, data]);
    alert("Cadastro realizado com sucesso! Faça o login.");
    setActivePanel('login');
  };
  
  const handleLogin = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActivePanel('register');
  };
  
  if (currentUser) {
    return (
      <>
        <GlobalStyle />
        <StageContainer><Dashboard user={currentUser} onLogout={handleLogout} /></StageContainer>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <StageContainer>
        <PanelContainer activePanel={activePanel}>
          <RegisterForm onRegister={handleRegister} onNavigate={() => setActivePanel('login')} />
          <LoginForm onLogin={handleLogin} onNavigate={() => setActivePanel('register')} />
        </PanelContainer>
        <NavArrow direction="left" isVisible={activePanel === 'login'} onClick={() => setActivePanel('register')}><FaArrowLeft /></NavArrow>
        <NavArrow direction="right" isVisible={activePanel === 'register'} onClick={() => setActivePanel('login')}><FaArrowRight /></NavArrow>
      </StageContainer>
    </>
  );
}

export default App;

