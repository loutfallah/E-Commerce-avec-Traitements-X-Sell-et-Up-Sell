import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ChekoutComponent } from './pages/chekout/chekout.component';
import { CategoryComponent } from './pages/category/category.component';
import { PanierComponent } from './pages/panier/panier.component';
import { SearchComponent } from './pages/search/search.component';
import { ProduitDetailsComponent } from './pages/produit-details/produit-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { FooterComponent } from './include/footer/footer.component';
import { BodyHomeComponent } from './include/body-home/body-home.component';
import { BodyCategoryComponent } from './include/body-category/body-category.component';
import { BodyRegisterComponent } from './include/body-register/body-register.component';
import { BodyProduitComponent } from './include/body-produit/body-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    ChekoutComponent,
    CategoryComponent,
    PanierComponent,
    SearchComponent,
    ProduitDetailsComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    BodyHomeComponent,
    BodyCategoryComponent,
    BodyRegisterComponent,
    BodyProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
