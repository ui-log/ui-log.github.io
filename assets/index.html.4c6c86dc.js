const e={key:"v-06d76472",path:"/docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/",title:"Material UI + React\uC5D0\uC11C \uD14C\uC2A4\uD305 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95",lang:"ko",frontmatter:{title:"Material UI + React\uC5D0\uC11C \uD14C\uC2A4\uD305 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95",description:"",date:"2024-04-05 19:25",sidebarDepth:0,tag:"Tech",thumbnail:null,originalTitle:"[React] Don\u2019t give up on testing when using Material UI with React",link:"https://medium.com/@jskim1991/react-dont-give-up-on-testing-when-using-material-ui-with-react-ff737969eec7"},excerpt:"",headers:[{level:2,title:"\uAD6C\uD604 (\uAE30\uBCF8)",slug:"\u1100\u116E\u1112\u1167\u11AB-\u1100\u1175\u1107\u1169\u11AB",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8 (\uAE30\uBCF8)",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-\u1100\u1175\u1107\u1169\u11AB",children:[]},{level:2,title:"\uAD6C\uD604 (Material UI\uC640 \uD568\uAED8)",slug:"\u1100\u116E\u1112\u1167\u11AB-material-ui\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166",children:[]},{level:2,title:"Material UI\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD14C\uC2A4\uD2B8\uD558\uAE30",slug:"material-ui\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u1110\u1166\u1109\u1173\u1110\u1173\u1112\u1161\u1100\u1175",children:[]},{level:2,title:"\uAD6C\uD604 \uBC29\uBC95",slug:"\u1100\u116E\u1112\u1167\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8",slug:"\u1110\u1166\u1109\u1173\u1110\u1173",children:[{level:3,title:"3. \uC785\uB825 \uB808\uC774\uBE14\uC774 \uC788\uB294 \uC120\uD0DD\uD558\uAE30",slug:"_3-\u110B\u1175\u11B8\u1105\u1167\u11A8-\u1105\u1166\u110B\u1175\u1107\u1173\u11AF\u110B\u1175-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175",children:[]}]},{level:2,title:"\uAD6C\uD604 (\uAE30\uBCF8)",slug:"\u1100\u116E\u1112\u1167\u11AB-\u1100\u1175\u1107\u1169\u11AB-1",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8 (\uAE30\uBCF8)",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-\u1100\u1175\u1107\u1169\u11AB-1",children:[]},{level:2,title:"\uAD6C\uD604 (Material UI\uC640 \uD568\uAED8)",slug:"\u1100\u116E\u1112\u1167\u11AB-material-ui\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166-1",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8 (Material UI\uC640 \uD568\uAED8)",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-material-ui\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166",children:[]},{level:2,title:"4. \uBC84\uD2BC",slug:"_4-\u1107\u1165\u1110\u1173\u11AB",children:[]},{level:2,title:"\uAD6C\uD604 (\uAE30\uBCF8)",slug:"\u1100\u116E\u1112\u1167\u11AB-\u1100\u1175\u1107\u1169\u11AB-2",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8 (\uAE30\uBCF8)",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-\u1100\u1175\u1107\u1169\u11AB-2",children:[]},{level:2,title:"\uAD6C\uD604 (Material UI\uB85C)",slug:"\u1100\u116E\u1112\u1167\u11AB-material-ui\u1105\u1169",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8 (Material UI \uC0AC\uC6A9 \uC2DC)",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-material-ui-\u1109\u1161\u110B\u116D\u11BC-\u1109\u1175",children:[]},{level:2,title:"\uAD6C\uD604",slug:"\u1100\u116E\u1112\u1167\u11AB",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-1",children:[]},{level:2,title:"Implementation",slug:"implementation",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-2",children:[]},{level:2,title:"\uAD6C\uD604",slug:"\u1100\u116E\u1112\u1167\u11AB-1",children:[]},{level:2,title:"\uD14C\uC2A4\uD2B8",slug:"\u1110\u1166\u1109\u1173\u1110\u1173-3",children:[]}],git:{updatedTime:1713854865e3},filePathRelative:"docs/Nextjs/2024-04-05-ReactDontgiveupontestingwhenusingMaterialUIwithReact/README.md"};export{e as data};