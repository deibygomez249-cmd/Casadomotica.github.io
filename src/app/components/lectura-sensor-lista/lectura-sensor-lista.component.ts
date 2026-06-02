import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LecturaSensorService } from '../../services/lectura-sensor.service';
import { LecturaSensor } from '../../models/lectura-sensor.model';

@Component({
  selector: 'app-lectura-sensor-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lectura-sensor-lista.component.html'
})
export class LecturaSensorListaComponent implements OnInit {
  items: LecturaSensor[] = [];

  constructor(
    private service: LecturaSensorService,
    private cdr: ChangeDetectorRef  // ← Agregado
  ) {}

  ngOnInit(): void { 
    this.cargar(); 
  }

  cargar(): void { 
    this.service.getAll().subscribe({
      next: (data) => {
        this.items = data;
        this.cdr.detectChanges();  // ← Forzar actualización de la vista
      },
      error: (err) => console.error('Error:', err)
    });
  }

  eliminar(id: number): void { 
    if (confirm('¿Eliminar lectura?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}