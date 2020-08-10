import { IAction, IState } from '../types/TypeCast';

export default (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };
        default:
            return state;
    }
};
