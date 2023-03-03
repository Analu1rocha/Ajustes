
import { Component, Input } from '@angular/core';
import {  faXmark, faFileLines, faLink, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor () {}

  faFileLines = faFileLines;
  faXmark = faXmark
  faLink = faLink;
  faEllipsisVertical = faEllipsisVertical ;
  dataHoraAtu:string="12 Outubro 2022 - 14:30min";
  copyUrl:any = document.location.href;
  mostrarMsg:boolean = false;


 botaoClicado() {

  this.mostrarMsg=!this.mostrarMsg;
  setTimeout(() =>{
    this.mostrarMsg=!this.mostrarMsg;
  }, 2000)


}
public openPDF(): void {
  let pdf: any = document.querySelector('.htmlData2');
  html2canvas(pdf).then((canvas) => {
    let fileWidth = 192;
    let fileHeight = (canvas.height * fileWidth+50) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');

    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0 ;

    PDF.addImage(FILEURI, 'PNG', 10, position, fileWidth, fileHeight,);

    PDF.save('Tabela.pdf');


  });
}

};

