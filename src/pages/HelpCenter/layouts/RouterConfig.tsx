import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './RoutLayout';
import Welcoming from '../pages/Welcoming';
import Inscription from '../pages/help_inscription';
import Connextion from '../pages/help_connextion';
import MajAch from '../pages/help_maj_ach';
import MajVend from '../pages/help_maj_vend';
import Mdp from '../pages/help_mdp';
import Product from '../pages/help_product';
import Abnm from '../pages/help_abnm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Welcoming />} />
      <Route path="help_inscription" element={<Inscription />} />
      <Route path="help_connextion" element={<Connextion />} />
      <Route path="help_maj_ach" element={<MajAch />} />
      <Route path="help_maj_vend" element={<MajVend />} />
      <Route path="help_mdp" element={<Mdp />} />
      <Route path="help_product" element={<Product />} />
      <Route path="help_abnm" element={<Abnm />} />
    </Route>
  )
);

const RouterConfig = () => {
  return <RouterProvider router={router} />;
};

export default RouterConfig;
