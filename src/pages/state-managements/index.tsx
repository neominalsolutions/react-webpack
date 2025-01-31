import React from 'react';
import Products from './components/products';
import { Link } from 'react-router-dom';

function ContextAPI() {
	return (
		<>
			<h1>Ürünlerimiz</h1>
			<Products />

			<Link to="/favori-products">Favori Ürünler</Link>
		</>
	);
}

export default ContextAPI;
