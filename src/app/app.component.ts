import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Frase } from './modelo.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AngularRest';
  public frase: Frase = { icon_url: '', id: '', url: '', value: '' };

  constructor(private apiService: ApiService) {
    console.info('Here cons');
  }

  ngOnInit() {
    this.apiService.obtenerFrase().subscribe((frase) => (this.frase = frase));

    console.info('Here');
  }
}
