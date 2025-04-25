import UseRef from "./components/Memory/UseRef";
import UseCallBackParent from "./components/Memory/useCallback";
import NumeroPrimo from "./components/Memory/numeroPrimo";

import "./App.css";

function App() {
  return (
    <>
      <UseRef />
      <UseCallBackParent />
      <NumeroPrimo /> // Como usar useMemo
    </>
  );
}

export default App;
