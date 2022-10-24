import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent implements OnInit {

  constructor(private confirmationService : ConfirmationService, private messageService : MessageService) { }

  cols : any
  target : any

  products : any=[
    {
      "code" : 1,
      "name" : "yogesh",
      "category" : "any",
      "quantity" : "any"
    },
    {
      "code" : 2,
      "name" : "deva",
      "category" : "any",
      "quantity" : "any"
    },
    {
      "code" : 3,
      "name" : "stalin",
      "category" : "any",
      "quantity" : "any"
    }
    
  ]

  ngOnInit(): void {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];
  }
  confirm(event:any) {
    console.log("fhhhhhhhhhhhh",event);
    
    this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.add({severity:'success', summary:'Confirmed', detail:'You have accepted'});
        },
        reject: () => {
            this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
        }
    });
}
}


