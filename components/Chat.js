import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../pages/firebase";
import { doc, serverTimestamp, getDoc, addDoc, setDoc, collection, getDocs, docs, orderBy, query, limit } from "firebase/firestore";
import { useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAnalytics, logEvent } from "firebase/analytics";
import styles from "../styles/Chat.module.css";
import { useRef } from "react";


function Chat() {


    return (
        <div className={styles.Chat}>
            <header className={styles.Chat.header}>
                <h1>Chat</h1>

            </header>

            <section className={styles.Chat.section}>
                <ChatRoom />
            </section>
        </div>
    )
}

function ChatRoom() {
    const dummy = useRef();
    const messageRef = collection(firestore, "messages");
    const q = query(messageRef, orderBy("createdAt"), limit(25));
    const [messages] = useCollectionData(q, { idField: "id" });
    const [formValue, setFormValue] = useState("");



    const sendMessage = async (e) => {
        const analytics = getAnalytics();
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await addDoc(collection(firestore, "messages"), {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL
        });

        setFormValue("");
        dummy.current.scrollIntoView({ behavior: 'smooth' });
        logEvent(analytics, 'send_message', { user_id: uid });
    }

    return (
        <div>
            <header className={styles.header}>Chat</header>
            <div className={styles.main}>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

                <span ref={dummy}></span>
            </div>

            <form className={styles.form} onSubmit={sendMessage}>
                <input className={styles.input} value={formValue} onChange={(e) => setFormValue(e.target.value)} />

                <button className={styles.button} type="submit">Send</button>
            </form>
        </div>
    );
}



function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

    return (
        <div className={`${styles.message} ${styles[messageClass]}`}>
            <img className={styles.img} src={photoURL} />
            <p className={styles.p}> {text} </p>
        </div>
    )
}


export default Chat;