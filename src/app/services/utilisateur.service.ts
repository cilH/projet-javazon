import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url: string = "http://localhost:5555/utilisateurs";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<Utilisateur[]>(this.url);
  }

  getOneUser(id: number) {
    return this.http.get<Utilisateur>(this.url + "/" + id);
  }

  addUser(u: Utilisateur) {
    return this.http.post(this.url, u);
  }

  updateUser(u: Utilisateur) {
    return this.http.put(this.url + "/" + u.id, u);
  }

  removeUser(id: number) {
    return this.http.delete(this.url + "/" + id);
  }

  checkUser(email: string, password: string) {
    return this.http.get<Utilisateur[]>(this.url + "?email=" + email + "&motDePasse=" + password);
  }
}
