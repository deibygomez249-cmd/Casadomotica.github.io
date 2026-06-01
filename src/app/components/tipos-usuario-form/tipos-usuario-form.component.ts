import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TiposUsuarioService } from '../../services/tipos-usuario.service';
import { TiposUsuario } from '../../models/tipos-usuario.model';

@Component({
  selector: 'app-tipos-usuario-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tipos-usuario-form.component.html'
})
export class TiposUsuarioFormComponent implements OnInit {
  id: number | null = null;
  model: TiposUsuario = { tipoUsuario: '' };
  constructor(private route: ActivatedRoute, public router: Router, private service: TiposUsuarioService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/tipos-usuario']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/tipos-usuario']));
  }
}