import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StaticContentService } from '../../shared/services/static-content.service';
import { Static } from '../../shared/interfaces/static-content.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuStateService } from '../../shared/services/menu-state.service';
import { MenuComponent } from '../../shared/components/menu/menu.component';


@Component({
  selector: 'po-hero',
  standalone: true,
  imports: [ButtonComponent, CommonModule, HttpClientModule, MenuComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  staticContent: Static | null = null;
  menuVisible = false;

  constructor(private staticContentService: StaticContentService, private menuStateService: MenuStateService) {}

  ngOnInit(): void {
    this.staticContentService.getStaticContent().subscribe((data: Static) => {
      this.staticContent = data;
    });

    this.menuStateService.menuVisible.subscribe(visible => {
      this.menuVisible = visible;
      if (this.menuVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }
}
