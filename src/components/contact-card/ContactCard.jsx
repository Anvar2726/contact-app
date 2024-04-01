import { Component } from 'react'

import editImg from '../../assets/images/edit.png';
import deleteImg from '../../assets/images/delete.png';
import heartImg from '../../assets/images/heart.png';
import favoriteImg from '../../assets/images/heart-2.png';
 

import {  Button, Card } from 'react-bootstrap'
import categories from '../../consts/category';

class ContactCard extends Component {
    render() {
        const {firstName, lastName, category, phoneNumber, id, favorite, addFavorite, deleteContact, editContact} = this.props;
        return (
            <Card className='my-3'>
                <Card.Body className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-3'>
                        <img src={categories[category]} alt="" width={60} />
                        <div>
                            <Card.Title>{firstName} {lastName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                            <Card.Text>{phoneNumber}</Card.Text>
                        </div>
                    </div>
                    <div>
                        <Button variant='none' onClick={()=>editContact(id)}>
                            <img src={editImg} alt="edit" width={30}/>
                        </Button>
                        <Button variant='none' onClick={() => deleteContact(id)}>
                            <img src={deleteImg} alt="delete" width={30}/>
                        </Button>
                        <Button variant='none' onClick={() => addFavorite(id)}>
                            {favorite ? <img src={favoriteImg} alt="heart" width={30}/>
                            :<img src={heartImg} alt="favorite" width={30} /> }
                        </Button>
                    </div>
                </Card.Body>
                
            </Card>
        )
    }
}

export default ContactCard