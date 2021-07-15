import { FavoriteItem } from "../../components/Favorites/FavoriteItem";

import { useStore } from '../../hooks-store/store';

import { Placeholder } from "../Products/styles";

export function Favorites(props) {
  const state = useStore()[0];
  const favoriteProducts = state.products.filter(
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
