import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  TabbarItem,
  Epic,
  Div,
  Tabbar,
  ConfigProvider,
  ActionSheet,
  ActionSheetItem,
  Snackbar,
  Avatar,
  CellButton,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Icon16Done from "@vkontakte/icons/dist/16/done";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";

import img from "./img/1.jpg";

import "./styles/reset.sass";
import "./styles/panels.sass";
import "./styles/img.sass";

//constants
import {
  APP_IMG_SHARING_STORIES,
  APP_IMG_SHARING_WALL,
  APP_ID,
  USER_ID,
} from "./constants";

import { sharing } from "./sharing-method";
import { nativeAds } from "./ads";

import { Home, DefaultPanel, ResultPanel } from "./panels";
import axios from "axios";

window.globalURLSharing = {
  url: 0,
};

const App = () => {
  const [activePanel, setActivePanel] = useState("result-panel");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState();
  const [IMGresult, setIMGresult] = useState(null);
  const [urlSharing, setUrlSharing] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [snackbar, setSnackbar] = useState(null);
  const [getPlatform, setGetPlatform] = useState(null);
  const [userToken, setUserToken] = useState("");

  const arrImgSharingStories = [];

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();

    setTimeout(() => {
      nativeAds();
    }, 1000);

    bridge
      .send("VKWebAppGetAuthToken", {
        app_id: APP_ID,
        scope: "friends,stories,wall, photos ",
      })
      .then((res) => {
        console.log("res:", res);
        setUserToken(res.access_token);

        console.log("res userToken:", userToken);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);

  // https://vk.com/dev/wall.post
  // https://vk.com/dev/vk_bridge_events_7
  // https://vk.com/dev/vk_bridge_events_7
  // https://vk.com/dev/stories.getPhotoUploadServer

  function publishStories() {
    const urlPhotoWall = `photo-202712051_457239017,https://vk.com/app${APP_ID}`;

    // bridge
    //   .send("VKWebAppCallAPIMethod", {
    //     method: "wall.post",
    //     owner_id: USER_ID,
    //     // friends_only: 0,
    //     message: "какой то текст в самом посте",
    //     // attachments: "photo-202712051_457239017",
    //     params: {
    //       v: "5.130",
    //       access_token: userToken,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res:", res);
    //   })
    //   .catch((err) => {
    //     console.log("err:", err);
    //   });

    // bridge
    //   .send("VKWebAppCallAPIMethod", {
    //     method: "photos.createAlbum",
    //     params: {
    //       title: "ILLUMINATE TEST",
    //       description: `
    //       Узнал какой у меня психологический возраст,
    //       пройдя тест в приложении 😅
    //       Узнай какой у тебя - запускай по ссылке 👇
    //       https://vk.com/app${APP_ID}`,
    //       v: 5.21,
    //       access_token: userToken,
    //     },
    //   })
    //   .then((r) => {
    //     console.log("photos.createAlbum res:", r);

    //     console.log("photos.createAlbum r.response.id:", r.response.id);
    //     bridge
    //       .send("VKWebAppCallAPIMethod", {
    //         method: "photos.getUploadServer",
    //         params: {
    //           album_id: r.response.id,
    //           v: 5.21,
    //           access_token: userToken,
    //         },
    //       })
    //       .then((res) => {
    //         console.log("photos.getUploadServer res:", res);

    //         let url =
    //           "https://sun9-49.userapi.com/impf/c855732/v855732341/215725/RVJstbppzyk.jpg?size=1080x1080&quality=96&sign=0290799ed52f535e5b29b7ab5f500ee0&type=album";
    //         let reader = new FileReader();
    //         reader.onload = function (e) {
    //           photo = e.target.result;

    //           axios({
    //             method: "post",
    //             url: res.response.upload_url,
    //             photo: photo,
    //           })
    //             .then((response) => {
    //               console.log("axios response", response);
    //             })
    //             .catch((error) => console.log("axios error", error));
    //         };
    //         reader.readAsDataURL(url);
    //       })
    //       .catch((err) => {
    //         console.log("photos.getUploadServer err:", err);
    //       });
    //   })

    //   .catch((er) => {
    //     console.log("photos.createAlbum err:", er);
    //   });

    bridge
      .send("VKWebAppCallAPIMethod", {
        method: "photos.createAlbum",
        params: {
          title: "ILLUMINATE TEST",
          description: `какой то текст`,
          v: 5.21,
          access_token: userToken,
        },
      })
      .then((r) => {
        console.log("photos.createAlbum res:", r);

        console.log("photos.createAlbum r.response.id:", r.response.id);
        bridge
          .send("VKWebAppCallAPIMethod", {
            method: "photos.getUploadServer",
            params: {
              album_id: r.response.id,
              v: 5.21,
              access_token: userToken,
            },
          })
          .then(async (res) => {
            console.log("photos.getUploadServer res:", res);
            const photoURL =
              "https://sun9-68.userapi.com/impg/Uq7CA6qSEuTUb_dBr0ptRXcd6neSFMlr_zNT9Q/BIH4qjD2jP0.jpg?size=523x512&quality=96&sign=4cdb1146ea2e61fba2bb9e50ea7f5052&type=album";
            const buffer = await (await fetch(photoURL)).arrayBuffer();
            const formData = new FormData();
            formData.append("file", buffer);
            fetch(res.response.upload_url, {
              method: "post",
              body: formData,
            }).then((res) => {
              console.log(res);
            });

            // let url = `https://cors-anywhere.herokuapp.com/${res.response.upload_url}`;
            // fetch(url).then((r) => {
            //   r.blob().then(function (url) {
            //     let reader = new FileReader();
            //     reader.onload = function (e) {
            //       // let photo = e.target.result;

            //       axios({
            //         method: "post",
            //         url: res.response.upload_url,
            //         photo: e.target.result,
            //       })
            //         .then((response) => {
            //           console.log("ДУРКА axios response", response);
            //         })
            //         .catch((error) => console.log("ДУРКА axios error", error));
            //     };
            //     reader.readAsDataURL(url);
            //   });
            // });
          })
          .catch((err) => {
            console.log("photos.getUploadServer err:", err);
          });
      })
      // https://sun9-68.userapi.com/impg/Uq7CA6qSEuTUb_dBr0ptRXcd6neSFMlr_zNT9Q/BIH4qjD2jP0.jpg?size=523x512&quality=96&sign=4cdb1146ea2e61fba2bb9e50ea7f5052&type=album
      .catch((er) => {
        console.log("photos.createAlbum err:", er);
      });
  }

  // useEffect(() => {
  //   console.log("userToken:", userToken);

  // }, []);

  // useEffect(() => {
  //   // Определение ОС
  //   bridge
  //     .send("VKWebAppGetClientVersion")
  //     .then((result) => {
  //       setGetPlatform(result.platform);
  //       // getPlatform = result.platform;

  //       console.log("result.platform", getPlatform);
  //     })
  //     .catch((err) => console.log(err));
  // }, [getPlatform]);

  function openAlertPay(text, backgroundColor = "green") {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        duration="12000"
        layout="horizontal"
        onClose={() => setSnackbar(null)}
        before={
          <Avatar size={24} style={{ backgroundColor }}>
            {backgroundColor === "green" ? (
              <Icon16Done fill="#fff" width={14} height={14} />
            ) : (
              <Icon16Cancel fill="#fff" width={14} height={14} />
            )}
          </Avatar>
        }
      >
        {text}
      </Snackbar>
    );
  }

  function openBase() {
    setActiveModal(null);
    setPopout(
      <>
        <ActionSheet onClose={() => setPopout(null)}>
          <ActionSheetItem
            autoclose
            onClick={() =>
              sharing(
                "share-link",
                null,
                null,
                APP_IMG_SHARING_WALL[globalURLSharing.url]
              )
            }
          >
            Поделиться ссылкой
          </ActionSheetItem>
          <ActionSheetItem
            autoclose
            onClick={() =>
              sharing(
                "copy-link",
                openAlertPay,
                null,
                APP_IMG_SHARING_WALL[globalURLSharing.url]
              )
            }
          >
            Скопировать ссылку
          </ActionSheetItem>
          <ActionSheetItem
            autoclose
            onClick={() =>
              sharing(
                "story",
                null,
                null,
                APP_IMG_SHARING_STORIES[globalURLSharing.url]
              )
            }
          >
            Поделиться в истории
          </ActionSheetItem>
          <ActionSheetItem
            autoclose
            onClick={(e) =>
              sharing(
                "share-wall",
                null,
                e,
                APP_IMG_SHARING_WALL[globalURLSharing.url]
              )
            }
          >
            Поделиться на стене
          </ActionSheetItem>
        </ActionSheet>
      </>
    );
  }

  function getRandomImg(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается

    globalURLSharing.url = result;
    // setUrlSharing(result);
    setIMGresult(<Div className={`icon${result}`}></Div>);
    console.log({
      linkWall: APP_IMG_SHARING_WALL[result],
      linkStories: APP_IMG_SHARING_STORIES[result],
      result: result,
      IMGresult: <Div className={`icon${result}`}></Div>,
    });
  }

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider isWebView={true}>
      <View activePanel={activePanel} popout={popout} modal={activeModal}>
        <Home
          id="home"
          fetchedUser={fetchedUser}
          go={go}
          setIMGresult={setIMGresult}
          getRandomImg={getRandomImg}
          setActivePanel={setActivePanel}
          publishStories={publishStories}
        />
        <DefaultPanel
          id="default-panel"
          fetchedUser={fetchedUser}
          go={go}
          openAlertPay={openAlertPay}
          setActivePanel={setActivePanel}
          snackbar={snackbar}
          getPlatform={getPlatform}
        />
        <ResultPanel
          id="result-panel"
          fetchedUser={fetchedUser}
          go={go}
          IMGresult={IMGresult}
          urlSharing={urlSharing}
          openBase={openBase}
        />
      </View>
    </ConfigProvider>
  );
};

export default App;
