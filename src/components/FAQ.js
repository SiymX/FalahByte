import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'react-collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = index => {
    setOpenIndexes(prevState =>
      prevState.includes(index)
        ? prevState.filter(i => i !== index)
        : [...prevState, index]
    );
  };

  const faqs = [
    {
      question: "What is Falah?",
      answer: {

        arabic: "(فلاح)",
        english: "Falah an Arabic word symbolizing success, embodies the core principle behind FalahByte."
      }
    },
    { question: "What services do you offer?", answer: "We offer a wide range of services including web development, SEO optimization, and marketing strategies." },
    { question: "How can I contact you?", answer: "You can contact us through the contact form on our website or by emailing contact@falahbyte.com." },
    { question: "Is there a social impact aspect to your services?", answer: "Absolutely! We understand the importance of giving back.  That's why we're committed to investing a portion of our revenue into initiatives that empower our community.  This could include anything from sponsoring local youth programs to supporting environmental causes.  By partnering with us, you're not just getting a great service, you're making a positive difference!" },
    { question: "What happens after my website is built?", answer: "We believe in empowering you! Once your website is launched, you'll have complete control to manage and update it yourself.  But if you prefer ongoing support, we offer affordable maintenance plans to keep your site running smoothly.  We also provide personalized training courses so you can learn to update your site with confidence.  Our goal is to be your long-term partner, not just a one-time service provider." },
    { question: "Struggling to reach your ideal customer?", answer: "We hear you! FalahByte specializes in crafting strategic marketing plans that target your ideal audience.  Let's connect and discuss how we can help you reach the right customers and achieve your business goals." },
  ];

  return (
    <FAQSection>
      <FAQTitle>FAQ</FAQTitle>
      {faqs.map((faq, index) => (
        <FAQItem key={index}>
          <FAQQuestion onClick={() => toggleFAQ(index)}>
            {faq.question}
            <FontAwesomeIcon icon={openIndexes.includes(index) ? faChevronUp : faChevronDown} />
          </FAQQuestion>
          <Collapse isOpened={openIndexes.includes(index)}>
            <FAQAnswer>
              {typeof faq.answer === 'string' ? (
                faq.answer
              ) : (
                <>
                  <ArabicWord>{faq.answer.arabic}</ArabicWord> {faq.answer.english}
                </>
              )}
            </FAQAnswer>
          </Collapse>
        </FAQItem>
      ))}
    </FAQSection>
  );
};

const FAQSection = styled.section`
  max-width: 700px;  
  margin: 0 auto;
  padding: 1.5rem;  
  text-align: left;
`;

const FAQTitle = styled.h2`
  font-family: 'Sora', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const FAQItem = styled.div`
  margin-bottom: 0.5rem; 
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;  
  font-weight: bold;
  cursor: pointer;
  background-color: #fff;
  padding: 0.75rem;  
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FAQAnswer = styled.div`
  padding: 0.75rem;  
  background-color: #fff;
  border-radius: 5px;
  font-family: "Work Sans", sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ArabicWord = styled.span`
  font-family: "Amiri Quran", serif;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

export default FAQ;
