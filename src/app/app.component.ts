/* import { Component, OnInit } from '@angular/core';
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
  title = 'portfolio_annette';

  constructor(private faviconService: FaviconService) {}

  ngOnInit(): void {}
} */


import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FaviconService } from './shared/services/favicon.service';

@Component({
  selector: 'po-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private faviconService: FaviconService) {}

  ngOnInit(): void {
    // Der FaviconService wird initialisiert und das Favicon wird entsprechend gesetzt
    this.faviconService.updateFavicon();
  }
}

