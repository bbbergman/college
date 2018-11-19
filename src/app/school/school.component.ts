import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SchoolEvent} from "../event.model";
import {EventsService} from "../events.service";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit, OnChanges {
  constructor(private EventService: EventsService) {}
  @Input() schoolName;
  events: SchoolEvent[] = [];
  show = false;
  showAll = false
  userYear;
  userMonth;

  ngOnInit() {
    this.events = this.EventService.getEvents();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['schoolName'].currentValue === 'general') {
      this.showAll = true;
    } else {
      this.showAll = false;
    }
  }
  updateMonth(month) {
    this.userMonth = month;
    document.getElementById('dropdownBasic2').innerHTML = month;
  }
  updateYearAndShowEvents(year) {
    this.userYear = year;
    document.getElementById('dropdownBasic1').innerHTML = year;
    this.show = true;
  }

}
