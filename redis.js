const { createClient } = require('redis');

(async function test(){
    const client = createClient();

    client.on('error', (err) => console.log('Redis Client Error', err));
    
    
    await client.connect();
    
    await client.set('key', 'value');
    const value = await client.get('ankan');
    console.log('value is',value)
})()

