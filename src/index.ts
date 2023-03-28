import express from 'express';
import cors from 'cors';
import { options } from './corsSettings/corsOptions';
import { routes } from './routes';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors(options));

// Routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
