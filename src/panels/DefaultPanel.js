import React, { useState, useEffect } from "react";

import {
  Panel,
  PanelHeader,
  Button,
  Div,
  Group,
  Header,
  Cell,
} from "@vkontakte/vkui";

import { addGroup } from "../bridge-method";

const DefaultPanel = ({
  id,
  go,
  openAlertPay,
  setActivePanel,
  snackbar,
  getPlatform,
}) => {
  // useEffect(() => {
  //   addGroup(true, openAlertPay);
  // },[])

  function verificationSubscription() {
    addGroup(openAlertPay, setActivePanel);
  }

  return (
    <Panel id={id}>
      <PanelHeader></PanelHeader>
      <Div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        {getPlatform === "web" ? (
          <Div
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              margin: "0px 10px 0px 10px",
            }}
          >
            Хотите подписаться на наше сообщество?
          </Div>
        ) : (
          <>
            <Div
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                margin: "0px 10px 0px 10px",
              }}
            >
              Хотите подписаться на
            </Div>
            <Div
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                margin: "0px 10px 0px 10px",
              }}
            >
              наше сообщество?
            </Div>
          </>
        )}

        <Button
          onClick={() => addGroup(openAlertPay, setActivePanel)}
          style={{
            width: "200px",
            height: "80px",
            backgroundColor: "#165df5",
            marginTop: "50px",
            borderRadius: "45px",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            Подписаться
          </span>
        </Button>
      </Div>
      {snackbar}
    </Panel>
  );
};

export { DefaultPanel };
