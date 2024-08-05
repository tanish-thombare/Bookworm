import styled from "styled-components";
import HomepageLayout from "../features/Homepage/HomepageLayout";
import SideMenu from "../features/Homepage/SideMenu";
import AppLayout from "./AppLayout";
import Footer from "../features/Homepage/Footer";

export default function Homepage() {
  return (
    <>
      <HomepageLayout />
      <Container>
        <SideMenu />
        <AppLayout />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 50px;
  display: flex;
`;
