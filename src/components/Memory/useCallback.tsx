// 💡 Cenário: Componente de soma que evita recalcular funções desnecessariamente
// Imagina que temos um componente principal com um campo para inserir um número, e um botão que
// incrementa esse número com um valor fixo.Esse botão é um componente separado(IncrementButton)
// que recebe a função de incremento como prop.

// Se não usarmos useCallback, essa função vai ser recriada a cada render, fazendo com que o botão
// re - renderize desnecessariamente, mesmo que a lógica não tenha mudado.

import React, { useState, useCallback } from "react";

// Componente separado para o botão
const IncrementButton = React.memo(
  ({ onIncrement }: { onIncrement: () => void }) => {
    console.log("🔁 Botão renderizado");
    return <button onClick={onIncrement}>Adicionar 5</button>;
  }
);

const Calculadora = () => {
  const [numero, setNumero] = useState(0);

  // Evita recriar a função a cada render
  const incrementar = useCallback(() => {
    setNumero((prev) => prev + 5);
  }, []);

  // Esta função será recriada em todo render
  // const incrementar = () => {
  //   setNumero((prev) => prev + 5);
  // };

  console.log("📱 Componente principal renderizado");

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        backgroundColor: "lightgreen",
      }}
    >
      <h1>useCallback</h1>
      <p
        style={{
          textAlign: "justify",
        }}
      >
        🔍 Explicação clara Sem useCallback: incrementar seria uma nova função
        em cada render. O IncrementButton, mesmo com React.memo, iria renderizar
        novamente. Com useCallback: A função incrementar mantém a mesma
        referência entre renders (a menos que alguma dependência mude). O botão
        não é re-renderizado desnecessariamente, economizando performance.
      </p>
      <h2>🔁 Valor atual: {numero}</h2>
      <IncrementButton onIncrement={incrementar} />
    </div>
  );
};

export default Calculadora;
// 🔍 Explicação clara
// Sem useCallback:
// incrementar seria uma nova função em cada render.
// O IncrementButton, mesmo com React.memo, iria renderizar novamente.
// Com useCallback:
// A função incrementar mantém a mesma referência entre renders (a menos que alguma dependência mude).
// O botão não é re-renderizado desnecessariamente, economizando performance.

// Se quiser testar por si mesmo, remova o useCallback e veja no console que o botão é renderizado toda vez que o valor muda.Com useCallback, ele só renderiza uma vez.

// import { useCallback, useEffect, useState } from "react";

// const UseCallBackParent = () => {
//   // Memoriza la funcion en si misma
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         padding: "20px",
//         backgroundColor: "lightgreen",
//       }}
//     >
//       <h1>UseCallback</h1>
//       <h2>Count: {count}</h2>
//       <UseCallBackChild handleClick={handleClick} />
//     </div>
//   );
// };
// export default UseCallBackParent;

// interface Props {
//   handleClick: () => void;
// }
// const UseCallBackChild = ({ handleClick }: Props) => {
//   useEffect(() => {
//     console.log("Rendered");
//   }, [handleClick]);
//   return <button onClick={handleClick}>Click Me</button>;
// };
