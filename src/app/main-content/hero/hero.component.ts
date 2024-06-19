import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StaticContentService } from '../../shared/services/static-content.service';
import { Static } from '../../shared/interfaces/static-content.interface';
import { TranslationService } from '../../shared/services/translation.service';
import { Translations } from '../../shared/interfaces/translations.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuStateService } from '../../shared/services/menu-state.service';
import { MenuComponent } from '../../shared/components/menu/menu.component';

@Component({
  selector: 'po-hero',
  standalone: true,
  imports: [ButtonComponent, CommonModule, HttpClientModule, MenuComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  staticContent: Static | null = null;
  jsonContent: Translations | null = null;
  menuActive = false;
  /* professionText: string = '';
  buttonText: string = ''; */

  constructor(
    private staticContentService: StaticContentService,
    private menuStateService: MenuStateService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.staticContentService.getStaticContent().subscribe((data: Static) => {
      this.staticContent = data;
    });

    this.menuStateService.menuVisible$.subscribe((visible) => {
      this.menuActive = visible;
    });

    this.translationService.translations$.subscribe(
      (data: Translations | null) => {
        this.jsonContent = data;
      }
    );

    this.translationService
      .loadTranslations(this.translationService.getCurrentLanguage())
      .subscribe();
  }
}
