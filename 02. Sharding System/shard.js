const { ShardingManager } = require("discord.js");
const client = require('./index.js');
let manager = new ShardingManager('./index.js', {
  token: client.token,
  totalShards: 'auto',
});

manager.on('shardCreate', shard => {
  console.log(`[SHARDS]: Launched shard ${shard.id}`)
});

manager.spawn();
