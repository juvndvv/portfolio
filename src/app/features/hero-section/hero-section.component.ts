import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

}
