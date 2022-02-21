import { Box, Button, Container, Text } from '@metafam/ds';
import BackgroundImage from 'assets/landing/revolution-background.png';
import { FullPageContainer } from 'components/Container';
import { MetaLink } from 'components/Link';
import { useOnScreen } from 'lib/hooks/useOnScreen';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { BsArrowDown } from 'react-icons/bs';

export const Revolution: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const { push } = useRouter();

  const handleSectionNav = (sectionId: string) => {
    push(`#${sectionId}`);
  };

  return (
    <FullPageContainer
      bgImageUrl={BackgroundImage}
      id="section-4"
      position="relative"
      justify={{ base: 'center', md: 'flex-end' }}
    >
      <Container
        d="flex"
        maxW={{ base: '100%', md: '7xl', '2xl': '8xl' }}
        height="100%"
        alignItems="center"
        justifyContent="end"
      >
        <Box
          ref={ref}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontSize={{ base: '4xl', md: '8xl' }}
          lineHeight={{ base: '3rem', md: '5rem' }}
          maxWidth="2xl"
          pl={{ base: 0, md: 0 }}
          zIndex={100}
          transform={`translate3d(0, ${onScreen ? '0' : '50px'}, 0)`}
          opacity={onScreen ? 1 : 0}
          transition="transform 0.3s 0.1s ease-in-out, opacity 0.5s 0.2s ease-in"
        >
          <Text
            // fontSize={{ base: '3rem', md: '4.188rem' }}
            fontWeight="normal"
            color="white"
          >
            A revolution is happening online;
          </Text>

          <Text
            pt="1.5rem"
            // fontSize={{ base: '3rem', md: '4.188rem' }}
            fontWeight="normal"
            color="white"
          >
            will you{' '}
            <MetaLink
              href="https://wiki.metagame.wtf/docs/enter-metagame/join-metagame"
              isExternal
              sx={{
                background:
                  'linear-gradient(90deg, #FF61E6 -29.22%, #7C56FF 107.53%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'backgroundImage 0.3s ease-in',
                '&.active, &:hover': {
                  background:
                    'linear-gradient(90deg, #FF61E6 -29.22%, #7C56FF 107.53%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
              }}
            >
              join
            </MetaLink>{' '}
            or miss out?
          </Text>
        </Box>
      </Container>
      <Box
        pos="absolute"
        bottom="0"
        py={20}
        maxW={{ base: '100%', md: '7xl', '2xl': '8xl' }}
        zIndex={200}
      >
        <Button
          colorScheme="white"
          size="lg"
          rightIcon={<BsArrowDown />}
          onClick={() => handleSectionNav('section-5')}
        >
          Next
        </Button>
      </Box>
    </FullPageContainer>
  );
};