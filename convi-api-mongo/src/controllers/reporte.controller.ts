import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Reporte} from '../models';
import {ReporteRepository} from '../repositories';

export class ReporteController {
  constructor(
    @repository(ReporteRepository)
    public reporteRepository: ReporteRepository,
  ) {}

  @post('/reportes', {
    responses: {
      '200': {
        description: 'Reporte model instance',
        content: {'application/json': {schema: getModelSchemaRef(Reporte)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reporte, {
            title: 'NewReporte',
            exclude: ['id'],
          }),
        },
      },
    })
    reporte: Omit<Reporte, 'id'>,
  ): Promise<Reporte> {
    return this.reporteRepository.create(reporte);
  }

  @get('/reportes/count', {
    responses: {
      '200': {
        description: 'Reporte model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Reporte))
    where?: Where<Reporte>,
  ): Promise<Count> {
    return this.reporteRepository.count(where);
  }

  @get('/reportes', {
    responses: {
      '200': {
        description: 'Array of Reporte model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Reporte)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Reporte))
    filter?: Filter<Reporte>,
  ): Promise<Reporte[]> {
    return this.reporteRepository.find(filter);
  }

  @patch('/reportes', {
    responses: {
      '200': {
        description: 'Reporte PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reporte, {partial: true}),
        },
      },
    })
    reporte: Reporte,
    @param.query.object('where', getWhereSchemaFor(Reporte))
    where?: Where<Reporte>,
  ): Promise<Count> {
    return this.reporteRepository.updateAll(reporte, where);
  }

  @get('/reportes/{id}', {
    responses: {
      '200': {
        description: 'Reporte model instance',
        content: {'application/json': {schema: getModelSchemaRef(Reporte)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Reporte> {
    return this.reporteRepository.findById(id);
  }

  @patch('/reportes/{id}', {
    responses: {
      '204': {
        description: 'Reporte PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Reporte, {partial: true}),
        },
      },
    })
    reporte: Reporte,
  ): Promise<void> {
    await this.reporteRepository.updateById(id, reporte);
  }

  @put('/reportes/{id}', {
    responses: {
      '204': {
        description: 'Reporte PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reporte: Reporte,
  ): Promise<void> {
    await this.reporteRepository.replaceById(id, reporte);
  }

  @del('/reportes/{id}', {
    responses: {
      '204': {
        description: 'Reporte DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reporteRepository.deleteById(id);
  }
}
