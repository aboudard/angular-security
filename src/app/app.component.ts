import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sanitizer = inject(DomSanitizer);
  appname = signal('appname');
  bypassedname = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.appname()));
  title = 'angular-security';
}
