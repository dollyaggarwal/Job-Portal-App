import path from 'path';

export default class JobsController{
    getHome(req, res){

        res.render("index");
        // return res.sendFile(path.join(path.resolve(), 'src', 'views', 'index.ejs'));
    }
    getJobs(req, res){

        res.render("jobs");
        // return res.sendFile(path.join(path.resolve(), 'src', 'views', 'index.ejs'));
    }
    getNewJobs(req, res){

        res.render("add-new-jobs");
        // return res.sendFile(path.join(path.resolve(), 'src', 'views', 'index.ejs'));
    }
    updateJobs(req, res){

        res.render("update-jobs");
        // return res.sendFile(path.join(path.resolve(), 'src', 'views', 'index.ejs'));
    }
    viewDetails(req, res){
        res.render("details");
    }
}