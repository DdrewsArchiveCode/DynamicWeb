import express, {json, Request, Reponse} from 'express';
import { register, login, detailsUpdate, passwordUpdate } from "./auth";

const app = express();
app.use(json());
app.post('/register', (req:Request, res:Response) => {})