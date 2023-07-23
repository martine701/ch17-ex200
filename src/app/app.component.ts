import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'pepperoni',
  template: `
  <div>
    <h2>Pepperoni</h2>
    <img alt="pepperoni pizza" src="https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg">
  </div>
  `,
  styles: []
})
export class PepperoniComponent { }

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Delivery Menu</h1>
    </div>
    <a [routerLink]="['pepperoni']" routerLinkActive="router-link-active">Pepperoni Pizza</a>&nbsp;
    <a [routerLink]="['other']" routerLinkActive="router-link-active">Other Menu Items</a>
    <router-outlet></router-outlet>
  `,
  styles: [
    'img{width:200px;border:1px solid #000000;}',
    'a{ background-color: #0066CC; color: #ffffff; border: 1px solid #000000; padding: 10px; margin: 10px;}',
    '.router - link - active { background-color: #C14242;  }',
    '.router - link - active { background-color: #C14242; }',
    'div{  border: 1px dotted #000000;  margin: 10px;  padding: 10px;}'
  ]
})

export class AppComponent {
  title = 'app';
}
