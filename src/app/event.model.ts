export class SchoolEvent {
  year: string;
  month: string;
  date: string;
  time: string;
  school: string;
  title: string;
  subTitle: string;
  location: string;
  needToSign: boolean;
  constructor(year: string , month: string , date: string, time: string, school: string,
              title: string, subTitle: string, location: string , needToSign: boolean) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.time = time;
    this.school = school;
    this.title = title;
    this.subTitle = subTitle;
    this.location = location;
    this.needToSign = needToSign;
  }
}
