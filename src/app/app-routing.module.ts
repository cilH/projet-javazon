import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { IdentificationComponent } from './composants/identification/identification.component';
import { PanierComponent } from './composants/panier/panier.component';
import { ProduitComponent } from './composants/produit/produit.component';

const routes: Routes = [
  { path: '', component: IdentificationComponent },
  { path: 'identification/:prenom/:nom', component: IdentificationComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'erreur', component: ErreurComponent },
  { path: '**', redirectTo: 'erreur' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
