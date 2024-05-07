import React, { useState, useEffect, useLayoutEffect } from "react";
import { Box, Grid } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep } from "../Slice/activeStepSlice";
import { decrementStep } from "../Slice/activeStepSlice";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { setData } from "../Slice/Templatedetails";
import SwipeableEdgeDrawer from "../sidebar/SwipeableEdgeDrawer";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DeleteIcon from "@mui/icons-material/Delete";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SyncIcon from "@mui/icons-material/Sync";
import { log } from "grapejs/lib/core/grape_console";

function Preview() {
  const dispatch = useDispatch();

  const content = useSelector((state) => state.templatedetails.data);
  // const iframeurl = useSelector((state) => state.templatedetails.iframeurl);
  const iframeurl = "http://localhost:8080/template1.html";
  const navigate = useNavigate();
  const businessName = useSelector((state) => state.userData.businessName);
  const description = useSelector((state) => state.userData.description);
  const [gptWebContent, setgptWebContent] = useState();
  const [temLoader, settemLoader] = useState(false);
  const structure = {
    bussinessname: "write bussiness name here",
    shortIntro: "write here for a short intro",
    heroHeading: "write here for a heroHeading",
    shortDescription: "write here for a shortDescription",
    whyChooseUsTitle: "write here for a whyChooseUsTitle",
    whyChooseUsReason1: "write here for a whyChooseUsReason1",
    whyChooseUsReason1ShortDescription:
      "write here for a whyChooseUsReason1ShortDescription",
    whyChooseUsReason2: "write here for a whyChooseUsReason2",
    whyChooseUsReason2ShortDescription:
      "write here for a whyChooseUsReason 2 Short Description",
    whyChooseUsReason3: "write here for a whyChooseUsReason3 ",
    whyChooseUsReason3ShortDescription:
      "write here for a whyChooseUsReason3ShortDescription",
    shortServiceShortIntro: "write here for a shortServiceShortIntro",
    serviceIntro: "write here for a serviceIntro",
    callUsTextDescription: "write here for a callUsTextDescription",
    serviceDescription: "write here for a serviceDescription",
    aboutUsHeading: "write here for a aboutUsHeading",
    aboutUsDescription: "write here for a aboutUsDescription",
    contactUsHeading: "write here for a contactUsHeading",
  };

  const nextStep = () => {
    // dispatch(incrementStep());
    navigate("/preview");
  };

  const previousStep = () => {
    dispatch(decrementStep());
    navigate("/design");
  };
  const [load, setLoad] = useState(true);

  const sendMessageToChild = (chatgptContent) => {
    // const iframe = document.getElementById("myIframe");
    const iframes = document.getElementsByTagName("iframe");
    // setContent(chatgptContent);

    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];

      console.log("data sent to iframe", chatgptContent);
      iframe.contentWindow.postMessage(chatgptContent, "*");
    }
  };

  const fetchData = async () => {
    console.log("function");
    settemLoader(true);
    const prompt = JSON.stringify({
      prompt: `Write a content for website with the structure sholud ${JSON.stringify(
        structure
      )} i want response sholud json like the structure , for ${businessName} business, and the description is: ${description} slash n`,
    });
    try {
      const response = await fetch("http://localhost:8080/get-description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: prompt,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      const chatgptContent = JSON.parse(data.response);
      // console.log("chatgptcontent", chatgptContent)

      setgptWebContent(chatgptContent);

      sendMessageToChild(chatgptContent);

      settemLoader(false);
    } catch (error) {
      console.info("Error:", error);
    }
  };

  useLayoutEffect(() => {
    // settemLoader(true);

    fetchData(); // Call the async function

    // sendMessageToChild()
  }, []);

  const [Showmodel, setShowmodal] = useState(false);

  const handleChange = () => {};

  const [selectedDivs, setSelectedDivs] = useState([]);

  // Function to handle the selection of a div
  const handleDivSelection = (id) => {
    // Toggle the selected state of the clicked div
    if (selectedDivs.includes(id)) {
      setSelectedDivs(selectedDivs.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedDivs([...selectedDivs, id]);
    }
  };

  // Data for rendering divs
  const divData = [
    { id: 1, text: "Home Page" },
    { id: 2, text: "About Us" },
    { id: 3, text: "services" },
    { id: 4, text: "contact us" },

    // Add more div data as needed
  ];
  const [selectedSpanId, setSelectedSpanId] = useState(null);

  const handleSpanSelection = (id) => {
    setSelectedSpanId(id === selectedSpanId ? null : id);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="h-screen">
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          sx={{ height: "100vh" }}
          className={`sticky top-0 left-0 bg-palatinate-blue-50 ${
            Showmodel ? "hidden" : ""
          }`}
        >
          <div>
            <div className="space-y-5 px-10 lg:px-16 mt-12">
              <h1 className="text-3xl font-bold leading-9"> Website Preview</h1>
              <p className="text-base font-normal leading-6 text-app-text">
                Preview your website's potential with our interactive
                demonstration. Explore various layouts and features to visualize
                your online presence
              </p>
            </div>
            <div></div>
          </div>
          <div className="space-y-5 px-10 lg:px-16 mt-12 mb-4">
            <h1 className="text-xl font-bold leading-9"> Select Pages</h1>
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            {divData.map((item) => (
              <div
                key={item.id}
                className={`${
                  selectedDivs.includes(item.id)
                    ? "bg-palatinate-blue-600 text-white"
                    : "bg-white"
                } flex rounded p-3 justify-evenly w-48 gap-4 px-6 text-palatinate-blue-600 cursor-pointer`}
                onClick={() => handleDivSelection(item.id)}
              >
                {selectedDivs.includes(item.id) ? (
                  <CheckCircleIcon />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}{" "}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 ">
            <div className="flex xs:items-center items-start justify-between">
              <div className="flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-6 xs:gap-y-0 flex-wrap">
                <div>
                  <button
                    onClick={fetchData}
                    className="bg-white p-4 px-4 rounded min-w-[200px]"
                  >
                    <SyncIcon
                      className={`${temLoader ? "animate-spin " : ""}`}
                    />
                    Regenerate
                  </button>
                </div>
                <button
                  onClick={nextStep}
                  className="hover:opacity-70  min-w-[200px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-accent-hover  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150"
                >
                  <div className="flex justify-center items-center gap-x-2">
                    <div>Start Build</div>
                    <RocketLaunchIcon />
                  </div>
                </button>

                <button
                  onClick={previousStep}
                  className="group min-w-[200px] bg-white flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6"
                >
                  Previous Step
                </button>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={`${Showmodel ? "12" : "9"}`}>
          <button
            className="absolute  p-4 top-1/2  bg-palatinate-blue-600 text-white rounded-full ml-[-20px] z-10"
            onClick={() => setShowmodal((open) => !open)}
          >
            <NavigateNextIcon />
          </button>
          <div
            className="h-screen overflow-y-auto relative"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="w-full h-fit bg-palatinate-blue-50 border-red-100  p-2  gap-2 flex justify-center">
              {divData.map((website) => (
                <span
                  className={`p-3 rounded bg-white cursor-pointer gap-4 px-8 ${
                    website.id === selectedSpanId
                      ? "border-palatinate-blue-600 text-palatinate-blue-500 border-2"
                      : "border-none text-palatinate-blue-600"
                  }`}
                  key={website.id}
                  onClick={() => handleSpanSelection(website.id)}
                >
                  {website.text}
                </span>
              ))}
            </div>
            {/* {temLoader && (
              <button
                type="button"
                className="top-1/2 absolute right-1/2 flex"
                disabled
              >
                <svg
                  class="text-palatinate-blue-600 animate-spin"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-100"
                  ></path>
                </svg>
              </button>
            )} */}
            <iframe
              id="myIframe"
              title="Child iFrame"
              className={` w-full h-[1600px] relative left-0 top-0 origin-top-left `}
              src={iframeurl}
            />
          </div>

          {/* <div className='sticky bottom-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 bg-white'>
              <div className='flex xs:items-center items-start justify-between'>
                <div className='flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-10 xs:gap-y-0 flex-wrap'>
                  <button onClick={nextStep} className='hover:opacity-70  min-w-[142px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-palatinate-blue-600  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150'>
                    <div className='flex justify-center items-center gap-x-2'>
                      <div>Start Build</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>

                    </div>

                  </button>




                  <button onClick={previousStep} className='group  flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6'>
                    Previous Step
                  </button>
                </div>
              </div>
            </div> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Preview;
