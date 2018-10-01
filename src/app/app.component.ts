import { Component } from '@angular/core';
import { AplicacaoService } from './aplicacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  respostaAPI = '';

  constructor(private aplicacaoService: AplicacaoService) { }

  buscarAPI() {
    this.aplicacaoService.BuscaAPI().subscribe(res => {
      this.respostaAPI = res.Mensagem;
    });
  }
}

