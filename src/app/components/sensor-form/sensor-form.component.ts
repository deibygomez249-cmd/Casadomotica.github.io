import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { SensorService } from '../../services/sensor.service';
import { Sensor } from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sensor-form.component.html'
})
export class SensorFormComponent implements OnInit {
  id: number | null = null;
  model: Sensor = { nombre: '', tipoSensor: '', unidadMedida: '', idHabitacion: 1 };
  constructor(private route: ActivatedRoute, public router: Router, private service: SensorService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/sensores']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/sensores']));
  }
}