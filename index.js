import express from 'express';
import path from 'path';
import JobsController from './src/controllers/jobs.controller.js';
import ejsLayouts from 'express-ejs-layouts';
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(path.resolve(), 'src','views'));

app.use(ejsLayouts);
app.use(express.static('src/views'));

const jobsController = new JobsController();

app.get('/', jobsController.getJobs);

app.listen(5000, () => {
    console.log('server is working');
})

