import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../../shared/services/static-content.service';
import { Static } from '../../shared/interfaces/static-content.interface';
import { TranslationService } from '../../shared/services/translation.service';
import { Translations } from '../../shared/interfaces/translations.interface';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'po-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  staticContent: Static | null = null;
  jsonContent: Translations | null = null;
  // skillsText: string = '';

  constructor(
    private staticContentService: StaticContentService,
    private translationService: TranslationService) {}

    ngOnInit(): void {
      this.staticContentService.getStaticContent().subscribe((data: Static) => {
        this.staticContent = data;
      });

      this.translationService.translations$.subscribe(
        (data: Translations | null) => {
          console.log('Übersetzungen geladen: ', data);
          this.jsonContent = data;
        }
      );
  
      this.translationService
        .loadTranslations(this.translationService.getCurrentLanguage())
        .subscribe();
    }
}
