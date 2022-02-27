const { Kafka } = require('kafkajs');
const PlayerWithPosition = require('./event-types/player-with-position');

const config = {
  clientId: process.env.KAFKA_CLIENT_ID || 'consumer-tbl_player_with_position',
  brokers: [process.env.KAFKA_BROKERS || 'localhost:29092'],
  groupId: process.env.KAFKA_GROUP_ID || 'group-tbl_player_with_position',
  tweetsTopic: process.env.KAFKA_TWEETS_TOPIC || 'player_with_position',
  fromBeginning: true,
};

const kafka = new Kafka({
  clientId: config.clientId,
  brokers: config.brokers,
});

(async () => {
  const consumer = kafka.consumer({ groupId: config.groupId });

  await consumer.connect();

  await consumer.subscribe({
    topic: config.tweetsTopic,
    fromBeginning: config.fromBeginning,
  });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.info('Processing message ======================================');
      console.info('value', JSON.parse(message.value.toString()));
      console.info('=========================================================');
    },
  });
})();
