import { connect } from 'mongoose';

import config from './';
import winston from '../config/winston';
const log = winston(module);

async function run(): Promise<void> {
  const options = {
    autoIndex: process.env.NODE_ENV !== 'production', // Mongoose-specific option. Set to false to disable automatic index creation for all models associated with this connection.
    // poolSize: 50, // Maintain up to 50 socket connections
    wtimeoutMS: 2500,
    // bufferMaxEntries: 0, // If not connected, return errors immediately rather than waiting for reconnect
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, // Mongoose-specific option. If true, this connection will use createIndex() instead of ensureIndex() for automatic index builds via Model.init()
  };

  const url = config.get('DB_URL');

  // connection.on('reconnected', () => {
  //   console.log('MongoDB reconnected!');
  // });
  // connection.on('error', function (err) {
  //   console.log('on error', err);
  // });
  // connection.on('close', () => {
  //   console.log('-> lost connection');
  // });
  // connection.once('open', function () {
  //   console.log('Connection to db established.');
  // });

  await connect(url, options)
    .then(() => log.info('Connected to db'))
    .catch((err) => log.error('Mongoose Error: ' + err));
}

export default run;


