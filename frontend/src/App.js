import React from 'react';

function App() {
  return (
    <div style={{ 
      padding: '40px 20px', 
      textAlign: 'center', 
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          margin: '0 0 10px 0', 
          color: '#1e293b' 
        }}>
          Pushpendra Singh
        </h1>
        <h2 style={{ 
          fontSize: '1.5rem', 
          margin: '0 0 20px 0', 
          color: '#3b82f6',
          fontWeight: 'normal'
        }}>
          iOS Architect & Engineering Leader
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#64748b',
          lineHeight: '1.6'
        }}>
          13+ years of expertise in designing, developing, and delivering large-scale mobile applications. 
          Portfolio website deployment in progress...
        </p>
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#f1f5f9',
          borderRadius: '8px'
        }}>
          <p style={{ margin: '0', color: '#475569' }}>
            📧 pushp.2224@gmail.com | 📱 +91-7838765600 | 📍 Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
