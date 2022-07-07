/*
#轻颜相机 @wuliao
切勿用作商业用途⚠️
没surge自行测试 
圈x:
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-response-body qyxj.js


loon:
http-response ^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info script-path= qyxj.js, requires-body=true, timeout=10



MITM = commerce-api.faceu.mobi


*/
var body = $response.body;
var url = $request.url;
let obj = JSON.parse(body);

const vip = "/commerce/v1/subscription/user_info"; 

if (url.indexOf(vip) != -1){
 obj.data.flag = true;
 obj.data.start_time = 1589865356;
 obj.data.end_time = 1899898980;
body = JSON.stringify(obj);
}
 $done({body});

//



