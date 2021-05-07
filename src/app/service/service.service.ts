import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '../calendar/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
url = '';

  getCalendar(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>('./assets/calendar.json');
  }

}
