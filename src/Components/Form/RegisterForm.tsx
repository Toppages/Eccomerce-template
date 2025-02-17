// RegisterForm.jsx
import { useState } from 'react';
import { TextInput, PasswordInput, Button, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!name || !username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    setError('');
    navigate('/');
  };

  return (
    <>
      <TextInput
        radius="md"
        label="Nombre"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <TextInput
        radius="md"
        label="Usuario"
        placeholder="Tu usuario"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        mt="md"
      />
      <PasswordInput
        radius="md"
        label="Contraseña"
        placeholder="Tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        mt="md"
      />
      {error && (
        <Text color="red" size="sm" mt="xs">
          {error}
        </Text>
      )}
      <Button
        fullWidth
        mt="xl"
        onClick={handleRegister}
        className="original-button"
      >
        Registrarse
      </Button>
    </>
  );
}

export default RegisterForm;