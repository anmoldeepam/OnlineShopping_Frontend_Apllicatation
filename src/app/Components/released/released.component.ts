import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { game } from '../Model/Game';

@Component({
  selector: 'app-released',
  templateUrl: './released.component.html',
  styleUrls: ['./released.component.css']
})
export class ReleasedComponent implements OnInit {

  constructor(private route:Router) { }

  games:game[] =[
    {
      Name:"GTA",
     Genere:"Roaming Game",
     Description:"Its a good game with all Enjoyments",
     ImageUrl:"../../../assets/GTA.jfif"
    }
  ]

  ngOnInit(): void {
  }

  DetailsPage(id:number){
    this.route.navigate(['details',id])
  }

}
