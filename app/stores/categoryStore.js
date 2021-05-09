import {observable} from "mobx";
import {persist} from "mobx-persist";


class ObservableCategoryStore {
    @observable fruitsList = [];
}

const categoryStore = new ObservableCategoryStore();
export default categoryStore;
