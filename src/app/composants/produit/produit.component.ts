import { Component, OnInit } from '@angular/core';
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
  constructor(private ps: ProduitService) { }

  ngOnInit(): void {
    this.recupererProduits();
  }

  rechercherProduits() {

  }

  recupererProduits() {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
    })
  }
}
