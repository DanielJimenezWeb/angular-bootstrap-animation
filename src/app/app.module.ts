import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Animacion1Component } from './animacion1/animacion1.component';

import { HttpClientModule } from '@angular/common/http';
import { LottieComponent, provideLottieOptions, provideCacheableAnimationLoader, LottieModule, LottieCacheModule } from 'ngx-lottie';
import { Animacion2Component } from './animacion2/animacion2.component';



@NgModule({
  declarations: [
    AppComponent,
    Animacion1Component,
    Animacion2Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    LottieModule,
    LottieCacheModule,
    LottieComponent

  ],
  providers: [


    provideLottieOptions({
      useWebWorker: true,
      player: () => import('lottie-web'),
    }),
    provideCacheableAnimationLoader()

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
