import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { MenuStateService } from '../../services/menu-state.service';
import { TranslationService } from '../../services/translation.service';
import { Translations } from '../../interfaces/translations.interface';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'po-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  @Input() jsonContent: Translations | null = null;
  @Input() selectedLanguage: string = '';

  constructor(
    private menuStateService: MenuStateService,
    private translationService: TranslationService
  ) {}
  ngOnInit(): void {
    console.log('Hallo');
  }

  /*   isCurrentLanguage(lang: string): boolean {
    return this.translationService.getCurrentLanguage() === lang;
  } */

  closeMenu() {
    this.menuStateService.setMenuVisibility(false);
  }
}
