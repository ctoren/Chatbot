import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi. What tv show genre do you want to watch?", {
    widget: "learningOptions",
  }),
],

widgets: [
  {
    widgetName: "learningOptions",
    widgetFunc: (props) => <LearningOptions {...props} />
  },
  {
    widgetName: "javascriptLinks",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: "Modern Family",
          id: 1,
        },
        {
          text: "The Office",
          id: 2,
        },
        {
          text: "Abbott Elementary",
          id: 3,
        },
      ],
    },
},
  {
    widgetName: "javascriptLinks",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
      options: [
        {
          text: "Modern Family",
          id: 1,
        },
        {
          text: "The Office",
          id: 2,
        },
        {
          text: "Abbott Elementary",
          id: 3,
        },
      ],
    },
},
]

};

export default config