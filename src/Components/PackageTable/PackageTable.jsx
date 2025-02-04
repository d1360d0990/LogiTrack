import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  IconButton,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import './PackageTable.css';

export const PackageTable = ({ packages }) => {
  return (
    <Box component="main" className="package-table-container">
      <TableContainer component={Paper} className="package-table">
        <Table>
          <TableHead>
            <TableRow className="package-header">
              <TableCell>Cod. Seguimiento</TableCell>
              <TableCell>Remitente</TableCell>
              <TableCell>Destinatario</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Origen</TableCell>
              <TableCell>Destino</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packages?.map((pkg) => (
              <TableRow key={pkg._id} className="table-row">
                <TableCell>{pkg._id}</TableCell>
                <TableCell>{pkg.remitente}</TableCell>
                <TableCell>{pkg.destinatario}</TableCell>
                <TableCell>{pkg.fechaCreacion}</TableCell>
                <TableCell>{pkg.origen}</TableCell>
                <TableCell>{pkg.destino}</TableCell>
                <TableCell>{pkg.estado}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit" size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PackageTable;



