const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function setupChangeStreams() {
  try {
    await client.connect();

    const collections = await client.db('seguridad_app').listCollections().toArray();

    collections.forEach((collectionInfo) => {
      const collectionName = collectionInfo.name;
      const collection = client.db('seguridad_app').collection(collectionName);
      const changeStream = collection.watch();

      changeStream.on('change', (change) => {
        console.log(`Cambio detectado en la colección ${collectionName}: ${JSON.stringify(change)}`);
      });
    });

    console.log('Change Streams configurados para todas las colecciones.');

  } catch (error) {
    console.error('Error al configurar Change Streams:', error);
  }
}

module.exports = setupChangeStreams;
