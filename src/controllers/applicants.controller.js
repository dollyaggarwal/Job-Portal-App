import path from 'path';
import ApplicantsModel from '../models/applicants.model.js';
import JobModel from  '../models/jobs.model.js'
import { uploadFile } from '../middlewares/file-upload.middleware.js';

export default class ApplicantsController{  

    AddNewApplicants(req, res, next){
        const {name,email,contact} = req.body;
        const resume = 'resume/' + req.file.filename;
        ApplicantsModel.add(name,email,contact,resume);
        var applicant = ApplicantsModel.get();
        return res.render('details', {applicant});
    }

}