import { LightningElement, track } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/User.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/User.LastName';
import USERNAME_FIELD from '@salesforce/schema/User.Username';
import ALIAS_FIELD from '@salesforce/schema/User.Alias';

export default class LoggedUserInfoContainer extends LightningElement {

    @track selectedField;
    @track panelHidden = true;

    get options() {
        return [
            { label: 'First Name', value: this.stringifyField(FIRST_NAME_FIELD) },
            { label: 'Last Name', value: this.stringifyField(LAST_NAME_FIELD) },
            { label: 'Username', value: this.stringifyField(USERNAME_FIELD) },
            { label: 'Alias', value: this.stringifyField(ALIAS_FIELD) }
        ];
    }

    selectField(event) {
        this.selectedField = event.detail.value;
    }

    stringifyField(field) {
        return field.objectApiName + '.' + field.fieldApiName;
    }

    showPanel() {
        this.panelHidden = false;
    }

}