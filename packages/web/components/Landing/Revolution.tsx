import { Box, Container, Text } from '@metafam/ds';
import BackgroundImage from 'assets/landing/revolution-background.png';
import { FullPageContainer } from 'components/Container';
import { MetaLink } from 'components/Link';
import { useOnScreen } from 'lib/hooks/useOnScreen';
import React, { useRef } from 'react';

import { LandingNextButton } from './LandingNextButton';

export const Revolution: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const section = 'a-revolution';

  return (
    <FullPageContainer
      bgImageUrl={BackgroundImage.src}
      id={section}
      position="relative"
      justify={{ base: 'flex-end', xl: 'flex-end' }}
    >
      <Container
        display="flex"
        maxW={{ base: '100%', xl: '7xl', '2xl': '8xl' }}
        height="100%"
        alignItems="center"
        justifyContent="end"
      >
        <Box
          ref={ref}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontSize={{ base: '4xl', xl: '6xl', '2xl': '8xl' }}
          lineHeight={{ base: '2rem', xl: '2.5rem', '2xl': '4.3rem' }}
          maxWidth={{ base: '2xl', md: 'md', '2xl': '2xl' }}
          pl={{ base: 0, md: 0 }}
          zIndex={100}
          transform={`translate3d(0, ${onScreen ? '0' : '50px'}, 0)`}
          opacity={onScreen ? 1 : 0}
          transition="transform 0.3s 0.1s ease-in-out, opacity 0.5s 0.2s ease-in"
        >
          <Text>A revolution is happening online;</Text>

          <Text pt={{ base: 4, '2xl': 10 }}>
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
            or
            <br /> miss out?
          </Text>
        </Box>
      </Container>
      <LandingNextButton section="the-wild-web" />
    </FullPageContainer>
  );
};
