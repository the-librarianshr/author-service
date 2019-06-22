const redis = require('redis');
const client = redis.createClient();

client.on('error', err => {
  console.log('Error' + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);


let getHashKeys = () => {
  client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
      console.log("    " + i + ": " + reply);
    });
    client.quit();
  });
};

module.exports.getHashKeys = getHashKeys;