import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "Leo the Bot",
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
    widgetName: "comedyLinks",
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
  widgetName: "dramaLinks",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "Breaking Bad",
        id: 1,
      },
      {
        text: "The Morning Show",
        id: 2,
      },
      {
        text: "Scandal",
        id: 3,
      },
    ],
  },
},
{
  widgetName: "actionLinks",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "Killing Eve",
        id: 1,
      },
      {
        text: "Jack Reacher",
        id: 2,
      },
      {
        text: "The Night Agent",
        id: 3,
      },
    ],
  },
},
{
  widgetName: "scifiLinks",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "Westworld",
        id: 1,
      },
      {
        text: "Severence",
        id: 2,
      },
      {
        text: "Stranger Things",
        id: 3,
      },
    ],
  },
},
{
  widgetName: "thrillerLinks",
  widgetFunc: (props) => <LinkList {...props} />,
  props: {
    options: [
      {
        text: "The Haunting of Hill House",
        id: 1,
      },
      {
        text: "Penny Dreadful",
        id: 2,
      },
      {
        text: "The Walking Dead",
        id: 3,
      },
    ],
  },
},
]

};

export default config
