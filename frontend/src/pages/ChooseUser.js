// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Grid,
//   Paper,
//   Box,
//   Container,
//   CircularProgress,
//   Backdrop,
// } from '@mui/material';
// import { AccountCircle, School, Group } from '@mui/icons-material';
// import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/userRelated/userHandle';
// import Popup from '../components/Popup';

// const ChooseUser = ({ visitor }) => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const password = "zxc"

//   const { status, currentUser, currentRole } = useSelector(state => state.user);;

//   const [loader, setLoader] = useState(false)
//   const [showPopup, setShowPopup] = useState(false);
//   const [message, setMessage] = useState("");

//   const navigateHandler = (user) => {
//     if (user === "Admin") {
//       if (visitor === "guest") {
//         const email = "yogendra@12"
//         const fields = { email, password }
//         setLoader(true)
//         dispatch(loginUser(fields, user))
//       }
//       else {
//         navigate('/Adminlogin');
//       }
//     }

//     else if (user === "Student") {
//       if (visitor === "guest") {
//         const rollNum = "1"
//         const studentName = "Areesha"
//         const fields = { rollNum, studentName, password }
//         setLoader(true)
//         dispatch(loginUser(fields, user))
//       }
//       else {
//         navigate('/Studentlogin');
//       }
//     }

//     else if (user === "Teacher") {
//       if (visitor === "guest") {
//         const email = "tony@12"
//         const fields = { email, password }
//         setLoader(true)
//         dispatch(loginUser(fields, user))
//       }
//       else {
//         navigate('/Teacherlogin');
//       }
//     }
//   }

//   useEffect(() => {
//     if (status === 'success' || currentUser !== null) {
//       if (currentRole === 'Admin') {
//         navigate('/Admin/dashboard');
//       }
//       else if (currentRole === 'Student') {
//         navigate('/Student/dashboard');
//       } else if (currentRole === 'Teacher') {
//         navigate('/Teacher/dashboard');
//       }
//     }
//     else if (status === 'error') {
//       setLoader(false)
//       setMessage("Network Error")
//       setShowPopup(true)
//     }
//   }, [status, currentRole, navigate, currentUser]);

//   return (
//     <StyledContainer>
//       <Container>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <div onClick={() => navigateHandler("Admin")}>
//               <StyledPaper elevation={3} style={{background:"#2f195eff",
//     color:"white"}}>
//                 <Box mb={2}>
//                   <AccountCircle fontSize="large" />
//                 </Box>
//                 <StyledTypography>
//                   Admin
//                 </StyledTypography>
//                 Login as an administrator to access the dashboard to manage app data.
//               </StyledPaper>
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <StyledPaper elevation={3} style={{background:"#2f195eff",
//     color:"white"}} >
//               <div onClick={() => navigateHandler("Student")}>
//                 <Box mb={2}>
//                   <School fontSize="large" />
//                 </Box>
//                 <StyledTypography>
//                   Student
//                 </StyledTypography>
//                 Login as a student to explore course materials and assignments.
//               </div>
//             </StyledPaper>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <StyledPaper elevation={3} style={{background:"#2f195eff",
//     color:"white"}}>
//               <div onClick={() => navigateHandler("Teacher")}>
//                 <Box mb={2}>
//                   <Group fontSize="large" />
//                 </Box>
//                 <StyledTypography>
//                   Teacher
//                 </StyledTypography>
//                 Login as a teacher to create courses, assignments, and track student progress.
//               </div>
//             </StyledPaper>
//           </Grid>
//         </Grid>
//       </Container>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={loader}
//       >
//         <CircularProgress color="inherit" />
//         Please Wait
//       </Backdrop>
//       <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
//     </StyledContainer>
//   );
// };

// export default ChooseUser;

// const StyledContainer = styled.div`
//   // background: linear-gradient(to bottom, #411d70, #19118b);
//   height: 120vh;
//   display: flex;
//   justify-content: center;
//   padding: 2rem;
// `;

// const StyledPaper = styled(Paper)`
//   padding: 20px;
//   text-align: center;
//   background:#2f195eff;
//     color:white;
//    cursor:pointer;
//   &:hover {
//     background:#fff; 
//   color:#2f195eff;
//   }
// `;



// const StyledTypography = styled.h2`
//   margin-bottom: 10px;
// `;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';
import backgroundImage from '../assets/okaraucp.jpeg'; // ✅ Import background image

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = "zxc";

  const { status, currentUser, currentRole } = useSelector(state => state.user);

  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const email = "yogendra@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1";
        const studentName = "Areesha";
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <CenteredBox>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div onClick={() => navigateHandler("Admin")}>
                <StyledPaper elevation={3} style={{ background: "#2f195eff", color:"white"}}>
                  <Box mb={2}>
                    <AccountCircle fontSize="large" />
                  </Box>
                  <StyledTypography>Admin</StyledTypography>
                  Login as an administrator to access the dashboard to manage app data.
                </StyledPaper>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div onClick={() => navigateHandler("Student")}>
                <StyledPaper elevation={3} style={{ background: "#2f195eff", color:"white"}}>
                  <Box mb={2}>
                    <School fontSize="large" />
                  </Box>
                  <StyledTypography>Student</StyledTypography>
                  Login as a student to explore course materials and assignments.
                </StyledPaper>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div onClick={() => navigateHandler("Teacher")}>
                <StyledPaper elevation={3} style={{ background: "#2f195eff", color:"white"}}>
                  <Box mb={2}>
                    <Group fontSize="large" />
                  </Box>
                  <StyledTypography>Teacher</StyledTypography>
                  Login as a teacher to create courses, assignments, and track student progress.
                </StyledPaper>
              </div>
            </Grid>
          </Grid>
        </Container>
      </CenteredBox>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>

      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

// 🔷 Styled Components

const StyledContainer = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* dark overlay */
    z-index: -1;
  }
`;

const CenteredBox = styled(Box)`
  width: 100%;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background: #2f195eff;
  color: white;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #2f195eff;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
