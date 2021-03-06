import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuickMultiplyComponent } from './quick-multiply/quick-multiply.component';
import { MinuteToWinItComponent } from './minute-to-win-it/minute-to-win-it.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'quick-multiply',
    component: QuickMultiplyComponent
  },
  {
    path: 'minute-to-win-it',
    component: MinuteToWinItComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
