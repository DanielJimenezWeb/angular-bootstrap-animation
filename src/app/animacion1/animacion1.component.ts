import { Component } from '@angular/core';

// importacion de animaciones
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, AfterViewChecked, NgZone, Inject, PLATFORM_ID, } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMDestroyEvent, LottieTransferState } from 'ngx-lottie';
// Termina importacion de animaciones

@Component({
  selector: 'app-animacion1',
  templateUrl: './animacion1.component.html',
  styleUrls: ['./animacion1.component.scss'],
  // importacion de animaciones
  changeDetection: ChangeDetectionStrategy.OnPush
  // Termina importacion de animaciones
})
export class Animacion1Component implements AfterViewChecked {
  // importacion de animaciones
  options!: AnimationOptions;
  shown = true;
  styles: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

  private animationItem: AnimationItem | null = null;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: string,
    private lottieTransferState: LottieTransferState,
  ) {
    this.createOptions();
  }

  ngAfterViewChecked(): void {
    // Notice that it's not logged every ms
    if (isPlatformBrowser(this.platformId)) {
      console.log('ngAfterViewChecked');
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    NgZone.assertInAngularZone();
    console.log('animationCreated -> ', animationItem);
    this.animationItem = animationItem;
  }

  destroy(destroyEvent: BMDestroyEvent): void {
    NgZone.assertNotInAngularZone();
    console.log('destroy -> ', destroyEvent);
  }

  showAnimation(): void {
    this.shown = true;
  }

  destroyAnimation(): void {
    this.shown = false;
    this.animationItem = null;
  }

  setSpeed(speed: number): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.setSpeed(speed);
    });
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.play();
    });
  }

  pause(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.pause();
    });
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.stop();
    });
  }

  updateAnimation(): void {
    this.options = {
      path: '/assets/animaciones/animation.json',
    };
  }

  private createOptions(): void {
    const tranferredAnimationData = this.lottieTransferState.get('/animation.json');

    if (tranferredAnimationData) {
      this.options = {
        animationData: tranferredAnimationData,
      };
    } else {
      this.options = {
        path: '/assets/animaciones/animation.json',
      };
    }
  }
    // Termina importacion de animaciones
}
