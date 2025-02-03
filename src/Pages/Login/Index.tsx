import './index.css';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Text, TextInput, PasswordInput, Button, Stack, useMantineColorScheme, useMantineTheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Login() {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  return (
    <div className={dark ? 'login-background dark-mode' : 'login-background light-mode'}>
      <Card
        shadow="xl"
        p="lg"
        radius="md"
        style={{
          width: 350,
          textAlign: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: dark ? '#1A1B1E' : theme.colors.gray[0]
        }}
      >
        <ActionIcon
          onClick={() => toggleColorScheme()} title="Toggle color scheme">
          {dark ? <IconSun size={34} color='#FBC403' /> : <IconMoonStars size={34} color='black' />}
        </ActionIcon>

        <Text size="lg" mb={15}>
          Bienvenido
        </Text>

        <Stack mt="lg" spacing="sm">
          <TextInput label="Usuario" placeholder="Tu usuario" />
          <PasswordInput label="Contraseña" placeholder="Tu contraseña" />
          <Button fullWidth mt="md" onClick={() => navigate('/Eccomerce-template')}>
            Iniciar Sesión
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default Login;
