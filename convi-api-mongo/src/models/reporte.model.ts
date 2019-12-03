import {Entity, model, property} from '@loopback/repository';

@model()
export class Reporte extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
  })
  titulo?: string;

  @property({
    type: 'string',
  })
  autor?: string;

  @property({
    type: 'string',
  })
  fecha?: string;

  @property({
    type: 'string',
  })
  alcaldia?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  constructor(data?: Partial<Reporte>) {
    super(data);
  }
}

export interface ReporteRelations {
  // describe navigational properties here
}

export type ReporteWithRelations = Reporte & ReporteRelations;
