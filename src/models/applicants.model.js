export default class ApplicantsModel{

    constructor(id,name,email,contact,resume){
        this.id =  id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resume = resume;
    }
    
    static get() {
        return applicants;
    }

    static add(name, email, contact, resume){
        const newApplicant = new ApplicantsModel(applicants.length+1, name, email, contact, resume);
        applicants.push(newApplicant);
    }
 
}
var applicants=[
    new ApplicantsModel(1, 'john Doe', 'johndoe@gmail.com', 8099123767,'resume1.pdf'),
    new ApplicantsModel(2, 'Neha ', 'neha2609@gmail.com', 9813280667,'resume2.pdf'),
    new ApplicantsModel(3, 'Mohit Aggarwal', 'mohitaggarwal2801@gmail.com',9873327805,'resume3.pdf'),
];