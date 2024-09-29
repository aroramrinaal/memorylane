import React, { useState } from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    background: '#f3f4f6',
    borderRadius: '10px',
    maxWidth: '1200px',
    margin: '20px auto',
  },
  leftPanel: {
    flex: 1,
    padding: '20px',
    background: '#ffffff',
    borderRadius: '10px',
    marginRight: '10px',
  },
  rightPanel: {
    flex: 1,
    padding: '20px',
    background: '#ffffff',
    borderRadius: '10px',
    marginLeft: '10px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333333',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #030202',
    color: '#000000',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0',
  },
  button: {
    padding: '10px',
    background: '#4caf50',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  saveButton: {
    padding: '10px',
    background: '#0288d1',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contactList: {
    listStyleType: 'none',
    padding: 0,
  },
  contactItem: {
    background: '#e0f7fa',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    color: '#000000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    background: '#ff9800',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  deleteButton: {
    background: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

// TypeScript interface for contact data
interface Contact {
  name: string;
  relationship: string;
  countryCode: string;
  phone: string;
  extension?: string;
  isPreferred: boolean;
}

const EmergencyContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { name: 'Caregiver', relationship: 'Primary', countryCode: '+1', phone: '123-456-7890', extension: '', isPreferred: true },
    { name: 'Family Member', relationship: 'Secondary', countryCode: '+1', phone: '987-654-3210', extension: '', isPreferred: false },
  ]);

  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phone, setPhone] = useState('');
  const [extension, setExtension] = useState('');
  const [isPreferred, setIsPreferred] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddOrUpdateContact = () => {
    if (name && relationship && countryCode && phone) {
      if (isPreferred) {
        setContacts((prevContacts) => prevContacts.map((contact) => ({ ...contact, isPreferred: false })));
      }

      if (editIndex !== null) {
        const updatedContacts = [...contacts];
        updatedContacts[editIndex] = { name, relationship, countryCode, phone, extension, isPreferred };
        setContacts(updatedContacts);
        setEditIndex(null);
      } else {
        setContacts([...contacts, { name, relationship, countryCode, phone, extension, isPreferred }]);
      }

      setName('');
      setRelationship('');
      setCountryCode('');
      setPhone('');
      setExtension('');
      setIsPreferred(false);
    }
  };

  const handleDeleteContact = (index: number) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this contact?');
    if (confirmDelete) {
      const updatedContacts = [...contacts];
      updatedContacts.splice(index, 1);
      setContacts(updatedContacts);
    }
  };

  const handleEditContact = (index: number) => {
    const contact = contacts[index];
    setName(contact.name);
    setRelationship(contact.relationship);
    setCountryCode(contact.countryCode);
    setPhone(contact.phone);
    setExtension(contact.extension || '');
    setIsPreferred(contact.isPreferred);
    setEditIndex(index);
  };

  return (
    <div style={styles.container}>
      {/* Left Panel for Input Form */}
      <div style={styles.leftPanel}>
        <h2 style={styles.heading}>{editIndex !== null ? 'Edit Contact' : 'Add New Contact'}</h2>
        <div style={styles.formContainer}>
          <input style={styles.input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input style={styles.input} type="text" placeholder="Relationship" value={relationship} onChange={(e) => setRelationship(e.target.value)} />
          <input style={styles.input} type="text" placeholder="Country Code (e.g., +1)" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} />
          <input style={styles.input} type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input style={styles.input} type="text" placeholder="Extension (Optional)" value={extension} onChange={(e) => setExtension(e.target.value)} />
          <div style={styles.checkboxContainer}>
            <input type="checkbox" checked={isPreferred} onChange={(e) => setIsPreferred(e.target.checked)} />
            <label>Set as Preferred Contact</label>
          </div>
          <button style={editIndex !== null ? styles.saveButton : styles.button} onClick={handleAddOrUpdateContact}>
            {editIndex !== null ? 'Save Changes' : 'Add Contact'}
          </button>
        </div>
      </div>

      {/* Right Panel for Displaying Contacts */}
      <div style={styles.rightPanel}>
        <h2 style={styles.heading}>Saved Contacts</h2>
        <ul style={styles.contactList}>
          {contacts.map((contact, index) => (
            <li key={index} style={styles.contactItem}>
              <div>
                <strong style={{ color: contact.isPreferred ? '#00796B' : '#000000' }}>{contact.name}</strong> ({contact.relationship}): {contact.countryCode} {contact.phone}
                {contact.extension && `, Ext: ${contact.extension}`}
                {contact.isPreferred && <span> ★</span>}
              </div>
              <div style={styles.buttonContainer}>
                <button style={styles.editButton} onClick={() => handleEditContact(index)}>Edit</button>
                <button style={styles.deleteButton} onClick={() => handleDeleteContact(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmergencyContactList;
