import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import axios from 'axios';

import '../../../styles/common/Style.css';
import styles from '../../../styles/chat/individual chat/IndividualChat.module.css';

import Header from './Header';
import ChattingBox from './ChattingBox';
import SendInput from './SendInput';
import { ChattingContext } from '../ChattingProvider';

function IndividualChat() {
    const { receiverId } = useContext(ChattingContext);
    const [messages, setMessages] = useState([]);
    const [userData, setUserData] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const senderId = useSelector(state => state.userId);

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

    const User = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/api/users/${receiverId}`);
            if (response.status === 200) {
                console.log("회원 조회 성공");
                setUserData(response.data);
            } else {
                console.log("회원 조회 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }
    
    useEffect(() => {
        User();
        loadMessage();
    }, []);

    const date = messages.length > 0 ? messages[0].timestamp.slice(0, 10) : '';
    return (
        <>
            <Header name={`${userData.studentId} ${userData.name}`}/>
            <div className={styles['container']}>
                <ChattingBox date={date} messages={messages} userId={senderId} receiverId={receiverId} />
                <SendInput sendMessage={sendMessage} />
            </div>
        </>
    )
}

export default IndividualChat;