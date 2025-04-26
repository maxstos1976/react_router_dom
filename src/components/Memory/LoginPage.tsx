import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    // Aqui você colocaria a lógica real de login (ex: validar usuário/senha)
    // Para fins de teste, vamos apenas redirecionar para o Home.
    navigate("/components/Memory/HomePage");
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🔒 Login Page</h1>
      <p>Por favor, faça login para continuar.</p>
      <button
        onClick={handleLogin}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Entrar
      </button>
    </div>
  );
}

export default LoginPage;
