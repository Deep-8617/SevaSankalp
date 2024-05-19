import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Welcome to SevaSankalp! I am your SevaBot, How can I assist you today?' }
    ]);

    const predefinedQA = {
        'what are your working hours': 'Our working hours are 9 AM to 5 PM, Monday to Friday.',
        'where is your clinic located': 'We are located at 123 Main Street, Springfield.',
        'what services do you offer': 'We offer general checkups, dental care, pediatric care, and more.',
        'how can i book an appointment': 'You can book an appointment by calling us at (123) 456-7890 or via our website.',
        'do you offer emergency services': 'Yes, we have emergency services available 24/7.',
        'what insurance do you accept': 'We accept a variety of insurances including Aetna, Blue Cross Blue Shield, and Cigna.',
        'how can i get my medical records': 'You can request your medical records by contacting our front desk.',
        'do you offer telemedicine services': 'Yes, we offer telemedicine services. You can schedule an online consultation through our website.',
        'can i get a prescription refill': 'Yes, you can request a prescription refill by calling us or through our patient portal.',
        'what covid-19 precautions are in place': 'We follow all CDC guidelines, including regular sanitization, mandatory masks, and social distancing.',
        'do you offer vaccinations': 'Yes, we offer a range of vaccinations including flu shots and childhood immunizations.',
        'how can i prepare for my appointment': 'Please bring your ID, insurance card, and a list of any medications you are currently taking.',
        'what is your cancellation policy': 'Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.',
        'do you have pediatric services': 'Yes, we have a dedicated pediatric department for children’s healthcare needs.',
        'what payment methods do you accept': 'We accept cash, credit/debit cards, and most major insurance plans.',
        'how often should i have a general checkup': 'It is recommended to have a general checkup once a year.',
        'can you help with mental health issues': 'Yes, we have mental health professionals on staff to assist with various mental health concerns.',
        'do you offer diet and nutrition advice': 'Yes, our dietitians can provide personalized diet and nutrition advice.',
        'what should i do in case of a medical emergency': 'In case of a medical emergency, please call 911 or go to the nearest emergency room.',
        'do you have specialists available': 'Yes, we have a range of specialists including cardiologists, dermatologists, and orthopedic surgeons.',
        // Add more predefined questions and answers here
    };

    const quickReplies = [
        { text: 'Payment', key: 'what payment methods do you accept' },
        { text: 'Availability', key: 'what are your working hours' },
        { text: 'Services', key: 'what services do you offer' },
        { text: 'Appointment', key: 'how can i book an appointment' },
        { text: 'Insurance', key: 'what insurance do you accept' }
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleUserMessage = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            const inputElement = document.querySelector('.chatbot input[type="text"]');
            const userMessage = inputElement.value.toLowerCase().trim();
            if (userMessage !== '') {
                sendMessage(userMessage);
                inputElement.value = '';
            }
        }
    };

    const handleQuickReplyClick = (message) => {
        sendMessage(message, true);
    };

    const sendMessage = (userMessage, isQuickReply = false) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { from: 'user', text: userMessage }
        ]);

        let botResponse = 'Sorry, I do not understand.';
        for (const [key, value] of Object.entries(predefinedQA)) {
            if (userMessage.includes(key)) {
                botResponse = value;
                break;
            }
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            { from: 'bot', text: botResponse }
        ]);
    };

    return (
        <div className={`chatbot ${isOpen ? 'open' : ''}`} style={{opacity: '0.9'}}>
            <div className="chatbot-icon" onClick={handleToggle}>
                <FontAwesomeIcon icon={faComments} size="2x" />
            </div>
            {isOpen && (
                <div className="chatbot-body">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.from}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="quick-replies">
                        {quickReplies.map((reply, index) => (
                            <button key={index} className="quick-reply-button" onClick={() => handleQuickReplyClick(reply.key)}>
                                {reply.text}
                            </button>
                        ))}
                    </div>
                    <div className="input-container">
                        <button className="send-button" onClick={handleUserMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                        <input type="text" placeholder="Type your message..." onKeyDown={handleUserMessage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
