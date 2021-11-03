import "../styles/global.scss";
import type { AppProps } from "next/app";
import { LevelProvider } from "../context/LevelContext";
import { useRouter } from "next/router";
import { memo, useEffect, useRef } from "react";

interface iRestrainedComponent {
  [key: string]: {
    component: any;
    scrollY: number;
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const retainedComponent = useRef<iRestrainedComponent>({});

  if (!retainedComponent.current[router.asPath]) {
    console.log("hre");
    const MemoComponent = memo(Component);
    retainedComponent.current[router.asPath] = {
      component: <MemoComponent {...pageProps} />,
      scrollY: 0,
    };

    console.log(retainedComponent.current);
  }

  // save the scroll position
  const handleRouteChangeStart = (url: string) => {
    retainedComponent.current[router.asPath].scrollY = window.scrollY;
  };

  // listen for router update and save the scroll position
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.asPath]);

  // sroll to saved position
  useEffect(() => {
    window.scrollTo(0, retainedComponent.current[router.asPath].scrollY);
  }, [Component, pageProps]);

  return (
    <>
      <LevelProvider>
        <Components {...pageProps} />
      </LevelProvider>
    </>
  );
}

export default MyApp;
