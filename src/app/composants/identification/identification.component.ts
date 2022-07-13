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
      this.message = `Bienvenue ${this.utilisateur.prenom} !`;
      this.isIdentified = true;
    })

  }

  identifier() {
    this.us.getAllUsers().subscribe(res => {
      this.utilisateurs = res;
      this.message = "";
      for (const elt of this.utilisateurs) {
        if (elt.prenom == this.utilisateur.prenom && elt.motDePasse == this.utilisateur.motDePasse) {
          this.isIdentified = true;
          this.message = `Bienvenue ${this.utilisateur.prenom} !`;
        }
        else {
          this.message = "Echec identification";
        }
      }
    })
  }
}
