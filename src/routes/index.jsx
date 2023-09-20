import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { routes } from '@/constants/routes';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.top_page} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
