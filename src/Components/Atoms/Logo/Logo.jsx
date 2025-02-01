import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

export const Logo = () => {
  const navigate = useNavigate(); // Inicializamos el hook para navegar

  const handleLogoClick = () => {
    navigate('/home'); // Redirige a la ruta /home al hacer clic en el logo
  };

  return (
    <button
      onClick={handleLogoClick} // Asociamos el click al método handleLogoClick
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
        src="/LogiTrack-1.png"  // Se usa la ruta desde public/
        alt="LogiTrack Logo" 
        style={{ width: '60px', height: '60px' }} 
      />
      <span style={{ fontSize: '14px', fontWeight: 'bold' }}></span>
    </button>
  );
};
