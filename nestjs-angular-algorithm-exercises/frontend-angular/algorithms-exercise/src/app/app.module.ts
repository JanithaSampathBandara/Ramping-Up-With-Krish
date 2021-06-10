import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagramCheckerComponent } from './anagram-checker/anagram-checker.component';
import { OccurencesCounterComponent } from './occurences-counter/occurences-counter.component';
import { NthLargestNumberComponent } from './nth-largest-number/nth-largest-number.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnagramCheckerComponent,
    OccurencesCounterComponent,
    NthLargestNumberComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'anagram', component: AnagramCheckerComponent},
      {path: 'nth-largest', component: NthLargestNumberComponent},
      {path: 'occurences', component: OccurencesCounterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
