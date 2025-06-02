import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in Leaflet when used with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const IframeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  height: 250px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    height: 250px;
  }
`;

const StyledMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;

function MapSection({ theme }) {
  const position = [51.50536857148584, -0.10440801356209117]; // 200 Blackfriars Rd

  return (
    <IframeWrapper>
      <StyledMap center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          url={
            theme === "dark"
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          }
          attribution="©OpenStreetMap contributors ©CARTO"
        />
        <Marker position={position}>
          <Popup>200 Blackfriars Rd, London SE1 9JU</Popup>
        </Marker>
      </StyledMap>
    </IframeWrapper>
  );
}

export default MapSection;
