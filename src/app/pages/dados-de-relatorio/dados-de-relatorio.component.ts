import { DadosPropService } from 'src/app/services/dados-prop.service';
import { Component, OnInit } from '@angular/core';
import { faLink, faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dados-de-relatorio',
  templateUrl: './dados-de-relatorio.component.html',
  styleUrls: ['./dados-de-relatorio.component.css']
})
export class DadosDeRelatorioComponent implements OnInit {
  faLink = faLink;
  faCircleChevronUp = faCircleChevronUp;
  faCircleChevronDown=faCircleChevronDown;

  canShow3 = true;

 changeCanShow3(){
  this.canShow3=!this.canShow3;
 }
  user!:any[];
  constructor(private service:DadosPropService) {}

  ngOnInit(){
    this.service.onSubmit();

  }
  dataAval:string= "20/04/12";
  nProposta: string="GF22/0001"
  produto: string="Previdência Individual"
  cpf: string ="312.286.988-00"
  nome: string="Marcos Oliveira Morais"
  vinculoCnpj: string="02"
}
