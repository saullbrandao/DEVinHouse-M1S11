import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePhillipsPipe } from './pipes/capitalize-phillips.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePhillipsPipe,
    NavbarComponent,
    CardListComponent,
    ModalComponent,
    ContentCardComponent,
    IfElseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
