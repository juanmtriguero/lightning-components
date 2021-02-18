import { api, LightningElement, track, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';

export default class LoggedUserInfo extends LightningElement {

    @api field;

    @track userId = USER_ID;

    @wire(getRecord, { recordId: '$userId', fields: '$field' })
    loggedUser;

    get value() {
        return getFieldValue(this.loggedUser.data, this.field);
    }

    sayHi() {
        this.dispatchEvent(new CustomEvent('greeting'));
    }

}