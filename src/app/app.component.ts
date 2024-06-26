import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FaviconService } from './shared/services/favicon.service';

@Component({
  selector: 'po-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Annette Lasar';
  private matcher: MediaQueryList;
  private lightSchemeIcon: HTMLLinkElement | null = null;
  private darkSchemeIcon: HTMLLinkElement | null = null;

  constructor(private titleService: Title) {
    this.matcher = window.matchMedia('(prefers-color-scheme: dark)');
    console.log('Welcher Modus: ', this.matcher.media);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.lightSchemeIcon = document.querySelector(
      'link#light-scheme-icon'
    ) as HTMLLinkElement;

    this.darkSchemeIcon = document.querySelector(
      'link#dark-scheme-icon'
    ) as HTMLLinkElement;

    if (!this.lightSchemeIcon || !this.darkSchemeIcon) {
      throw new Error('One or both of the favicon links are not found.');
    }

/*     console.log('Light Scheme Icon:', this.lightSchemeIcon);
    console.log('Dark Scheme Icon:', this.darkSchemeIcon); */

    this.matcher.addEventListener('change', this.onUpdate);
    console.log('aktueller Modus: ', this.matcher.media);
    this.onUpdate();
    
  }

  private onUpdate = () => {
    if (this.matcher.matches) {
      console.log('Matcher 1: ', this.matcher.media);
      if (this.darkSchemeIcon) {
        this.darkSchemeIcon.remove();
        document.head.appendChild(this.lightSchemeIcon as Node);
      }
    } else {
      console.log('Matcher 2: ', this.matcher.matches);
      if (this.lightSchemeIcon) {
        document.head.appendChild(this.darkSchemeIcon as Node);
        this.lightSchemeIcon.remove();
      }
    }
  };
}
