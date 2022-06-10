import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from './components/header/header.component';
import { BindingExamplesComponent } from './components/binding-examples/binding-examples.component';
import { TablesComponent } from './components/tables/tables.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { IfDirComponent } from './components/if-dir/if-dir.component';
import { SwitchDirComponent } from './components/switch-dir/switch-dir.component';
import { PipesComponent } from './components/pipes/pipes.component';

import { UsersService } from './services/users.service';

import { AgePipe } from './pipes/age.pipe';
import { ServicesComponent } from './components/services/services.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { PromsObsComponent } from './components/proms-obs/proms-obs.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { CounterComponent } from './view-child/counter/counter.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    HeaderComponent,
    BindingExamplesComponent,
    TablesComponent,
    StructuralDirectivesComponent,
    IfDirComponent,
    SwitchDirComponent,
    PipesComponent,
    AgePipe,
    ServicesComponent,
    UsersComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    PromsObsComponent,
    ViewChildComponent,
    CounterComponent,
    AboutComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProductDashboardModule
  ],
  providers: [
    UsersService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
