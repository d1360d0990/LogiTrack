import { ClientSearch } from "../../Molecules/SearchBar/ClientSearch"
import PersistentDrawerLeft from "../../Organisms/Headers/PersistentDrawerLeft/PersistentDrawerLeft"

import PackageTable from "../../PackageTable/PackageTable"
import useFetch from "../../../Hooks/useFetch"
import { getorders } from "../../../service/getOrders"
import { baseURL } from "../../../App"
import ButtonAddPackage from "../../Atoms/Button/ButtonAddPackage"


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
<PackageTable packages={data}/> 
    

    </>
  )
}
