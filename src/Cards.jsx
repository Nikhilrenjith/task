import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Cards = ({ userData }) => {
  return (
    <div>
      <Card className="w-96 ">
        <CardHeader
          floated={false}
          className="h-80 flex items-center justify-center "
        >
          <img
            src={userData.picture.large}
            alt="profile-picture"
            className="object-fill w-96"
          />
        </CardHeader>

        <CardBody className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-4">
            {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
          </Typography>

          <Typography className="font-semibold text-neutral-900" textGradient>
            <FontAwesomeIcon icon={faEnvelope} /> {`${userData.email}`}
          </Typography>
          <Typography className="font-semibold text-neutral-900" textGradient>
            <FontAwesomeIcon icon={faPhone} /> {`${userData.phone}`}
          </Typography>
          <Typography className="font-semibold text-neutral-900" textGradient>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            {`${userData.location.state}, ${userData.location.country}`}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
