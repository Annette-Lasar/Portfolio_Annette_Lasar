/* import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FaviconService {
  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.updateFavicon();
  }

  public updateFavicon() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.setFavicon(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', (e) => {
      this.setFavicon(e.matches);
    });
  }



  private setFavicon(isDarkmode: boolean) {
    const favicon = this.document.getElementById('favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href = isDarkmode
        ? 'assets/icons/logo_lasar_dark.svg'
        : 'assets/icons/logo_lasar_light.svg';
    }
  }
} */

/* import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
  import { DOCUMENT } from '@angular/common';
  
  @Injectable({
    providedIn: 'root',
  })
  export class FaviconService {
    private renderer: Renderer2;
  
    constructor(
      rendererFactory: RendererFactory2,
      @Inject(DOCUMENT) private document: Document
    ) {
      this.renderer = rendererFactory.createRenderer(null, null);
      this.updateFavicon();
    }
  
    public updateFavicon() {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      console.log('Initial dark mode match:', darkModeMediaQuery.matches);
      this.setFavicon(darkModeMediaQuery.matches);
  
      darkModeMediaQuery.addEventListener('change', (e) => {
        console.log('Dark mode changed:', e.matches);
        this.setFavicon(e.matches);
      });
    }
  
    private setFavicon(isDarkmode: boolean) {
      console.log('Setting favicon to:', isDarkmode ? 'light' : 'dark');
      const faviconUrl = isDarkmode ? 'assets/icons/logo_lasar_light.svg' : 'assets/icons/logo_lasar_dark.svg';
      this.updateFaviconLink(faviconUrl);
    }
  
    private updateFaviconLink(faviconUrl: string) {
      console.log('Updating favicon link to:', faviconUrl);
  
      // Entferne bestehendes Favicon
      const existingFavicon = this.document.querySelector("link[rel*='icon']");
      if (existingFavicon) {
        this.renderer.removeChild(this.document.head, existingFavicon);
      }
  
      // Erstelle neues Favicon-Element
      const newFavicon = this.renderer.createElement('link');
      newFavicon.type = 'image/svg+xml';
      newFavicon.rel = 'icon';
      newFavicon.href = faviconUrl;
      
      // Füge das neue Favicon-Element hinzu
      this.renderer.appendChild(this.document.head, newFavicon);
    }
  } */

import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FaviconService {
  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.updateFavicon();
  }

  public updateFavicon() {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    console.log('Initial dark mode match:', darkModeMediaQuery.matches);
    this.setFavicon(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', (e) => {
      console.log('Dark mode changed:', e.matches);
      this.setFavicon(e.matches);
    });
  }

  private setFavicon(isDarkmode: boolean) {
    console.log('Setting favicon to:', isDarkmode ? 'light' : 'dark');
    const faviconUrl = isDarkmode
      ? 'assets/icons/logo_lasar_light.svg'
      : 'assets/icons/logo_lasar_dark.svg';
    this.updateFaviconLink(faviconUrl);
  }

  private updateFaviconLink(faviconUrl: string) {
    console.log('Updating favicon link to:', faviconUrl);

    const existingFavicon = this.document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
      this.renderer.removeChild(this.document.head, existingFavicon);
    }

    // Erstelle neues Favicon-Element
    const newFavicon = this.renderer.createElement('link');
    newFavicon.type = 'image/svg+xml';
    newFavicon.rel = 'icon';
    newFavicon.href = faviconUrl;

    // Füge das neue Favicon-Element hinzu
    this.renderer.appendChild(this.document.head, newFavicon);
  }
}
