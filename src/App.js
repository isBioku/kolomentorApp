import logo from './logo.svg';
import kolomentor from './kolomentor.png';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from './navigation';
import MenteeLogin from './menteeLogin'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './homePage'
import MenteeSignup from './menteeSignUp';
import MentorSgnUpCredentials from './mentorSignUpCredentials';
import MentorProfile from "./mentorProfile";
import Mentor_Profile from "./mentorProfile";


function App() {
    return (
        <Router>
            <div className='home'>
                <Navigation />
            </div>
            <Routes>
                <Route exact path='/' element = {<HomePage/>}/>
                <Route exact path='/menteeLogin' element = {<MenteeLogin/>}/>
                <Route exact path='/menteeSignup' element = {<MenteeSignup/>}/>
                <Route exact path='/mentorProfile' element = {<MentorProfile/>}/>
                <Route exact path='/mentorCredentials' element = {<MentorSgnUpCredentials/>}/>
                <Route exact path='/profileOverview' element = {<Mentor_Profile/>}/>
            </Routes>
        </Router>
    );
}


export default App;

// import React, {useEffect, useState} from 'react';
// import {
//     Layout,
//     Menu,
//     Table
// } from 'antd';
//
// const [mentors, setMentors ] = useState([]);
//
//
//
//     const fetchMentors  =()=>
//         getAllMentors()
//             .then(res => res.json())
//             .then(data => setMentors(data))
//
//
//
// import {
//     AppstoreOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     ShopOutlined,
//     TeamOutlined,
//     UploadOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
// } from '@ant-design/icons';
// import {getAllMentors} from "./client";
//
//
// const { Header, Content, Footer, Sider } = Layout;
// const items = [
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     AppstoreOutlined,
//     TeamOutlined,
//     ShopOutlined,
// ].map((icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
// }));
//
// useEffect(() => {     fetchMentors();
// },[]);
//
// const renderStudents = () => {
//     if (mentors.length <=0 ) {
//         return "No data to be displayed "
//     }
//
//     return <Table dataSource={mentors} columns={columns} />;
// }
//
// const columns = [
//     {
//         title: 'FirstName',
//         dataIndex: 'firstName',
//         key: 'firstName',
//     },
//     {
//         title: 'LastName ',
//         dataIndex: 'lastName',
//         key: 'lastName',
//     },
//     {
//         title: 'Gender',
//         dataIndex: 'gender',
//         key: 'gender',
//     },
//     {
//         title: 'Profession',
//         dataIndex: 'profession',
//         key: 'profession',
//     },
//     {
//         title: 'Job Title',
//         dataIndex: 'jobTitle',
//         key: 'jobTitle',
//     },
//     {
//         title: 'Place of work',
//         dataIndex: 'place_of_work',
//         key: 'place_of_work',
//     },
//     {
//         title: 'place_of_work',
//         dataIndex: 'profession',
//         key: 'profession',
//     },
// ];
//
// const App = () => (
//     <Layout hasSider>
//         <Sider
//             style={{
//                 overflow: 'auto',
//                 height: '100vh',
//                 position: 'fixed',
//                 left: 0,
//                 top: 0,
//                 bottom: 0,
//             }}
//         >
//             <div className="logo" />
//             <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
//         </Sider>
//         <Layout
//             className="site-layout"
//             style={{
//                 marginLeft: 200,
//             }}
//         >
//             <Header
//                 className="site-layout-background"
//                 style={{
//                     padding: 0,
//                 }}
//             />
//             <Content
//                 style={{
//                     margin: '24px 16px 0',
//                     overflow: 'initial',
//                 }}
//             >
//                 <div
//                     className="site-layout-background"
//                     style={{
//                         padding: 24,
//                         textAlign: 'center',
//                     }}
//                 >
//                     <p>long content</p>
//                     {
//                         // indicates very long content
//                         Array.from(
//                             {
//                                 length: 100,
//                             },
//                             (_, index) => (
//                                 <React.Fragment key={index}>
//                                     {index % 20 === 0 && index ? 'more' : '...'}
//
//                                     <br />
//
//
//                                 </React.Fragment>
//                             ),
//                         )
//                     }
//                 </div>
//             </Content>
//             <Footer
//                 style={{
//                     textAlign: 'center',
//                 }}
//             >
//                 Ant Design ©2018 Created by Ant UED
//             </Footer>
//         </Layout>
//     </Layout>
// );
//
// export default App;