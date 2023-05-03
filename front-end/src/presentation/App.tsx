import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../shared/routes/index.routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../shared/styles/themes/default.theme';
import { GlobalStyles } from '../shared/styles/GlobalStyles';
import { Header, Toast } from './components';
import 'react-confirm-alert/src/react-confirm-alert.css';

function App(): JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Toast />

        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
