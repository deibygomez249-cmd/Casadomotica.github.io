import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { LecturaSensorService } from '../../services/lectura-sensor.service';
import { LecturaSensor } from '../../models/lectura-sensor.model';

@Component({
  selector: 'app-lectura-sensor-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lectura-sensor-form.component.html'
})
export class LecturaSensorFormComponent implements OnInit {
  id: number | null = null;
  model: LecturaSensor = { valor: 0, fechaLectura: new Date(), notas: '', idSensor: 1 };
  constructor(private route: ActivatedRoute, public router: Router, private service: LecturaSensorService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/lecturas-sensores']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/lecturas-sensores']));
  }
}