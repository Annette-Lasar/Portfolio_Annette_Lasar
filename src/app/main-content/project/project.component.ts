/* import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectWrapper } from '../../shared/interfaces/project-wrapper.interface';
import { StaticProject } from '../../shared/interfaces/static-project.interface';
import { Static } from '../../shared/interfaces/static-content.interface';
import { Translations } from '../../shared/interfaces/translations.interface';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ScrollDirective } from '../../shared/directives/scroll.directive';

@Component({
  selector: 'po-project',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ScrollDirective],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  @Input() staticContent: Static | null = null;
  @Input() staticContentProjects: { [key: string]: StaticProject } | null =
    null;
  @Input() jsonContent: Translations | null = null;
  

  ngOnInit(): void {
    if (this.jsonContent) {
      console.log(
        'Was ist eigentlich jsonContentPortfolioProjects: ',
        this.jsonContent
      );
    }
  }

  getProjectKeys(project: ProjectWrapper): string[] {
    return Object.keys(project);
  }
} */

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectWrapper } from '../../shared/interfaces/project-wrapper.interface';
import { StaticProject } from '../../shared/interfaces/static-project.interface';
import { Static } from '../../shared/interfaces/static-content.interface';
import { Translations } from '../../shared/interfaces/translations.interface';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'po-project',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input() staticContent: Static | null = null;
  @Input() staticContentProjects: { [key: string]: StaticProject } | null =
    null;
  @Input() jsonContent: Translations | null = null;

  ngOnInit(): void {
    if (this.jsonContent) {
      console.log(
        'Was ist jsonContentPortfolioProjects: ',
        this.jsonContent
      );
    }
  }

  getProjectKeys(project: ProjectWrapper): string[] {
    return Object.keys(project);
  }
}
