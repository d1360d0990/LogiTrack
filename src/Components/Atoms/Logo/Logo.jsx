import { useNavigate } from 'react-router-dom'; 

export const Logo = () => {
  const navigate = useNavigate(); 

  const handleLogoClick = () => {
    navigate('/home');
  };

  return (
    <button
      onClick={handleLogoClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
    >
      <img 
        src="/LogiTrack-1.png" 
        alt="LogiTrack Logo" 
        style={{ width: '60px', height: '60px' }} 
      />
      <span style={{ fontSize: '14px', fontWeight: 'bold' }}></span>
    </button>
  );
};
