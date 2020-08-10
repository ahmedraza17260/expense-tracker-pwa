import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ITrans } from '../types/TypeCast';


export const Transaction: React.FC<ITrans> = (transaction) => {

    const { dispatch } = useContext(GlobalContext);

    function deleteTransaction(transaction: ITrans) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: transaction.id,
        });
    }
    const sign = transaction.amount < 0 ? "-" : "+";
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>
                {sign}${Math.abs(transaction.amount)}
            </span>
            <button
                onClick={() => deleteTransaction(transaction)}
                className="delete-btn"
            ></button>
        </li>
    );
};
