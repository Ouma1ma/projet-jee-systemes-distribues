import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { BillsComponent } from './bills/bills.component';
import { CustomersComponent } from './customers/customers.component';
import { AuthGuard } from './guards/security.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"products", component:ProductsComponent,
    canActivate: [AuthGuard], data: { roles: ['USER','ADMIN']}
  },
  {
    path:"customers", component:CustomersComponent,
    canActivate: [AuthGuard], data: { roles: ['MANAGER','ADMIN']}
  },
  {
    path:"bills", component:BillsComponent,
    canActivate: [AuthGuard], data: { roles: ['MANAGER','ADMIN']}
  },
  {
    path:"bill-details/:billd",component:BillDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
