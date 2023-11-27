import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Cards = ({ userData }) => {
  return (
    <div>
      <h1 class="text-6xl font-bold text-center mb-10 font-sans">Cards</h1>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="transition-shadow hover:shadow-xl hover:shadow-black/30 md:mr-4">
          <Card className="w-full h-full md:w-96 lg:w-80 xl:w-96 mx-auto md:h-96">
            <div className="h-80 flex items-center justify-center">
              <img
                src={userData.picture.large}
                alt=""
                className="object-fill rounded-full"
              />
            </div>

            <CardBody className="text-center">
              <Typography variant="h3" color="blue-gray" className="mb-4">
                {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
              </Typography>

              <Typography
                className="font-semibold text-neutral-900"
                textGradient
              >
                <FontAwesomeIcon icon={faEnvelope} /> {`${userData.email}`}
              </Typography>
              <Typography
                className="font-semibold text-neutral-900"
                textGradient
              >
                <FontAwesomeIcon icon={faPhone} /> {`${userData.phone}`}
              </Typography>
              <Typography
                className="font-semibold text-neutral-900"
                textGradient
              >
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                {`${userData.location.state}, ${userData.location.country}`}
              </Typography>
            </CardBody>
          </Card>
        </div>

        <div className="transition-shadow hover:shadow-xl hover:shadow-black/30 mb-20 md:mb-0  md:w-96 md:h-96">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-xl w-full h-full">
            <div className="w-full h-full">
              <img
                className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125"
                src={userData.picture.large}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
              </h1>
              <p className="mt-10 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FontAwesomeIcon icon={faEnvelope} /> {`${userData.email}`}
              </p>
              <p className=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FontAwesomeIcon icon={faPhone} /> {`${userData.phone}`}
              </p>
              <p className=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {`${userData.location.state}, ${userData.location.country}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
