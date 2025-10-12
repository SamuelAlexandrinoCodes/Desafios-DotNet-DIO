import styled from 'styled-components';

export const StageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  position: relative;
  overflow: hidden; /* Garante que os painéis fora da vista fiquem escondidos */
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

export const PanelContainer = styled.div<{ activePanel: 'register' | 'login' }>`
  display: flex;
  width: 200vw;
  height: 100vh;
  transform: translateX(${({ activePanel }) => (activePanel === 'login' ? '--100vw' : '0%')});
  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
`;

export const Panel = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box; /* Garante que o padding não quebre o layout */
  background-color: ${({ color }) => color || '#2D273D'};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #E0E0E0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute; top: 50%; left: 15px; transform: translateY(-50%); color: #8C8C8C;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 14px 14px 45px;
  box-sizing: border-box;
  background-color: #1E192C;
  border: 1px solid #4A4A4A;
  border-radius: 8px;
  color: #FFFFFF;
  font-size: 1rem;
  transition: border-color 0.2s;
  &:focus { outline: none; border-color: #8A4BFF; }
`;

export const ErrorMessage = styled.p`
  color: #F56565;
  font-size: 0.875rem;
  margin-top: 6px;
  text-align: left;
  min-height: 1.2rem; /* Evita que o layout "pule" quando o erro aparece */
`;

export const Button = styled.button`
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
