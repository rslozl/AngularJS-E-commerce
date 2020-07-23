export default class Product{
  id: number;
  urunadi: string;
  urunfiyati: string;
  urunadedi: number;
  urunkategori: string;
  urunResim: string;
  urunAciklamasi: string;

  static of(id: number){
    const p = new Product();
    p.id = id;
    return p;
  }
}
