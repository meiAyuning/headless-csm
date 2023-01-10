//import '../styles/globals.css'
//@ts-check

import React from 'react';
import { SessionProvider} from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
  
}

export default MyApp
