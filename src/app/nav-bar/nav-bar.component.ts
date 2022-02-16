import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  siteLanguage = 'English';
  siteLocale = 'en';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
  ];

  constructor() {
    this.languageList = [
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'Français' },
    ];
  }

  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1];

    const selectedLanguage = this.languageList
      .find((language) => language.code === this.siteLocale)
      ?.label.toString();

    if (selectedLanguage) {
      this.siteLanguage = selectedLanguage;
    }
  }
}
