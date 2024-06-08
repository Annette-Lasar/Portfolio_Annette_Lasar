import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  private menuVisibleSubject = new BehaviorSubject<boolean>(false);
  menuVisible = this.menuVisibleSubject.asObservable();

  toggleMenuVisibility() {
    this.menuVisibleSubject.next(!this.menuVisibleSubject.value);
  }
}
