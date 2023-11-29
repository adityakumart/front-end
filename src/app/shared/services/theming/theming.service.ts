import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  currentTheme = 'light';
  lightTheme = [
    { name: 'Red', value: '#ef5b5b' },
    { name: 'LightRed', value: '#f95f6f' },
    { name: 'Blue', value: '#5838ff' },
    { name: 'Skyblue', value: '#529fe1' },
    { name: 'PaleBlue', value: '#f1f8ff' },
    { name: 'DarkBlue', value: '#3d20dd' },
    { name: 'Purple', value: '#7d62ef' },
    { name: 'LightGreen', value: '#2dce98' },
    { name: 'PaleGreen', value: '#30dbb5' },
    { name: 'Green', value: '#26be77' },
    { name: 'LightOrange', value: '#fda341' },
    { name: 'Orange', value: '#f48665' },
    { name: 'Brown', value: '#7f7f7f' },
    { name: 'DarkGrey', value: '#3e566d' },
    { name: 'Grey', value: '#7e92a4' },
    { name: 'PaleGrey', value: '#f6f8ff' },
    { name: 'LightGrey', value: '#eff3fe' },
    { name: 'White', value: '#ffffff' },
    { name: 'Black', value: '#354053' }
  ]
  darkTheme = [
    { name: 'Red', value: '#10a4a4' },
    { name: 'LightRed', value: '#06a090' },
    { name: 'Blue', value: '#a7c700' },
    { name: 'Skyblue', value: '#ad601e' },
    { name: 'PaleBlue', value: '#0e0700' },
    { name: 'DarkBlue', value: '#c2df22' },
    { name: 'Purple', value: '#829d10' },
    { name: 'LightGreen', value: '#2dce98' },
    { name: 'PaleGreen', value: '#d23167' },
    { name: 'Green', value: '#d94188' },
    { name: 'LightOrange', value: '#025cbe' },
    { name: 'Orange', value: '#0b799a' },
    { name: 'Brown', value: '#808080' },
    { name: 'DarkGrey', value: '#c1a992' },
    { name: 'Grey', value: '#816d5b' },
    { name: 'PaleGrey', value: '#090700' },
    { name: 'LightGrey', value: '#100c01' },
    { name: 'White', value: '#000000' },
    { name: 'Black', value: '#cabfac' }
  ]
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  change(theme: string): void {
    let styles = [];
    // if (theme) {
    styles = (theme == 'light') ? this.lightTheme : this.darkTheme;
    this.currentTheme = (theme == 'light') ? 'light' : 'dark';
    // } else {
    //   styles = (this.currentTheme == 'light') ? this.darkTheme : this.lightTheme;
    //   this.currentTheme = (this.currentTheme == 'light') ? 'dark' : 'light';
    // }
    styles.forEach(data => {
      document.documentElement.style.setProperty(`--web${data.name}`, data.value);
    });
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(this.currentTheme);
    this.loadStyle(this.currentTheme);
  }
  loadStyle(styleName: string): void {
    const head = this.document.getElementsByTagName('head')[0];

    const themeLink = this.document.getElementById(
      'accuickStyleSheet'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${styleName}.css`;
    } else {
      const style = this.document.createElement('link');
      style.id = 'accuickStyleSheet';
      style.rel = 'stylesheet';
      // style.className = 'accuickStyleSheet';
      style.href = `${styleName}.css`;

      head.appendChild(style);
    }
  }

}
