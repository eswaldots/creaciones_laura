import app from '../dist/app.js';

export default async function handler(req, res) {
    await app(req, res);
  }

