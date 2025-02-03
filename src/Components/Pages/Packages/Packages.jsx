import { ClientSearch } from "../../Molecules/SearchBar/ClientSearch"
import PersistentDrawerLeft from "../../Organisms/Headers/PersistentDrawerLeft/PersistentDrawerLeft"
import { AddPackage } from "../../Atoms/Button/AddPackage"
import PackageTable from "../../PackageTable/PackageTable"


export const Packages = () => {
  return (
    <>
      <PersistentDrawerLeft sx={{ padding: '10px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>N° Paquetes</h1>
        <AddPackage />
      </div>
      <ClientSearch sx={{ padding: '10px' }} />
<PackageTable/>
    

    </>
  )
}
