import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  utilisateur: Utilisateur = {};
  utilisateurs: Utilisateur[] = [];
  email: string = "";
  motDePasse: string = "";
  id?: number;
  isIdentified: boolean = false;
  isNewUser: boolean = false;
  message: string = "";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private us: UtilisateurService) { }

  ngOnInit(): void {

  }

  basculerSurInscription() {
    this.isNewUser = true;
  }

  basculerSurConnexion() {
    this.isNewUser = false;
  }

  ajouterUtilisateur() {
    this.us.addUser(this.utilisateur).subscribe(res => {
      this.isIdentified = true;
      const userString = JSON.stringify(this.us.getOneUser(this.utilisateur.id ?? 0));
       localStorage.setItem('user', userString)
          this.router.navigateByUrl(`/compte/${this.utilisateur.id}`);
    })
  }

  seConnecter() {
    this.us.getAllUsers().subscribe(res => {
      this.utilisateurs = res;
      this.message = "";
      this.us.checkUser(this.email, this.motDePasse).subscribe(res => {
        if (res.length > 0) {
          this.utilisateur = res[0];
          this.isIdentified = true;
          const userString = JSON.stringify(res[0]);
          localStorage.setItem('user', userString)
          this.router.navigateByUrl(`/compte/${this.utilisateur.id}`);
        }
        else {
          this.message = "Echec identification";
        }
      })
    })
  }
}
