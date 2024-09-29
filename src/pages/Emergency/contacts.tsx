import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Emergency Contacts</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Panel for Input Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              {editIndex !== null ? 'Edit Contact' : 'Add New Contact'}
            </h2>
            <div className="space-y-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Country Code (e.g., +1)"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Extension (Optional)"
                value={extension}
                onChange={(e) => setExtension(e.target.value)}
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isPreferred}
                  onChange={(e) => setIsPreferred(e.target.checked)}
                  className="mr-2"
                />
                <label className="text-gray-700">Set as Preferred Contact</label>
              </div>
              <Button
                onClick={handleAddOrUpdateContact}
                className={cn(
                  "w-full",
                  editIndex !== null ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
                )}
              >
                {editIndex !== null ? 'Save Changes' : 'Add Contact'}
              </Button>
            </div>
          </div>

          {/* Right Panel for Displaying Contacts */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Saved Contacts</h2>
            <ul className="space-y-4">
              {contacts.map((contact, index) => (
                <li key={index} className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
                  <div>
                    <strong className={contact.isPreferred ? "text-blue-600" : "text-gray-800"}>
                      {contact.name}
                    </strong>
                    <span className="text-gray-600"> ({contact.relationship})</span>
                    <div className="text-sm text-gray-500">
                      {contact.countryCode} {contact.phone}
                      {contact.extension && `, Ext: ${contact.extension}`}
                      {contact.isPreferred && <span className="ml-2 text-blue-600">★ Preferred</span>}
                    </div>
                  </div>
                  <div className="space-x-2">
                    <Button
                      onClick={() => handleEditContact(index)}
                      variant="outline"
                      size="sm"
                      className="bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteContact(index)}
                      variant="outline"
                      size="sm"
                      className="bg-red-100 text-red-700 border-red-300 hover:bg-red-200"
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactList;
