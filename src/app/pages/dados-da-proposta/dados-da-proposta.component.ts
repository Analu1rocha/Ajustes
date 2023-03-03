import { Component } from '@angular/core';
import { faLink, faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dados-da-proposta',
  templateUrl: './dados-da-proposta.component.html',
  styleUrls: ['./dados-da-proposta.component.css']
})
export class DadosDaPropostaComponent {
 faLink = faLink;
  faCircleChevronUp = faCircleChevronUp;
  faCircleChevronDown = faCircleChevronDown;

  canShow = true;
  canShow2 = true;

  dataAval: string="11/09/2022"
  nProposta: string="GF22/0001"
  produto: string="Previdência Individual"
  cpf: string ="312.286.988-00"
  nome: string="Marcos Oliveira Morais"
  vinculoCnpj: string="02"


  changeCanShow(){
    this.canShow=!this.canShow;
  }

  changeCanShow2(){
    this.canShow2=!this.canShow2;
  }
}
