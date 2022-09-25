import React, {useEffect, useState} from "react";
import {getAllMentors} from "./mentorClient";
import {Button, Empty, Spin, Table} from "antd"
import {LoadingOutlined} from "@ant-design/icons";
import MenteeDrawerForm from "./menteeDrawerForm";


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const ListOfMentees = () => {
    const [mentors, setMentors ] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [showDrawer, setShowDrawer] = useState(false);


    const fetchMentors  =()=>
        getAllMentors()
            .then(res => res.json())
            .then(data => {
                setMentors(data)
                setIsLoading(false);
            })



    useEffect(() => {
        fetchMentors()
    },[])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Profession',
            dataIndex: 'profession',
            key: 'profession',
        },
        {
            title: 'Job Title',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
        },
        {
            title: 'Place of Work',
            dataIndex: 'place_of_work',
            key: 'place_of_work',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];

    if (isLoading) {
        return <Spin indicator={antIcon}/>
    }
    if (mentors.length <=0) {
        return  <Empty />
    } else{
        return <>
            <MenteeDrawerForm
                showDrawer = {showDrawer}
                setShowDrawer = {setShowDrawer}
            />

            <Table
                dataSource={mentors}
                columns={columns} pagination={{ pageSize: 50 }}
                scroll={{ y: 360 }}
                title={() => <Button
                    onClick={() => setShowDrawer(!showDrawer)}
                    type="primary" danger ghost>
                    Add New Mentor</Button>}
            />
        </>


            }

}

export default ListOfMentees;