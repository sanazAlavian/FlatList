import {SecurityHelper} from "./securityHelper";
import userAccountStore from "../stores/userAccountStore";
import userAccountStore from "../stores/categoryStore";
import settingStore from "../stores/settingStore";
import errorStore from "../stores/errorStore";




export class API {
    // securityHelper = new SecurityHelper();
    AES_KEY = "";

    constructor(){
        this.AES_KEY = userAccountStore.activationCode;
    }


    async updateProfile(id,name,username,email,address,phone,website,company) {
        console.warn("updateProfile Called.");
        const time = new Date().getTime();
        let hash = this.securityHelper.sha256(time + userAccountStore.UID);
        this.securityHelper.setAlg(true, false, (userAccountStore.sessionKey));
        hash = await this.securityHelper.encHex(hash);

        const data = {
            uuid: userAccountStore.UID,
            hash: hash,
            devicetime: time,
            id: id,
            name: name,
            email: email,
            website: website,
            company: company,
        };
        let response = '';
        try {
            response = await fetch(`${settingStore.endPointUrl}/updateProfile`, {
                method: 'post',
                mode: 'cors',
                body: JSON.stringify(data)
            });
        } catch (error) {
            errorStore.errorMessage = error;
            console.log("error in fetch updateProfile:  "+ error)
            errorStore.errorCode = '500'
        }

        if(response && response.status == 200){
            console.warn("updateProfile Req: " + JSON.stringify(data));
            const responseJson = await response.json();
            // console.warn("updateProfile Res: " + JSON.stringify(responseJson));
            errorStore.errorMessage = responseJson.errorTitle;
            errorStore.errorCode = responseJson.errorCode;

            if (responseJson.errorCode !== "0000") {
                console.warn('++ updateProfile Error Res: ' + JSON.stringify(errorStore));
            }
            else {
                console.warn('updateProfile Res: ' + JSON.stringify(responseJson));
            }
        }
        else{
            console.warn("errorCode in calling updateProfile: " + response.status);
        }


    }

    async fruitsList(){
        console.warn("fruitsList Called.");
        const time = new Date().getTime();
        let hash = this.securityHelper.sha256(time + userAccountStore.UID);
        this.securityHelper.setAlg(true, false, (userAccountStore.sessionKey));
        //hash = await this.securityHelper.encStr(hash);
        hash = await this.securityHelper.encHex(hash);

        const data = {
            uuid: userAccountStore.UID,
            hash: hash,
            devicetime: time,
        };
        let response = '';
        try {
            response = await fetch(`${settingStore.endPointUrl}/fruitsList`, {
                method: 'post',
                mode: 'cors',
                body: JSON.stringify(data)
            });
        } catch (error) {
            errorStore.errorMessage = error;
            console.log("error in fetch fruitsList:  "+ error)
            errorStore.errorCode = '500'
        }
        if(response && response.status == 200){
            const responseJson = await response.json();
            errorStore.errorMessage = responseJson.errorTitle;
            errorStore.errorCode = responseJson.errorCode;

            if (responseJson.errorCode !== "0000") {
                console.warn('++ fruitsList Error Res: ' + JSON.stringify(errorStore));
            }
            else {
                console.warn('fruitsList Res: ' + JSON.stringify(responseJson));
                categoryStore.fruitsList = responseJson.list;
                console.log("categoryStore.fruitsList:" +JSON.stringify(categoryStore.fruitsList));
            }
        }
        else{
            console.warn("errorCode in calling fruitsList: " + response.status);
        }


    }


}
