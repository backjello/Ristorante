import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PopUpNumeroTavoloComponent } from '../pop-up-numero-tavolo/pop-up-numero-tavolo.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() numero!:number
  numeroDelTavolo!:number

  constructor(private localStorage:LocalStorageService, private dialog:MatDialog){
    this.dialog.open(PopUpNumeroTavoloComponent,{
      height:'300px',
      width:'600px'
    }).afterClosed().subscribe((res)=>{
      var numeroTavolo = this.localStorage.prendiNumeroTavolo()
      console.log('we' + numeroTavolo)
      var numeroSerio = JSON.parse(numeroTavolo!)
      console.log(numeroSerio)
      var numeroVero = numeroSerio.numeroTavolo
      console.log(numeroVero)
      this.numeroDelTavolo = numeroVero
    })
  }

  cerca(){
    
  }

}
