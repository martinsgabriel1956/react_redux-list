export const TOGGLE_FAV = 'TOGGLE_FAV';

export function toggleFav(id) {
    return { type: TOGGLE_FAV, productId: id };
};