import { Component, inject } from '@angular/core';
import { DarkLightService } from '../../../core/services/dark-light.service';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.css'
})
export class ThemeTogglerComponent {
  #darkLightService: DarkLightService = inject(DarkLightService);

  get isDark() {
    return this.#darkLightService.isDark();
  }

  toggleTheme() {
    this.#darkLightService.toggle();
  }

  deletePreferences() {
    this.#darkLightService.deletePreferences();
  }
}
