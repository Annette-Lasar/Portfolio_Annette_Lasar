import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MenuStateService } from '../../services/menu-state.service';
import { TranslationService } from '../../services/translation.service';
import { Translations } from '../../interfaces/translations.interface';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'po-menu',
  standalone: true,
  imports: [CommonModule, FooterComponent, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  jsonContent: Translations | null = null;

  /*   menuAboutText: string = '';
  menuSkillsText: string = '';
  menuPortfolioText: string = ''; */

  constructor(
    private menuStateService: MenuStateService,
    private translationService: TranslationService
  ) {}
  ngOnInit(): void {
    this.translationService
      .loadTranslations(this.translationService.getCurrentLanguage())
      .subscribe((data: Translations) => {
        this.jsonContent = data;
      });
    this.translationService
      .loadTranslations(this.translationService.getCurrentLanguage())
      .subscribe();
  }

  closeMenu() {
    this.menuStateService.setMenuVisibility(false);
  }
}
