import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './composants/compte/compte.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { IdentificationComponent } from './composants/identification/identification.component';
import { PanierComponent } from './composants/panier/panier.component';
import { ProduitComponent } from './composants/produit/produit.component';

const routes: Routes = [
  { path: '', component: IdentificationComponent },
  { path: 'compte/:id', component: CompteComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/:id', component: ProduitComponent },
  { path: 'produit/:recherche', component: ProduitComponent },
  { path: 'panier/:noCommande', component: PanierComponent },
  { path: 'erreur', component: ErreurComponent },
  { path: '**', redirectTo: 'erreur' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
