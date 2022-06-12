import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tabs.scss';
import { TabContext } from '../../App';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}








export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };



    const [science, setScience] = React.useState([]);
    const [arts, setArts] = React.useState([]);
    const [commerce, setCommerce] = React.useState([]);
    const [tabData] = React.useContext(TabContext);
    React.useEffect(() => {
        setScience(tabData.slice(0, 12));
        setArts(tabData.slice(0, 14));
        setCommerce(tabData.slice(0, 9));
    }, [tabData])



    return (
        <Box sx={{ bgcolor: 'background.paper', width: '1280px', }} className="tabs">
            <AppBar position="static" className='tabs-bar'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab className="tab-1" label="বিজ্ঞান" {...a11yProps(0)} />
                    <Tab className="tab-1" label="ব্যবসায় শিক্ষা" {...a11yProps(1)} />
                    <Tab className="tab-1" label="মানবিক" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel className="tab-body-main" value={value} index={0} dir={theme.direction}>
                    <div className="tab-body">
                        {
                            science.map(tb => <TabDetails key={tb.id} data={tb} />)
                        }
                    </div>

                </TabPanel>
                <TabPanel className="tab-body-main" value={value} index={1} dir={theme.direction}>
                    <div className="tab-body">
                        {
                            arts.map(tb => <TabDetails key={tb.id} data={tb} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel className="tab-body-main" value={value} index={2} dir={theme.direction}>
                    <div className="tab-body">
                        {
                            commerce.map(tb => <TabDetails key={tb.id} data={tb} />)
                        }
                    </div>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}





const TabDetails = ({ data }) => {
    const { title, img,color } = data;
    return (
        <div className="tabDetails">
            <img className="tab-img" src={img} alt="" style={{background: `${color}`}} />
            {title}
        </div>
    );
};
