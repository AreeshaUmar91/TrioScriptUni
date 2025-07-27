
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/okaraucp.jpeg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
  return (
    <StyledContainer maxWidth={false}>
      <ContentWrapper>
        <StyledTitle style={{color: "#e0dee4ff", borderColor: "#2f195eff", }}>
          Welcome to TrioScript University Management System
       
       
        </StyledTitle>

        <StyledText style={{ color: "#edecf0ff", borderColor: "#2f195eff" }}>
          Streamline TrioScript management, class organization, and add students and faculty.
          Seamlessly track attendance, assess performance, and provide feedback.
          Access records, view marks, and communicate effortlessly.
        </StyledText>

        <StyledBox>
          <StyledLink to="/choose">
            <LightPurpleButton variant="contained" fullWidth style={{ background: "#2f195eff" }}>
              Login
            </LightPurpleButton>
          </StyledLink>

          <StyledLink to="/chooseasguest">
            <Button
              variant="outlined"
              fullWidth
              sx={{ mt: 2, mb: 3, color: "#2f195eff", borderColor: "#2f195eff",background:"#ffff" }}
            >
              Login as Guest
            </Button>
          </StyledLink>

          <StyledText style={{ color: "#eceaedff" }}>
            Don't have an account?{' '}
            <Link to="/Adminregister" style={{ color: "#2f195eff" }}>
              Sign up
            </Link>
          </StyledText>
        </StyledBox>
      </ContentWrapper>
    </StyledContainer>
  );
};

export default Homepage;

// ---------- styled-components ----------

const StyledContainer = styled(Container)`
  && {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end; /* content moves to bottom */
    background: url(${Students}) center/cover no-repeat fixed;
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
//   background: rgba(255, 255, 255, 0.9); /* Clear white background */
  padding: 30px 20px;
  border-radius: 12px;
  margin-bottom: 40px; /* space from bottom */
  width: 90%;
  max-width: 600px;
  backdrop-filter: blur(1px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px 0;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #ede7e7ff;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StyledText = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
