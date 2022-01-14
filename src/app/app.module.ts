import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';
import { QuickMultiplyComponent } from './quick-multiply/quick-multiply.component';
import { HomeComponent } from './home/home.component';
import { MinuteToWinItComponent } from './minute-to-win-it/minute-to-win-it.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    QuickMultiplyComponent,
    HomeComponent,
    MinuteToWinItComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
