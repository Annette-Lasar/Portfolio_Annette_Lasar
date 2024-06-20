import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../../services/static-content.service';
import { Static } from '../../interfaces/static-content.interface';
import { HttpClientModule } from '@angular/common/http';
import { MenuStateService } from '../../services/menu-state.service';
import { TranslationService } from '../../services/translation.service';
import { LanguageOption } from '../../interfaces/language-option.interface';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'po-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  staticContent: Static | null = null;
  selectedLanguage = 'en';
  selectedFlag = 'assets/icons/flags/english_flag.svg';
  dropdownOpen = false;
  isActive = false;
  menuActive = false;

  languageOptions: LanguageOption[] = [];

  constructor(
    private staticContentService: StaticContentService,
    private menuStateService: MenuStateService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.staticContentService.getStaticContent().subscribe((data: Static) => {
      this.staticContent = data;
      if (this.staticContent) {
        this.languageOptions = [
          {
            value: 'de',
            label: 'Deutsch',
            flag: this.staticContent.german_flag,
          },
          {
            value: 'en',
            label: 'English',
            flag: this.staticContent.english_flag,
          },
          {
            value: 'fr',
            label: 'Français',
            flag: this.staticContent.french_flag,
          },
        ];
      }
    });

    this.menuStateService.burgerButtonActive$.subscribe(active => {
      this.isActive = active;
    });

    this.menuStateService.menuVisible$.subscribe((visible) => {
      this.menuActive = visible;
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(option: LanguageOption, event: Event) {
    event.stopPropagation();
    this.selectedLanguage = option.label;
    this.selectedFlag = option.flag;
    this.dropdownOpen = false;
    this.translationService.loadTranslations(option.value).subscribe(() => {
    });
  }

  toggleBurgerButton() {
    this.menuStateService.toggleMenuVisibility();
  }
}
