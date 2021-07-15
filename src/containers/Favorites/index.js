import React, { useContext } from "react";

import FavoriteItem from "../components/Favorites/FavoriteItem";

import { ProductsContext } from "../../context/ProductsContext";

import { Placeholder } from "../Products/styles";

export function Favorites(props) {
  const favoriteProducts = useContext(ProductsContext).products.filter(
    (p) => p.isFavorite
  );
  let content = <Placeholder>Got no favorites yet!</Placeholder>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
}
