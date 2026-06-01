import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // 👈 Declaramos la URL del backend aquí adentro para solucionar el error de "No suitable injection token"
  private baseUrl = 'https://localhost:7093/api'; // Ajusta el puerto (7093, 5000, etc.) según corra tu API de .NET C#

  // El constructor ahora solo pide el HttpClient que Angular sí sabe inyectar automáticamente
  constructor(private http: HttpClient) { }

  /**
   * Obtener una lista de registros (GET)
   * @param endpoint Ejemplo: 'usuarios' o 'casas'
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  /**
   * Obtener un registro específico por su ID (GET)
   * @param endpoint Ejemplo: 'usuarios' o 'casas'
   * @param id ID del registro
   */
  getById<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
  }

  /**
   * Crear un nuevo registro (POST)
   * @param endpoint Ejemplo: 'usuarios' o 'casas'
   * @param data Objeto con la información a guardar
   */
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  /**
   * Actualizar un registro existente (PUT)
   * @param endpoint Ejemplo: 'usuarios' o 'casas'
   * @param id ID del registro a modificar
   * @param data Objeto con los datos actualizados
   */
  put<T>(endpoint: string, id: number | string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}/${id}`, data);
  }

  /**
   * Eliminar un registro (DELETE)
   * @param endpoint Ejemplo: 'usuarios' o 'casas'
   * @param id ID del registro a borrar
   */
  delete<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}/${id}`);
  }
}