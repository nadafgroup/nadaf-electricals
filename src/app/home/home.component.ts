import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isMenuOpen: boolean = false;
  showScrollTop: boolean = false;
  isScrolled: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth >= 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    this.showScrollTop = scrollY > 300;
    this.isScrolled = scrollY > 50;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
