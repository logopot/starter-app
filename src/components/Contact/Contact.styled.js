import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
  text-align: center;
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const ContactDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const PhoneContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: inline-block;
  min-width: 300px;
`;

export const PhoneLabel = styled.strong`
  display: block;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #333;
`;

export const PhoneNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
`;
