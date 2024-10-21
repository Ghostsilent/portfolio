import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  translate = inject(TranslationService);

  scrollToContact() {
    const yOffset = -150; // Höhe des fixierten Headers (anpassen)
    const element = document.getElementById('contact');
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.error("Element mit ID 'contact' nicht gefunden.");
    }
  }
}
