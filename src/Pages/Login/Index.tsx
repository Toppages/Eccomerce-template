import React, { useState } from "react";
import "./Index.css";
import LoginForm from "../../Components/Form/LoginForm";
import RegisterForm from "../../Components/Form/RegisterForm";
import { Button, Card, Group,Image } from "@mantine/core";

const Login: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
<>
<Group>


<Card >
  <h1>Bienvenido a</h1>
  <h1>Logo</h1>

  {isSignIn ? <LoginForm /> : <RegisterForm />}

  <Button
    variant="subtle"
    fullWidth
    mt="md"
    onClick={() => setIsSignIn(!isSignIn)}
  >
    {isSignIn
      ? "¿No tienes cuenta? Regístrate"
      : "¿Ya tienes cuenta? Inicia sesión"}
  </Button>
</Card>

<Image
src="https://placehold.co/200x100"
alt="Placeholder Illustration"
/>
</Group>
</>

   
  );
};

export default Login;