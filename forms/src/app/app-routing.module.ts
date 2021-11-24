import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes=[

  {path:'first-component' ,component:FirstComponent,
//    children :[

//            {path:'child-b' , component:SecondComponent},
//            {path :'child-b',component:HeroesComponent}
//  ]
},
  {path:'second-component' ,component:SecondComponent},
  {path:'form-component', component:FormComponent},
  {path :'heroes-component',component :HeroesComponent},
  {path:'',redirectTo:'/dashboaard',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
  {path :'dashboard' ,component :DashboardComponent}

];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports :[RouterModule]


})
export class AppRoutingModule { }
