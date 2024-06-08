import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../../shared/services/static-content.service';
import { Static } from '../../shared/interfaces/static-content.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Portfolio {
  title: string;
  skills: string[];
  description: string;
  path: string;
}

@Component({
  selector: 'po-portfolio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  staticContent: Static | null = null;

  constructor(private staticContentService: StaticContentService) {}


  /* später löschen */
  myPortfolio: Portfolio[] = [
    {
      title: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: '',
      path: '',
    },
  ];

  ngOnInit(): void {
    this.staticContentService.getStaticContent().subscribe((data: Static) => {
      this.staticContent = data;
    });
  }
}
