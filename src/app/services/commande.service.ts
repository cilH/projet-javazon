import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from '../interfaces/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private url: string = "http://localhost:5555/commandes";

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<Commande[]>(this.url);
  }

  getOneOrder(nbO: number) {
    return this.http.get<Commande>(this.url + "?noCommande=" + nbO);
  }

  addOrder(o: Commande) {
    return this.http.post(this.url, o);
  }

  updateOrder(nbO: number, o: Commande) {
    return this.http.put(this.url + "?noCommande=" + nbO, o);
  }

  removeOrder(nbO: number) {
    return this.http.delete(this.url + "?noCommande=" + nbO);
  }
}
