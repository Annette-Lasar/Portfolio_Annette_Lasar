import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'po-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLanguage = 'Deutsch';
  selectedFlag = 'assets/icons/flags/german_flag.svg';
  dropdownOpen = false;

  languageOptions = [
    {
      value: 'german',
      label: 'Deutsch',
      flag: 'assets/icons/flags/german_flag.svg',
    },
    {
      value: 'english',
      label: 'English',
      flag: 'assets/icons/flags/english_flag.svg',
    },
    {
      value: 'french',
      label: 'Français',
      flag: 'assets/icons/flags/french_flag.svg',
    },
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(option: any, event: Event) {
    event.stopPropagation();
    this.selectedLanguage = option.label;
    this.selectedFlag = option.flag;
    this.dropdownOpen = false;
  }
}
