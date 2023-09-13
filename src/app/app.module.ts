import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Animacion1Component } from './animacion1/animacion1.component';

// importacion de animaciones
import { HttpClientModule } from '@angular/common/http';
import { LottieComponent, provideLottieOptions, provideCacheableAnimationLoader } from 'ngx-lottie';
// termina importacion de animaciones

@NgModule({
  declarations: [
    AppComponent,
    Animacion1Component
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,

    // importacion de animaciones
    BrowserModule.withServerTransition({ appId: 'ngx-lottie-universal' }),
    HttpClientModule,
    LottieComponent
    // termina importacion de animaciones
  ],
  providers: [

    // importacion de animaciones
    provideLottieOptions({
      useWebWorker: true,
      player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
    }),
    provideCacheableAnimationLoader()
    // termina importacion de animaciones
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
