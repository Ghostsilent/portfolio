import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  translate = inject(TranslationService);

  formData = {
    name: '',
    email: '',
    message: '',
    policy: false
  };

  isPrivacyPolicyOpen = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Formulardaten verarbeiten
      console.log('Formulardaten:', this.formData);

      // Formular zurücksetzen
      form.resetForm();
    } else {
      // Erstes ungültiges Feld finden und als 'touched' markieren
      Object.keys(form.controls).some(key => {
        const control = form.controls[key];
        if (control.invalid) {
          control.markAsTouched();
          return true;
        }
        return false;
      });
    }
  }

  togglePrivacyPolicy(event?: Event): void {
    if (event) {
      event.preventDefault(); // Verhindert das Standardverhalten des Links
    }
    this.isPrivacyPolicyOpen = !this.isPrivacyPolicyOpen;
    if (this.isPrivacyPolicyOpen) {
      document.body.classList.add('menu-open'); // Verhindert das Scrollen der Seite
    } else {
      document.body.classList.remove('menu-open'); // Ermöglicht das Scrollen der Seite
    }
  }
}
