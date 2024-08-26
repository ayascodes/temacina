import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </I18nextProvider>,
  document.getElementById('root')
);