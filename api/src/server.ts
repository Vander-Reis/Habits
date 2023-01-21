import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors);

app.register(appRoutes);


app.listen({
  port: 8080,
  host: '192.168.18.65',
}).then(() => {
  console.log('Http Server running')
});