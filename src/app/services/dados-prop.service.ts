import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosPropService {

  data: any[] = [];
  nomeAtributo:any= '';
  nomeAtributo2:any= '';
  valoresSelect:any= [];
  valorAtributo:any='';

  constructor (private http: HttpClient) { }
  postData(data: any) {
    const url = "https://api-services-hml2.digital-segurosunimed.com/motor-analise-cliente/rest/aplica-regra";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'x-api-key':'LJdvMJ6dmY5isQ8B6DxUw99Y9R0PCbbUaHpP7wzl'});
    return this.http.post(url, data, { headers });
  }

  onSubmit(filtroDigitado?: any, selectedFiltro?: any, filtroDigitado2?:any) {

    const data = {
      "regras": [
        {
          "codigoRegra": 55,
          "atributos": [
            {
              "nomeAtributo": "qtdeVidasProposta",
              "valorAtributo": 6
            },
            {
              "nomeAtributo": "qtdeFuncionarios",
              "valorAtributo": 5
            }
          ]
        },
        {
          "codigoRegra": 5,
          "atributos": [
            {
              "nomeAtributo": "dataNascimentoProposta",
              "valorAtributo": "01/01/1990"
            },
            {
              "nomeAtributo": "dataNascimentoBaseConsulta",
              "valorAtributo": "01/01/1990"
            }
          ]
        },
        {
          "codigoRegra": 8,
          "atributos": [
            {
              "nomeAtributo": "profissaoProposta",
              "valorAtributo": "1234567"
            },
            {
              "nomeAtributo": "profissaoBaseConsulta",
              "valorAtributo": "123456"
            }
          ]
        },
        {
          "codigoRegra": 10,
          "atributos": [
            {
              "nomeAtributo": "rendaDeclaradaProposta",
              "valorAtributo": 5000
            },
            {
              "nomeAtributo": "valorContribuicaoMensalProposta",
              "valorAtributo": 1600.00
            }
          ]
        },
        {
          "codigoRegra": 3,
          "atributos": [
            {
              "nomeAtributo": "situacaoCpf",
              "valorAtributo": 3
            }
          ]
        },
        {
          "codigoRegra": 1,
          "atributos": [
            {
              "nomeAtributo": "cpfConstaAnaliseEspecial",
              "valorAtributo": 1
            }
          ]
        },
        {
          "codigoRegra": 2,
          "atributos": [
            {
              "nomeAtributo": "cpfConstaListaPep",
              "valorAtributo": 1
            }
          ]
        }
      ]
    };
    switch(+selectedFiltro) {
      case 3:
        this.nomeAtributo = "situacaoCpf";
        break;
      case 1:
        this.nomeAtributo ="cpfConstaAnaliseEspecial";
        break;
      case 2:
        this.nomeAtributo = "cpfConstaListaPep";
        break;
      case 55:
          this.nomeAtributo = "qtdeVidasProposta";
          break;
      case 5:
          this.nomeAtributo = "dataNascimentoProposta";
          break;
      case 8:
          this.nomeAtributo = "profissaoProposta";
          break;
      case 10:
          this.nomeAtributo = "rendaDeclaradaProposta";
          break;
    }


   switch(this.nomeAtributo){
    case "qtdeVidasProposta":
          this.nomeAtributo2 = "qtdeFuncionarios";
          break;
          case "dataNascimentoProposta":
          this.nomeAtributo2 = "dataNascimentoBaseConsulta";
          break;

      case "profissaoProposta":
          this.nomeAtributo2 = "profissaoBaseConsulta";
          break;
       case"rendaDeclaradaProposta":
            this.nomeAtributo2 = "valorContribuicaoMensalProposta";
            break;
   }

    //substituir esse "situaçaocpf" por uma variavel que contenha o atributo selecionado no select
    if (filtroDigitado && filtroDigitado2){
      data.regras = [{"codigoRegra": +selectedFiltro, "atributos": [
        {"nomeAtributo": this.nomeAtributo, "valorAtributo": filtroDigitado},
        {"nomeAtributo":this.nomeAtributo2, "valorAtributo": filtroDigitado2}
      ]}];
    }



    console.log(filtroDigitado,filtroDigitado2)

    return this.postData(data);
  } }
