import { observable } from 'mobx';

class ObservableErrorStore {
	@observable errorMessage = '';
	@observable errorCode = '0000';
	@observable errorExtraLifeCode = '0000';
	@observable errorExtraLifeMessage = ' ';
    @observable gameErrorCode;
    @observable errorCodeValidateTran = '0000';
}

const errorStore = new ObservableErrorStore();
export default errorStore;
