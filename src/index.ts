import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  const mytodo = new Todo("朝食べる", false)
  const { message } = req.query;
  res.json({ todo: { content: mytodo.content, check: mytodo.check} });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

class Todo{
  constructor(public readonly content: string , public readonly check: boolean){}
}