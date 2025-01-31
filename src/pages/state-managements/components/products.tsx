// Listeye eklenecek olan ürünlerin listesi olsun

import React from 'react';
import { Product } from '../models/product.model';
import {
	FavoriteProductContext,
	FavoriteProductContextType,
} from '../contexts/favorite.product.context';

function Products() {
	const context = React.useContext(FavoriteProductContext);

	if (!context) {
		throw new Error('FavoriteProductContext is null');
	}
	
	const { addItem } = context;

	const [products, setProducts] = React.useState<Product[]>([
		{ id: 1, name: 'Samsung S8', price: 3000 },
		{ id: 2, name: 'Samsung S9', price: 4000 },
		{ id: 3, name: 'Samsung S10', price: 5000 },
		{ id: 4, name: 'Samsung S20', price: 6000 },
		{ id: 5, name: 'Samsung S21', price: 7000 },
	]);

	const addToFavorites = (product: Product) => {
		// Favorilere ekleme işlemi
		console.log('Favorilere eklendi', product);
		addItem({ id: product.id, name: product.name, price: product.price });
	};

	return (
		<>
			{products.map((product) => (
				<div key={product.id}>
					{product.name}
					<br></br>
					<button onClick={() => addToFavorites(product)}>
						Add To Favorite
					</button>
				</div>
			))}
		</>
	);
}

export default Products;
