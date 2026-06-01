import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { DispositivoService } from '../../services/dispositivo.service';
import { Dispositivo } from '../../models/dispositivo.model';

@Component({
  selector: 'app-dispositivo-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dispositivo-form.component.html'
})
export class DispositivoFormComponent implements OnInit {
  id: number | null = null;
  model: Dispositivo = { nombre: '', tipoDispositivo: '', marca: '', modelo: '', estado: false, consumoWatts: 0, idHabitacion: 1 };
  constructor(private route: ActivatedRoute, public router: Router, private service: DispositivoService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/dispositivos']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/dispositivos']));
  }
}