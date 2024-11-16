window.__require = function t(e, i, s) {
function o(r, a) {
if (!i[r]) {
if (!e[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var h = i[r] = {
exports: {}
};
e[r][0].call(h.exports, function(t) {
return o(e[r][1][t] || t);
}, h, h.exports, t, e, i, s);
}
return i[r].exports;
}
for (var n = "function" == typeof __require && __require, r = 0; r < s.length; r++) o(s[r]);
return o;
}({
AlertDialog: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1f198ZBwStLe5rFEKOd4Xci", "AlertDialog");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./Dialog"), {ccclass: n, property: r} = cc._decorator;
class a {
constructor(t, e, i) {
this.msg = t;
this.doneTitle = e;
this.onDismissed = i;
}
}
let c = class extends o.default {
constructor() {
super(...arguments);
this.lblMessage = null;
this.lblDone = null;
this.onDismissed = null;
this.queue = new Array();
}
showMsg(t) {
this.show4(t, null, null, !1);
}
showMsgWithOnDismissed(t, e) {
this.show4(t, null, e);
}
show3(t, e, i = !1) {
this.show4(t, null, e, i);
}
show4(t, e, i, s = !1, o = !0) {
if (null != this.queue) if (s) {
this.queue.push(new a(t, e, i));
if (1 == this.queue.length) {
this.lblDone.string = e || "Đóng";
this.onDismissed = i;
this.lblMessage.string = t;
super.show();
}
} else if (this.queue.length > 0 && o) this.queue.push(new a(t, e, i)); else {
this.lblDone.string = e || "Đóng";
this.onDismissed = i;
this.lblMessage.string = t;
super.show();
}
}
_onShowed() {
super._onShowed();
}
_onDismissed() {
super._onDismissed();
"function" == typeof this.onDismissed && this.onDismissed();
if (this.queue.length > 0) {
this.queue.splice(0, 1);
this.queue.length > 0 && this.show4(this.queue[0].msg, this.queue[0].doneTitle, this.queue[0].onDismissed, !1, !1);
}
}
dismiss() {
this.isAnimated && super.dismiss();
}
};
s([ r(cc.Label) ], c.prototype, "lblMessage", void 0);
s([ r(cc.Label) ], c.prototype, "lblDone", void 0);
c = s([ n ], c);
i.default = c;
cc._RF.pop();
}, {
"./Dialog": "Dialog"
} ],
App: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "28249+WEXpPF7gjoWi2hRVw", "App");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const n = t("../common/AlertDialog"), r = t("../common/ConfirmDialog"), a = t("./SubpackageDownloader"), c = t("./BroadcastReceiver"), l = t("../networks/MiniGameNetworkClient"), h = t("./Configs"), u = t("../networks/SlotNetworkClient"), d = t("./Http"), p = t("../networks/TaiXiuNetWorkClient"), g = t("./LoadingCirle"), m = t("./NodeUtils"), f = t("../networks/TaiXiuMD5NetWorkClient"), C = t("../networks/Network.InPacket"), _ = t("./MiniGame"), S = t("./ButtonMiniGame"), y = t("./Lobby.Cmd"), N = t("../networks/TienLenNetworkClient"), O = t("../networks/ShootFishNetworkClient"), I = t("../networks/BauCuaTo2NetworkClient"), b = t("./SPUtils"), v = t("./BundleControl"), {ccclass: T, property: R} = cc._decorator;
let w = s = class extends cc.Component {
constructor() {
super(...arguments);
this.designResolution = new cc.Size(1560, 720);
this.loading2 = null;
this.alertDialog = null;
this.confirmDialog = null;
this.confirmDialog2 = null;
this.thongBaoDialog = null;
this.sprFrameAvatars = new Array();
this.buttonMiniGameNode = null;
this.miniGame = null;
this.popUpSercretCode = null;
this.popupThongBao2 = null;
this.nodeNoHuEffect = null;
this.nodeButtonMiniGames = null;
this.lastWitdh = 0;
this.lastHeight = 0;
this.timeOutLoading = null;
this.timeOutLoading2 = null;
this.isFisrtNetworkConnected = !1;
this.subpackageLoaded = {};
this.taiXiuDouble = null;
this.taiXiuMD5 = null;
this.miniPoker = null;
this.caoThap = null;
this.bauCua = null;
this.slot3x3 = null;
this.oanTuTi = null;
this.onPoker = !0;
this.onKimcuong = !0;
this.onTrenduoi = !0;
this._selectGameNode = null;
this.isDownloadingGame = !1;
this.lobbyBundle = null;
this.nodeClickInAll = null;
this._lastZIndex = 0;
this.originalMiniGamesButtonPosition = null;
}
onLoad() {
if (null == s.instance) {
s.instance = this;
s.instance.isDownloadingGame = !1;
this.originalMiniGamesButtonPosition = this.nodeButtonMiniGames.position;
cc.game.addPersistRootNode(s.instance.node);
cc.debug.setDisplayStats(!1);
cc.game.setFrameRate(60);
cc.sys.isNative && (cc.Device ? cc.Device.setKeepScreenOn(!0) : jsb.Device && jsb.Device.setKeepScreenOn(!0));
this.buttonMiniGame = this.buttonMiniGameNode.getComponent(S.default);
this.nodeNoHuEffect.getChildByName("bgnohu").active = !1;
this.nodeNoHuEffect.getChildByName("noHuDecor").active = !1;
l.default.getInstance().addListener(t => {
switch (new C.default(t).getCmdId()) {
case y.default.Code.LOGIN_OTHER_DEVICE:
let e = new y.default.ResLoginOtherDevice(t).text;
b.default.setUserName("");
b.default.setUserPass("");
l.default.getInstance().close();
p.default.getInstance().close();
f.default.getInstance().close();
u.default.getInstance().close();
N.default.getInstance().close();
O.default.getInstance().close();
I.default.getInstance().close();
c.default.send(c.default.USER_LOGOUT);
s.instance.alertDialog.show4(e, "", () => {
h.default.Login.clear();
"Lobby" != cc.director.getScene().name && this.loadSceneFromBundle("Lobby", {
src: "Lobby"
}, () => {
this.scheduleOnce(() => {
s.instance.buttonMiniGame.hidden();
}, .5);
});
});
}
}, this);
} else this.node.destroy();
}
start() {}
showLoading(t, e = 3) {
this.showLoading2(t);
}
showLoading2(t, e = 10) {
null != this.timeOutLoading2 && clearTimeout(this.timeOutLoading2);
if (t) {
e > 0 && (this.timeOutLoading2 = setTimeout(() => {
this.showLoading2(!1);
}, 1e3 * e));
this.loading2.active = !0;
} else this.loading2.active = !1;
}
showErrLoading(t) {
this.showLoading2(!0, -1);
}
showBaoTri(t) {
this.showLoading(!0, -1);
}
update(t) {}
updateSize() {
var t = cc.view.getFrameSize();
if (this.lastWitdh !== t.width || this.lastHeight !== t.height) {
this.lastWitdh = t.width;
this.lastHeight = t.height;
var e = cc.Size.ZERO;
e = this.designResolution.width / this.designResolution.height > t.width / t.height ? cc.size(this.designResolution.width, this.designResolution.width * (t.height / t.width)) : cc.size(this.designResolution.height * (t.width / t.height), this.designResolution.height);
this.node.setContentSize(e);
this.node.setPosition(cc.v2(e.width / 2, e.height / 2));
}
}
getAvatarSpriteFrame(t) {
let e = parseInt(t);
return isNaN(e) || e < 0 || e >= this.sprFrameAvatars.length ? this.sprFrameAvatars[0] : this.sprFrameAvatars[e];
}
loadScene(t, e = null) {
cc.director.preloadScene(t, (e, i) => {
if ("TienLen" === t) {
let t = null, o = null;
if (s.instance._selectGameNode) {
t = s.instance._selectGameNode.getChildByName("load");
o = s.instance._selectGameNode.getChildByName("load_bg");
t.active = !0;
o.active = !0;
t.getComponent(cc.ProgressBar).progress = 0;
s.instance._selectGameNode.getComponent("ColorChild").setDarken(.3);
s.instance._selectGameNode.getComponent(cc.Button) && (s.instance._selectGameNode.getComponent(cc.Button).interactable = !1);
}
let n = 0, r = Math.round(e / i * 100);
n < r && (n = r);
if (t) {
t.active = !0;
o.active = !0;
t.getChildByName("label").getComponent(cc.Label).string = Math.round(n) + "%";
t.getComponent(cc.ProgressBar).progress = Math.round(n) / 100;
}
} else this.showErrLoading("Đang tải..." + parseInt("" + e / i * 100) + "%");
}, () => {
this.showLoading(!1);
cc.director.loadScene(t);
null != e && e();
});
}
showLoadingSun(t, e) {
try {
this.nodeClickInAll.getChildByName("loadingSun").getComponent(g.default).showLoadingSun(t, e);
} catch (t) {}
}
loadSceneFromBundle(t, e, i = null) {
if (s.instance.isDownloadingGame) this.actShowThongBao("Game đang tải, vui lòng chờ!"); else {
"Lobby" != t && (s.instance.isDownloadingGame = !0);
e && void 0 !== e.src && null !== e.src && v.default.loadScene(e.src, t).then(t => {
null != i && i();
s.instance.isDownloadingGame = !1;
cc.director.runScene(t);
});
}
}
loadPrefabFromBundle(t, e, i = null) {
if (s.instance.isDownloadingGame) this.actShowThongBao("Game đang tải, vui lòng chờ!"); else {
s.instance.isDownloadingGame = !0;
e && void 0 !== e.src && null !== e.src && v.default.loadPrefab(e.src, t).then(t => {
s.instance.isDownloadingGame = !1;
null != t ? null != i && i(t) : console.log("error");
});
}
}
loadSceneInSubpackage(t, e) {
if (s.instance.isDownloadingGame) {
this.actShowThongBao("Game đang tải, vui lòng chờ!");
return;
}
s.instance.isDownloadingGame = !0;
let i = null, o = null;
if (s.instance._selectGameNode) {
i = s.instance._selectGameNode.getChildByName("load");
o = s.instance._selectGameNode.getChildByName("load_bg");
i.active = !0;
o.active = !0;
i.getComponent(cc.ProgressBar).progress = 0;
s.instance._selectGameNode.getComponent(cc.Button) && (s.instance._selectGameNode.getComponent(cc.Button).interactable = !1);
}
let n = 0;
this.subpackageLoaded.hasOwnProperty(t) && this.subpackageLoaded[t] ? cc.director.preloadScene(e, (t, e) => {
let s = Math.round(t / e * 100);
n < s && (n = s);
if (i) {
i.active = !0;
o.active = !0;
i.getChildByName("label").getComponent(cc.Label).string = Math.round(n) + "%";
i.getComponent(cc.ProgressBar).progress = Math.round(n) / 100;
}
}, () => {
s.instance._selectGameNode && s.instance._selectGameNode.getComponent(cc.Button) && (s.instance._selectGameNode.getComponent(cc.Button).interactable = !0);
if (s.instance._selectGameNode && s.instance._selectGameNode.getComponent("ColorChild")) {
s.instance._selectGameNode.getComponent("ColorChild").Darken = 1;
s.instance._selectGameNode = null;
}
if (i) {
i.active = !1;
o.active = !1;
}
this.isDownloadingGame = !1;
cc.director.loadScene(e);
}) : a.default.downloadSubpackage(t, (r, a) => {
if ("progress" != r) {
this.showLoadingSun(!1, 0);
if (r) this.alertDialog.showMsg(r); else {
this.subpackageLoaded[t] = !0;
cc.director.preloadScene(e, (t, e) => {
let s = Math.round(t / e * 100);
n < s && (n = s);
if (i) {
i.active = !0;
o.active = !0;
i.getChildByName("label").getComponent(cc.Label).string = Math.round(n) + "%";
i.getComponent(cc.ProgressBar).progress = Math.round(n) / 100;
}
}, () => {
s.instance._selectGameNode && s.instance._selectGameNode.getComponent(cc.Button) && (s.instance._selectGameNode.getComponent(cc.Button).interactable = !0);
if (s.instance._selectGameNode && s.instance._selectGameNode.getComponent("ColorChild")) {
s.instance._selectGameNode.getComponent("ColorChild").Darken = 1;
s.instance._selectGameNode = null;
}
s.instance.isDownloadingGame = !1;
if (i) {
i.active = !1;
o.active = !1;
}
cc.director.loadScene(e);
});
}
} else this.showLoadingSun(!0, a);
});
}
loadGamePrefabInSubpackage(t, e, i) {
if (s.instance.isDownloadingGame) {
this.actShowThongBao("Game đang tải, vui lòng chờ!");
return;
}
s.instance.isDownloadingGame = !0;
let o = null, n = null;
if (s.instance._selectGameNode) {
o = s.instance._selectGameNode.getChildByName("load");
n = s.instance._selectGameNode.getChildByName("load_bg");
o.active = !0;
n.active = !0;
o.getComponent(cc.ProgressBar).progress = 0;
s.instance._selectGameNode.getComponent(cc.Button) && (s.instance._selectGameNode.getComponent(cc.Button).interactable = !1);
}
let r = 0;
this.subpackageLoaded.hasOwnProperty(t) && this.subpackageLoaded[t] ? cc.loader.loadRes(e, cc.Prefab, (t, e) => {
let i = Math.round(t / e * 100);
r < i && (r = i);
if (o) {
o.active = !0;
n.active = !0;
o.getChildByName("label").getComponent(cc.Label).string = Math.round(r) + "%";
o.getComponent(cc.ProgressBar).progress = Math.round(r) / 100;
}
}, (t, e) => {
this.isDownloadingGame = !1;
s.instance._selectGameNode && s.instance._selectGameNode.getComponent(cc.Button) && (s.instance._selectGameNode.getComponent(cc.Button).interactable = !0);
if (s.instance._selectGameNode && s.instance._selectGameNode.getComponent("ColorChild")) {
s.instance._selectGameNode.getComponent("ColorChild").setDarken(1);
s.instance._selectGameNode = null;
}
if (o) {
o.active = !1;
n.active = !1;
}
i(null == t ? null : t.message, e);
}) : a.default.downloadSubpackage(t, (a, c) => {
if ("progress" != a) if (a) this.alertDialog.showMsg(a); else {
this.subpackageLoaded[t] = !0;
cc.loader.loadRes(e, cc.Prefab, (t, e) => {
let i = 0;
1 != e && (i = Math.round(t / e * 100));
r < i && (r = i);
if (o) {
o.active = !0;
n.active = !0;
o.getChildByName("label").getComponent(cc.Label).string = Math.round(r) + "%";
o.getComponent(cc.ProgressBar).progress = Math.round(r) / 100;
}
}, (t, e) => {
s.instance._selectGameNode && s.instance._selectGameNode.getComponent(cc.Button) && (s.instance._selectGameNode.getComponent(cc.Button).interactable = !0);
if (s.instance._selectGameNode && s.instance._selectGameNode.getComponent("ColorChild")) {
s.instance._selectGameNode.getComponent("ColorChild").setDarken(1);
s.instance._selectGameNode = null;
}
if (o) {
o.active = !1;
n.active = !1;
}
this.isDownloadingGame = !1;
i(null == t ? null : t.message, e);
});
} else this.showLoadingSun(!0, c);
});
}
openGameBauCua() {
s.instance.loadGamePrefabInSubpackage("BauCua", "prefabs/BauCua", (t, e) => {
l.default.getInstance().checkConnect(() => {
if (null != e) {
if (null == this.bauCua) {
let t = cc.instantiate(e);
t.parent = this.miniGame;
t.active = !1;
this.bauCua = t.getComponent(_.default);
}
this.bauCua.show();
} else console.log(t);
});
});
}
openGameBauCua2() {
h.default.Login.IsLogin ? u.default.getInstance().checkConnect(() => {
s.instance.showLoading(!1);
s.instance.loadSceneInSubpackage("BauCuaTo2", "BauCuaTo2");
}) : s.instance.alertDialog.showMsg("Bạn chưa đăng nhập.");
}
openGameSlot3x3() {
this.loadPrefabFromBundle("Slot3x3", {
src: "Slot3x3"
}, t => {
l.default.getInstance().checkConnect(() => {
if (null != t) {
if (null == this.slot3x3) {
let e = t;
e.parent = this.miniGame;
e.active = !1;
this.slot3x3 = e.getComponent(_.default);
}
this.slot3x3.show();
}
});
});
}
openGameTaiXiuMini() {
this.loadPrefabFromBundle("TaiXiuDouble", {
src: "TaiXiuDouble"
}, t => {
p.default.getInstance().checkConnect(() => {
if (null != t) {
if (null == this.taiXiuDouble) {
let e = t;
e.parent = this.miniGame;
e.active = !1;
this.taiXiuDouble = e.getComponent(_.default);
}
this.taiXiuDouble.show();
}
});
});
}
openGameTaiXiuMD5() {
this.loadPrefabFromBundle("TaiXiuMD5", {
src: "TaiXiuMD5"
}, t => {
f.default.getInstance().checkConnect(() => {
if (null != t) {
if (null == this.taiXiuMD5) {
let e = t;
e.parent = this.miniGame;
e.active = !1;
this.taiXiuMD5 = e.getComponent(_.default);
}
this.taiXiuMD5.show();
}
});
});
}
openGameMiniPoker() {
this.loadPrefabFromBundle("MiniPoker", {
src: "MiniPoker"
}, t => {
l.default.getInstance().checkConnect(() => {
if (null != t) {
if (null == this.miniPoker) {
let e = t;
e.parent = this.miniGame;
e.active = !1;
this.miniPoker = e.getComponent(_.default);
}
this.miniPoker.show();
}
});
});
}
openGameCaoThap() {
this.loadPrefabFromBundle("CaoThap", {
src: "CaoThap"
}, t => {
l.default.getInstance().checkConnect(() => {
if (null != t) {
if (null == this.caoThap) {
let e = t;
e.parent = this.miniGame;
e.active = !1;
this.caoThap = e.getComponent(_.default);
}
this.caoThap.show();
}
});
});
}
openGameOanTuTi() {
s.instance.loadGamePrefabInSubpackage("OanTuTi", "prefabs/OanTuTi", (t, e) => {
l.default.getInstance().checkConnect(() => {
if (null != e) {
if (null == this.oanTuTi) {
let t = cc.instantiate(e);
t.parent = this.miniGame;
t.active = !1;
this.oanTuTi = t.getComponent(_.default);
}
this.oanTuTi.show();
} else console.log(t);
});
});
}
openTelegram(t = null) {
null == t && (t = h.default.App.getLinkTelegram());
let e = "https://t.me/" + t;
cc.sys.isNative && (e = "tg://resolve?domain=" + t);
cc.sys.openURL(e);
}
ShowAlertDialog(t) {
this.alertDialog.showMsg(t);
}
cleanAccents(t) {
return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")).replace(/\u02C6|\u0306|\u031B/g, "");
}
countClick() {
if (!cc.sys.isNative) {
let t = new URL(window.location.href);
if ("true" == t.searchParams.get("seo")) {
let e = t.searchParams.get("utm_campaign"), i = t.searchParams.get("utm_medium"), s = t.searchParams.get("utm_source"), o = {
c: 4055,
utm_dl: t.searchParams.get("utm_dl"),
utm_source: s,
utm_medium: i,
utm_campaign: e,
ip: "",
device: navigator.userAgent,
note1: "",
note2: window.location.hostname,
note3: ""
};
d.default.get(h.default.App.API, o, () => {
window.history.pushState({}, document.title, "/");
});
}
}
}
actShowThongBao(t, e = 3) {
this.thongBaoDialog.stopAllActions();
this.thongBaoDialog.getChildByName("lbTextThongBao").getComponent(cc.Label).string = t;
this.thongBaoDialog.active = !0;
let i = cc.v2(0, 1200);
this.thongBaoDialog.runAction(cc.sequence(cc.moveTo(.25, cc.v2(0, 320)), cc.delayTime(e), cc.moveTo(.25, i), cc.delayTime(.5)));
}
actCloseThongBao() {
let t = cc.v2(0, 1200);
this.thongBaoDialog.position = t;
}
actShowThongBao2(t, e = 0) {
this.popupThongBao2.stopAllActions();
let i = m.default.getChildNode(this.popupThongBao2, "lbl");
m.default.setNodeLabel(i, t);
m.default.getChildNode(this.popupThongBao2, "Bg");
this.popupThongBao2.position = cc.v2(0, 400);
cc.tween(this.popupThongBao2).to(.4, {
position: cc.v2(0, 318)
}).delay(2).to(.4, {
position: cc.v2(0, 400)
}).start();
}
setButtonMiniGamesPosition(t) {
this.nodeButtonMiniGames.position = t;
}
};
w.instance = null;
o([ R ], w.prototype, "designResolution", void 0);
o([ R(cc.Node) ], w.prototype, "loading2", void 0);
o([ R(n.default) ], w.prototype, "alertDialog", void 0);
o([ R(r.default) ], w.prototype, "confirmDialog", void 0);
o([ R(r.default) ], w.prototype, "confirmDialog2", void 0);
o([ R(cc.Node) ], w.prototype, "thongBaoDialog", void 0);
o([ R([ cc.SpriteFrame ]) ], w.prototype, "sprFrameAvatars", void 0);
o([ R(cc.Node) ], w.prototype, "buttonMiniGameNode", void 0);
o([ R(cc.Node) ], w.prototype, "miniGame", void 0);
o([ R(n.default) ], w.prototype, "popUpSercretCode", void 0);
o([ R({
type: cc.Node
}) ], w.prototype, "popupThongBao2", void 0);
o([ R(cc.Node) ], w.prototype, "nodeNoHuEffect", void 0);
o([ R(cc.Node) ], w.prototype, "nodeButtonMiniGames", void 0);
w = s = o([ T ], w);
i.default = w;
cc._RF.pop();
}, {
"../common/AlertDialog": "AlertDialog",
"../common/ConfirmDialog": "ConfirmDialog",
"../networks/BauCuaTo2NetworkClient": "BauCuaTo2NetworkClient",
"../networks/MiniGameNetworkClient": "MiniGameNetworkClient",
"../networks/Network.InPacket": "Network.InPacket",
"../networks/ShootFishNetworkClient": "ShootFishNetworkClient",
"../networks/SlotNetworkClient": "SlotNetworkClient",
"../networks/TaiXiuMD5NetWorkClient": "TaiXiuMD5NetWorkClient",
"../networks/TaiXiuNetWorkClient": "TaiXiuNetWorkClient",
"../networks/TienLenNetworkClient": "TienLenNetworkClient",
"./BroadcastReceiver": "BroadcastReceiver",
"./BundleControl": "BundleControl",
"./ButtonMiniGame": "ButtonMiniGame",
"./Configs": "Configs",
"./Http": "Http",
"./LoadingCirle": "LoadingCirle",
"./Lobby.Cmd": "Lobby.Cmd",
"./MiniGame": "MiniGame",
"./NodeUtils": "NodeUtils",
"./SPUtils": "SPUtils",
"./SubpackageDownloader": "SubpackageDownloader"
} ],
AutoScrollPageView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4216bMOKp1ByKeg7GkKYJPL", "AutoScrollPageView");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.timePerPage = 3;
this.timeSwitchPage = 1;
this.pageView = null;
}
onLoad() {
this.pageView = this.node.getComponent(cc.PageView);
cc.director.getScheduler().schedule(this.switchPage, this, this.timePerPage, cc.macro.REPEAT_FOREVER, 0, !1);
}
switchPage() {
let t = this.pageView.content.children.length, e = this.pageView.getCurrentPageIndex();
e === t - 1 ? e = 0 : e++;
this.pageView.scrollToPage(e, this.timeSwitchPage);
}
};
s([ n(cc.Integer) ], r.prototype, "timePerPage", void 0);
s([ n(cc.Integer) ], r.prototype, "timeSwitchPage", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
BanCaController: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bb8c8B1b9hGDZWDyR7dZUDh", "BanCaController");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("../../../scripts/common/AlertDialog"), n = t("../../../scripts/common/App"), r = t("../../../scripts/common/BroadcastReceiver"), a = t("../../../scripts/common/Configs"), c = t("../../../scripts/common/Dialog"), l = t("../../../scripts/common/Http"), h = t("../../../scripts/common/Utils"), u = t("../../../scripts/common/Tween"), {ccclass: d, property: p} = cc._decorator;
cc.macro.ENABLE_TRANSPARENT_CANVAS = !0;
let g = class extends cc.Component {
constructor() {
super(...arguments);
this.webview = null;
this.myCanvas = null;
this.bongdaDialog = null;
this.popUpNapRut = null;
this.money = null;
this.gameplayNode = null;
this.alertDialog = null;
this.currentMoney = null;
this.moneyBongDa = null;
this.currentMoneyQue = a.default.Login.Coin;
}
onLoad() {}
callback(t) {
console.log("webview url la" + this.webview.url);
this.webview.url !== a.default.App.BANCA && "https://null" !== this.webview.url || n.default.instance.loadSceneFromBundle("Lobby", {
src: "Lobby"
});
t.detail;
}
start() {
cc.director.setClearColor(new cc.Color(0, 0, 0, 0));
this.webview.url = a.default.App.BANCA + "/?token=" + a.default.Login.AccessToken + "&brand=sun9.club&domain=sun9.club";
u.default.numberTo(this.currentMoney, a.default.Login.Coin, .3);
r.default.register(r.default.USER_UPDATE_COIN, () => {
u.default.numberTo(this.currentMoney, a.default.Login.Coin, .3);
}, this);
this.callToGetMoney();
}
callToGetMoney() {
l.default.get(a.default.App.API, {
c: 4025
}, (t, e) => {
e && u.default.numberTo(this.moneyBongDa, 1e3 * e.balance, .3);
});
}
actBack() {
this.actRut();
n.default.instance.loadSceneFromBundle("Lobby", {
src: "Lobby"
});
}
actNap() {
let t = a.default.Login.Coin;
if (!t) {
this.popUpNapRut.dismiss();
this.alertDialog.showMsg("Lỗi không xác định.");
}
l.default.get(a.default.App.API, {
c: 4026,
nickname: a.default.Login.Nickname,
money: t
}, (e, i) => {
try {
switch (parseInt(i.errorCode)) {
case 0:
this.popUpNapRut.dismiss();
this.alertDialog.showMsg("Chuyển tiền thành công!");
this.currentMoneyQue = this.currentMoneyQue - t;
break;

case 500:
this.alertDialog.showMsg("Chuyển tiền thất bại!");
break;

default:
this.alertDialog.showMsg(i.errorCode);
}
} catch (t) {
this.alertDialog.showMsg(i.errorCode);
}
u.default.numberTo(this.currentMoney, this.currentMoneyQue, .3);
});
r.default.send(r.default.USER_UPDATE_COIN);
}
onchangeMoney() {
let t = h.default.formatMoney(parseInt(this.money.string));
this.money.string = t;
}
actRut() {
let t = h.default.stringToInt(this.moneyBongDa.string);
if (!t) {
this.popUpNapRut.dismiss();
this.alertDialog.showMsg("Lỗi không xác định.");
}
l.default.get(a.default.App.API, {
c: 4027,
nickname: a.default.Login.Nickname,
money: t
}, (e, i) => {
n.default.instance.showLoading(!1);
if (null == e) {
try {
switch (parseInt(i.errorCode)) {
case 0:
this.popUpNapRut.dismiss();
this.alertDialog.showMsg("Rút tiền thành công!");
this.currentMoney.string = h.default.formatMoney(a.default.Login.Coin + t);
this.currentMoneyQue = this.currentMoneyQue + t;
break;

case 500:
this.popUpNapRut.dismiss();
this.alertDialog.showMsg("Rút tiền thất bại!");
break;

default:
this.popUpNapRut.dismiss();
this.alertDialog.showMsg(i.errorCode);
}
} catch (t) {
this.popUpNapRut.dismiss();
this.alertDialog.showMsg(i.errorCode);
}
u.default.numberTo(this.currentMoney, this.currentMoneyQue, .3);
} else this.alertDialog.showMsg("Lỗi không xác định.");
});
r.default.send(r.default.USER_UPDATE_COIN);
}
CloseAlert() {
this.alertDialog.dismiss();
this.actClosePopUpNap();
}
actShowPopup() {
this.gameplayNode.active = !1;
this.callToGetMoney();
this.popUpNapRut.show();
}
actClosePopUpNap() {
this.popUpNapRut.dismiss();
this.gameplayNode.active = !0;
}
update(t) {
console.log("webview url la" + this.webview.url);
this.webview.url !== a.default.App.BANCA && "https://null" !== this.webview.url || n.default.instance.loadSceneFromBundle("Lobby", {
src: "Lobby"
});
}
};
s([ p(cc.WebView) ], g.prototype, "webview", void 0);
s([ p(cc.Canvas) ], g.prototype, "myCanvas", void 0);
s([ p(c.default) ], g.prototype, "bongdaDialog", void 0);
s([ p(c.default) ], g.prototype, "popUpNapRut", void 0);
s([ p(cc.EditBox) ], g.prototype, "money", void 0);
s([ p(cc.Node) ], g.prototype, "gameplayNode", void 0);
s([ p(o.default) ], g.prototype, "alertDialog", void 0);
s([ p(cc.Label) ], g.prototype, "currentMoney", void 0);
s([ p(cc.Label) ], g.prototype, "moneyBongDa", void 0);
g = s([ d ], g);
i.default = g;
cc._RF.pop();
}, {
"../../../scripts/common/AlertDialog": "AlertDialog",
"../../../scripts/common/App": "App",
"../../../scripts/common/BroadcastReceiver": "BroadcastReceiver",
"../../../scripts/common/Configs": "Configs",
"../../../scripts/common/Dialog": "Dialog",
"../../../scripts/common/Http": "Http",
"../../../scripts/common/Tween": "Tween",
"../../../scripts/common/Utils": "Utils"
} ],
BauCuaTo2NetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "955753aLPNDVbsnDzz30UEh", "BauCuaTo2NetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("../common/App"), o = t("./Network.NetworkClient"), n = t("./Network.NetworkListener"), r = t("../common/Configs"), a = t("./Network.InPacket"), c = t("./Network.Cmd");
class l extends o.default {
constructor() {
super();
this.listeners = new Array();
this.isLogin = !1;
this.onLogined = null;
this.intervalPing = -1;
this.isUseWSS = r.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new l());
return this.instance;
}
checkConnect(t = null) {
this.onLogined = t;
if (null == this.ws || this.ws.readyState != WebSocket.CONNECTING) {
this.connect();
this.isLogin && null != this.onLogined && this.onLogined();
}
}
onError(t) {
s.default.instance.showLoading(!1);
console.log("onError Game");
}
connect() {
super.connect(r.default.App.HOST_BAU_CUA_TO2.host, r.default.App.HOST_BAU_CUA_TO2.port);
}
onOpen(t) {
super.onOpen(t);
this.send(new c.default.SendLogin(r.default.Login.Nickname, r.default.Login.AccessToken));
console.log("minigame connected");
this.intervalPing = setInterval(() => this.ping(), 1);
this.ping();
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
switch (new a.default(e).getCmdId()) {
case c.default.Code.LOGIN:
this.isLogin = !0;
if (null != this.onLogined) {
console.log("Logined");
this.onLogined();
}
}
}
addListener(t, e) {
this.listeners.push(new n.default(e, t));
}
onClose(t) {
console.log("onclose Game");
super.onClose(t);
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
sendCheck(t) {
this.checkConnect(() => {
this.send(t);
});
}
ping() {
null != this.ws && this.ws.readyState !== WebSocket.OPEN && console.log("WebSocket baucuagame instance wasn't ready...");
}
}
i.default = l;
cc._RF.pop();
}, {
"../common/App": "App",
"../common/Configs": "Configs",
"./Network.Cmd": "Network.Cmd",
"./Network.InPacket": "Network.InPacket",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
BgResizer: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "cbf1dlYiXRG35Ei6K+I4cFm", "BgResizer");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.designResolution = new cc.Size(1280, 720);
this.lastWitdh = 0;
this.lastHeight = 0;
}
start() {
cc.log("onstart lastHeight: " + this.lastHeight);
this.updateSize();
}
update(t) {
this.updateSize();
}
updateSize() {
var t = cc.view.getFrameSize();
if (this.lastWitdh !== t.width || this.lastHeight !== t.height) {
this.lastWitdh = t.width;
this.lastHeight = t.height;
if (this.designResolution.width / this.designResolution.height > t.width / t.height) {
var e = (s = this.designResolution.width * t.height / t.width) * this.designResolution.width / this.designResolution.height, i = cc.size(e, s);
this.node.setContentSize(i);
} else {
var s = (e = this.designResolution.height * t.width / t.height) * this.designResolution.height / this.designResolution.width;
i = cc.size(e, s), i = cc.size(e, s);
this.node.setContentSize(i);
}
}
}
};
s([ n ], r.prototype, "designResolution", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
BroadcastReceiver: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8831e6G+6NKPKJ3bcB/6OEn", "BroadcastReceiver");
Object.defineProperty(i, "__esModule", {
value: !0
});
var s;
(function(t) {
class e {
constructor(t, e, i) {
this.action = t;
this.target = i;
this.callback = e;
}
}
t.BroadcastListener = e;
class i {
static register(t, i, s) {
this.listeners.push(new e(t, i, s));
}
static unRegisterByAction(t) {
for (var e = 0; e < this.listeners.length; e++) this.listeners[e].action == t && this.listeners.splice(e--, 1);
}
static unRegisterByTarget(t) {
for (var e = 0; e < this.listeners.length; e++) this.listeners[e].target == t && this.listeners.splice(e--, 1);
}
static send(t, e = null) {
for (var i = 0; i < this.listeners.length; i++) {
let s = this.listeners[i];
s.action == t && (s.target && s.target instanceof Object && s.target.node ? s.callback(e) : this.listeners.splice(i--, 1));
}
}
}
i.UPDATE_NICKNAME_SUCCESS = "UPDATE_NICKNAME_SUCCESS";
i.LOGINED = "LOGINED";
i.USER_INFO_UPDATED = "USER_INFO_UPDATED";
i.USER_LOGOUT = "USER_LOGOUT";
i.USER_UPDATE_COIN = "USER_UPDATE_COIN";
i.ON_AUDIO_CHANGED = "ON_AUDIO_CHANGED";
i.USER_LOGIN = "USER_LOGIN";
i.listeners = new Array();
t.BroadcastReceiver = i;
})(s || (s = {}));
i.default = s.BroadcastReceiver;
cc._RF.pop();
}, {} ],
BundleControl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "80fd6HKBVZJcppUo+BnWtaA", "BundleControl");
var s = this && this.__awaiter || function(t, e, i, s) {
return new (i || (i = Promise))(function(o, n) {
function r(t) {
try {
c(s.next(t));
} catch (t) {
n(t);
}
}
function a(t) {
try {
c(s.throw(t));
} catch (t) {
n(t);
}
}
function c(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(r, a);
var e;
}
c((s = s.apply(t, e || [])).next());
});
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./Configs"), n = t("./App");
i.default = class {
static loadPrefabLobby(t) {
return s(this, void 0, void 0, function*() {
return new Promise(e => {
n.default.instance.lobbyBundle.load(t, cc.Prefab, function() {}, function(t, i) {
if (t) e(null); else {
let t = cc.instantiate(i);
e(t);
}
});
});
});
}
static loadScene(t, e) {
return s(this, void 0, void 0, function*() {
let i = cc._selectedGameNode, s = null, o = null;
if (i) {
s = i.getChildByName("load");
o = i.getChildByName("load_bg");
s.active = !0;
o.active = !0;
s.getComponent(cc.ProgressBar).progress = 0;
i.getComponent(cc.Button) && (i.getComponent(cc.Button).interactable = !1);
}
let n = yield this.loadBundle(t), r = 0;
return new Promise(t => {
n.loadScene(e, function(t, e) {
let i = Math.round(t / e * 100);
r < i && (r = i);
if (s) {
s.active = !0;
s.getChildByName("label").getComponent(cc.Label).string = `${Math.round(r)}%`;
s.getComponent(cc.ProgressBar).progress = Math.round(r) / 100;
}
}, function(e, n) {
t(e ? null : n);
i && i.getComponent(cc.Button) && (i.getComponent(cc.Button).interactable = !0);
i && (cc._selectedGameNode = null);
if (s) {
s.active = !1;
o.active = !1;
}
});
});
});
}
static loadPrefab(t, e) {
return s(this, void 0, void 0, function*() {
let i = cc._selectedGameNode, s = null, o = null;
if (i) {
s = i.getChildByName("load");
o = i.getChildByName("load_bg");
s.active = !0;
o.active = !0;
s.getComponent(cc.ProgressBar).progress = 0;
i.getComponent("ColorChild").Darken = .3;
i.getComponent(cc.Button) && (i.getComponent(cc.Button).interactable = !1);
}
let n = yield this.loadBundle(t), r = 0;
return new Promise(t => {
n.load(e, cc.Prefab, function(t, e) {
let i = Math.round(t / e * 100);
1 != i && (i = Math.round(t / e * 100));
r < i && (r = i);
if (s) {
s.active = !0;
o.active = !0;
s.getChildByName("label").getComponent(cc.Label).string = Math.round(r) + "%";
s.getComponent(cc.ProgressBar).progress = Math.round(r) / 100;
}
}, function(e, n) {
if (e) t(null); else {
let e = cc.instantiate(n);
t(e);
}
i && i.getComponent(cc.Button) && (i.getComponent(cc.Button).interactable = !0);
i && i.getComponent("ColorChild") && (i.getComponent("ColorChild").Darken = 1);
cc._selectedGameNode = null;
if (s) {
s.active = !1;
o.active = !1;
}
});
});
});
}
static loadBundle(t) {
return s(this, void 0, void 0, function*() {
let e = t;
if (cc.sys.isNative) {
let i = o.default.App.BUNDLE_CONFIG.bundleVers[t];
e = `https://${o.default.App.BUNDLE_URL}/remote/${t}`;
return new Promise(t => {
cc.assetManager.loadBundle(e, {
version: i
}, (e, i) => {
if (e) {
cc.log("Error Donwload bundle:" + JSON.stringify(e));
t(null);
} else t(i);
});
});
}
return new Promise(t => {
cc.assetManager.loadBundle(e, (e, i) => {
if (e) {
cc.log("Error Donwload bundle:" + JSON.stringify(e));
t(null);
} else t(i);
});
});
});
}
static releaseBundle(t) {
let e = cc.assetManager.getBundle(t);
e && e.releaseAll();
}
};
cc._RF.pop();
}, {
"./App": "App",
"./Configs": "Configs"
} ],
ButtonMiniGame: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "43933Wy759F+qsbqvxc3BMb", "ButtonMiniGame");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("../../scripts/networks/Network.InPacket"), n = t("../../scripts/common/App"), r = t("./Lobby.Cmd"), a = t("../../scripts/networks/TaiXiuNetWorkClient"), {ccclass: c, property: l} = cc._decorator;
let h = class extends cc.Component {
constructor() {
super(...arguments);
this.labelTime = null;
this.labelTimeTX2 = null;
this.button = null;
this.panel = null;
this.container = null;
this.txNode = null;
this.caoThapNode = null;
this.miniPokerNode = null;
this.bauCuaNode = null;
this.kimCuongNode = null;
this.buttonClicked = !0;
this.buttonMoved = cc.Vec2.ZERO;
}
onLoad() {
this.panel.active = !1;
this.button.active = !1;
this.labelTime.string = "00";
this.button.on(cc.Node.EventType.TOUCH_START, () => {
this.buttonClicked = !0;
this.buttonMoved = cc.Vec2.ZERO;
}, this);
this.button.on(cc.Node.EventType.TOUCH_MOVE, t => {
this.buttonMoved = this.buttonMoved.add(t.getDelta());
if (this.buttonClicked) {
if (Math.abs(this.buttonMoved.x) > 30 || Math.abs(this.buttonMoved.y) > 30) {
let t = this.button.position;
t.x += this.buttonMoved.x;
t.y += this.buttonMoved.y;
this.button.position = t;
this.buttonClicked = !1;
}
} else {
let e = this.button.position;
e.x += t.getDeltaX();
e.y += t.getDeltaY();
this.button.position = e;
}
}, this);
this.button.on(cc.Node.EventType.TOUCH_END, () => {
this.buttonClicked && this.actButton();
}, this);
a.default.getInstance().addListener(t => {
switch (new o.default(t).getCmdId()) {
case r.default.Code.UPDATE_TIME_BUTTON:
{
let e = new r.default.ReceiveUpdateTimeButton(t);
this.labelTime.string = e.remainTime > 9 ? e.remainTime.toString() : "0" + e.remainTime;
this.labelTimeTX2.string = e.remainTime > 9 ? e.remainTime.toString() : "0" + e.remainTime;
}
}
}, this);
}
show() {
this.panel.active = !1;
this.button.active = !0;
this.labelTime.string = "00";
}
hidden() {
this.panel.active = !1;
this.button.active = !1;
}
showTimeTaiXiu(t) {
this.labelTime.node.parent.active = t;
}
actButton() {
this.panel.active = !0;
this.button.active = !1;
}
actHidden() {
this.panel.active = !1;
this.button.active = !0;
}
actTaiXiu(t, e) {
let i = cc.director.getScene();
"Lobby" === i.name ? i.getChildByName("LobbyController").getComponent("Lobby.LobbyController").actGameTaiXiu(null, e) : n.default.instance.openGameTaiXiuMini();
this.actHidden();
}
actGameTaiXiuMD5(t, e) {
let i = cc.director.getScene();
"Lobby" === i.name ? i.getChildByName("LobbyController").getComponent("Lobby.LobbyController").actGameTaiXiuMD5(null, e) : n.default.instance.openGameTaiXiuMD5();
this.actHidden();
}
actMiniPoker(t, e) {
let i = cc.director.getScene();
"Lobby" === i.name ? i.getChildByName("LobbyController").getComponent("Lobby.LobbyController").actGameMiniPoker(null, e) : n.default.instance.openGameMiniPoker();
this.actHidden();
}
actSlot3x3(t, e) {
let i = cc.director.getScene();
"Lobby" === i.name ? i.getChildByName("LobbyController").getComponent("Lobby.LobbyController").actGameSlot3x3(null, e) : n.default.instance.openGameSlot3x3();
this.actHidden();
}
actCaoThap(t, e) {
let i = cc.director.getScene();
"Lobby" === i.name ? i.getChildByName("LobbyController").getComponent("Lobby.LobbyController").actGameCaoThap(null, e) : n.default.instance.openGameCaoThap();
this.actHidden();
}
actBauCua(t, e) {
cc.director.getScene().getChildByName("LobbyController").getComponent("Lobby.LobbyController").actGoToBauCuaTo2(null, e);
this.actHidden();
}
actBauCua2(t, e) {
let i = cc.director.getScene();
"Lobby" === i.name ? i.getChildByName("LobbyController").getComponent("Lobby.LobbyController").actGoToBauCuaTo2(null, e) : n.default.instance.openGameBauCua2();
this.actHidden();
}
actChimDien() {
n.default.instance.alertDialog.showMsg("Game sắp ra mắt.");
this.actHidden();
}
actMaintain() {
n.default.instance.alertDialog.showMsg("Game đang bảo trì.");
this.actHidden();
}
actOanTuTi() {
n.default.instance.openGameOanTuTi();
this.actHidden();
}
};
s([ l(cc.Label) ], h.prototype, "labelTime", void 0);
s([ l(cc.Label) ], h.prototype, "labelTimeTX2", void 0);
s([ l(cc.Node) ], h.prototype, "button", void 0);
s([ l(cc.Node) ], h.prototype, "panel", void 0);
s([ l(cc.Node) ], h.prototype, "container", void 0);
s([ l(cc.Node) ], h.prototype, "txNode", void 0);
s([ l(cc.Node) ], h.prototype, "caoThapNode", void 0);
s([ l(cc.Node) ], h.prototype, "miniPokerNode", void 0);
s([ l(cc.Node) ], h.prototype, "bauCuaNode", void 0);
s([ l(cc.Node) ], h.prototype, "kimCuongNode", void 0);
h = s([ c ], h);
i.default = h;
cc._RF.pop();
}, {
"../../scripts/common/App": "App",
"../../scripts/networks/Network.InPacket": "Network.InPacket",
"../../scripts/networks/TaiXiuNetWorkClient": "TaiXiuNetWorkClient",
"./Lobby.Cmd": "Lobby.Cmd"
} ],
CanvasResizer: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2a33dcxF+NBW6IzkrkZ/0RB", "CanvasResizer");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n, requireComponent: r} = cc._decorator;
let a = class extends cc.Component {
constructor() {
super(...arguments);
this.designResolution = new cc.Size(1560, 720);
this.lastWitdh = 0;
this.lastHeight = 0;
}
onLoad() {
this.canvas = this.node.getComponent(cc.Canvas);
this.updateCanvas();
}
update(t) {
this.updateCanvas();
}
updateCanvas() {
var t = cc.view.getFrameSize();
if (this.lastWitdh !== t.width || this.lastHeight !== t.height) {
this.lastWitdh = t.width;
this.lastHeight = t.height;
if (this.designResolution.width / this.designResolution.height > t.width / t.height) {
var e = cc.size(this.designResolution.width, this.designResolution.width * (t.height / t.width));
this.canvas.designResolution = e;
cc.log("update canvas size: " + e);
} else {
e = cc.size(this.designResolution.height * (t.width / t.height), this.designResolution.height);
this.canvas.designResolution = e;
cc.log("update canvas size: " + e);
}
}
}
};
s([ n ], a.prototype, "designResolution", void 0);
a = s([ o, r(cc.Canvas) ], a);
i.default = a;
cc._RF.pop();
}, {} ],
CanvasScene: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "47589Wl0vBF/ITv7wieb8mE", "CanvasScene");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.fitHeight = !1;
this.fitWidth = !1;
this.designRatio = 1;
this.screenRatio = 1;
this.scaleRatio = 1;
this.prescaleRatio = 1;
this.designResolution = null;
this.resizeMobileCallBack = null;
this.onSizeChangeCallBack = null;
this.listSizeChangeCallBack = [];
}
onLoad() {
cc.debug.setDisplayStats(!1);
cc.sys.dump();
if (cc.sys.platform == cc.sys.DESKTOP_BROWSER) {
this.fitHeight = !1;
this.fitWidth = !1;
this.designResolution.width = 1560;
this.designResolution.height = 720;
cc.winSize.width = this.designResolution.width;
cc.winSize.height = this.designResolution.height;
cc.view.setDesignResolutionSize(this.designResolution.width, this.designResolution.height, cc.ResolutionPolicy.SHOW_ALL);
cc.view.resizeWithBrowserSize(!0);
cc.view.setResizeCallback(() => {
this.updateDesktopSize();
});
this.updateDesktopSize();
} else {
this.updateSize();
if (cc.sys.platform == cc.sys.MOBILE_BROWSER) {
cc.view.setResizeCallback(() => {
this.updateWebMobileSize();
});
null != this.resizeMobileCallBack && this.resizeMobileCallBack();
}
}
}
start() {
cc.sys.platform, cc.sys.MOBILE_BROWSER;
}
addSizeChangedCallback(t) {
t && this.listSizeChangeCallBack.push(t);
}
updateWebMobileSize() {
this.updateDesktopSize();
}
updateDesktopSize() {
if (cc.sys.platform == cc.sys.DESKTOP_BROWSER || cc.sys.platform == cc.sys.MOBILE_BROWSER) {
let t = this.designResolution.width / 1560, e = this.designResolution.height / 720;
cc.winSize.width = 1560;
cc.winSize.height = 720;
this.designResolution.width = 1560;
this.designResolution.height = 720;
this.scaleRatio = t > e ? t : e;
this.scaleRatio >= .99 && this.scaleRatio <= 1 && (this.scaleRatio = 1);
this.scaleRatio = 1;
this.designRatio = 1;
this.screenRatio = 1;
this.onSizeChangeCallBack && this.onSizeChangeCallBack();
for (let t = 0; t < this.listSizeChangeCallBack.length; t++) try {
this.listSizeChangeCallBack[t]();
} catch (e) {
this.listSizeChangeCallBack.splice(t, 1);
t--;
}
}
}
updateSize() {
let t = this.scaleRatio;
this.prescaleRatio = t;
this.designRatio = this.designResolution.width / this.designResolution.height;
this.screenRatio = cc.winSize.width / cc.winSize.height;
let e = this.designResolution.width / cc.winSize.width, i = this.designResolution.height / cc.winSize.height;
if (e < i) {
this.scaleRatio = e;
this.fitWidth = !1;
this.fitHeight = !0;
} else {
this.scaleRatio = i;
this.fitWidth = !0;
this.fitHeight = !1;
}
this.scaleRatio >= .99 && this.scaleRatio <= 1 && (this.scaleRatio = 1);
this.onSizeChangeCallBack && this.onSizeChangeCallBack();
}
getScaleRatio() {
if (null == cc.Canvas.instance) return 1;
let t = cc.size(1560, 720), e = 1;
(e = t.width / cc.winSize.width > t.height / cc.winSize.height ? cc.winSize.width / t.width : cc.winSize.height / t.height) >= .99 && e <= 1 && (e = 1);
this.scaleRatio = e;
return this.scaleRatio;
}
getBackgroundRatio() {
return null == cc.Canvas.instance ? 1 : cc.Canvas.instance.designResolution.width / cc.winSize.width > cc.Canvas.instance.designResolution.height / cc.winSize.height ? cc.winSize.height / cc.Canvas.instance.designResolution.height : cc.winSize.width / cc.Canvas.instance.designResolution.width;
}
};
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
"CardGame.Cmd": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a7c6afh+XBMeoI7bhZgC4XY", "CardGame.Cmd");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.CardGameCmd = void 0;
const s = t("./Network.OutPacket"), o = t("./Network.InPacket"), {ccclass: n} = cc._decorator;
var r;
(function(t) {
class e {}
e.LOGIN = 1;
e.NOTIFY_DISCONNECT = 37;
e.PING_PONG = 50;
e.JOIN_ROOM = 3001;
e.RECONNECT_GAME_ROOM = 3002;
e.JOIN_ROOM_FAIL = 3004;
e.HOLD = 3116;
e.MONEY_BET_CONFIG = 3003;
e.GET_LIST_ROOM = 3014;
e.TOP_SERVER = 1001;
e.CHEAT_CARD = 3115;
e.PING_TEST = 1050;
e.CHAT_ROOM = 3008;
e.NO_HU_VANG = 3007;
e.THONG_TIN_HU_VANG = 3009;
e.REQUEST_INFO_MOI_CHOI = 3010;
e.MOI_CHOI = 3011;
e.ACCEPT_MOI_CHOI = 3012;
e.CREATE_ROOM = 3013;
e.JOIN_GAME_ROOM_BY_ID = 3015;
e.FIND_ROOM_LOBBY = 3016;
e.GET_XOCDIA_CONFIG = 3017;
e.CREATE_ROOM_FAIL = 3018;
t.Code = e;
t.SendMoneyBetConfig = class extends s.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.MONEY_BET_CONFIG);
this.packHeader();
this.updateSize();
}
};
t.ResMoneyBetConfig = class extends o.default {
constructor(t) {
super(t);
this.list = [];
this.rules = [];
let e = this.getShort();
for (var i = 0; i < e; i++) {
var s = {
maxUserPerRoom: this.getInt(),
moneyType: this.getByte(),
moneyBet: this.getLong(),
moneyRequire: this.getLong(),
nPersion: this.getInt()
};
this.list.push(s);
}
for (i = 0; i < e; i++) this.rules.push(this.getByte());
}
};
t.SendGetListRoom = class extends s.default {
constructor(t, i, s, o, n, r) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.GET_LIST_ROOM);
this.packHeader();
this.putByte(t);
this.putByte(i);
this.putByte(s);
this.putByte(o);
this.putByte(n);
this.putByte(r);
this.updateSize();
}
};
t.SendJoinRoom = class extends s.default {
constructor(t, i, s, o) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.JOIN_ROOM);
this.packHeader();
this.putInt(t);
this.putInt(i);
this.putLong(s);
this.putInt(o);
this.updateSize();
}
};
t.SendJoinRoomById = class extends s.default {
constructor(t) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.JOIN_GAME_ROOM_BY_ID);
this.packHeader();
this.putInt(t);
this.putString("");
this.updateSize();
}
};
t.ReceivedJoinRoomFail = class extends o.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
})(r = i.CardGameCmd || (i.CardGameCmd = {}));
i.default = r;
cc._RF.pop();
}, {
"./Network.InPacket": "Network.InPacket",
"./Network.OutPacket": "Network.OutPacket"
} ],
CardGameNetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "bb718MKBZ5MFrCvutTYb1Eh", "CardGameNetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkClient"), o = t("./Network.NetworkListener"), n = t("../common/Configs"), r = t("./Network.InPacket"), a = t("./Network.Cmd");
class c extends s.default {
constructor() {
super();
this.listeners = new Array();
this.isLogin = !1;
this.onLogined = null;
this.isUseWSS = n.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new c());
return this.instance;
}
checkConnect(t) {
this.onLogined = t;
null != this.ws && this.ws.readyState == WebSocket.CONNECTING || (this.isConnected() ? this.isLogin && null != this.onLogined && this.onLogined() : this._connect());
}
_connect() {
cc.log("start connect card game");
}
onOpen(t) {
super.onOpen(t);
this.send(new a.default.SendLogin(n.default.Login.Nickname, n.default.Login.AccessToken));
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
switch (new r.default(e).getCmdId()) {
case a.default.Code.LOGIN:
this.isLogin = !0;
null != this.onLogined && this.onLogined();
}
}
addListener(t, e) {
this.listeners.push(new o.default(e, t));
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
sendCheck(t) {
this.checkConnect(() => {
this.send(t);
});
}
}
i.default = c;
cc._RF.pop();
}, {
"../common/Configs": "Configs",
"./Network.Cmd": "Network.Cmd",
"./Network.InPacket": "Network.InPacket",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
CardGame_ItemRoom: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "40208gO36VJZpQQjiD6Vrko", "CardGame_ItemRoom");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("../common/Utils"), {ccclass: n, property: r} = cc._decorator;
let a = class extends cc.Component {
constructor() {
super(...arguments);
this.labelBet = null;
this.lblBetRange = null;
this.labelPlayers = null;
this.progressNumPlayers = null;
this.itemInfo = null;
}
initItems(t) {
cc.log("CardGame_ItemRoom data : ", t);
this.itemInfo = t;
this.labelBet.string = this.moneyToK(t.bet);
this.lblBetRange.string = `${o.default.numFormatter(t.bet)}/${o.default.numFormatter(t.moneyRequire)}`;
this.labelPlayers.string = `${this.formatGold(t.players)}/${this.formatGold(t.maxUser)}`;
this.progressNumPlayers.fillRange = t.players / t.maxUser;
}
scale(t) {
this.node.scale = t;
}
chooseRoom() {
cc.log("CardGame_ItemRoom chooseRoom : ", this.itemInfo);
let t = null;
switch (this.itemInfo.gameId) {
case 0:
case 1:
(t = this.node.parent.parent.parent.parent.getComponent("TienLen.Room")).handleJoinRoom(this.itemInfo);
}
cc.log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent);
cc.log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent.parent);
cc.log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent.parent.parent);
}
formatGold(t) {
return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
moneyToK(t) {
if (t <= 0) return "";
if (t < 1e3) return o.default.formatNumber(t);
if (t < 1e6) {
t = parseInt((t / 1e3).toString());
return o.default.formatNumber(t) + "K";
}
if (t >= 1e6) {
t = parseInt((t / 1e6).toString());
return o.default.formatNumber(t) + "M";
}
}
};
s([ r(cc.Label) ], a.prototype, "labelBet", void 0);
s([ r(cc.Label) ], a.prototype, "lblBetRange", void 0);
s([ r(cc.Label) ], a.prototype, "labelPlayers", void 0);
s([ r(cc.Sprite) ], a.prototype, "progressNumPlayers", void 0);
a = s([ n ], a);
i.default = a;
cc._RF.pop();
}, {
"../common/Utils": "Utils"
} ],
ColumnControllerB52: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6fea7H7iHJGyKKqw/WgACVs", "ColumnControllerB52");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./ItemController"), n = t("../game/MusicPlayer"), r = t("./RollerControllerB52"), {ccclass: a, property: c} = cc._decorator;
let l = class extends cc.Component {
constructor() {
super(...arguments);
this.letTime = 2;
this.itemPrefab = null;
this.height = 440;
this.rollTime1 = .09;
this.rollTime2 = .05;
this.distanceY = 20;
this.numRow = 3;
this.speedRoll = .75;
this.speedRollFast = .55;
this.pathStopRoll = "Sounds/thantai/thantai_rollstop";
this.listSymbolWild = [];
this.columnID = -1;
this.isLastColumn = !1;
this.totalHeight = 440;
this.isSetResultOK = !1;
this._listNodeItem = [];
this.isExpandWild = !1;
this.items = [];
this.imagePrefix = "1_";
this.isStop = !1;
this.onRollDone = null;
this.isMuteColumnDone = !1;
}
setItems(t, e = "1_") {
this.items = t;
this.imagePrefix = e;
for (let t = 0; t < this._listNodeItem.length; t++) {
this._listNodeItem[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
if (this._listNodeItem[t].getComponent(o.default) && this._listNodeItem[t].getComponent(o.default).id < 3) {
this._listNodeItem[t].getComponent(o.default).serverID = parseInt(this.items[t].split("_")[1]);
this._listNodeItem[t].getComponent(o.default).isStopColumn = !0;
this._listNodeItem[t].getComponent(o.default).showAnimItem(1.5, !1, !1, this.imagePrefix);
}
}
}
setResultFreeSpin(t) {
this.imagePrefix = t;
for (let t = 0; t < this._listNodeItem.length; t++) {
0 === this.imagePrefix.localeCompare("0_") && (!this.items[t].split("_")[1] || parseInt(this.items[t].split("_")[1]) > this.getRollerController().maxCountItem ? this.items[t] = `${this.imagePrefix}2` : this.items[t] = `${this.imagePrefix}${this.items[t].split("_")[1]}`);
this._listNodeItem[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
if (this._listNodeItem[t].getComponent(o.default) && this._listNodeItem[t].getComponent(o.default).id < 3) {
this._listNodeItem[t].getComponent(o.default).serverID = parseInt(this.items[t].split("_")[1]);
this._listNodeItem[t].getComponent(o.default).isStopColumn = !0;
this._listNodeItem[t].getComponent(o.default).hideAnimItem();
}
}
}
setResult(t) {
if (!(this.items.length < t.length)) {
let e = this.items.length - t.length, i = Math.floor(this.items.length / t.length);
1 === t.length && (i = 1);
for (let s = 0; s < t.length; s++) {
if (this.getRollerController().isGameBigCityBoy) if (2 == t[s]) switch (this.columnID) {
case 2:
this.items[s] = `${this.imagePrefix}21`;
this.items[e + s] = `${this.imagePrefix}21`;
break;

case 3:
this.items[s] = `${this.imagePrefix}22`;
this.items[e + s] = `${this.imagePrefix}22`;
break;

case 4:
this.items[s] = `${this.imagePrefix}23`;
this.items[e + s] = `${this.imagePrefix}23`;
} else {
this.items[s] = `${this.imagePrefix}${t[s]}`;
this.items[e + s] = `${this.imagePrefix}${t[s]}`;
} else {
this.items[s] = `${this.imagePrefix}${t[s]}`;
this.items[e + s] = `${this.imagePrefix}${t[s]}`;
}
s + i < e + s && (this.items[s + i] = this.getRollerController().getRandomNameItem(this.items.length, 3, this.columnID)[s]);
if (this.node.children[s].getComponent(o.default)) {
if (this.getRollerController().isGameBigCityBoy) if (2 == t[s]) switch (this.columnID) {
case 2:
this.node.children[s].getComponent(o.default).serverID = 21;
break;

case 3:
this.node.children[s].getComponent(o.default).serverID = 22;
break;

case 4:
this.node.children[s].getComponent(o.default).serverID = 23;
} else this.node.children[s].getComponent(o.default).serverID = t[s]; else this.node.children[s].getComponent(o.default).serverID = t[s];
this.listSymbolWild.indexOf(t[s]) > -1 && (this.isExpandWild = !0);
}
}
this.isSetResultOK = !0;
}
}
start() {
let t = this.height, e = -t / 2 + t / this.numRow / 2;
for (let i = 0; i < this.items.length; i++) {
let s = cc.instantiate(this.itemPrefab);
s.x = 0;
s.y = e;
s.getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[i]);
if (i < 3 && s.getComponent(o.default)) {
s.getComponent(o.default).serverID = parseInt(this.items[i].split("_")[1]);
s.getComponent(o.default).id = 0 === i ? 2 : 2 === i ? 0 : i;
s.getComponent(o.default).showAnimItem(30, !1, !0);
}
e += t / this.numRow;
this.node.addChild(s);
this._listNodeItem.push(s);
}
this.totalHeight = t / this.numRow * this.items.length;
}
roll(t = !1, e = !1) {
let i = this.speedRoll;
e ? i = this.speedRollFast : t && (i = this.speedRollFast);
if (this.getRollerController() && this.getRollerController().gameController && this.getRollerController().gameController.expWild && this.getRollerController().gameController.expWild[this.columnID - 1]) {
this.getRollerController().gameController.expWild[this.columnID - 1].stopAllActions();
this.getRollerController().gameController.expWild[this.columnID - 1].runAction(cc.sequence(cc.moveTo(i / 2, cc.v2(this.node.x, (-this.totalHeight + this.height) / 2)), cc.callFunc(() => {
this.getRollerController().gameController.expWild[this.columnID - 1].active = !1;
})));
}
this.node.stopAllActions();
this.node.y = 0;
for (let t = 0; t < this.items.length; t++) {
this.node.children[t].getComponent(o.default).hideAnimItem();
this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemBlurSpriteFrame(this.items[t]);
}
let s = !1;
this.node.runAction(cc.repeatForever(cc.sequence(cc.moveTo(i / 2, cc.v2(this.node.x, (-this.totalHeight + this.height) / 2)), cc.callFunc(() => {
if (!this.isStop || s) ; else {
s = !0;
for (let t = this.items.length - 1; t >= this.items.length - this.numRow; t--) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
this.onRollEnd(i, t, e);
}
}), cc.moveTo(i / 2, cc.v2(this.node.x, -this.totalHeight + this.height)), cc.callFunc(() => {
this.node.y = 0;
}))));
this.isStop = !1;
}
onRollEnd(t, e, i) {
let s = this.letTime;
(i || e) && (s = 2);
this.node.stopAllActions();
this.node.runAction(cc.spawn(cc.sequence(cc.delayTime(t / 2), cc.callFunc(() => {
this.isLastColumn || this.onRollDone && this.onRollDone();
})), cc.sequence(cc.moveTo(t / s, cc.v2(this.node.x, -this.totalHeight + this.height)), cc.callFunc(() => {
this.node.y = 0;
this.node.stopAllActions();
e && this.isMuteColumnDone || n.default.getInstance().playEffect(this.pathStopRoll);
this.isMuteColumnDone = !1;
for (let t = 0; t <= this.numRow; t++) if (this.node.children[t]) {
this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
e && i && !this.node.children[t].getComponent(o.default) || (this.node.children[t].getComponent(o.default).isStopColumn = !0);
}
this.node.runAction(cc.sequence(cc.moveTo(this.rollTime1, cc.v2(this.node.x, this.node.y - this.distanceY)), cc.moveTo(this.rollTime2, cc.v2(this.node.x, this.node.y)), cc.callFunc(() => {
this.isLastColumn && this.onRollDone && this.onRollDone();
})));
}))));
}
stop() {
this.isStop = !0;
}
forceStop() {
this.node.stopAllActions();
this.stop();
for (let t = 0; t < this.numRow; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
this.node.y = 0;
}
getRollerController() {
return this.node.parent.getComponent(r.default);
}
};
s([ c(cc.Integer) ], l.prototype, "letTime", void 0);
s([ c(cc.Prefab) ], l.prototype, "itemPrefab", void 0);
s([ c(cc.Integer) ], l.prototype, "height", void 0);
s([ c(cc.Float) ], l.prototype, "rollTime1", void 0);
s([ c(cc.Float) ], l.prototype, "rollTime2", void 0);
s([ c(cc.Integer) ], l.prototype, "distanceY", void 0);
s([ c(cc.Integer) ], l.prototype, "numRow", void 0);
s([ c(cc.Float) ], l.prototype, "speedRoll", void 0);
s([ c(cc.Float) ], l.prototype, "speedRollFast", void 0);
s([ c(cc.String) ], l.prototype, "pathStopRoll", void 0);
s([ c([ cc.Integer ]) ], l.prototype, "listSymbolWild", void 0);
l = s([ a ], l);
i.default = l;
cc._RF.pop();
}, {
"../game/MusicPlayer": "MusicPlayer",
"./ItemController": "ItemController",
"./RollerControllerB52": "RollerControllerB52"
} ],
ColumnController: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "aa157bqXHRN/aHuV1i1oqQL", "ColumnController");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./RollerController"), n = t("./ItemController"), r = t("../game/GameConfigManager"), a = t("../game/MusicPlayer"), {ccclass: c, property: l} = cc._decorator;
let h = class extends cc.Component {
constructor() {
super(...arguments);
this.itemPrefab = null;
this.height = 440;
this.numRow = 3;
this.maxSpeed = 3500;
this.stopSpeed = 1500;
this.listSymbolWild = [];
this.pathStopRoll = "Sounds/nightclub/Spin-Stop";
this.pathRollTension = "Sounds/halloween/tension";
this.pathStopRollTension = "Sounds/halloween/tensionstop";
this.distanceY = 50;
this.symbolBonus = -10;
this.symbolFree = -10;
this.columnID = -1;
this.isFast = !1;
this.isRoll = !1;
this.isStop = !1;
this.isStopImmediately = !1;
this.onRollDone = null;
this.imagePrefix = "1_";
this.speed = 0;
this.deltaSpeed = 80;
this.velocity = 1;
this.posYWild = 0;
this._listNodeItem = [];
this.tempStopSpeed = 0;
this.isChange1 = !1;
this.isChange2 = !1;
this.isInitialize = !1;
this.isClicked = !1;
this.items = [];
this.isLastColumn = !1;
this.isExpandWild = !1;
this.totalHeight = 440;
this.isMuteColumnDone = !1;
this.isTensionRolling = !1;
this.isTensionBonus = !1;
this.isTensionFree = !1;
}
start() {
this.manualInit();
}
getRollerController() {
return this.node.parent.getComponent(o.default);
}
roll(t = !1) {
if (0 === this.speed) {
this.getRollerController() && this.getRollerController().gameController && this.getRollerController().gameController.expWild && this.getRollerController().gameController.expWild[this.columnID - 1] && (this.posYWild = this.getRollerController().gameController.expWild[this.columnID - 1].y);
this.tempStopSpeed = this.stopSpeed;
this.isFast = t;
this.isChange1 = !1;
this.isChange2 = !1;
this.isStop = !1;
this.isStopImmediately = !1;
this.isTensionRolling = !1;
this.isTensionBonus = !1;
this.isTensionFree = !1;
this.isClicked = !1;
this.isRoll = !0;
this.node.y = 0;
if (t) {
this.velocity = 1.35;
this.deltaSpeed = 100;
} else {
this.velocity = 1;
this.deltaSpeed = 80;
}
}
}
forceStop(t = !1) {
1 == t && (t = !1);
this.speed = 0;
this.isStop = !0;
this.isRoll = !1;
this.node.stopAllActions();
this.stop();
this.isMuteColumnDone = t;
for (let t = 0; t < this.numRow; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
this.node.y = 0;
}
setItem(t, e) {}
setResult(t) {
if (t && !(this.items.length < t)) {
let e = this.items.length - t.length, i = Math.floor(this.items.length / t.length);
1 === t.length && (i = 1);
for (let s = 0; s < t.length; s++) {
this.items[s] = `${this.imagePrefix}${t[s]}`;
this.items[e + s] = `${this.imagePrefix}${t[s]}`;
s + i < e + s && (this.items[s + i] = this.getRollerController().getRandomGameItem(this.items.length)[s]);
if (this.node.children[s].getComponent(n.default)) {
this.node.children[s].getComponent(n.default).serverID = t[s];
this.listSymbolWild.indexOf(t[s]) > -1 && (this.isExpandWild = !0);
this.symbolBonus == t[s] && (this.isTensionBonus = !0);
this.symbolFree == t[s] && (this.isTensionFree = !0);
}
}
}
}
manualInit() {
let t = this.height, e = -t / 2 + t / this.numRow / 2;
for (let i = 0; i < this.items.length; i++) {
let s = cc.instantiate(this.itemPrefab);
s.x = 0;
s.y = e;
s.getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[i]);
s.scale = this.getRollerController().sizeScaleOrigin;
if (i < 3 && s.getComponent(n.default)) {
s.getComponent(n.default).serverID = parseInt(this.items[i].split("_")[1]);
s.getComponent(n.default).id = 0 === i ? 2 : 2 === i ? 0 : i;
s.getComponent(n.default).showAnimItem(30, !1, !0);
}
e += t / this.numRow;
this.node.addChild(s);
this._listNodeItem.push(s);
}
this.totalHeight = t / this.numRow * this.items.length;
}
update(t) {
if (this.isStop) if (this.isRoll) {
if (this.getRollerController().gameController && this.getRollerController().gameController.expWild && this.getRollerController().gameController.expWild[this.columnID - 1] && this.getRollerController().gameController.expWild[this.columnID - 1].active) {
let e = this.getRollerController().gameController.expWild[this.columnID - 1];
e.y -= this.speed * t * this.velocity;
if (e.y <= (-this.totalHeight + this.height) / 2) {
e.active = !1;
e.y = this.posYWild;
}
}
if (this.node.y <= (-this.totalHeight + this.height) / 2 && !this.isChange2 && !this.isStopImmediately) {
this.isChange2 = !0;
for (let t = 0; t < this.items.length; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
this.speed = this.maxSpeed - .2 * this.maxSpeed;
}
if (this.isStopImmediately) {
this.isChange2 = !0;
this.speed = this.maxSpeed - .2 * this.maxSpeed;
this.node.y = 0;
this.velocity = 2 * this.velocity;
this.isStopImmediately = !1;
for (let t = 0; t < this.items.length; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemBlurSpriteFrame(this.items[t]);
}
this.speed -= this.deltaSpeed;
this.speed <= this.stopSpeed && (this.speed = this.stopSpeed);
this.node.y -= this.speed * t * this.velocity;
if (this.node.y <= -this.totalHeight + this.height && this.speed > this.stopSpeed) this.node.y = 0; else if (this.node.y <= -this.totalHeight + this.height - 50 && this.speed <= this.stopSpeed) {
this.node.y = -this.distanceY;
this.isRoll = !1;
for (let t = 0; t < this.items.length; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
}
} else {
if (this.getRollerController().gameController && this.getRollerController().gameController.expWild && this.getRollerController().gameController.expWild[this.columnID - 1]) {
this.getRollerController().gameController.expWild[this.columnID - 1].y = this.posYWild;
this.getRollerController().gameController.expWild[this.columnID - 1].active = !1;
}
0 !== this.tempStopSpeed && (this.stopSpeed = this.tempStopSpeed);
this.velocity = 1;
this.speed = 0;
this.isStop = !1;
this.isStopImmediately = !1;
this.isClicked = !1;
this.isRoll = !1;
this.isChange1 = !1;
this.isChange2 = !1;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.moveTo(.12, cc.v2(this.node.x, 0)), cc.callFunc(() => {
this.node.y = 0;
this.isTensionRolling && (this.isTensionFree || this.isTensionBonus) ? r.default.getInstance().enableSound && a.default.getInstance().playEffect(this.pathStopRollTension) : this.isMuteColumnDone || r.default.getInstance().enableSound && a.default.getInstance().playEffect(this.pathStopRoll);
null != this.onRollDone && this.onRollDone();
this.isTensionRolling = !1;
this.isTensionBonus = !1;
this.isTensionFree = !1;
})));
} else if (this.isRoll) {
this.speed += this.deltaSpeed;
this.speed >= this.maxSpeed && (this.speed = this.maxSpeed);
this.node.y -= this.speed * t * this.velocity;
if (this.node.y <= -this.totalHeight + this.height) {
this.node.y = 0;
if (!this.isChange1) {
this.isChange1 = !0;
for (let t = 0; t < this.items.length; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemBlurSpriteFrame(this.items[t]);
}
}
if (this.getRollerController().isSyncRoll) for (let t = 0; t < this.items.length; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemBlurSpriteFrame(this.items[t]);
let e = this.getRollerController().gameController;
if (e && e.expWild && e.expWild[this.columnID - 1] && e.expWild[this.columnID - 1].active) {
e.expWild[this.columnID - 1].y -= this.speed * t * this.velocity;
if (e.expWild[this.columnID - 1].y <= (-this.totalHeight + this.height) / 2) {
e.expWild[this.columnID - 1].active = !1;
e.expWild[this.columnID - 1].y = this.posYWild;
}
}
}
}
stop(t = !1) {
if (!this.isClicked || !this.isTensionRolling) {
this.isClicked = t;
this.isStop = !0;
this.isStopImmediately = t;
this.isMuteColumnDone = !1;
}
}
setItems(t, e = "1_", i = !1) {
this.items = t;
this.imagePrefix = e;
for (let t = 0; t < this._listNodeItem.length; t++) {
let i = this._listNodeItem[t];
i.getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
if (i.getComponent(n.default) && i.getComponent(n.default).id < 3) {
i.getComponent(n.default).serverID = parseInt(this.items[t].split("_")[1]);
i.getComponent(n.default).isStopColumn = !0;
i.getComponent(n.default).showAnimItem(1.5, !1, !1, e);
}
}
}
setScaleAllItem(t) {
for (let e = 0; e < this._listNodeItem.length; e++) this._listNodeItem[e].setScale(t);
}
setResultFreeSpin(t) {
this.imagePrefix = t;
for (let t = 0; t < this._listNodeItem.length; t++) {
this.items[t] = this.imagePrefix + this.items[t].split("_")[1];
this._listNodeItem[t].getComponent(cc.Sprite).spriteFrame = this.getRollerController().getItemSpriteFrame(this.items[t]);
if (this._listNodeItem[t].getComponent(n.default) && this._listNodeItem[t].getComponent(n.default).id < 3) {
this._listNodeItem[t].getComponent(n.default).serverID = parseInt(this.items[t].split("_")[1]);
this._listNodeItem[t].getComponent(n.default).isStopColumn = !0;
this._listNodeItem[t].getComponent(n.default).hideAnimItem();
}
}
}
tensionRoll(t) {
this.isTensionRolling = !0;
this.velocity = 1.8 * this.velocity;
this.node.runAction(cc.sequence(cc.delayTime(t - 2), cc.callFunc(() => {
a.default.getInstance().playEffect(this.pathRollTension);
})));
this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(() => {
this.isStop = !0;
})));
}
};
s([ l(cc.Prefab) ], h.prototype, "itemPrefab", void 0);
s([ l(cc.Integer) ], h.prototype, "height", void 0);
s([ l(cc.Integer) ], h.prototype, "numRow", void 0);
s([ l(cc.Integer) ], h.prototype, "maxSpeed", void 0);
s([ l(cc.Integer) ], h.prototype, "stopSpeed", void 0);
s([ l([ cc.Integer ]) ], h.prototype, "listSymbolWild", void 0);
s([ l(cc.String) ], h.prototype, "pathStopRoll", void 0);
s([ l(cc.String) ], h.prototype, "pathRollTension", void 0);
s([ l(cc.String) ], h.prototype, "pathStopRollTension", void 0);
s([ l(cc.Integer) ], h.prototype, "distanceY", void 0);
s([ l(cc.Integer) ], h.prototype, "symbolBonus", void 0);
s([ l(cc.Integer) ], h.prototype, "symbolFree", void 0);
h = s([ c ], h);
i.default = h;
cc._RF.pop();
}, {
"../game/GameConfigManager": "GameConfigManager",
"../game/MusicPlayer": "MusicPlayer",
"./ItemController": "ItemController",
"./RollerController": "RollerController"
} ],
"Common.AudioManager": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "dd656ny0zpC6q+M7t8zKmpW", "Common.AudioManager");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const n = t("./BroadcastReceiver"), r = t("./SPUtils"), {ccclass: a, property: c} = cc._decorator;
let l = s = class extends cc.Component {
constructor() {
super(...arguments);
this.audioSource = null;
this.isOnMusic = !0;
this.isOnSound = !0;
}
static getInstance() {
if (null == this.instance) {
let t = new cc.Node("AudioManager");
this.instance = t.addComponent(s);
this.instance.audioSource = t.addComponent(cc.AudioSource);
cc.game.addPersistRootNode(t);
}
return this.instance;
}
start() {
n.default.register(n.default.ON_AUDIO_CHANGED, () => {
this.isOnMusic = r.default.getMusicVolumn() > 0;
this.isOnSound = r.default.getSoundVolumn() > 0;
this.audioSource.mute = !this.isOnMusic;
this.isOnSound || cc.audioEngine.stopAllEffects();
}, this);
this.isOnMusic = r.default.getMusicVolumn() > 0;
this.isOnSound = r.default.getSoundVolumn() > 0;
this.audioSource.mute = !this.isOnMusic;
}
playEffect(t, e = 1) {
null != t ? this.isOnSound && e > 0 && cc.audioEngine.play(t, !1, e) : cc.warn("AudioManager playEffect audioClip is null");
}
playBackgroundMusic(t, e = !0, i = 1) {
console.log("play background music");
if (null != t) {
this.audioSource.stop();
this.audioSource.clip = t;
this.audioSource.volume = i;
this.audioSource.mute = !this.isOnMusic;
this.audioSource.loop = e;
this.audioSource.play();
} else {
cc.warn("AudioManager playBackgroundMusic audioClip is null");
console.log("AudioManager playBackgroundMusic audioClip is null");
}
}
stopBackgroundMusic() {
this.audioSource.stop();
}
};
l.instance = null;
l = s = o([ a ], l);
i.default = l;
cc._RF.pop();
}, {
"./BroadcastReceiver": "BroadcastReceiver",
"./SPUtils": "SPUtils"
} ],
"Common.CPLabel": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "02c17acVFhNtJiW3VazAvsH", "Common.CPLabel");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./VersionConfig"), {ccclass: n, property: r, requireComponent: a} = cc._decorator;
let c = class extends cc.Component {
constructor() {
super(...arguments);
this.strR99 = "";
}
onLoad() {
o.default.CPName;
this.getComponent(cc.Label).string = this.strR99;
}
};
s([ r ], c.prototype, "strR99", void 0);
c = s([ n, a(cc.Label) ], c);
i.default = c;
cc._RF.pop();
}, {
"./VersionConfig": "VersionConfig"
} ],
"Common.CPSprite": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1c8f7r8zA1PcpxwyriIc3li", "Common.CPSprite");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./VersionConfig"), {ccclass: n, property: r, requireComponent: a} = cc._decorator;
let c = class extends cc.Component {
constructor() {
super(...arguments);
this.sprR99 = null;
this.sprVip52 = null;
this.sprXXeng = null;
this.sprManVip = null;
}
onLoad() {
o.default.CPName;
this.getComponent(cc.Sprite).spriteFrame = this.sprR99;
}
};
s([ r(cc.SpriteFrame) ], c.prototype, "sprR99", void 0);
s([ r(cc.SpriteFrame) ], c.prototype, "sprVip52", void 0);
s([ r(cc.SpriteFrame) ], c.prototype, "sprXXeng", void 0);
s([ r(cc.SpriteFrame) ], c.prototype, "sprManVip", void 0);
c = s([ n, a(cc.Sprite) ], c);
i.default = c;
cc._RF.pop();
}, {
"./VersionConfig": "VersionConfig"
} ],
Configs: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a8b148ShhNECLRCMfJf61sO", "Configs");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Http"), o = t("./VersionConfig");
var n;
(function(t) {
class e {
static clear() {
this.UserId = 0;
this.Nickname = "";
this.Avatar = "";
this.Coin = 0;
this.IsLogin = !1;
this.AccessToken = "";
this.SessionKey = "";
this.CreateTime = "";
this.Birthday = "";
this.IpAddress = "";
this.VipPoint = 0;
this.VipPointSave = 0;
this.CoinFish = 0;
this.UserIdFish = 0;
this.UsernameFish = "";
this.PasswordFish = "";
this.BitcoinToken = "";
}
static getVipPointName() {
for (let e = this.VipPoints.length - 1; e >= 0; e--) if (t.Login.VipPoint > this.VipPoints[e]) return this.VipPointsName[e + 1];
return this.VipPointsName[0];
}
static getVipPointNextLevel() {
for (let e = this.VipPoints.length - 1; e >= 0; e--) if (t.Login.VipPoint > this.VipPoints[e]) return e == this.VipPoints.length - 1 ? this.VipPoints[e] : this.VipPoints[e + 1];
return this.VipPoints[0];
}
static getVipPointIndex() {
for (let e = this.VipPoints.length - 1; e >= 0; e--) if (t.Login.VipPoint > this.VipPoints[e]) return e;
return 0;
}
}
e.UserId = 0;
e.Username = "";
e.Password = "";
e.Nickname = "";
e.Avatar = "";
e.Coin = 0;
e.IsLogin = !1;
e.AccessToken = "";
e.SessionKey = "";
e.LuckyWheel = 0;
e.CreateTime = "";
e.Birthday = "";
e.IpAddress = "";
e.VipPoint = 0;
e.VipPointSave = 0;
e.MobileSecured = !1;
e.AppSecured = !1;
e.BanTransfer = !1;
e.CoinFish = 0;
e.UserIdFish = 0;
e.UsernameFish = "";
e.PasswordFish = "";
e.FishConfigs = null;
e.BitcoinToken = "";
e.VipPoints = [ 80, 800, 4500, 8600, 12e3, 5e4, 1e6, 2e6 ];
e.VipPointsName = [ "Đá", "Đồng", "Bạc", "Vàng", "BK1", "BK2", "KC1", "KC2", "KC3" ];
t.Login = e;
class i {
static getRoomMember() {}
static getServerConfig() {
s.default.get(t.App.API, {
c: 130
}, (t, e) => {
if (null == t) {
i.SERVER_CONFIG.ratioNapTheVTT = e.ratio_nap_the_vt;
i.SERVER_CONFIG.ratioNapTheVNP = e.ratio_nap_the_vn;
i.SERVER_CONFIG.ratioNapTheVMS = e.ratio_nap_the_mb;
i.SERVER_CONFIG.ratioTransfer = e.ratio_chuyen;
i.SERVER_CONFIG.ratioTransferDL = e.ratio_transfer_dl_1;
i.SERVER_CONFIG.ratioRutThe = e.ratio_mua_the;
i.BILLING_CONF = e;
}
});
}
static getPlatformName() {
return "FISH";
}
static getLinkFanpage() {
o.default.CPName;
return "https://www.facebook.com/sunwinclub";
}
static getLinkGrFacebook() {
o.default.CPName;
return "https://www.facebook.com/sunwinclub";
}
static getLinkTelegram() {
o.default.CPName;
return "https://t.me/CSKH_sun9.club";
}
static getLinkTelegramGroup() {
o.default.CPName;
return "@cskhyou88";
}
static setSecretCode(e) {
t.App.secretCode = e;
}
static getDomain(t) {
return cc.sys.localStorage.getItem(t);
}
static init() {
switch (o.default.ENV) {
case o.default.ENV_LOCAL:
this.USE_WSS = !1;
this.DOMAIN = o.default.DOMAIN_LOCAL + "/";
this.API = "http://" + o.default.DOMAIN_LOCAL + ":8081/api";
this.MONEY_TYPE = 1;
this.LINK_DOWNLOAD = "http://" + o.default.DOMAIN_LOCAL + "/landing";
this.LINK_EVENT = "http://" + o.default.DOMAIN_LOCAL + "event";
this.LINK_SUPPORT = "" + o.default.DOMAIN_LOCAL;
this.HOST_MINIGAME.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_MINIGAME.port = 1644;
this.HOST_TAI_XIU_MINI2.host = "overunder." + o.default.DOMAIN_LOCAL;
this.HOST_SLOT.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_SLOT.port = 1844;
this.HOST_TLMN.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_TLMN.port = 2144;
this.HOST_SAM.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_SAM.port = 1944;
this.HOST_XOCDIA.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_XOCDIA.port = 2344;
this.HOST_BACAY.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_BACAY.port = 1044;
this.HOST_BAICAO.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_BAICAO.port = 1144;
this.HOST_POKER.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_POKER.port = 1744;
this.HOST_XIDACH.host = "wxizach." + o.default.DOMAIN_LOCAL;
this.HOST_XIDACH.port = 443;
this.HOST_BINH.host = o.default.DOMAIN_LOCAL + "";
this.HOST_BINH.port = 1244;
this.HOST_LIENG.host = "wlieng." + o.default.DOMAIN_LOCAL;
this.HOST_LIENG.port = 443;
this.HOST_SHOOT_FISH.host = "45.76.178.154";
this.HOST_SHOOT_FISH.port = 2083;
this.HOST_BAU_CUA_TO2.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_BAU_CUA_TO2.port = 3644;
this.HOST_TAIXIU.host = "" + o.default.DOMAIN_LOCAL;
this.HOST_TAIXIU.port = 2044;
this.HOST_TAIXIU_MD5.host = `${o.default.DOMAIN_LOCAL}`;
this.HOST_TAIXIU_MD5.port = 12044;
break;

case o.default.ENV_DEV:
this.USE_WSS = !0;
this.MONEY_TYPE = 1;
if (cc.sys.localStorage.getItem("MINIGAME_CONTEXT")) {
o.default.DOMAIN_DEV = this.getDomain("DOMAIN_GAME_DEV");
this.HOST_MINIGAME.host = this.getDomain("MINIGAME_CONTEXT");
this.HOST_TAI_XIU_MINI2.host = this.getDomain("HOST_TAI_XIU_MINI2");
this.HOST_SLOT.host = this.getDomain("SLOT_CONTEXT");
this.HOST_TLMN.host = this.getDomain("TLMN_CONTEXT");
this.HOST_SHOOT_FISH.host = this.getDomain("SHOOT_FISH_CONTEXT");
this.HOST_SAM.host = this.getDomain("SAM_CONTEXT");
this.HOST_XOCDIA.host = this.getDomain("XOCDIA_CONTEXT");
this.HOST_BACAY.host = this.getDomain("BACAY_CONTEXT");
this.HOST_BAICAO.host = this.getDomain("BAICAO_CONTEXT");
this.HOST_POKER.host = this.getDomain("POKER_CONTEXT");
this.HOST_BINH.host = this.getDomain("BINH_CONTEXT");
this.HOST_BAU_CUA_TO2.host = this.getDomain("BAU_CUA_TO2_CONTEXT");
this.HOST_TAIXIU.host = this.getDomain("TAIXIU_CONTEXT");
this.HOST_TAIXIU_MD5.host = this.getDomain("TAIXIUMD5_CONTEXT");
this.API = `https://${o.default.DOMAIN_DEV}/api-portal`;
break;
}
break;

case o.default.ENV_PROD:
this.USE_WSS = !0;
this.DOMAIN = `${o.default.DOMAIN_PRO}`;
this.MONEY_TYPE = 1;
this.HOST_MINIGAME.host = this.getDomain("MINIGAME_CONTEXT");
this.HOST_TAI_XIU_MINI2.host = this.getDomain("HOST_TAI_XIU_MINI2");
this.HOST_SLOT.host = this.getDomain("SLOT_CONTEXT");
this.HOST_TLMN.host = this.getDomain("TLMN_CONTEXT");
this.HOST_SHOOT_FISH.host = this.getDomain("SHOOT_FISH_CONTEXT");
this.HOST_SAM.host = this.getDomain("SAM_CONTEXT");
this.HOST_XOCDIA.host = this.getDomain("XOCDIA_CONTEXT");
this.HOST_BACAY.host = this.getDomain("BACAY_CONTEXT");
this.HOST_BAICAO.host = this.getDomain("BAICAO_CONTEXT");
this.HOST_POKER.host = this.getDomain("POKER_CONTEXT");
this.HOST_BINH.host = this.getDomain("BINH_CONTEXT");
this.HOST_BAU_CUA_TO2.host = this.getDomain("BAUCUA_CONTEXT");
this.HOST_TAIXIU.host = this.getDomain("TAIXIU_CONTEXT");
this.HOST_TAIXIU_MD5.host = this.getDomain("TAIXIUMD5_CONTEXT");
this.API = `https://${o.default.DOMAIN_PRO}/api-portal`;
break;

default:
this.USE_WSS = !0;
this.DOMAIN = "https://" + o.default.DOMAIN_DEV + "/";
this.API = "https://" + o.default.DOMAIN_DEV + "/api";
this.MONEY_TYPE = 1;
this.LINK_DOWNLOAD = "https://" + o.default.DOMAIN_DEV;
this.LINK_EVENT = "https://" + o.default.DOMAIN_DEV + "/event";
this.LINK_SUPPORT = "https://www.comm100.com/";
this.HOST_MINIGAME.host = "wmini." + o.default.DOMAIN_DEV;
this.HOST_TAI_XIU_MINI2.host = "overunder." + o.default.DOMAIN_DEV;
this.HOST_SLOT.host = "gomsu." + o.default.DOMAIN_DEV;
this.HOST_TLMN.host = "wtlmn." + o.default.DOMAIN_DEV;
this.HOST_SHOOT_FISH.host = "wbanca." + o.default.DOMAIN_DEV;
this.HOST_SAM.host = "wsam." + o.default.DOMAIN_DEV;
this.HOST_XOCDIA.host = "quanly." + o.default.DOMAIN_DEV;
this.HOST_BACAY.host = "wbacay." + o.default.DOMAIN_DEV;
this.HOST_BAICAO.host = "wbaicao." + o.default.DOMAIN_DEV;
this.HOST_POKER.host = "wpoker." + o.default.DOMAIN_DEV;
this.HOST_XIDACH.host = "wxizach." + o.default.DOMAIN_DEV;
this.HOST_BINH.host = "wbinh." + o.default.DOMAIN_DEV;
this.HOST_LIENG.host = "wlieng." + o.default.DOMAIN_DEV;
this.HOST_BAU_CUA_TO2.host = "wbaucuato2." + o.default.DOMAIN_DEV;
this.HOST_TAIXIU.host = "taixiu." + o.default.DOMAIN_DEV;
this.HOST_TAIXIU_MD5.host = `batrang.${o.default.DOMAIN_DEV}`;
this.LINK_GROUP = "https://www.facebook.com/groups/bao99.vip";
}
}
}
i.HOT_UPDATE_URL = "https://raw.githubusercontent.com/chaunhuanphat/dev-tito/master/";
i.BUNDLE_URL = "bon5.win/remote-assets";
i.DOMAIN = "https://demo.eloras.icu";
i.API = "https://eloras.icu/api";
i.MONEY_TYPE = 1;
i.LINK_DOWNLOAD = "https://eloras.icu/download";
i.LINK_EVENT = "https://eloras.icu/event";
i.LINK_SUPPORT = "https://eloras.icu";
i.USE_WSS = !0;
i.LINK_GROUP = "";
i.BANCA = "https://banca.honghunghoi.net";
i.SICBO = "https://sicbo.honghunghoi.net";
i.XENG777 = "https://xeng777.honghunghoi.net";
i.LINK_BOT_OTP = "https://t.me/sunsunotp_bot";
i.MAP_DAILY = [];
i.BUNDLE_CONFIG = {
bundleVers: "",
jsList: []
};
i.HOST_MINIGAME = {
host: "wmini.eloras.icu",
port: 443
};
i.HOST_BAU_CUA_TO2 = {
host: "wbaucuato2.eloras.icu",
port: 443
};
i.HOST_TAIXIU = {
host: "wbaucuato2.eloras.icu",
port: 443
};
i.HOST_TAI_XIU_MINI2 = {
host: "overunder.eloras.icu",
port: 443
};
i.HOST_SLOT = {
host: "wslot.eloras.icu",
port: 443
};
i.HOST_TLMN = {
host: "wltmn.eloras.icu",
port: 443
};
i.HOST_SHOOT_FISH = {
host: "wbanca.eloras.icu",
port: 443
};
i.HOST_SAM = {
host: "wsam.eloras.icu",
port: 443
};
i.HOST_XOCDIA = {
host: "wxocdia.eloras.icu",
port: 443
};
i.HOST_BACAY = {
host: "wbacay.eloras.icu",
port: 443
};
i.HOST_BAICAO = {
host: "wbaicao.eloras.icu",
port: 443
};
i.HOST_POKER = {
host: "wpoker.eloras.icu",
port: 443
};
i.HOST_XIDACH = {
host: "wpoker.eloras.icu",
port: 443
};
i.HOST_BINH = {
host: "wpoker.eloras.icu",
port: 443
};
i.HOST_LIENG = {
host: "wpoker.eloras.icu",
port: 443
};
i.HOST_TAIXIU_MD5 = {
host: "wbaucuato2.eloras.icu",
port: 12044
};
i.SERVER_CONFIG = {
ratioNapTheVTT: 1,
ratioNapTheVNP: 1,
ratioNapTheVMS: 1,
ratioNapMomo: 1.2,
ratioTransfer: .98,
ratioTransferDL: 1,
listTenNhaMang: [ "Viettel", "Vinaphone", "Mobifone", "Vietnamobile" ],
listIdNhaMang: [ 0, 1, 2, 3 ],
listMenhGiaNapThe: [ 1e4, 2e4, 3e4, 5e4, 1e5, 2e5, 3e5, 5e5 ],
ratioRutThe: 1.2
};
i.CASHOUT_CARD_CONFIG = {
listTenNhaMang: [ "Viettel", "Vinaphone", "Mobifone" ],
listIdNhaMang: [ "VT", "VN", "MB" ],
listMenhGiaNapThe: [ 1e4, 2e4, 3e4, 5e4, 1e5, 2e5, 5e5 ],
listQuantity: [ "1", "2", "3" ]
};
i.listmember = [];
i.secretCode = "111111";
t.App = i;
class n {
static getGameName(t) {
switch (t) {
case this.MiniPoker:
return "MiniPoker";

case this.TaiXiu:
return "Tài Xỉu";

case this.BauCua:
return "Bầu Cua";

case this.CaoThap:
return "Trên Dưới";

case this.Slot3x3:
return "Rượu Whisky";

case this.VQMM:
return "VQMM";

case this.Sam:
return "Sâm";

case this.MauBinh:
return "Mậu Binh";

case this.TLMN:
return "TLMN";

case this.TaLa:
return "Tá Lả";

case this.Lieng:
return "Liêng";

case this.XiTo:
return "Xì Tố";

case this.XocXoc:
return "Xóc Đĩa";

case this.BaiCao:
return "Bài Cào";

case this.Poker:
return "Poker";

case this.Bentley:
return "Thần Tài";

case this.RangeRover:
return "Avengers";

case this.RollsRoyce:
return "Rolls Royce";

case this.BauCuaTo2:
return "Bầu Cua";

case this.TaiXiuMD5:
return "Tài Xỉu MD5";

case this.CowBoy:
return "Cao Bồi";

case this.FastAndFurious:
return "Fast And Furious";

case this.LadyNight:
return "Lady Night";

case this.BongLaiCac:
return "Bồng Lai Các";

case this.SexyDance:
return "Sexy Dance";

case this.LienMinh:
return "Liên Minh Huyền Thoại";

case this.BigCityBoy:
return "Big City Boy";

case this.MACAO:
return "Thần Bài MaCao";

case this.Halloween:
return "Halloween";
}
return "Thần Tài";
}
}
n.MiniPoker = 1;
n.TaiXiu = 2;
n.BauCua = 3;
n.CaoThap = 4;
n.Slot3x3 = 5;
n.VQMM = 7;
n.Sam = 8;
n.BaCay = 9;
n.MauBinh = 10;
n.TLMN = 11;
n.TaLa = 12;
n.Lieng = 13;
n.XiTo = 14;
n.XocXoc = 15;
n.BaiCao = 16;
n.Poker = 17;
n.Bentley = 19;
n.RangeRover = 20;
n.MayBach = 21;
n.RollsRoyce = 22;
n.BauCuaTo2 = 23;
n.TaiXiuMD5 = 2e3;
n.CowBoy = 170;
n.FastAndFurious = 180;
n.LadyNight = 120;
n.BongLaiCac = 200;
n.SexyDance = 230;
n.LienMinh = 110;
n.BigCityBoy = 190;
n.Halloween = 210;
n.MACAO = 220;
t.GameId = n;
})(n || (n = {}));
i.default = n;
cc._RF.pop();
}, {
"./Http": "Http",
"./VersionConfig": "VersionConfig"
} ],
ConfirmDialog: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d2ba1FAR7NFVK4X4KMOiW6z", "ConfirmDialog");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./Dialog"), {ccclass: n, property: r} = cc._decorator;
let a = class extends o.default {
constructor() {
super(...arguments);
this.lblMessage = null;
this.onDismissed = null;
this.onConfirmClicked = null;
this.isClickdConfirm = !1;
}
show1(t) {
this.show4(t);
}
show2(t, e) {
this.show4(t, null, null, e);
}
show3(t, e, i) {
this.show4(t, null, e, i);
}
show4(t, e, i, s) {
this.isClickdConfirm = !1;
this.onDismissed = s;
this.lblMessage.string = t;
super.show();
}
actConfirm() {
this.isClickdConfirm = !0;
this.dismiss();
}
_onShowed() {
o.default.prototype._onShowed.call(this);
}
_onDismissed() {
o.default.prototype._onDismissed.call(this);
"function" == typeof this.onDismissed && this.onDismissed(this.isClickdConfirm);
}
};
s([ r(cc.Label) ], a.prototype, "lblMessage", void 0);
a = s([ n ], a);
i.default = a;
cc._RF.pop();
}, {
"./Dialog": "Dialog"
} ],
"CustomUI.Dropdown": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b81d3z5VwhM85GAeyQWdMCP", "CustomUI.Dropdown");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n, requireComponent: r} = cc._decorator;
let a = class extends cc.Component {
constructor() {
super(...arguments);
this.label = null;
this.template = null;
this.options = [];
this.value = 0;
this.blocker = null;
this.dropdownList = null;
this.animating = !1;
}
onLoad() {
this.template.active = !1;
let t = this.findParent();
this.node.on("click", () => {
if (this.animating) return;
this.animating = !0;
this.blocker = this.addBlocker(t);
this.dropdownList = cc.instantiate(this.template);
this.dropdownList.getComponent(cc.Widget).enabled = !1;
this.dropdownList.parent = this.blocker;
this.dropdownList.name = "dropdownList";
let e = this.template.convertToWorldSpaceAR(this.template.position);
this.dropdownList.position = this.dropdownList.convertToNodeSpaceAR(e);
this.dropdownList.active = !0;
this.dropdownList.scaleY = 0;
this.dropdownList.opacity = 0;
this.dropdownList.stopAllActions();
this.dropdownList.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()), cc.fadeIn(.15)), cc.callFunc(() => {
this.animating = !1;
})));
let i = this.dropdownList.getComponent(cc.ScrollView).content, s = i.children[0];
s.active = !1;
for (let t = 0; t < this.options.length; t++) {
let e = cc.instantiate(s);
e.parent = s.parent;
e.active = !0;
e.getComponentInChildren(cc.Label).string = this.options[t];
e.getComponentInChildren(cc.Sprite).node.active = t == this.value;
e.on("click", () => {
this.setValue(t);
null != this.onValueChanged && this.onValueChanged(t);
this.dismiss();
});
if (t == this.value) {
let e = i.position;
e.y = s.height * t - s.height / 2;
i.position = e;
}
}
});
}
onEnable() {
null != this.blocker && this.blocker.destroy();
}
onDestroy() {
null != this.blocker && this.blocker.destroy();
}
addBlocker(t) {
let e = new cc.Node("blocker");
e.parent = t;
e.addComponent(cc.Button);
e.zIndex = 3e4;
let i = e.addComponent(cc.Widget);
i.isAlignTop = !0;
i.top = 0;
i.isAlignBottom = !0;
i.bottom = 0;
i.isAlignLeft = !0;
i.left = 0;
i.isAlignRight = !0;
i.right = 0;
e.on("click", () => {
this.dismiss();
});
cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, () => {
this.onDestroy();
});
return e;
}
findParent(t = null) {
null == t && (t = this.node);
return null == t.parent || t.parent instanceof cc.Scene ? t : this.findParent(t.parent);
}
dismiss() {
if (!this.animating) {
this.animating = !0;
this.dropdownList.stopAllActions();
this.dropdownList.runAction(cc.sequence(cc.spawn(cc.scaleTo(.3, 1, 0).easing(cc.easeBackIn()), cc.sequence(cc.delayTime(.15), cc.fadeOut(.15))), cc.callFunc(() => {
this.blocker.destroy();
this.blocker = null;
this.animating = !1;
})));
}
}
setOptions(t) {
this.options = t;
}
setValue(t) {
this.value = t;
this.label.string = this.options[this.value];
}
getValue() {
return this.value;
}
getLabelString() {
return this.label.string;
}
setOnValueChange(t) {
this.onValueChanged = t;
}
};
s([ n(cc.Label) ], a.prototype, "label", void 0);
s([ n(cc.Node) ], a.prototype, "template", void 0);
a = s([ o, r(cc.Button) ], a);
i.default = a;
cc._RF.pop();
}, {} ],
"CustomUI.PageView": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ceabdBtOklPuoiWtcN+Swi6", "CustomUI.PageView");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.autoInit = !0;
this.infinity = !0;
this.cancelInnerEvents = !0;
this.spacing = 30;
this.moveOffset = 30;
this.content = null;
this.items = null;
this.pages = null;
this.indicator = null;
this.index = 0;
this.pageCount = 0;
this.left = null;
this.center = null;
this.right = null;
this.pageItems = [];
this.touchMoved = !1;
this.onTouchStart = null;
this.onTouchMove = null;
this.onTouchEndOrCancel = null;
this.onPageChanged = null;
}
onLoad() {
cc.PageView;
this.node.on(cc.Node.EventType.TOUCH_START, () => {
this.touchMoved = !1;
null != this.onTouchStart && this.onTouchStart();
}, this.node, !0);
this.node.on(cc.Node.EventType.TOUCH_MOVE, t => {
if (this.cancelInnerEvents) {
if (this.touchMoved) {
let e = this.items.position;
e.x += t.getDeltaX();
let i = this.content.width + this.spacing;
this.infinity || (this.items.position.x > 0 && 0 == this.index ? i = this.moveOffset : this.items.position.x < 0 && this.index == this.pageCount - 1 && (i = this.moveOffset));
Math.abs(e.x) > i && (e.x = e.x > 0 ? i : -i);
this.items.position = e;
null != this.onTouchMove && this.onTouchMove();
}
if (t.touch.getLocation().sub(t.touch.getStartLocation()).mag() > 7 && !this.touchMoved && t.target != this.node) {
console.log(t.target);
var e = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
e.type = cc.Node.EventType.TOUCH_CANCEL;
e.touch = t.touch;
t.target.dispatchEvent(e);
this.touchMoved = !0;
}
}
}, this.node, !0);
let t = () => {
if (this.touchMoved) {
if (Math.abs(this.items.position.x) > this.content.width / 4) {
let t = this.index, e = cc.Vec2.ZERO;
if (this.infinity) if (this.items.position.x < 0) {
++t > this.pageCount - 1 && (t = 0);
e = cc.v2(-this.content.width - this.spacing, 0);
} else {
--t < 0 && (t = this.pageCount - 1);
e = cc.v2(this.content.width + this.spacing, 0);
} else {
this.items.position.x < 0 && t < this.pageItems.length - 1 ? t++ : this.items.position.x > 0 && t >= 1 && t--;
e = this.index > t ? cc.v2(this.content.width + this.spacing, 0) : cc.v2(-this.content.width - this.spacing, 0);
}
if (this.index != t) {
this.items.stopAllActions();
this.items.runAction(cc.sequence(cc.moveTo((this.content.width + this.spacing - Math.abs(this.items.position.x)) / (this.content.width + this.spacing) * .5, e), cc.callFunc(() => {
this.setPageIndex(t);
null != this.onPageChanged && this.onPageChanged();
})));
} else {
this.items.stopAllActions();
this.items.runAction(cc.sequence(cc.moveTo(.3, cc.Vec2.ZERO), cc.callFunc(() => {})));
}
} else {
this.items.stopAllActions();
this.items.runAction(cc.sequence(cc.moveTo(.3, cc.Vec2.ZERO), cc.callFunc(() => {})));
}
null != this.onTouchEndOrCancel && this.onTouchEndOrCancel();
}
};
this.node.on(cc.Node.EventType.TOUCH_END, t, this.node, !0);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, t, this.node, !0);
for (let t = 0; t < this.pages.childrenCount; t++) this.pages.children[t].active = !1;
this.left = new cc.Node();
this.left.parent = this.items;
this.left.position = cc.v2(-this.content.width - this.spacing, 0);
this.left.active = !0;
this.center = new cc.Node();
this.center.parent = this.items;
this.center.position = cc.v2(0, 0);
this.center.active = !0;
this.right = new cc.Node();
this.right.parent = this.items;
this.right.position = cc.v2(this.content.width + this.spacing, 0);
this.right.active = !0;
this.autoInit && this.init();
}
init() {
for (let t = 1; t < this.indicator.childrenCount; t++) {
this.indicator.children[t].destroy();
t--;
}
this.indicator.children[0].active = !1;
this.pageCount = this.pages.childrenCount;
console.log("PageCount: " + this.pageCount);
for (let t = 0; t < this.pages.childrenCount; t++) {
this.pageItems.push(this.pages.children[t]);
let e = cc.instantiate(this.indicator.children[0]);
e.parent = this.indicator;
e.active = !0;
}
this.setPageIndex(0);
}
scrollToIndex(t, e = !1) {
if (this.index != t) {
let i = cc.Vec2.ZERO;
i = this.infinity ? e ? cc.v2(this.content.width + this.spacing, 0) : cc.v2(-this.content.width - this.spacing, 0) : this.index > t ? cc.v2(this.content.width + this.spacing, 0) : cc.v2(-this.content.width - this.spacing, 0);
this.items.stopAllActions();
this.infinity || 1 == Math.abs(this.index - t) || Math.abs(this.index - t) != this.pageCount - 1 ? this.items.runAction(cc.sequence(cc.moveTo(.5, i), cc.callFunc(() => {
this.setPageIndex(t);
}))) : this.setPageIndex(t);
}
}
scrollToNextIndex() {
let t = this.index + 1;
t >= this.pageCount && (t = 0);
this.scrollToIndex(t, !1);
}
setPageIndex(t) {
this.index = t;
for (let t = 0; t < this.pageItems.length; t++) this.pageItems[t].active = !1;
if (this.infinity) {
let t = this.index - 1;
t < 0 && (t = this.pageCount - 1);
this.pageItems[t].active = !0;
this.pageItems[t].parent = this.left;
t = this.index;
this.pageItems[t].active = !0;
this.pageItems[t].parent = this.center;
(t = this.index + 1) > this.pageCount - 1 && (t = 0);
this.pageItems[t].active = !0;
this.pageItems[t].parent = this.right;
} else {
if (this.pageCount >= 3 && this.index >= 1) {
this.pageItems[this.index - 1].active = !0;
this.pageItems[this.index - 1].parent = this.left;
}
if (this.pageCount >= this.index + 1) {
this.pageItems[this.index].active = !0;
this.pageItems[this.index].parent = this.center;
}
if (this.pageCount >= 2 && this.index < this.pageCount - 1) {
this.pageItems[this.index + 1].active = !0;
this.pageItems[this.index + 1].parent = this.right;
}
}
this.items.position = cc.Vec2.ZERO;
this.updateIndicator();
}
updateIndicator() {
for (let t = 1; t < this.indicator.childrenCount; t++) {
let e = this.indicator.children[t];
e.parent = this.indicator;
let i = t - 1 == this.index;
e.getChildByName("active").active = i;
e.getChildByName("inactive").active = !i;
}
}
};
s([ n ], r.prototype, "autoInit", void 0);
s([ n ], r.prototype, "infinity", void 0);
s([ n ], r.prototype, "cancelInnerEvents", void 0);
s([ n ], r.prototype, "spacing", void 0);
s([ n ], r.prototype, "moveOffset", void 0);
s([ n(cc.Node) ], r.prototype, "content", void 0);
s([ n(cc.Node) ], r.prototype, "items", void 0);
s([ n(cc.Node) ], r.prototype, "pages", void 0);
s([ n(cc.Node) ], r.prototype, "indicator", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
Dialog: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "89938zvBc1CAaNyePwL3b4R", "Dialog");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./Common.AudioManager"), {ccclass: n, property: r} = cc._decorator;
let a = class extends cc.Component {
constructor() {
super(...arguments);
this.isAnimated = !0;
this.bg = null;
this.container = null;
this.showScale = 1.1;
this.startScale = .7;
this.endScale = 1;
this.soundClickSun = null;
}
show() {
o.default.getInstance().playEffect(this.soundClickSun);
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.node.active = !0;
this.isAnimated = !1;
this.bg.stopAllActions();
this.bg.opacity = 0;
this.bg.runAction(cc.fadeTo(.2, 128));
this.container.stopAllActions();
this.container.opacity = 0;
this.container.scale = this.startScale;
this.container.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, this.showScale), cc.fadeIn(.1).easing(cc.easeBackOut())), cc.scaleTo(.1, this.endScale), cc.callFunc(this._onShowed.bind(this))));
}
dismiss() {
o.default.getInstance().playEffect(this.soundClickSun);
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.isAnimated = !1;
this.bg.stopAllActions();
this.bg.opacity = 255;
this.bg.runAction(cc.fadeOut(.15));
this.container.stopAllActions();
this.container.opacity = 255;
this.container.scale = this.endScale;
this.container.runAction(cc.sequence(cc.scaleTo(.15, this.showScale), cc.spawn(cc.scaleTo(.15, this.startScale), cc.fadeOut(.1)), cc.callFunc(this._onDismissed.bind(this))));
}
_onShowed() {
this.isAnimated = !0;
}
_onDismissed() {
this.node.active = !1;
this.isAnimated = !0;
}
};
s([ r({
type: cc.AudioClip
}) ], a.prototype, "soundClickSun", void 0);
a = s([ n ], a);
i.default = a;
cc._RF.pop();
}, {
"./Common.AudioManager": "Common.AudioManager"
} ],
DropdownItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b6228P9oQ9IlaVaTiX2V4va", "DropdownItem");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n, requireComponent: r} = cc._decorator;
let a = class extends cc.Component {
constructor() {
super(...arguments);
this.checkMark = null;
this.label = null;
this.idx = -1;
}
};
s([ n(cc.Node) ], a.prototype, "checkMark", void 0);
s([ n(cc.Label) ], a.prototype, "label", void 0);
a = s([ o, r(cc.Button) ], a);
i.default = a;
cc._RF.pop();
}, {} ],
Dropdown: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ff7afpi+zdIq7WTcDLQtlsb", "Dropdown");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./DropdownItem"), n = t("./ListBankImg"), {ccclass: r, property: a, requireComponent: c} = cc._decorator;
let l = class extends cc.Component {
constructor() {
super(...arguments);
this.label = null;
this.itemTemplate = null;
this.lst = null;
this.value = 0;
this.data = [];
this.items = [];
}
start() {
this.itemTemplate.node.active = !1;
}
show() {
this.node.active = !0;
this.node.opacity = 0;
this.node.runAction(cc.fadeIn(.2));
for (var t = 0; t < this.items.length; t++) this.items[t].checkMark.active = this.items[t].idx == this.value;
}
setOptions(t = []) {
this.data = t;
for (var e = this.itemTemplate.node.parent.children, i = 0; i < e.length; i++) e[i].active = !1;
this.items = [];
for (i = 0; i < t.length; i++) {
var s = this.getItem();
s.idx = i;
s.label.string = t[i];
var o = !1;
this.lst ? this.lst.lstBank.forEach(e => {
if (e.text.trim().toLocaleUpperCase() === t[i].trim().toLocaleUpperCase()) {
s.node.getChildByName("bankImg").active = !0;
s.node.getChildByName("bankImg").getComponent(cc.Sprite).spriteFrame = e.spr;
o = !0;
}
}) : s.label.node.active = !0;
o || (s.label.node.active = !0);
s.checkMark.active = i == this.value;
this.items.push(s);
}
}
dismiss() {
var t = this;
this.node.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(() => {
t.node.active = !1;
})));
}
setOnValueChange(t) {
this.onValueChange = t;
}
setValue(t) {
if (t < this.data.length) {
this.value = t;
this.label.string = this.data[this.value];
} else this.value = 0;
}
getValue() {
return this.value;
}
getItem() {
for (var t = null, e = this.itemTemplate.node.parent.children, i = 0; i < e.length; i++) e[i].active || e[i] == this.itemTemplate.node || (t = e[i]);
if (null == t) {
(t = cc.instantiate(this.itemTemplate.node)).parent = this.itemTemplate.node.parent;
t.on("click", t => {
this.value = t.getComponent(o.default).idx;
this.label.string = this.data[this.value];
this.onValueChange && this.onValueChange(this.value);
this.dismiss();
}, this);
}
t.active = !0;
t.zIndex = this.getLastZIndex();
return t.getComponent(o.default);
}
getLastZIndex() {
for (var t = 0, e = this.itemTemplate.node.parent.children, i = 1; i < e.length; i++) e[i].active && t++;
return t;
}
};
s([ a(cc.Label) ], l.prototype, "label", void 0);
s([ a(o.default) ], l.prototype, "itemTemplate", void 0);
s([ a(n.default) ], l.prototype, "lst", void 0);
l = s([ r, c(cc.Button) ], l);
i.default = l;
cc._RF.pop();
}, {
"./DropdownItem": "DropdownItem",
"./ListBankImg": "ListBankImg"
} ],
EditBoxCustom: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b8f74A3IU1Dn5nOOHOXZt63", "EditBoxCustom");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./Utils"), {ccclass: n, property: r} = cc._decorator;
let a = class extends cc.EditBox {
onLoad() {
this.node.on("text-changed", this.callback, this);
}
callback(t) {
console.log("go here");
t.placeholderLabel.string = o.default.formatNumber(parseInt(t.string));
t.textLabel.string = o.default.formatNumber(parseInt(t.string));
t.string = o.default.formatNumber(parseInt(t.string));
}
actReset() {
this.string = "";
this.textLabel.string = "";
this.placeholderLabel.string = "";
}
getValueMoney() {
return o.default.stringToInt(this.textLabel.string.trim());
}
};
a = s([ n ], a);
i.default = a;
cc._RF.pop();
}, {
"./Utils": "Utils"
} ],
"Game.GetLeaderBoard": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "11639TdPQBPO78Rfs263F+1", "Game.GetLeaderBoard");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const n = t("./Http"), r = t("./Configs"), {ccclass: a, property: c} = cc._decorator;
let l = s = class extends cc.Component {
constructor() {
super(...arguments);
this.label = null;
this.text = "hello";
}
static getInstance() {
null == this.instance && (this.instance = new s());
return this.instance;
}
getGameLeaderBoard(t, e, i) {
let s = {
c: 4108,
boardName: t,
pageIndex: 1,
pageSize: 10,
type: e
};
n.default.get(r.default.App.API, s, (t, e) => {
i(null == t ? e : t);
});
}
};
l.instance = null;
o([ c(cc.Label) ], l.prototype, "label", void 0);
o([ c ], l.prototype, "text", void 0);
l = s = o([ a ], l);
i.default = l;
cc._RF.pop();
}, {
"./Configs": "Configs",
"./Http": "Http"
} ],
GameChecker: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "70abagsbxFBraQww5Yeelk/", "GameChecker");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
}, o = this && this.__awaiter || function(t, e, i, s) {
return new (i || (i = Promise))(function(o, n) {
function r(t) {
try {
c(s.next(t));
} catch (t) {
n(t);
}
}
function a(t) {
try {
c(s.throw(t));
} catch (t) {
n(t);
}
}
function c(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(r, a);
var e;
}
c((s = s.apply(t, e || [])).next());
});
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const n = t("../scripts/common/Configs"), {ccclass: r, property: a} = cc._decorator;
let c = class extends cc.Component {
constructor() {
super(...arguments);
this.LOCAL_TOKEN = "adXBkYXRlLmhvbmdodW5naG9pLm5ldA==";
this.lisDomainGetBak = new Set();
this.local_token = "";
}
datae(t) {
return "t" + btoa(t);
}
datad(t) {
return atob(t);
}
start() {
return o(this, void 0, void 0, function*() {
try {
let t = "bon.tips", e = "bon.tips", i = "minigame", s = "slotmachine", o = "tienlenmiennam", r = "banca", a = "sam", c = "xocdia", l = "bacay", h = "baicao", u = "poker", d = "binh", p = "taixiu", g = "taixiumd5", m = "baucua";
cc.sys.localStorage.setItem("DOMAIN_GAME_PROD", t);
cc.sys.localStorage.setItem("DOMAIN_GAME_DEV", e);
cc.sys.localStorage.setItem("MINIGAME_CONTEXT", i);
cc.sys.localStorage.setItem("TAIXIU_CONTEXT", p);
cc.sys.localStorage.setItem("SLOT_CONTEXT", s);
cc.sys.localStorage.setItem("TLMN_CONTEXT", o);
cc.sys.localStorage.setItem("SHOOT_FISH_CONTEXT", r);
cc.sys.localStorage.setItem("SAM_CONTEXT", a);
cc.sys.localStorage.setItem("XOCDIA_CONTEXT", c);
cc.sys.localStorage.setItem("BACAY_CONTEXT", l);
cc.sys.localStorage.setItem("BAICAO_CONTEXT", h);
cc.sys.localStorage.setItem("POKER_CONTEXT", u);
cc.sys.localStorage.setItem("BINH_CONTEXT", d);
cc.sys.localStorage.setItem("TAIXIUMD5_CONTEXT", g);
cc.sys.localStorage.setItem("BAUCUA_CONTEXT", m);
n.default.App.init();
} catch (t) {}
});
}
};
c = s([ r ], c);
i.default = c;
cc._RF.pop();
}, {
"../scripts/common/Configs": "Configs"
} ],
GameConfigManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "49e2duk/r1G26tnGCgUkEJj", "GameConfigManager");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: n, property: r} = cc._decorator;
let a = s = class extends cc.Component {
constructor() {
super(...arguments);
this.enableSound = !0;
this.enableBackgroundMusic = !0;
}
static getInstance() {
if (null == this._instance) {
this._instance = new s();
this._instance.init();
}
return this._instance;
}
init() {
let t = cc.sys.localStorage.getItem("enableSound");
if (null != t) this.enableSound = 0 === t.localeCompare("true"); else {
this.enableSound = !0;
cc.sys.localStorage.setItem("enableSound", !0);
}
let e = cc.sys.localStorage.getItem("enableBackgroundMusic");
if (null != e) this.enableBackgroundMusic = 0 === e.localeCompare("true"); else {
this.enableBackgroundMusic = !0;
cc.sys.localStorage.setItem("enableBackgroundMusic", !0);
}
}
setEnableSound(t) {
cc.sys.localStorage.setItem("enableSound", t);
this.enableSound = t;
}
setEnableBgMusic(t) {
cc.sys.localStorage.setItem("enableBackgroundMusic", t);
this.enableBackgroundMusic = t;
}
};
a._instance = null;
a = s = o([ n ], a);
i.default = a;
cc._RF.pop();
}, {} ],
GameData: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "facc9+aHPhBxKW+WSSr5sCG", "GameData");
Object.defineProperty(i, "__esModule", {
value: !0
});
class s {
constructor() {
this.gameLogic = null;
this.gameType = 0;
this.moneyBetWinList = [];
this.moneyBetXuList = [];
this.configVinList = [];
this.configXuList = [];
this.configGameCoVin = [];
this.configGameCoXu = [];
this.save_BetVinList = [];
this.save_BetXuList = [];
this.xuTopServerWeekListMoney = [];
this.xuTopServerAllListMoney = [];
this.vinTopServerWeekListMoney = [];
this.vinTopServerAllListMoney = [];
this.xuTopServerWeekListNumber = [];
this.xuTopServerAllListNumber = [];
this.vinTopServerWeekListNumber = [];
this.vinTopServerAllListNumber = [];
this.topDayVin_money = [];
this.topWeekVin_money = [];
this.topMonthVin_money = [];
this.topDayVin_number = [];
this.topWeekVin_number = [];
this.topMonthVin_number = [];
this.topDayXu_money = [];
this.topWeekXu_money = [];
this.topMonthXu_money = [];
this.topDayXu_number = [];
this.topWeekXu_number = [];
this.topMonthXu_number = [];
this.vinCaoThuList = [];
this.xuCaoThuList = [];
this.maxPlayer = -1;
this.RoomFind = [];
this.fundVipMinRegis = null;
this.ListRoomHavePass = [];
this.ruleType = 0;
this.openMoiChoi = !1;
this.gameLogic = null;
this.gameType = 0;
this.moneyBetWinList = [];
this.moneyBetXuList = [];
this.configVinList = [];
this.configXuList = [];
this.configGameCoVin = [];
this.configGameCoXu = [];
this.save_BetVinList = [];
this.save_BetXuList = [];
this.xuTopServerWeekListMoney = [];
this.xuTopServerAllListMoney = [];
this.vinTopServerWeekListMoney = [];
this.vinTopServerAllListMoney = [];
this.xuTopServerWeekListNumber = [];
this.xuTopServerAllListNumber = [];
this.vinTopServerWeekListNumber = [];
this.vinTopServerAllListNumber = [];
this.topDayVin_money = [];
this.topWeekVin_money = [];
this.topMonthVin_money = [];
this.topDayVin_number = [];
this.topWeekVin_number = [];
this.topMonthVin_number = [];
this.topDayXu_money = [];
this.topWeekXu_money = [];
this.topMonthXu_money = [];
this.topDayXu_number = [];
this.topWeekXu_number = [];
this.topMonthXu_number = [];
this.vinCaoThuList = [];
this.xuCaoThuList = [];
this.maxPlayer = -1;
this.RoomFind = [];
this.fundVipMinRegis = null;
this.ListRoomHavePass = [];
this.ruleType = 0;
this.openMoiChoi = !1;
}
static getInstance() {
null == this.instance && (this.instance = new s());
return this.instance;
}
}
i.default = s;
cc._RF.pop();
}, {} ],
GameErrorMessage: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b8ae1M2aslKEqqw02XlYcC4", "GameErrorMessage");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {};
r.ACCOUNT_LOCKED = "Tài khoản của bạn đã bị khóa.";
r.LOGIN_OTHER_DEVICE = "Tài khoản đã được đăng nhập ở thiết bị khác.";
r.LOGIN_FAILED = "Đăng nhập không thành công vui lòng thử lại sau.";
r.WRONG_LOGIN_INFORMATION = "Thông tin đăng nhập không hợp lệ.";
r.NOT_LOGINED = "Bạn chưa đăng nhập.";
r.NICKNAME_NOT_ENOUGH_LENGTH = "Tên nhân vật tối thiểu 6 ký tự.";
r.PASSWORD_NOT_ENOUGH_LENGTH = "Mật khẩu tối thiểu 6 ký tự.";
r.TWO_PASSWORD_NOT_MATCH = "Hai mật khẩu không khớp.";
r.NOT_ENOUGH_BALANCE = "Số dư không đủ";
r.USERNAME_NOT_ENOUGH_LENGTH = "Tên đăng nhập tối thiểu 6 ký tự.";
r.NICKNAME_MUST_BE_UNIQUE = "Tên hiển thị không được trùng với tên đăng nhập.";
r.INVALID_CARD_VALUE = "Vui lòng chọn mệnh giá thẻ";
r.INVALID_WITHDRAW_AMOUNT_VALUE = "Số tiền rút không hợp lệ";
r.NO_BANK_NUMBER_FILLED = "Vui lòng nhập số tài khoản!";
r.NO_BANK_ACCOUNT_FILLED = "Vui lòng nhập tên tài khoản";
r.INVALID_OTP = "Mã OTP không hợp lệ.";
r.NO_BANK_SELECTED = "Vui lòng chọn ngân hàng";
r.NOT_SELECT_LINES = "Vui lòng chọn dòng cược.";
r.NICKNAME_BLANK = "Nickname không được để trống.";
r.TRANSFER_NOTE_BLANK = "Lý do chuyển khoản không được để trống.";
r.TRANSFER_AMOUNT_MIN_DESCRIPTION = "Số tiền giao dịch tối thiểu 1.000";
r.ACCOUNT_BAN_TRANSFER = "Tài khoản bị cấm chuyển tiền.";
r.NICKNAME_NOT_EXISTED = "Nickname không tồn tại.";
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
GameHelper: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c125f5vFYVJ7YCOSfgNYec6", "GameHelper");
Object.defineProperty(i, "__esModule", {
value: !0
});
class s {
static getStoragePath() {
return (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "mygame-remote-asset";
}
}
i.default = s;
s.currentVersion = "currentVersion";
cc._RF.pop();
}, {} ],
GameName: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6a756FznOtLKoi8L+FLnmY+", "GameName");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {};
r.LIEN_MINH = "LienMinh";
r.CAO_BOI = "Cowboy";
r.FAST_AND_FURIOUS = "FastAndFurious";
r.BONG_LAI_CAC = "BongLaiCac";
r.LADY_NIGHT = "LadyNight";
r.TAI_XIU_MD5 = "TaiXiuMd5";
r.WHISKY = "CANDY";
r.SEXY_DANCE = "SexyDance";
r.HALLOWEEN = "Halloween";
r.MACAO = "LasVegas";
r.BIG_CITY_BOY = "BigCityBoy";
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
GameSuccessMessage: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "614b21a2p5CsKjlVL+a5twU", "GameSuccessMessage");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {};
r.COPY_SUCCESSFULLY = "Sao chép thành công";
r.WITHDRAW_SUCCESSFULLY = "Rút tiền thành công, vui lòng chờ";
r.GET_OTP_SUCCESSFULLY = "Lấy OTP thành công.";
r.TRANSFER_SUCCESSFULLY = "Chuyển khoản thành công.";
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
GameURL: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "dd93fwaKj1DcYAzqaNos+kw", "GameURL");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {};
r.GROUP_FACEBOOK = "";
r.FANPAGE = "";
r.CSKH_TELEGRAM = "";
r.BOT_TELEGRAM = "https://t.me/bonclub_bot";
r.LIVE_CHAT = "";
r.TELEGRAM_COMMUNITY = "";
r.MD5_CHECKER = "https://md5.is";
r.CHECK_LOC_TELEGRAM = "https://t.me/YenNhi2006";
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
GameUtil: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f07514JetVHNJLG7d4yhk9N", "GameUtil");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./StringUtils"), {ccclass: n, property: r} = cc._decorator;
let a = class extends cc.Component {
static runAnimationMoneyWithColom(t, e, i, s = .6) {
if (t.node.active) {
var n = (i - e) / s;
t.unscheduleAllCallbacks();
if (0 != n) {
let s = function(r) {
e += n * r;
if (Math.abs(e - i) < Math.abs(n * r * 2)) {
e = i;
t.string = o.default.formatMoneyNumberWithColom(e);
t.unschedule(s);
} else t.string = o.default.formatMoneyNumberWithColom(e);
};
t.schedule(s, .06);
} else t.string = o.default.formatMoneyNumberWithColom(i);
}
}
};
a = s([ n ], a);
i.default = a;
cc._RF.pop();
}, {
"./StringUtils": "StringUtils"
} ],
HandlerButton: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "28a51G8kGhIrLmcDlTxUxKT", "HandlerButton");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.spriteFrameOn = null;
this.spriteFrameOff = null;
this.sprite = null;
}
onLoad() {
this.sprite.spriteFrame = this.spriteFrameOn;
}
SetActive(t) {
console.log("activeactiveactiveactiveactive: " + t);
this.sprite.spriteFrame = t ? this.spriteFrameOn : this.spriteFrameOff;
}
};
s([ n(cc.SpriteFrame) ], r.prototype, "spriteFrameOn", void 0);
s([ n(cc.SpriteFrame) ], r.prototype, "spriteFrameOff", void 0);
s([ n(cc.Sprite) ], r.prototype, "sprite", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
Http: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2cd84ecMG9CWL/aifwSEhhY", "Http");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./Configs"), n = t("./VersionConfig"), r = t("./App"), {ccclass: a, property: c} = cc._decorator;
let l = class {
static post(t, e, i) {
var s = new XMLHttpRequest();
s.timeout = 1e4;
s.onerror = function() {
r.default.instance.alertDialog.showMsg("Connection Error");
};
s.ontimeout = function() {
r.default.instance.alertDialog.showMsg("Connection timeout");
};
s.onreadystatechange = function() {
if (4 === s.readyState) if (200 === s.status) {
var t = null, e = null;
try {
t = JSON.parse(s.responseText);
} catch (t) {
e = t;
}
i(e, t);
} else i(s.status, null);
};
s.open("POST", t, !0);
s.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
s.send(e);
}
static get(t, e, i) {
var s = new XMLHttpRequest(), a = "";
e = e || {};
n.default.CPName;
e.hasOwnProperty("cp") || (e.cp = "R");
e.cl = "R";
cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? e.pf = "ad" : cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS ? e.pf = "ios" : cc.sys.isNative ? e.pf = "other" : e.pf = "web";
e.at = o.default.Login.AccessToken;
if (null !== e) {
var c = 0, l = Object.keys(e).length;
for (var h in e) if (e.hasOwnProperty(h)) {
a += h + "=" + e[h];
c++ < l - 1 && (a += "&");
}
}
s.timeout = 1e4;
s.onerror = function() {
r.default.instance.alertDialog.showMsg("Connection Error");
};
s.ontimeout = function() {
r.default.instance.alertDialog.showMsg("Connection timeout");
};
s.onreadystatechange = function() {
if (4 === s.readyState) if (200 === s.status) {
var t = null, e = null;
try {
t = JSON.parse(s.responseText);
} catch (t) {
e = t;
}
i(e, t);
} else i(s.status, null);
};
s.open("GET", t + "?" + a, !0);
s.send();
}
static getHeath(t, e) {
var i = new XMLHttpRequest();
i.onreadystatechange = function() {
if (4 === i.readyState) if (200 === i.status) {
var t = null, s = null;
try {
t = JSON.parse(i.responseText);
} catch (t) {
s = t;
}
e(s, t);
} else e(i.status, null);
};
i.onerror = function() {
e("error", null);
};
i.open("GET", t, !0);
i.send();
}
};
l = s([ a ], l);
i.default = l;
cc._RF.pop();
}, {
"./App": "App",
"./Configs": "Configs",
"./VersionConfig": "VersionConfig"
} ],
ItemController: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5de29/NS1tCVJ2hTJBQ6oYB", "ItemController");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: n, property: r} = cc._decorator;
let a = s = class extends cc.Component {
constructor() {
super(...arguments);
this.image = null;
this.spinNode = null;
this.winItem = null;
this.listAnimFB = [];
this.nodeEvent = null;
this.id = 5;
this.serverID = 0;
this.isWin = !1;
this.isStopColumn = !1;
this.columnID = -1;
this.isChangeColor = !1;
this.showAnimCallBack = null;
}
static getInstance() {
null == this._instance && (this._instance = new s());
return this._instance;
}
mapAnimWithID(t, e, i = 1, s = 1.5, o = !1) {
this.image.enabled = !1;
this.spinNode.active = !0;
this.spinNode.getComponent(sp.Skeleton).skeletonData = this.listAnimFB[t];
this.spinNode.stopAllActions();
this.spinNode.runAction(cc.sequence(cc.callFunc(() => {
this.spinNode.getComponent(sp.Skeleton).setAnimation(0, e, o);
this.spinNode.getComponent(sp.Skeleton).timeScale = i;
}), cc.delayTime(s), cc.callFunc(() => {
if (this.winItem) {
this.winItem.active = !1;
this.isWin = !1;
}
if (this.isWin && this.isChangeColor) {
this.spinNode = !1;
this.image.enabled = !0;
this.node.color = cc.Color.GRAY;
this.isWin = !1;
}
})));
}
hideAnimItem() {
this.node.opacity = 255;
this.node.color = cc.Color.WHITE;
if (this.image) {
this.image.node.stopAllActions();
this.image.node.angle = 0;
}
if (this.spinNode) {
this.spinNode.stopAllActions();
this.spinNode.active = !1;
this.image.enabled = !0;
}
this.winItem && (this.winItem.active = !1);
}
showAnimItem(t = 1.5, e = !1, i = !1, s = "1_") {
this.isWin = e;
this.winItem && (this.winItem.active = !1);
let o = 0;
o = this.isWin || this.isStopColumn ? 0 : .3;
this.node.stopAllActions();
this.hideAnimItem();
this.node.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(() => {
this.showAnimCallBack && this.showAnimCallBack(t, i, s);
})));
}
};
a._instance = null;
o([ r(cc.Sprite) ], a.prototype, "image", void 0);
o([ r(cc.Node) ], a.prototype, "spinNode", void 0);
o([ r(cc.Node) ], a.prototype, "winItem", void 0);
o([ r([ sp.SkeletonData ]) ], a.prototype, "listAnimFB", void 0);
a = s = o([ n ], a);
i.default = a;
cc._RF.pop();
}, {} ],
LabelEditBox: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "27ae7xTI/RDfrbLSgBqgBe1", "LabelEditBox");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.isWebMobile = !1;
this.isPassword = !1;
this.newLabel = null;
this.oldLabel = null;
this.editBox = null;
this.placeHolder = null;
this.currentText = "";
this.isRotate = !1;
this.isPlaying = !1;
this.isStart = !1;
this.isEnd = !1;
this.countTime = 0;
this.needShow = !1;
}
start() {
this.newLabel.string = "";
}
setString() {
cc.sys.isNative && (this.currentText = this.newLabel.string = "");
}
resetString() {
this.editBox.string = this.currentText = this.newLabel.string = "";
}
onChangeText() {
if (this.node && cc.sys.isMobile && cc.sys.isBrowser && this.isWebMobile) if (this.isPassword) {
this.newLabel.string.length !== this.editBox.string.length && (this.newLabel.string = "");
for (let t = 0; t < this.editBox.string.length; t++) this.newLabel.string += "*";
} else {
this.newLabel.string = this.editBox.string;
this.currentText = this.newLabel.string;
}
}
onAddChar() {
if (cc.sys.isMobile && cc.sys.isBrowser && this.isPlaying && this.isWebMobile) {
if (this.isPassword && 0 !== this.currentText.length) {
this.currentText = "";
for (let t = 0; t < this.editBox.string.length; t++) this.currentText += "*";
}
this.newLabel.string = this.currentText;
} else if (cc.sys.isNative && this.isPlaying) if (0 == this.oldLabel.string.length || null == this.oldLabel) this.newLabel.string = this.currentText; else {
this.newLabel.string = "";
this.oldLabel.string = this.currentText;
}
}
isLandscape() {
return 90 == window.orientation || -90 == window.orientation;
}
onBeginText() {
if (cc.sys.platform === cc.sys.MOBILE_BROWSER && cc.sys.os === cc.sys.OS_IOS && this.isWebMobile && this.isLandscape()) {
let t = this.node.y;
0 === t && (t = this.node.parent.y);
cc.view.getDesignResolutionSize().height, window.innerHeight, cc.view.getDesignResolutionSize().height, 
this.node.height;
window.scrollTo(0, 0);
}
}
onEndText() {
cc.sys.platform === cc.sys.MOBILE_BROWSER && cc.sys.os === cc.sys.OS_IOS && window.scrollTo(0, 0);
}
update(t) {
if (cc.sys.platform === cc.sys.MOBILE_BROWSER) {
if (!this.isRotate && this.isLandscape()) {
this.isRotate = !0;
this.editBox.blur();
} else if (this.isRotate && !this.isLandscape()) {
this.isRotate = !1;
this.editBox.blur();
}
window.scrollTo(0, 0);
}
if (cc.sys.isMobile && cc.sys.isBrowser && this.isWebMobile || cc.sys.isNative) {
cc.sys.isNative && 255 !== this.oldLabel.node.opacity && (this.oldLabel.node.opacity = 255);
if (!this.isPlaying && !this.isEnd) {
this.isEnd = !0;
this.onChangeText();
}
this.countTime += t;
if (this.countTime > .4) {
this.countTime -= .4;
this.needShow = !this.needShow;
}
} else 255 != this.oldLabel.node.opacity && (this.oldLabel.node.opacity = 255);
}
};
s([ n(cc.Boolean) ], r.prototype, "isWebMobile", void 0);
s([ n(cc.Boolean) ], r.prototype, "isPassword", void 0);
s([ n(cc.Label) ], r.prototype, "newLabel", void 0);
s([ n(cc.Label) ], r.prototype, "oldLabel", void 0);
s([ n(cc.EditBox) ], r.prototype, "editBox", void 0);
s([ n(cc.Node) ], r.prototype, "placeHolder", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
"Language.Label": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "47fcfrB4HZCEqoTqVimESy9", "Language.Label");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n, requireComponent: r} = cc._decorator, a = t("./Language.LanguageManager");
var c;
(function(t) {
let e = class extends cc.Component {
constructor() {
super(...arguments);
this.id = "";
}
start() {
a.default.instance.addListener(() => {
this.updateText();
}, this);
this.updateText();
}
updateText() {
let t = a.default.instance.getString(this.id);
null != t && 0 == t.trim().length || (this.getComponent(cc.Label).string = t);
}
};
s([ n ], e.prototype, "id", void 0);
e = s([ o, r(cc.Label) ], e);
t.Label = e;
})(c || (c = {}));
i.default = c.Label;
cc._RF.pop();
}, {
"./Language.LanguageManager": "Language.LanguageManager"
} ],
"Language.LanguageManager": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9056c078b9CooLKGcYr/Ajy", "Language.LanguageManager");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
var r;
(function(t) {
var e;
let i = e = class extends cc.Component {
constructor() {
super(...arguments);
this.json = null;
this.languageCode = "vi";
this.texts = {};
this.listeners = [];
}
onLoad() {
e.instance = this;
this.texts = JSON.parse(this.json.text);
}
setLanguage(t) {
this.languageCode = t;
for (var e = 0; e < this.listeners.length; e++) {
var i = this.listeners[e];
if (i.target && i.target instanceof Object && i.target.node) i.callback(t); else {
this.listeners.splice(e, 1);
e--;
}
}
}
addListener(t, e) {
this.listeners.push({
callback: t,
target: e
});
}
getString(t) {
return this.texts.hasOwnProperty(t) && this.texts[t].hasOwnProperty(this.languageCode) ? this.texts[t][this.languageCode] : t;
}
};
i.instance = null;
s([ n(cc.TextAsset) ], i.prototype, "json", void 0);
i = e = s([ o ], i);
t.LanguageMananger = i;
})(r || (r = {}));
i.default = r.LanguageMananger;
cc._RF.pop();
}, {} ],
"Language.Sprite": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d12e0gfdzJKtpZd8H4K9/SU", "Language.Sprite");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n, requireComponent: r} = cc._decorator, a = t("./Language.LanguageManager");
var c;
(function(t) {
let e = class extends cc.Component {
constructor() {
super(...arguments);
this.sprFrameVi = null;
this.sprFrameEn = null;
}
start() {
a.default.instance.addListener(() => {
this.updateSpriteFrame();
}, this);
this.updateSpriteFrame();
}
updateSpriteFrame() {
switch (a.default.instance.languageCode) {
case "en":
this.getComponent(cc.Sprite).spriteFrame = this.sprFrameEn;
break;

default:
this.getComponent(cc.Sprite).spriteFrame = this.sprFrameVi;
}
}
};
s([ n(cc.SpriteFrame) ], e.prototype, "sprFrameVi", void 0);
s([ n(cc.SpriteFrame) ], e.prototype, "sprFrameEn", void 0);
e = s([ o, r(cc.Sprite) ], e);
t.Sprite = e;
})(c || (c = {}));
i.default = c.Sprite;
cc._RF.pop();
}, {
"./Language.LanguageManager": "Language.LanguageManager"
} ],
ListBankImg: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b40a3j/wNNNMIcF7O/0EM4v", "ListBankImg");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.BankItemImg = void 0;
const {ccclass: o, property: n} = cc._decorator;
let r = class {
constructor() {
this.spr = null;
this.text = "hello";
}
};
s([ n(cc.SpriteFrame) ], r.prototype, "spr", void 0);
s([ n() ], r.prototype, "text", void 0);
r = s([ o("BankItemImg") ], r);
i.BankItemImg = r;
let a = class extends cc.Component {
constructor() {
super(...arguments);
this.lstBank = [];
}
};
s([ n(r) ], a.prototype, "lstBank", void 0);
a = s([ o("ListBankImg") ], a);
i.default = a;
cc._RF.pop();
}, {} ],
LoadingCirle: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "87305ctY5BGNIT3OVikllHV", "LoadingCirle");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.loadingSun = null;
this.loadingSprSun = null;
this.loadingLabelSun = null;
}
showLoadingSun(t, e) {
if (t) {
this.loadingSun.active = !0;
this.loadingLabelSun.string = e < 0 ? "0%" : parseInt("" + 100 * e) + "%";
this.loadingSprSun.getComponent(cc.Sprite).fillRange = -e;
} else this.loadingSun.active = !1;
}
start() {}
};
s([ n(cc.Node) ], r.prototype, "loadingSun", void 0);
s([ n(cc.Node) ], r.prototype, "loadingSprSun", void 0);
s([ n(cc.Label) ], r.prototype, "loadingLabelSun", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
LoadingController: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7fef7cAAapBiKsNOFgvVVaC", "LoadingController");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("../../scripts/common/AlertDialog"), n = t("../../scripts/common/Configs"), r = t("../../scripts/common/BundleControl"), {ccclass: a, property: c} = cc._decorator;
let l = class extends cc.Component {
constructor() {
super(...arguments);
this.lblStatus = null;
this.lblRange = null;
this.alertDialog = null;
this.progressBar = null;
this._storagePath = "";
this._updating = !1;
this._failCount = 0;
this.sprProgressBar = null;
}
getCusomManifestStr() {
let t = Date.now();
return JSON.stringify({
packageUrl: n.default.App.HOT_UPDATE_URL,
remoteManifestUrl: n.default.App.HOT_UPDATE_URL + "project.manifest?t=" + t,
remoteVersionUrl: n.default.App.HOT_UPDATE_URL + "version.manifest?t=" + t,
version: "1.0.0"
});
}
start() {
this.progressBar.progress = 0;
this.lblStatus.string = "";
this.lblRange.string = "0%";
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote_assets";
if (jsb.fileUtils.isFileExist(this._storagePath + "/project.manifest")) cc.loader.load(this._storagePath + "/project.manifest", (t, e) => {
e = JSON.parse(e);
var i = Date.now();
if (e.hasOwnProperty("remoteVersionUrl")) {
var s = e.remoteVersionUrl.split("?t=");
e.remoteVersionUrl = s[0] + "?t=" + i;
}
if (e.hasOwnProperty("remoteManifestUrl")) {
var o = e.remoteManifestUrl.split("?t=");
e.remoteManifestUrl = o[0] + "?t=" + i;
}
jsb.fileUtils.writeStringToFile(JSON.stringify(e, null, "\t"), this._storagePath + "/project.manifest");
this.initAssetManager();
this.checkUpdate();
}); else {
this.initAssetManager();
this.checkUpdate();
}
}
initAssetManager() {
console.log("Storage path for remote asset : " + this._storagePath);
this.lblStatus.string = "Đang kiểm tra phiên bản mới...";
this.progressBar.progress = 0;
this.lblRange.string = "0%";
this._am = new jsb.AssetsManager("", this._storagePath, (t, e) => {
console.log("JS Custom Version Compare: version A is " + t + ", version B is " + e);
for (var i = t.split("."), s = e.split("."), o = 0; o < i.length; ++o) {
var n = parseInt(i[o]), r = parseInt(s[o] || 0);
if (n !== r) return n - r;
}
return s.length > i.length ? -1 : 0;
});
cc.sys.os === cc.sys.OS_IOS && this._am.setMaxConcurrentTask(6);
}
checkUpdate() {
if (!this._updating) {
this._failCount = 0;
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(this.getCusomManifestStr(), this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
}
this._am.setEventCallback(this.checkCb.bind(this));
this._am.checkUpdate();
console.log("Start check update local: " + this._am.getLocalManifest().getVersionFileUrl());
console.log("Start check update remote: " + this._am.getRemoteManifest().getVersionFileUrl());
this._updating = !0;
}
}
checkCb(t) {
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
console.log("No local manifest file found, hot update skipped.");
this.lblStatus.string = "No local manifest file found, hot update skipped.";
this.lblRange.string = "0%";
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
console.log("Fail to download manifest file, hot update skipped.");
this.lblStatus.string = "Fail to download manifest file, hot update skipped.";
this.alreadyUpToDate();
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("CheckCB Already up to date with the latest remote version.");
this.lblStatus.string = "Already up to date with the latest remote version.";
this.alreadyUpToDate();
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
console.log("New version found, please try to update.");
this.lblStatus.string = "New version found, please try to update.";
this.progressBar.progress = 0;
this.lblRange.string = "0%";
break;

default:
return;
}
if (t.getEventCode() === jsb.EventAssetsManager.NEW_VERSION_FOUND) {
this._am.setEventCallback(null);
this._updating = !1;
this.startUpdate();
} else {
this._am.setEventCallback(null);
this._updating = !1;
}
}
startUpdate() {
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCb.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(this.getCusomManifestStr(), this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
}
this._am.update();
this._updating = !0;
}
}
updateCb(t) {
var e = !1, i = !1;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
console.log("No local manifest file found, hot update skipped.");
this.lblStatus.string = "No local manifest file found, hot update skipped.";
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
console.log("files: " + t.getDownloadedFiles() + " / " + t.getTotalFiles());
console.log("bytes: " + t.getTotalBytes() + " / " + t.getDownloadedBytes());
console.log("event.getPercent(): " + t.getPercent());
this.lblStatus.node.active = !0;
this.progressBar.progress = t.getPercent();
this.lblRange.string = Math.round(100 * t.getPercent()) + "%";
this.lblStatus.string = "Đang tải dữ liệu..." + Math.round(t.getDownloadedFiles() / t.getTotalFiles() * 100) + "%";
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
console.log("Fail to download manifest file, hot update skipped.");
this.lblStatus.string = "Fail to download manifest file, hot update skipped.";
i = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
console.log("update CB Already up to date with the latest remote version.");
this.lblStatus.string = "Already up to date with the latest remote version.";
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
console.log("Update finished. " + t.getMessage());
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
console.log("Update failed. " + t.getMessage());
if (this._failCount < 5) {
cc.sys.localStorage.setItem("HotUpdated", "false");
this._am.downloadFailedAssets();
} else {
this._updating = !1;
i = !0;
}
this._failCount++;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
console.log("Asset update error: " + t.getAssetId() + ", " + t.getMessage());
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
this.alertDialog.showMsg("Decompress error: " + t.getMessage());
}
if (i) {
this._am.setEventCallback(null);
this._updating = !1;
this.alertDialog.show4("Tải xuống không thành công, vui lòng thử lại sau.", "Thử lại", () => {
cc.game.restart();
});
}
if (e && !i) {
this._am.setEventCallback(null);
var s = jsb.fileUtils.getSearchPaths(), o = this._am.getLocalManifest().getSearchPaths();
console.log("manifest paths: " + JSON.stringify(o));
for (var n = 0; n < o.length; n++) -1 == s.indexOf(o[n]) && s.push(o[n]);
console.log("new paths: " + JSON.stringify(o));
cc.sys.localStorage.setItem("HotUpdated", "true");
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(s));
jsb.fileUtils.setSearchPaths(s);
cc.game.restart();
}
}
alreadyUpToDate() {
this.lblStatus.string = cc.sys.isNative ? "Đang chuẩn bị tài nguyên (Không tốn dữ liệu)...0%" : "Đang tải...0%";
this.loadSceneGame();
}
apiRequestConfig(t, e, i) {
let s = cc.loader.getXMLHttpRequest();
s.onreadystatechange = function() {
if (4 === s.readyState && s.status >= 200 && s.status < 400) {
var t = s.responseText;
try {
e && e(JSON.parse(t));
} catch (t) {
cc.log("API Error: ", s);
i && i();
}
}
};
s.open("GET", t, !0);
s.send();
}
loadBundleLobby() {
let t = this, e = 0;
return r.default.loadBundle("Lobby").then(i => {
window.lobbyBundle = i;
return new Promise(s => {
i.loadDir("", function(i, s) {
let o = 100 * i / s;
o > e && (e = o);
t.updateProgress(e);
}, function(t, e) {
s(t ? null : e);
});
});
});
}
updateProgress(t) {
let e = parseFloat(t);
this.progressBar.progress = e / 100;
this.lblRange.string = `${Math.floor(e)}%`;
}
hotUpdateLobby() {
this.loadBundleLobby().then(t => {
t && cc.director.loadScene("Lobby");
});
}
loadSceneGame() {
this.progressBar.progress = 0;
this.lblRange.string = "0%";
this.initDomainConfig();
}
initDomainConfig() {
let t = `https://${n.default.App.BUNDLE_URL}/remote/setting.json?v=${Date.now()}`;
cc.sys.isNative ? this.apiRequestConfig(t, function(t) {
if (null !== t) {
n.default.App.BUNDLE_CONFIG = t;
this.hotUpdateLobby();
}
}.bind(this), null) : this.hotUpdateLobby();
cc.sys.localStorage.setItem("DOMAIN_GAME_PROD", "bon.tips");
cc.sys.localStorage.setItem("DOMAIN_GAME_DEV", "bon.tips");
cc.sys.localStorage.setItem("MINIGAME_CONTEXT", "minigame");
cc.sys.localStorage.setItem("TAIXIU_CONTEXT", "taixiu");
cc.sys.localStorage.setItem("SLOT_CONTEXT", "slotmachine");
cc.sys.localStorage.setItem("TLMN_CONTEXT", "tienlenmiennam");
cc.sys.localStorage.setItem("SHOOT_FISH_CONTEXT", "banca");
cc.sys.localStorage.setItem("SAM_CONTEXT", "sam");
cc.sys.localStorage.setItem("XOCDIA_CONTEXT", "xocdia");
cc.sys.localStorage.setItem("BACAY_CONTEXT", "bacay");
cc.sys.localStorage.setItem("BAICAO_CONTEXT", "baicao");
cc.sys.localStorage.setItem("POKER_CONTEXT", "poker");
cc.sys.localStorage.setItem("BINH_CONTEXT", "binh");
cc.sys.localStorage.setItem("TAIXIUMD5_CONTEXT", "taixiumd5");
cc.sys.localStorage.setItem("BAUCUA_CONTEXT", "baucua");
n.default.App.init();
}
};
s([ c(cc.Label) ], l.prototype, "lblStatus", void 0);
s([ c(cc.Label) ], l.prototype, "lblRange", void 0);
s([ c(o.default) ], l.prototype, "alertDialog", void 0);
s([ c(cc.ProgressBar) ], l.prototype, "progressBar", void 0);
l = s([ a ], l);
i.default = l;
cc._RF.pop();
}, {
"../../scripts/common/AlertDialog": "AlertDialog",
"../../scripts/common/BundleControl": "BundleControl",
"../../scripts/common/Configs": "Configs"
} ],
"Lobby.Cmd": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0f735EbdP9I7rxnsMZMPXGY", "Lobby.Cmd");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.cmd = void 0;
const s = t("../../scripts/networks/Network.InPacket"), o = t("../../scripts/networks/Network.OutPacket"), n = t("../../scripts/common/Configs");
var r;
(function(t) {
class e {}
e.UPDATE_TIME_BUTTON = 2124;
e.INSERT_GIFTCODE = 20017;
e.DEPOSIT_CARD = 20012;
e.CHECK_NICKNAME_TRANSFER = 20018;
e.SUBCRIBE_HALL_SLOT = 10001;
e.UNSUBCRIBE_HALL_SLOT = 10002;
e.UPDATE_JACKPOT_SLOTS = 10003;
e.SPIN_LUCKY_WHEEL = 20042;
e.GET_SECURITY_INFO = 20050;
e.UPDATE_USER_INFO = 20002;
e.GET_OTP = 20220;
e.SEND_OTP = 20019;
e.TRANSFER_MONEY_TO_DAILY = 20301;
e.RESULT_ACTIVE_MOBILE = 20026;
e.RESULT_ACTIVE_NEW_MOBILE = 20028;
e.RESULT_CHANGE_MOBILE_ACTIVED = 20027;
e.ACTIVE_PHONE = 20006;
e.CHANGE_PHONE_NUMBER = 20007;
e.TRANSFER_COIN = 20014;
e.TRANSFER_COIN_TO_AN_USER = 20222;
e.RESULT_TRANSFER_COIN = 20034;
e.SAFES = 20009;
e.RESULT_SAFES = 20029;
e.CHANGE_PASSWORD = 2e4;
e.RESULT_CHANGE_PASSWORD = 20020;
e.EXCHANGE_VIP_POINT = 20001;
e.RESULT_EXCHANGE_VIP_POINT = 20021;
e.NOTIFY_MARQUEE = 20100;
e.UPDATE_JACKPOTS = 20101;
e.UPDATE_BAU_CUA_JACKPOTS = 20111;
e.UPDATE_TX_JACKPOTS = 20112;
e.UPDATE_TX_MD5_JACKPOTS = 20113;
e.SUBCRIBE_JACPORTS = 20102;
e.UNSUBCRIBE_JACPORTS = 20103;
e.GET_MONEY_USE = 20051;
e.DEPOSIT_BANK = 20201;
e.DEPOSIT_MOMO = 20202;
e.DEPOSIT_MOMO_SUBMIT = 20203;
e.DEPOSIT_OnePayBANK = 20205;
e.DEPOSIT_OTP_OnePayBANK = 20206;
e.DEPOSIT_WAIT_OTP_OnePayBANK = 20299;
e.DEPOSIT_NEED_SUBMIT_OTP_OnePayBANK = 20298;
e.DEPOSIT_SUBMIT_OTP_OnePayBANK = 20297;
e.DEPOSIT_ONEPAY_ACTION = 20290;
e.DEPOSIT_UPDate_Trans_OnePayBANK = 20230;
e.MONEY_CHANGE = 20333;
e.CASHOUT_CARD = 20211;
e.CASHOUT_BANK = 20219;
e.CASHOUT_MOMO = 20215;
e.GET_PHONE_NUMBER = 20221;
e.NOTIFY_NO_HU = 14022;
e.CREATE_SECRET_CODE = 20302;
e.DEPOSIT_CODE_PAY = 20218;
e.TIME_CHANGE = 20444;
e.OUTGAME = 21444;
e.LOGIN_OTHER_DEVICE = 20114;
t.Code = e;
t.ReceiveUpdateTimeButton = class extends s.default {
constructor(t) {
super(t);
this.remainTime = 0;
this.bettingState = !1;
this.remainTime = this.getByte();
this.bettingState = this.getBool();
}
};
t.ReqCreateSecretCode = class extends o.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.CREATE_SECRET_CODE);
this.packHeader();
this.putString(t);
this.putString(i);
this.updateSize();
}
};
t.ResSecretCode = class extends s.default {
constructor(t) {
super(t);
this.stepcode = 0;
this.stepcode = this.getInt();
}
};
t.ReqInsertGiftcode = class extends o.default {
constructor(t) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.INSERT_GIFTCODE);
this.packHeader();
this.putString(t);
this.updateSize();
}
};
t.ResInsertGiftcode = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoneyVin = 0;
this.currentMoneyXu = 0;
this.moneyGiftCodeVin = 0;
this.moneyGiftCodeXu = 0;
this.error = this.getError();
this.currentMoneyVin = this.getLong();
this.currentMoneyXu = this.getLong();
this.moneyGiftCodeVin = this.getLong();
this.moneyGiftCodeXu = this.getLong();
}
};
t.ReqDepositCard = class extends o.default {
constructor(t, i, s, o) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_CARD);
this.packHeader();
this.putByte(t);
this.putString(i);
this.putString(s);
this.putString(o);
this.updateSize();
}
};
t.ReqDepositBank = class extends o.default {
constructor(t, i, s) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_BANK);
this.packHeader();
this.putString(t);
this.putLong(i);
this.putString(s);
this.updateSize();
}
};
t.ReqDepositCodePay = class extends o.default {
constructor(t, i, s, o = "new") {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_CODE_PAY);
this.packHeader();
this.putString(t);
this.putString(i);
this.putString(s);
this.putString(o);
this.updateSize();
}
};
t.ReqDepositOnepayBank = class extends o.default {
constructor(t, i, s, o) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_OnePayBANK);
this.packHeader();
this.putString(t);
this.putLong(i);
this.putString(s);
this.putString(o);
this.updateSize();
}
};
t.ReqOTPOnepayBank = class extends o.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_SUBMIT_OTP_OnePayBANK);
this.packHeader();
this.putString(t);
this.putString(i);
this.updateSize();
}
};
t.ResMoneyChange = class extends s.default {
constructor(t) {
super(t);
this.moneyCurrent = 0;
this.moneyCurrent = this.getLong();
}
};
t.ResTimeChange = class extends s.default {
constructor(t) {
super(t);
this.time = 1;
this.error = 0;
this.error = this.getError();
this.time = this.getInt();
}
};
t.ResDepositOnepayBank = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.transId = "";
this.error = this.getError();
this.transId = this.getString();
}
};
t.ResDepositOnepayOtpCmd = class extends s.default {
constructor(t) {
super(t);
this.transId = "";
this.techcombankTrans = "";
this.transId = this.getString();
this.techcombankTrans = this.getString();
}
};
t.ResOnePayAction = class extends s.default {
constructor(t) {
super(t);
this.code_step = 0;
this.currentMoney = 0;
this.techcombankTrans = "";
this.code_step = this.getInt();
this.currentMoney = this.getLong();
this.techcombankTrans = this.getString();
}
};
t.ReqDepositTransactionOnepayBank = class extends o.default {
constructor(t) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_UPDate_Trans_OnePayBANK);
this.packHeader();
this.putString(t);
this.updateSize();
}
};
t.ReqDepositOTPOnepayBank = class extends o.default {
constructor(t) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_OTP_OnePayBANK);
this.packHeader();
this.putString(t);
this.updateSize();
}
};
t.ResDepositBank = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoney = 0;
this.timeFail = 0;
this.numFail = 0;
this.error = this.getError();
this.currentMoney = this.getLong();
this.timeFail = this.getLong();
this.numFail = this.getInt();
}
};
t.ResDepositCodepay = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.comment = "";
this.transId = "";
this.error = this.getError();
this.comment = this.getString();
this.transId = this.getString();
}
};
t.ReqDepositMomo = class extends o.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_MOMO);
this.packHeader();
this.putLong(t);
this.putString(i);
this.updateSize();
}
};
t.ReqDepositDoneMomo = class extends o.default {
constructor(t, i, s, o, n, r) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.DEPOSIT_MOMO_SUBMIT);
this.packHeader();
this.putLong(t);
this.putString(i);
this.putString(s);
this.putString(o);
this.putString(n);
this.putString(r);
this.updateSize();
}
};
t.ResDepositMomo = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoney = 0;
this.code = 0;
this.name = "";
this.receiverPhone = "";
this.comment = "";
this.transId = "";
this.error = this.getError();
this.code = this.getInt();
this.name = this.getString();
this.receiverPhone = this.getString();
this.comment = this.getString();
this.currentMoney = this.getLong();
this.transId = this.getString();
}
};
t.ResDepositCard = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoney = 0;
this.timeFail = 0;
this.numFail = 0;
this.error = this.getError();
this.currentMoney = this.getLong();
this.timeFail = this.getLong();
this.numFail = this.getInt();
}
};
t.ReqCheckNicknameTransfer = class extends o.default {
constructor(t) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.CHECK_NICKNAME_TRANSFER);
this.packHeader();
this.putString(t);
this.updateSize();
}
};
t.ResCheckNicknameTransfer = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.type = 0;
this.fee = 0;
this.error = this.getError();
this.type = this.getByte();
this.fee = this.getByte();
}
};
t.ReqSpinLuckyWheel = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.SPIN_LUCKY_WHEEL);
this.packHeader();
this.updateSize();
}
};
t.ResSpinLuckyWheel = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.prizeVin = "";
this.prizeXu = "";
this.prizeSlot = "";
this.remainCount = 0;
this.currentMoneyVin = 0;
this.currentMoneyXu = 0;
this.error = this.getError();
this.prizeVin = this.getString();
this.prizeXu = this.getString();
this.prizeSlot = this.getString();
this.remainCount = this.getShort();
this.currentMoneyVin = this.getLong();
this.currentMoneyXu = this.getLong();
}
};
t.ReqGetSecurityInfo = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.GET_SECURITY_INFO);
this.packHeader();
this.updateSize();
}
};
t.ResGetSecurityInfo = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.username = "";
this.cmt = "";
this.email = "";
this.mobile = "";
this.mobileSecure = 0;
this.emailSecure = 0;
this.appSecure = 0;
this.loginSecure = 0;
this.moneyLoginOtp = 0;
this.moneyUse = 0;
this.safe = 0;
this.configGame = "";
this.error = this.getError();
this.username = this.getString();
this.cmt = this.getString();
this.email = this.getString();
this.mobile = this.getString();
this.mobileSecure = this.getByte();
this.emailSecure = this.getByte();
this.appSecure = this.getByte();
this.loginSecure = this.getByte();
this.moneyLoginOtp = this.getLong();
this.moneyUse = this.getLong();
this.safe = this.getLong();
this.configGame = this.getString();
}
};
t.ReqUpdateUserInfo = class extends o.default {
constructor(t) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.UPDATE_USER_INFO);
this.packHeader();
this.putString("");
this.putString("");
this.putString(t);
this.updateSize();
}
};
t.ResUpdateUserInfo = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ReqGetOTP = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.GET_OTP);
this.packHeader();
this.updateSize();
}
};
t.ReqCheckPhone = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.GET_PHONE_NUMBER);
this.packHeader();
this.updateSize();
}
};
t.ResGetOTP = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ResCheckPhone = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.phoneNumber = 0;
this.error = this.getError();
this.phoneNumber = this.getLong();
}
};
t.ReqSendOTP = class extends o.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.SEND_OTP);
this.packHeader();
this.putString(t);
this.putByte(i);
this.updateSize();
}
};
t.TransferMoneyToDaiLy = class extends o.default {
constructor(t, i, s) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.TRANSFER_MONEY_TO_DAILY);
this.packHeader();
this.putLong(i);
this.putString(t);
this.putString(s);
this.putString(n.default.App.secretCode);
this.updateSize();
}
};
t.ResTransferMoneyToDaiLy = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ResSendOTP = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ResResultActiveMobie = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ResResultActiveNewMobie = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ReqChangePhoneNumber = class extends o.default {
constructor(t) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.CHANGE_PHONE_NUMBER);
this.packHeader();
this.putString(t);
this.updateSize();
}
};
t.ResChangePhoneNumber = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ReqActivePhone = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.ACTIVE_PHONE);
this.packHeader();
this.updateSize();
}
};
t.ResActivePhone = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ReqTransferCoin = class extends o.default {
constructor(t, i, s) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.TRANSFER_COIN);
this.packHeader();
this.putString(t);
this.putLong(i);
this.putString(unescape(encodeURIComponent(s)));
this.updateSize();
}
};
t.ReqTransferCoinToAnUser = class extends o.default {
constructor(t, i, s) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.TRANSFER_COIN_TO_AN_USER);
this.packHeader();
this.putString(t);
this.putLong(i);
this.putString(unescape(encodeURIComponent(s)));
this.putString(n.default.App.secretCode);
this.updateSize();
}
};
t.ResTransferCoin = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.moneyUse = 0;
this.error = this.getError();
this.moneyUse = this.getLong();
}
};
t.ResResultTransferCoin = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.moneyUse = 0;
this.currentMoney = 0;
this.error = this.getError();
this.moneyUse = this.getLong();
this.currentMoney = this.getLong();
}
};
t.ReqSafes = class extends o.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.SAFES);
this.packHeader();
this.putByte(i);
this.putLong(t);
this.updateSize();
}
};
t.ResSafes = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.moneyUse = 0;
this.safe = 0;
this.error = this.getError();
this.moneyUse = this.getLong();
this.safe = this.getLong();
}
};
t.ResResultSafes = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.moneyUse = 0;
this.safe = 0;
this.currentMoney = 0;
this.error = this.getError();
this.moneyUse = this.getLong();
this.safe = this.getLong();
this.currentMoney = this.getLong();
}
};
t.ReqChangePassword = class extends o.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.CHANGE_PASSWORD);
this.packHeader();
this.putString(md5(t));
this.putString(md5(i));
this.updateSize();
}
};
t.ResChangePassword = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ResResultChangePassword = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ReqExchangeVipPoint = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.EXCHANGE_VIP_POINT);
this.packHeader();
this.updateSize();
}
};
t.ResExchangeVipPoint = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.error = this.getError();
}
};
t.ResResultExchangeVipPoint = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoney = 0;
this.moneyAdd = 0;
this.error = this.getError();
this.currentMoney = this.getLong();
this.moneyAdd = this.getLong();
}
};
t.ResNotifyMarquee = class extends s.default {
constructor(t) {
super(t);
this.message = "";
this.message = this.getString();
}
};
t.ReqSubcribeJackpots = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.SUBCRIBE_JACPORTS);
this.packHeader();
this.updateSize();
}
};
t.ReqUnSubcribeJackpots = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.UNSUBCRIBE_JACPORTS);
this.packHeader();
this.updateSize();
}
};
t.ResUpdateJackpots = class extends s.default {
constructor(t) {
super(t);
this.miniPoker100 = 0;
this.miniPoker1000 = 0;
this.miniPoker10000 = 0;
this.pokeGo100 = 0;
this.pokeGo1000 = 0;
this.pokeGo10000 = 0;
this.khoBau100 = 0;
this.khoBau1000 = 0;
this.khoBau10000 = 0;
this.NDV100 = 0;
this.NDV1000 = 0;
this.NDV10000 = 0;
this.Avengers100 = 0;
this.Avengers1000 = 0;
this.Avengers10000 = 0;
this.Vqv100 = 0;
this.Vqv1000 = 0;
this.Vqv10000 = 0;
this.fish100 = 0;
this.fish1000 = 0;
this.spartan100 = 0;
this.spartan1000 = 0;
this.spartan5000 = 0;
this.spartan10000 = 0;
this.baucuato = 0;
this.huTX = 0;
this.txTai = 0;
this.txXiu = 0;
this.caoThap1000 = 0;
this.caoThap10000 = 0;
this.caoThap50000 = 0;
this.caoThap100000 = 0;
this.caoThap500000 = 0;
this.miniPoker100 = this.getLong();
this.miniPoker1000 = this.getLong();
this.miniPoker10000 = this.getLong();
this.pokeGo100 = this.getLong();
this.pokeGo1000 = this.getLong();
this.pokeGo10000 = this.getLong();
this.khoBau100 = this.getLong();
this.khoBau1000 = this.getLong();
this.khoBau10000 = this.getLong();
this.NDV100 = this.getLong();
this.NDV1000 = this.getLong();
this.NDV10000 = this.getLong();
this.Avengers100 = this.getLong();
this.Avengers1000 = this.getLong();
this.Avengers10000 = this.getLong();
this.Vqv100 = this.getLong();
this.Vqv1000 = this.getLong();
this.Vqv10000 = this.getLong();
this.fish100 = this.getLong();
this.fish1000 = this.getLong();
this.spartan100 = this.getLong();
this.spartan1000 = this.getLong();
this.spartan5000 = this.getLong();
this.spartan10000 = this.getLong();
this.baucuato = this.getLong();
this.huTX = this.getLong();
this.txTai = this.getLong();
this.txXiu = this.getLong();
this.caoThap1000 = this.getLong();
this.caoThap10000 = this.getLong();
this.caoThap50000 = this.getLong();
this.caoThap100000 = this.getLong();
this.caoThap500000 = this.getLong();
}
};
t.ResUpdateBauCuaJackpots = class extends s.default {
constructor(t) {
super(t);
this.baucuato = 0;
this.txHu = 0;
this.txTai = 0;
this.txXiu = 0;
this.baucuato = this.getLong();
this.txHu = this.getLong();
this.txTai = this.getLong();
this.txXiu = this.getLong();
}
};
t.ResNotifyNoHu = class extends s.default {
constructor(t) {
super(t);
this.username = "";
this.type = 0;
this.totalPrizes = 0;
this.gamename = "";
this.username = this.getString();
this.type = this.getByte();
this.totalPrizes = this.getLong();
this.gamename = this.getString();
}
};
t.ResUpdateTXJackpots = class extends s.default {
constructor(t) {
super(t);
this.txHu = 0;
this.txTai = 0;
this.txXiu = 0;
this.txHu = this.getLong();
this.txTai = this.getLong();
this.txXiu = this.getLong();
}
};
t.ResUpdateTXMD5Jackpots = class extends s.default {
constructor(t) {
super(t);
this.moneyHu = 0;
this.moneyTai = 0;
this.moneyXiu = 0;
this.moneyHu = this.getLong();
this.moneyTai = this.getLong();
this.moneyXiu = this.getLong();
}
};
t.ReqGetMoneyUse = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.GET_MONEY_USE);
this.packHeader();
this.updateSize();
}
};
t.ResGetMoneyUse = class extends s.default {
constructor(t) {
super(t);
this.moneyUse = 0;
this.moneyUse = this.getLong();
}
};
t.ReqSubcribeHallSlot = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.SUBCRIBE_HALL_SLOT);
this.packHeader();
this.updateSize();
}
};
t.ReqUnSubcribeHallSlot = class extends o.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.UNSUBCRIBE_HALL_SLOT);
this.packHeader();
this.updateSize();
}
};
t.ResUpdateJackpotSlots = class extends s.default {
constructor(t) {
super(t);
this.pots = "";
this.pots = this.getString();
}
};
t.ReqCashoutCard = class extends o.default {
constructor(t, i, s) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.CASHOUT_CARD);
this.packHeader();
this.putString(t);
this.putInt(i);
this.putInt(s);
this.putString(n.default.App.secretCode);
this.updateSize();
}
};
t.ResCashoutCard = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoney = 0;
this.listCard = "";
this.error = this.getError();
this.currentMoney = this.getLong();
this.listCard = this.getString();
}
};
t.ReqCashoutBank = class extends o.default {
constructor(t, i, s, o) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.CASHOUT_BANK);
this.packHeader();
this.putString(t);
this.putString(i);
this.putString(s);
this.putInt(o);
this.putString(n.default.App.secretCode);
this.updateSize();
}
};
t.ResCashoutBank = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoney = 0;
this.error = this.getError();
this.currentMoney = this.getLong();
}
};
t.ReqCashoutMomo = class extends o.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.CASHOUT_MOMO);
this.packHeader();
this.putString(t);
this.putInt(i);
this.updateSize();
}
};
t.ResCashoutMomo = class extends s.default {
constructor(t) {
super(t);
this.error = 0;
this.currentMoney = 0;
this.error = this.getError();
this.currentMoney = this.getLong();
}
};
t.ResLoginOtherDevice = class extends s.default {
constructor(t) {
super(t);
this.text = "";
this.text = this.getString();
}
};
})(r = i.cmd || (i.cmd = {}));
i.default = r;
cc._RF.pop();
}, {
"../../scripts/common/Configs": "Configs",
"../../scripts/networks/Network.InPacket": "Network.InPacket",
"../../scripts/networks/Network.OutPacket": "Network.OutPacket"
} ],
"MauBinh.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9cea3PCzAVJJaplwxW6jG21", "MauBinh.NetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkClient"), o = t("./Network.NetworkListener"), n = t("../common/Configs");
class r extends s.default {
constructor() {
super();
this.listeners = new Array();
this.isUseWSS = n.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new r());
return this.instance;
}
connect() {
super.connect(n.default.App.HOST_BINH.host, n.default.App.HOST_BINH.port);
}
onOpen(t) {
super.onOpen(t);
cc.log("MB connect");
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
}
addListener(t, e) {
this.listeners.push(new o.default(e, t));
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
}
i.default = r;
cc._RF.pop();
}, {
"../common/Configs": "Configs",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
MiniGameNetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c72820K6yBNJaQ7FqwxoK9G", "MiniGameNetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkClient"), o = t("./Network.NetworkListener"), n = t("../common/Configs"), r = t("./Network.InPacket"), a = t("./Network.Cmd"), c = t("../common/App");
class l extends s.default {
constructor() {
super();
this.listeners = new Array();
this.isLogin = !1;
this.onLogined = null;
this.intervalPing = -1;
this.isUseWSS = n.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new l());
return this.instance;
}
checkConnect(t = null) {
this.onLogined = t;
null != this.ws && this.ws.readyState == WebSocket.CONNECTING || (this.isConnected() ? this.isLogin && null != this.onLogined && this.onLogined() : this.connect());
}
onError(t) {
c.default.instance.showLoading(!1);
console.log("onError minigame");
}
connect() {
super.connect(n.default.App.HOST_MINIGAME.host, n.default.App.HOST_MINIGAME.port);
}
onOpen(t) {
super.onOpen(t);
this.send(new a.default.SendLogin(n.default.Login.Nickname, n.default.Login.AccessToken));
console.log("minigame connected");
this.intervalPing = setInterval(() => this.ping(), 1);
this.ping();
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
switch (new r.default(e).getCmdId()) {
case a.default.Code.LOGIN:
this.isLogin = !0;
if (null != this.onLogined) {
console.log("Logined");
this.onLogined();
}
}
}
addListener(t, e) {
this.listeners.push(new o.default(e, t));
}
onClose(t) {
console.log("onclose minigame");
super.onClose(t);
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
sendCheck(t) {
this.checkConnect(() => {
this.send(t);
});
}
ping() {
null != this.ws && this.ws.readyState !== WebSocket.OPEN && console.log("WebSocket minigame instance wasn't ready...");
}
}
i.default = l;
cc._RF.pop();
}, {
"../common/App": "App",
"../common/Configs": "Configs",
"./Network.Cmd": "Network.Cmd",
"./Network.InPacket": "Network.InPacket",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
MiniGame: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c0443y5h9NOK63Ba/g4+JDh", "MiniGame");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
var r;
(function(t) {
let e = class extends cc.Component {
constructor() {
super(...arguments);
this.gamePlay = null;
}
onLoad() {
this.gamePlay.on(cc.Node.EventType.TOUCH_START, () => {
this.reOrder();
}, this);
}
reOrder() {
for (var t = 0, e = 0; e < this.node.parent.childrenCount; e++) {
let i = this.node.parent.children[e];
i != this.node && (i.zIndex = t++);
}
this.node.zIndex = t++;
}
show() {
this.reOrder();
this.node.active = !0;
this.gamePlay.stopAllActions();
this.gamePlay.scale = 0;
this.gamePlay.runAction(cc.sequence(cc.scaleTo(.3, 1), cc.callFunc(() => {
this._onShowed();
})));
}
_onShowed() {}
dismiss() {
this.gamePlay.stopAllActions();
this.gamePlay.runAction(cc.sequence(cc.scaleTo(.3, 0), cc.callFunc(() => {
this._onDismissed();
})));
}
_onDismissed() {
this.node.destroy();
}
actSetTransparent(t) {
let e = t;
this.gamePlay.children.forEach(t => {
-1 === e.indexOf(t.name) && (t.opacity = 120);
});
}
};
s([ n(cc.Node) ], e.prototype, "gamePlay", void 0);
e = s([ o ], e);
t.MiniGame = e;
})(r || (r = {}));
i.default = r.MiniGame;
cc._RF.pop();
}, {} ],
MusicPlayer: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "eb2ba88vSRA4Ico44Ynf5qA", "MusicPlayer");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const n = t("./GameConfigManager"), r = t("./StringUtils"), {ccclass: a, property: c} = cc._decorator;
let l = s = class extends cc.Component {
constructor() {
super(...arguments);
this.isLostFocus = !1;
this.countTimeCheckMusic = !1;
this.onPlayMusic = !1;
this.loopEffectId = -1;
this.currEffectId = -1;
this.pathEffectLoop = "";
}
onLoad() {
s._instance = this;
}
static getInstance() {
null == this._instance && (this._instance = new s());
return this._instance;
}
playEffectLoop(t) {
if (0 != n.default.getInstance().enableSound) {
this.pathEffectLoop = t;
cc.loader.loadRes(t, cc.AudioClip, this.playEffectWhenLoadDoneLoop.bind(this));
}
}
playEffectWhenLoadDoneLoop(t, e) {
t || (this.loopEffectId = cc.audioEngine.playEffect(e, !0));
}
playEffect(t, e = !1) {
!r.default.isNullOrEmpty(t) && n.default.getInstance().enableSound && cc.loader.loadRes(t, cc.AudioClip, this.playEffectWhenLoadDone.bind(this));
}
playEffectWhenLoadDone(t, e) {
t || cc.audioEngine.playEffect(e, !1);
}
playEffectWhenLoadDoneWithId(t, e) {}
};
l._instance = null;
l = s = o([ a ], l);
i.default = l;
cc._RF.pop();
}, {
"./GameConfigManager": "GameConfigManager",
"./StringUtils": "StringUtils"
} ],
"Network.Cmd": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9a77535BDFPdLDe/ez3AIxH", "Network.Cmd");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.cmd = void 0;
const s = t("./Network.OutPacket");
var o;
(function(t) {
class e {}
e.LOGIN = 1;
t.Code = e;
t.Login = class extends s.default {
constructor() {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.LOGIN);
}
putData(t, e) {
this.packHeader();
this.putString(t);
this.putString(e);
this.updateSize();
}
};
t.SendLogin = class extends s.default {
constructor(t, i) {
super();
this.initData(100);
this.setControllerId(1);
this.setCmdId(e.LOGIN);
this.packHeader();
this.putString(t);
this.putString(i);
this.updateSize();
}
};
})(o = i.cmd || (i.cmd = {}));
i.default = o;
cc._RF.pop();
}, {
"./Network.OutPacket": "Network.OutPacket"
} ],
"Network.InPacket": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "851d2yV2EVGOayct/dVBmpt", "Network.InPacket");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.default = class {
constructor(t) {
this._pos = 0;
this._data = new Uint8Array(0);
this._length = 0;
this._controllerId = 0;
this._cmdId = 0;
this._error = 0;
this.init(t);
}
init(t) {
this._pos = 0;
this._data = t;
this._length = t.length;
this._controllerId = this.parseByte();
this._cmdId = this.getShort();
this._error = this.parseByte();
}
getCmdId() {
return this._cmdId;
}
getControllerId() {
return this._controllerId;
}
getError() {
return this._error;
}
parseByte() {
return this._data[this._pos++];
}
getByte() {
return this.parseByte();
}
getBool() {
return 0 < this._data[this._pos++];
}
getBytes(t) {
for (var e = [], i = 0; i < t; i++) e.push(this.parseByte());
return e;
}
getShort() {
if (this._pos + 2 > this._length) return 0;
var t = (this.parseByte() << 8) + (255 & this.parseByte());
return 32767 < t ? t - 65536 : t;
}
getUnsignedShort() {
return ((255 & this.parseByte()) << 8) + ((255 & this.parseByte()) << 0);
}
getInt() {
return ((255 & this.parseByte()) << 24) + ((255 & this.parseByte()) << 16) + ((255 & this.parseByte()) << 8) + ((255 & this.parseByte()) << 0);
}
byteArrayToLong(t) {
var e = !0, i = 0, s = 0;
255 == t[0] && (e = !1);
if (e) for (s = 0; 8 > s; s++) i = 256 * i + t[s]; else {
for (s = i = 1; 7 >= s; s++) i = 256 * i - t[s];
i = -i;
}
return i;
}
getLong() {
for (var t = [], e = 0; 8 > e; e++) t[e] = this.parseByte();
return this.byteArrayToLong(t);
}
getDouble() {
for (var t = new ArrayBuffer(8), e = new Uint8Array(t), i = 7; 0 <= i; i--) e[7 - i] = this.parseByte();
return new DataView(t).getFloat64(0);
}
getCharArray() {
var t = this.getUnsignedShort();
return this.getBytes(t);
}
getString() {
for (var t = this.getCharArray(), e = new Uint8Array(t.length), i = 0; i < t.length; i++) e[i] = parseInt(t[i], 10);
var s = String.fromCharCode.apply(null, e);
return decodeURIComponent(escape(s));
}
clean() {}
};
cc._RF.pop();
}, {} ],
"Network.NetworkClient": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d02d3/cUfVJtbLRo2vAnsLe", "Network.NetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkListener"), o = t("../common/Configs");
i.default = class {
constructor() {
this.ws = null;
this.host = "";
this.port = 0;
this.isForceClose = !1;
this.isUseWSS = !1;
this.isAutoReconnect = !0;
this._onOpenes = [];
this._onCloses = [];
}
connect(t, e) {
this.isForceClose = !1;
this.host = t;
this.port = e;
if (null == this.ws) {
if (this.isUseWSS) if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
let e = cc.url.raw("resources/raw/cacert.pem");
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
this.ws = new WebSocket(`wss://${o.default.App.DOMAIN}/socket-client/${t}`, null, e);
} else this.ws = new WebSocket(`wss://${o.default.App.DOMAIN}/socket-client/${t}`); else this.ws = new WebSocket(`ws://${o.default.App.DOMAIN}/socket-client/${t}`);
this.ws.binaryType = "arraybuffer";
this.ws.onopen = this.onOpen.bind(this);
this.ws.onmessage = this.onMessage.bind(this);
this.ws.onerror = this.onError.bind(this);
this.ws.onclose = this.onClose.bind(this);
} else if (this.ws.readyState !== WebSocket.OPEN) {
this.ws.close();
this.ws = null;
this.connect(t, e);
}
}
onOpen(t) {
console.log("onOpen");
for (var e = 0; e < this._onOpenes.length; e++) {
var i = this._onOpenes[e];
if (i.target && i.target instanceof Object && i.target.node) i.callback(null); else {
this._onOpenes.splice(e, 1);
e--;
}
}
}
onMessage(t) {}
onError(t) {
console.log("onError");
}
onClose(t) {
console.log("onClose");
for (var e = 0; e < this._onCloses.length; e++) {
var i = this._onCloses[e];
if (i.target && i.target instanceof Object && i.target.node) i.callback(null); else {
this._onCloses.splice(e, 1);
e--;
}
}
this.isAutoReconnect && !this.isForceClose && setTimeout(() => {
this.isForceClose || this.connect(this.host, this.port);
}, 2e3);
}
addOnOpen(t, e) {
this._onOpenes.push(new s.default(e, t));
}
addOnClose(t, e) {
this._onCloses.push(new s.default(e, t));
}
close() {
this.isForceClose = !0;
if (this.ws) {
this.ws.close();
this.ws = null;
}
}
isConnected() {
return !!this.ws && this.ws.readyState == WebSocket.OPEN;
}
};
cc._RF.pop();
}, {
"../common/Configs": "Configs",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
"Network.NetworkListener": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "05be0BVFnFFQJR9M4lLsiVt", "Network.NetworkListener");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.default = class {
constructor(t, e) {
this.target = t;
this.callback = e;
}
};
cc._RF.pop();
}, {} ],
"Network.OutPacket": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "aad90ZGA2pCGbMidoqrmj74", "Network.OutPacket");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./PacketHeaderAnalyze");
class o {
constructor() {
this._controllerId = 1;
this._cmdId = 0;
this._data = new Array();
this._capacity = new Array();
this._length = 0;
this._pos = 0;
this._isPackedHeader = !1;
}
setCmdId(t) {
this._cmdId = t;
}
setControllerId(t) {
this._controllerId = t;
}
initData(t) {
this._data = [ t ];
this._capacity = t;
}
reset() {
this._length = this._pos = 0;
this._isPackedHeader = !1;
}
packHeader() {
if (!this._isPackedHeader) {
this._isPackedHeader = !0;
var t = s.default.genHeader(!1, !1);
this.putByte(t);
this.putUnsignedShort(this._length);
this.putByte(this._controllerId);
this.putShort(this._cmdId);
}
}
putByte(t) {
this._data[this._pos++] = t;
this._length = this._pos;
return this;
}
putByteArray(t) {
this.putShort(t.length);
this.putBytes(t);
return this;
}
putBytes(t) {
for (var e = 0; e < t.length; e++) this.putByte(t[e]);
return this;
}
putShort(t) {
this.putByte(t >> 8 & 255);
this.putByte(t >> 0 & 255);
return this;
}
putUnsignedShort(t) {
this.putByte(t >> 8);
this.putByte(t >> 0);
return this;
}
putInt(t) {
this.putByte(t >> 24 & 255);
this.putByte(t >> 16 & 255);
this.putByte(t >> 8 & 255);
this.putByte(t >> 0 & 255);
return this;
}
putLong(t) {
0 > t && cc.log("hahaha");
for (var e = [], i = 0; 8 > i; i++) e[i] = 255 & t, t = Math.floor(t / 256);
for (t = 7; 0 <= t; t--) this.putByte(e[t]);
}
putDouble(t) {
this.putByte(t >> 24 & 255);
this.putByte(t >> 16 & 255);
this.putByte(t >> 8 & 255);
this.putByte(t >> 0 & 255);
this.putByte(t >> 24 & 255);
this.putByte(t >> 16 & 255);
this.putByte(t >> 8 & 255);
this.putByte(t >> 0 & 255);
return this;
}
putString(t) {
this.putByteArray(this._stringConvertToByteArray(t));
return this;
}
updateUnsignedShortAtPos(t, e) {
this._data[e] = t >> 8;
this._data[e + 1] = t >> 0;
}
updateSize() {
this.updateUnsignedShortAtPos(this._length - 3, o.INDEX_SIZE_PACKET);
}
getData() {
return this._data.slice(0, this._length);
}
_stringConvertToByteArray(t) {
if (null == t) return null;
for (var e = new Uint8Array(t.length), i = 0; i < t.length; i++) e[i] = t.charCodeAt(i);
return e;
}
clean() {}
}
i.default = o;
o.INDEX_SIZE_PACKET = 1;
cc._RF.pop();
}, {
"./PacketHeaderAnalyze": "PacketHeaderAnalyze"
} ],
NodeScaler: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "47b78nTZ65Nkozgov27lpvd", "NodeScaler");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.designResolution = new cc.Size(1280, 720);
this.fitX = !1;
this.fitY = !1;
this.lastWitdh = 0;
this.lastHeight = 0;
this.canvas = null;
}
start() {
this.canvas = this.getCanvas();
this.updateSize();
}
update(t) {
this.updateSize();
}
updateSize() {
var t = cc.view.getFrameSize();
if (this.lastWitdh !== t.width || this.lastHeight !== t.height) {
this.lastWitdh = t.width;
this.lastHeight = t.height;
if (null != this.canvas && this.fitX && !this.fitY) this.node.scaleX = this.canvas.designResolution.width / this.designResolution.width; else if (null != this.canvas && this.fitY && !this.fitX) this.node.scaleY = this.canvas.designResolution.height / this.designResolution.height; else {
var e = t.width / t.height, i = this.designResolution.width / this.designResolution.height;
this.designResolution.width / this.designResolution.height > t.width / t.height ? this.node.setScale(i / e) : this.node.setScale(e / i);
}
}
}
getCanvas(t = null) {
null == t && (t = this.node);
if (null != t.parent) {
let e = t.parent.getComponent(cc.Canvas);
return null != e ? e : this.getCanvas(t.parent);
}
return null;
}
};
s([ n ], r.prototype, "designResolution", void 0);
s([ n ], r.prototype, "fitX", void 0);
s([ n ], r.prototype, "fitY", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
NodeUtils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e334ffhhSBKlZwInK310OZC", "NodeUtils");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.common = void 0;
var s;
(function(t) {
t.NodeUtils = class {
static getChildNode(t, ...e) {
if (null === t) return;
let i = t;
for (let t = 0; t < e.length; t++) i = i.getChildByName(e[t]);
return i;
}
static setNodeLabel(t, e) {
null !== t && (t.getComponent(cc.Label).string = e);
}
static activeNode(t) {
null !== t && (t.active = !0);
}
static disableNode(t) {
null !== t && (t.active = !1);
}
static setNodeColorFromHex(t, e) {
t.color = cc.Color.BLACK.fromHEX(e);
}
static setNodeColor(t, e) {
t.color = e;
}
static setSpriteFrame(t, e) {
if (null !== t && null !== e) try {
t.getComponent(cc.Sprite).spriteFrame = e;
} catch (t) {
console.log("NodeUtils.setSpriteFrame" + t.message);
}
}
static setAnimation(t, e, i) {
try {
t.getComponent(sp.Skeleton).setAnimation(0, e, i);
} catch (t) {
console.log("NodeUtils.setAnimation" + t.message);
}
}
static reverseNodeByX(t) {
null !== t && cc.tween(t).to(.1, {
position: cc.v2(-t.x, t.y)
}).start();
}
};
})(s = i.common || (i.common = {}));
i.default = s.NodeUtils;
cc._RF.pop();
}, {} ],
PacketHeaderAnalyze: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "20c46EIfchK67TjWzmS1EFh", "PacketHeaderAnalyze");
Object.defineProperty(i, "__esModule", {
value: !0
});
var s;
(function(t) {
class e {
static getDataSize(t) {
return this.isBigSize(t) ? this.getIntAt(t, this.BYTE_PACKET_SIZE_INDEX) : this.getUnsignedShortAt(t, this.BYTE_PACKET_SIZE_INDEX);
}
static getCmdIdFromData(t) {
return this.getShortAt(t, 1);
}
static isBigSize(t) {
return this.getBit(t[0], this.BIT_IS_BIG_SIZE_INDEX);
}
static isCompress(t) {
return this.getBit(t[0], this.BIT_IS_COMPRESS_INDEX);
}
static getValidSize(t) {
var e = 0, i = 0;
if (this.isBigSize(t)) {
if (length < this.BIG_HEADER_SIZE) return -1;
e = this.getIntAt(t, this.BYTE_PACKET_SIZE_INDEX);
i = this.BIG_HEADER_SIZE;
} else {
if (length < this.NORMAL_HEADER_SIZE) return -1;
e = this.getUnsignedShortAt(t, this.BYTE_PACKET_SIZE_INDEX);
i = this.NORMAL_HEADER_SIZE;
}
return e + i;
}
static getBit(t, e) {
return 0 != (t & 1 << e);
}
static genHeader(t, e) {
var i;
i = this.setBit(0, 7, !0);
i = this.setBit(i, 6, !1);
i = this.setBit(i, 5, e);
i = this.setBit(i, 4, !0);
return this.setBit(i, 3, t);
}
static setBit(t, e, i) {
return i ? t | 1 << e : t & ~(1 << e);
}
static getIntAt(t, e) {
return ((255 & t[e]) << 24) + ((255 & t[e + 1]) << 16) + ((255 & t[e + 2]) << 8) + ((255 & t[e + 3]) << 0);
}
static getUnsignedShortAt(t, e) {
return ((255 & t[e]) << 8) + ((255 & t[e + 1]) << 0);
}
static getShortAt(t, e) {
return (t[e] << 8) + (255 & t[e + 1]);
}
}
e.BIT_IS_BINARY_INDEX = 7;
e.BIT_IS_ENCRYPT_INDEX = 6;
e.BIT_IS_COMPRESS_INDEX = 5;
e.BIT_IS_BLUE_BOXED_INDEX = 4;
e.BIT_IS_BIG_SIZE_INDEX = 3;
e.BYTE_PACKET_SIZE_INDEX = 1;
e.BIG_HEADER_SIZE = 5;
e.NORMAL_HEADER_SIZE = 3;
t.PacketHeaderAnalyze = e;
})(s || (s = {}));
i.default = s.PacketHeaderAnalyze;
cc._RF.pop();
}, {} ],
Popup: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "47366tf4XxMvLM79OAQBavr", "Popup");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this._animation = null;
}
onLoad() {
this._animation = this.node.getComponent(cc.Animation);
}
onEnable() {
this.runActionOpen();
}
onClose() {
this.runActionClose();
this.scheduleOnce(() => {
this.node.destroy();
}, .35);
}
runActionOpen() {
this.node.getChildByName("Container").scale = 0;
this.node.getChildByName("Container").runAction(cc.sequence(cc.scaleTo(.27, 1.1), cc.scaleTo(.06, 1)));
}
runActionClose() {
this.node.getChildByName("Container").runAction(cc.sequence(cc.scaleTo(.06, 1.2), cc.scaleTo(.27, 0), cc.callFunc(() => {
this.node.destroy();
})));
}
};
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
Random: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "91ce7IUkVVEnqpB8EDSDCVI", "Random");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class {
static range(t, e) {
return Math.random() * (e - t) + t;
}
static rangeInt(t, e) {
t = Math.ceil(t);
e = Math.floor(e);
return Math.floor(Math.random() * (e - t)) + t;
}
};
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
RollerControllerB52: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "95bc43ppu5HTLQxutUme7Op", "RollerControllerB52");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./ColumnControllerB52");
var n = t("../Utils").common.Utils;
const r = t("../game/MusicPlayer"), a = t("./ItemController"), {ccclass: c, property: l} = cc._decorator;
let h = class extends cc.Component {
constructor() {
super(...arguments);
this.columnPrefab = null;
this.textureAtlas = null;
this.maxCountItem = 10;
this.width = 930;
this.itemCount = 12;
this.ItemSpriteFramePrefix = "symbol_";
this.ImageSpriteBlurFramePrefix = "symbol_blur_";
this.sizeScaleOrigin = 1;
this.pathStopRoll = "Sounds/FAF/roll_stop";
this.isGameBigCityBoy = !1;
this.columnCount = 5;
this.rowCount = 3;
this.startImageIndex = 0;
this.imagePrefix = "1_";
this.onRollDone = null;
this.stopping = !1;
this._listNodeColumn = [];
this.gameController = null;
this.rolling = !1;
this.isStopImmediately = !1;
this.isCheaetName = !1;
}
start() {
let t = -this.width / 2 + this.width / this.columnCount / 2;
for (let e = 0; e < this.columnCount; e++) {
let i = cc.instantiate(this.columnPrefab);
i.x = t;
i.y = 0;
this.node.addChild(i);
this._listNodeColumn.push(i);
t += this.width / this.columnCount;
let s = i.getComponent(o.default);
if (o.default) {
s.columnID = e + 1;
s.isLastColumn = !1;
}
e === this.columnCount - 1 && (s.isLastColumn = !0);
}
this.setItemsRandom(!1, this.imagePrefix);
}
setItemsRandom(t = !1, e = "1_") {
this.imagePrefix = e;
for (let t = 0; t < this.columnCount; t++) {
let e = this._listNodeColumn[t].getComponent(o.default);
e.setItems(this.getRandomNameItem(this.itemCount, e.numRow, e.columnID), this.imagePrefix);
}
}
setGameController(t) {
this.gameController = t;
}
setResultFreeSpin(t) {
this.imagePrefix = t;
for (let t = 0; t < this.columnCount; t++) this._listNodeColumn[t].getComponent(o.default).setResultFreeSpin(this.imagePrefix);
}
showExpandWild() {
if (0 !== this.imagePrefix.localeCompare("0_")) for (let t = 0; t < this.columnCount; t++) {
let e = this._listNodeColumn[t].getComponent(o.default);
if (e.isExpandWild) {
e.isExpandWild = !1;
if (this.gameController && this.gameController.expWild[t]) {
this.gameController.expWild[t].active = !0;
this.gameController.expWild[t].scale = 0;
this.gameController.expWild[t].y = 0;
this.gameController.expWild[t].stopAllActions();
this.gameController.expWild[t].runAction(cc.scaleTo(.25, 1).easing(cc.easeBackOut()));
}
}
}
}
getRandomNameItem(t, e = 3, i = 0) {
let s = [];
for (;s.length < t - e; ) {
let t = n.randomRangeInt(this.startImageIndex, this.maxCountItem), e = "";
if (1 == i || 5 == i) do {
t = n.randomRangeInt(this.startImageIndex, this.maxCountItem);
} while (2 == t);
if (this.isGameBigCityBoy) if (2 == t) {
if (0 !== this.imagePrefix.localeCompare("0_")) switch (i) {
case 2:
e = `${this.imagePrefix}21`;
break;

case 3:
e = `${this.imagePrefix}22`;
break;

case 4:
e = `${this.imagePrefix}23`;
}
} else e = `${this.imagePrefix}${t}`; else e = `${this.imagePrefix}${t}`;
s.push(e);
}
for (let t = 0; t < e; t++) s.push(s[t]);
return s;
}
getItemSpriteFrame(t) {
return this.textureAtlas.getSpriteFrame(this.ItemSpriteFramePrefix + t);
}
getItemBlurSpriteFrame(t) {
return this.textureAtlas.getSpriteFrame(this.ImageSpriteBlurFramePrefix + t);
}
roll(t = !1, e = !1) {
for (let i = 0; i < this.columnCount; i++) this.node.children[i].getComponent(o.default).roll(t, e);
this.rolling = !0;
}
stop(t = !1) {
let e = !1;
if (!this.stopping) {
for (let t = 0; t < this.columnCount; t++) if (this.node.children[t].getNumberOfRunningActions() > 0) {
e = !0;
break;
}
if (e) {
this.stopping = !0;
if (t) for (let t = 0; t < this.columnCount; t++) {
t === this.columnCount - 1 ? this.node.children[t].getComponent(o.default).onRollDone = () => {
this.rolling = !1;
this.stopping = !1;
null != this.onRollDone && this.onRollDone();
} : this.node.children[t].getComponent(o.default).onRollDone = () => {};
this.node.children[t].getComponent(o.default).stop();
} else {
let t = 0;
for (let e = 0; e < this.columnCount; e++) this.node.children[e].getComponent(o.default).onRollDone = () => {
if (t < this.columnCount - 1) {
t++;
this.node.children[t].getComponent(o.default).stop();
} else if (t == this.columnCount - 1) {
this.rolling = !1;
this.stopping = !1;
if (null != this.onRollDone) {
this.onRollDone();
-1 !== r.default.getInstance().loopEffectId && cc.audioEngine.stopEffect(r.default.getInstance().loopEffectId);
}
}
};
this.node.children[0].getComponent(o.default).stop();
}
} else null != this.onRollDone && this.onRollDone();
}
}
stopImmediately() {
if (!this.isStopImmediately) {
this.isStopImmediately = !0;
for (let t = 0; t < this.columnCount; t++) {
let e = this.node.children[t].getComponent(o.default);
e.isMuteColumnDone = !0;
t == this.columnCount - 1 ? e.onRollDone = () => {
this.rolling = !1;
this.stopping = !1;
this.isStopImmediately = !1;
if (this.onRollDone) {
this.onRollDone();
r.default.getInstance().playEffect(this.pathStopRoll);
}
} : e.onRollDone = null;
e.isStop && e.stop();
}
}
}
stopAllColumn() {
for (let t = 0; t < this.columnCount; t++) this.node.children[t].getComponent(o.default).forceStop();
this.rolling = !1;
this.stopping = !1;
this.isStopImmediately = !1;
}
setResult(t) {
let e = [];
for (let i = 0; i < t.length; i++) {
let s = i % this.columnCount;
e.length === s ? e.push([ t[i] ]) : e[s].push(t[i]);
}
for (let t = 0; t < this.columnCount; t++) {
e[t] = e[t].reverse();
this.node.children[t].getComponent(o.default).setResult(e[t]);
}
}
scaleLineItems(t, e) {
for (let i = 0; i < 3; i++) if (this.node.children[t].getComponent(o.default)._listNodeItem[i].getComponent(a.default)) {
let s = this.node.children[t].getComponent(o.default)._listNodeItem[i];
if (s.getComponent(a.default).id === e) {
s.opacity = 255;
s.scale = this.sizeScaleOrigin;
s.getComponent(a.default).showAnimItem(1.5, !0, !1, this.imagePrefix);
}
}
}
showAllAnim(t) {
for (let e = 0; e < this.columnCount; e++) for (let i = 0; i < 3; i++) if (this.node.children[i].getComponent(o.default)._listNodeItem[e].getComponent(a.default)) {
let s = this.node.children[i].getComponent(o.default)._listNodeItem[e];
s.stopAllActions();
s.scale = this.sizeScaleOrigin;
s.opacity = 255;
s.getComponent(a.default).isStopColumn = !1;
s.getComponent(a.default).showAnimCallBack(t, !1, this.imagePrefix);
}
}
hideAllAnim() {
for (let t = 0; t < this.columnCount; t++) for (let e = 0; e < 3; e++) if (this.node.children[t].getComponent(o.default)._listNodeItem[e].getComponent(a.default)) {
let i = this.node.children[t].getComponent(o.default)._listNodeItem[e];
i.stopAllActions();
i.scale = this.sizeScaleOrigin;
i.getComponent(a.default).hideAnimItem();
i.getComponent(a.default).isStopColumn = !1;
}
}
};
s([ l(cc.Prefab) ], h.prototype, "columnPrefab", void 0);
s([ l(cc.SpriteAtlas) ], h.prototype, "textureAtlas", void 0);
s([ l(cc.Integer) ], h.prototype, "maxCountItem", void 0);
s([ l(cc.Integer) ], h.prototype, "width", void 0);
s([ l(cc.Integer) ], h.prototype, "itemCount", void 0);
s([ l(cc.String) ], h.prototype, "ItemSpriteFramePrefix", void 0);
s([ l(cc.String) ], h.prototype, "ImageSpriteBlurFramePrefix", void 0);
s([ l(cc.Float) ], h.prototype, "sizeScaleOrigin", void 0);
s([ l(cc.String) ], h.prototype, "pathStopRoll", void 0);
s([ l(cc.Boolean) ], h.prototype, "isGameBigCityBoy", void 0);
h = s([ c ], h);
i.default = h;
cc._RF.pop();
}, {
"../Utils": "Utils",
"../game/MusicPlayer": "MusicPlayer",
"./ColumnControllerB52": "ColumnControllerB52",
"./ItemController": "ItemController"
} ],
RollerController: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "cbfc640lAJD4qj6wzOIJ+v1", "RollerController");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./ColumnController"), n = t("./ItemController");
var r = t("../Utils").common.Utils;
const a = t("../game/MusicPlayer"), {ccclass: c, property: l} = cc._decorator;
let h = class extends cc.Component {
constructor() {
super(...arguments);
this.columnPrefab = null;
this.textureAtlas = null;
this.itemCount = 12;
this.sizeScaleOrigin = 1;
this.maxCountItem = 10;
this.timeCount = .15;
this.width = 930;
this.isSyncRoll = !1;
this.gameController = null;
this.columnCount = 5;
this.rowCount = 3;
this.startImageIndex = 0;
this.imagePrefix = "1_";
this.ItemSpriteFramePrefix = "symbol_";
this.ItemSpriteFrameBlurPrefix = "symbol_blur_";
this.rolling = !1;
this.onRollDone = null;
this.stopping = !1;
this._listNodeColumn = [];
this.isFast = !1;
this.overrideRollMaxSpeed = 0;
this.temp = 3;
this.tensionBonusFromId = 0;
this.tensionFreeFromId = 0;
}
getItemSpriteFrame(t) {
return this.textureAtlas.getSpriteFrame(this.ItemSpriteFramePrefix + t);
}
getItemBlurSpriteFrame(t) {
return this.textureAtlas.getSpriteFrame(this.ItemSpriteFrameBlurPrefix + t);
}
randomInt(t, e) {
return Math.floor(Math.random() * (e - t + 1)) + t;
}
start() {
this.manualInit();
}
manualInit() {
let t = -this.width / 2 + this.width / this.columnCount / 2;
for (let e = 0; e < this.columnCount; e++) {
let i = cc.instantiate(this.columnPrefab);
i.x = t;
i.y = 0;
this.node.addChild(i);
this._listNodeColumn.push(i);
t += this.width / this.columnCount;
let s = i.getComponent(o.default);
if (s) {
s.columnID = e + 1;
s.isLastColumn = !1;
this.overrideRollMaxSpeed > 0 && (s.maxSpeed = this.overrideRollMaxSpeed);
}
e === this.columnCount - 1 && (s.isLastColumn = !0);
}
this.setItemsRandom(!1, this.imagePrefix);
}
setItemsRandom(t = !1, e = "1_") {
this.imagePrefix = e;
for (let e = 0; e < this.columnCount; e++) this._listNodeColumn[e].getComponent(o.default).setItems(this.getRandomGameItem(this.itemCount), this.imagePrefix, t);
}
getRandomGameItem(t) {
let e = [];
for (let i = 0; i < t - this.temp; i++) {
let t = r.randomRangeInt(this.startImageIndex, this.maxCountItem), i = `${this.imagePrefix}${t}`;
e.push(i);
}
for (let t = 0; t < this.temp; t++) e.push(e[t]);
return e;
}
roll(t) {
this.isFast = t;
this.tensionBonusFromId = 0;
this.tensionFreeFromId = 0;
if (!this.rolling) {
this.rolling = !0;
this.timeCount = .2;
t && (this.timeCount = .05);
this.isSyncRoll && (this.timeCount = 0);
let e = -1;
this.node.stopAllActions();
this.node.runAction(cc.repeat(cc.sequence(cc.callFunc(() => {
e++;
this.node.children[e].getComponent(o.default).roll(t);
e === this.columnCount - 1 && (this.stopping = !1);
}), cc.delayTime(this.timeCount)), this.columnCount));
}
}
stop(t = !1) {
let e = this;
if (t) this.stopAndRollDone(!0); else {
this.isSyncRoll && (this.timeCount = .35);
var i = 0;
this.node.stopAllActions();
this.isSyncRoll || this.isFast ? this.stopAndRollDone() : this.node.runAction(cc.repeat(cc.sequence(cc.callFunc(() => {
if (i >= 2 && (i == this.tensionFreeFromId || i == this.tensionBonusFromId)) {
this.node.stopAllActions();
for (var t = 0, s = function(i) {
t += 2;
e._listNodeColumn[i].getComponent(o.default).tensionRoll(t);
e.activeTension(i, !0);
i === e.columnCount - 1 ? e._listNodeColumn[i].getComponent(o.default).onRollDone = () => {
e.rolling = !1;
e.stopping = !0;
e.onRollDone && e.onRollDone();
e.activeTension(i, !1);
} : e._listNodeColumn[i].getComponent(o.default).onRollDone = () => {
e.activeTension(i, !1);
};
}, n = i; n < this.columnCount; n++) s(n);
} else {
let t = this._listNodeColumn[i].getComponent(o.default);
!this.isFast && this.isSyncRoll && (t.node.y = 0);
t.stop();
i === this.columnCount - 1 ? t.onRollDone = () => {
this.rolling = !1;
this.stopping = !0;
null != this.onRollDone && this.onRollDone();
} : t.onRollDone = null;
i++;
}
}), cc.delayTime(this.timeCount)), this.columnCount));
}
}
stopAndRollDone(t = !1) {
this.node.stopAllActions();
for (let e = 0; e < this.columnCount; e++) {
let i = this._listNodeColumn[e].getComponent(o.default);
t || (i.node.y = 0);
i.stop(t);
e === this.columnCount - 1 ? i.onRollDone = () => {
this.rolling = !1;
this.stopping = !0;
null != this.onRollDone && this.onRollDone();
} : i.onRollDone = null;
}
}
stopAllColumn(t = !1) {
this.node.stopAllActions();
for (let e = 0; e < this.columnCount; e++) this.node.children[e].getComponent(o.default).forceStop(t);
this.rolling = !1;
this.stopping = !0;
}
setResult(t) {
let e = [];
for (let i = 0; i < t.length; i++) {
let s = i % this.columnCount;
e.length === s ? e.push([ t[i] ]) : e[s].push(t[i]);
}
for (let t = 0; t < this.columnCount; t++) {
e[t] = e[t].reverse();
this.node.children[t].getComponent(o.default).setResult(e[t]);
if (this.node.children[t].getComponent(o.default).isTensionBonus && this.tensionBonusFromId < 2) {
this.tensionBonusFromId++;
2 === this.tensionBonusFromId && (this.tensionBonusFromId = t + 1);
}
if (this.node.children[t].getComponent(o.default).isTensionFree && this.tensionFreeFromId < 2) {
this.tensionFreeFromId++;
2 === this.tensionFreeFromId && (this.tensionFreeFromId = t + 1);
}
}
}
hideAllAnim(t = cc.Color.WHITE) {
for (let e = 0; e < this.columnCount; e++) for (let i = 0; i < this.rowCount; i++) if (this.node.children[e].getComponent(o.default)._listNodeItem[i].getComponent(n.default)) {
let s = this.node.children[e].getComponent(o.default)._listNodeItem[i];
s.stopAllActions();
s.scale = this.sizeScaleOrigin;
s.getComponent(n.default).hideAnimItem();
s.getComponent(n.default).isStopColumn = !1;
s.getComponent(n.default).isChangeColor && (s.color = t);
}
}
showAllAnim(t) {
let e = 0;
e = 0 === t ? 100 : t;
for (let t = 0; t < this.columnCount; t++) for (let i = 0; i < this.rowCount; i++) if (this.node.children[i].getComponent(o.default)._listNodeItem[t].getComponent(n.default)) {
let s = this.node.children[i].getComponent(o.default)._listNodeItem[t];
s.stopAllActions();
s.scale = this.sizeScaleOrigin;
s.opacity = 255;
this.node.color = cc.Color.WHITE;
s.getComponent(n.default).isStopColumn = !1;
s.getComponent(n.default).showAnimCallBack(e, !1, this.imagePrefix);
}
}
showExpandWild(t = !1) {
if (0 !== this.imagePrefix.localeCompare("0_")) for (let e = 0; e < this.columnCount; e++) {
let i = this._listNodeColumn[e].getComponent(o.default);
if (i.isExpandWild) {
i.isExpandWild = !1;
if (this.gameController && this.gameController.expWild[e]) {
this.gameController.expWild[e].active = !0;
this.gameController.expWild[e].scale = 0;
t && a.default.getInstance().playEffect("Sounds/nightclub/wild");
this.gameController.expWild[e].stopAllActions();
this.gameController.expWild[e].runAction(cc.scaleTo(.25, 1).easing(cc.easeBackOut()));
}
}
}
}
setGameController(t) {
this.gameController = t;
}
applyScale() {
for (let t = 0; t < this.columnCount; t++) this.node.children[t].getComponent(o.default).setScaleAllItem(this.sizeScaleOrigin);
}
scaleLineItems(t, e, i = -1) {
for (let e = 0; e < 3; e++) this.node.children[t].getComponent(o.default)._listNodeItem[e].getComponent(n.default) && this.node.children[t].getComponent(o.default)._listNodeItem[e];
}
setResultFreeSpin(t) {
this.imagePrefix = t;
for (let e = 0; e < this.columnCount; e++) this._listNodeColumn[e].getComponent(o.default).setResultFreeSpin(t);
}
activeTension(t, e) {
if (this.gameController && this.gameController.listTensionRoll[t]) {
this.gameController.listTensionRoll[t].active = e;
this.tensionBonusFromId >= 2 ? this.gameController.listTensionRoll[t].getComponent(sp.Skeleton).setAnimation(0, "Cam", !0) : this.tensionFreeFromId >= 2 && this.gameController.listTensionRoll[t].getComponent(sp.Skeleton).setAnimation(0, "xanh", !0);
}
}
};
s([ l(cc.Prefab) ], h.prototype, "columnPrefab", void 0);
s([ l(cc.SpriteAtlas) ], h.prototype, "textureAtlas", void 0);
s([ l(cc.Integer) ], h.prototype, "itemCount", void 0);
s([ l(cc.Float) ], h.prototype, "sizeScaleOrigin", void 0);
s([ l(cc.Integer) ], h.prototype, "maxCountItem", void 0);
s([ l(cc.Float) ], h.prototype, "timeCount", void 0);
s([ l(cc.Float) ], h.prototype, "width", void 0);
s([ l(cc.Boolean) ], h.prototype, "isSyncRoll", void 0);
h = s([ c ], h);
i.default = h;
cc._RF.pop();
}, {
"../Utils": "Utils",
"../game/MusicPlayer": "MusicPlayer",
"./ColumnController": "ColumnController",
"./ItemController": "ItemController"
} ],
SPUtils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "59866usg1ZMxINvnUez2Ri1", "SPUtils");
Object.defineProperty(i, "__esModule", {
value: !0
});
var s;
(function(t) {
t.SPUtils = class {
static encode(t, e) {
var i = "";
t.toString();
for (var s = 0; s < t.length; s++) {
var o = t.charCodeAt(s) ^ e;
i += String.fromCharCode(o);
}
return i;
}
static get(t, e = "") {
var i = this.encode(t, 3265812).toString(), s = cc.sys.localStorage.getItem(i);
return s ? s = this.encode(s, 3265812).toString() : e;
}
static set(t, e) {
e = e.toString();
var i = "" + this.encode(t, 3265812), s = "" + this.encode(e, 3265812);
cc.sys.localStorage.setItem(i, s);
}
static setNickName(t) {
this.set("nickname", t);
}
static getNickName() {
return this.get("nickname");
}
static setUserName(t) {
this.set("username", t);
}
static getUserName() {
return this.get("username");
}
static setUserPass(t) {
this.set("userpass", t);
}
static getUserPass() {
return this.get("userpass");
}
static getMusicVolumn() {
return Number(this.get("music_volumn", "1"));
}
static setMusicVolumn(t) {
this.set("music_volumn", t.toString());
}
static getSoundVolumn() {
return Number(this.get("sound_volumn", "1"));
}
static setSoundVolumn(t) {
this.set("sound_volumn", t.toString());
}
};
})(s || (s = {}));
i.default = s.SPUtils;
cc._RF.pop();
}, {} ],
SafeArea: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4b12cY3XOJLrZ3rRqdBm2pM", "SafeArea");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
onLoad() {
if (cc.sys.isNative) {
if (cc.view.getFrameSize().width / cc.view.getFrameSize().height < 1.7) {
this.node.getComponent(cc.Canvas).fitWidth = !0;
this.node.getComponent(cc.Canvas).fitHeight = !1;
} else {
this.node.getComponent(cc.Canvas).fitWidth = !1;
this.node.getComponent(cc.Canvas).fitHeight = !0;
}
cc.sys.getSafeAreaRect();
} else this.node.getComponent(cc.Canvas).fitHeight = !0;
}
};
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
SamNetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "54befXq1/NIeqwcU/H8L6Fx", "SamNetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./CardGameNetworkClient"), o = t("../common/Configs");
class n extends s.default {
static getInstance() {
null == this.instance && (this.instance = new n());
return this.instance;
}
constructor() {
super();
}
_connect() {
super.connect(o.default.App.HOST_SAM.host, o.default.App.HOST_SAM.port);
}
onOpen(t) {
super.onOpen(t);
console.log("sam connected");
}
}
i.default = n;
cc._RF.pop();
}, {
"../common/Configs": "Configs",
"./CardGameNetworkClient": "CardGameNetworkClient"
} ],
SelectChipBetView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "61131J9NTNHpK8682Qfg1sd", "SelectChipBetView");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.btnPrev = null;
this.btnNext = null;
this.zoomScale = .95;
this.normalScale = .8;
this.visibleItem = 4;
this.itemMoney = [ 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6 ];
this._betMoney = this.itemMoney[0];
this._currentCoinSelected = 0;
this._totalStep = 0;
this._currStep = 0;
this._scrollTouchBegin = !1;
this._offsetChip = [];
}
onLoad() {
this._totalStep = this.itemMoney.length - this.visibleItem;
let t = this.node.getComponent(cc.ScrollView), e = t.getMaxScrollOffset().x / this.visibleItem;
for (let t = 0; t < this._totalStep; t++) this._offsetChip[t] = e * t;
t.scrollToLeft(0);
this.selectBetCoin(0);
}
selectBetCoin(t) {
this.btnPrev && (this.btnPrev.interactable = 0 != t);
this.btnNext && (this.btnNext.interactable = t != this.itemMoney.length);
this._betMoney = this.itemMoney[t];
let e = this.node.getChildByName("content");
e.children[t].getComponent(cc.Toggle).isChecked = !0;
for (let t = 0; t < e.children.length; t++) if (e.children[t].getComponent(cc.Toggle).isChecked) {
this._currentCoinSelected = t;
e.children[t].scale = this.zoomScale;
} else e.children[t].scale = this.normalScale;
}
checkScrollOffsetNext() {
let t = this.node.getComponent(cc.ScrollView);
if (this._currentCoinSelected + this._currStep > this._totalStep - 1) {
let e = -1 * t.getScrollOffset().x + t.getMaxScrollOffset().x / this.visibleItem;
t.scrollToOffset(cc.v2(e, 0), .2);
}
}
checkScrollOffsetPrev() {
let t = this.node.getComponent(cc.ScrollView);
if (this._currentCoinSelected < this._currStep) {
let e = -1 * t.getScrollOffset().x - t.getMaxScrollOffset().x / this.visibleItem;
t.scrollToOffset(cc.v2(e, 0), .2);
}
}
onScrollChip(t, e) {
if (e == cc.ScrollView.EventType.SCROLL_BEGAN) this._scrollTouchBegin = !0; else if (e == cc.ScrollView.EventType.SCROLL_ENDED) {
let e = -1 * t.getScrollOffset().x, i = this._offsetChip.reduce(function(t, i) {
return Math.abs(i - e) < Math.abs(t - e) ? i : t;
});
this._currStep = this._offsetChip.indexOf(i);
this._currentCoinSelected < this._currStep ? this.selectBetCoin(this._currStep) : this.selectBetCoin(this._currStep + this._totalStep - 1);
if (!this._scrollTouchBegin) return;
t.scrollToOffset(cc.v2(i, 0), .2);
this._scrollTouchBegin = !1;
}
}
onTogglePress(t, e) {
t.currentTarget = t.node;
this.onBtnPress(t, e);
}
onBtnPress(t, e) {
if (t.currentTarget.name.includes("btn_chip")) {
let t = parseInt(e);
this.selectBetCoin(t);
} else switch (t.currentTarget.name) {
case "btnPrev":
this._currentCoinSelected--;
this._currentCoinSelected < 0 && (this._currentCoinSelected = 0);
this.selectBetCoin(this._currentCoinSelected);
this.checkScrollOffsetPrev();
break;

case "btnNext":
this._currentCoinSelected++;
this._currentCoinSelected > this.itemMoney.length - 1 && (this._currentCoinSelected = this.itemMoney.length - 1);
this.selectBetCoin(this._currentCoinSelected);
this.checkScrollOffsetNext();
}
}
};
s([ n(cc.Button) ], r.prototype, "btnPrev", void 0);
s([ n(cc.Button) ], r.prototype, "btnNext", void 0);
s([ n(cc.Float) ], r.prototype, "zoomScale", void 0);
s([ n(cc.Float) ], r.prototype, "normalScale", void 0);
s([ n(cc.Integer) ], r.prototype, "visibleItem", void 0);
s([ n([ cc.Integer ]) ], r.prototype, "itemMoney", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
ShootFishNetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "67b32TSLuBDyITpP+LjS3tz", "ShootFishNetworkClient");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const n = t("../../scripts/common/Configs"), r = t("../common/App"), {ccclass: a, property: c} = cc._decorator;
class l {
constructor(t, e) {
this.target = t;
this.callback = e;
}
}
class h {
constructor(t, e) {
this.target = t;
this.callback = e;
}
}
class u {
constructor(t, e) {
this.target = t;
this.callback = e;
}
}
let d = s = class {
constructor() {
this.isUseWSS = n.default.App.USE_WSS;
this.isAutoReconnect = !0;
this.ws = null;
this.host = n.default.App.HOST_SHOOT_FISH.host;
this.port = n.default.App.HOST_SHOOT_FISH.port;
this.isForceClose = !1;
this.onOpenes = [];
this.onCloses = [];
this.xorKey = "dmVyeSBzZWNyZXQ";
this.requests = new Object();
this.intervalPing = -1;
this.timeout = 0;
this.timeoutInterval = -1;
this.listeners = new Array();
this.isLogining = !1;
this.isLogined = !1;
this.onLogined = null;
}
static serverCurrentTimeMillis() {
return Date.now() - this.TIME_DISTANCE + Math.round(s.MIN_PING / 2);
}
static systemCurrentTimeMillis() {
return Date.now();
}
static getInstance() {
null == this.instance && (this.instance = new s());
return this.instance;
}
checkConnect(t) {
this.onLogined = t;
this.isConnected() ? this.isLogined ? this.onLogined(this.isLogined) : this.login() : this.connect();
}
login() {
if (!this.isLogining) {
this.isLogining = !0;
this.request("xxenglogin", {
username: n.default.Login.Username,
password: md5(n.default.Login.Password),
platform: n.default.App.getPlatformName()
}, t => {
this.isLogining = !1;
r.default.instance.showLoading(!1);
if (t.ok) {
this.isLogined = !0;
n.default.Login.CoinFish = t.cash;
n.default.Login.UsernameFish = t.username;
n.default.Login.PasswordFish = t.password;
n.default.Login.UserIdFish = t.userId;
n.default.Login.FishConfigs = t.config;
null != this.onLogined && this.onLogined(!0);
} else null != this.onLogined && this.onLogined(!1);
}, s.NODE_FIXED);
}
}
onOpen(t) {
this.intervalPing = setInterval(() => this.ping(), 1500);
this.timeoutInterval = setInterval(() => {
this.timeout += 1;
this.timeout >= 5 && this.close();
}, 1e3);
this.ping();
for (let t = 0; t < this.onOpenes.length; t++) {
let e = this.onOpenes[t];
if (e.target && e.target instanceof Object && e.target.node) e.callback(); else {
this.onOpenes.splice(t, 1);
t--;
}
}
null != this.onLogined && this.login();
}
onMessage(t) {
let e = new Uint8Array(t.data);
e = this.doXOR(e, 0, e.length);
let i = msgpack.decode(e);
if (i.hasOwnProperty("msgId")) if (0 == i.msgId) for (let t = 0; t < this.listeners.length; t++) {
let e = this.listeners[t];
if (e.target && e.target instanceof Object && e.target.node) e.callback(i.route, i.data); else {
this.listeners.splice(t, 1);
t--;
}
} else if (this.requests.hasOwnProperty(i.msgId)) {
let t = this.requests[i.msgId];
t.target && t.target instanceof Object && t.target.node && t.callback(i.data);
delete this.requests[i.msgId];
}
}
onError(t) {
r.default.instance.showLoading(!1);
let e = cc.director.getScene();
"Lobby" != e.name && "ShootFish" == e.name && r.default.instance.loadSceneFromBundle("Lobby", {
src: "Lobby"
});
this.isLogined && (this.isLogined = !1);
}
onClose(t) {
console.log("onClose shootFish");
this.intervalPing > 0 && clearInterval(this.intervalPing);
this.timeoutInterval > 0 && clearInterval(this.timeoutInterval);
for (var e = 0; e < this.onCloses.length; e++) {
var i = this.onCloses[e];
if (i.target && i.target instanceof Object && i.target.node) i.callback(); else {
this.onCloses.splice(e, 1);
e--;
}
}
this.isAutoReconnect && !this.isForceClose && setTimeout(() => {
this.isForceClose || this.connect();
}, 2e3);
this.isLogined && (this.isLogined = !1);
let s = cc.director.getScene();
s && "Lobby" != s.name && "ShootFish" == s.name && r.default.instance.loadSceneFromBundle("Lobby", {
src: "Lobby"
});
}
send(t) {
if (!this.isConnected()) return;
let e = msgpack.encode(t);
e = this.doXOR(e, 0, e.length);
this.ws.send(e);
}
doXOR(t, e, i) {
let s = 0, o = e + i;
for (let i = e; i < o; i++) {
t[i] = t[i] ^ Number(this.xorKey.charAt(s % this.xorKey.length));
s++;
}
return t;
}
connect() {
this.isForceClose = !1;
if (null == this.ws) {
this.isUseWSS ? cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? this.ws = new (Function.prototype.bind.apply(WebSocket, [ null, `wss://${n.default.App.DOMAIN}/socket-client/${this.host}`, [], cc.url.raw("resources/raw/cacert.pem") ]))() : this.ws = new WebSocket(`wss://${n.default.App.DOMAIN}/socket-client/${this.host}`) : this.ws = new WebSocket(`ws://${n.default.App.DOMAIN}/socket-client/${this.host}`);
this.ws.binaryType = "arraybuffer";
this.ws.onopen = this.onOpen.bind(this);
this.ws.onmessage = this.onMessage.bind(this);
this.ws.onerror = this.onError.bind(this);
this.ws.onclose = this.onClose.bind(this);
} else if (this.ws.readyState !== WebSocket.OPEN) {
this.ws.close();
this.ws = null;
this.connect();
}
}
addOnOpen(t, e) {
this.onOpenes.push(new u(e, t));
}
addOnClose(t, e) {
this.onCloses.push(new u(e, t));
}
close() {
this.isForceClose = !0;
this.ws && this.ws.close();
this.isLogined && (this.isLogined = !1);
let t = cc.director.getScene();
"Lobby" != t.name && "ShootFish" == t.name && r.default.instance.loadSceneFromBundle("Lobby", {
src: "Lobby"
});
}
isConnected() {
return !!this.ws && this.ws.readyState == WebSocket.OPEN;
}
addListener(t, e) {
this.listeners.push(new l(e, t));
}
request(t, e, i, o) {
s.reqId++;
s.reqId > 64999 && (s.reqId = 1);
this.requests[s.reqId] = new h(o, i);
this.send({
data: "object" == typeof e && null != e && e ? e : {},
msgId: s.reqId,
route: t
});
}
notify(t, e) {
this.send({
data: "object" == typeof e && null != e && e ? e : {},
msgId: 0,
route: t
});
}
ping(t = null, e = null) {
let i = Date.now();
this.request("ping", null, e => {
s.PING = Date.now() - i;
if (s.MIN_PING < 0 || s.PING < s.MIN_PING) {
s.MIN_PING = s.PING;
s.TIME_DISTANCE = Date.now() - e.time;
}
null != t && t();
this.timeout = 0;
}, null != e ? e : s.NODE_FIXED);
}
};
d.reqId = 0;
d.MIN_PING = -1;
d.PING = 0;
d.TIME_DISTANCE = 0;
d.NODE_FIXED = new cc.Node().addComponent(cc.Sprite);
d = s = o([ a ], d);
i.default = d;
cc._RF.pop();
}, {
"../../scripts/common/Configs": "Configs",
"../common/App": "App"
} ],
SlotNetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fa6a5HiidJFNohMYqtMHOjk", "SlotNetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkClient"), o = t("./Network.NetworkListener"), n = t("../common/Configs"), r = t("./Network.Cmd"), a = t("./Network.InPacket"), c = t("../common/App");
class l extends s.default {
constructor() {
super();
this.listeners = new Array();
this.isLogin = !1;
this.onLogined = null;
this.isUseWSS = n.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new l());
return this.instance;
}
checkConnect(t) {
this.onLogined = t;
null != this.ws && this.ws.readyState == WebSocket.CONNECTING || (this.isConnected() ? this.isLogin && null != this.onLogined && this.onLogined() : this.connect());
}
connect() {
super.connect(n.default.App.HOST_SLOT.host, n.default.App.HOST_SLOT.port);
}
onError(t) {
c.default.instance.showLoading(!1);
console.log("onError");
}
onOpen(t) {
super.onOpen(t);
this.send(new r.default.SendLogin(n.default.Login.Nickname, n.default.Login.AccessToken));
console.log("slot connected");
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
switch (new a.default(e).getCmdId()) {
case r.default.Code.LOGIN:
this.isLogin = !0;
null != this.onLogined && this.onLogined();
}
}
addListener(t, e) {
this.listeners.push(new o.default(e, t));
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
sendCheck(t) {
this.checkConnect(() => {
this.send(t);
});
}
}
i.default = l;
cc._RF.pop();
}, {
"../common/App": "App",
"../common/Configs": "Configs",
"./Network.Cmd": "Network.Cmd",
"./Network.InPacket": "Network.InPacket",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
SlotPopupBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ccb52stuGRA7ZtyeI5TwD5s", "SlotPopupBase");
var s, o = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: n, property: r} = cc._decorator;
let a = s = class extends cc.Component {
constructor() {
super(...arguments);
this.popup = null;
this.bg = null;
this.nodeAnimations = [];
this.nodeAnimationDownUp = [];
this.arrayEditBox = [];
this.posStart = cc.v2(0, 0);
this.showCallBack = null;
this.hideCallBack = null;
this.isDestroyOnHide = !0;
this.isShowDone = !1;
this.positionOriginalBoard = cc.v2(0, 0);
this.canCloseWhenChangeScene = !0;
}
onLoad() {
if (null == s.instance) {
s.instance = this;
this.posStart = cc.v2(this.popup.x, 0);
} else this.node.destroy();
}
start() {
this.positionOriginalBoard = this.popup.position;
}
setShowCallBack(t) {
this.showCallBack = t;
}
setHideCallBack(t) {
this.hideCallBack = t;
}
show(t, e = .4, i = 1, s = !1) {
let o = this;
if (null != this.popup) {
this.node.active = !0;
this.popup.scale = 1;
this.popup.active = !0;
this.popup.position = this.positionOriginalBoard;
if (null != this.bg) {
this.bg.active = !0;
this.bg.opacity = 0;
this.bg.stopAllActions();
this.bg.runAction(cc.fadeTo(.2, 178.5));
this.popup.stopAllActions();
this.popup.runAction(cc.fadeIn(e));
this.isShowDone = !0;
this.popup.scaleX = 1;
this.popup.scaleY = .5;
this.popup.stopAllActions();
this.popup.runAction(cc.sequence(cc.scaleTo(.3, i).easing(cc.easeBackOut()), cc.callFunc(function() {
o.positionOriginalBoard = o.popup.position;
})));
}
}
}
hide(t, e = .4, i = !0, s = !0) {
let o = this;
if (null != this.bg) {
this.bg.stopAllActions();
this.bg.runAction(cc.fadeOut(.2));
this.popup.runAction(cc.sequence(cc.moveTo(.2, cc.v2(o.popup.x, o.popup.y + 40)), cc.moveBy(.3, cc.v2(0, -cc.winSize.height)), cc.callFunc(function() {
o.isShowDone = !1;
o.node.active = !1;
o.node.position = o.posStart;
})));
}
}
};
a.instance = null;
o([ r(cc.Node) ], a.prototype, "popup", void 0);
o([ r(cc.Node) ], a.prototype, "bg", void 0);
a = s = o([ n ], a);
i.default = a;
cc._RF.pop();
}, {} ],
StringUtils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f2d12+P1m5Ogrkzjx3OLwTv", "StringUtils");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
static isNullOrEmpty(t) {
return !t && "" === t && 0 === t.length;
}
};
r.formatMoneyNumberWithColom = function(t) {
let e = !1;
if (t < 0) {
t *= -1;
e = !0;
}
if (t < 1e3) {
let i = Math.floor(t).toString();
e && (i = "-" + i);
return i;
}
let i = "", s = Math.floor(t).toString();
for (let t = s.length; t >= 0; t -= 3) {
if (t - 3 <= 0) {
i = s.slice(0, t) + i;
break;
}
i = "," + s.slice(t - 3, t) + i;
}
e && (i = "-" + i);
return i;
};
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
SubpackageDownloader: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "42427g+lbNAIayqS7v03+/v", "SubpackageDownloader");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
var r;
(function(t) {
var e;
let i = e = class {
constructor() {
this.isDownloading = !1;
this._storagePath = "";
this.failCount = 0;
}
static getInstance() {
null == this.instance && (this.instance = new e());
return this.instance;
}
_downloadSubpackage(t, e) {
if (!this.isDownloading) {
console.log("CC_JSB: " + !0);
console.log("CC_DEBUG: " + !1);
console.log("CC_DEV: " + !1);
console.log("CC_EDITOR: " + !1);
console.log("CC_PREVIEW: " + !1);
console.log("CC_TEST: " + !1);
console.log("CC_BUILD: " + !0);
cc.loader.downloader.loadSubpackage(t, t => {
if (t) {
console.log(t.stack);
e(t.stack, 0);
} else e(null, 0);
});
}
}
static downloadSubpackage(t, e) {
this.getInstance()._downloadSubpackage(t, e);
}
};
i.instance = null;
i = e = s([ o ], i);
t.SubpackageDownloader = i;
})(r || (r = {}));
i.default = r.SubpackageDownloader;
cc._RF.pop();
}, {} ],
TX2NetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "69d0adPiFtOMqlmb32t610p", "TX2NetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkClient"), o = t("./Network.NetworkListener"), n = t("../common/Configs"), r = t("./Network.InPacket"), a = t("./Network.Cmd");
class c extends s.default {
constructor() {
super();
this.listeners = new Array();
this.isLogin = !1;
this.onLogined = null;
this.isUseWSS = n.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new c());
return this.instance;
}
checkConnect(t = null) {
this.onLogined = t;
null != this.ws && this.ws.readyState == WebSocket.CONNECTING || (this.isConnected() ? this.isLogin && null != this.onLogined && this.onLogined() : this.connect());
}
connect() {
super.connect(n.default.App.HOST_TAI_XIU_MINI2.host, n.default.App.HOST_TAI_XIU_MINI2.port);
}
onOpen(t) {
super.onOpen(t);
this.send(new a.default.SendLogin(n.default.Login.Nickname, n.default.Login.AccessToken));
console.log("tx2 connected");
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
switch (new r.default(e).getCmdId()) {
case a.default.Code.LOGIN:
this.isLogin = !0;
if (null != this.onLogined) {
console.log("Logined");
this.onLogined();
}
}
}
addListener(t, e) {
this.listeners.push(new o.default(e, t));
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
sendCheck(t) {
this.checkConnect(() => {
this.send(t);
});
}
}
i.default = c;
cc._RF.pop();
}, {
"../common/Configs": "Configs",
"./Network.Cmd": "Network.Cmd",
"./Network.InPacket": "Network.InPacket",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
TaiXiuMD5NetWorkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "967ffDS/tFHnpuU61VptBRS", "TaiXiuMD5NetWorkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkClient"), o = t("./Network.NetworkListener"), n = t("../common/Configs"), r = t("./Network.InPacket"), a = t("./Network.Cmd"), c = t("../common/App");
class l extends s.default {
constructor() {
super();
this.listeners = new Array();
this.isLogin = !1;
this.onLogined = null;
this.intervalPing = -1;
this.isUseWSS = n.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new l());
return this.instance;
}
checkConnect(t = null) {
this.onLogined = t;
null != this.ws && this.ws.readyState == WebSocket.CONNECTING || (this.isConnected() ? this.isLogin && null != this.onLogined && this.onLogined() : this.connect());
}
onError(t) {
c.default.instance.showLoading(!1);
console.log("onError taixiumd5");
}
connect() {
super.connect(n.default.App.HOST_TAIXIU_MD5.host, n.default.App.HOST_TAIXIU_MD5.port);
}
onOpen(t) {
super.onOpen(t);
this.send(new a.default.SendLogin(n.default.Login.Nickname, n.default.Login.AccessToken));
console.log("taixiumd5 connected");
this.intervalPing = setInterval(() => this.ping(), 1);
this.ping();
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
switch (new r.default(e).getCmdId()) {
case a.default.Code.LOGIN:
this.isLogin = !0;
if (null != this.onLogined) {
console.log("Logined");
this.onLogined();
}
}
}
addListener(t, e) {
this.listeners.push(new o.default(e, t));
}
onClose(t) {
console.log("onclose minigame");
super.onClose(t);
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
sendCheck(t) {
this.checkConnect(() => {
this.send(t);
});
}
ping() {
null != this.ws && this.ws.readyState !== WebSocket.OPEN && console.log("WebSocket minigame instance wasn't ready...");
}
}
i.default = l;
cc._RF.pop();
}, {
"../common/App": "App",
"../common/Configs": "Configs",
"./Network.Cmd": "Network.Cmd",
"./Network.InPacket": "Network.InPacket",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
TaiXiuNetWorkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8c5dbGHJL9BNaSRu9/bUBDY", "TaiXiuNetWorkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./Network.NetworkClient"), o = t("./Network.NetworkListener"), n = t("../common/Configs"), r = t("./Network.InPacket"), a = t("./Network.Cmd"), c = t("../common/App");
class l extends s.default {
constructor() {
super();
this.listeners = new Array();
this.isLogin = !1;
this.onLogined = null;
this.intervalPing = -1;
this.isUseWSS = n.default.App.USE_WSS;
}
static getInstance() {
null == this.instance && (this.instance = new l());
return this.instance;
}
checkConnect(t = null) {
this.onLogined = t;
null != this.ws && this.ws.readyState == WebSocket.CONNECTING || (this.isConnected() ? this.isLogin && null != this.onLogined && this.onLogined() : this.connect());
}
onError(t) {
c.default.instance.showLoading(!1);
console.log("onError minigame");
}
connect() {
super.connect(n.default.App.HOST_TAIXIU.host, n.default.App.HOST_TAIXIU.port);
}
onOpen(t) {
super.onOpen(t);
this.send(new a.default.SendLogin(n.default.Login.Nickname, n.default.Login.AccessToken));
console.log("minigame connected");
this.intervalPing = setInterval(() => this.ping(), 1);
this.ping();
}
onMessage(t) {
for (var e = new Uint8Array(t.data), i = 0; i < this.listeners.length; i++) {
var s = this.listeners[i];
if (s.target && s.target instanceof Object && s.target.node) s.callback(e); else {
this.listeners.splice(i, 1);
i--;
}
}
switch (new r.default(e).getCmdId()) {
case a.default.Code.LOGIN:
this.isLogin = !0;
if (null != this.onLogined) {
console.log("Logined");
this.onLogined();
}
}
}
addListener(t, e) {
this.listeners.push(new o.default(e, t));
}
onClose(t) {
console.log("onclose minigame");
super.onClose(t);
}
send(t) {
for (var e = new Int8Array(t._length), i = 0; i < t._length; i++) e[i] = t._data[i];
null != this.ws && this.isConnected() && this.ws.send(e.buffer);
}
sendCheck(t) {
this.checkConnect(() => {
this.send(t);
});
}
ping() {
null != this.ws && this.ws.readyState !== WebSocket.OPEN && console.log("WebSocket minigame instance wasn't ready...");
}
}
i.default = l;
cc._RF.pop();
}, {
"../common/App": "App",
"../common/Configs": "Configs",
"./Network.Cmd": "Network.Cmd",
"./Network.InPacket": "Network.InPacket",
"./Network.NetworkClient": "Network.NetworkClient",
"./Network.NetworkListener": "Network.NetworkListener"
} ],
TestController: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "39e0cwUUd5N0oJ4PPSPHVS/", "TestController");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./networks/Network.NetworkClient"), n = t("./common/Configs"), r = t("./networks/Network.Cmd"), {ccclass: a, property: c} = cc._decorator;
let l = class extends cc.Component {
constructor() {
super(...arguments);
this.label = null;
this.text = "hello";
}
start() {
for (let t = 0; t < 500; t++) {
let t = () => {
let e = new o.default();
e.isUseWSS = !0;
e.addOnOpen(() => {
this.send(e.ws, new r.default.SendLogin(n.default.Login.Nickname, n.default.Login.AccessToken));
}, this);
e.addOnClose(() => {
setTimeout(() => {
t();
}, 2e3);
}, this);
e.connect(n.default.App.HOST_MINIGAME.host, n.default.App.HOST_MINIGAME.port);
};
t();
}
}
send(t, e) {
for (var i = new Int8Array(e._length), s = 0; s < e._length; s++) i[s] = e._data[s];
t.send(i.buffer);
}
};
s([ c(cc.Label) ], l.prototype, "label", void 0);
s([ c ], l.prototype, "text", void 0);
l = s([ a ], l);
i.default = l;
cc._RF.pop();
}, {
"./common/Configs": "Configs",
"./networks/Network.Cmd": "Network.Cmd",
"./networks/Network.NetworkClient": "Network.NetworkClient"
} ],
TienLenNetworkClient: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ace2fOmXkREULE7CCaicJmQ", "TienLenNetworkClient");
Object.defineProperty(i, "__esModule", {
value: !0
});
const s = t("./CardGameNetworkClient"), o = t("../common/Configs");
class n extends s.default {
static getInstance() {
null == this.instance && (this.instance = new n());
return this.instance;
}
constructor() {
super();
}
_connect() {
super.connect(o.default.App.HOST_TLMN.host, o.default.App.HOST_TLMN.port);
}
onOpen(t) {
super.onOpen(t);
console.log("tlmn connected");
}
}
i.default = n;
cc._RF.pop();
}, {
"../common/Configs": "Configs",
"./CardGameNetworkClient": "CardGameNetworkClient"
} ],
TimeUtils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "761c4r7fCZLrIcT4qTFRPgo", "TimeUtils");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class {
static currentTimeMillis() {
return Date.now();
}
static serverTime() {
return Math.ceil(this.currentTimeMillis() - this.minDistanceTime + this.minPing / 2);
}
};
r.ping = 0;
r.minPing = -1;
r.minDistanceTime = 0;
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
ToastMessage: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "95b69ipYahMs7Z4x30pR99K", "ToastMessage");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {};
r.TAI_XIU_CHAT_CHAT_FAST = "Bạn Chat Quá Nhanh";
r.TAI_XIU_CHAT_CHAT_TOO_LONG = "Câu Chat Quá Dài";
r.TAI_XIU_CHAT_CANNOT_CHAT = "Bạn Không Thể Chat Vào Lúc Này";
r.TAI_XIU_CHAT_TOO_LONG = "Nội dung chat quá dài.";
r.XOCDIA_START_SESSION = "Bắt đầu phiên mới";
r.XOCDIA_START_BET = "Xin mời đặt cược";
r.XOCDIA_STOP_BET = "Dừng đặt cược";
r.XOCDIA_REWARD = "Bắt đầu trả thưởng";
r.XOCDIA_OPEN_BOWL = "Mở bát";
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
Tween: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b463e/ybFpMl6HKyeG5WLZz", "Tween");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const o = t("./Utils"), {ccclass: n, property: r} = cc._decorator;
var a;
(function(t) {
var e;
class i {
constructor() {
this.target = null;
this.duration = 0;
this.curDuration = 0;
this.callback = null;
}
}
t.TweenListener = i;
let r = e = class extends cc.Component {
constructor() {
super(...arguments);
this.skeepFrame = !1;
this.countSkeep = 1;
this.curCountSkeep = 0;
this.delta = 0;
}
static getInstance() {
if (null == this.instance) {
let t = new cc.Node();
t.name = "Tween";
cc.game.addPersistRootNode(t);
this.instance = t.addComponent(e);
}
return this.instance;
}
update(t) {
if (this.skeepFrame) {
this.curCountSkeep++;
this.delta += t;
if (this.curCountSkeep >= this.countSkeep) {
this.curCountSkeep = 0;
this.skeepFrame = !1;
}
} else {
for (var i = 0; i < e.listeners.length; i++) {
let s = e.listeners[i];
if (s.target && s.target instanceof cc.Component && s.target.node) {
s.curDuration = Math.min(s.duration, s.curDuration + t + this.delta);
s.callback(s.curDuration / s.duration);
s.curDuration >= s.duration && e.listeners.splice(i--, 1);
} else e.listeners.splice(i--, 1);
}
this.skeepFrame = !0;
this.delta = 0;
}
}
static numberTo(t, s, n, r = (t => o.default.formatNumber(t))) {
this.getInstance();
let a = null;
for (var c = 0; c < e.listeners.length; c++) {
let i = e.listeners[c];
if (i.target == t) {
a = i;
break;
}
}
if (null == a) {
a = new i();
this.listeners.push(a);
}
let l = o.default.stringToInt(t.string), h = s - l;
a.curDuration = 0;
a.duration = n;
a.target = t;
a.callback = e => {
t.string = r(parseInt("" + (l + h * e)));
};
}
static randomHu(t) {
let e = o.default.randomRangeInt(152646626, 912565949);
return t > e ? t - e : e;
}
};
r.instance = null;
r.listeners = new Array();
r = e = s([ n ], r);
t.Tween = r;
})(a || (a = {}));
i.default = a.Tween;
cc._RF.pop();
}, {
"./Utils": "Utils"
} ],
UIToggleSlider: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3068a9iuuZB26U6MbkVm5/3", "UIToggleSlider");
var s = this && this.__decorate || function(t, e, i, s) {
var o, n = arguments.length, r = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, s); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(e, i, r) : o(e, i)) || r);
return n > 3 && r && Object.defineProperty(e, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
const {ccclass: o, property: n} = cc._decorator;
let r = class extends cc.Component {
constructor() {
super(...arguments);
this.iconChose = null;
this.moveX = 0;
this.offset = 0;
this.sprOn = null;
this.sprOff = null;
this.isChangeSpriteOnOff = !1;
this.onValueChange = null;
this._isOnSelect = !1;
}
isOnChange(t) {
if (this._isOnSelect !== t || 0 === this.iconChose.getNumberOfRunningActions()) {
this._isOnSelect = t;
this.iconChose.runAction(cc.moveTo(.1, new cc.Vec2(this._isOnSelect ? this.moveX : -this.moveX, this.iconChose.position.y)));
this.onValueChange(this._isOnSelect);
this.isChangeSpriteOnOff && null != this.sprOn && null != this.sprOff && (this.iconChose.getComponent(cc.Sprite).spriteFrame = this._isOnSelect ? this.sprOn : this.sprOff);
}
}
initStart(t) {
this.moveX = this.node.width / 2 - this.iconChose.width / 2 - this.offset;
this._isOnSelect = t;
this.iconChose.position = new cc.Vec2(this._isOnSelect ? this.moveX : -1 * this.moveX, this.iconChose.position.y);
this.isChangeSpriteOnOff && null != this.sprOn && null != this.sprOff && (this.iconChose.getComponent(cc.Sprite).spriteFrame = this._isOnSelect ? this.sprOn : this.sprOff);
}
onClick() {
this.isOnChange(!this._isOnSelect);
}
};
s([ n(cc.Node) ], r.prototype, "iconChose", void 0);
s([ n(cc.Float) ], r.prototype, "moveX", void 0);
s([ n(cc.Float) ], r.prototype, "offset", void 0);
s([ n(cc.SpriteFrame) ], r.prototype, "sprOn", void 0);
s([ n(cc.SpriteFrame) ], r.prototype, "sprOff", void 0);
s([ n(cc.Boolean) ], r.prototype, "isChangeSpriteOnOff", void 0);
r = s([ o ], r);
i.default = r;
cc._RF.pop();
}, {} ],
Utils: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e86efcy15xCqJ8SuQDPKLzT", "Utils");
var s = this && this.__awaiter || function(t, e, i, s) {
return new (i || (i = Promise))(function(o, n) {
function r(t) {
try {
c(s.next(t));
} catch (t) {
n(t);
}
}
function a(t) {
try {
c(s.throw(t));
} catch (t) {
n(t);
}
}
function c(t) {
t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(r, a);
var e;
}
c((s = s.apply(t, e || [])).next());
});
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.common = void 0;
const o = t("./App"), n = t("./Utils"), r = t("./Configs"), a = t("../../Script/GameHelper"), {ccclass: c, property: l} = cc._decorator;
var h;
(function(t) {
class e {
static numFormatter(t, e = 0) {
return t >= 1e9 ? (t / 1e9).toFixed(e) + "B" : t > 999 && t < 1e6 ? (t / 1e3).toFixed(0) + "K" : t >= 1e6 ? (t / 1e6).toFixed(e) + "M" : t <= 900 ? t : void 0;
}
static NFormatter(t, e = 2) {
for (var i = [ {
value: 1e18,
symbol: "E"
}, {
value: 1e15,
symbol: "P"
}, {
value: 1e12,
symbol: "T"
}, {
value: 1e9,
symbol: "B"
}, {
value: 1e6,
symbol: "M"
}, {
value: 1e3,
symbol: "K"
} ], s = /\.0+$|(\.[0-9]*[1-9])0+$/, o = 0; o < i.length; o++) if (t >= i[o].value) return (t / i[o].value).toFixed(e).replace(s, "$1") + i[o].symbol;
return t.toFixed(e).replace(s, "$1");
}
static numFormatterTofixed0(t) {
return t >= 1e9 ? (t / 1e9).toFixed(0) + "B" : t > 999 && t < 1e6 ? (t / 1e3).toFixed(0) + "K" : t >= 1e6 ? (t / 1e6).toFixed(0) + "M" : t <= 999 ? t : void 0;
}
static degreesToVec2(t) {
return e.radianToVec2(t * e.Deg2Rad);
}
static radianToVec2(t) {
return cc.v2(Math.cos(t), Math.sin(t));
}
static numberToEnum(t, e) {
return e[e[t]];
}
static loadSpriteFrameFromBase64(t, e) {
let i = new Image();
i.onload = function() {
let t = new cc.Texture2D();
t.initWithElement(i);
t.handleLoadedTexture();
let s = new cc.SpriteFrame(t);
e(s);
}.bind(this);
i.src = "data:image/png;base64," + t;
}
static formatNumber(t) {
return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
static formatNumber2(t) {
t = t.replace(/,/g, "");
return n.default.formatNumber(parseInt(t));
}
static formatMoney(t) {
return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
static formatNumberMin(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
}
static stringToInt(t) {
var e = parseInt(t.replace(/\./g, "").replace(/,/g, ""));
isNaN(e) && (e = 0);
return e;
}
static validateMoneyRecharge50K(t) {
t < 5e4 && o.default.instance.alertDialog.showMsg("Số tiền nạp phải lớn hơn hoặc bằng 50 nghìn !");
}
static randomRangeInt(t, e) {
return Math.floor(Math.random() * (e - t)) + t;
}
static randomRange(t, e) {
return Math.random() * (e - t) + t;
}
static v2Distance(t, e) {
return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
static v2Degrees(t, e) {
return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI;
}
static dateToYYYYMMdd(t) {
var e = t.getMonth() + 1, i = t.getDate();
return [ t.getFullYear(), (e > 9 ? "" : "0") + e, (i > 9 ? "" : "0") + i ].join("-");
}
static dateToYYYYMM(t) {
var e = t.getMonth() + 1;
t.getDate();
return [ t.getFullYear(), (e > 9 ? "" : "0") + e ].join("-");
}
static removeDups(t) {
var e = {};
t.forEach(function(t) {
e[t] || (e[t] = !0);
});
return Object.keys(e);
}
static copyTextToClipboard(t) {
let e = function(t) {
var e = document.createElement("textarea");
if (e.value = t, document.body.appendChild(e), cc.sys.platform === cc.sys.MOBILE_BROWSER && cc.sys.os == cc.sys.OS_IOS) {
var i = document.createRange();
i.selectNodeContents(e);
var s = window.getSelection();
s.removeAllRanges(), s.addRange(i), e.setSelectionRange(0, 999999);
} else e.focus(), e.select();
try {
var o = document.execCommand("copy") ? "successful" : "unsuccessful";
console.log("Fallback: Copying text command was " + o);
} catch (t) {
console.error("Fallback: Oops, unable to copy", t);
}
document.body.removeChild(e);
};
if (cc.sys.platform === cc.sys.MOBILE_BROWSER || cc.sys.platform === cc.sys.DESKTOP_BROWSER) if (cc.sys.platform === cc.sys.MOBILE_BROWSER && cc.sys.os == cc.sys.OS_IOS) e(t); else try {
window.navigator.clipboard.writeText(t).then(function() {}, function() {
e(t);
});
} catch (i) {
e(t);
} else cc.sys.isNative && null != jsb && jsb.copyTextToClipboard(t);
}
static ChangeLocalCaseUpdated(t) {
if (cc.sys.isNative && jsb.fileUtils.isFileExist(a.default.getStoragePath() + "/project.manifest")) {
console.log("read manifest file");
let e = a.default.getStoragePath();
console.log("StoragePath for remote asset : ", e);
let i = jsb.fileUtils.getStringFromFile(e + "/project.manifest"), s = JSON.parse(i);
s.packageUrl = t;
s.remoteManifestUrl = s.packageUrl + "project.manifest";
s.remoteVersionUrl = s.packageUrl + "version.manifest";
let o = JSON.stringify(s);
jsb.fileUtils.writeStringToFile(o, e + "/project.manifest");
console.log(" doi domain ");
}
}
static isSafari() {
if (cc.sys.isNative) return !1;
let t = navigator.userAgent, e = t.indexOf("Chrome") > -1, i = t.indexOf("Safari") > -1;
e && i && (i = !1);
return i;
}
static checkHealth(t) {
return s(this, void 0, void 0, function*() {
return new Promise(function(e) {
let i = new XMLHttpRequest();
i.onreadystatechange = function() {
if (4 === i.readyState) if (200 === i.status) try {
e(JSON.parse(i.responseText));
} catch (t) {
e(JSON.parse("{}"));
} else e(void 0);
};
i.onerror = function() {
e(void 0);
};
i.open("GET", t, !0);
i.send();
});
});
}
static mapMaDaiLy(t) {
if (null == r.default.App.MAP_DAILY) return t;
for (let e = 0; e < r.default.App.MAP_DAILY.length; e++) if (-1 != r.default.App.MAP_DAILY[e].map.split(",").indexOf(t)) return r.default.App.MAP_DAILY[e].realcode;
return t;
}
static convertTimeStampToDate(t) {
return new Date(t).toLocaleDateString("en-GB");
}
static getPlatform() {
return cc.sys.isBrowser ? "web" : cc.sys.os == cc.sys.OS_ANDROID ? "ad" : cc.sys.os == cc.sys.OS_IOS ? "ios" : void 0;
}
}
e.Rad2Deg = 57.2957795;
e.Deg2Rad = .0174532925;
t.Utils = e;
})(h = i.common || (i.common = {}));
i.default = h.Utils;
cc._RF.pop();
}, {
"../../Script/GameHelper": "GameHelper",
"./App": "App",
"./Configs": "Configs",
"./Utils": "Utils"
} ],
VersionConfig_BACKUP_1641: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "30fc71twA9NNoDW0VwqMmsD", "VersionConfig_BACKUP_1641");
Object.defineProperty(i, "__esModule", {
value: !0
});
class s {}
i.default = s;
s.CP_NAME_F69 = "F69";
s.ENV_DEV = "dev";
s.ENV_PROD = "prod";
s.ENV_LOCAL = "local";
s.DOMAIN_DEV = "you88.club";
s.DOMAIN_LOCAL = "127.0.0.1";
s.DOMAIN_PRO = "you88.club";
s.VersionName = "";
s.CPName = "";
s.ENV = s.ENV_DEV;
if (cc.sys.isNative) {
let t = cc.sys.localStorage.getItem("VersionConfig");
if (null != t) {
t = JSON.parse(t);
s.VersionName = t.VersionName;
s.CPName = t.CPName;
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
cc._RF.pop();
}, {} ],
VersionConfig_BASE_1641: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "67bc3AYUOZLwKR8SSaJ3atz", "VersionConfig_BASE_1641");
Object.defineProperty(i, "__esModule", {
value: !0
});
class s {}
i.default = s;
s.CP_NAME_F69 = "F69";
s.ENV_DEV = "dev";
s.ENV_PROD = "prod";
s.ENV_LOCAL = "local";
s.DOMAIN_DEV = "ace88.live";
s.DOMAIN_LOCAL = "127.0.0.1";
s.DOMAIN_PRO = "ace88.live";
s.VersionName = "";
s.CPName = "";
s.ENV = s.ENV_DEV;
if (cc.sys.isNative) {
let t = cc.sys.localStorage.getItem("VersionConfig");
if (null != t) {
t = JSON.parse(t);
s.VersionName = t.VersionName;
s.CPName = t.CPName;
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
cc._RF.pop();
}, {} ],
VersionConfig_LOCAL_1641: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "00ecd13AK1Kx4EIZJ6SF7WM", "VersionConfig_LOCAL_1641");
Object.defineProperty(i, "__esModule", {
value: !0
});
class s {}
i.default = s;
s.CP_NAME_F69 = "F69";
s.ENV_DEV = "dev";
s.ENV_PROD = "prod";
s.ENV_LOCAL = "local";
s.DOMAIN_DEV = "you88.club";
s.DOMAIN_LOCAL = "127.0.0.1";
s.DOMAIN_PRO = "you88.club";
s.VersionName = "";
s.CPName = "";
s.ENV = s.ENV_LOCAL;
if (cc.sys.isNative) {
let t = cc.sys.localStorage.getItem("VersionConfig");
if (null != t) {
t = JSON.parse(t);
s.VersionName = t.VersionName;
s.CPName = t.CPName;
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
cc._RF.pop();
}, {} ],
VersionConfig_REMOTE_1641: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "323f4xWZINGOqxOmWi4xcIx", "VersionConfig_REMOTE_1641");
Object.defineProperty(i, "__esModule", {
value: !0
});
class s {}
i.default = s;
s.CP_NAME_F69 = "F69";
s.ENV_DEV = "dev";
s.ENV_PROD = "prod";
s.ENV_LOCAL = "local";
s.DOMAIN_DEV = "you88.club";
s.DOMAIN_LOCAL = "127.0.0.1";
s.DOMAIN_PRO = "you88.club";
s.VersionName = "";
s.CPName = "";
s.ENV = s.ENV_DEV;
if (cc.sys.isNative) {
let t = cc.sys.localStorage.getItem("VersionConfig");
if (null != t) {
t = JSON.parse(t);
s.VersionName = t.VersionName;
s.CPName = t.CPName;
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
cc._RF.pop();
}, {} ],
VersionConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4432dTxaiNCLKzaQM0wvnBN", "VersionConfig");
Object.defineProperty(i, "__esModule", {
value: !0
});
class s {
static DOMAINHOTUPDATE() {
return cc.sys.localStorage.getItem("url_update") ? cc.sys.localStorage.getItem("url_update") : "honghunghoi.net";
}
}
i.default = s;
s.CP_NAME_F69 = "F69";
s.ENV_DEV = "dev";
s.ENV_PROD = "prod";
s.ENV_LOCAL = "local";
s.DOMAIN_LOCAL = "45.76.178.154";
s.DOMAIN_PRO = "bon.tips";
s.DOMAIN_DEV = "bon.tips";
s.VersionName = "";
s.CPName = "";
s.ENV = s.ENV_PROD;
if (cc.sys.isNative) {
let t = cc.sys.localStorage.getItem("VersionConfig");
if (null != t) {
t = JSON.parse(t);
s.VersionName = t.VersionName;
s.CPName = t.CPName;
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
} else {
s.VersionName = "1.0.0";
s.CPName = s.CP_NAME_F69;
}
cc._RF.pop();
}, {} ],
use_reversed_rotateTo: [ function(t, e) {
"use strict";
cc._RF.push(e, "53185KImxhHC5ACsYCnHX4j", "use_reversed_rotateTo");
cc.RotateTo._reverse = !0;
cc._RF.pop();
}, {} ]
}, {}, [ "LoadingController", "GameChecker", "GameHelper", "BanCaController", "use_reversed_rotateTo", "TestController", "CardGame_ItemRoom", "AlertDialog", "App", "AutoScrollPageView", "BgResizer", "BroadcastReceiver", "BundleControl", "ButtonMiniGame", "CanvasResizer", "CanvasScene", "Common.AudioManager", "Common.CPLabel", "Common.CPSprite", "Configs", "ConfirmDialog", "Dialog", "Dropdown", "DropdownItem", "EditBoxCustom", "Game.GetLeaderBoard", "HandlerButton", "Http", "LabelEditBox", "Language.Label", "Language.LanguageManager", "Language.Sprite", "ListBankImg", "LoadingCirle", "Lobby.Cmd", "MiniGame", "NodeScaler", "NodeUtils", "Popup", "Random", "SPUtils", "SafeArea", "SelectChipBetView", "SlotPopupBase", "SubpackageDownloader", "TimeUtils", "ToastMessage", "Tween", "Utils", "VersionConfig", "VersionConfig_BACKUP_1641", "VersionConfig_BASE_1641", "VersionConfig_LOCAL_1641", "VersionConfig_REMOTE_1641", "GameConfigManager", "GameURL", "GameUtil", "MusicPlayer", "StringUtils", "UIToggleSlider", "ColumnController", "ColumnControllerB52", "ItemController", "RollerController", "RollerControllerB52", "CustomUI.Dropdown", "CustomUI.PageView", "GameErrorMessage", "GameName", "GameSuccessMessage", "GameData", "BauCuaTo2NetworkClient", "CardGame.Cmd", "CardGameNetworkClient", "MauBinh.NetworkClient", "MiniGameNetworkClient", "Network.Cmd", "Network.InPacket", "Network.NetworkClient", "Network.NetworkListener", "Network.OutPacket", "PacketHeaderAnalyze", "SamNetworkClient", "ShootFishNetworkClient", "SlotNetworkClient", "TX2NetworkClient", "TaiXiuMD5NetWorkClient", "TaiXiuNetWorkClient", "TienLenNetworkClient" ]);