import React, { useState } from "react";
import "./Home.css";
import Layout from "../../components/Layout/Layout";
import RightImage from "../../images/home1.png";
import { FaPlayCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  MdHomeWork,
  MdFreeBreakfast,
  MdLocalLaundryService,
} from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { FaSwimmingPool, FaWifi, FaRegLightbulb } from "react-icons/fa";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CgGym } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { LuParkingCircle } from "react-icons/lu";
import Man1 from "../../images/man1.png";
import Man2 from "../../images/man2.png";
import Man3 from "../../images/man3.png";
import { Bounce, Slide } from "react-awesome-reveal";

const Home = () => {
  const [location, setLocation] = useState(1);
  const [roomType, setRoomType] = useState(1);
  const [person, setPerson] = useState(1);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeRoomType = (event) => {
    setRoomType(event.target.value);
  };
  const handleChangePerson = (event) => {
    setPerson(event.target.value);
  };
  return (
    <Layout>
      <>
        <div>
          <div className="home-fist">
            <Bounce>
              <div className="home-first-left">
                <h1>Paradise View</h1>

                <h2>Hotel for every moment rich in emotion</h2>
                <p>
                  "Every moment spent in Paradise View is a timeless experience,
                  where the air is filled with serenity and the surroundings
                  echo with the essence of tranquility"
                </p>

                <div className="home-button-logo">
                  <button>Book Now</button>
                  <div className="home-icon-take">
                    <FaPlayCircle size={30} color="#00A699" />
                    <h3>Take a tour</h3>
                  </div>
                </div>
              </div>
            </Bounce>

            <div className="home-first-right">
              <img src={RightImage} alt="" />
            </div>
          </div>

          <div className="home-all-second">
            <div className="home-second">
              <div className="home-time1">
                <div className="home-location">
                  <FaLocationDot size={18} />
                  <h4>Location</h4>
                </div>
                <FormControl
                  sx={{ minWidth: 100, marginLeft: "1.5rem" }}
                  size="small"
                >
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    style={{ fontSize: "15px" }}
                    value={location}
                    onChange={handleChange}
                  >
                    <MenuItem style={{ fontSize: "15px" }} value={1}>
                      Delhi
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={2}>
                      Noida
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={3}>
                      Meerut
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={3}>
                      Meerut
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={4}>
                      Amroha
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={5}>
                      Muradabad
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="home-time2">
                <div className="home-location">
                  <MdHomeWork size={20} />
                  <h4>Room Type</h4>
                </div>
                <FormControl
                  sx={{ minWidth: 100, marginLeft: "1.5rem" }}
                  size="small"
                >
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    style={{ fontSize: "15px" }}
                    value={roomType}
                    onChange={handleChangeRoomType}
                  >
                    <MenuItem style={{ fontSize: "15px" }} value={1}>
                      Standard
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={2}>
                      Deluxe
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={3}>
                      Suite
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={3}>
                      Apartment
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={4}>
                      Double
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={5}>
                      Studio
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="home-time3">
                <div className="home-location">
                  <IoPerson size={20} />
                  <h4>Person</h4>
                </div>
                <FormControl
                  sx={{ minWidth: 100, marginLeft: "1.5rem" }}
                  size="small"
                >
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    style={{ fontSize: "15px" }}
                    value={person}
                    onChange={handleChangePerson}
                  >
                    <MenuItem style={{ fontSize: "15px" }} value={1}>
                      01
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={2}>
                      02
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={3}>
                      03
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={3}>
                      04
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={4}>
                      05
                    </MenuItem>
                    <MenuItem style={{ fontSize: "15px" }} value={5}>
                      06
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginTop: "10px", width: "250px" }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="home-date"
                >
                  <DemoContainer components={["DateRangePicker"]}>
                    <DateRangePicker
                      localeText={{ start: "Check-in", end: "Check-out" }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <button className="home-item4">Book Now</button>
            </div>
          </div>

          <div className="home-our-text">
            <h1>Our Facilities</h1>
            <p>We offer modern (5 star) hotel facilities for your comfort.</p>
          </div>
          <Slide>
            <div className="home-facilities-card">
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <FaSwimmingPool size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    Swimming Pool
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <FaWifi size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    Wifi
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <MdFreeBreakfast size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    Breakfast{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <CgGym size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    Gym{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <IoGameController size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    Game center{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <FaRegLightbulb size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    24/7 Light{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <MdLocalLaundryService size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    Laundry{" "}
                  </Typography>
                </CardContent>
              </Card>
              <Card
                className="home-card-data"
                sx={{
                  backgroundColor: "#dfd9d9",
                }}
              >
                <CardContent>
                  <LuParkingCircle size={35} color="#7c6a46" />

                  <Typography
                    sx={{ fontSize: 15 }}
                    color="#7c6a46"
                    gutterBottom
                  >
                    Parking space{" "}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slide>
          <div className="home-luxurious">
            <div className="home-luxurious-text">
              <h1>Luxurious Rooms</h1>
              <hr className="home-hr1" />
              <p>All room are design for your comfort</p>
            </div>
            <Bounce>
              <div className="home-luxurious-room">
                <div className="home-luxurious-room1">
                  <div className="home-luxurious-room1-image">
                    <button>2 Rooms available</button>
                  </div>
                  <h6>Television set, Extra sheets and Breakfast</h6>
                </div>

                <div className="home-luxurious-room1">
                  <div className="home-luxurious-room2-image">
                    <button>4 Rooms available</button>
                  </div>
                  <h6>
                    Television set, Extra sheets, Breakfast, and fireplace
                  </h6>{" "}
                </div>
                <div className="home-luxurious-room1">
                  <div className="home-luxurious-room3-image">
                    <button>8 Rooms available</button>
                  </div>
                  <h6>
                    Television set, Extra sheets, Breakfast, and fireplace,
                    Console and bed rest
                  </h6>{" "}
                </div>
              </div>
            </Bounce>
          </div>

          <div className="home-Testimonies">
            <h2>Testimonies</h2>
          </div>

          <div className="home-review-card-all">
            <div class="home-review-card">
              <div class="home-review-info">
                <h5>2 Feb. 2024</h5>
                <h1>⭐⭐⭐⭐⭐</h1>
              </div>
              <div class="home-review-content">
                <p>
                  The service at the Hotel Monteleone was exceptional. There was
                  absolutely no issue that was not addressed timely and with
                  satisfactory results. We were particularly impressed with how
                  the hotel staff anticipated our needs (periodically coming by
                  the Board Room to check with us). Numerous conference
                  attendees commented on the quality of the food, the quality of
                  the service and overall positive attitude toward the
                  conference site. Particularly noteworthy is the longevity of
                  the staff and that sense of investment in the success of every
                  event. I usually offer suggestions for improvements (part of
                  being a marketing professor), but there is absolutely nothing
                  that could be improved – you have set the bar very high.
                </p>
              </div>
              <div class="home-review-author">
                <img src={Man1} alt="" />
                <h2>Anthony Bruff</h2>
              </div>
            </div>
            <div class="home-review-card">
              <div class="home-review-info">
                <h5>8 Feb. 2024</h5>
                <h1>⭐⭐⭐⭐</h1>
              </div>
              <div class="home-review-content">
                <p>
                  The service at the Hotel Monteleone was exceptional. There was
                  absolutely no issue that was not addressed timely and with
                  satisfactory results. We were particularly impressed with how
                  the hotel staff anticipated our needs (periodically coming by
                  the Board Room to check with us). Numerous conference
                  attendees commented on the quality of the food, the quality of
                  the service and overall positive attitude toward the
                  conference site. Particularly noteworthy is the longevity of
                  the staff and that sense of investment in the success of every
                  event. I usually offer suggestions for improvements (part of
                  being a marketing professor), but there is absolutely nothing
                  that could be improved – you have set the bar very high.
                </p>
              </div>
              <div class="home-review-author">
                <img src={Man2} alt="" />
                <h2>Regina Gella</h2>
              </div>
            </div>
            <div class="home-review-card">
              <div class="home-review-info">
                <h5>12 Feb. 2024</h5>
                <h1>⭐⭐⭐⭐</h1>
              </div>
              <div class="home-review-content">
                <p>
                  The service at the Hotel Monteleone was exceptional. There was
                  absolutely no issue that was not addressed timely and with
                  satisfactory results. We were particularly impressed with how
                  the hotel staff anticipated our needs (periodically coming by
                  the Board Room to check with us). Numerous conference
                  attendees commented on the quality of the food, the quality of
                  the service and overall positive attitude toward the
                  conference site. Particularly noteworthy is the longevity of
                  the staff and that sense of investment in the success of every
                  event. I usually offer suggestions for improvements (part of
                  being a marketing professor), but there is absolutely nothing
                  that could be improved – you have set the bar very high.
                </p>
              </div>
              <div class="home-review-author">
                <img src={Man3} alt="" />
                <h2>Jamiyu Aliyu</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
