import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Componente1Component } from './components/componente1/componente1.component';

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
    Componente1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
