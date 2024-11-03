import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { University, Campus, Faculty, Student } from '../interfaces/university';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://bioface-school-api.vercel.app';

  constructor(private http: HttpClient) { }

  getCampuses(): Observable<Campus[]> {
    return this.http.get<University[]>(`${this.baseUrl}/universities`)
      .pipe(
        map(response => response[0].campuses)
      );
  }

  getFaculties(campusId: number): Observable<Faculty[]> {
    return this.http.get<University[]>(`${this.baseUrl}/universities`)
      .pipe(
        map(response => {
          const campus = response[0].campuses.find((c: Campus) => c.id === Number(campusId));
          return campus ? campus.faculties : [];
        })
      );
  }

  getStudents(campusId: number, facultyId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`)
      .pipe(
        map(students => students.filter(student =>
          student.campus_id === Number(campusId) &&
          student.faculty_id === Number(facultyId)
        ))
      );
  }
}
