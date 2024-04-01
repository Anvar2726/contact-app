import { Component } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import ContactForm from '../components/contact-form/ContactForm'
import ContactCard from '../components/contact-card/ContactCard';

class HomePage extends Component {
    state = {
        validated: false,
        contacts: JSON.parse(localStorage.getItem("contacts")) || [
            {
                id: 1,
                firstName: 'Anvar',
                lastName: 'Xidiraliyev',
                phoneNumber: '+998901234567',
                category: 'family',
                favorite: false,
            },
            {
                id: 2,
                firstName: 'Alisher',
                lastName: 'Zokirov',
                phoneNumber: '+99890111111',
                category: 'other',
                favorite: true,
            },
            {
                id: 3,
                firstName: 'Xurshid',
                lastName: 'Sheramatov',
                phoneNumber: '+99890777777',
                category: 'friends',
                favorite: false,
            },
            {
                id: 4,
                firstName: 'Shahzod',
                lastName: 'Joraqulov',
                phoneNumber: '+998905555477',
                category: 'relatives',
                favorite: true,
            }
        ],
        contact: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            category: '',
        },
        selected: null,
    }
    render() {
        const { validated, contacts, contact, selected } = this.state;

        const addFavorite = (id) => {
            let newContacts = contacts.map(el => {
                if(el.id === id){
                    el.favorite = !el.favorite
                    return {...el}
                }
                return el;
            })
            this.setState({contacts: newContacts})
            localStorage.setItem('contacts', JSON.stringify(newContacts));
        }

        const handleValue = (e) => {
            this.setState({ contact: { ...contact, [e.target.id]: e.target.value } })
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            let newContacts;
            if (form.checkValidity()) {
                if(selected === null){
                    newContacts = [...contacts, {...contact, id: Date.now(), favorite: false}]
                }else{
                    newContacts = contacts.map(el =>{
                        if(el.id === selected){
                            return contact
                        }
                        return el
                    })
                }
                this.setState({contacts: newContacts})
                this.setState({contact: {
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    category: '',
                }})
            }else{
                this.setState({validated: true})
            }
            localStorage.setItem('contacts', JSON.stringify(newContacts));
        }

        const editContact = (id) =>{
            let contact =  contacts.find(el => el.id === id)
            this.setState({contact, selected: id})
        }

        const deleteContact = (id) => {
            const newContacts = contacts.filter(el => el.id !== id)
            this.setState({ contacts: newContacts });
            localStorage.setItem('contacts', JSON.stringify(newContacts));
        }
        return (
            <Container>
                <ContactForm contact={contact} selected={selected} validated={validated} handleSubmit={handleSubmit} handleValue={handleValue} />
                <Tabs
                    defaultActiveKey="all"
                    className="my-3"
                    fill
                    variant='pills'
                >
                    <Tab eventKey="all" title="All Contacts">
                        {contacts.map(el => <ContactCard editContact={editContact} deleteContact={deleteContact} addFavorite={addFavorite} key={el.id} {...el} />)}
                    </Tab>
                    <Tab eventKey="favorite" title="Favorite">
                        {contacts.filter(el => el.favorite).map(el => <ContactCard editContact={editContact} deleteContact={deleteContact} addFavorite={addFavorite} key={el.id} {...el} />)}
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default HomePage