import { useState } from "react";
import { useNavigate } from "react-router-dom";
import envios from '../../../assets/envios.svg';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Logitrack from '../../../assets/Images/LogiTrack.png';
import "./Login.css";

const IconTruck = () => (
  <img src={envios} alt="icono de camión de envío" className="iconTruck" />
);

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const predefinedCredentials = {
    username: "usuario123",
    password: "contraseña123",
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "El nombre de usuario es obligatorio.";
    }
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (
        formData.username === predefinedCredentials.username &&
        formData.password === predefinedCredentials.password
      ) {
        navigate("/home");
      } else {
        setErrors({ general: "Credenciales incorrectas. Intenta nuevamente." });
      }
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${Logitrack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="login-card">
        <div className="icon">
          <IconTruck />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-icon-wrapper">
              <PersonIcon className="input-icon" />
              <input
                type="text"
                name="username"
                placeholder="USERNAME"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="form-error">{errors.username}</p>}
            </div>
          </div>
          <div className="input-group">
            <div className="input-icon-wrapper">
              <LockIcon className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="form-error">{errors.password}</p>}
            </div>
          </div>
          {errors.general && <p className="form-error">{errors.general}</p>}
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
        <p className="forgot-password">Forgot password?</p>
      </div>
    </div>
  );
};

export default Login;
