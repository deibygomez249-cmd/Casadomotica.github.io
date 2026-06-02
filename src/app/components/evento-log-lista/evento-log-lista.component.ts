import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoLogService } from '../../services/evento-log.service';
import { EventoLog } from '../../models/evento-log.model';

@Component({
  selector: 'app-evento-log-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento-log-lista.component.html'
})
export class EventoLogListaComponent implements OnInit {
  items: EventoLog[] = [];

  constructor(
    private service: EventoLogService,
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
}