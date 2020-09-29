import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatMultiselect } from "./mat-multiselect/mat-multiselect.component";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MyHeaderComponent } from './my-header/my-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MatMultiselect,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
