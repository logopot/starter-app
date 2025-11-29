import styled from "styled-components";

export const MaintenanceSection = styled.section`
  padding: 100px 0;
  min-height: 50vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.background || "transparent"};

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid ${(props) => props.theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const ServiceTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;
