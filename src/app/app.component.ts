import { Component, OnInit } from '@angular/core';
import { INavigationOpt } from './modelo/navigation.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-course';
  links: INavigationOpt[] = [
    {
      path: '/store',
      label: 'Tienda en linea'
    },
    {
      path: '/products',
      label: 'CRUD Productos'
    },
    {
      path: '/tasks/list',
      label: 'TODO Tareas'
    }
  ];
  activeLink = '/store';

  constructor(
    private readonly router: Router
  ){}

  ngOnInit() {}

  goToRoute(link: INavigationOpt) {
    this.router.navigate([link.path]).then(() => {
      this.activeLink = this.router.url;
    });
  }
}
