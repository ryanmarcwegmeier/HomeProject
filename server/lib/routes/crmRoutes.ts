// /lib/routes/crmRoutes.ts
import {Request, Response} from "express";
import {ContactController} from '../controllers/crmController'

export class Routes {    
    
    public contactController: ContactController = new ContactController();

    public routes(app): void { 
        
        // Contact 
        app.route('/contact') 
        // GET endpoint 
        .get(this.contactController.getContacts)        
        // POST endpoint
        .post(this.contactController.addNewContact)

        // Contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)
    }
}