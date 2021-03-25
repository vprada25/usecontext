import React, { useContext, useEffect } from "react";
import { Card, Col, Row } from 'antd';

import 'antd/dist/antd.css';


import UserContext from "../context/user/UserContext";

const UsersList = () => {
    const { Meta } = Card;

    const userContext = useContext(UserContext);

    useEffect(() => {
        userContext.getUser();
    }, []);

    return (

        <div className="site-card-wrapper">


            <Row gutter={16}>
                {userContext.users.length
                    ? userContext.users.map((user) => (
                        <Col span={8}>


                            <Card

                                key={user.id}
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={user.avatar} />}
                            >
                                <Meta title={user.first_name} description={user.email} />
                            </Card>


                        </Col>
                    ))
                    : null

                }
            </Row>
        </div>
       
    );
};

export default UsersList;
