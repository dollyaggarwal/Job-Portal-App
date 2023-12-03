import UserModel from "../models/user.model.js";

export default class UserController{

    getLogin(req, res){
        res.render('login', {errorMessage: null });
    }

    postRegister(req, res){
        const {name, email,password} = req.body;
        UserModel.add(name, email, password);
        res.render('login', {errorMessage: null });
    }

    postLogin(req, res){
        const { email, password} = req.body;
        const user = UserModel.isValidUser(email, password);
        if(!user){
            return res.render('login', {
                errorMessage:'Invalid Credentials',
            })
        }
        req.session.userEmail = email;
        var products = ProductModel.get();
        return res.render('jobs', {products, userEmail : req.session.userEmail});    
    }

    logout(req, res){
        //destroy the session
        req.session.destroy((err) =>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/login');
            }
        });
        res.clearCookie('lastVisit');
    }
}