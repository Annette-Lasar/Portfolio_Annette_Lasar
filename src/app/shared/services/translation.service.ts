import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Translations } from '../interfaces/translations.interface';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translationsSubject = new BehaviorSubject<Translations | null>(null);
  translations$ = this.translationsSubject.asObservable();
  private currentLanguage: string = 'en';

  constructor(private http: HttpClient) {}

  loadTranslations(language: string): Observable<Translations> {
    console.log('Lade Übersetzungen für Sprache: ', language);
    return this.http
      .get<Translations>(`assets/i18n/page-content/${language}.json`)
      .pipe(
        map((translations) => {
          console.log('Übersetzungen geladen: ', translations);
          this.translationsSubject.next(translations);
          this.currentLanguage = language;
          return translations;
        })
      );
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let result: any = this.translations$;

    for (const k of keys) {
      if (result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
