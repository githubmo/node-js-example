var Transform = require('stream').Transform;

const Kafka = require('node-rdkafka');

var stream = Kafka.KafkaConsumer.createReadStream({
  'metadata.broker.list': 'localhost:9092',
  'group.id': 'librd-test2323',
  'socket.keepalive.enable': true,
  'enable.auto.commit': false,
  'auto.offset.reset': 'earliest'
}, {}, {
  topics: 'test1',
  waitInterval: 0,
  objectMode: false
});

stream.on('error', function(err) {
  if (err) console.log(err);
  process.exit(1);
});

stream.on('data', function(message) {
    console.log('got me a message');
    console.log(message);
  })

stream.on('error', function(err) {
  console.log(err);
  process.exit(1);
});

stream.consumer.on('event.error', function(err) {
  console.log(err);
})

console.log('reading from topic test1');