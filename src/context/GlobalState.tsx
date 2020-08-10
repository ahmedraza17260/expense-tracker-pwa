/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { IState } from '../types/TypeCast';


// Initail State

const initialState: IState = {
    transactions: [
        // { id: 1, text: "Flower", amount: -20 },
        // { id: 2, text: "Salary", amount: 300 },
        // { id: 3, text: "Book", amount: -10 },
        // { id: 4, text: "Camera", amount: 150 },
    ],
};

// Create context
export const GlobalContext = createContext<IState | any>(initialState);

// Privoder Components
export const GlobalProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Action
    // function deleteTransaction(transaction: ITrans) {
    //     dispatch({
    //         type: "DELETE_TRANSACTION",
    //         payload: transaction,
    //     });
    // }

    // function addTransaction(transaction: ITrans) {
    //     dispatch({
    //         type: "ADD_TRANSACTION",
    //         payload: transaction,
    //     });
    // }

    return (
        <GlobalContext.Provider
            value={{ state, dispatch }}>{props.children}
        </GlobalContext.Provider>
    );
};


            // value={{
            //     transactions: state.transactions,
            //     deleteTransaction,
            //     addTransaction,
            // }}