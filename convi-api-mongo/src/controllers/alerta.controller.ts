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
import {Alerta} from '../models';
import {AlertaRepository} from '../repositories';

export class AlertaController {
  constructor(
    @repository(AlertaRepository)
    public alertaRepository : AlertaRepository,
  ) {}

  @post('/alertas', {
    responses: {
      '200': {
        description: 'Alerta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Alerta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alerta, {
            title: 'NewAlerta',
            exclude: ['id'],
          }),
        },
      },
    })
    alerta: Omit<Alerta, 'id'>,
  ): Promise<Alerta> {
    return this.alertaRepository.create(alerta);
  }

  @get('/alertas/count', {
    responses: {
      '200': {
        description: 'Alerta model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Alerta)) where?: Where<Alerta>,
  ): Promise<Count> {
    return this.alertaRepository.count(where);
  }

  @get('/alertas', {
    responses: {
      '200': {
        description: 'Array of Alerta model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Alerta)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Alerta)) filter?: Filter<Alerta>,
  ): Promise<Alerta[]> {
    return this.alertaRepository.find(filter);
  }

  @patch('/alertas', {
    responses: {
      '200': {
        description: 'Alerta PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alerta, {partial: true}),
        },
      },
    })
    alerta: Alerta,
    @param.query.object('where', getWhereSchemaFor(Alerta)) where?: Where<Alerta>,
  ): Promise<Count> {
    return this.alertaRepository.updateAll(alerta, where);
  }

  @get('/alertas/{id}', {
    responses: {
      '200': {
        description: 'Alerta model instance',
        content: {'application/json': {schema: getModelSchemaRef(Alerta)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Alerta> {
    return this.alertaRepository.findById(id);
  }

  @patch('/alertas/{id}', {
    responses: {
      '204': {
        description: 'Alerta PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Alerta, {partial: true}),
        },
      },
    })
    alerta: Alerta,
  ): Promise<void> {
    await this.alertaRepository.updateById(id, alerta);
  }

  @put('/alertas/{id}', {
    responses: {
      '204': {
        description: 'Alerta PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() alerta: Alerta,
  ): Promise<void> {
    await this.alertaRepository.replaceById(id, alerta);
  }

  @del('/alertas/{id}', {
    responses: {
      '204': {
        description: 'Alerta DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.alertaRepository.deleteById(id);
  }
}
