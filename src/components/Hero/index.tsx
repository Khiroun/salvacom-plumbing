import BingMapsReact from "bingmaps-react";

const Hero = () => {
  const center = { latitude: 36.716, longitude: 3.003 };
  const pushPin = {
    center,
    options: {},
  };
  const pushPins = [pushPin];
  return (
    <div id="myMap" style={{ width: "100%", height: "360px" }}>
      <BingMapsReact
        bingMapsKey="Anx4mwLDKI3uWURZVzqDwyAy5SMpfR6Co1jd-NC2XkbkOHSgfZyiJrKvQlIEAcmN"
        height="100%"
        mapOptions={{
          navigationBarMode: "square",
          disableBirdseye: true,
        }}
        width="100%"
        viewOptions={{
          center,
          mapTypeId: "aerial",
        }}
        pushPins={pushPins}
        infoboxes={[
          {
            location: center,
            option: { title: "Chennai", description: "..." },
            addHandler: { type: "click", callback: () => {} },
          },
        ]}
      />
    </div>
  );
};

export default Hero;
