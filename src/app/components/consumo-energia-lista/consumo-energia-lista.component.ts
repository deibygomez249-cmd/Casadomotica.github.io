import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private service: ConsumoEnergiaService,
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
    if (confirm('¿Eliminar este consumo?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}