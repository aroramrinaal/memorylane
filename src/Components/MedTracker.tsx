import React, { useState } from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    // margin: '150px auto',
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
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  rightPanel: {
    flex: 1,
    padding: '20px',
    background: '#ffffff',
    borderRadius: '10px',
    marginLeft: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#000000',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: '#000000',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    color: '#000000',
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
  medicineList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  },
  medicineItem: {
    background: '#e0f7fa',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000000',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  customCheckbox: {
    width: '20px',
    height: '20px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    border: '2px solid #4caf50',
    display: 'inline-block',
    position: 'relative',
  },
  checkedCheckbox: {
    backgroundColor: '#4caf50',
    border: '2px solid #4caf50',
  },
  checkmark: {
    position: 'absolute',
    top: '2px',
    left: '5px',
    width: '7px',
    height: '12px',
    border: 'solid white',
    borderWidth: '0 2px 2px 0',
    transform: 'rotate(45deg)',
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

interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  takenToday: boolean;
}

const MedTracker: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');

  const addMedicine = () => {
    if (name && dosage && frequency) {
      const newMedicine: Medicine = { name, dosage, frequency, takenToday: false };
      setMedicines([...medicines, newMedicine]);
      setName('');
      setDosage('');
      setFrequency('');
    }
  };

  const toggleTakenToday = (index: number) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[index].takenToday = !updatedMedicines[index].takenToday;
    setMedicines(updatedMedicines);
  };

  const deleteMedicine = (index: number) => {
    const updatedMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(updatedMedicines);
  };

  return (
    <div style={styles.container}>
      {/* Left Panel for Input Form */}
      <div style={styles.leftPanel}>
        <h2 style={styles.heading}>Add New Medicine</h2>
        <div style={styles.formContainer}>
          <input
            style={styles.input}
            type="text"
            placeholder="Medicine Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Dosage (e.g., 500mg)"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Frequency (e.g., Twice a Day)"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
          <button style={styles.button} onClick={addMedicine}>
            Add Medicine
          </button>
        </div>
      </div>

      {/* Right Panel for Displaying Medicines */}
      <div style={styles.rightPanel}>
        <h2 style={styles.heading}>Saved Medicines</h2>
        <ul style={styles.medicineList}>
          {medicines.map((medicine, index) => (
            <li key={index} style={styles.medicineItem}>
              <div>
                <strong>{medicine.name}</strong> - {medicine.dosage} ({medicine.frequency})
              </div>
              <div style={styles.checkboxContainer}>
                {/* Custom Checkbox for "Taken Today" */}
                <div
                  style={{
                    ...styles.customCheckbox,
                    ...(medicine.takenToday ? styles.checkedCheckbox : {}),
                  }}
                  onClick={() => toggleTakenToday(index)}
                >
                  {medicine.takenToday && <div style={styles.checkmark}></div>}
                </div>
                <span>Taken Today</span>
                <button style={styles.deleteButton} onClick={() => deleteMedicine(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedTracker;