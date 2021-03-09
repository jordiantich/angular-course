import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Componente1Component } from './components/componente1/componente1.component';
import { PersonaComponent } from './components/persona/persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

const config = {
  apiKey: "AIzaSyBv0JlKlERAEyS_1A_t6O0YZdE90rn4Bhw",
  authDomain: "curso-angular-e4a50.firebaseapp.com",
  projectId: "curso-angular-e4a50",
  storageBucket: "curso-angular-e4a50.appspot.com",
  messagingSenderId: "998304486188",
  appId: "1:998304486188:web:62c47eef0a9592d6bb9289",
  measurementId: "G-445PB7G86X"
};

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    PersonaComponent,
    Page1Component,
    Page2Component,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
