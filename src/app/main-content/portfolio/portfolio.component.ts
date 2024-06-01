import { Component } from '@angular/core';

interface Portfolio {
  title: string;
  skills: string[];
  description: string;
  path: string;
}

@Component({
  selector: 'po-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
myPortfolio: Portfolio[] = [{
  title: 'Join',
  skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
  description: '',
  path: '',
}
  
];
}
