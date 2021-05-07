import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Calendar } from './calendar.model';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
calendar : any = [];
calendarSelect:any = ['Option 1', 'Option 2', 'Option 3' ]

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.onFetchCalendar();
  }

  onFetchCalendar(){
    this.service.getCalendar().pipe(take(7)).subscribe(
      (res) =>{
        const data = JSON.stringify(res);
        this.calendar =  data;
        //console.log(this.calendar)
      
    },
    (err) => {
      console.log (err);
    }
    )

  }

  onChange(e){
    console.log(e.target.value)
  }

}
