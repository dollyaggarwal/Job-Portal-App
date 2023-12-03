import express from 'express';
import path from 'path';
import JobsController from './src/controllers/jobs.controller.js';
import UserController from './src/controllers/user.controller.js';
// import { validateHeaderValue } from 'http';
// import validationMiddleware from './src/middlewares/validation.middleware.js';
import { auth } from './src/middlewares/auth.middleware.js';
import ejsLayouts from 'express-ejs-layouts';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(path.resolve(), 'src','views'));

app.use(ejsLayouts);
app.use(express.static('src/views'));

const jobsController = new JobsController();
const usersController = new UserController();

//parse form data
app.use(express.urlencoded({extended:true}));

app.get('/',jobsController.getHome);

app.get('/jobs', jobsController.getJobs);

app.get('/login', usersController.getLogin);

app.post('/login', usersController.postLogin);

app.get('/logout', usersController.logout);

app.post('/', usersController.postRegister);
app.get('/add-new-jobs', jobsController.getNewJobs);

app.get('/update-jobs', jobsController.updateJobs);

app.get('/details', jobsController.viewDetails);

app.listen(5000, () => {
    console.log('server is working');
})

