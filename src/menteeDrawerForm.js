import {Drawer, Input, Col, Select, Form, Row, Button} from 'antd';
import {addNewMentor} from "./mentorClient";
import { successNotification, errorNotification } from "./notification";
import {Link} from "react-router-dom";
import React from "react";

const {Option} = Select;

function MenteeDrawerForm({showDrawer, setShowDrawer}) {
    const onCLose = () => setShowDrawer(false);

    const onFinish = mentor => {
        console.log(JSON.stringify(mentor, null, 2));
        addNewMentor(mentor)
            .then(() => {
                console.log("Added a new Mentor");
                onCLose()
                successNotification(
                    "Successfully Added",
                    `${mentor.name} was added to the Kolomentor`
                )
            } ).catch(err=> {
                console.log(err);
        })
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <>

        <Drawer
            title="Create new student"
            width={720}
            onClose={onCLose}
            visible={showDrawer}
            bodyStyle={{paddingTop: 50}}
            footer={
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button onClick={onCLose} style={{marginRight: 8}}>
                        Cancel
                    </Button>
                </div>
            }
        >
            <p className="kolomentor kolomentor-form h4">Mentee Registration</p>
            <Form layout="vertical"
                  onFinishFailed={onFinishFailed}
                  onFinish={onFinish}
                  hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="firstName"
                            label="First Name"
                            rules={[{required: true, message: 'Please enter student email'}]}
                        >
                            <Input placeholder="Please enter student email"/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="lastName"
                            label="Last Name"
                            rules={[{required: true, message: 'Please enter student last name'}]}
                        >
                            <Input placeholder="Please enter student last name"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[{required: true, message: 'Please enter gender'}]}
                        >
                            <Input placeholder="Please enter student gender"/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="profession"
                            label="Profession"
                            rules={[{required: true, message: 'Please enter profession'}]}
                        >
                            <Input placeholder="Please enter Profession"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="jobTitle"
                            label="Job Title"
                            rules={[{required: true, message: 'Please enter job title'}]}
                        >
                            <Input placeholder="Please enter student gender"/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="place_of_work"
                            label="Place of Work"
                            rules={[{required: true, message: 'Please enter place of work'}]}
                        >
                            <Input placeholder="Please enter student gender"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>

                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{required: true, message: 'Please enter email'}]}
                        >
                            <Input placeholder="Please enter student email"/>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{required: true, message: 'Please enter email'}]}
                        >
                            <Input placeholder="Please enter student email"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Register As Mentee
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>


            </Form>
        </Drawer>
    </>
}

export default MenteeDrawerForm;