export default class JobModel{

    constructor(_id,_name,_tech, _location,_salary, _date,_openings,_skills ){
        this.id = _id;
        this.name = _name;
        this.tech = _tech;
        this.location = _location;
        this.salary = _salary;
        this.date = _date;
        this.openings = _openings;
        this.skills = _skills;
    }

    static get(){
        return jobs;
    }
    static add(name,tech, location,salary, date,openings,skills){
        var newJOb = new JobModel(jobs.length+1, name, tech, location, salary, date, openings, skills);
        jobs.push(newJOb);
    }
    static update(id,name,tech, location,salary, date,openings,skills){
        const jobObj = {id,name,tech, location,salary, date,openings,skills};
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
let jobs = [
    new JobModel(1, 'Amazon', 'SDE-1', 'Gurugram', '6-7','30 Nov 2023',4,['JS','Node','React','Java','SpringBoot']),
    new JobModel(2, 'Facebook','Full Stack Developer', 'Banglore', '8-9','20 Nov 2023',8,['DSA','JS','React','Node','Express']),
    new JobModel(3, 'Infosys', 'Python', 'Noida', '7-8','2 Dec 2023',13,['C++','Java','Python','ML','DSA']),
];