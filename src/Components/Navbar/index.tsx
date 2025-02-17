import { useMediaQuery } from '@mantine/hooks';
import { useState, useMemo } from 'react';
import { IconUser, IconShoppingCart, IconMoonStars, IconSun } from '@tabler/icons-react';
import { ActionIcon, Card, Group, Title, Burger, Drawer, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(min-width: 1000px)');
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = useMemo(() => colorScheme === 'dark', [colorScheme]);
  const navigate = useNavigate();

  return (
    <>
      <Card shadow="sm" p="lg" radius='xs' style={{ backgroundColor: dark ? '#020203' : '#F3FAF7' }}>
        {!isMobile && (
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={opened ? 'Close navigation' : 'Open navigation'}
          />
        )}

        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Navigation"
          padding="xl"
          size="lg"
          position="left"
          overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
          overlayOpacity={0.55}
          overlayBlur={3}
        >
          <p>Content of the Drawer</p>
        </Drawer>

        <Group position={isMobile ? "apart" : "center"} style={{ flexDirection: isMobile ? "row" : "column", width: "100%" }}>
          <Title order={1} align={isMobile ? "left" : "center"}>Logo</Title>

          <Group spacing="lg" position={isMobile ? "apart" : "center"}>
          <ActionIcon radius="xl" onClick={() => navigate('/login')}> 
              <IconUser color={dark ? '#FBC403' : 'black'} size={34} />
            </ActionIcon>

            <ActionIcon  radius="xl">
              <IconShoppingCart color={dark ? '#FBC403' : 'black'} size={34} />
            </ActionIcon>

            <ActionIcon
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={34} color='#FBC403' /> : <IconMoonStars size={34}  color='black' />}
            </ActionIcon>
          </Group>
        </Group>
      </Card>
      </>
      )}
export default Navbar;