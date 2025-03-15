import { IDatabase } from '../interfaces';

class LocalDatabase implements IDatabase {
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }
}

export default new LocalDatabase();
