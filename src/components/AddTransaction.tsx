import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ITrans } from "../types/TypeCast";


export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { dispatch } = useContext(GlobalContext);
    function addTransaction(transaction: ITrans) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    }

    function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (+amount === 0) {
            alert("Please Enter Correct Value");
            return false;
        }
        const newTransition = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };
        setText('');
        setAmount(0);
        addTransaction(newTransition);

    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        required
                        value={text}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        ( Negative - Expense <br /> &nbsp;  Positive - Income )
                    </label>
                    <input
                        type="number"
                        required
                        value={amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value))}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn" onClick={onSubmit}>Add transaction</button>
                <div className="copyRight box_shadow">
                    <h5> Powered by Ahmed Raza </h5>
                    <a href="https://github.com/ahmedraza17260" rel="noopener noreferrer ">
                        {" "}
                        <h5> Copyright &copy; 2020 Ahmed Raza </h5>{" "}
                    </a>
                    <h5> All Right Reserved </h5>
                </div>
            </form>
        </>
    );
};
