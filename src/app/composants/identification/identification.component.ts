import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/interfaces/utilisateur';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  utilisateur: Utilisateur = {};
  nomUtilisateur: string = "";
  prenomUtilisateur: string = "";
  message: string = "";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (res) => {
        this.nomUtilisateur = res.get('nom') ?? "";
        this.prenomUtilisateur = res.get('prenom') ?? "";
      }
    }
    )
  }

  identifier() {
    this.router.navigate(['/identification', this.utilisateur.prenom, this.utilisateur.nom]);
    this.message = `Bonjour ${this.utilisateur.prenom} ${this.utilisateur.nom}`;
    this.utilisateur = {};
  }
}
