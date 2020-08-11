import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ITrans } from "../types/TypeCast";
import axios from 'axios';
import firebase from 'firebase';
import { permissionToReceiveNotifications } from './../push-notification';


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

        if (text.length < 3 || text.length > 20) {
            alert("Please Enter Some Text");
            return false;
        }
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

        setTimeout(sendNotification, 5000);

    };

    const NotificationButton = () => (
        <button className="Button" onClick={permissionToReceiveNotifications} >
            Allow Notifications ?
        </button>
    );

    async function sendNotification() {
        const messaging = firebase.messaging();
        const token = await messaging.getToken();
        console.log('TOKEN in Component: ', token);
        const response = await axios.post(
            'https://fcm.googleapis.com/fcm/send',
            {
                notification: {
                    title: "Expense Tracker PWA By Ahmed Raza",
                    body: "",
                    click_action: "",
                    icon: '',
                },
                "to": token
            },
            { headers: { 'Content-Type': 'application/json', 'Authorization': 'key=AAAAatDjAFI:APA91bHtPg63Cjow-epJylmEDat4coQLbY_p0luqVRjYT4Rlfy0eFH2CMP386gpKyUT4KF_oQlVgrPht9PQVnJ1WIVzc5KHo_MWzja-tRkC1QsMnqHso6tc4bBuHU8brfcXbrbpcvuTV' } }
        );
        console.log('Response: ', response);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        required
                        type="text"
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
                        required
                        type="number"
                        value={amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseInt(e.target.value))}
                        placeholder="Enter amount..."
                    />
                </div>
                <NotificationButton />
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
