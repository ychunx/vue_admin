(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-706bc72f"],{1673:function(t,e,a){"use strict";a("fe52")},"22ff":function(t,e,a){},"4e75":function(t,e,a){},"5a98":function(t,e,a){"use strict";a("22ff")},"6dd1":function(t,e,a){},7779:function(t,e,a){"use strict";a("df71")},9200:function(t,e,a){"use strict";a("6dd1")},9406:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("TopCard",{attrs:{list:t.list}}),a("Sale",{attrs:{list:t.list}}),a("FooterCard",{attrs:{list:t.list}})],1)},i=[],r=a("5530"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"charts1"},[a("Detail",{attrs:{title:"总销售额",count:"￥"+t.list.salesTotal}},[a("template",{slot:"charts"},[a("span",[t._v(" 周同比 "+t._s(t.list.salesGrowthLastMonth)+"% "),t.list.salesGrowthLastMonth>0?a("svg",{staticClass:"icon",attrs:{t:"1654317562346",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3989",width:"14",height:"14"}},[a("path",{attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z","p-id":"3990",fill:"#1afa29"}})]):a("svg",{staticClass:"icon",attrs:{t:"1654317648527",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8340",width:"14",height:"14"}},[a("path",{attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z","p-id":"8341",fill:"#d81e06"}})])]),a("span",[t._v(" 日同比 "+t._s(t.list.salesGrowthLastDay)+"% "),t.list.salesGrowthLastDay>0?a("svg",{staticClass:"icon",attrs:{t:"1654317562346",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3989",width:"14",height:"14"}},[a("path",{attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z","p-id":"3990",fill:"#1afa29"}})]):a("svg",{staticClass:"icon",attrs:{t:"1654317648527",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8340",width:"14",height:"14"}},[a("path",{attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z","p-id":"8341",fill:"#d81e06"}})])])]),a("template",{slot:"footer"},[a("span",[t._v("日销售额 ￥"+t._s(t.list.salesToday))])])],2)],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",[a("Detail",{attrs:{title:"访问量",count:t.list.visitTotal}},[a("template",{slot:"charts"},[a("LineChart",{attrs:{trend:t.list.visitTrend}})],1),a("template",{slot:"footer"},[a("span",[t._v("日访问量 "+t._s(t.list.visitToday))])])],2)],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",[a("Detail",{attrs:{title:"支付笔数",count:t.list.payTotal}},[a("template",{slot:"charts"},[a("BarChart",{attrs:{trend:t.list.payTrend}})],1),a("template",{slot:"footer"},[a("span",[t._v("转化率 "+t._s(t.list.payRate)+"%")])])],2)],1)],1),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"footer4"},[a("Detail",{attrs:{title:"运营活动效果",count:t.list.activityRate+"%"}},[a("template",{slot:"charts"},[a("ProgressChart",{attrs:{rate:t.list.activityRate}})],1),a("template",{slot:"footer"},[a("span",[t._v(" 周同比 "+t._s(t.list.activityGrowthLastMonth)+"% "),t.list.activityGrowthLastMonth>0?a("svg",{staticClass:"icon",attrs:{t:"1654317562346",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3989",width:"14",height:"14"}},[a("path",{attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z","p-id":"3990",fill:"#1afa29"}})]):a("svg",{staticClass:"icon",attrs:{t:"1654317648527",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8340",width:"14",height:"14"}},[a("path",{attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z","p-id":"8341",fill:"#d81e06"}})])]),a("span",[t._v(" 日同比 "+t._s(t.list.activityGrowthLastDay)+"% "),t.list.activityGrowthLastDay>0?a("svg",{staticClass:"icon",attrs:{t:"1654317562346",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3989",width:"14",height:"14"}},[a("path",{attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z","p-id":"3990",fill:"#1afa29"}})]):a("svg",{staticClass:"icon",attrs:{t:"1654317648527",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8340",width:"14",height:"14"}},[a("path",{attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z","p-id":"8341",fill:"#d81e06"}})])])])],2)],1)],1)],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card-header"},[a("span",[t._v(t._s(t.title))]),a("svg",{staticClass:"icon",attrs:{t:"1654316727325",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2963",width:"18",height:"18"}},[a("path",{attrs:{d:"M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 707.669333a323.669333 323.669333 0 1 1 0-647.338666 323.669333 323.669333 0 0 1 0 647.338666z m-0.085333-248.106666c5.034667-12.245333 12.16-29.866667 21.333333-52.906667 9.216-23.04 16.682667-42.496 22.485333-58.368 5.802667-15.872 8.704-26.197333 8.704-30.976 0-8.106667-5.162667-12.16-15.488-12.16-11.861333 0-29.354667 6.656-52.565333 19.968-23.168 13.312-48.213333 31.402667-75.221333 54.272l13.994666 12.8 10.24-8.405333c6.272-6.016 13.824-11.690667 22.656-16.981334 8.832-5.290667 15.146667-7.936 18.944-7.936 5.290667 0 7.936 2.56 7.936 7.765334 0 1.450667-6.954667 19.626667-20.821333 54.485333-13.866667 34.858667-21.674667 54.698667-23.466667 59.434667l-27.989333 64.426666c-7.296 18.688-10.965333 32.085333-10.965333 40.192 0 5.376 2.133333 9.813333 6.442666 13.354667 4.266667 3.541333 9.216 5.290667 14.762667 5.290667 13.866667 0 33.536-7.253333 58.965333-21.674667 25.472-14.464 49.664-30.72 72.533334-48.810667l-14.677334-13.44-5.248 3.285334a72.533333 72.533333 0 0 1-5.674666 3.285333c-24.96 17.834667-42.24 26.752-51.797334 26.752-5.077333 0-7.594667-2.56-7.594666-7.765333 0-4.138667 3.797333-15.957333 11.349333-35.498667 7.552-19.498667 14.592-36.266667 21.162667-50.389333zM560.981333 298.666667c-9.258667 0-17.664 2.517333-25.173333 7.552a55.466667 55.466667 0 0 0-17.493333 18.346666c-4.266667 7.253333-6.314667 14.933333-6.314667 23.04 0 9.301333 3.456 17.706667 10.410667 25.173334a32.981333 32.981333 0 0 0 25.088 11.221333c13.013333 0 24.576-5.546667 34.688-16.554667 10.069333-11.008 15.146667-22.912 15.146666-35.669333a30.208 30.208 0 0 0-10.837333-23.552 37.376 37.376 0 0 0-25.557333-9.557333z","p-id":"2964",fill:"#8a8a8a"}})])]),a("div",{staticClass:"card-content"},[t._v(t._s(t.count))]),a("div",{staticClass:"card-charts"},[t._t("charts")],2),a("div",{staticClass:"card-footer"},[t._t("footer")],2)])},c=[],h={name:"Detail",props:["title","count"]},d=h,p=(a("9200"),a("2877")),u=Object(p["a"])(d,o,c,!1,null,"1cb05e4d",null),f=u.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chart",staticClass:"chart"})},m=[],w=a("313e"),g={name:"LineChart",props:["trend"],watch:{trend:function(){var t=w["a"](this.$refs.chart);t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"line",data:this.trend,smooth:!0,itemStyle:{opacity:0},areaStyle:{color:{type:"linner",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#5772C7"},{offset:1,color:"#fff"}],global:!1}}}],grid:{left:-10,right:-10,top:0,bottom:0}})}}},b=g,x=(a("fa9b"),Object(p["a"])(b,v,m,!1,null,"c2c57aa6",null)),y=x.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chart",staticClass:"chart"})},C=[],L={name:"BarChart",props:["trend"],watch:{trend:function(){var t=w["a"](this.$refs.chart);t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"bar",data:this.trend}],grid:{left:0,right:0,top:0,bottom:0},tooltip:{}})}}},S=L,D=(a("fb79"),Object(p["a"])(S,_,C,!1,null,"71e7a0ec",null)),O=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chart",staticClass:"chart"})},k=[],z={name:"LineChart",props:["rate"],watch:{rate:function(){var t=w["a"](this.$refs.chart);t.setOption({xAxis:{show:!1,min:0,max:100},yAxis:{show:!1,type:"category"},series:[{type:"bar",data:[this.rate],barWidth:10,color:"yellowgreen",showBackground:!0,backgroundStyle:{color:"#eee"},label:{show:!0,formatter:"|",position:"right",color:"yellowgreen"}}],grid:{left:-10,right:-10,top:0,bottom:0}})}}},M=z,$=(a("a325"),Object(p["a"])(M,A,k,!1,null,"d5d0a9fe",null)),B=$.exports,N={name:"TopCard",props:["list"],components:{Detail:f,LineChart:y,BarChart:O,ProgressChart:B}},E=N,j=(a("1673"),Object(p["a"])(E,l,n,!1,null,null,null)),F=j.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("el-tabs",{staticClass:"tab",model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"销售额",name:"first"}}),a("el-tab-pane",{attrs:{label:"访问量",name:"second"}})],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:18}},[a("div",{ref:"chart",staticClass:"chart"})]),a("el-col",{staticClass:"el-col-right",attrs:{span:6}},[a("h3",[t._v("门店"+t._s("first"==t.activeName?"销售额":"访问量")+"排名")]),a("ul",t._l(t.rankList,(function(e){return a("li",{key:e.no},[a("span",[t._v(t._s(e.no))]),a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.money))])])})),0)])],1),a("div",{staticClass:"right"},[a("span",{on:{click:function(e){return t.setDate(1)}}},[t._v("今日")]),a("span",{on:{click:function(e){return t.setDate(2)}}},[t._v("本周")]),a("span",{on:{click:function(e){return t.setDate(3)}}},[t._v("本月")]),a("span",{on:{click:function(e){return t.setDate(4)}}},[t._v("本年")]),a("el-date-picker",{staticClass:"date",attrs:{type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"mini","value-format":"yyyy-MM-dd"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)},G=[],R=(a("fb6a"),a("99af"),{name:"Sale",props:["list"],data:function(){return{activeName:"first",date:[],mychart:null}},methods:{setDate:function(t){var e=new Date,a=e.getTime(),s=e.getFullYear(),i=864e5;if(1==t){var r=e.toISOString().slice(0,10);this.date=[r,r]}if(2==t){var l=e.getDay(),n=a-(l-1)*i,o=a+(7-l)*i,c=new Date(n),h=new Date(o);this.date=[c.toISOString().slice(0,10),h.toISOString().slice(0,10)]}if(3==t){var d=e.getMonth()+1,p=new Date(s,d,0),u=p.getDate();this.date=["".concat(s,"-").concat(d,"-01"),"".concat(s,"-").concat(d,"-").concat(u)]}4==t&&(this.date=["".concat(s,"-01-01"),"".concat(s,"-12-31")])}},watch:{list:function(){this.mychart=w["a"](this.$refs.chart),this.mychart.setOption({title:{text:("first"==this.activeName?"销售额":"访问量")+"趋势",textStyle:{fontSize:14}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:this.list.orderFullYearAxis,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Direct",type:"bar",barWidth:"40%",data:this.list.orderFullYear}]})},activeName:function(){this.mychart.setOption({title:{text:("first"==this.activeName?"销售额":"访问量")+"趋势"},xAxis:{data:"first"==this.activeName?this.list.orderFullYearAxis:this.list.userFullYearAxis},series:[{name:"Direct",type:"bar",barWidth:"40%",data:"first"==this.activeName?this.list.orderFullYear:this.list.userFullYear}]})}},computed:{rankList:function(){return"first"==this.activeName?this.list.orderRank:this.list.userRank}}}),W=R,Y=(a("bf21"),Object(p["a"])(W,T,G,!1,null,"2fba4e92",null)),H=Y.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("Search",{attrs:{list:t.list.searchWord}})],1),a("el-col",{attrs:{span:12}},[a("Category",{attrs:{rank:t.list.saleRank}})],1)],1)},I=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("线上热门搜索")]),a("el-dropdown",[a("span",[a("i",{staticClass:"el-icon-more"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[t._v("第一")]),a("el-dropdown-item",[t._v("第二")]),a("el-dropdown-item",[t._v("第三")])],1)],1)],1),a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("LineChart",{attrs:{title:"搜索用户数",list:t.list}})],1),a("el-col",{attrs:{span:12}},[a("LineChart",{attrs:{title:"人均搜索次数",list:t.list}})],1)],1),a("el-table",{staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.list,"max-height":"200","default-sort":{prop:"date",order:"descending"},border:""}},[a("el-table-column",{attrs:{label:"排名",width:"80",type:"index",align:"center"}}),a("el-table-column",{attrs:{label:"搜索关键字",width:"200",prop:"word",align:"center"}}),a("el-table-column",{attrs:{label:"用户数",sortable:"",prop:"user",align:"center"}}),a("el-table-column",{attrs:{label:"周涨幅",sortable:"",align:"center"}})],1)],1)])},J=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header"},[a("span",[t._v(t._s(t.title))]),a("svg",{staticClass:"icon",attrs:{t:"1654316727325",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2963",width:"18",height:"18"}},[a("path",{attrs:{d:"M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 707.669333a323.669333 323.669333 0 1 1 0-647.338666 323.669333 323.669333 0 0 1 0 647.338666z m-0.085333-248.106666c5.034667-12.245333 12.16-29.866667 21.333333-52.906667 9.216-23.04 16.682667-42.496 22.485333-58.368 5.802667-15.872 8.704-26.197333 8.704-30.976 0-8.106667-5.162667-12.16-15.488-12.16-11.861333 0-29.354667 6.656-52.565333 19.968-23.168 13.312-48.213333 31.402667-75.221333 54.272l13.994666 12.8 10.24-8.405333c6.272-6.016 13.824-11.690667 22.656-16.981334 8.832-5.290667 15.146667-7.936 18.944-7.936 5.290667 0 7.936 2.56 7.936 7.765334 0 1.450667-6.954667 19.626667-20.821333 54.485333-13.866667 34.858667-21.674667 54.698667-23.466667 59.434667l-27.989333 64.426666c-7.296 18.688-10.965333 32.085333-10.965333 40.192 0 5.376 2.133333 9.813333 6.442666 13.354667 4.266667 3.541333 9.216 5.290667 14.762667 5.290667 13.866667 0 33.536-7.253333 58.965333-21.674667 25.472-14.464 49.664-30.72 72.533334-48.810667l-14.677334-13.44-5.248 3.285334a72.533333 72.533333 0 0 1-5.674666 3.285333c-24.96 17.834667-42.24 26.752-51.797334 26.752-5.077333 0-7.594667-2.56-7.594666-7.765333 0-4.138667 3.797333-15.957333 11.349333-35.498667 7.552-19.498667 14.592-36.266667 21.162667-50.389333zM560.981333 298.666667c-9.258667 0-17.664 2.517333-25.173333 7.552a55.466667 55.466667 0 0 0-17.493333 18.346666c-4.266667 7.253333-6.314667 14.933333-6.314667 23.04 0 9.301333 3.456 17.706667 10.410667 25.173334a32.981333 32.981333 0 0 0 25.088 11.221333c13.013333 0 24.576-5.546667 34.688-16.554667 10.069333-11.008 15.146667-22.912 15.146666-35.669333a30.208 30.208 0 0 0-10.837333-23.552 37.376 37.376 0 0 0-25.557333-9.557333z","p-id":"2964",fill:"#8a8a8a"}})])]),a("div",{staticClass:"main"},[a("span",[t._v(t._s("搜索用户数"==t.title?t.sumUser:t.avgNum))]),a("span",[t._v(" 17.1 "),a("svg",{staticClass:"icon",attrs:{t:"1654317562346",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3989",width:"14",height:"14"}},[a("path",{attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z","p-id":"3990",fill:"#1afa29"}})]),a("svg",{staticClass:"icon",attrs:{t:"1654317648527",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8340",width:"14",height:"14"}},[a("path",{attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z","p-id":"8341",fill:"#d81e06"}})])])]),a("div",{ref:"chart",staticClass:"chart"})])},K=[],Q=(a("d3b7"),a("159b"),a("b680"),{name:"LineChart",props:["title","list"],data:function(){return{sumUser:0,avgNum:0,userList:[],countList:[]}},methods:{getSumUser:function(){var t=0;this.list.forEach((function(e){t+=e.user})),this.sumUser=t},getAvgNum:function(){var t=0;this.list.forEach((function(e){t+=e.count})),this.avgNum=(t/this.sumUser).toFixed(2)},getData:function(){var t=this;this.list.forEach((function(e){t.userList.push(e.user),t.countList.push(e.count)}))}},watch:{list:function(){this.getSumUser(),this.getAvgNum(),this.getData();var t=w["a"](this.$refs.chart);t.setOption({xAxis:{show:!1,type:"category"},yAxis:{show:!1},series:[{type:"line",data:"搜索用户数"==this.title?this.userList:this.countList,smooth:!0,itemStyle:{opacity:0},areaStyle:{color:{type:"linner",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#5772C7"},{offset:1,color:"#fff"}],global:!1}}}],grid:{left:-10,right:-10,top:5,bottom:5}})}}}),V=Q,X=(a("b525"),Object(p["a"])(V,q,K,!1,null,"46237a1a",null)),Z=X.exports,tt={name:"Search",props:["list"],components:{LineChart:Z}},et=tt,at=(a("5a98"),Object(p["a"])(et,P,J,!1,null,"79b55974",null)),st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("销售额类别占比")]),a("el-radio-group",{staticClass:"radio",attrs:{size:"mini"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-radio-button",{attrs:{label:"全部渠道"}}),a("el-radio-button",{attrs:{label:"线上"}}),a("el-radio-button",{attrs:{label:"门店"}})],1)],1),a("div",{ref:"chart",staticClass:"chart"})])},rt=[],lt=(a("b0c0"),{name:"Category",props:["rank"],data:function(){return{value:"全部渠道",onlineAndShop:[],online:[],shop:[],mychart:null}},methods:{getAllList:function(){for(var t=this.rank,e=t.online,a=t.shop,s=0;s<e.name.length;s++){var i=e.name[s],r=e.value[s]+a.value[s];this.onlineAndShop.push({name:i,value:r})}},fixData:function(){for(var t=this.rank,e=t.online,a=t.shop,s=0;s<e.name.length;s++){var i=e.name[s],r=e.value[s];this.online.push({name:i,value:r})}for(var l=0;l<a.name.length;l++){var n=a.name[l],o=a.value[l];this.shop.push({name:n,value:o})}}},watch:{rank:function(){var t=this;this.getAllList(),this.fixData(),this.mychart=w["a"](this.$refs.chart),this.mychart.setOption({title:{text:this.onlineAndShop[0].name,textStyle:{fontSize:12,fontWeight:"normal"},subtext:this.onlineAndShop[0].value,subtextStyle:{fontSize:26,color:"#333"},left:"center",top:"center"},tooltip:{trigger:"item"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"outside"},labelLine:{show:!0},data:this.onlineAndShop}]}),this.mychart.on("mouseover",(function(e){var a=e.data,s=a.name,i=a.value;t.mychart.setOption({title:{text:s,subtext:i}})}))},value:function(t){"线上"==t?this.mychart.setOption({title:{text:this.online[0].name,subtext:this.online[0].value},series:{data:this.online}}):"门店"==t?this.mychart.setOption({title:{text:this.shop[0].name,subtext:this.shop[0].value},series:{data:this.shop}}):this.mychart.setOption({title:{text:this.onlineAndShop[0].name,subtext:this.onlineAndShop[0].value},series:{data:this.onlineAndShop}})}}}),nt=lt,ot=(a("7779"),Object(p["a"])(nt,it,rt,!1,null,"e087f6d0",null)),ct=ot.exports,ht={name:"FooterCard",props:["list"],components:{Search:st,Category:ct}},dt=ht,pt=Object(p["a"])(dt,U,I,!1,null,null,null),ut=pt.exports,ft=a("2f62"),vt={name:"Dashboard",components:{TopCard:F,Sale:H,FooterCard:ut},mounted:function(){this.$store.dispatch("getHomeData")},computed:Object(r["a"])({},Object(ft["c"])({list:function(t){return t.home.homeList}}))},mt=vt,wt=Object(p["a"])(mt,s,i,!1,null,null,null);e["default"]=wt.exports},"9ab9":function(t,e,a){},a325:function(t,e,a){"use strict";a("ddec")},a436:function(t,e,a){},b525:function(t,e,a){"use strict";a("9ab9")},bf21:function(t,e,a){"use strict";a("cb68")},cb68:function(t,e,a){},ddec:function(t,e,a){},df71:function(t,e,a){},fa9b:function(t,e,a){"use strict";a("a436")},fb79:function(t,e,a){"use strict";a("4e75")},fe52:function(t,e,a){}}]);