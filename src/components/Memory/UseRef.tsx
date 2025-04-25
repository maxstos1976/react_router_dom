// 🧠 Temporizador com tempo total armazenado
// Suponha que você esteja fazendo um cronômetro simples. Você quer:
// Ver o tempo correndo.
// Parar e continuar.
// Armazenar o tempo total decorrido, mesmo entre paradas.
// 🛠️ Por que useRef?
// Se usássemos useState, o timer ficaria reinicializando o componente toda vez que o tempo mudasse (muitas re-renderizações desnecessárias).
// Com useRef, podemos manter um valor entre re - renderizações sem causar re - render — ideal para armazenar valores como intervalId ou tempo decorrido acumulado.

import { useRef, useState } from "react";

export default function Cronometro() {
  const [tempo, setTempo] = useState(0);
  const intervaloRef = useRef(null); // Armazena o ID do setInterval
  const acumuladoRef = useRef(0); // Tempo acumulado ao parar

  const iniciar = () => {
    // Impede múltiplos intervalos
    if (intervaloRef.current !== null) return;

    const inicio = Date.now() - acumuladoRef.current;
    intervaloRef.current = setInterval(() => {
      const agora = Date.now();
      setTempo(agora - inicio);
    }, 100);
  };

  const pausar = () => {
    if (intervaloRef.current !== null) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
      acumuladoRef.current = tempo;
    }
  };

  const resetar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
    setTempo(0);
    acumuladoRef.current = 0;
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        backgroundColor: "lightpink",
      }}
    >
      <h1>UseRef</h1>
      <h2>⏱️ Tempo: {(tempo / 1000).toFixed(1)}s</h2>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
}
// ✨ O que o useRef faz aqui?
// useRef usado para	Por quê?
// intervaloRef	Armazena o setInterval sem causar re-renderizações
// acumuladoRef	Guarda o tempo total já contado, para continuar de onde parou
// Não usamos useState para isso	Porque não queremos que esse valor dispare uma atualização na UI a cada milissegundo

// Aqui feito por Alan
// import { useRef } from "react";
// const UseRef = () => {
//   // hacer referencia a un elemento del DOM
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const textRef = useRef<string>("");

//   const handleClick = () => {
//     textRef.current = "Hola";
//     if (buttonRef.current) buttonRef.current.click();
//   };

//   return (
//     <div>
//       <button ref={buttonRef} onClick={() => alert("Button Click!")}>
//         Botón Oculto
//       </button>

//       <button onClick={handleClick}>
//         Hacele Click para triggerear el botón escondido
//       </button>
//       {textRef.current}
//     </div>
//   );
// };

// export default UseRef;
