import { useMediaQuery } from '@mantine/hooks';
import { useState, useEffect, useMemo } from 'react';
import { IconUser, IconShoppingCart, IconMoonStars, IconSun } from '@tabler/icons-react';
import { ActionIcon, Card, Group, Title, Burger, Drawer, useMantineColorScheme, useMantineTheme, Avatar, Badge } from '@mantine/core';

function Navbar() {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery('(min-width: 1000px)');
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = useMemo(() => colorScheme === 'dark', [colorScheme]);
  const [scrolled, setScrolled] = useState(false);
  const avatar = (
    <Avatar
      alt="Avatar for badge"
      size={32}
      mr={5}
      src="image-link"
    />
  );
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop]);

  return (
    <>
      <Card
        p="lg"
        radius="xs"
        style={{
          backgroundColor: isDesktop
            ? scrolled
              ? dark
                ? '#020203'
                : '#FFFFFF'
              : 'transparent'
            : dark
              ? '#020203'
              : '#F3FAF7',
          transition: 'background-color 0.3s ease',
          position: isDesktop ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: isDesktop && scrolled ? 'blur(10px)' : 'none',
        }}
      >
        {!isDesktop && (
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

        <Group position={isDesktop ? 'apart' : 'center'} style={{ flexDirection: isDesktop ? 'row' : 'column', width: '100%' }}>
          <Title order={1} align={isDesktop ? 'left' : 'center'}>Logo</Title>

          <Group spacing="lg" position={isDesktop ? 'apart' : 'center'}>
            <ActionIcon radius="xl">
              <IconUser color={dark ? '#FBC403' : 'black'} size={34} />
            </ActionIcon>

            <ActionIcon radius="xl">
              <IconShoppingCart color={dark ? '#FBC403' : 'black'} size={34} />
            </ActionIcon>

            <ActionIcon onClick={() => toggleColorScheme()} title="Toggle color scheme">
              {dark ? <IconSun size={34} color="#FBC403" /> : <IconMoonStars size={34} color="black" />}
            </ActionIcon>
            <Badge sx={{ paddingLeft: 0 }} size="lg" radius="xl" color="teal" leftSection={avatar}>
              Usuario
            </Badge>
          </Group>
        </Group>
      </Card>
    </>
  );
}

export default Navbar;