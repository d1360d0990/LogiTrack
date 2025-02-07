import { ClientSearch } from "../../Molecules/SearchBar/ClientSearch"
import PersistentDrawerLeft from "../../Organisms/Headers/PersistentDrawerLeft/PersistentDrawerLeft"

import PackageTable from "../../PackageTable/PackageTable"
import useFetch from "../../../Hooks/useFetch"
import { getorders } from "../../../service/getOrders"
import { baseURL } from "../../../App"
import ButtonAddPackage from "../../Atoms/Button/ButtonAddPackage"
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";


export const Packages = () => {
  const {data, loading} = useFetch(`${baseURL}`, getorders);
  console.log(data);

  
  
  return (
    <>
      <PersistentDrawerLeft sx={{ padding: '10px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>N° Paquetes</h1>
        <ButtonAddPackage/>
      </div>
      <ClientSearch sx={{ padding: '10px' }} />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
<<<<<<< HEAD
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Opcional para efecto de pantalla de carga
=======
            backgroundColor: "rgba(255, 255, 255, 0.7)", 
>>>>>>> 397f1bc (generando pdf)
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <PackageTable packages={data} />
      )}
    

    </>
  )
}
