import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes  as crmRoute} from "./routes/crmRoutes";
import {Routes  as userRoute} from "./routes/userRoutes";
import * as mongoose from "mongoose";


class App {

    public app: express.Application;
    public routeCrm: crmRoute = new crmRoute();
    public routeUser: userRoute = new userRoute();
    public mongoUrl: string = 'mongodb://localhost:27017/Homenetwork';  

    constructor() {
        this.app = express();
        this.config();    
        this.routeCrm.routes(this.app);   
        this.routeUser.routes(this.app);   
        this.mongoSetup();
    }


    

    private config(): void{
        this.app.use((req, res, next)=> {
            res.header("Access-Control-Allow-Origin", "*");
            next();
          })
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;