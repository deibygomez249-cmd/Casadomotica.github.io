import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HabitacionService } from '../../services/habitacion.service';
import { Habitacion } from '../../models/habitacion.model';

@Component({
  selector: 'app-habitacion-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './habitacion-lista.component.html'
})
export class HabitacionListaComponent implements OnInit {
  items: Habitacion[] = [];

  constructor(
    private service: HabitacionService,
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
    if (confirm('¿Eliminar habitación?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}