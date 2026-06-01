import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsumoEnergiaService } from '../../services/consumo-energia.service';
import { ConsumoEnergia } from '../../models/consumo-energia.model';

@Component({
  selector: 'app-consumo-energia-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './consumo-energia-lista.component.html'
})
export class ConsumoEnergiaListaComponent implements OnInit {
  items: ConsumoEnergia[] = [];
  constructor(private service: ConsumoEnergiaService) {}
  ngOnInit(): void { this.cargar(); }
  cargar(): void { this.service.getAll().subscribe(data => this.items = data); }
  eliminar(id: number): void {
    if (confirm('¿Eliminar este consumo?')) this.service.delete(id).subscribe(() => this.cargar());
  }
}