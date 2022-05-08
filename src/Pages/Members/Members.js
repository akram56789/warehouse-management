import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Members.css';

const Members = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch('members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return (
        <div id='members' className='container'>
            <div className='row'>
                <h2 className='members-title'>Our Members</h2>
                <div className='member-container'>
                    {
                        members.map(member =>
                            <div key={member._id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img height={'300px'} variant="top" src={member.img} />
                                    <Card.Body>
                                        <Card.Title> Name: {member.name}</Card.Title>
                                        <p>
                                            Email: {member.email}
                                        </p>
                                        <p>
                                            Phone: {member.phone}
                                        </p>
                                        <p>
                                            Age: {member.age}
                                        </p>
                                        <p>
                                            Descriptions: {member.description}
                                        </p>
                                        <Button className='btn btn-primary w-100'>Visit Profile </Button>

                                    </Card.Body>
                                </Card>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Members;