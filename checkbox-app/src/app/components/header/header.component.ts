import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) menuTitle!: string;
  @Input({ required: true }) count!: number;
  @Input({ required: true }) sum!: number;
}