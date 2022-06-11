import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { TabsComponent } from './tabs/tabs.component';
import { BeverageComponent } from './beverage/beverage.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { FrozenComponent } from './frozen/frozen.component';
import { HotFoodComponent } from './hot-food/hot-food.component';
import { AddCamperComponent } from './add-camper/add-camper.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SnacksComponent } from './snacks/snacks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreComponent,
    TabsComponent,
    BeverageComponent,
    SpecialtyComponent,
    FrozenComponent,
    HotFoodComponent,
    AddCamperComponent,
    InventoryComponent,
    SnacksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
