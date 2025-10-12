// --- INSTRUÇÕES DE INSTALAÇÃO ---
// Para que este ficheiro funcione, execute o seguinte comando no seu terminal
// para instalar as dependências necessárias:
// npm install react-hook-form yup @hookform/resolvers/yup styled-components axios react-icons


import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import React, { useState } from 'react';
import type { FieldValues } from "react-hook-form"; // Importação de tipo adicional
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled, { keyframes } from "styled-components";
import axios from 'axios';
import { FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';

const API_KEY = "0a6b1f6af32c488d87539993f61ea460";


// --- Definição de Tipos e Schema de Validação ---
type FormInputs = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string()
    .email("Formato de e-mail inválido")
    .required("O e-mail é obrigatório")
    .test(
        'is-email-valid', // nome do teste
        'Este e-mail não parece ser válido ou não existe.', // mensagem de erro
        async (value) => {
            // Se o valor for vazio ou inválido, a validação padrão já falhou, não precisamos chamar a API.
            if (!value || !/\S+@\S+\.\S+/.test(value)) {
                return true; // Deixa a validação de formato/required cuidar disso
            }
            try {
                const response = await axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${value}`);
                // A API nos diz se o email tem um servidor real para recebê-lo (checa MX records e SMTP)
                return response.data.is_smtp_valid.value;
            } catch (error) {
                console.error("Erro na validação de e-mail via API:", error);
                return false; // Se a API falhar, consideramos o e-mail inválido para segurança.
            }
        }
    ),
  password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("A senha é obrigatória"),
}).required();


// --- Animações e Componentes Estilizados ---
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const spin = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;

const FormWrapper = styled.div`/* ... (sem alterações) ... */`;
const Title = styled.h1`/* ... (sem alterações) ... */`;
const StyledForm = styled.form`/* ... (sem alterações) ... */`;
const InputGroup = styled.div`/* ... (sem alterações) ... */`;
const IconWrapper = styled.div`/* ... (sem alterações) ... */`;
const Input = styled.input`/* ... (sem alterações) ... */`;
const ErrorMessage = styled.p`/* ... (sem alterações) ... */`;
const Button = styled.button`/* ... (sem alterações) ... */`;

const StatusIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #8C8C8C;
  
  svg {
    animation: ${spin} 1s linear infinite;
  }
`;

// --- Componente do Formulário de Login ---
const LoginForm = () => {
  const { register, handleSubmit, trigger, formState: { errors, isSubmitting, isValidating } } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur' // Aciona a validação quando o usuário sai do campo
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // ... (lógica de submissão permanece a mesma)
    console.log("Login com e-mail validado:", data);
    alert(`Login simulado com sucesso para: ${data.email}`);
  };

  return (
    <FormWrapper>
      <Title>Login de Elite</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <IconWrapper><FaEnvelope /></IconWrapper>
          <Input 
            type="email" 
            placeholder="E-mail"
            {...register("email")} 
          />
          {isValidating && <StatusIconWrapper><FaSpinner /></StatusIconWrapper>}
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <IconWrapper><FaLock /></IconWrapper>
          <Input 
            type="password" 
            placeholder="Senha"
            {...register("password")} 
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputGroup>

        <Button type="submit" disabled={isSubmitting || isValidating}>
          {isSubmitting || isValidating ? 'Aguarde...' : 'Entrar'}
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default LoginForm;