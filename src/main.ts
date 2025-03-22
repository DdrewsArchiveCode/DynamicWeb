import express, {json, Request, Response} from 'express';
import {register, login} from './auth';

const app = express();
