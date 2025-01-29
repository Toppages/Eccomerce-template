import './index.css';
import {  useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Card, Text, TextInput, PasswordInput, Button, Stack,useMantineColorScheme, useMantineTheme } from '@mantine/core';

function Login() {
  const navigate = useNavigate(); 

  const theme = useMantineTheme();
  const handleLogin = () => {
    navigate('/Eccomerce-template');
  };
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = useMemo(() => colorScheme === 'dark', [colorScheme]);
  return (
    <div className="login-background">
      <Card
        shadow="md"

        p="lg"
        radius="md"
        style={{ width: 350, textAlign: 'center',  marginLeft: 'auto', marginRight: 'auto' , backgroundColor: dark ? '#1A1B1E' : theme.colors.gray[0] }}
      >
        <Text size="lg" mb={15}>
          Bienvenido
        </Text>
        <Text size="lg" mb={15}>
          Bienvenido
        </Text>

        <Stack mt="lg" spacing="sm">
          <TextInput label="Usuario" placeholder="Tu usuario" />
          <PasswordInput label="Contraseña" placeholder="Tu contraseña" />
          <Button  className='button'  fullWidth mt="md" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default Login;
