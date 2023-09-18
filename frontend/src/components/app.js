import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';

// Импортируем компоненты страниц здесь
import Home from './Home'; // Компонент для страницы /
import Login from './Login'; // Компонент для страницы /login
import NotFound from './NotFound'; // Компонент для страницы 404

const App = () => (
  <BrowserRouter>
    <Router>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  </BrowserRouter>
);

export default App;
