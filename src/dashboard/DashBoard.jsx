import { Box } from "@mui/material";
import React, { useState, useRef, useLayoutEffect } from "react";
import Grid from "@mui/material/Grid";
import NextButtons from "../nextbtn/NextButtons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setIframeUrl } from "../Slice/Templatedetails";
import { setTemplatename, setTemplateId } from "../Slice/userDetailsSlice";
import { Link, useNavigate } from "react-router-dom";

function DashBoard() {
  const [isActive, setIsActive] = useState(false);
  const [selectedTemplateDetails, setSelectedTemplateDetails] = useState({
    link: "http://localhost:8080/template1.html",
    option: "option 1",
    templateid: 1,
    templatename: "common tempate 1",
  });
  const [Loader, setLoader] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
    console.log("clicked");
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const businessName = useSelector((state) => state.userData.businessName);
  const description = useSelector((state) => state.userData.description);
  const dispatch = useDispatch();
  const userdetail = useSelector((state) => state.userData);
  const templname = useSelector((state) => state.templatedetails.templateid);
  const navigate = useNavigate();

  const [temLoader, settemLoader] = useState(false);
  const iframeRef = useRef();

  const nextStep = async () => {
    setLoader(true);
    try {
      const response = await fetch("/process-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userdetail }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Response:", data);

      // Dispatch action to set iframe URL
      dispatch(setIframeUrl(data.iframeurl));
      setLoader(false);
      if (!Loader) {
        navigate("/preview");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const previousStep = () => {
    dispatch(decrementStep());
    navigate("/image");
  };

  const webSiteList = [
    {
      link: "http://localhost:8080/Template%202.html",
      option: "option 1",
      templateid: 1,
      templatename: "common tempate 1",
    },
    {
      link: "http://localhost:8080/template3.html",
      option: "option 2",
      templateid: 2,
      templatename: "common tempate 2",
    },
    {
      link: "http://localhost:8080/template1.html",
      option: "option 3",
      templateid: 3,
      templatename: "common tempate 3",
    },
    {
      link: "http://localhost:8080/template4.html",
      option: "option 4",
      templateid: 4,
      templatename: "common tempate 4",
    },
    {
      link: "http://localhost:8080/",
      option: "option 5",
      templateid: 5,
      templatename: "common tempate 5",
    },
    {
      link: "http://localhost:8080/",
      option: "option 6",
      templateid: 6,
      templatename: "common tempate 6",
    },
  ];

  const setContent = () => {
    dispatch(setData(data));
  };

  const setDetails = () => {
    const tempid = selectedTemplateDetails.templateid;
    const tempname = selectedTemplateDetails.templatename;
    dispatch(setTemplateId(tempid));
    dispatch(setTemplatename(tempname));
  };

  const handleBoxClick = async (index) => {
    setActiveIndex(index);
    // setSelectedTemplateDetails({
    //   link: webSiteList[index].link,
    //   option: webSiteList[index].option,
    //   templateid: webSiteList[index].templateid,
    //   templatename: webSiteList[index].templatename,
    // });
    setDetails();

    setContent();
  };

  // const sendMessageToChild = () => {
  //   const iframe = document.getElementById("myIframe");
  //   iframe.contentWindow.postMessage(data, "*");
  // };

  // useEffect(() => {
  //   const iframe = document.getElementById("myIframe");
  //   console.log(iframe.contentDocument)
  //   iframe.onload = () => {
  //     sendMessageToChild();
  //   }

  //   // sendMessageToChild();
  //   // console.log("hello")
  // }, []);

  const [gptWebContent, setgptWebContent] = useState();

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

  // Function to send initial data to the child iframe
  const sendMessageToChild = (chatgptContent) => {
    // const iframe = document.getElementById("myIframe");
    const iframes = document.getElementsByTagName("iframe");

    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];

      console.log("data sent to iframe", chatgptContent);
      iframe.contentWindow.postMessage(chatgptContent, "*");
    }
  };

  // const iframe = document.getElementById("myIframe");
  const demofun = () => {
    setTimeout(() => {
      iframeRef.contentWindow.postMessage(gptWebContent, "*");
    }, 100);
  };

  useLayoutEffect(() => {
    settemLoader(true);
    const fetchData = async () => {
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

    fetchData(); // Call the async function

    // sendMessageToChild()
  }, []);

  // useEffect hook to send initial data to the child iframe when it loads
  // useEffect(() => {
  //   const iframe = document.getElementById("myIframe");
  //   iframe.onload = () => {
  //     sendMessageToChild();
  //   };
  // }, []);

  // useLayoutEffect(()={
  //   demofun();
  // })

  // useEffect hook to handle scrolling and mouse events
  useEffect(() => {
    const handleMouseEnter = (iframe) => {
      iframe.contentWindow.postMessage(
        { type: "scroll", scrollAmount: 20 },
        "*"
      );
      // Adjust the scroll amount as needed
    };

    const handleMouseLeave = (iframe) => {
      iframe.contentWindow.postMessage(
        { type: "stopScrolling", scrollAmount: 20 },
        "*"
      );
      // Send message to stop scrolling when mouse leaves the div
    };

    const iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < iframes.length; i++) {
      const iframe = iframes[i];
      iframe.addEventListener("mouseenter", () => handleMouseEnter(iframe));
      iframe.addEventListener("mouseleave", () => handleMouseLeave(iframe));
    }

    return () => {
      for (let i = 0; i < iframes.length; i++) {
        const iframe = iframes[i];
        iframe.removeEventListener("mouseenter", () =>
          handleMouseEnter(iframe)
        );
        iframe.removeEventListener("mouseleave", () =>
          handleMouseLeave(iframe)
        );
      }
    };
  }, []);

  // useLayoutEffect(() => {

  // document.getElementById("myIframe");
  //   console.log(iframe);
  //   iframe.onload = () => {
  //     sendMessageToChild();
  //     console.log("faizal");
  //   };

  // }, []);

  return (
    <div>
      <div className="">
        <div className="space-y-5 px-10 lg:px-16 mt-12">
          <h1 className="text-3xl font-bold leading-9">
            {" "}
            Choose the structure for your website
          </h1>
          <p className="text-base font-normal leading-6 text-app-text">
            Select your preferred structure for your website from the options
            below.
          </p>
        </div>
        <div className="pb-2 px-10 lg:px-16 xl:pr-36 xl:pl-24 pt-12 custom-confirmation-modal-scrollbar relative">
          <div className="flex flex-row flex-wrap items-start gap-10 mb-10 select-none">
            {webSiteList.map((list, index) => (
              <div
                key={index}
                className={`w-[calc(50%_-_20px)] border-app-border-hover cursor-pointer p-1 select-none ${
                  activeIndex === index
                    ? "border-2 border-plantinate-500 rounded-lg bg-palatinate-blue-100"
                    : "border"
                }`}
                onClick={() => handleBoxClick(index)} // Call handleBoxClick function when box is clicked
              >
                <div className="w-full h-fit p-1 select-none " id="your-div-id">
                  <div className=" border border-app-border-hover p-1 select-none">
                    <div className="w-full  max-h-[calc(19_/_15_*_100%)] pt-[calc(19_/_15_*_100%)] select-none relative shadow-md overflow-hidden origin-top-left bg-neutral-300">
                      {temLoader && (
                        <button
                          type="button"
                          class="top-1/2 absolute right-1/2 flex"
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
                      )}
                      <iframe
                        ref={iframeRef}
                        id="myIframe"
                        title="Child iFrame"
                        className={`scale-[0.33] w-[1200px] h-[1600px] absolute left-0 top-0 origin-top-left select-none ${
                          temLoader ? "opacity-0 " : "opacity-100"
                        }`}
                        src={list.link}
                      />

                      <div className="absolute bottom-0 w-full h-14 flex items-center justify-between bg-white px-5 shadow-template-info">
                        <div className="zw-base-semibold text-app-heading capitalize">
                          {list.option}
                        </div>
                        {activeIndex === index && (
                          <CheckCircleIcon className="text-palatinate-blue-600" />
                        )}{" "}
                        {/* Display tick mark if activeIndex matches */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sticky bottom-0 pb-8 bg-app-light-background pt-3 px-10 lg:px-16 xl:px-36 z-50 bg-white">
          <div className="flex xs:items-center items-start justify-between">
            <div className="flex flex-row xs:flex-row xs:items-center items-start gap-x-10 gap-y-10 xs:gap-y-0 flex-wrap">
              <button
                onClick={nextStep}
                className="hover:opacity-70  min-w-[142px]  inline-flex items-center justify-center    bg-palatinate-blue-600 hover:bg-accent-hover  text-white pl-[25px] pr-[23px] py-[13px]  h-[50px]  rounded-md zw-btn-base shadow-sm  focus:outline-none disabled:opacity-25 transition ease-in-out duration-150"
              >
                <div className="flex justify-center items-center gap-x-2">
                  <div>Continue</div>
                  {Loader && (
                    <button
                      type="button"
                      class="bg-palatinate-blue-600 "
                      disabled
                    >
                      <svg
                        class="text-white animate-spin"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                          class="text-gray-900"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </button>

              <Link to={"/description"} onClick={previousStep}>
                <button className="group flex items-center justify-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-150 ease-in-out disabled:opacity-25 disabled:cursor-not-allowed text-app-secondary bg-app-light-background border border-app-secondary shadow-sm py-2.5 text-sm font-semibold leading-5 h-[50px] px-6">
                  Previous Step
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
