import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sanitizer = inject(DomSanitizer);
  cookieService = inject(CookieService);
  appname = signal('appname');
  bypassedname = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.appname()));
  title = 'angular-security';

  setCookie(): void {
    this.cookieService.set('session', '123456789');
    this.cookieService.set('session_secure', '987654321', 100000, '/', '', true, 'Strict');
  }

}
