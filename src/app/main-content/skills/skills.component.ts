import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SkillIcon {
  path: string;
  caption: string;
}

@Component({
  selector: 'po-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillIcons: SkillIcon[] = [
    {
      path: 'assets/icons/skill_icons/angular.svg',
      caption: 'Angular',
    },
    {
      path: 'assets/icons/skill_icons/typescript.svg',
      caption: 'TypeScript',
    },
    {
      path: 'assets/icons/skill_icons/javascript.svg',
      caption: 'JavaScript',
    },
    {
      path: 'assets/icons/skill_icons/html.svg',
      caption: 'HTML',
    },
    {
      path: 'assets/icons/skill_icons/css.svg',
      caption: 'CSS',
    },
    {
      path: 'assets/icons/skill_icons/firebase.svg',
      caption: 'Firebase',
    },
    {
      path: 'assets/icons/skill_icons/git.svg',
      caption: 'Git',
    },
    {
      path: 'assets/icons/skill_icons/api.svg',
      caption: 'API',
    },
    {
      path: 'assets/icons/skill_icons/scrum.svg',
      caption: 'SCRUM',
    },
    {
      path: 'assets/icons/skill_icons/material_design.svg',
      caption: 'Material Design',
    },
    {
      path: 'assets/icons/skill_icons/wordpress.svg',
      caption: 'Wordpress',
    },
  ];
}
