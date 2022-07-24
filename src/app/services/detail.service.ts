import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detail } from '../interfaces/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private url: string = "http://localhost:5555/detailsCommande";

  constructor(private http: HttpClient) { }

  getAllDetails() {
    return this.http.get<Detail[]>(this.url);
  }

  getOrderDetails(nbO: number) {
    return this.http.get<Detail[]>(this.url+"?noCommande="+nbO);
  }

  addOrderDetails(detail: Detail) {
    return this.http.post(this.url, detail);
  }

  updateOrderDetail(nbO: number, idProduct: number, detail: Detail) {
    return this.http.put(this.url+"?noCommande="+nbO+"&idProduit="+idProduct, detail);
  }

  removeOrderDetail(nbO: number, idProduct: number) {
    return this.http.delete(this.url+"?noCommande="+nbO+"&idProduit="+idProduct);
  }
}
