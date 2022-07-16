import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id: number | undefined;
  recherche: string = "";
  produits: Produit[] = [];

  constructor(
    private ps: ProduitService,
    private router: Router) { }

  ngOnInit(): void {

  }

  rechercherProduits(): void {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
      for (const elt of this.produits) {
        if (elt.designation?.indexOf(this.recherche) != null || elt.detail?.indexOf(this.recherche) != null) {
          this.ps.resultatsRecherche.push(elt);
        }
      }
      this.router.navigateByUrl(`/produit?recherche=${this.recherche}`);
      // this.ps.resultatsRecherche = [];
    })

  }
}
