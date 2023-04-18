import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcomerceRoutingModule } from './ecomerce-routing.module';
import { ItemsDashboardComponent } from './components/items-dashboard/items-dashboard.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { CartPanelComponent } from './components/cart-panel/cart-panel.component';


@NgModule({
  declarations: [
    ItemsDashboardComponent,
    ItemCardComponent,
    CartPanelComponent
  ],
  imports: [
    CommonModule,
    EcomerceRoutingModule,
    AngularMaterialModule,
    FormsModule,
  ],
})
export class EcomerceModule { }
