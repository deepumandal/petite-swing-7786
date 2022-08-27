import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Input,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  Flex,
  AccordionPanel,
  Heading,
  Text,
  Box,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import Bonsaicategory from "../Bonsaicategory.jsx/Bonsaicategory";
import { Link } from "react-router-dom";

const Hamburgur = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const tabshere = [
    {
      title: "Proposals",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a6e751beef00c6c1cf08_proposals.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a671191f2adc6411e428_proposals%20icon%20-%20green.svg",
      name: "Win More Work",
      des: "With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.",
      a: "EXPLORE PROPOSALS",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png",
    },
    {
      title: "Contracts",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ce5e2feb667_icon%202.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c3856feb688_Projects-green.svg",
      name: "Protect Your Business",
      des: "Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.",
      a: "EXPLORE CONTRACTS",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png",
    },
    {
      title: "Client CRM",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a76751beefc0cac1d2ee_projects.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a7d97f3b430085e681ef_projects.svg",
      name: "Stay Organized",
      des: "Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.",
      a: "EXPLORE PROJECTS",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png",
    },
    {
      title: "Time Tracking",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6fccfeb664_icon%204.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c8e88feb67d_time-tracking%20colour.svg",
      name: "Keep It Simple",
      des: "Easily track the time you're working, automatically populate timesheets and seamlessly switch between your projects for the day.",
      a: "EXPLORE TIME TRACKING",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png",
    },
    {
      title: "Invoies",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cc211feb68d_icon%205.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c76befeb677_Invoices-colour.svg",
      name: "Get Paid Faster",
      des: "Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.",
      a: "EXPLORE INVOICES",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png",
    },
    {
      title: "Task Tracking",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c852bfeb68c_icon%206.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c772ffeb689_task-management%20colour.svg",
      name: "Be More Effective",
      des: "Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.",
      a: "EXPLORE TASK",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png",
    },
    {
      title: "Accounting & Taxes",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cee21feb676_icon%207.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5f6afeb68f_accounting-taxes%20colour.svg",
      name: "Automate Your Finances",
      des: "Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.",
      a: "EXPLORE ACCOUNTING & TAXES",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png",
    },
    {
      title: "Forms",
      imgurl:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e72bbe6e8264bb7bbfe4820_dark-forms.svg",
      focus:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e6f51555cbcc558fe2ceb71_icon_form.svg",
      name: "Ask Your Clients",
      des: "Create your own customized forms and questionnaires for clients and kicking off new projects",
      a: "EXPLORE FORMS",
      Image:
        "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      <HamburgerIcon
        ref={btnRef}
        w={6}
        h={6}
        colorscheme="teal"
        onClick={onOpen}
      />
      <Drawer
        size={"lg"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent p={4} w={"100px"}>
          <DrawerHeader >
            <Image
              src={
                "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7caaf7feb674_logo%20copy.svg"
              }
            />
            <DrawerCloseButton  mt={"20px"} mr={"20px"} />
          </DrawerHeader>

          <DrawerBody
            display={"flex"}
            justifyContent={"center"}
            padding={"0px"}
          >
            <Accordion allowToggle p={4} mt={"60px"} w={"110%"}>
              <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                <h2>
                  <AccordionButton
                    // border={"1px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    fontSize={{
                      sm: "21px",
                    }}
                    lineHeight={{
                      sm: "34px",
                    }}
                    alignItems={"center"}
                    color={"#4c525a"}
                    fontWeight={500}
                    letterSpacing={"0.9px"}
                    fontFamily={"sans-serif"}
                  >
                    <Box flex="1" textAlign="left">
                      Product
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Bonsaicategory />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                <h2>
                  <AccordionButton
                    display={"flex"}
                    justifyContent={"space-between"}
                    fontSize={{
                      sm: "21px",
                    }}
                    lineHeight={{
                      sm: "34px",
                    }}
                    alignItems={"center"}
                    color={"#4c525a"}
                    fontWeight={500}
                    letterSpacing={"0.9px"}
                    fontFamily={"sans-serif"}
                  >
                    <Link to='contractTemplate'>
                    <Box flex="1" textAlign="left">
                      Templates
                    </Box>
                    </Link>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <ul>
        {
          tabshere.map((item,i)=>{
            return  <Flex key={i}
             alignItems={"center"}
           >
             <Image
               w={"15px"}
               m={"9px"}
               src={item.imgurl}
             />
             {item.title}
           </Flex>
          })
        }
        </ul>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                <h2>
                  <AccordionButton
                    display={"flex"}
                    justifyContent={"space-between"}
                    fontSize={{
                      sm: "21px",
                    }}
                    lineHeight={{
                      sm: "34px",
                    }}
                    alignItems={"center"}
                    color={"#4c525a"}
                    fontWeight={500}
                    letterSpacing={"0.9px"}
                    fontFamily={"sans-serif"}
                  >
                    <Box flex="1" textAlign="left">
                      Pricing
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem marginTop={"none"} w={"100%"} m={"auto"}>
                <h2>
                  <AccordionButton
                    display={"flex"}
                    justifyContent={"space-between"}
                    fontSize={{
                      sm: "21px",
                    }}
                    lineHeight={{
                      sm: "34px",
                    }}
                    alignItems={"center"}
                    color={"#4c525a"}
                    fontWeight={500}
                    letterSpacing={"0.9px"}
                    fontFamily={"sans-serif"}
                  >
                    <Box flex="1" textAlign="left">
                      Reviews
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>

            {/* <Accordion mt={"60px"} >
          {tabshere.map((item, i) => {
            return (
              <AccordionItem key={i} marginTop={"none"} w={"90%"} m={"auto"}>
                <h2>
                  <AccordionButton
                  onClick={() => setSelected(i)}
                      display={"flex"}
                      justifyContent={"space-between"}
                      fontSize={{
                        sm: "21px",
                      }}
                      lineHeight={{
                        sm: "34px",
                      }}
                      alignItems={"center"}
                      color={"#4c525a"}
                      fontWeight={500}
                      letterSpacing={"0.9px"}
                      fontFamily={"sans-serif"}>
                    <Flex
                     alignItems={"center"}
                    >
                      <Image
                        w={"15px"}
                        m={"9px"}
                        src={selected !== i ? item.imgurl : item.focus}
                      />
                      {item.title}
                    </Flex>
                    <ChevronRightIcon color={"#4c525a"} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} textAlign={"left"}  >


<Heading
fontSize={{
  base: "22px",
}}
lineHeight={{
  base: "75px",
}}
color={"#4c525a"}
fontWeight={400}
>
  {item.name}
</Heading>
<Text
fontSize={{
  base: "15px",
}}
lineHeight={{
  base: "21px",
}}
color={"#4c525a"}
fontWeight={300}
>
  {item.des}
</Text>
<Image w={"80%"} src={item.Image} />
<Text
 fontSize={{
  base: "16px",
}}
lineHeight={{
  base: "70px",
}}
color={"#00a37e"}
fontWeight={600}
>
  {item.a}  <ArrowForwardIcon w={"30px"} />
</Text>


                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Hamburgur;
