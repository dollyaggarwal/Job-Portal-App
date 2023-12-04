import path from 'path';
import JobModel from '../models/jobs.model.js';


export default class JobsController{
    getHome(req, res){
        res.render("index");  
    }

    getJobs(req, res){
        var jobs = JobModel.get();
        res.render("jobs", {jobs, userEmail : req.session.userEmail});
    }

    getNewJobs(req, res, next){
        res.render("add-new-jobs", {errorMessage : null, userEmail : req.session.userEmail});
    }

    AddNewJobs(req, res, next){
        console.log(req.body);
        const {name,tech,location,salary,skill1,skill2,skill3,skill4,skill5} = req.body;
        JobModel.add(name,tech,location,salary,skill1,skill2,skill3,skill4,skill5);
        var jobs = JobModel.get();
        return res.render('jobs', {jobs, userEmail : req.session.userEmail});
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
        res.render("update-jobs"); 
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
        const {id,name,tech,location,salary,skill1,skill2,skill3,skill4,skill5} = req.body;
        
        JobModel.update(id,name,tech,location,salary,skill1,skill2,skill3,skill4,skill5);

        var jobs = JobModel.get();
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
        console.log(jobs);
        return res.render('jobs', {jobs, userEmail : req.session.userEmail});
    }

    viewDetails(req, res){
        res.render("details");
    }
    viewApplicants(req, res){
        res.render("applicants");
    }
}