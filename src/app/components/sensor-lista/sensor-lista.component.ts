import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SensorService } from '../../services/sensor.service';
import { Sensor } from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sensor-lista.component.html'
})
export class SensorListaComponent implements OnInit {
  items: Sensor[] = [];
  constructor(private service: SensorService) {}
  ngOnInit(): void { this.cargar(); }
  cargar(): void { this.service.getAll().subscribe(data => this.items = data); }
  eliminar(id: number): void { if (confirm('¿Eliminar sensor?')) this.service.delete(id).subscribe(() => this.cargar()); }
}