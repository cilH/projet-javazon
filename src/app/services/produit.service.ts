import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url: string = "http://localhost:5555/produits";
  resultatsRecherche: Produit[] = [];
  
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Produit[]>(this.url);
  }

  getOneProduct(id: number) {
    return this.http.get<Produit>(this.url+"/"+id);
  }

  addProduct(p: Produit){
    return this.http.post<Produit>(this.url, p);
  }

  updateProduct(p: Produit){
    return this.http.put<Produit>(this.url+"/"+p.id, p);
  }

  removeProduct(id: number){
    return this.http.delete<Produit>(this.url+"/"+id);
  }

  //searchProducts(s: string): Produit[] {
    // let produits: Produit[] = this.getAllProducts;
    // for (const elt of produits) {
    //     if (elt.designation?.indexOf(s) != null || elt.detail?.indexOf(s) != null) {
    //       this.resultatsRecherche.push(elt);
    //       return this.resultatsRecherche;
    //     }
    //   }
  //}
}
