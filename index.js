import express from 'express';
import chalk from 'chalk';

const app = express();

app.get('/', (req, res) => {
  res.send('Mensagem de teste !!!!');
});

app.listen(5000, () => {
    console.log(chalk.bold.greenBright(`Servidor aberto na porta 5000`)); //eslint-disable-line
});
