import React, { useRef } from "react";
import Layout from "../../components/Layout/Layout";
import "./Rooms.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import { Divider } from "@mui/material";
import { FiTv, FiWifi } from "react-icons/fi";
import { TbParking } from "react-icons/tb";
import Room1 from "../../images/home1.png";

const Rooms = () => {
  const roomsRef = useRef(null);

  const scrollToRooms = () => {
    if (roomsRef.current) {
      roomsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Layout>
      <div className="rooms-first-image">
        <div>
          <h1>Rooms and Suites</h1>
          <p>
            The elegant luxury bedrooms in this gallery showcase custom interior
            <br />
            designs & decorating ideas. View pictures and find your
            <br /> perfect luxury bedroom design.
          </p>
          <button onClick={scrollToRooms}>Show Rooms</button>
        </div>
      </div>
      <div className="rooms-card" ref={roomsRef}>
        <Card
          variant="outlined"
          className="rooms-card-data"
          sx={{ padding: "0px" }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={Room1} alt="" />
            </AspectRatio>
          </CardOverflow>
          <div className="rooms-available">
            <h3> The Royal Room</h3>
            <h6>Available</h6>
          </div>
          <h2 className="rooms-rs">$190,000</h2>
          <Divider />
          <div className="rooms-icon-Book">
            <div className="rooms-icon">
              <FiTv size={20} className="rooms-icon-data" />
              <FiWifi size={20} className="rooms-icon-data" />
              <TbParking size={20} className="rooms-icon-data" />
            </div>
            <button>Book now</button>
          </div>
        </Card>
        <Card
          variant="outlined"
          className="rooms-card-data"
          sx={{ padding: "0px" }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={Room1} alt="" />
            </AspectRatio>
          </CardOverflow>
          <div className="rooms-available">
            <h3> The Royal Room</h3>
            <h6>Available</h6>
          </div>
          <h2 className="rooms-rs">$190,000</h2>
          <Divider />
          <div className="rooms-icon-Book">
            <div className="rooms-icon">
              <FiTv size={20} className="rooms-icon-data" />
              <FiWifi size={20} className="rooms-icon-data" />
              <TbParking size={20} className="rooms-icon-data" />
            </div>
            <button>Book now</button>
          </div>
        </Card>
        <Card
          variant="outlined"
          className="rooms-card-data"
          sx={{ padding: "0px" }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={Room1} alt="" />
            </AspectRatio>
          </CardOverflow>
          <div className="rooms-available">
            <h3> The Royal Room</h3>
            <h6>Available</h6>
          </div>
          <h2 className="rooms-rs">$190,000</h2>
          <Divider />
          <div className="rooms-icon-Book">
            <div className="rooms-icon">
              <FiTv size={20} className="rooms-icon-data" />
              <FiWifi size={20} className="rooms-icon-data" />
              <TbParking size={20} className="rooms-icon-data" />
            </div>
            <button>Book now</button>
          </div>
        </Card>
        <Card
          variant="outlined"
          className="rooms-card-data"
          sx={{ padding: "0px" }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={Room1} alt="" />
            </AspectRatio>
          </CardOverflow>
          <div className="rooms-available">
            <h3> The Royal Room</h3>
            <h6>Available</h6>
          </div>
          <h2 className="rooms-rs">$190,000</h2>
          <Divider />
          <div className="rooms-icon-Book">
            <div className="rooms-icon">
              <FiTv size={20} className="rooms-icon-data" />
              <FiWifi size={20} className="rooms-icon-data" />
              <TbParking size={20} className="rooms-icon-data" />
            </div>
            <button>Book now</button>
          </div>
        </Card>
        <Card
          variant="outlined"
          className="rooms-card-data"
          sx={{ padding: "0px" }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={Room1} alt="" />
            </AspectRatio>
          </CardOverflow>
          <div className="rooms-available">
            <h3> The Royal Room</h3>
            <h6>Available</h6>
          </div>
          <h2 className="rooms-rs">$190,000</h2>
          <Divider />
          <div className="rooms-icon-Book">
            <div className="rooms-icon">
              <FiTv size={20} className="rooms-icon-data" />
              <FiWifi size={20} className="rooms-icon-data" />
              <TbParking size={20} className="rooms-icon-data" />
            </div>
            <button>Book now</button>
          </div>
        </Card>
        <Card
          variant="outlined"
          className="rooms-card-data"
          sx={{ padding: "0px" }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={Room1} alt="" />
            </AspectRatio>
          </CardOverflow>
          <div className="rooms-available">
            <h3> The Royal Room</h3>
            <h6>Available</h6>
          </div>
          <h2 className="rooms-rs">$190,000</h2>
          <Divider />
          <div className="rooms-icon-Book">
            <div className="rooms-icon">
              <FiTv size={20} className="rooms-icon-data" />
              <FiWifi size={20} className="rooms-icon-data" />
              <TbParking size={20} className="rooms-icon-data" />
            </div>
            <button>Book now</button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Rooms;
