const { ShardingManager } = require("discord.js")

let { token } = require("./config.json")
let manager = new ShardingManager('./index.js', {
    token: token,
    totalShards: 'auto',
});

manager.on('shardCreate', shard => {
    console.log(`[SHARDS]: Launched shard ${shard.id}`)
});

manager.spawn();
