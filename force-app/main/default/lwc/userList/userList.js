import { LightningElement, track, wire } from 'lwc';
import getAllUsers from '@salesforce/apex/UserLightningController.getAllUsers';
import userMessageChannel from '@salesforce/messageChannel/UserMessageChannel__c';
import { publish, MessageContext } from 'lightning/messageService';

export default class UserList extends LightningElement {

    @wire(getAllUsers)
    users;

    @wire(MessageContext)
    messageContext;

    selectUser(event) {
        const payload = { recordId: event.currentTarget.dataset.id };
        publish(this.messageContext, userMessageChannel, payload);
    }

}