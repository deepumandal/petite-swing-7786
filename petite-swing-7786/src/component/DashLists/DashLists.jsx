import {
  Box,
  Flex,
  HStack,
  Image,
  MenuItemOption,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { HellobonsaiContext } from "../../Context/HellobonsaiContext";

const DashLists = () => {
  const lists = [
    {
      title: "Dashboard",
      color: "#292a2d",
      icon: "",
      link : "/Dashboard"
    },
    {
      title: "Clients",
      color: "#292a2d",
      icon: "",
      link : "/clients"
    },
    {
      title: "Projects",
      color: "#292a2d",
      icon: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a76751beefc0cac1d2ee_projects.svg",
      link : "/Projects"
    },
    {
      title: "",
      color: "",
      icon: "",
      link : ""
    },
    {
      title: "Proposals",
      color: "#292a2d",
      icon: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a6e751beef00c6c1cf08_proposals.svg",
      link : "/proposals"
    },
    {
      title: "Contracts",
      color: "#292a2d",
      icon: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ce5e2feb667_icon%202.svg",
      link : "/contracts"
    },
    {
      title: "Invoices",
      color: "#292a2d",
      icon: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cc211feb68d_icon%205.svg",
      link : "/invoices"
    },
    {
      title: "",
      color: "",
      icon: "",
      link : ""
    },
    {
      title: "Time Tracking",
      color: "#292a2d",
      icon: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6fccfeb664_icon%204.svg",
      link : "/timeTracking"
    },
    {
      title: "Tasks",
      color: "#292a2d",
      icon: "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c852bfeb68c_icon%206.svg",
      link : "/tasks"
    },
    {
      title: "",
      color: "",
      icon: "",
      link : "/Dashboard"
    },
    {
      title: "Cash",
      color: "#292a2d",
      icon: "",
      link : "/cash"
    },
    {
      title: "Accounting",
      color: "#292a2d",
      icon: "",
      link : "/accounting"
    },
    {
      title: "Taxes",
      color: "#292a2d",
      icon: "",
      link : "/taxes"
    },
  ];

  const {set , route} =  useContext(HellobonsaiContext)

const handlechangecontext = (item)=>{
set(item)
}

  return (
    <HStack >
      <ul>
        {lists.map((item, i) => {
          return (
           
            <VStack key={i} alignItems={"left"} gap={"10px"} >
              {/* <Text> {item.title} </Text> */}
              <Flex onClick={()=>handlechangecontext(item.link)} m={0.1}>
                {/* {item.icon !== "" && <Image w={"20px"} src={item.icon} />} */}
                {item.title !== "" ? <Text
                fontSize={"14px"}
                fontWeight={600}
                lineHeight={"20px"}
                color={"#292a2d"}
                
                > {item.title} </Text> : <br />}
              </Flex>
            </VStack>
           
          );
        })}
      </ul>
    </HStack>
  );
};

export default DashLists;
