import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { ProduitService } from 'src/app/services/produit.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  recherche: string = "";
  produits: Produit[] = [];
  utilisateur: Utilisateur | undefined;

  constructor(
    private ps: ProduitService,
    private router: Router,
    private us: UtilisateurService) { }

  ngOnInit(): void {

  }

  rechercherProduits(): void {
    this.ps.resultatsRecherche = [];
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
      for (const elt of this.produits) {
        if (elt.designation?.indexOf(this.recherche) != null || elt.detail?.indexOf(this.recherche) != null) {
          this.ps.resultatsRecherche.push(elt);
        }
      }
      this.router.navigateByUrl(`/produit?recherche=${this.recherche}`);
    })

  }
  accederCompte() {
    if(localStorage.getItem('user') != null) {
      this.utilisateur = JSON.parse(localStorage.getItem('user') ?? "");
      this.router.navigateByUrl(`/compte/${this.utilisateur?.id}`);
    }
    else {
      this.router.navigateByUrl(``);
    }
  }

  seDeconnecter() {
    localStorage.removeItem('user');
  }
}
