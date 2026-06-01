import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../models/sensor.model';

@Injectable({ providedIn: 'root' })
export class SensorService {
  private apiUrl = 'http://www.casa-domotica.somee.com/api/Sensores';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.apiUrl);
  }

  getById(id: number): Observable<Sensor> {
    return this.http.get<Sensor>(`${this.apiUrl}/${id}`);
  }

  create(data: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(this.apiUrl, data);
  }

  update(id: number, data: Sensor): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}