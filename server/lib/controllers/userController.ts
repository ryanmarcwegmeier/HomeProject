//   /lib/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModels';
import { Request, Response } from 'express';
import * as NodeRSA from 'node-rsa';

const User = mongoose.model('User', UserSchema);

export class UserController {
    public addNewUser(req: Request, res: Response) {

        console.log(req.body.password);

        const KEY = new NodeRSA({b: 1024});
        req.body.password = (req.body.password!=null)?KEY.encrypt(req.body.password, 'base64'):null;
        console.log(req.body.password);

        let newUser = new User(req.body);


        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUsers(req: Request, res: Response) {
        console.log("hier")
        User.find({}, (err, user) => {
            if (err) {
                console.log("hier2")

                res.send(err);
            }
            console.log("hie3")
            res.json(user);
        });
    }


    public getUserWithID (req: Request, res: Response) {           
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {           
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {           
        User.remove({ _id: req.params.UserId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted User!'});
        });
    }

}