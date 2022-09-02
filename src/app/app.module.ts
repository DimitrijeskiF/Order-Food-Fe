import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsListComponent } from './components/items-list/items-list.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "./pipe/filter.pipe";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTreeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
