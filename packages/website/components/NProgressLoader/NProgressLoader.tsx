import { useTheme } from 'flair-kit';
import { useNProgress } from '@tanem/react-nprogress';
import { css } from 'goober';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const NProgressLoader = () => {
  const { colors } = useTheme();
  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: state.isRouteChanging,
  });

  return (
    <div
      key={state.loadingKey}
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className={css`
          background: ${colors.primary[700].color};
          z-index: 50;
        `}
        style={{
          height: '4px',
          left: 0,
          marginLeft: `${(-1 + progress) * 100}%`,
          position: 'fixed',
          top: 0,
          transition: `margin-left ${animationDuration}ms linear`,
          width: '100%',
        }}
      >
        <div
          style={{
            boxShadow: '0 0 10px #29d, 0 0 5px #29d',
            display: 'block',
            height: '100%',
            opacity: '1',
            position: 'absolute',
            right: '0',
            transform: 'rotate(3deg) translate(0px, -4px)',
            width: '100px',
          }}
        />
      </div>
    </div>
  );
};
