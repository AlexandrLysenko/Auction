import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeBannerComponent } from './home-page/home-banner/home-banner.component';
import { ContactsComponent }   from './contacts-page/contacts/contacts.component';	
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ProductFormComponent } from './sell-page/product-form/product-form.component';
import { ProductComponent } from './buy-page/product/product.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { SellPageComponent } from './sell-page/sell-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'sell', component: SellPageComponent },
  { path: 'buy', component: BuyPageComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}