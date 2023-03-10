import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { BillsComponent } from './bills/bills.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

export function kcFactory(kcService: KeycloakService) {
  return () => {
    kcService.init({
      config: {
        realm:"gestion-commandes-realm",
        clientId: "gestion-commandes-client",
        url: "http://localhost:8080"
      },
      initOptions: {
        onLoad: "check-sso",
        checkLoginIframe: true
      }
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    BillsComponent,
    BillDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps:[KeycloakService],useFactory:kcFactory,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
