import React, { useContext, useEffect } from "react";
import { Card, Col, Row, Tooltip, Image } from 'antd';

import 'antd/dist/antd.css';


import UserContext from "../context/user/UserContext";


const UsersList = () => {
    const { Meta } = Card;
    const text = <span>Respuesta desde la API</span>;


    const userContext = useContext(UserContext);

    useEffect(() => {
        userContext.getUser();
    }, []);

    return (

        <div className="site-card-wrapper">


            <Row gutter={16} >
                {userContext.users.length
                    ? userContext.users.map((user) => (
                        <Col xs sm md lg >



                            <Card style='{padding: 15px}'

                                key={user.id}
                                hoverable
                                style={{
                                    width: 200,
                                    height: 300
                                }}
                                cover={<img alt="example" src={user.avatar} />}
                                onClick={() => userContext.getProfile(user.id)}


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
