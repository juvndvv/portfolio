import { isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, inject, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DarkLightService {
  private readonly platformId = inject(PLATFORM_ID);

  private _isDark = signal(false);
  public readonly isDark = this._isDark.asReadonly();

  setTheme() {
    if (isPlatformBrowser(this.platformId)) { // Prevents SSR error
      const hasPreference = localStorage.getItem('isDark') !== null;

      if (hasPreference) this._setSelectedPreferences();
      else this._setBrowserPreferences();

    }
  }

  toggle() {
    this._isDark.set(!this.isDark());
    localStorage.setItem('isDark', JSON.stringify(this.isDark()));
    this._setSelectedPreferences();
  }

  deletePreferences() {
    localStorage.removeItem('isDark');
    this._setBrowserPreferences();
  }

  private _setSelectedPreferences() {
    this._isDark.set(JSON.parse(localStorage.getItem('isDark') || 'false'));

    if (this._isDark()) {
      document.body.dataset['theme'] = 'dark';
    } else {
      document.body.dataset['theme'] = 'light';
    }
  }

  private _setBrowserPreferences() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this._isDark.set(prefersDark);
  }
}
