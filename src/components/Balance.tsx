import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ITrans } from '../types/TypeCast';


export const Balance = () => {
    // const { transactions } = useContext(GlobalContext);
    const { state } = useContext(GlobalContext);

    const amounts = state.transactions.map((transaction: ITrans) => transaction.amount);
    const total = +amounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4 className="balance">Your Balance</h4>
            <h1 className="balance_price">${total}</h1>
        </>
    );
};
