import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { ReactBingmaps } from "react-bingmaps";
import { getAll } from "../../firebase";
import { Grid, Paper } from "@mui/material";
import Gallery from "../Gallery";
import styled from "@emotion/styled";
import { AiFillCloseCircle } from "react-icons/ai";

const LocationsSection = () => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState<any>({});
  const pushPins = sites.map((site) => {
    return {
      location: [site.latitude, site.longitude],
      option: { color: "red" },
    };
  });
  useEffect(() => {
    getAll("sites").then((locs) => {
      setSites(locs);
    });
  }, []);

  return (
    <Container id="locations">
      <Typography variant="h1" textAlign="center" color="#153250">
        Nos Site
      </Typography>
      <Grid height="80vh" container spacing={1}>
        <Grid item md={3} bgcolor="#eee" borderRadius="10px" padding="1em">
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
                }}
              >
                {selectedSite.id === site.id ? (
                  <Box paddingTop="2em" position="relative">
                    <CloseButton
                      size={20}
                      onClick={() => setSelectedSite({})}
                    />
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
                  >
                    <Grid item md={6}>
                      <img
                        src={site.images[0]}
                        style={{
                          maxWidth: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Typography variant="h6">{site.siteName}</Typography>
                      <Typography variant="caption">{address}</Typography>
                    </Grid>
                  </Grid>
                )}
              </Paper>
            );
          })}
        </Grid>
        <Grid item md={9}>
          {pushPins.length === 0 ? null : (
            <ReactBingmaps
              bingmapKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
              center={[36.716, 3.003]}
              pushPins={pushPins}
              zoom={10}
            ></ReactBingmaps>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LocationsSection;

const CloseButton = styled(AiFillCloseCircle)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;
