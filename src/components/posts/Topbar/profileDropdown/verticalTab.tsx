import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaFolder, FaShareAlt, FaLinkedin, FaFacebook, FaPinterest } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import AllProfiles from './allProfiles';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: object; // Add the sx property to the interface
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabProps = [
    { label: "ALL", icon: <IoMdListBox /> },
    { label: "Profiles", icon: <FaShareAlt /> },
    { label: "Profile Groups", icon: <FaFolder /> },
    { label: "LinkedIn", icon: <FaLinkedin /> },
    { label: "Facebook", icon: <FaFacebook /> },
    { label: "Pinterest", icon: <FaPinterest /> },
  ]

  return (
    <Box 
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450, width: "100%" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', justifyContent: "flex-start",minWidth:"200px"}}
      >
        {TabProps.map((tab, index) => (
          <Tab
            sx={{ justifyContent: "flex-start", width: "100%", height: 44, minHeight: 32 }}
            key={index}
            icon={tab.icon || undefined}
            iconPosition='start'
            label={tab.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      <TabPanel value={value} index={0} sx={{width: "400px",overFlowY:'auto',minWidth:"400px", backgroundColor: "red",boxShadow: "0px"}}>
        <AllProfiles />
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
