import {observable} from "mobx";

import {create, persist} from "mobx-persist";
import {AsyncStorage} from "react-native";

class ObservableUserAccountStore {
    @persist @observable SERVER_PUBLIC_KEY = "";
    @persist @observable CLIENT_PUBLIC_KEY = "";
    @persist @observable CLIENT_PRIVATE_KEY = "";
    @persist @observable UID = "";
    @persist @observable id = "";
    @persist @observable name = "";
    @persist @observable username = "";
    @persist @observable email = "";
    @persist @observable address = {};
    @persist @observable phone = "";
    @persist @observable website = "";
    @persist @observable company = {};

}

const userAccountStore = new ObservableUserAccountStore();
export default userAccountStore;

// const hydrate = create({
//     storage: AsyncStorage
// });
// hydrate('userAccountStore', userAccountStore);
