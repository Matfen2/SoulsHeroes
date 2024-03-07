import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch/switch.component';
import { ComicsDirective } from '../comics.directive';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'nav', component: NavComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'switch', component: SwitchComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    SwitchComponent,
    ComicsDirective,
    MainComponent,
    NavComponent,
    SubscribeComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BodyModule { }
