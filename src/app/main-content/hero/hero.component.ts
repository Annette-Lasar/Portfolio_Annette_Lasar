import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { StaticContentService } from '../../shared/services/static-content.service';
import { Static } from '../../shared/interfaces/static-content.interface';
// import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'po-hero',
  standalone: true,
  imports: [ButtonComponent, CommonModule, HttpClientModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  staticContent: Static | null = null;

  constructor(private staticContentService: StaticContentService) {}

  ngOnInit(): void {
    this.staticContentService.getStaticContent().subscribe((data: Static) => {
      this.staticContent = data;
    });
  }
}
