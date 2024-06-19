import { Component, Input } from '@angular/core';

@Component({
  selector: 'po-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
@Input()project?: string;
}
