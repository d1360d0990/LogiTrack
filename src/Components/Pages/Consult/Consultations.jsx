import PersistentDrawerLeft from "../../Organisms/Headers/PersistentDrawerLeft/PersistentDrawerLeft";
import PackageTable from "../../PackageTable/PackageTable";
import { getorders } from "../../../service/getOrders";
import { baseURL } from "../../../App";
import useFetch from "../../../Hooks/useFetch";
import { CircularProgress, Box } from "@mui/material";

export const Consultations = () => {
  const { data, loading } = useFetch(`${baseURL}`, getorders);
  console.log(data);

  return (
    <>
      <PersistentDrawerLeft />
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
            backgroundColor: "rgba(255, 255, 255, 0.7)", 
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <PackageTable packages={data} />
      )}
    </>
  );
};

