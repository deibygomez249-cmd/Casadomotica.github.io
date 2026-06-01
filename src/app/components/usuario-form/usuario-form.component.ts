import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './usuario-form.component.html'
})
export class UsuarioFormComponent implements OnInit {
  id: number | null = null;
  model: any = { NombreCompleto: '', Email: '', ContrasenaHash: '', Telefono: '', Activo: true, IdTipoUsuario: 2 };
  constructor(private route: ActivatedRoute, public router: Router, private service: UsuarioService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/usuarios']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/usuarios']));
  }
}