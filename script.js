javascript: ! function() {
    var i, t, e, n, o, d, r, h, l = {
            DESKTOP: {
                NAME: "DESKTOP",
                COLS: 31,
                COL_WIDTH: 41,
                WIDTH: 961
            },
            TABLET: {
                NAME: "TABLET",
                COLS: 31,
                WIDTH: 768
            },
            MOBILE: {
                NAME: "MOBILE",
                COLS: 15
            }
        },
        a = l.DESKTOP.COLS * l.DESKTOP.COL_WIDTH,
        c = "generic-grid",
        f = .05,
        v = "rgb(236, 0, 140)";

    function u(i, t) {
        return Object.keys(t).forEach(function(e) {
            i.style[e] = t[e]
        }), i
    }

    function E(i, t) {
        var e = document.createElement("div");
        return i && (e.id = i), void 0 !== t && u(e, t), e
    }

    function p() {
        for (o = u(E(c), {
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 999999,
                height: "100vh",
                width: "calc(100vw - " + t + "px)",
                pointerEvents: "none"
            }), d = u(E(), {
                maxWidth: a + "px",
                margin: "0 auto",
                height: "100%",
                width: "100%",
                maxWidth: a + "px",
                opacity: void 0 === h ? f : h
            }), i = l[w()], n = 0; n < i.COLS; ++n) e = {
            width: "calc(100% / " + i.COLS + ")",
            height: "100%",
            float: "left"
        }, n % 2 == 0 && (e.backgroundColor = void 0 === r ? v : r), d.appendChild(u(E(), e));
        o.appendChild(d), document.body.appendChild(o), window.addEventListener("resize", O, !1)
    }

    function C() {
        for (; d.firstChild;) d.removeChild(d.firstChild);
        d.parentNode.removeChild(d), o.parentNode.removeChild(o), window.removeEventListener("resize", O)
    }

    function w() {
        return window.innerWidth < l.DESKTOP.WIDTH ? window.innerWidth < l.TABLET.WIDTH ? "MOBILE" : "TABLET" : "DESKTOP"
    }

    function O() {
        i && i.NAME === w() || T()
    }

    function T() {
        C(), p()
    }! function() {
        t = function() {
            var i = u(E(), {
                visibility: "hidden",
                width: "100px",
                msOverflowStyle: "scrollbar"
            });
            document.body.appendChild(i);
            var t = i.offsetWidth;
            i.style.overflow = "scroll";
            var e = u(E(), {
                width: "100%"
            });
            i.appendChild(e);
            var n = e.offsetWidth;
            return i.parentNode.removeChild(i), t - n
        }();
        var i = document.getElementById(c);
        i ? (d = (o = i).firstChild, C()) : p()
    }(), window.GridColor = function(i) {
        r = i, T()
    }, window.GridOpacity = function(i) {
        h = i, T()
    }
}();
