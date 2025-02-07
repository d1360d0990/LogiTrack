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
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packages?.map((pkg) => (
              <TableRow key={pkg._id} className="table-row">
                <TableCell>{pkg._id}</TableCell>
                <TableCell>{pkg.senderName}</TableCell>
                <TableCell>{pkg.recipientName}</TableCell>
                <TableCell>{pkg.date}</TableCell>
                <TableCell>{pkg.originProvince}</TableCell>
                <TableCell>{pkg.destinationProvince}</TableCell>
                <TableCell>{pkg.status}</TableCell>
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



