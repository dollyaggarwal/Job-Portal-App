import path from 'path';

export default class JobsController{
    getJobs(req, res){
        return res.sendFile(path.join(path.resolve(), 'src', 'views', 'index.ejs'));
    }
}