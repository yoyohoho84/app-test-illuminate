import React, { useEffect } from "react";

import {
  Panel,
  PanelHeader,
  Button,
  Div,
  Group,
  FormItem,
  NativeSelect,
} from "@vkontakte/vkui";

//constants
import { APP_IMG_SHARING_STORIES, APP_IMG_SHARING_WALL } from "../constants";
import { nativeAds } from "../ads";
import { sharing } from "../sharing-method";

const ResultPanel = ({ id, go, IMGresult, openBase }) => {
  useEffect(() => {
    setTimeout(() => {
      nativeAds();
    }, 1000);
  }, []);

  return (
    <Panel id={id}>
      <PanelHeader></PanelHeader>

      <Div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "450px",

          // marginTop: "150px",
        }}
      >
        {IMGresult}

        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "600px",

            // marginTop: "150px",
          }}
        >
          <Div>ПРИЧИНА СМЕРТИ</Div>
          <Div>
            {" "}
            <Button
              // onClick={openBase}
              onClick={() =>
                sharing(
                  "story",
                  null,
                  null,
                  APP_IMG_SHARING_STORIES[globalURLSharing.url]
                )
              }
              style={{
                width: "60px",
                height: "20px",
                backgroundColor: "#26b59b",
                marginTop: "5px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                }}
              >
                Узнать
              </span>
            </Button>
          </Div>
        </Div>

        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "600px",

            // marginTop: "150px",
          }}
        >
          <Div>ИМЯ СУЖЕНОГО</Div>
          <Div>
            {" "}
            <Button
              // onClick={openBase}
              onClick={() =>
                sharing(
                  "story",
                  null,
                  null,
                  APP_IMG_SHARING_STORIES[globalURLSharing.url]
                )
              }
              style={{
                width: "60px",
                height: "20px",
                backgroundColor: "#26b59b",
                marginTop: "5px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                }}
              >
                Узнать
              </span>
            </Button>
          </Div>
        </Div>

        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "600px",

            // marginTop: "150px",
          }}
        >
          <Div>МЕСТО ПЕРВОГО/СЛЕДУЮЩЕГО СЕКСА</Div>
          <Div>
            {" "}
            <Button
              // onClick={openBase}
              onClick={() =>
                sharing(
                  "story",
                  null,
                  null,
                  APP_IMG_SHARING_STORIES[globalURLSharing.url]
                )
              }
              style={{
                width: "60px",
                height: "20px",
                backgroundColor: "#26b59b",
                marginTop: "5px",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                }}
              >
                Узнать
              </span>
            </Button>
          </Div>
        </Div>

        <Div>
          <Button
            // onClick={openBase}
            onClick={() =>
              sharing(
                "story",
                null,
                null,
                APP_IMG_SHARING_STORIES[globalURLSharing.url]
              )
            }
            style={{
              width: "200px",
              height: "40px",
              backgroundColor: "#26b59b",
              marginTop: "5px",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "15px",
              }}
            >
              Поделиться в истории
            </span>
          </Button>
        </Div>
        <Div>
          <Button
            onClick={go}
            data-to="home"
            style={{
              width: "200px",
              height: "40px",
              backgroundColor: "#26b59b",
              marginTop: "5px",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "15px",
              }}
            >
              Пройти еще раз
            </span>
          </Button>
        </Div>
      </Div>
    </Panel>
  );
};

export { ResultPanel };
