import React, { useContext } from 'react';
import { FavoriteProductContext } from '../contexts/favorite.product.context';

function FavoriteProducts() {
	// useContext hook'u ile context'ten state'i aldık
	const context = useContext(FavoriteProductContext);
	if (!context) {
		return null; // or handle the null case appropriately
	}

	return (
		<>
			{context.state.map((item, index) => {
				return (
					<div key={index}>
						<p>{item.name}</p>
						<button onClick={() => context.removeItem(item.id)}>
							Favoriden Çıkar
						</button>
					</div>
				);
			})}
		</>
	);
}

export default FavoriteProducts;
