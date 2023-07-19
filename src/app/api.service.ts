import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Frase } from './modelo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlBase: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) {}

  public obtenerFrase(): Observable<Frase> {
    return this.httpClient.get<Frase>(this.urlBase);
  }
}
