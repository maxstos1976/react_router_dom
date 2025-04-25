// 🧪 Como ver o uso do useMemo
// Digite um número — repare que aparece no console: "Calculando se é primo...".
// Agora clique no botão que muda otherState — o componente re-renderiza, mas o cálculo de primo não acontece de novo se o número não mudou.
// Isso mostra como o useMemo evita recalcular algo custoso desnecessariamente.

import React, { useState, useMemo } from "react";

// Função para verificar se o número é primo (cálculo "caro")
const isPrime = (num: number): boolean => {
  console.log("Calculando se ", num, " é primo..."); // só para mostrar quando realmente é calculado
  if (Number.isNaN(num)) return false;
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const PrimeChecker: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Memoiza o resultado de isPrime somente quando o número mudar
  const isNumberPrime = useMemo(() => isPrime(number), [number]);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        backgroundColor: "lightblue",
      }}
    >
      <h1 style={{ padding: "0px", margin: "0px" }}>useMemo</h1>
      <h2>Verificador de Números Primos</h2>
      🔢
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>
        O número {number} {isNumberPrime ? "é" : "não é"} primo.
      </p>
      <button onClick={() => setOtherState(!otherState)}>
        Mudar outro estado
      </button>
    </div>
  );
};

export default PrimeChecker;
