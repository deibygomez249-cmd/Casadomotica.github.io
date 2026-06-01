import { Component, OnInit } from '@angular/core';
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
  constructor(private service: HabitacionService) {}
  ngOnInit(): void { this.cargar(); }
  cargar(): void { this.service.getAll().subscribe(data => this.items = data); }
  eliminar(id: number): void { if (confirm('¿Eliminar?')) this.service.delete(id).subscribe(() => this.cargar()); }
}