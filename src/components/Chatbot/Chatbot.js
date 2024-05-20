import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import stringSimilarity from 'string-similarity';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const initialMessage = { from: 'bot', text: 'Welcome to SevaSankalp! I am your SevaBot, How can I assist you today?' };
    const [messages, setMessages] = useState([initialMessage]);
    const messagesEndRef = useRef(null);

    const predefinedQA = {
        'hi': 'how can i assist you?',
        'hello': 'how can i assist you?',
        'what is your name?': 'I am SevaBot',
        'what are your working hours': 'Our working hours are 9 AM to 5 PM, Monday to Friday.',
        'where is your clinic located': 'We are located at 123 Main Street, Springfield.',
        'what services do you offer': 'We offer general checkups, dental care, pediatric care, and more.',
        'how can i book an appointment': 'You can book an appointment by calling us at +91 8240607515 or via our website.',
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
        'what should i do in case of a medical emergency': 'In case of a medical emergency, please call us or go to our website to reach us.',
        'do you have specialists available': 'Yes, we have a range of specialists including cardiologists, dermatologists, and orthopedic surgeons.',
        'what are the common symptoms of Diabetes?': 'Common symptoms of diabetes may include increased thirst, frequent urination, fatigue, and blurred vision. However, it\'s essential to consult with a healthcare professional for an accurate diagnosis and treatment plan.',
    'how can I manage Diabetes at home?': 'To manage diabetes at home, you can monitor your blood sugar levels regularly, follow a healthy diet, exercise regularly, and take prescribed medications as directed by your doctor. It\'s crucial to follow your healthcare provider\'s recommendations for optimal care.',
    'what are the potential side effects of Metformin for Diabetes?': 'The potential side effects of Metformin for diabetes may include nausea, vomiting, diarrhea, and abdominal discomfort. Please consult with your healthcare provider for personalized advice and guidance.',
    'what are the risk factors for Heart Disease?': 'Risk factors for heart disease may include high blood pressure, high cholesterol, smoking, obesity, and lack of physical activity. Understanding these factors can help you take proactive steps to reduce your risk.',
    'how can I improve my cholesterol levels related to Heart Disease?': 'To improve cholesterol levels related to heart disease, you can follow a heart-healthy diet low in saturated and trans fats, exercise regularly, maintain a healthy weight, and avoid smoking. Additionally, consulting with a healthcare professional can provide personalized guidance.',
    'what are the symptoms of high blood pressure?': 'Symptoms of high blood pressure may include headache, dizziness, blurred vision, chest pain, and shortness of breath. However, high blood pressure is often asymptomatic, so it\'s essential to monitor your blood pressure regularly.',
    'how can I lower my blood pressure naturally?': 'To lower your blood pressure naturally, you can reduce sodium intake, eat a diet rich in fruits and vegetables, limit alcohol consumption, exercise regularly, and manage stress. However, it\'s essential to consult with a healthcare professional for personalized advice and guidance.',
    'what are the signs of a stroke?': 'Signs of a stroke may include sudden numbness or weakness in the face, arm, or leg, especially on one side of the body, confusion, trouble speaking or understanding speech, trouble seeing in one or both eyes, and severe headache with no known cause. If you or someone else experiences these symptoms, seek immediate medical attention.',
    'how can I prevent a stroke?': 'To prevent a stroke, you can maintain a healthy lifestyle by eating a balanced diet, exercising regularly, maintaining a healthy weight, not smoking, limiting alcohol consumption, and managing underlying health conditions such as high blood pressure, diabetes, and high cholesterol. Additionally, consult with your healthcare provider for personalized stroke prevention strategies.',
    'what are the symptoms of depression?': 'Symptoms of depression may include persistent sadness, feelings of hopelessness or emptiness, loss of interest or pleasure in activities once enjoyed, changes in appetite or weight, difficulty sleeping or oversleeping, fatigue, feelings of worthlessness or guilt, difficulty concentrating or making decisions, and thoughts of death or suicide. If you or someone you know experiences these symptoms, seek help from a healthcare professional.',
    'how can I support someone with depression?': 'To support someone with depression, you can listen to them without judgment, offer emotional support, encourage them to seek professional help, help them maintain a healthy lifestyle, and be patient and understanding. Additionally, educate yourself about depression and available treatment options.',
    'who created you?': 'Upayan and Deep.'

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

    const handleClearChat = () => {
        setMessages([initialMessage]);
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
        const messageKeys = Object.keys(predefinedQA);

        const matches = stringSimilarity.findBestMatch(userMessage, messageKeys);
        if (matches.bestMatch.rating > 0.4) {
            botResponse = predefinedQA[matches.bestMatch.target];
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            { from: 'bot', text: botResponse }
        ]);
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className={`chatbot ${isOpen ? 'open' : ''}`} style={{ opacity: '0.9' }} aria-live="polite">
            {!isOpen && (
                <div className="chatbot-icon" onClick={handleToggle} role="button" aria-label="Open chatbot">
                    <FontAwesomeIcon icon={faComments} size="2x" />
                </div>
            )}
            {isOpen && (
                <div className="chatbot-body">
                    <div className="chatbot-header">
                        <button className="close-button" onClick={handleToggle} aria-label="Close chatbot">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <button className="clear-button" onClick={handleClearChat} aria-label="Clear chat">
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.from}`}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="quick-replies">
                        {quickReplies.map((reply, index) => (
                            <button key={index} className="quick-reply-button" onClick={() => handleQuickReplyClick(reply.key)}>
                                {reply.text}
                            </button>
                        ))}
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Type your message..." onKeyDown={handleUserMessage} aria-label="Type your message here" />
                        <button className="send-button" onClick={handleUserMessage} aria-label="Send message">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
