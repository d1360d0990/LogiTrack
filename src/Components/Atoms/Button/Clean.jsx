import { Button } from "@mui/material"
import { useState } from "react"

export const Clean = () => {
    const [inputValue, setInputValue] = useState('');
    const handleClear = () => {
        setInputValue('');
    };
  return (
    <>
     <Button onClick={handleClear} variant="contained" color="success" sx={{ margin: '10px' }}>
                                LIMPIAR BUSQUEDA
                            </Button>
    
    </>
  )
}
