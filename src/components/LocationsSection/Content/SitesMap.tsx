import { ReactBingmaps } from "react-bingmaps";
import Grid from "@mui/material/Grid";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  sites: any[];
};
const SitesMap: FC<Props> = ({ sites }) => {
  const pushPins = sites.map((site) => {
    return {
      location: [site.latitude, site.longitude],
      option: { color: "red" },
    };
  });
  const conatinerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const position = conatinerRef.current.getBoundingClientRect();

      const scrollPosition = window.scrollY;
      if (scrollPosition >= position.top) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Grid item md={9} ref={conatinerRef}>
      {!visible || pushPins.length === 0 ? null : (
        <ReactBingmaps
          bingmapKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
          center={[36.716, 3.003]}
          pushPins={pushPins}
          zoom={10}
        ></ReactBingmaps>
      )}
    </Grid>
  );
};

export default SitesMap;
