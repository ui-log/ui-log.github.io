const e={key:"v-00da267e",path:"/docs/Nextjs/2024-04-05-8WaystoImplementConditionalRenderingTechniquesinReact/",title:"\uB9AC\uC561\uD2B8\uC5D0\uC11C \uC870\uAC74\uBD80 \uB80C\uB354\uB9C1\uC744 \uAD6C\uD604\uD558\uB294 8\uAC00\uC9C0 \uBC29\uBC95",lang:"ko",frontmatter:{title:"\uB9AC\uC561\uD2B8\uC5D0\uC11C \uC870\uAC74\uBD80 \uB80C\uB354\uB9C1\uC744 \uAD6C\uD604\uD558\uB294 8\uAC00\uC9C0 \uBC29\uBC95",description:"",date:"2024-04-05 19:53",sidebarDepth:0,tag:"Tech",thumbnail:null,originalTitle:"8 Ways to Implement Conditional Rendering Techniques in React",link:"https://medium.com/gitconnected/code-like-a-pro-advanced-conditional-rendering-techniques-in-react-8e0cfb9aa04f"},excerpt:"",headers:[{level:2,title:"React\uC5D0\uC11C \uC870\uAC74\uBD80 \uB80C\uB354\uB9C1 \uC774\uD574\uD558\uAE30",slug:"react\u110B\u1166\u1109\u1165-\u110C\u1169\u1100\u1165\u11AB\u1107\u116E-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175",children:[]},{level:2,title:"If/Else\uBB38",slug:"if-else\u1106\u116E\u11AB",children:[]},{level:2,title:"\uC0BC\uD56D \uC5F0\uC0B0\uC790 (?)",slug:"\u1109\u1161\u11B7\u1112\u1161\u11BC-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161",children:[]},{level:2,title:"\uB17C\uB9AC AND (&&):",slug:"\u1102\u1169\u11AB\u1105\u1175-and",children:[]},{level:2,title:"\uB110 \uBCD1\uD569 \uC5F0\uC0B0\uC790 (??)",slug:"\u1102\u1165\u11AF-\u1107\u1167\u11BC\u1112\u1161\u11B8-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161",children:[]},{level:2,title:"\uC2A4\uC704\uCE58 \uCF00\uC774\uC2A4 \uBB38\uC7A5:",slug:"\u1109\u1173\u110B\u1171\u110E\u1175-\u110F\u1166\u110B\u1175\u1109\u1173-\u1106\u116E\u11AB\u110C\u1161\u11BC",children:[]},{level:2,title:"\uC5D0\uB7EC \uBC14\uC6B4\uB354\uB9AC:",slug:"\u110B\u1166\u1105\u1165-\u1107\u1161\u110B\u116E\u11AB\u1103\u1165\u1105\u1175",children:[]},{level:2,title:"Higher-Order Components (HOCs):",slug:"higher-order-components-hocs",children:[]},{level:2,title:"\uB80C\uB354 \uD504\uB86D(Render Props):",slug:"\u1105\u1166\u11AB\u1103\u1165-\u1111\u1173\u1105\u1169\u11B8-render-props",children:[]},{level:2,title:"React\uC5D0\uC11C \uC870\uAC74\uBD80 \uB80C\uB354\uB9C1\uC744 \uC704\uD55C \uCD5C\uC0C1\uC758 \uAD00\uD589",slug:"react\u110B\u1166\u1109\u1165-\u110C\u1169\u1100\u1165\u11AB\u1107\u116E-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u110E\u116C\u1109\u1161\u11BC\u110B\u1174-\u1100\u116A\u11AB\u1112\u1162\u11BC",children:[]},{level:2,title:"\uC870\uAC74\uBD80 \uB80C\uB354\uB9C1\uC5D0\uC11C\uC758 \uC720\uC6A9\uD55C \uD301, \uD2B8\uB9AD \uBC0F \uD754\uD55C \uD568\uC815\uB4E4",slug:"\u110C\u1169\u1100\u1165\u11AB\u1107\u116E-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC\u110B\u1166\u1109\u1165\u110B\u1174-\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1110\u1175\u11B8-\u1110\u1173\u1105\u1175\u11A8-\u1106\u1175\u11BE-\u1112\u1173\u11AB\u1112\u1161\u11AB-\u1112\u1161\u11B7\u110C\u1165\u11BC\u1103\u1173\u11AF",children:[]},{level:2,title:"1. \uC0BC\uD56D \uC5F0\uC0B0\uC790\uC758 \uB0A8\uC6A9:",slug:"_1-\u1109\u1161\u11B7\u1112\u1161\u11BC-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161\u110B\u1174-\u1102\u1161\u11B7\u110B\u116D\u11BC",children:[]},{level:2,title:"2. \uB17C\uB9AC && \uC5F0\uC0B0\uC790\uC758 \uB0A8\uC6A9:",slug:"_2-\u1102\u1169\u11AB\u1105\u1175-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161\u110B\u1174-\u1102\u1161\u11B7\u110B\u116D\u11BC",children:[]},{level:2,title:"3. Nullish Coalescing Operator ??\uC758 \uC624\uC6A9:",slug:"_3-nullish-coalescing-operator-\u110B\u1174-\u110B\u1169\u110B\u116D\u11BC",children:[]},{level:2,title:"\uACB0\uB860",slug:"\u1100\u1167\u11AF\u1105\u1169\u11AB",children:[]}],git:{updatedTime:1713854865e3},filePathRelative:"docs/Nextjs/2024-04-05-8WaystoImplementConditionalRenderingTechniquesinReact/README.md"};export{e as data};
