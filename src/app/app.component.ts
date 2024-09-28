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
    this.setCanonicalAndAlternateLinks('');
  }

  setCanonicalAndAlternateLinks(path: string) {
    const lang = this.router.url.split('/')[1];  // Get the language from the URL
    let canonicalUrl = `https://www.siebetest.be/${lang}/`;
    console.log('Lang is: ' + lang)
    console.log('this.router.url is: ' + this.router.url)

    if (!['nl', 'fr', 'en'].includes(lang)) {
      canonicalUrl = `https://www.siebetest.be/nl/${path}`;
    }
    console.log('canonicalUrl is: ' + canonicalUrl)


    // Set canonical link
    this.setMetaTag('canonical', canonicalUrl);

    // Set alternate links (you can optimize this based on the actual language)
    this.setMetaTag('alternate-nl', `https://www.siebetest.be/nl/${path}`);
    this.setMetaTag('alternate-fr', `https://www.siebetest.be/fr/${path}`);
    this.setMetaTag('alternate-en', `https://www.siebetest.be/en/${path}`);
    this.setMetaTag('alternate-x-default', `https://www.siebetest.be/nl/${path}`);
  }

  setMetaTag(tagId: string, url: string) {
    const link: HTMLLinkElement | null = document.querySelector(`link[id="${tagId}"]`);
    if (link) {
      link.setAttribute('href', url);
    }
  }
}
