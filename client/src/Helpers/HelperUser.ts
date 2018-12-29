import ModelUser from '../models/userModel'

export default class HelperUser{

    public static jsonArrayToUsers(data:Array<{_id:string,userName:string,password:string,role:number, email:string, created_date:Date}>) {

        const array:ModelUser[]=[];

        data.forEach((element) => {
            array.push(new ModelUser(element._id,element.userName, element.password,element.role, element.email, element.created_date));
        });
        return array

    }
}