import React from 'react';
import Products from './components/products';
import { Link } from 'react-router-dom';

function ProductSummary() {



	return (
		<>
			<h1>Ürünlerimiz</h1>
			<Products />

			<Link to="/favorite-summary">Favori Ürünler</Link>
		</>
	);
}

export default ProductSummary;
