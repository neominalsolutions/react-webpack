import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.scss';
import lionPng from './assets/lion.jpg';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Memoisation from './pages/memoisation';
import ReactMemo from './pages/memoisation/pages/react-memo';
import UseMemo from './pages/memoisation/pages/usememo';
import UseCallback from './pages/memoisation/pages/usecallback';
import Hooks from './pages/hooks';
import UseRef from './pages/hooks/pages/useRef';
import useImperative from './pages/hooks/pages/useImperative';
import UseReducer from './pages/hooks/pages/useReducer';
import useNonImperative from './pages/hooks/pages/useNonImperative';
import ProductSummary from './pages/state-managements';
import { FavoriProductProvider } from './pages/state-managements/contexts/favorite.product.context';
import Products from './pages/state-managements/components/products';
import FavoriteProducts from './pages/state-managements/components/favorite.product';
import FavoriteSummary from './pages/state-managements/pages/product.summary';

// ana component
const App = () => {
	return (
		<div>
			<h1 className="test">Hello Webpack</h1>
			<img src={lionPng} alt="placeholder" />
			<p>Deneme</p>
			<Link style={{ padding: 5 }} to="/memoisation">
				Memoisation
			</Link>
			<Link style={{ padding: 5 }} to="/hooks">
				Hooks
			</Link>
			<Link style={{ padding: 5 }} to="/product-summary">
				Product Summary
			</Link>
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
	},
	{
		path: '/memoisation',
		Component: Memoisation,
		children: [
			{
				path: 'react-memo',
				Component: ReactMemo,
			},
			{
				path: 'useMemo',
				Component: UseMemo,
			},
			{
				path: 'useCallback',
				Component: UseCallback,
			},
		],
	},
	{
		path: '/hooks',
		Component: Hooks,
		children: [
			{
				path: 'useRef',
				Component: UseRef,
			},
			{
				path: 'useImperative',
				Component: useImperative,
			},
			{
				path: 'useNonImperative',
				Component: useNonImperative,
			},
			{
				path: 'useReducer',
				Component: UseReducer,
			},
		],
	},
	{
		path: '/product-summary',
		// Component: ContextAPI,
		// Gereksiz render engellemek için bu yöntem daha doğru
		element: (
			<FavoriProductProvider>
				<ProductSummary />
			</FavoriProductProvider>
		),
	},
	{
		path: '/favorite-summary',
		// Component: ProductSummary,
		element: (
			<FavoriProductProvider>
				<FavoriteSummary />
			</FavoriProductProvider>
		),
	},
]);

// div id'si root olan elemente App componentini render et
// FavoriteProductProvider ile context'i uygulamaya dahil ettik

// avantajı => uygulama genelinde tüm componentlerin erişebileceği bir state oluşturduk
// dezavantajı => global state olduğu için uygulama büyüdükçe yönetilmesi zor olabilir ve gereksiz render işlemleri olabilir

// root.render(
// 	<FavoriProductProvider>
// 		<RouterProvider router={router} />
// 	</FavoriProductProvider>
// );

root.render(<RouterProvider router={router} />);
