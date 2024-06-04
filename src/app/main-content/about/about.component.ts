import { Component, OnInit } from '@angular/core';
import { StaticContentService } from '../../shared/services/static-content.service';
import { Static } from '../../shared/interfaces/static-content.interface';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'po-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  staticContent: Static | null = null;

  constructor(private staticContentService: StaticContentService) {}

  ngOnInit(): void {
    this.staticContentService.getStaticContent().subscribe((data: Static) => {
      this.staticContent = data;
      console.log(this.staticContent);
    });
  }
}
