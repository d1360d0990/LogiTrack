import { Link } from "react-router-dom";
import "./NotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1 className="title">404 - Página no encontrada</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" // Reemplaza con la URL de tu imagen
        alt="Homer Simpson confundido"
        className="image"
      />
      <p className="text">
        ¡Vaya! Parece que esta página no existe. Tal vez Homero tocó algo que no debía.
      </p>
      <Link to="/" className="link">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default PageNotFound;

