import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ProductsPage,
  ProductDetailsPage,
  CategoriesPage,
  SaleDetailsPage
} from '../../presentation/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<ProductDetailsPage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/sale/:id' element={<SaleDetailsPage />} />
    </Routes>
  );
}
