import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from 'angular2-image-upload';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeBannerComponent } from './home-page/home-banner/home-banner.component';
import { ContactsComponent } from './contacts-page/contacts/contacts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuctionsComponent } from './home-page/auctions/auctions.component';
import { AboutComponent } from './home-page/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './buy-page/product/product.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { ProductFormComponent } from './sell-page/product-form/product-form.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ContactsBannerComponent } from './contacts-page/contacts-banner/contacts-banner.component';
import { ProductDataService } from './product-data.service';
import { FormsModule } from '@angular/forms';
import { GmapComponent } from './gmap/gmap.component';
import { BuyPageComponent } from './buy-page/buy-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBannerComponent,
    ContactsComponent,
    HomePageComponent,
    AuctionsComponent,
    AboutComponent,
    FooterComponent,
    ProductComponent,
    SellPageComponent,
    ProductFormComponent,
    ContactsPageComponent,
    ContactsBannerComponent,
    GmapComponent,
    BuyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageUploadModule.forRoot()

  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
