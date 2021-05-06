import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculasapp';
  
  dataPelis:any = {};

  constructor(public pelisService: PeliculasService){
    this.pelisService.getPopulares()
      .subscribe((data:any ) => {
        this.dataPelis = data;
        console.log(data);
        
      } );
  }
}