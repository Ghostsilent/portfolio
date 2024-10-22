import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from './../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isLegalNoticeOpen = false;

  // Injection des TranslationService, falls benötigt
  translate = inject(TranslationService);

  toggleLegalNotice(event?: Event): void {
    if (event) {
      event.preventDefault(); // Verhindert das Standardverhalten des Links
    }
    this.isLegalNoticeOpen = !this.isLegalNoticeOpen;
    if (this.isLegalNoticeOpen) {
      document.body.classList.add('menu-open'); // Verhindert das Scrollen der Seite
    } else {
      document.body.classList.remove('menu-open'); // Ermöglicht das Scrollen der Seite
    }
  }
}
