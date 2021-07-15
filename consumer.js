var Transform = require('stream').Transform;

const Kafka = require('node-rdkafka');
let brokers = 'localhost:9092'
let topic = 'test2'

var stream = Kafka.KafkaConsumer.createReadStream({
  'metadata.broker.list': brokers,
  'group.id': 'motest22',
  'socket.keepalive.enable': true,
  'enable.auto.commit': false,
  'auto.offset.reset': 'earliest'
}, {'auto.offset.reset': 'earliest'}, {
  topics: topic,
  waitInterval: 0,
  objectMode: false,
  
});

stream.on('error', function(err) {
  if (err) console.log(err);
  process.exit(1);
});

stream.on('data', function(message) {
    console.log('got me a message');
    console.log(message.value);
  })

stream.on('error', function(err) {
  console.log(err);
  process.exit(1);
});

stream.consumer.on('event.error', function(err) {
  console.log(err);
})

console.log(`reading from topic ${topic}`);