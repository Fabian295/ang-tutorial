import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingExamplesComponent } from './components/binding-examples/binding-examples.component';
import { IntroComponent } from './components/intro/intro.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { TablesComponent } from './components/tables/tables.component';
import { IfDirComponent } from './components/if-dir/if-dir.component';
import { SwitchDirComponent } from './components/switch-dir/switch-dir.component';
import { ServicesComponent } from './components/services/services.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { PromsObsComponent } from './components/proms-obs/proms-obs.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard/product-dashboard.component';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';
import { HomeComponent } from './product-dashboard/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'},
  {path: 'binding', component: BindingExamplesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'users', component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {path: 'user/:id', component: UserComponent,
  children: [
    {path: '', redirectTo: 'address', pathMatch: 'full'},
    {path: 'address', component: AddressComponent},
    {path: 'company', component: CompanyComponent}
  ]
},
  {path: 'intro', component: IntroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'structuals', component: StructuralDirectivesComponent},
  {path: 'promsObs', component: PromsObsComponent, pathMatch: 'full'},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'product-dashboard', component: ProductDashboardComponent}
  // {path: 'structuals#if-dir', component: IfDirComponent},
  // {path: 'for-dir', component: TablesComponent},
  // {path: 'switch-dir', component: SwitchDirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
