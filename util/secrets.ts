import * as dotenv from 'dotenv';
import * as fs from 'fs';

if (fs.existsSync('.env')) {
    console.log('Using .env file to supply config environment variables');
    dotenv.config({path: '.env'})
}

export const MONGO_URI = process.env['MONGO_URI'];