import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './usuario-lista.component.html'
})
export class UsuarioListaComponent implements OnInit {
  items: any[] = [];

  constructor(
    private service: UsuarioService,
    private cdr: ChangeDetectorRef  // ← Agregar esto
  ) {}

  ngOnInit(): void {
    console.log('🚀 Usuarios - ngOnInit ejecutado');
    this.cargar();
  }

  cargar(): void {
    console.log('🔄 Usuarios - Ejecutando cargar()...');
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('✅ Usuarios - Datos recibidos:', data.length);
        this.items = data;
        this.cdr.detectChanges();  // ← Forzar actualización de la vista
        console.log('📊 Vista actualizada, items:', this.items.length);
      },
      error: (err) => {
        console.error('❌ ERROR:', err);
      }
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar este usuario?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}