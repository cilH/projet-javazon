import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  id?: number;
  utilisateur: Utilisateur = {};
  message: string = "";
  isAuthorised: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private us: UtilisateurService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = Number(res.get('id') ?? undefined);
      this.us.getOneUser(this.id).subscribe(res => {
        this.utilisateur = res;
        this.message = `Bienvenue ${this.utilisateur.prenom} !`;
      })
    })
  }

  autoriserModification() {
    this.isAuthorised = true;
  }
  
  modifierUtilisateur() {

  }

  annulerModification() {
    this.isAuthorised = false;
  }

  supprimerUtilisateur() {

  }
}
