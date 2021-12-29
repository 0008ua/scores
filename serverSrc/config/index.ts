import nconf from 'nconf';
import path from 'path';
nconf.argv() // прочитати конфігурацію з командної стрічки
  .env() // прочитати конфігурацію з змінних оточення
  .file({file: path.join(__dirname, 'config.json')}); // прочитати конфігурацію з файлу

export default nconf;
