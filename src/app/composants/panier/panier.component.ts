import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commande } from 'src/app/interfaces/commande';
import { Detail } from 'src/app/interfaces/detail';
import { Produit } from 'src/app/interfaces/produit';
import { DetailService } from 'src/app/services/detail.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  commande: Commande = {};
  noCommande: number = 0;
  detailsCommande: Detail[] = [];
  produit: Produit = {};
  visuels: string[] = [];
  designations: string[] = [];
  prixUnitaires: number[] = [];
  prixTotaux: number[] = [];

  constructor(
    private ds: DetailService,
    private route: ActivatedRoute,
    private ps: ProduitService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.noCommande = Number(res.get("noCommande") ?? 0);
    })

    this.ds.getOrderDetails(this.noCommande).subscribe(res => {
      this.detailsCommande = res;
      for (const elt of this.detailsCommande) {
        this.ps.getOneProduct(elt.idProduit ?? 0).subscribe(res => {
          this.produit = res;
          this.visuels.push(this.produit.src1 ?? "");
          this.designations.push(this.produit.marque + " " + this.produit.designation ?? "");
          this.prixUnitaires.push(this.produit.prixUnitaire ?? 0);
          let prixTotal = eval(`${this.produit.prixUnitaire} * ${elt.quantite}`);
          this.prixTotaux.push(prixTotal);
        })
      }
    })

  }

  // recupererInfo(idProduit: number) {
  //   this.ps.getOneProduct(idProduit).subscribe(res => {
  //     this.produit = res;
  //     this.visuel = this.produit.src1 ?? "";
  //     this.designation = this.produit.designation ?? "";
  //     this.prix = this.produit.prixUnitaire ?? 0;
  //   })

  // }
}


