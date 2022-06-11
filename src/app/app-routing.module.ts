import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { AddCamperComponent } from './add-camper/add-camper.component';
import { BeverageComponent } from './beverage/beverage.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { HotFoodComponent } from './hot-food/hot-food.component';
import { SnacksComponent } from './snacks/snacks.component';
import { FrozenComponent } from './frozen/frozen.component';
import { StoreComponent } from './store/store.component';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'login', component: LoginComponent, data: { text: 'Login' } },
  { path: 'tabs', component: TabsComponent, data: { text: 'Tabs' } },
  { path: 'add-campers', component: AddCamperComponent, data: { text: 'Add Camper(s)' } },
  { path: 'beverages', component: BeverageComponent, data: { text: 'Beverages' } },
  { path: 'coffee-specialty', component: SpecialtyComponent, data: { text: 'Coffee/Specialty' } },
  { path: 'hot-food', component: HotFoodComponent, data: { text: 'Hot Food' } },
  { path: 'snacks', component: SnacksComponent, data: { text: 'Snacks' } },
  { path: 'frozen', component: FrozenComponent, data: { text: 'Frozen' } },
  { path: 'store', component: StoreComponent, data: { text: 'Store' } },
  { path: 'inventory', component: InventoryComponent, data: { text: 'Inventory' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    ErrorRoutingModule],

  exports: [
    RouterModule, 
    ErrorRoutingModule
  ]
})
export class AppRoutingModule { }
