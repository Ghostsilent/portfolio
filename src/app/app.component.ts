import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./main-content/header/header.component";
import { HeroComponent } from "./main-content/hero/hero.component";
import { AboutmeComponent } from "./main-content/aboutme/aboutme.component";
import { SkillsComponent } from "./main-content/skills/skills.component";
import { PortfolioComponent } from "./main-content/portfolio/portfolio.component";
import { ContactComponent } from "./main-content/contact/contact.component";
import { FooterComponent } from "./main-content/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroComponent, AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
