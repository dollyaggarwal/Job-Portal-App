export default class JobModel{

    constructor(_id,_name,_tech,_location,_salary,_skill1,_skill2,_skill3,_skill4,_skill5)
    {
        this._id = _id;
        this._name = _name;
        this._tech = _tech;
        this._location = _location;
        this._salary = _salary;
        this._skill1 = _skill1;
        this._skill2 = _skill2;
        this._skill3 = _skill3;
        this._skill4 = _skill4;
        this._skill5 = _skill5;
    }

    static get(){
        return jobs;
    }

    static add(name,tech,location,salary,skill1,skill2,skill3,skill4,skill5){
        var newJOb = new JobModel(jobs.length+1, name, tech, salary, skill1, skill2, skill3, skill4, skill5);
        jobs.push(newJOb);
    }

    static update(id,name,tech,location,salary,skill1,skill2,skill3,skill4,skill5){
        const jobObj = {id,name,tech,location,salary,skill1,skill2,skill3,skill4,skill5};
        const index = jobs.findIndex(
            (j) => j.id == jobObj.id);
            jobs[index] = jobObj;
    }
    
    static delete(id){
        const index = jobs.findIndex(j => j.id == id);
        jobs.splice(index, 1);
    }

    static getById(id){
        return jobs.find((j) => j.id == id);
    }
}
    var jobs = [
        new JobModel(1, 'SDE-1', 'SDE-1', 'Gurugram', '6-7','JS','Node','React','Java','SpringBoot'),
        new JobModel(2, 'Full Stack Developer','Full Stack Developer', 'Banglore', '8-9','DSA','JS','React','Node','Express'),
        new JobModel(3, 'Python Developer', 'Python', 'Noida', '7-8','C++','Java','Python','ML','DSA'),
    ];
