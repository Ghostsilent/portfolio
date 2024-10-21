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
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  translate = inject(TranslationService);

   
   formData = {
    name: '',
    email: '',
    message: '',
    policy: false
  };

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
}
