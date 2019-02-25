import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './views/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo Servicios';
  constructor(
    private titulo: Title
  ) {}

  // tslint:disable-next-line:use-life-cycle-interface
  public ngOnInit() {
    this.titulo.setTitle('Home Component');
  }
}
