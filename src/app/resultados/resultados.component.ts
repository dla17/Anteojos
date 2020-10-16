import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  
  constructor(public objeto: HttpClient)  {  
  }

  ngOnInit(): void {
    this.objeto.get('https://jsonplaceholder.typicode.com/users').subscribe((dla)=>{
      console.log(dla);
    });

  }

}
