import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

import { IAppState } from '../store';
import { CourseService } from './course.service';

export const FILTER_COURSES = 'courses/FILTER';
export const GET_COURSES_SUCCESS = 'courses/GET_SUCCESS';

@Injectable()
export class CourseActions {
  constructor(private ngRedux: NgRedux<IAppState>,
    private courseService: CourseService) {}
  
  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.ngRedux.dispatch({
          type: GET_COURSES_SUCCESS,
          courses
        })
      });
  }

  filterCourses(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText
    });
  }
}
