import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Footer, Navbar } from "../src/components";
import { useTheme } from "@mui/material";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import siteConfig from "../src/siteConfig.json";
const Contact = () => {
  const theme = useTheme();
  const items = [
    {
      title: "ADRESSE",
      icon: ImLocation2,
      text: siteConfig.address,
    },
    {
      title: "TEL",
      icon: BsTelephoneForwardFill,
      text: siteConfig.telephone,
    },
    {
      title: "EMAIL",
      icon: MdEmail,
      text: siteConfig.email,
    },
  ];
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <Navbar />
        <Box
          minHeight="70vh"
          bgcolor={theme.palette.primary.main}
          padding="5rem"
        >
          <Typography variant="h1" color="#fff" textAlign="center">
            CONTACTEZ NOUS
          </Typography>
          <Grid container marginTop="4rem" spacing={8}>
            {items.map((item) => {
              return (
                <Grid
                  item
                  md={4}
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  key={item.title}
                >
                  <Box
                    bgcolor={theme.palette.primary.light}
                    padding="1rem"
                    borderRadius="50%"
                    width="fit-content"
                  >
                    <item.icon color="#fff" size={50} />
                  </Box>
                  <Typography variant="h2" color="#fff">
                    {item.title}
                  </Typography>
                  <Typography
                    color={theme.palette.primary.contrastText}
                    variant="body1"
                    marginTop="0.5rem"
                    textAlign="center"
                  >
                    {item.text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <iframe
          frameBorder={0}
          scrolling="no"
          loading="lazy"
          marginHeight={0}
          marginWidth={0}
          width="100%"
          style={{
            minHeight: "50vh",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.495461635675!2d2.9989506152450853!3d36.71066027996718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128faf7e9469c4fd%3A0x9cb7ae41992e7885!2sSalvacom!5e0!3m2!1sfr!2sdz!4v1658241441073!5m2!1sfr!2sdz"
        />

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
