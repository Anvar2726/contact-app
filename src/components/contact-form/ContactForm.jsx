import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'


class ContactForm extends Component {
    render() {
        const { validated, handleSubmit, handleValue,contact, selected } = this.props;
        return (
            <Form className='w-50 mx-auto' noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className='my-3' controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        onChange={handleValue}
                        value={contact.firstName}
                        required
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please Filling !!!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='my-3' controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        onChange={handleValue}
                        value={contact.lastName}
                        required
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please Filling !!!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='my-3' controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        onChange={handleValue}
                        value={contact.phoneNumber}
                        required
                        type="tel"
                        placeholder="Phone Number"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please Filling !!!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='my-3' controlId="category">
                    <Form.Label>Categories</Form.Label>
                    <Form.Select onChange={handleValue} value={contact.category}>
                        <option value="family">Family</option>
                        <option value="friends">Friends</option>
                        <option value="relatives">Relatives</option>
                        <option value="other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please Filling !!!</Form.Control.Feedback>
                </Form.Group>
                <Button className='w-100' variant='success' type="submit">{selected ? "Save Contact": "Add Contact"}</Button>
            </Form>
        )
    }
}

export default ContactForm