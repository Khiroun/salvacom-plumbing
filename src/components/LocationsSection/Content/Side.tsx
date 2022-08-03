import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Gallery from "../../Gallery";
import styled from "@emotion/styled";
import { AiFillCloseCircle } from "react-icons/ai";
import Box from "@mui/material/Box";
import { FC, useState } from "react";

type Props = {
  sites: any[];
};

const Side: FC<Props> = ({ sites }) => {
  const [selectedSite, setSelectedSite] = useState<any>({});
  return (
    <Grid item md={3} sm={12} bgcolor="#eee" borderRadius="10px" padding="1em">
      {sites.map((site) => {
        const address =
          site.address.length > 30
            ? `${site.address.slice(0, 27)}...`
            : site.address;
        return (
          <Paper
            key={site.id}
            sx={{
              width: "100%",
              padding: ".3em",
              marginBottom: "1rem",
            }}
          >
            {selectedSite.id === site.id ? (
              <Box paddingTop="2em" position="relative">
                <CloseButton size={20} onClick={() => setSelectedSite({})} />
                <Gallery images={site.images} />
                <Typography variant="h4" color="#153250" textAlign="center">
                  {site.siteName}
                </Typography>
                <Typography variant="body1">{site.address}</Typography>
              </Box>
            ) : (
              <Grid
                container
                spacing={1}
                onClick={() => setSelectedSite(site)}
                marginBottom="1rem"
                style={{
                  justifyContent: "center",
                }}
              >
                <Grid item md={6} sm={12}>
                  <img
                    src={site.images[0]}
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  sx={{
                    width: "inherit",
                  }}
                >
                  <Typography variant="h6">{site.siteName}</Typography>
                  <Typography variant="caption">{address}</Typography>
                </Grid>
              </Grid>
            )}
          </Paper>
        );
      })}
    </Grid>
  );
};
const CloseButton = styled(AiFillCloseCircle)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;
export default Side;
