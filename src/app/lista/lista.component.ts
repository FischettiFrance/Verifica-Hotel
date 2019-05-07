import { Component, OnInit,Input } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 @Input() preno : Prenotazione[];
 selectedP : Prenotazione;
  constructor() { }

ngOnInit() {
  }

  onClick(p : Prenotazione)
  {
    this.selectedP = p;
  }

}
