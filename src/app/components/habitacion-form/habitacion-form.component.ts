import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HabitacionService } from '../../services/habitacion.service';

@Component({
  selector: 'app-habitacion-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './habitacion-form.component.html'
})
export class HabitacionFormComponent implements OnInit {
  id: number | null = null;
  model: any = { nombre: '', idCasa: 1 };
  constructor(private route: ActivatedRoute, public router: Router, private service: HabitacionService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/habitaciones']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/habitaciones']));
  }
}