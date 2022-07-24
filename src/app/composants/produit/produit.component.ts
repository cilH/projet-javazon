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
  produitsAAfficher: Produit[] = [];
  produit: Produit = {};
  id: number = 0;
  recherche: string | undefined;
  resultatsRecherche: Produit[] = [];
  produitsSuggeres: Produit[] = [];
  srcGrandeImage: string = "";
  srcPetiteImage1: string = "";
  srcPetiteImage2: string = "";
  srcAReduire: string = "";
  srcAAgrandire: string = "";

  constructor(
    private ps: ProduitService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(res => {
      this.id = Number(res.get('id') ?? 0);
      this.recherche = res.get('recherche') ?? undefined;
      this.afficherProduits();
    })
  }

  recupererProduits() {
    this.ps.getAllProducts().subscribe(res => {
      this.produits = res;
    })
  }

  recupererProduit() {
    this.produit = {};
    this.ps.getOneProduct(this.id).subscribe(res => {
      this.produit = res;
      this.srcGrandeImage = this.produit.src1 ?? "";
      this.srcPetiteImage1 = this.produit.src2 ?? "";
      this.srcPetiteImage2 = this.produit.src3 ?? "";
    })
  }

  permuter(no: number) {
    this.srcAReduire = this.srcGrandeImage;
    if (no == 1) {
      this.srcAAgrandire = this.srcPetiteImage1;
      this.srcPetiteImage1 = this.srcAReduire;
    }
    else {
      this.srcAAgrandire = this.srcPetiteImage2;
      this.srcPetiteImage2 = this.srcAReduire;
    }
    this.srcGrandeImage = this.srcAAgrandire;
  }

  rechercherProduit(expression: string) {
    this.resultatsRecherche = [];
    this.recupererProduits();
    for (const elt of this.produits) {
      if (elt.designation?.includes(expression) != false || elt.detail?.includes(expression) != false) {
        this.resultatsRecherche.push(elt);
      }
    }
    this.produits = this.resultatsRecherche;
    console.log(this.resultatsRecherche);
  }

  afficherProduits() {
    if (this.id != 0) {
      this.recupererProduit();
      this.recupererProduits();
      for (const elt of this.produits) {
        if (elt.categorieProduit == this.produit.categorieProduit) {
          this.produitsSuggeres.push(elt);
        }
      }
      console.log(this.produitsSuggeres);
    }
    else if (this.recherche != undefined) {
      this.rechercherProduit(this.recherche);
      console.log(this.recherche);
    }
    else {
      this.recupererProduits();
    }
  }


}
