import {Role} from './role';
import Product from '../../screen/shared/models/product';

export default class User {
  username: string;
  parola: string;
  isim: string;
  soyisim: string;
  mail: string;
  token: string;
  role: Role;
  favoriteProducts: Product[] = [];
}
