const { ShardingManager } = require('discord.js');
const config = require('./config.json');

let manager = new ShardingManager('./index.js', {
    token: config.TOKEN,
    totalShards: 'auto',
});

manager.on('shardCreate', shard => {
    console.log(`[SHARDS]: Launched shard ${shard.id}`)
});

manager.spawn();
