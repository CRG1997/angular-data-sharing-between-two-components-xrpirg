import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  public changedData: EventEmitter<any> = new EventEmitter();
}
