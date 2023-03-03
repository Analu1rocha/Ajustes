import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { faLink, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';
import { DadosPropService } from 'src/app/services/dados-prop.service';

@Component({
  selector: 'app-devolutiva',
  templateUrl: './devolutiva.component.html',
  styleUrls: ['./devolutiva.component.css']
})
export class DevolutivaComponent implements OnInit {

  faLink = faLink;
  farCircleDot= faCircleDot;
  faCircleChevronDown = faCircleChevronDown;

  dataAval:string="11/09/2022"
  nProposta:string="GF22/0001"
  produto:string="Previdência Individual"
  cpf:string ="312.286.988-00"
  nome:string="Marcos Oliveira Morais"
  vinculoCnpj:string="02"


  data:any = [];
  dataSelect:any = [];
  dataSelect2:any = [];
  filtroDigitado= '';
  filtroDigitado2= '';
  selectedFiltro = '';
  selectedFiltro2 = '';
  valoresSelect:any= [];

  constructor (private dadosService: DadosPropService) {}

  ngOnInit(): void {
    this.getAllRegras();

  }

  filtrar() {
    //capturar o valor selecionado no select e colocar numa variavel
    //capturar valor digitado no input (filtroDigitado)
    //passar as duas variaveis para essa função
    //fazer subscribe da api na linha abaixo e sobrescrever a variavel this.data
    this.dadosService.onSubmit(this.filtroDigitado, this.selectedFiltro, this.filtroDigitado2).subscribe((response: any) => {
      this.data = response;
    })
  }

  getAllRegras(evt?: any) {
    this.dadosService.onSubmit().subscribe((response: any) => {
      this.data = response;

      if (evt && evt !== 'Todos') {
        this.data.regras = this.data.regras.filter((regra: any) => regra.codigoRetorno == evt);

        switch(+evt) {
          case 10:
            this.valoresSelect.push({
              "nomeAtributo": "rendaDeclaradaProposta",
              "valorAtributo": 5000
            });
            this.valoresSelect.push({
              "nomeAtributo": "valorContribuicaoMensalProposta",
              "valorAtributo": 1600.00
            });
            break;
            case 5:
            this.valoresSelect.push({
              "nomeAtributo": "dataNascimentoProposta",
              "valorAtributo": "01/01/1990"
            });
            this.valoresSelect.push({
              "nomeAtributo": "dataNascimentoBaseConsulta",
              "valorAtributo": "01/01/1990"
            });
            break;
            case 55:
            this.valoresSelect.push({
              "nomeAtributo": "qtdeVidasProposta",
              "valorAtributo": 6
            });
            this.valoresSelect.push({
              "nomeAtributo": "qtdeFuncionarios",
              "valorAtributo": 5
            });
            break;
            case 8:
            this.valoresSelect.push({
              "nomeAtributo": "profissaoProposta",
              "valorAtributo": "1234567"
            });
            this.valoresSelect.push({
              "nomeAtributo": "profissaoBaseConsulta",
              "valorAtributo": "123456"
            });
            break;

        }
      }


   else {
        this.dataSelect = response.regras;
        this.dataSelect2 = response.regras;
      }
    })
  }

  filter(evt:any){
    this.getAllRegras(evt.target.value);
  }





}
