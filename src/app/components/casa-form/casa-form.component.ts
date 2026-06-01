import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CasaService } from '../../services/casa.service';

@Component({
  selector: 'app-casa-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './casa-form.component.html'
})
export class CasaFormComponent implements OnInit {
  id: number | null = null;
  model: any = { direccion: '', ciudad: '', idUsuario: 1 };
  constructor(private route: ActivatedRoute, public router: Router, private service: CasaService) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) { this.id = Number(idParam); this.service.getById(this.id).subscribe(data => this.model = data); }
  }
  guardar(): void {
    if (this.id) this.service.update(this.id, this.model).subscribe(() => this.router.navigate(['/casas']));
    else this.service.create(this.model).subscribe(() => this.router.navigate(['/casas']));
  }
}