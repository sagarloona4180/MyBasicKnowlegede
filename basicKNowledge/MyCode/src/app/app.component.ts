import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   column=[
     {
       "headerName":"Name",
       "field":"name"
     },
     {
      "headerName":"Mobile",
      "field":"mobile"
    },
     {
      "headerName":"State",
      "field":"state"
     }
   ];

   row=[
     {
       "name":"Sagar kumar",
       "mobile":7006397712,
       "state":"Jammu and Kashmir"
     },
      {
        "name":"vijay",
        "mobile":7006393412,
        "state":"Jammu and Kashmir"
      }, {
        "name":"Aman",
        "mobile":9886397712,
        "state":"Jammu and Kashmir"
      }

   ]
}
