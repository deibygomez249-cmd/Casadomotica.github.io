export interface Usuario {
  id: number;
  nombreCompleto: string;
  email: string;
  contrasenaHash: string;
  telefono: string; 
  fechaRegistro: string;
  activo: boolean;
  idTipoUsuario: number;
}