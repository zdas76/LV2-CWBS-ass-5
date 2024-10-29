import { Button, Col, Flex, Row } from "antd";
import "../style.css";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <Flex className="items-center flex-col-reverse md:flex-row p-5 gap-5 ">
      <Row className="w-full md:w-1/3">
        <Col className="">
          <p className="mb-5 text-justify">
            Our car washing service provides a thorough clean to keep your
            vehicle looking like new. We use high-quality products and advanced
            techniques to remove dirt, grime, and stains. Enjoy a spotless and
            shiny car with our fast and reliable service.
          </p>
          <p className="font-open font-semibold mb-2 text-lg md:text-xl lg:text-2xl xl:text-4xl lg:mb-10">
            Driving Clean, Driving Proud
          </p>

          <Link to="/service">
            <Button className="py-5 w-full sm:w-40 md:48 text-lg md:text-xl lg:text-xl font-lato font-bold text-white bg-gradient-to-tr from-red-700 to-red-400">
              Book Service
            </Button>
          </Link>
        </Col>
      </Row>

      <Row className="flex-1">
        <Col className="w-full">
          <img src="images/hero.jpg" className="w-full" />
        </Col>
      </Row>
    </Flex>
  );
}
