import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MensagemAPI } from './MensagemAPI.model';

@Injectable()
export class AplicacaoService {
  API_URL: string = "http://localhost:9092";

  constructor(private http: HttpClient) { }

  BuscaAPI(): Observable<MensagemAPI> {
    return this.http.get<MensagemAPI>(`${this.API_URL}/busca`);
  }
}
