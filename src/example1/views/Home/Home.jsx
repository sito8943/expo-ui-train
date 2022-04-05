import React, { useEffect, useState } from "react";

// react-native
import { Text, View } from "react-native-web";

// components
import Navbar from "../../components/Navbar/Navbar";
import Search from "../../components/Search/Search";
import Dock from "../../components/Dock/Dock";
import TabView from "../../layouts/TabView/TabView";
import ImageCard from "../../components/Card/ImageCard/ImageCard";
import Slideshow from "../../layouts/Slideshow/Slideshow";
import Mobile from "../../layouts/Mobile/Mobile";
import Container from "../../layouts/Mobile/Container/Container";

// images
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";

// styles
import homeCss from "./styles";
// import Loading from "../../components/Loading/Loading";

const tabs = ["Popular", "For You", "India", "China", "Japan"];

const slideContent = [
  <ImageCard title="Louvre Museum Paris" src={img1} />,
  <ImageCard title="Louvre Museum Paris" src={img2} />,
  <ImageCard title="Louvre Museum Paris" src={img3} />,
];
const tabContent = [
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
  <Slideshow content={slideContent} />,
];

function Home({ navigation }) {
  const [loading, setLoading] = useState(false);

  return (
    <Mobile>
      <Navbar />
      <Container>
        <View style={homeCss.titleArea}>
          <Text style={homeCss.title}>
            Visit your most favorite{" "}
            <Text style={homeCss.spanTitle}>Museums Virtually</Text>
          </Text>
        </View>
        <Search />
        <TabView tabs={tabs} content={tabContent} />
        <View style={homeCss.centerRow}>
          <Text
            style={homeCss.span}
            onClick={() => navigation.navigate("Museum")}
          >
            Show all
          </Text>
        </View>
      </Container>
      <Dock />
    </Mobile>
  );
}

export default Home;
