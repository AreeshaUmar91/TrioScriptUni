import { useState } from 'react';
import {
  CssBaseline,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Routes, Route, Navigate } from 'react-router-dom';

import TeacherSideBar from './TeacherSideBar';
import Logout from '../Logout';
import AccountMenu from '../../components/AccountMenu';
import { AppBar, Drawer } from '../../components/styles';

import TeacherHomePage from './TeacherHomePage';
import TeacherProfile from './TeacherProfile';
import TeacherComplain from './TeacherComplain';
import TeacherClassDetails from './TeacherClassDetails';
import TeacherViewStudent from './TeacherViewStudent';

import StudentAttendance from '../admin/studentRelated/StudentAttendance';
import StudentExamMarks from '../admin/studentRelated/StudentExamMarks';

const TeacherDashboard = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} position="absolute" sx={{ backgroundColor: "#2f195eff" }}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Teacher Dashboard
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={open ? styles.drawerStyled : styles.hideDrawer}
      >
        <Toolbar sx={styles.toolBarStyled}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <TeacherSideBar />
        </List>
      </Drawer>

      <Box component="main" sx={styles.boxStyled}>
        <Toolbar />
        <Routes>
          {/* Default route */}
          <Route path="/" element={<TeacherHomePage />} />
          <Route path="dashboard" element={<TeacherHomePage />} />
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="complain" element={<TeacherComplain />} />
          <Route path="class" element={<TeacherClassDetails />} />
          <Route path="class/student/:id" element={<TeacherViewStudent />} />
          <Route path="class/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
          <Route path="class/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />
          <Route path="logout" element={<Logout />} />
          {/* Catch all - redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default TeacherDashboard;

const styles = {
  boxStyled: {
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  toolBarStyled: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    px: [1],
  },
  drawerStyled: {
    display: 'flex',
  },
  hideDrawer: {
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
};
