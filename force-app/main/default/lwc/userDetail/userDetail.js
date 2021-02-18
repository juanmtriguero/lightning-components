import { LightningElement, track, wire } from 'lwc';
import userMessageChannel from '@salesforce/messageChannel/UserMessageChannel__c';
import { subscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';

export default class UserDetail extends LightningElement {

    @track userId;

    @wire(MessageContext)
    messageContext;

    subscription = null;

    connectedCallback() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                userMessageChannel,
                (message) => this.userId = message.recordId,
                { scope: APPLICATION_SCOPE }
            );
        }
    }

}