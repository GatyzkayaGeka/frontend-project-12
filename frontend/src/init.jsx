// import i18next from 'i18next';
// import { I18nextProvider, initReactI18next } from 'react-i18next';
// import { Provider as StoreProvider } from 'react-redux';
// // import io from 'socket.io-client';
// import App from './App';
// import resources from './locales';
// import AuthProvider from './contex/AuthProvider';
// import store from './slise';
// import SocketProvider from './contex/SocketProvider';

// const init = async () => {
//   const i18n = i18next.createInstance();

//   await i18n
//     .use(initReactI18next)
//     .init({
//       resources,
//       fallbackLng: 'ru',
//     });

//   return (
//     <StoreProvider store={store}>
//       <SocketProvider>
//         <AuthProvider>
//           <I18nextProvider i18n={i18n}>
//             <App />
//           </I18nextProvider>
//         </AuthProvider>
//       </SocketProvider>
//     </StoreProvider>
//   );
// };

// export default init;
