import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'account',component:AccountComponent},
  {path:'form',component:DynamicFormComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
