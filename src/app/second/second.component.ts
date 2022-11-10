import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-args';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  sharedData: string;

  constructor(
    private sharedService: SharedService,
    private eventService: EventService
  ) {
    this.eventService.changedData.subscribe((data) => (this.sharedData = data));
  }

  ngOnInit() {
    this.sharedService.sharedData$.subscribe(
      (sharedData) => (this.sharedData = sharedData)
    );
  }
}
