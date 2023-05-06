function darkmode() {
    var e = document.body;
    e.classList.toggle("dark"), e = e.classList.contains("dark") ? "DARK" : "LIGHT", localStorage.setItem("PageTheme", JSON.stringify(e))
}
setInterval(() => {
    var e = JSON.parse(localStorage.getItem("PageTheme"));
    document.body.classList = "DARK" === e ? "dark" : ""
}, 5);



var purecookieTitle = "Cookies",
    purecookieDesc = "Este site usa cookies. Ao utilizar este site, você automaticamente aceita que usemos cookies.",
    purecookieLink = '<a href="https://genshinbuild.com/privacy" target="_blank"><b>Saiba mais</b></a>',
    purecookieButton = "Ok, Obrigado!";

function pureFadeIn(e, o) {
    var i = document.getElementById(e);
    i.style.opacity = 0, i.style.display = o || "block",
        function e() {
            var o = parseFloat(i.style.opacity);
            1 < (o += .02) || (i.style.opacity = o, requestAnimationFrame(e))
        }()
}

function pureFadeOut(e) {
    var o = document.getElementById(e);
    o.style.opacity = 1,
        function e() {
            (o.style.opacity -= .02) < 0 ? o.style.display = "none" : requestAnimationFrame(e)
        }()
}

function setCookie(e, o, i) {
    var t, n = "";
    i && ((t = new Date).setTime(t.getTime() + 24 * i * 60 * 60 * 1e3), n = "; expires=" + t.toUTCString()), document.cookie = e + "=" + (o || "") + n + "; path=/"
}

function getCookie(e) {
    for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) {
        for (var n = i[t];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(o)) return n.substring(o.length, n.length)
    }
    return null
}

function eraseCookie(e) {
    document.cookie = e + "=; Max-Age=-99999999;"
}

function cookieConsent() {
    getCookie("purecookieDismiss") || (document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><div>' + purecookieTitle + '</div></div><div class="cookieDesc"><p>' + purecookieDesc + " " + purecookieLink + '</p></div><div class="cookieButton"><div onClick="purecookieDismiss();">' + purecookieButton + "</div></div></div>", pureFadeIn("cookieConsentContainer"))
}

function purecookieDismiss() {
    setCookie("purecookieDismiss", "1", 60), pureFadeOut("cookieConsentContainer")
}
window.onload = function () {
    cookieConsent()
};