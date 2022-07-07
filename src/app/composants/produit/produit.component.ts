import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [
    { description: 'Raquettes jungle', prixUnitaire: 5.99, src: "assets/images/raquetteJungle.jpg", quantite: 64 },
    { description: 'Raquettes anti-moustique', prixUnitaire: 17.99, src: "assets/images/raquetteMoustique.jpg", quantite: 17 },
    { description: 'Raquettes de plage', prixUnitaire: 7.50, src: "assets/images/raquettePlage.jpg", quantite: 327 },
    { description: 'Raquettes paddle', prixUnitaire: 59, src: "assets/images/raquettePaddle.jpg", quantite: 25 },
    { description: 'Raquettes anti-moustique 5-en-1', prixUnitaire: 38.99, src: "assets/images/raquetteLampe.jpg", quantite: 1 },
    { description: 'Raquettes de neige', prixUnitaire: 25, src: "assets/images/raquetteNeige.jpg", quantite: 3 },
    { description: 'Raquettes à bulles de savon géantes', prixUnitaire: 13.90, src: "assets/images/raquetteABulles.jpg", quantite: 648 },
    { description: 'Raquettes scratch', prixUnitaire: 3.99, src: "assets/images/raquetteScratch.jpg", quantite: 112 },
]
  constructor() { }

  ngOnInit(): void {
  }

  rechercherProduits() {

  }
}
