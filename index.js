import express, { json } from 'express';
const PORT = process.env.PORT || 3000;
const app = express();
app.disable('x-powered-by'); // elimina informacion de la version de express por seguridad (que no exploten vulnerabilidades conocidas de la version de express que se esta usando)

 app.use.express.json(); // middleware para parsear el body de las peticiones a json

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});