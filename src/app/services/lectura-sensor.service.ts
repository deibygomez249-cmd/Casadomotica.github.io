import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LecturaSensor } from '../models/lectura-sensor.model';

@Injectable({ providedIn: 'root' })
export class LecturaSensorService {
  private apiUrl = 'http://www.casa-domotica.somee.com/api/LecturasSensores';

  constructor(private http: HttpClient) {}

  getAll(): Observable<LecturaSensor[]> {
    return this.http.get<LecturaSensor[]>(this.apiUrl);
  }

  getById(id: number): Observable<LecturaSensor> {
    return this.http.get<LecturaSensor>(`${this.apiUrl}/${id}`);
  }

  create(data: LecturaSensor): Observable<LecturaSensor> {
    return this.http.post<LecturaSensor>(this.apiUrl, data);
  }

  update(id: number, data: LecturaSensor): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}