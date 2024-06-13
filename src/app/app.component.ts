import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitializeService } from './core/services/initialize.service';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { ThemeTogglerComponent } from './shared/components/theme-toggler/theme-toggler.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ThemeTogglerComponent,
    HeroSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  #initializeService: InitializeService = inject(InitializeService);

  ngOnInit(): void {
    this.#initializeService.start();
  }
}
