import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-args';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  data = 'Initial Data';
  sharedData: string;

  constructor(
    private sharedService: SharedService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.sharedService.sharedData$.subscribe(
      (sharedData) => (this.sharedData = sharedData)
    );
  }

  updateData() {
    this.sharedData = this.data;
    this.eventService.changedData.emit(this.data);
    //this.sharedService.setData(this.data);
  }
}
