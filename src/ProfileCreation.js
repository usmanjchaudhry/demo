import React, { useState } from 'react';

function ProfileCreation() {
  const [experience, setExperience] = useState('');
  const [culture, setCulture] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ experience, culture });
    alert('Profile Created!');
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Create Your Profile</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Experience Level:
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Cultural Preferences:
            <input
              type="text"
              value={culture}
              onChange={(e) => setCulture(e.target.value)}
              style={styles.input}
            />
          </label>
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      <style jsx="true">{`
        form {
          max-width: 500px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h2 {
          text-align: center;
          color: #007bff;
        }
        label {
          display: block;
          margin-bottom: 10px;
        }
        input[type="text"] {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          display: block;
          width: 100%;
          padding: 10px;
          margin-top: 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff'
  },
  inputGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    width: '100%',
    padding: '10px 0',
    margin: '20px 0',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ProfileCreation;
