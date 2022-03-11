/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { Provider } from 'react-redux';
import theme from 'theme';
import 'typeface-open-sans';
import 'typeface-source-sans-pro';

import myStore from 'redux/store';
import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp);


{/* <Provider store={myStore}>
      <ThemeProvider theme={theme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider> */}