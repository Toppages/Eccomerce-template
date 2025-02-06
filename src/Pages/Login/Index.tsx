import { useWindowSize } from "@uidotdev/usehooks";
import {
  Paper,
  createStyles,
  Title,
  Anchor,
  Text,
  Group
} from '@mantine/core';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "../../Components/Form/LoginForm";
import RegisterForm from "../../Components/Form/RegisterForm";

function Login() {
  const size = useWindowSize();

  const useStyles = createStyles((theme) => ({
    login: {
      overflowY: 'hidden',
      maxHeight: `calc(${size.height}px)`,
    },
    wrapper: {
      minHeight: `calc(${size.height}px)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(https://ilogos.biz/wp-content/uploads/2024/12/mainscreen.png)',
      backgroundPosition: "left",
    },
    form: {
      borderRight: `16px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]}`,
      minHeight: `calc(${size.height}px)`,
      maxWidth: 400,
      paddingTop: 80,
  
      [theme.fn.smallerThan(500)]: { // Se usa el número directamente
        maxWidth: '100%',
      },
    },
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    toggle: {
      marginTop: theme.spacing.md,
      textAlign: 'center',
      cursor: 'pointer',
      color: theme.colors.blue[6],
    },
  }));
  
  

  const [isSignIn, setIsSignIn] = useState(true);
  const { classes } = useStyles();

  return (
    <section className={classes.login}>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={4} className={classes.title} ta="center" mt="md">
            LOGO
          </Title>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Bienvenido
          </Title>

          <AnimatePresence mode="wait">
            <motion.div
              key={isSignIn ? "login" : "register"}
              initial={{ opacity: 0, x: isSignIn ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isSignIn ? 50 : -50 }}
              transition={{ duration: 0.5 }}
            >
              {isSignIn ? <LoginForm /> : <RegisterForm />}
     

          <Group position="center">
            {isSignIn ? (
              <Text>
                <Anchor onClick={() => setIsSignIn(false)} weight={500}>
                  ¿No tienes cuenta? Regístrate
                </Anchor>
              </Text>
            ) : (
              <Text>
                <Anchor onClick={() => setIsSignIn(true)} weight={500}>
                  ¿Ya tienes cuenta? Inicia sesión
                </Anchor>
              </Text>
            )}
          </Group>
          </motion.div>
          </AnimatePresence>
        </Paper>
      </div>
    </section>
  );
}

export default Login;
