import { Button } from "@mui/material"
import { useState } from "react"
import { OutlinedInput } from '@mui/material'

export const ClientSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const handleClear = () => {
    setInputValue('');
  }
  return (
    <>
      <OutlinedInput placeholder="N° de Rastreo"
        inputProps={{ 'aria-label': 'search' }}
        sx={{ width: '60%', backgroundColor: '#fff' }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" color="success" sx={{ margin: '10px' }}>
        BUSCAR
      </Button>

      <Button onClick={handleClear} variant="contained" color="primary" sx={{ margin: '10px' }}>
        LIMPIAR BUSQUEDA
      </Button>
    </>
  )
}

export default ClientSearch;