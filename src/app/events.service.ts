import {SchoolEvent} from "./event.model";

export class EventsService {
  events: SchoolEvent[] = [];

  constructor() {
    this.events.push(new SchoolEvent('2018', '11', '13.11', '10:00', 'socialSciences', 'אירוע: כנס בנושא ', 'בכנס נעסוק בנושא', 'אודיטוריום 30', true));
    this.events.push( new SchoolEvent('2018', '10', '1.10', '21:00', 'preparatoryProgram', 'אירוע: כנס בנושא ', ' בכנס נעסוק בנושא', 'אודיטוריום 30', true));
    this.events.push(new SchoolEvent('2018', '12', '5.12', '22:00', 'law', 'אירוע: כנס בנושא ', 'בכנס נדבר על', 'אודיטוריום 30', true));
    this.events.push(new SchoolEvent('2018', '12', '12.12', '22:00', 'law', 'אירוע: כנס בנושא ', 'בכנס נעסוק בנושא', 'אודיטוריום 30', true));
    this.events.push( new SchoolEvent('2017', '12', '1.12', '21:00', 'socialSciences', 'אירוע: כנס בנושא ', ' בכנס נעסוק בנושא', 'אודיטוריום 30', true));
  }


  getEvents() {
    return this.events.slice();
  }
}
