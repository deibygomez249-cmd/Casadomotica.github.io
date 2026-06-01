import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DispositivoService } from '../../services/dispositivo.service';
import { Dispositivo } from '../../models/dispositivo.model';

@Component({
  selector: 'app-dispositivo-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dispositivo-lista.component.html'
})
export class DispositivoListaComponent implements OnInit {
  items: Dispositivo[] = [];
  constructor(private service: DispositivoService) {}
  ngOnInit(): void { this.cargar(); }
  cargar(): void { this.service.getAll().subscribe(data => this.items = data); }
  eliminar(id: number): void { if (confirm('¿Eliminar dispositivo?')) this.service.delete(id).subscribe(() => this.cargar()); }
}