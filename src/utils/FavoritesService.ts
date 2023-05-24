import { LocalStorageService } from './LocalStorageService';

export class FavoritesService {
  private static favoritesKey = 'favorites';

  public static getFavorites = (): number[] => {
    const favorites = LocalStorageService.getFromLocalStorage<number[]>(
      FavoritesService.favoritesKey
    );

    if (favorites) {
      return favorites;
    } else {
      LocalStorageService.addToLocalStorage(FavoritesService.favoritesKey, []);
      return [];
    }
  };

  public static addToFavorites = (key: number): number[] => {
    const favorites = FavoritesService.getFavorites();

    favorites.push(key);

    LocalStorageService.addToLocalStorage(
      FavoritesService.favoritesKey,
      favorites
    );

    return favorites;
  };

  public static deleteFromFavorites = (key: number): number[] => {
    let favorites = FavoritesService.getFavorites();

    favorites = favorites.filter((favoriteKey: number) => favoriteKey !== key);

    LocalStorageService.addToLocalStorage(
      FavoritesService.favoritesKey,
      favorites
    );

    return favorites;
  };
}
