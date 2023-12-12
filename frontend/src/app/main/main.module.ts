import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UniversComponent } from './univers/univers.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HeroesComponent } from './heroes/heroes.component';

const routesPages : Routes = [
  {path: 'univers', component: UniversComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: '/univers', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UniversComponent,
    SearchComponent,
    HeroesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesPages),
  ]
})
export class MainModule { }
