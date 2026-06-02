import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TiposUsuarioService } from '../../services/tipos-usuario.service';

@Component({
  selector: 'app-tipos-usuario-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tipos-usuario-lista.component.html'
})
export class TiposUsuarioListaComponent implements OnInit {
  items: any[] = [];

  constructor(
    private service: TiposUsuarioService,
    private cdr: ChangeDetectorRef  // ← Para forzar actualización de la vista
  ) {}

  ngOnInit(): void {
    console.log('🚀 TiposUsuario - ngOnInit ejecutado');
    this.cargar();
  }

  cargar(): void {
    console.log('🔄 TiposUsuario - Ejecutando cargar()...');
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('✅ TiposUsuario - Datos recibidos:', data.length);
        this.items = data;
        this.cdr.detectChanges();  // ← Forzar actualización
      },
      error: (err) => {
        console.error('❌ ERROR al cargar tipos de usuario:', err);
      }
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Deseas eliminar este tipo de usuario?')) {
      this.service.delete(id).subscribe(() => this.cargar());
    }
  }
}