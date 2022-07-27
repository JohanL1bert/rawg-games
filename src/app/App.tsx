import React from 'react';
import { Routes, Route } from 'react-router-dom';
/* import { AppRoute } from 'common/const/AppRoutes.const'; */
import { Layout } from 'app/pages/Layout';
import { LogIn } from 'app/pages/LogInPage';
import { NotFoundPage } from 'app/pages/NotFoundPage';
import { Home } from 'app/pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
