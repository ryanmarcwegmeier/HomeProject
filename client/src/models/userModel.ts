
export default class ModelUser{

    constructor(private _id:string, private _userName:string, private _password:string, private _role:number, private _email:string, private _createdDate:Date){};

    public get username():string{
        return this._userName;
    }

    public set username(username:string){
        this._userName = username;
    }

    public get password():string{
        return this._password;
    }

    public set password(password:string){
        this._password = password;
    }

    public get role():number{
        return this._role;
    }

    public set role(role:number){
        this._role = role;
    }

    public get email():string{
        return this._email;
    }

    public set email(email:string){
        this._email = email;
    }
    public get createdDate():Date{
        return this._createdDate;
    }

    public set createdDate(date:Date){
        this._createdDate = date;
    }

    public get id(){
        return this._id;
    }
    
    
}