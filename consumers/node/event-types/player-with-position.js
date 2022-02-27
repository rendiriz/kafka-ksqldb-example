const avro = require('avsc');

const Type = avro.Type.forSchema({
  type: 'record',
  name: 'KsqlDataSourceSchema',
  namespace: 'io.confluent.ksql.avro_schemas',
  fields: [
    {
      default: null,
      name: 'NO',
      type: ['null', 'string'],
    },
    {
      default: null,
      name: 'NAME',
      type: ['null', 'string'],
    },
    {
      default: null,
      name: 'POSITION',
      type: ['null', 'string'],
    },
  ],
});

module.exports = Type;
