import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  const { message } = req.query;
  res.json({ message: message });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});