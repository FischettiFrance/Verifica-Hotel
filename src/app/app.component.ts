import { Component } from '@angular/core';
import { RoomList } from './roomLsit.model';
import { Room } from './room.model';
import { Booking } from './booking.model';
import { Observable } from 'rxjs';
import { Prenotazione } from './prenotazione.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    //countryForm: FormGroup;
    title = "Benvenuti all'hotel degli alberi";
    rooms = RoomList;
    selectedRoom: Room = RoomList[0];
    bookingList: Booking[];
    data: Object;
    obs: Observable<Object>;
    obsPreno: Observable<Prenotazione[]>;
    prenoData: Prenotazione[];

    constructor(public http: HttpClient) { this.makeTypedRequest(); }
    makeTypedRequest(): void {
        //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
        this.obsPreno = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/malizia-g/hotel/booking');
        this.obsPreno.subscribe(data => { this.prenoData = data; });
    }

    /*ngOnInit() {
        // this.bookingList = new Array<Booking>();
    }*/

    //Controllo se l'id della stanza selezionata è nell'elenco.
    //In questo caso imposto la variabile selectedRoom
    onChange(r_id: number) {
        RoomList.forEach(
            (room: Room) => {
                if (room.id == r_id) this.selectedRoom = room;
            }
        )
    }


    onClick(n: HTMLInputElement, c: HTMLInputElement, d: HTMLInputElement, e: HTMLInputElement): boolean {
        let prenoto: Prenotazione = new Prenotazione();
        prenoto.room = this.selectedRoom;
        prenoto.from = new Date(d.value);
        prenoto.to = new Date(e.value);
        prenoto.name = n.value;
        prenoto.surname = c.value;
        this.prenoData.push(prenoto);
        this.makeCompactPost(prenoto);
        return false;
        // this.bookingList.push(new Booking(this.selectedRoom,new Date(d.value), new Date(e.value) ,n.value,c.value));
    }
    makeCompactPost(prenoto: Prenotazione): void {
        this.http.post('https://my-json-server.typicode.com/malizia-g/hotel/booking', JSON.stringify(prenoto))
            .subscribe(data => {
                this.data = data;
            });
    }
}
