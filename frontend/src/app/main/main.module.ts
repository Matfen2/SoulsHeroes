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
import { ComicsShowDirective } from '../comics-show.directive';
import { HeroesDirective } from '../heroes.directive';
import { BatmanUniversComponent } from './batman-univers/batman-univers.component';
import { SupermanUniversComponent } from './superman-univers/superman-univers.component';
import { SpidermanUniversComponent } from './spiderman-univers/spiderman-univers.component';
import { BatmanComicsComponent } from './batman-comics/batman-comics.component';
import { SpidermanComicsComponent } from './spiderman-comics/spiderman-comics.component';
import { SupermanComicsComponent } from './superman-comics/superman-comics.component';

const routesPages: Routes = [
  { path: 'univers', component: UniversComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'batman-univers', component: BatmanUniversComponent },
  { path: 'superman-univers', component: SupermanUniversComponent },
  { path: 'spiderman-univers', component: SpidermanUniversComponent },
  { path: 'batman-comics/:id', component: BatmanComicsComponent },
  { path: 'superman-comics/:id', component: SupermanComicsComponent },
  { path: 'spiderman-comics/:id', component: SpidermanComicsComponent },
  { path: '', redirectTo: '/univers', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UniversComponent,
    SearchComponent,
    HeroesComponent,
    HeroesDirective,
    ComicsShowDirective,
    BatmanUniversComponent,
    SupermanUniversComponent,
    SpidermanUniversComponent,
    BatmanComicsComponent,
    SpidermanComicsComponent,
    SupermanComicsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesPages),
  ],
})
export class MainModule {}
