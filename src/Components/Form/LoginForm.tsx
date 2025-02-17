// LoginForm.jsx
import { useState } from 'react';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  return (
    <>
      <TextInput
        radius="md"
        label="Usuario"
        placeholder="Tu usuario"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <PasswordInput
        mt="md"
        label="Contraseña"
        radius="md"
        placeholder="Tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      {error && (
        <Text color="red" size="sm" mt="xs">
          {error}
        </Text>
      )}
      <Button
        fullWidth
        mt="xl"
        onClick={handleLogin}
        className="original-button"
      >
        Iniciar Sesión
      </Button>
    </>
  );
}

export default LoginForm;