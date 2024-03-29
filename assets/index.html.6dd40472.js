const e={key:"v-1acf8846",path:"/docs/Tech/2024-03-29-CraftingaProfessional-LookingCarouselwithReactandMUI/",title:"React\uC640 MUI\uB85C \uAE54\uB054\uD55C \uB514\uC790\uC778\uC758 \uCE90\uB7EC\uC140 \uB9CC\uB4E4\uAE30",lang:"ko",frontmatter:{title:"React\uC640 MUI\uB85C \uAE54\uB054\uD55C \uB514\uC790\uC778\uC758 \uCE90\uB7EC\uC140 \uB9CC\uB4E4\uAE30",description:"",date:"2024-03-29 10:22",sidebarDepth:0,tag:"Tech",thumbnail:null,originalTitle:"Crafting a Professional-Looking Carousel with React and MUI",link:"https://medium.com/@ltomblock/crafting-a-professional-looking-carousel-with-react-and-mui-746a86af0ab0"},excerpt:"",headers:[{level:3,title:"Part 1",slug:"part-1",children:[]},{level:2,title:"1. Imports: \uC900\uBE44 \uC791\uC5C5 \uC124\uC815",slug:"_1-imports-\u110C\u116E\u11AB\u1107\u1175-\u110C\u1161\u11A8\u110B\u1165\u11B8-\u1109\u1165\u11AF\u110C\u1165\u11BC",children:[]},{level:2,title:"\uC774 \uBD80\uBD84\uC5D0\uC11C \uBB34\uC2A8 \uC77C\uC774 \uBC8C\uC5B4\uC9C0\uACE0 \uC788\uC744\uAE4C\uC694?",slug:"\u110B\u1175-\u1107\u116E\u1107\u116E\u11AB\u110B\u1166\u1109\u1165-\u1106\u116E\u1109\u1173\u11AB-\u110B\u1175\u11AF\u110B\u1175-\u1107\u1165\u11AF\u110B\u1165\u110C\u1175\u1100\u1169-\u110B\u1175\u11BB\u110B\u1173\u11AF\u1101\u1161\u110B\u116D",children:[]},{level:2,title:"2. \uCEF4\uD3EC\uB10C\uD2B8 \uC0C1\uD0DC \uC124\uC815\uD558\uAE30",slug:"_2-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1109\u1161\u11BC\u1110\u1162-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175",children:[]},{level:2,title:"\uC138\uBD80 \uB0B4\uC6A9:",slug:"\u1109\u1166\u1107\u116E-\u1102\u1162\u110B\u116D\u11BC",children:[]},{level:2,title:"3. \uCE90\uB7EC\uC140 \uB3D9\uC791 \uAD6C\uC131\uD558\uAE30",slug:"_3-\u110F\u1162\u1105\u1165\u1109\u1166\u11AF-\u1103\u1169\u11BC\u110C\u1161\u11A8-\u1100\u116E\u1109\u1165\u11BC\u1112\u1161\u1100\u1175",children:[]},{level:2,title:"4. \uCE90\uB7EC\uC140\uC744 \uD0D0\uC0C9\uD558\uB294 \uD568\uC218\uB4E4",slug:"_4-\u110F\u1162\u1105\u1165\u1109\u1166\u11AF\u110B\u1173\u11AF-\u1110\u1161\u11B7\u1109\u1162\u11A8\u1112\u1161\u1102\u1173\u11AB-\u1112\u1161\u11B7\u1109\u116E\u1103\u1173\u11AF",children:[]},{level:2,title:"5. useEffect: \uCD08\uAE30 \uB370\uC774\uD130 \uC124\uC815",slug:"_5-useeffect-\u110E\u1169\u1100\u1175-\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1165\u11AF\u110C\u1165\u11BC",children:[]},{level:2,title:"1. \uCE90\uB7EC\uC140\uC744 \uC704\uD55C \uCEE8\uD14C\uC774\uB108:",slug:"_1-\u110F\u1162\u1105\u1165\u1109\u1166\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165",children:[]},{level:2,title:"2. \uC774\uC804 \uD398\uC774\uC9C0 \uBC84\uD2BC:",slug:"_2-\u110B\u1175\u110C\u1165\u11AB-\u1111\u1166\u110B\u1175\u110C\u1175-\u1107\u1165\u1110\u1173\u11AB",children:[]},{level:2,title:"3. \uCE74\uB4DC\uC640 \uC560\uB2C8\uBA54\uC774\uC158\uC744 \uC704\uD55C \uCEE8\uD14C\uC774\uB108:",slug:"_3-\u110F\u1161\u1103\u1173\u110B\u116A-\u110B\u1162\u1102\u1175\u1106\u1166\u110B\u1175\u1109\u1167\u11AB\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165",children:[]},{level:2,title:"4. \uAC01 \uCE74\uB4DC \uB80C\uB354\uB9C1:",slug:"_4-\u1100\u1161\u11A8-\u110F\u1161\u1103\u1173-\u1105\u1166\u11AB\u1103\u1165\u1105\u1175\u11BC",children:[]},{level:2,title:"5. \uCE74\uB4DC\uC5D0 \uB300\uD55C \uD45C\uC2DC \uB17C\uB9AC:",slug:"_5-\u110F\u1161\u1103\u1173\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-\u1111\u116D\u1109\u1175-\u1102\u1169\u11AB\u1105\u1175",children:[]},{level:2,title:"6. \uCE74\uB4DC\uC5D0 \uB300\uD55C \uC2AC\uB77C\uC774\uB4DC \uC560\uB2C8\uBA54\uC774\uC158:",slug:"_6-\u110F\u1161\u1103\u1173\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-\u1109\u1173\u11AF\u1105\u1161\u110B\u1175\u1103\u1173-\u110B\u1162\u1102\u1175\u1106\u1166\u110B\u1175\u1109\u1167\u11AB",children:[]},{level:2,title:"7. \uC77C\uBD80 \uCE74\uB4DC\uC758 \uC313\uC774\uACE0 \uD45C\uC2DC\uD558\uAE30:",slug:"_7-\u110B\u1175\u11AF\u1107\u116E-\u110F\u1161\u1103\u1173\u110B\u1174-\u110A\u1161\u11C2\u110B\u1175\u1100\u1169-\u1111\u116D\u1109\u1175\u1112\u1161\u1100\u1175",children:[]},{level:2,title:"8. \uB2E4\uC74C \uD398\uC774\uC9C0 \uBC84\uD2BC:",slug:"_8-\u1103\u1161\u110B\u1173\u11B7-\u1111\u1166\u110B\u1175\u110C\u1175-\u1107\u1165\u1110\u1173\u11AB",children:[]}],git:{updatedTime:null},filePathRelative:"docs/Tech/2024-03-29-CraftingaProfessional-LookingCarouselwithReactandMUI/README.md"};export{e as data};
