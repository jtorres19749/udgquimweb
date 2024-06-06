import { Component, OnInit, inject } from '@angular/core';
import { AuthserviceService } from './shared';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isAdmin: boolean = false;
  auth: AuthserviceService = inject(AuthserviceService)
  public appPages = [{ title: 'Salir', url: '/folder/exit', icon: 'exit' , visible: true}];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit(): void {
    this.isAdmin = this.auth.getIsAdmin();
    this.appPages =  [
      { title: 'Estudiantes', url: '/students', icon: 'people', visible: true },
      { title: 'Reportes', url: '/report', icon: 'bar-chart' , visible: true},
      { title: 'Importar de SIIAU', url: '/importsiauu', icon: 'cloud-download' , visible: this.isAdmin},
      { title: 'Usuarios', url: '/users', icon: 'people' , visible: this.isAdmin},
      { title: 'Configuración', url: '/settings', icon: 'settings' , visible: this.isAdmin},
      { title: 'Salir', url: '/login', icon: 'exit' , visible: true}
    ];
  }

}
