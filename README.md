Get the docker images up and running.

```sh
docker-compose up -d
```

Run the producer

```js
node producer.js -f kafka.config -t test1
```

Run the consumer

```js
node consumer.js
```