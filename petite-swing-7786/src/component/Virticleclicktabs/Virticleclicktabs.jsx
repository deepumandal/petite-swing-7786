import {
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

const Virticleclicktabs = () => {
  const [ismobilescreen] = useMediaQuery("(max-width: 480px)");

const tabshere = [
    {
        title : "Proposals",
        imgurl : "https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a6e751beef00c6c1cf08_proposals.svg"
    },
    {
        title : "Contracts",
        imgurl : ""
    },
    {
        title : "Client CRM",
        imgurl : ""
    },
    {
        title : "Time Tracking",
        imgurl : ""
    },
    {
        title : "Invoies",
        imgurl : ""
    },
    {
        title : "Task Tracking",
        imgurl : ""
    },
    {
        title : "Accounting & Taxes",
        imgurl : ""
    },
    {
        title : "Forms",
        imgurl : ""
    },
]


  return (
    <>
      {ismobilescreen ? (
        2
      ) : (
        <Tabs
          display={"flex"}
          border={"1px"}
          borderColor={"red"}
          w={{
            sm: "700px",
            md: "900px",
            lg: "900px",
            base: "90%",
          }}
          m={"auto"}
        >
          <TabList display={"flex"} w={"600px"} flexDir={"column"}>
          
           {
            tabshere.map((item,i)=>{
                return <Tab  display={"flex"}
                justifyContent={"flex-start"}
                border={"1px"}
                fontSize={{
                  sm: "21px",
                }}
                lineHeight={{
                  sm: "34px",
                }}
                color={"#4c525a"}
                fontWeight={500}
                letterSpacing={"0.9px"}
                fontFamily={"sans-serif"} >
 <Image
                w={"15px"}
                m={"9px"}
                src={
                  item.imgurl
                }
              />
              {item.title}
                </Tab>
            })
           }
          </TabList>

          <TabPanels border={"1px"}>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default Virticleclicktabs;
