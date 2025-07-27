// import * as React from 'react';
// import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';

// import HomeIcon from "@mui/icons-material/Home";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
// import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
// import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
// import ReportIcon from '@mui/icons-material/Report';
// import AssignmentIcon from '@mui/icons-material/Assignment';

// const SideBar = () => {
//     const location = useLocation();
//     return (
//         <>
//             <React.Fragment>
//                 <ListItemButton component={Link} to="/">
//                     <ListItemIcon>
//                         <HomeIcon color={location.pathname === ("/" || "/Admin/dashboard") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Home" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/classes">
//                     <ListItemIcon>
//                         <ClassOutlinedIcon color={location.pathname.startsWith('/Admin/classes') ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Classes" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/subjects">
//                     <ListItemIcon>
//                         <AssignmentIcon color={location.pathname.startsWith("/Admin/subjects") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Subjects" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/teachers">
//                     <ListItemIcon>
//                         <SupervisorAccountOutlinedIcon color={location.pathname.startsWith("/Admin/teachers") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Teachers" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/students">
//                     <ListItemIcon>
//                         <PersonOutlineIcon color={location.pathname.startsWith("/Admin/students") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Students" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/notices">
//                     <ListItemIcon>
//                         <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Admin/notices") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Notices" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/complains">
//                     <ListItemIcon>
//                         <ReportIcon color={location.pathname.startsWith("/Admin/complains") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Complains" />
//                 </ListItemButton>
//             </React.Fragment>
//             <Divider sx={{ my: 1 }} />
//             <React.Fragment>
//                 <ListSubheader component="div" inset>
//                     User
//                 </ListSubheader>
//                 <ListItemButton component={Link} to="/Admin/profile">
//                     <ListItemIcon>
//                         <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Admin/profile") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Profile" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/logout">
//                     <ListItemIcon>
//                         <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Logout" />
//                 </ListItemButton>
//             </React.Fragment>
//         </>
//     )
// }

// export default SideBar
import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SideBar = () => {
  const location = useLocation();

  // A common style for active list items
  const activeStyle = {
    backgroundColor: "#2f195eff",
    color: "#fff",
    '& .MuiListItemIcon-root': {
      color: '#fff'
    },
    '&:hover': {
      backgroundColor: "#2f195eff"
    }
  };

  return (
    <>
      <React.Fragment>
        <ListItemButton
          component={Link}
          to="/"
          sx={location.pathname === "/" || location.pathname === "/Admin/dashboard" ? activeStyle : {}}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/Admin/classes"
          sx={location.pathname.startsWith("/Admin/classes") ? activeStyle : {}}
        >
          <ListItemIcon>
            <ClassOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Classes" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/Admin/subjects"
          sx={location.pathname.startsWith("/Admin/subjects") ? activeStyle : {}}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Subjects" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/Admin/teachers"
          sx={location.pathname.startsWith("/Admin/teachers") ? activeStyle : {}}
        >
          <ListItemIcon>
            <SupervisorAccountOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Teachers" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/Admin/students"
          sx={location.pathname.startsWith("/Admin/students") ? activeStyle : {}}
        >
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/Admin/notices"
          sx={location.pathname.startsWith("/Admin/notices") ? activeStyle : {}}
        >
          <ListItemIcon>
            <AnnouncementOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Notices" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/Admin/complains"
          sx={location.pathname.startsWith("/Admin/complains") ? activeStyle : {}}
        >
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Complains" />
        </ListItemButton>
      </React.Fragment>

      <Divider sx={{ my: 1 }} />

      <React.Fragment>
        <ListSubheader component="div" inset>
          User
        </ListSubheader>

        <ListItemButton
          component={Link}
          to="/Admin/profile"
          sx={location.pathname.startsWith("/Admin/profile") ? activeStyle : {}}
        >
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton
          component={Link}
          to="/logout"
          sx={location.pathname.startsWith("/logout") ? activeStyle : {}}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </React.Fragment>
    </>
  );
};

export default SideBar;
