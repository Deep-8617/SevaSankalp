import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import backgroundImg from './health.png'; // Import the background image
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Welcome to SevaSankalp! I am SevaBot, your virtual assistant. Our company was founded in 2023 by five MCA students with a mission to provide excellent healthcare services. How can I assist you today?' }
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
        
        //Add more predefined questions and answers here
        
        'hi': 'Hello! How can I help you today?',
        'hello': 'Hi there! What can I assist you with?',
        'payment': 'We accept cash, credit/debit cards, and most major insurance plans.',
        'availability': 'Our working hours are 9 AM to 5 PM, Monday to Friday.',
        'hours': 'Our working hours are 9 AM to 5 PM, Monday to Friday.',
        'location': 'We are located at 123 Main Street, Springfield.',
        'services': 'We offer general checkups, dental care, pediatric care, and more.',
        'book': 'You can book an appointment by calling us at (123) 456-7890 or via our website.',
        'emergency': 'Yes, we have emergency services available 24/7.',
        'insurance': 'We accept a variety of insurances including Aetna, Blue Cross Blue Shield, and Cigna.',
        'records': 'You can request your medical records by contacting our front desk.',
        'telemedicine': 'Yes, we offer telemedicine services. You can schedule an online consultation through our website.',
        'refill': 'Yes, you can request a prescription refill by calling us or through our patient portal.',
        'covid': 'We follow all CDC guidelines, including regular sanitization, mandatory masks, and social distancing.',
        'vaccinations': 'Yes, we offer a range of vaccinations including flu shots and childhood immunizations.',
        'prepare': 'Please bring your ID, insurance card, and a list of any medications you are currently taking.',
        'cancel': 'Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment.',
        'pediatric': 'Yes, we have a dedicated pediatric department for children’s healthcare needs.',
        'checkup': 'It is recommended to have a general checkup once a year.',
        'mental': 'Yes, we have mental health professionals on staff to assist with various mental health concerns.',
        'diet': 'Yes, our dietitians can provide personalized diet and nutrition advice.',
        'emergency': 'In case of a medical emergency, please call 911 or go to the nearest emergency room.',
        'specialists': 'Yes, we have a range of specialists including cardiologists, dermatologists, and orthopedic surgeons.',
        'doctor': 'We have a team of experienced doctors ready to assist you.',
        'SevaSankalp': 'Welcome to SevaSankalp! How can we assist you today?',
        'new patients': 'Yes, we are currently accepting new patients.',
        'walk-in': 'Yes, we offer walk-in appointments during our working hours.',
        'referral': 'Yes, our doctors can provide referrals to specialists if needed.',
        'portal': 'You can access your patient portal through our website with your login credentials.',
        'lab': 'Yes, we have an in-house lab for various tests.',
        'customer service': 'You can reach our customer service at (123) 456-7890 or via email at support@sevasankalp.com.',
        'parking': 'Yes, we have ample parking available for our patients.',
        'senior discount': 'Yes, we offer discounts for senior citizens. Please ask at the front desk for more details.',
        'home visit': 'Yes, we offer home visit services for patients who are unable to come to the clinic.',
        'bill pay': 'Yes, you can pay your bill online through our website.',
        'privacy': 'Our privacy policy is available on our website. We are committed to protecting your personal information.',
        'feedback': 'You can provide feedback through our website or by speaking to our front desk staff.',
        'cosmetic': 'Yes, we offer a range of cosmetic procedures including Botox and fillers.',
        'second opinion': 'Yes, our doctors are available for second opinion consultations.',
        'pharmacy': 'Yes, we have an onsite pharmacy for your convenience.',
        'languages': 'Our staff speaks multiple languages including English, Spanish, and French.',
        'update info': 'You can update your contact information through the patient portal or by contacting our front desk.',
        'fertility': 'Yes, we offer a range of fertility treatments and consultations.',
        'transfer records': 'You can transfer your medical records by filling out a request form available at our front desk.',
        'holiday hours': 'Our holiday hours vary. Please check our website or contact us for more information.',
        'specific doctor': 'Yes, you can request a specific doctor when scheduling your appointment.',
        'prenatal': 'Yes, we offer comprehensive prenatal care for expecting mothers.',
        'tour': 'Yes, we offer facility tours upon request. Please contact us to schedule a tour.',
        'job apply': 'You can apply for a job at SevaSankalp through our careers page on the website.',
        'newsletter': 'Yes, you can sign up for our newsletter through our website to stay updated on the latest news and events.',
        'first appointment': 'Please bring your ID, insurance card, and any relevant medical records to your first appointment.',
        'wheelchair': 'Yes, our facility is fully wheelchair accessible.',
        'no insurance': 'Yes, we offer self-pay options for patients without insurance.',
        'events': 'You can learn about our upcoming events by visiting our website or following us on social media.',
        'dental': 'Yes, we offer a range of dental services including cleanings, fillings, and more.',
        'reschedule': 'You can reschedule your appointment by calling us or through our website.',
        'weight': 'Yes, we offer personalized weight management programs.',
        'loyalty': 'Yes, we offer a patient loyalty program with various benefits. Please ask at the front desk for more details.',
        'billing': 'For billing inquiries, please contact our billing department at (123) 456-7890.',
        'feedback': 'We value your feedback. Please fill out a feedback form on our website or contact our front desk.',
        'opening hours': 'Our clinic is open from 9 AM to 5 PM, Monday to Friday.',
        'discounts': 'We offer various discounts for seniors and returning patients. Please inquire at our front desk.',
        'appointment': 'Appointments can be booked through our website or by calling us at (123) 456-7890.',
        'emergency contact': 'In an emergency, call 911 or visit the nearest hospital.',
        'medication': 'Please contact our pharmacy for medication inquiries and refills.',
        'specialist appointment': 'Specialist appointments can be scheduled through a referral from our primary care doctors.',
        'insurance plans': 'We accept a wide range of insurance plans. Please call us to confirm your coverage.',
        'online payment': 'You can pay your bills online through our secure payment portal.',
        'medical advice': 'For medical advice, please schedule an appointment with one of our doctors.',
        'children care': 'Our pediatric department offers comprehensive care for children of all ages.',
        'mental health': 'We have specialists available for mental health counseling and treatment.',
        'scheduling': 'Scheduling an appointment is easy via our website or by calling our office.',
        'test results': 'Test results are available through our patient portal or by contacting our office.',
        'procedure costs': 'Please contact our billing department for information on procedure costs.',
        'flu shots': 'Flu shots are available. Please schedule an appointment or walk in during our clinic hours.',
        'telehealth': 'Telehealth appointments are available for your convenience. Book through our website.',
        'dietitian': 'Our dietitians can help with personalized nutrition plans and advice.',
        'urgent care': 'We provide urgent care services for non-life-threatening conditions.',
        'referrals': 'Our doctors can provide referrals to specialists as needed.',
        'parking info': 'We offer free parking for all our patients and visitors.',
        'immunizations': 'We provide a full range of immunizations for children and adults.',
        'wellness programs': 'Join our wellness programs for comprehensive health management.',
        'contact info': 'Update your contact information through our patient portal or by calling us.',
        'job openings': 'Check our website for current job openings and application instructions.',
        'insurance coverage': 'Verify your insurance coverage by calling our office before your visit.',
        'patient support': 'Our patient support team is here to assist you with any questions or concerns.',
        'health tips': 'Follow us on social media for regular health tips and updates.',
        'after hours': 'For after-hours care, please visit our partner urgent care center or call 911.',
        'test scheduling': 'Schedule your lab tests through our patient portal or by calling our office.',
        'online consultation': 'Book an online consultation with our doctors through our telemedicine portal.',
        'health records': 'Access your health records anytime through our secure patient portal.',
        'clinic policies': 'Please review our clinic policies on our website for more information.',
        'community events': 'Join our community events for health education and wellness activities.',
        'treatment options': 'Discuss treatment options with our specialists during your consultation.',
        'well-child visits': 'Regular well-child visits are important for monitoring your child’s health and development.'
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleUserMessage = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            const inputElement = document.querySelector('.chatbot input[type="text"]');
            const userMessage = inputElement.value.toLowerCase().trim();
            if (userMessage !== '') {
                setMessages([...messages, { from: 'user', text: userMessage }]);
                inputElement.value = '';

                let botResponse = 'Sorry, I do not understand.';
                for (const [key, value] of Object.entries(predefinedQA)) {
                    if (userMessage.includes(key)) {
                        botResponse = value;
                        break;
                    }
                }

                setMessages([...messages, { from: 'user', text: userMessage }, { from: 'bot', text: botResponse }]);
            }
        }
    };

    return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`} style={{ backgroundImage: `url(${backgroundImg})`, opacity: '0.9' }}>
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
                <div className="input-container">
                    <input type="text" placeholder="Type your message..." onKeyDown={handleUserMessage} />
                    <button className="send-button" onClick={handleUserMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        )}
    </div>
);

    
};

export default Chatbot;
