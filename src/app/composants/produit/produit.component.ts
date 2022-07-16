import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  produit: Produit = {};
  id: number = 0;
  recherche: string = "";
  
  constructor(
    private ps: ProduitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(res => {
    this.route.queryParamMap.subscribe(res => {
      this.id = Number(res.get('id') ?? 0);
      this.recherche = res.get('recherche') ?? "";
      if (this.id != 0) {
        this.recupererProduit();
      }
      else if(this.recherche != "") {
        this.produits = this.ps.resultatsRecherche;
      }
      else {
        this.recupererProduits();
      }
    })
    this.produits = [];
  }

  recupererProduits() {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
    })
  }

  recupererProduit() {
    this.ps.getOneProduct(this.id).subscribe(res => {
      this.produit = res;
    })
  }

  permuter(no: number) {
   
  }
}
