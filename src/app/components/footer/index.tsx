import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
    `}
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    `}
`;

const BottomContainer = styled.div`
  ${tw`
  min-w-full
  flex
  justify-center
  md:justify-start
  mt-7
  md:mt-1
  `}
`;

const CopyrightText = styled.span`
  font-size: 11px;
  ${tw`
    text-gray-400
  `}
`;

const AboutContainer = styled.div`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
    `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-6
    md:mt-0
  `}
`;

const LinksList = styled.ul`
  ${tw`
  outline-none
    list-none
    flex
    flex-col
    `}
`;

const ListsItem = styled.li`
  ${tw`
    text-sm
    text-white
    mb-3
    `}

  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-200
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
    bg-red-500
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color='white' bgColor='dark' />
          <AboutText>
            Your car is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListsItem>
              {" "}
              <a href='#'>Home</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>About Us</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>Services</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>Models</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>Blog</a>{" "}
            </ListsItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListsItem>
              {" "}
              <a href='#'>FAQ</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>Contact Us</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>Support</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>Privacy Policy</a>{" "}
            </ListsItem>
            <ListsItem>
              {" "}
              <a href='#'>Terms &amp; Conditions</a>{" "}
            </ListsItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+628 131-709-0804</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.id</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
