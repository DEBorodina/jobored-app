export class LocalStorageService {
  static addToLocalStorage = (key: string, value: unknown) => {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
  };

  static getFromLocalStorage = <T>(key: string): T | null => {
    const stringifyValue = localStorage.getItem(key);
    if (stringifyValue) {
      const value = JSON.parse(stringifyValue);
      return value;
    } else {
      return null;
    }
  };
}
