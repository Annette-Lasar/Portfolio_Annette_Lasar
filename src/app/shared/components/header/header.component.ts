import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../../services/static-content.service';
import { Static } from '../../interfaces/static-content.interface';
import { HttpClientModule } from '@angular/common/http';
import { MenuStateService } from '../../services/menu-state.service';

@Component({
  selector: 'po-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  staticContent: Static | null = null;
  selectedLanguage = 'English';
  selectedFlag = 'assets/icons/flags/english_flag.svg';
  dropdownOpen = false;
  isActive = false;

  languageOptions: {
    value: string;
    label: string;
    flag: string;
  }[] = [];

  constructor(
    private staticContentService: StaticContentService,
    private menuStateService: MenuStateService
  ) {}

  ngOnInit(): void {
    this.staticContentService.getStaticContent().subscribe((data: Static) => {
      this.staticContent = data;
      if (this.staticContent) {
        this.languageOptions = [
          {
            value: 'german',
            label: 'Deutsch',
            flag: this.staticContent.german_flag,
          },
          {
            value: 'english',
            label: 'English',
            flag: this.staticContent.english_flag,
          },
          {
            value: 'french',
            label: 'Français',
            flag: this.staticContent.french_flag,
          },
        ];
      }
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(option: any, event: Event) {
    event.stopPropagation();
    this.selectedLanguage = option.label;
    this.selectedFlag = option.flag;
    this.dropdownOpen = false;
  }

  toggleBurgerButton() {
    this.isActive = !this.isActive;
    this.menuStateService.toggleMenuVisibility();
  }
}
