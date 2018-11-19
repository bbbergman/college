import {Component, OnInit} from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class AppComponent  implements OnInit {
  school = '';
  isCollapsed = true;

  ngOnInit() {
  }
  constructor(config: NgbTabsetConfig, private router: Router, private routh: ActivatedRoute) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }
  updateSchool(school) {
    this.school = school;
}
}
