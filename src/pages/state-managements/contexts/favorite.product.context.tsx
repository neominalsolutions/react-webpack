import React, { createContext } from 'react';
import { FavoriteProduct } from '../models/favorite.product.model';

// FavoriteProductContextType adında bir tür oluşturduk. Bu tür ile favori ürünlerin listesini ve bu listeye ürün eklemek ve çıkarmak için kullanacağımız fonksiyonları tanımladık.

export type FavoriteProductContextType = {
	state: FavoriteProduct[];
	addItem: (products: FavoriteProduct) => void;
	removeItem: (id: number) => void;
};

// createContext fonksiyonu ile bir favori ürünler context'i oluşturduk. Bu context'i kullanarak favori ürünlerin listesini ve bu listeye ürün eklemek ve çıkarmak için kullanacağımız fonksiyonları paylaşacağız.

// Provider içerisindeki yapılan işlemlere componentlerden erişmek için createContext fonksiyonu ile bir context oluşturduk.
export const FavoriteProductContext =
	createContext<FavoriteProductContextType | null>(null);

// FavoriteProductProvider adında bir bileşen oluşturduk. Bu bileşen, favori ürünlerin listesini ve bu listeye ürün eklemek ve çıkarmak için kullanacağımız fonksiyonları sağlar.

type Props = {
	children: React.ReactNode; // provider içerisine alınacak olan bileşen
};

// useReducerdaki reducer fonksiyonu gibi bir fonksiyon oluşturduk. Bu fonksiyon, favori ürünler listesine ürün ekler veya çıkartır.
export const FavoriProductProvider = ({ children }: Props) => {
	// favoriteProducts adında bir favori ürünler listesi oluşturduk.
	// global state
	const [state, setState] = React.useState<FavoriteProduct[]>([]);

	// addItem adında bir fonksiyon oluşturduk. Bu fonksiyon, favori ürünler listesine ürün ekler.
	const addItem = (product: FavoriteProduct) => {
		const item = state.find((item) => item.id === product.id);

		if (!item) {
			// favori listede yoksa ekler
			setState([...state, product]);
		}

		return;
	};

	const removeItem = (id: number) => {
		const newState = state.filter((item) => item.id !== id);
		// favori listeden çıkartır
		// listeden çıkarıp state güncelleme işlemi
		setState(newState);
	};

	const values = { state, addItem, removeItem };

	return (
		<FavoriteProductContext.Provider value={values}>
			{children}
		</FavoriteProductContext.Provider>
	);
};
