import { Component, OnInit } from '@angular/core';
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
  constructor(private service: EventoLogService) {}
  ngOnInit(): void { this.cargar(); }
  cargar(): void { this.service.getAll().subscribe(data => this.items = data); }
}