import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ConsumoEnergiaService } from '../../services/consumo-energia.service';
import { ConsumoEnergia } from '../../models/consumo-energia.model';

@Component({
  selector: 'app-consumo-energia-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './consumo-energia-form.component.html'
})
export class ConsumoEnergiaFormComponent implements OnInit {
  id: number | null = null;
  model: ConsumoEnergia = {
    fechaHoraInicio: new Date(),
    fechaHoraFin: new Date(),
    consumoKWh: 0,
    costoEstimado: 0,
    idDispositivo: 1
  };
  constructor(private route: ActivatedRoute, public router: Router, private service: ConsumoEnergiaService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/consumos-energia']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/consumos-energia']));
  }
}