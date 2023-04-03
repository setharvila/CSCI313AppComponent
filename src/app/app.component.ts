import { Component } from '@angular/core';
import { Course } from './model/course';
import { COURSES } from './data/course-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  csci160: Course = COURSES[0];
  csci161: Course = COURSES[1];
  csci213: Course = COURSES[2];
}
