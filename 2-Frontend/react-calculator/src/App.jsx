import React, { useState, useEffect } from 'react';

// TailwindCSS é usado para estilização.
// Certifique-se de que ele esteja configurado em seu projeto.
// Se estiver usando Vite, siga as instruções em: https://tailwindcss.com/docs/guides/vite

// --- Componente Button (Reutilizável) ---
// Representa um único botão na calculadora
const Button = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center text-white text-2xl font-semibold bg-zinc-700 rounded-lg shadow-md hover:bg-zinc-600 active:scale-95 transition-all duration-100 ${className}`}
  >
    {children}
  </button>
);

// --- Componente Display (Visor) ---
// Mostra a operação atual e o resultado
const Display = ({ value }) => (
  <div className="bg-zinc-800/50 rounded-lg p-6 mb-4 shadow-inner">
    <div 
      className="text-white text-5xl font-light text-right break-words break-all"
      style={{ minHeight: '60px' }} // Altura mínima para evitar colapso
    >
      {value || '0'}
    </div>
  </div>
);

// --- Componente Principal da Aplicação ---
function App() {
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState('');

  // Lógica de cálculo principal
  const calculate = () => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return '';

    let result = '';
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
      case '×':
        result = prev * current;
        break;
      case '÷':
      case '/':
        if (current === 0) return 'Erro';
        result = prev / current;
        break;
      default:
        return '';
    }
    return result.toString();
  };

  // Funções de manipulação de entrada
  const handleDigitClick = (digit) => {
    if (currentOperand.includes('.') && digit === '.') return;
    setCurrentOperand(currentOperand + digit);
  };

  const handleOperationClick = (op) => {
    if (currentOperand === '' && previousOperand === '') return;
    if (currentOperand === '' && previousOperand !== '') {
        setOperation(op);
        return;
    }
    
    if (previousOperand !== '') {
      const result = calculate();
      setPreviousOperand(result === 'Erro' ? '' : result);
      setCurrentOperand('');
      setOperation(result === 'Erro' ? '' : op);
      if(result === 'Erro') setCurrentOperand('Erro');
    } else {
      setPreviousOperand(currentOperand);
      setCurrentOperand('');
    }
    setOperation(op);
  };
  
  const handleEqualsClick = () => {
    if (operation === '' || previousOperand === '' || currentOperand === '') return;
    const result = calculate();
    setCurrentOperand(result);
    setPreviousOperand('');
    setOperation('');
  };

  const handleClearClick = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation('');
  };
  
  const handleDeleteClick = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  // Efeito para Suporte ao Teclado Físico
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (key >= '0' && key <= '9' || key === '.') {
        handleDigitClick(key);
      } else if (key === '+' || key === '-') {
        handleOperationClick(key);
      } else if (key === '*') {
        handleOperationClick('×');
      } else if (key === '/') {
        handleOperationClick('÷');
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Evita comportamento padrão do Enter
        handleEqualsClick();
      } else if (key === 'Backspace') {
        handleDeleteClick();
      } else if (key === 'Escape') {
        handleClearClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentOperand, previousOperand, operation]); // Re-anexa o listener se as dependências mudarem

  // Formata o valor para exibição
  const formatDisplay = () => {
    if (operation !== '' && currentOperand === '') return `${previousOperand} ${operation}`;
    if (previousOperand !== '' && currentOperand !== '') return `${previousOperand} ${operation} ${currentOperand}`;
    return currentOperand;
  }

  return (
    <main className="bg-zinc-900 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-sm p-4 bg-zinc-800 rounded-2xl shadow-2xl space-y-4">
        <Display value={formatDisplay()} />

        {/* --- Grid de Botões --- */}
        <div className="grid grid-cols-4 gap-3">
          <Button onClick={handleClearClick} className="bg-rose-500 hover:bg-rose-600 col-span-2">C</Button>
          <Button onClick={handleDeleteClick} className="bg-zinc-600 hover:bg-zinc-500">DEL</Button>
          <Button onClick={() => handleOperationClick('÷')} className="bg-orange-500 hover:bg-orange-600">÷</Button>
          
          <Button onClick={() => handleDigitClick('7')}>7</Button>
          <Button onClick={() => handleDigitClick('8')}>8</Button>
          <Button onClick={() => handleDigitClick('9')}>9</Button>
          <Button onClick={() => handleOperationClick('×')} className="bg-orange-500 hover:bg-orange-600">×</Button>

          <Button onClick={() => handleDigitClick('4')}>4</Button>
          <Button onClick={() => handleDigitClick('5')}>5</Button>
          <Button onClick={() => handleDigitClick('6')}>6</Button>
          <Button onClick={() => handleOperationClick('-')} className="bg-orange-500 hover:bg-orange-600">-</Button>

          <Button onClick={() => handleDigitClick('1')}>1</Button>
          <Button onClick={() => handleDigitClick('2')}>2</Button>
          <Button onClick={() => handleDigitClick('3')}>3</Button>
          <Button onClick={() => handleOperationClick('+')} className="bg-orange-500 hover:bg-orange-600">+</Button>
          
          <Button onClick={() => handleDigitClick('0')} className="col-span-2">0</Button>
          <Button onClick={() => handleDigitClick('.')}>.</Button>
          <Button onClick={handleEqualsClick} className="bg-orange-500 hover:bg-orange-600">=</Button>
        </div>
      </div>
    </main>
  );
}

export default App;
