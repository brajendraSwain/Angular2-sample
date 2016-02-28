import { Component } from 'angular2/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { HeroDetailComponent } from './hero-detail.component';
import { httpTestComponent } from './httpTestService.component';


/**
 * [Component description]
 *
 */
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <http-test></http-test>
  <router-outlet></router-outlet>
`,
 styleUrls: ['app/app.component.css'],
 directives: [ROUTER_DIRECTIVES, httpTestComponent],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    HeroService
  ]
})

/**
 * [RouteConfig description]
 * @param {true                 }}  {    path [description]
 * @param {HeroDetailComponent  }}  {    path [description]
 * @param {HeroesComponent,     }]} {    path [description]
 */
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent,
  }
])

/**
 * 
 */
export class AppComponent {
  title = 'Tour of Heroes';
}