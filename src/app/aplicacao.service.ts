import { API_URL } from './../API_URL';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MensagemAPI } from './MensagemAPI.model';

@Injectable()
export class AplicacaoService {

  constructor(private http: HttpClient) { }

  BuscaAPI() : Observable<MensagemAPI> {
    return this.http.get<MensagemAPI>(`${API_URL}/busca`);
  }
}
