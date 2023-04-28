import { DialogModule } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { PopUpNumeroTavoloComponent } from './components/pop-up-numero-tavolo/pop-up-numero-tavolo.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dialog:MatDialog){

  }

  ngOnInit(): void {
    this.dialog.open(PopUpNumeroTavoloComponent,{
      height:'400px',
      width:'800px'
    })
  }

  title = 'Ristorante';
}
