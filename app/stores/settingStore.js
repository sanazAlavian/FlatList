import {observable} from "mobx";
import {create, persist} from "mobx-persist";
import {AsyncStorage} from "react-native";

class ObservableSettingStore {


    @persist @observable endPointUrl = "";
    @persist @observable width = 0;
    @persist @observable height = 0;
    @observable appVersion;
}

const settingStore = new ObservableSettingStore();
export default settingStore;

const hydrate = create({
    storage: AsyncStorage
});

