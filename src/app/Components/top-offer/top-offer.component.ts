import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-top-offer',
  templateUrl: './top-offer.component.html',
  styleUrls: ['./top-offer.component.css']
})
export class TopOfferComponent implements OnInit {

  constructor(
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
    console.log(this.messageService.searchValue)
  }

}
