(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9fe87778"],{"33bb":function(t,e,a){},"542f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticStyle:{"margin-bottom":"20px"}},[a("CategorySelect",{attrs:{isShowTable:t.isShowTable},on:{getCategoryIds:t.getCategoryIds}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowTable,expression:"isShowTable"}]},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:-1!=t.$store.state.user.buttons.indexOf("btn.Attr.add"),expression:"$store.state.user.buttons.indexOf('btn.Attr.add') != -1"}],staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",plain:"",icon:"el-icon-plus",disabled:!t.isAbleClick},on:{click:t.addAttrShow}},[t._v("添加属性")]),a("el-table",{attrs:{data:t.attrInfoList,border:""}},[a("el-table-column",{attrs:{label:"序号",type:"index",width:"80px",align:"center"}}),a("el-table-column",{attrs:{label:"属性名称",width:"120px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,r=e.$index;return[n.flag?a("el-input",{ref:r,attrs:{size:"mini"},on:{blur:function(e){return t.updateAttrName(n)}},model:{value:t.attrInfo.attrName,callback:function(e){t.$set(t.attrInfo,"attrName",e)},expression:"attrInfo.attrName"}}):a("span",{staticStyle:{display:"block"},on:{click:function(e){return t.clickAttrName(n,r)}}},[t._v(t._s(n.attrName))])]}}])}),a("el-table-column",{attrs:{label:"属性值列表"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,r=e.$index;return[t._l(n.attrValueList,(function(e,r){return a("el-tag",{key:e.id,staticStyle:{"margin-right":"10px"},attrs:{closable:"","disable-transitions":!0},on:{close:function(e){return t.handleClose(n,r)}}},[e.flag?a("el-input",{ref:e.id,refInFor:!0,staticStyle:{width:"100px"},attrs:{size:"mini"},on:{blur:function(a){return t.updateAttrValue(n,e)}},model:{value:t.attrInfo.attrValueList[r].valueName,callback:function(e){t.$set(t.attrInfo.attrValueList[r],"valueName",e)},expression:"attrInfo.attrValueList[index].valueName"}}):a("span",{on:{click:function(a){return t.clickAttrValue(n,e,e.id)}}},[t._v(t._s(e.valueName))])],1)})),a("el-input",{ref:r,staticClass:"input-new-tag",staticStyle:{display:"none"},attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(n,r)}},model:{value:t.inputString,callback:function(e){t.inputString=e},expression:"inputString"}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,r=e.$index;return[a("el-button",{directives:[{name:"show",rawName:"v-show",value:-1!=t.$store.state.user.buttons.indexOf("btn.Attr.update"),expression:"\n              $store.state.user.buttons.indexOf('btn.Attr.update') != -1\n            "}],attrs:{type:"success",icon:"el-icon-edit",size:"mini",title:"添加属性值"},on:{click:function(e){return t.showValueInput(r)}}},[t._v("添加")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:-1!=t.$store.state.user.buttons.indexOf("btn.Attr.remove"),expression:"\n              $store.state.user.buttons.indexOf('btn.Attr.remove') != -1\n            "}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",title:"删除属性"},on:{click:function(e){return t.deleteAttr(n)}}})]}}])})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowTable,expression:"!isShowTable"}]},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"属性名"}},[a("el-input",{attrs:{placeholder:"请输入属性名"},model:{value:t.attrInfo.attrName,callback:function(e){t.$set(t.attrInfo,"attrName",e)},expression:"attrInfo.attrName"}})],1)],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.attrInfo.attrName},on:{click:t.addFormAttrValue}},[t._v("添加属性值")]),a("el-table",{staticStyle:{margin:"20px 0",width:"80%"},attrs:{border:"",data:t.attrInfo.attrValueList}},[a("el-table-column",{attrs:{label:"序号",type:"index",align:"center",width:"80px"}}),a("el-table-column",{attrs:{label:"属性值"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,r=e.$index;return[n.flag?a("el-input",{ref:r,attrs:{placeholder:"请输入属性值",size:"mini"},on:{blur:function(t){n.flag=!1}},model:{value:n.valueName,callback:function(e){t.$set(n,"valueName",e)},expression:"row.valueName"}}):a("span",{staticStyle:{display:"block"},on:{click:function(e){return t.changeFormValue(n,r)}}},[t._v(t._s(n.valueName))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"95px"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,r=e.$index;return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",title:"删除属性值"},on:{click:function(e){return t.deleteFormAttrValue(n,r)}}},[t._v("删除")])]}}])})],1),a("el-button",{attrs:{type:"primary",disabled:t.attrInfo.attrValueList.length<1||!t.attrInfo.attrName},on:{click:t.addAttr}},[t._v("保存")]),a("el-button",{on:{click:function(e){t.isShowTable=!0}}},[t._v("取消")])],1)],1)},r=[],i=a("5530"),s=a("c7eb"),l=a("1da1"),o=(a("a434"),a("4de4"),a("d3b7"),{name:"Attr",data:function(){return{categoryIds:{},isAbleClick:!1,attrInfoList:[],attrInfo:{attrName:"",attrValueList:[],categoryId:0,categoryLevel:3},inputString:"",isShowTable:!0}},methods:{getCategoryIds:function(t){this.categoryIds=t,t.category3Id?(this.isAbleClick=!0,this.getAttrList(t),this.attrInfo.categoryId=t.category3Id):(this.isAbleClick=!1,this.attrInfoList=[],this.attrInfo.categoryId="")},getAttrList:function(t){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$API.attr.reqAttrInfoList(t);case 2:n=a.sent,200==n.code&&(e.attrInfoList=n.data);case 4:case"end":return a.stop()}}),a)})))()},clickAttrName:function(t,e){var a=this;this.attrInfo=Object(i["a"])({},t),this.$set(t,"flag",!0),this.$nextTick((function(){a.$refs[e].focus()}))},updateAttrName:function(t){t.flag=!1,this.uploadDate("修改属性名")},clickAttrValue:function(t,e,a){var n=this;this.attrInfo=Object(i["a"])({},t),this.$set(e,"flag",!0),this.$nextTick((function(){n.$refs[a][0].focus()}))},updateAttrValue:function(t,e){delete e.flag,this.uploadDate("修改属性值")},handleClose:function(t,e){this.attrInfo=Object(i["a"])({},t),this.attrInfo.attrValueList.splice(e,1),this.uploadDate("删除属性值")},showValueInput:function(t){var e=this;this.inputString="",this.$refs[t].$el.style.display="inline-block",this.$nextTick((function(){e.$refs[t].focus()}))},handleInputConfirm:function(t,e){this.attrInfo=Object(i["a"])({},t),this.$refs[e].$el.style.display="none",this.attrInfo.attrValueList.push({attrId:this.attrInfo.id,valueName:this.inputString}),this.uploadDate("添加属性值")},deleteAttr:function(t){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$API.attr.reqDeleteAttr(t.id);case 3:e.getAttrList(e.categoryIds),e.$message.success("删除属性成功"),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),e.$message.error("删除属性失败");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},addAttrShow:function(){this.isShowTable=!1,this.attrInfo={attrName:"",attrValueList:[],categoryId:this.categoryIds.category3Id,categoryLevel:3}},addFormAttrValue:function(){var t=this;this.attrInfo.attrValueList.push({attrId:void 0,valueName:"",flag:!0}),this.$nextTick((function(){t.$refs[t.attrInfo.attrValueList.length-1].focus()}))},changeFormValue:function(t,e){var a=this;t.flag=!0,this.$nextTick((function(){a.$refs[e].focus()}))},deleteFormAttrValue:function(t,e){this.attrInfo.attrValueList.splice(e,1)},addAttr:function(){this.attrInfo.attrValueList=this.attrInfo.attrValueList.filter((function(t){if(""!=t.valueName)return delete t.flag,!0})),this.uploadDate("添加属性"),this.isShowTable=!0},uploadDate:function(t){var e=this;return Object(l["a"])(Object(s["a"])().mark((function a(){return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$API.attr.reqAddOrUpdateAttr(e.attrInfo);case 3:e.getAttrList(e.categoryIds),e.$message.success("".concat(t,"成功")),a.next=11;break;case 7:a.prev=7,a.t0=a["catch"](0),e.getAttrList(e.categoryIds),e.$message.error("".concat(t,"失败"));case 11:case"end":return a.stop()}}),a,null,[[0,7]])})))()}}}),c=o,u=(a("ebb6"),a("2877")),f=Object(u["a"])(c,n,r,!1,null,null,null);e["default"]=f.exports},a434:function(t,e,a){"use strict";var n=a("23e7"),r=a("23cb"),i=a("a691"),s=a("50c4"),l=a("7b0b"),o=a("65f0"),c=a("8418"),u=a("1dde"),f=a("ae40"),d=u("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,b=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var a,n,u,f,d,h,g=l(this),I=s(g.length),w=r(t,I),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=I-w):(a=y-2,n=b(p(i(e),0),I-w)),I+a-n>m)throw TypeError(v);for(u=o(g,n),f=0;f<n;f++)d=w+f,d in g&&c(u,f,g[d]);if(u.length=n,a<n){for(f=w;f<I-n;f++)d=f+n,h=f+a,d in g?g[h]=g[d]:delete g[h];for(f=I;f>I-n+a;f--)delete g[f-1]}else if(a>n)for(f=I-n;f>w;f--)d=f+n-1,h=f+a-1,d in g?g[h]=g[d]:delete g[h];for(f=0;f<a;f++)g[f+w]=arguments[f+2];return g.length=I-n+a,u}})},ebb6:function(t,e,a){"use strict";a("33bb")}}]);