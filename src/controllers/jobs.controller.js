import path from 'path';
import JobModel from '../models/jobs.model.js';


export default class JobsController{
    getHome(req, res){
        res.render("index");  
    }

    getJobs(req, res){
        var job = JobModel.get();
        res.render("jobs", {job, userEmail : req.session.userEmail});
    }

    getNewJobs(req, res, next){
        res.render("add-new-jobs", {errorMessage : null, userEmail : req.session.userEmail});
    }

    AddNewJobs(req, res, next){
       
        const {name,category,tech,location,salary, date,openings,skills} = req.body;
        JobModel.add(name,category,tech,location,salary, date,openings,skills);
        var job = JobModel.get();
        return res.render('jobs', {job, userEmail : req.session.userEmail});
    }

    getUpdateJobView(req, res, next){

        const id = req.params.id;
        const JobFound = JobModel.getById(id);
        if(JobFound){
            res.render('update-jobs',{job: JobFound, errorMessage: null, userEmail : req.session.userEmail});
        }
        else{
            res.status(401).send('Job not found');
        }
    }
    
    getJobDetailsView(req, res, next){

        const id = req.params.id;  
        const jobFound = JobModel.getById(id);
        
        var jobs = JobModel.get();
        
        if(jobFound){
            res.render('details',{job:jobFound ,jobs, errorMessage: null, userEmail : req.session.userEmail});
        }
        else{
            res.status(401).send('Job not found');
        }
    }

    postUpdateJob(req, res, next){
        const {id,name,category, tech,location,salary, date,openings,skills} = req.body;
        JobModel.update(id,name,category, tech,location,salary, date,openings,skills);

        let jobs = JobModel.get();
        return res.render('jobs', {jobs, userEmail : req.session.userEmail});
    }

    deleteJob(req, res){

        const id = req.params.id;
        const jobFound = JobModel.getById(id);

        if(!jobFound){
            return res.status(401).send('Jobs not found');
        }
        JobModel.delete(id);
        var jobs = JobModel.get();
        return res.render('jobs', {jobs, userEmail : req.session.userEmail});
    }
    
}