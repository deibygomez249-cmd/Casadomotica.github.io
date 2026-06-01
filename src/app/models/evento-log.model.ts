export interface EventoLog {
  id?: number;
  tipoEvento: string;
  descripcion: string;
  fechaEvento?: Date;
  nivelGravedad: string;
  idUsuario?: number | null;
  idDispositivo?: number | null;
}
