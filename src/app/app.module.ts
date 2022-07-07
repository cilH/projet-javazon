import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { MenuComponent } from './composants/menu/menu.component';
import { IdentificationComponent } from './composants/identification/identification.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { FormsModule } from '@angular/forms';
import { PanierComponent } from './composants/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    IdentificationComponent,
    ProduitComponent,
    ErreurComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
