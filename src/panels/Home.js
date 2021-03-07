import React from "react";

import {
  Panel,
  PanelHeader,
  Button,
  Div,
  Group,
  FormItem,
  NativeSelect,
} from "@vkontakte/vkui";
import { dataInput } from "../helpers";
import { InputItem } from "../components";

const Home = ({
  id,
  go,
  getRandomImg,
  setIMGresult,
  setActivePanel,
  publishStories,
}) => {
  const renderInputs = dataInput.map((item, index) => {
    return (
      <InputItem
        key={item.id}
        question={item.question}
        answer_1={item.answer_1}
        answer_2={item.answer_2}
        answer_3={item.answer_3}
        answer_4={item.answer_4}
      />
    );
  });

  return (
    <Panel id={id}>
      <PanelHeader>illuminate</PanelHeader>

      <Group>
        {renderInputs}

        <FormItem>
          <Button
            // onClick={() => {
            //   getRandomImg(0, 15);
            //   setActivePanel("result-panel");
            // }}
            onClick={publishStories}
            stretched
            style={{
              //   width: "200px",
              height: "60px",
              backgroundColor: "#26b59b",
              marginTop: "5px",
              borderRadius: "40px",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Узнать результат
            </span>
          </Button>
        </FormItem>
      </Group>
    </Panel>
  );
};

export { Home };
