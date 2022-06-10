import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  {path: 'prodHome', component: HomeComponent, children: [
    {path: 'about', outlet:'info', component: AboutComponent},
    {path: 'contact', outlet:'location', component: ContactComponent},
  ]}
]


@NgModule({
  declarations: [
    ProductDashboardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    ProductDashboardComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class ProductDashboardModule { }
