import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';
import { LoaderService } from './shared/services/api/loader.service';
import { ThemingService } from './shared/services/theming/theming.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit  {
  title = 'front-end';
  loading = true;
  isLoad = false;
  cusLoad = false;

  constructor(
    private loaderService: LoaderService,
    private cdRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private theme: ThemingService
  ) { }

  ngOnInit(): void {
    
    // load customized theme
    // need to update angular.json to load the file externally
    this.theme.change('light');
    
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  ngAfterContentInit(): void {
    this.loading = false;
    this.loaderService.isLoading.subscribe((v) => {
      this.isLoad = v;
      setTimeout(() => {
        this.loading = this.isLoad || this.cusLoad;
      }, 0);
    });
    this.loaderService.customLoading.subscribe((v) => {
      this.cusLoad = v;
      setTimeout(() => {
        this.loading = this.cusLoad || this.isLoad;
      }, 0);
      
    });
  }

}
