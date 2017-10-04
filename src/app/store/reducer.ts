import { FILTER_COURSES, GET_COURSES_SUCCESS } from '../courses/course.actions';
import { IAppState } from './app-state';
import { Course } from '../courses/course';

const courses = [];

const initialState: IAppState = {
  courses,
  filteredCourses: courses
};

function filterCourses(state: IAppState, action): IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => c.name.toLocaleLowerCase().indexOf(action.searchText.toLocaleLowerCase()) > -1)
  });
}

function storeCourses(state: IAppState, action): IAppState {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses
  });
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    case GET_COURSES_SUCCESS:
      return storeCourses(state, action);
    default:
      return state;
  }
}