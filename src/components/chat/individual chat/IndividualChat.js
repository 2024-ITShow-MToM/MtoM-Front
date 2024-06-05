import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/IndividualChat.module.css';

import Header from './Header';
import ChattingBox from './ChattingBox';
import SendInput from './SendInput';

function IndividualChat() {
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const senderId = localStorage.getItem("userId");

    useEffect(() => {
        const socket = new SockJS(`${process.env.REACT_APP_HOST}/ws`);
        const client = Stomp.over(socket);
        
        client.connect({}, frame => {
            console.log('Connected: ' + frame);
            client.subscribe('/topic/messages', message => {
                showMessage(JSON.parse(message.body));
            });
        });

        setStompClient(client);

        return () => {
            if (client) {
                client.disconnect();
            }
        };
    }, []);

    const showMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
    };

    var receiverId = "bhark065"
    const sendMessage = (text) => {
        const message = {
            senderId: senderId,
            receiverId: receiverId,
            message: text,
            timestamp: new Date().toISOString()
        };

        if (stompClient) {
            stompClient.send("/app/sendMessage", {}, JSON.stringify(message));
        }
    };

    const loadMessage = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/messages`, {
                params: {
                    senderId: senderId,
                    receiverId: receiverId
                }
            });
            if (response.status === 200) {
                console.log("채팅 서버 연결 성공");
                setMessages(response.data);
            } else {
                console.log("채팅 서버 연결 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }
    
    useEffect(() => {
        loadMessage();
    }, []);

    const date = messages.length > 0 ? messages[0].timestamp.slice(0, 10) : '';
    return (
        <>
            <Header name='3413 최보람'/>
            <div className={styles['container']}>
                <ChattingBox date={date} messages={messages} userId={senderId} />
                <SendInput sendMessage={sendMessage} />
            </div>
        </>
    )
}

export default IndividualChat;