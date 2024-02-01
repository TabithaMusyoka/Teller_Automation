import { NgModel } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './reports/login/login.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginComponent,
    // ... other components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // ... other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppComponent {
  title = 'my-angular-app';
}

export class AppModule { }

