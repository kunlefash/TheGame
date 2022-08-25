/* eslint-disable no-nested-ternary */
import { Box, Container, Text, useBreakpointValue } from '@metafam/ds';
import BackgroundImage5xl from 'assets/landing/sections/section-2.jpg';
import BackgroundImageMobile from 'assets/landing/sections/section-2.sm.jpg';
import BackgroundImage2xl from 'assets/landing/sections/section-2-2xl.jpg';
import BackgroundImage4xl from 'assets/landing/sections/section-2-4xl.jpg';
import BackgroundImageLg from 'assets/landing/sections/section-2-lg.jpg';
import { FullPageContainer } from 'components/Container';
import { MetaLink } from 'components/Link';
import { useOnScreen } from 'lib/hooks/useOnScreen';
import { useEffect, useRef, useState } from 'react';

import { LandingNextButton } from './LandingNextButton';

export const Game: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const [noMotion, setNoMotion] = useState(false);
  const displayElement = noMotion ? true : !!onScreen;
  const root = typeof window !== 'undefined' ? document.body : null;
  const section = 'wtf-is-a-metagame';
  const responsiveBg = useBreakpointValue({
    base: BackgroundImageMobile,
    xl: BackgroundImageLg,
    '2xl': BackgroundImage2xl,
    '3xl': BackgroundImage4xl,
    '5xl': BackgroundImage5xl,
  });

  useEffect(() => {
    const mut = new MutationObserver(() => {
      if (root && root.classList.contains('no-motion')) {
        setNoMotion(true);
      } else {
        setNoMotion(false);
      }
    });
    if (typeof window !== 'undefined' && window.matchMedia !== undefined) {
      if (root) {
        mut.observe(root, {
          attributes: true,
        });
      }
    }

    return () => {
      mut.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FullPageContainer
      bgImageUrl={responsiveBg}
      backgroundBlendMode={{ base: 'soft-light', lg: 'normal' }}
      id={section}
      className="section"
      position="relative"
    >
      <Container
        d="flex"
        maxW={{
          base: '100%',
          md: 'xl',
          lg: '7xl',
          '2xl': 'full',
          '4xl': '90%',
        }}
        px={{ base: 'inherit', lg: 14 }}
        height="100%"
        alignItems="center"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
        <Box
          ref={ref}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={{ base: '90%', md: 'sm', '2xl': 'xl' }}
          fontSize={{ base: 'lg', '2xl': '2xl' }}
          lineHeight={{ base: 'lg', '2xl': '2xl' }}
          pl={{ base: 0, md: 0 }}
          zIndex={100}
          transform={`translate3d(0, ${displayElement ? '0' : '50px'}, 0)`}
          opacity={displayElement ? 1 : 0}
          transition={
            'transform 0.3s 0.1s ease-in-out, opacity 0.5s 0.2s ease-in'
          }
          fontWeight="normal"
          color="white"
        >
          <Text>
            “Metagame is any approach to a game that transcends or operates
            outside of the prescribed rules of the game, uses external factors
            to affect the game, or goes beyond the supposed limits or
            environment set by the game.”
          </Text>
          <Text textAlign="right">
            - From{' '}
            <MetaLink
              className="gradient"
              href="https://en.wikipedia.org/wiki/Metagaming"
              fontWeight="normal"
              textDecoration="none"
              isExternal
            >
              Wikipedia
            </MetaLink>
          </Text>
        </Box>
      </Container>
      <LandingNextButton section="build-the-future" />
    </FullPageContainer>
  );
};
