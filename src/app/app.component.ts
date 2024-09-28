import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'locale-demo';

  private meta = inject(Meta); 
  private router = inject(Router);

  constructor(){
  }

  ngOnInit() {
    this.setCanonicalAndAlternateLinks();
  }

  setCanonicalAndAlternateLinks() {
    const lang = this.router.url.split('/')[1];  // Get the language from the URL
    let canonicalUrl = `https://www.siebetest.be/${lang}/`;

    if (!['nl', 'fr', 'en'].includes(lang)) {
      canonicalUrl = 'https://www.siebetest.be/nl/';
    }

    // Set canonical link
    this.meta.updateTag({ rel: 'canonical', href: canonicalUrl });

    // Set alternate links
    this.meta.updateTag({ rel: 'alternate', hreflang: 'nl', href: 'https://www.siebetest.be/nl/' });
    this.meta.updateTag({ rel: 'alternate', hreflang: 'fr', href: 'https://www.siebetest.be/fr/' });
    this.meta.updateTag({ rel: 'alternate', hreflang: 'en', href: 'https://www.siebetest.be/en/' });
    this.meta.updateTag({ rel: 'alternate', hreflang: 'x-default', href: 'https://www.siebetest.be/nl/' });
  }
}
