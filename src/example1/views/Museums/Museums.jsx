import React from "react";

// react-native
import { View, Text } from "react-native";

// components
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import AccordionText from "../../components/AccordionText/AccordionText";
import MuseumNavbar from "../../components/Navbar/MuseumNavbar/MuseumNavbar";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import Slideshow from "../../layouts/Slideshow/Slideshow";
import Mobile from "../../layouts/Mobile/Mobile";
import Container from "../../layouts/Mobile/Container/Container";

// images
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

// icons
import { BsFillStarFill } from "react-icons/bs";

// styles
import imageCardCss from "../../components/Card/ImageCard/styles";
import museumCss from "./styles";

const tabs = ["Exhibitions", "Highlights", "Guided Tours", "Artworks"];

const slideContent = [
  <ImageCard noTitle src={img1} />,
  <ImageCard noTitle src={img2} />,
  <ImageCard noTitle src={img3} />,
];

const smallContent = [
  <View style={museumCss.smallItemContainer}>
    <ImageCard noTitle noButton noShadow src={img1} width={130} height={100} />
    <Text style={museumCss.smallItemSpan}>History of Louvre</Text>
  </View>,
  <View style={museumCss.smallItemContainer}>
    <ImageCard noTitle noButton noShadow src={img2} width={130} height={100} />
    <Text style={museumCss.smallItemSpan}>Recent Additions</Text>
  </View>,
  <View style={museumCss.smallItemContainer}>
    <ImageCard noTitle noButton noShadow src={img3} width={130} height={100} />
    <Text style={museumCss.smallItemSpan}>About the Museum</Text>
  </View>,
];
const tabContent = [
  <Slideshow content={slideContent} noMargin />,
  <Slideshow content={slideContent} noMargin />,
  <Slideshow content={slideContent} noMargin />,
  <Slideshow content={slideContent} noMargin />,
];

const Museums = ({ navigation }) => {
  return (
    <Mobile>
      <MuseumNavbar onBack={() => navigation.pop()} />
      <Container marginTop={20}>
        <ImageCard noTitle src={img1} noStars />

        <View style={museumCss.titleArea}>
          <Text style={museumCss.titleCss}>Louvre Museum, Paris</Text>
          <Text style={museumCss.starSpan}>
            4.5 <BsFillStarFill style={imageCardCss.vrStarIcon} />
          </Text>
        </View>
        <AccordionText
          text={
            "The Louvre, of the Louvre Museum, is the world's most-visited museum. The museum is open today from 9:00 AM to 6:00 PM"
          }
        />
        <View>
          <Slideshow small content={smallContent} />
        </View>
        <TabView tabs={tabs} content={tabContent} />
      </Container>
      <Dock />
    </Mobile>
  );
};

export default Museums;
