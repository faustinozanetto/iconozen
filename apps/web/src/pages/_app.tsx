import '@styles/global.css';
import 'ui/styles.css';

// eslint-disable-next-line camelcase
import { Open_Sans } from '@next/font/google';

import type { AppProps } from 'next/app';
import React from 'react';
import ThemeProvider from '@modules/theming/context/theme-context';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' });

type PortfolioProps = AppProps;

const IconozenApp: React.FC<PortfolioProps> = (props) => {
  const { pageProps, Component } = props;

  return (
    <ThemeProvider>
      <main className={`${openSans.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default IconozenApp;