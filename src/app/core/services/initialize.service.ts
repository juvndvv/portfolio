import { Injectable, inject } from "@angular/core";
import { DarkLightService } from "./dark-light.service";


@Injectable({
  providedIn: 'root'
})
export class InitializeService {
  start() {
    this._setTheme();
  }

  /**
   * Dark/Light theme
   */

  #darkLightService: DarkLightService = inject(DarkLightService);

  private _setTheme() {
    this.#darkLightService.setTheme();
  }
}
