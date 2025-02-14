! function(t, i) {
    "object" == typeof exports && "object" == typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define("nipplejs", [], i) : "object" == typeof exports ? exports.nipplejs = i() : t.nipplejs = i()
}(window, function() {
    return function(t) {
        var i = {};

        function e(o) {
            if (i[o]) return i[o].exports;
            var n = i[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(n.exports, n, n.exports, e), n.l = !0, n.exports
        }
        return e.m = t, e.c = i, e.d = function(t, i, o) {
            e.o(t, i) || Object.defineProperty(t, i, {
                enumerable: !0,
                get: o
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, i) {
            if (1 & i && (t = e(t)), 8 & i) return t;
            if (4 & i && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (e.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & i && "string" != typeof t)
                for (var n in t) e.d(o, n, function(i) {
                    return t[i]
                }.bind(null, n));
            return o
        }, e.n = function(t) {
            var i = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function(t, i) {
            return Object.prototype.hasOwnProperty.call(t, i)
        }, e.p = "", e(e.s = 0)
    }([function(t, i, e) {
        "use strict";
        e.r(i);
        var o, n = function(t, i) {
                var e = i.x - t.x,
                    o = i.y - t.y;
                return Math.sqrt(e * e + o * o)
            },
            s = function(t) {
                return t * (Math.PI / 180)
            },
            r = function(t) {
                return t * (180 / Math.PI)
            },
            d = function(t, i, e) {
                for (var o, n = i.split(/[ ,]+/g), s = 0; s < n.length; s += 1) o = n[s], t.addEventListener ? t.addEventListener(o, e, !1) : t.attachEvent && t.attachEvent(o, e)
            },
            a = function(t, i, e) {
                for (var o, n = i.split(/[ ,]+/g), s = 0; s < n.length; s += 1) o = n[s], t.removeEventListener ? t.removeEventListener(o, e) : t.detachEvent && t.detachEvent(o, e)
            },
            p = function(t) {
                return t.preventDefault(), t.type.match(/^touch/) ? t.changedTouches : t
            },
            c = function() {
                return {
                    x: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                    y: void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
                }
            },
            h = function(t, i) {
                i.top || i.right || i.bottom || i.left ? (t.style.top = i.top, t.style.right = i.right, t.style.bottom = i.bottom, t.style.left = i.left) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
            },
            l = function(t, i, e) {
                var o = u(t);
                for (var n in o)
                    if (o.hasOwnProperty(n))
                        if ("string" == typeof i) o[n] = i + " " + e;
                        else {
                            for (var s = "", r = 0, d = i.length; r < d; r += 1) s += i[r] + " " + e + ", ";
                            o[n] = s.slice(0, -2)
                        } return o
            },
            u = function(t) {
                var i = {};
                i[t] = "";
                return ["webkit", "Moz", "o"].forEach(function(e) {
                    i[e + t.charAt(0).toUpperCase() + t.slice(1)] = ""
                }), i
            },
            f = function(t, i) {
                for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
                return t
            },
            y = function(t, i) {
                if (t.length)
                    for (var e = 0, o = t.length; e < o; e += 1) i(t[e]);
                else i(t)
            },
            m = !!("ontouchstart" in window),
            v = !!window.PointerEvent,
            g = !!window.MSPointerEvent,
            b = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            x = {};

        function O() {}
        v ? o = {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup, pointercancel"
        } : g ? o = {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : m ? (o = {
            start: "touchstart",
            move: "touchmove",
            end: "touchend, touchcancel"
        }, x = b) : o = b, O.prototype.on = function(t, i) {
            var e, o = t.split(/[ ,]+/g);
            this._handlers_ = this._handlers_ || {};
            for (var n = 0; n < o.length; n += 1) e = o[n], this._handlers_[e] = this._handlers_[e] || [], this._handlers_[e].push(i);
            return this
        }, O.prototype.off = function(t, i) {
            return this._handlers_ = this._handlers_ || {}, void 0 === t ? this._handlers_ = {} : void 0 === i ? this._handlers_[t] = null : this._handlers_[t] && this._handlers_[t].indexOf(i) >= 0 && this._handlers_[t].splice(this._handlers_[t].indexOf(i), 1), this
        }, O.prototype.trigger = function(t, i) {
            var e, o = this,
                n = t.split(/[ ,]+/g);
            o._handlers_ = o._handlers_ || {};
            for (var s = 0; s < n.length; s += 1) e = n[s], o._handlers_[e] && o._handlers_[e].length && o._handlers_[e].forEach(function(t) {
                t.call(o, {
                    type: e,
                    target: o
                }, i)
            })
        }, O.prototype.config = function(t) {
            this.options = this.defaults || {}, t && (this.options = function(t, i) {
                var e = {};
                for (var o in t) t.hasOwnProperty(o) && i.hasOwnProperty(o) ? e[o] = i[o] : t.hasOwnProperty(o) && (e[o] = t[o]);
                return e
            }(this.options, t))
        }, O.prototype.bindEvt = function(t, i) {
            var e = this;
            return e._domHandlers_ = e._domHandlers_ || {}, e._domHandlers_[i] = function() {
                "function" == typeof e["on" + i] ? e["on" + i].apply(e, arguments) : console.warn('[WARNING] : Missing "on' + i + '" handler.')
            }, d(t, o[i], e._domHandlers_[i]), x[i] && d(t, x[i], e._domHandlers_[i]), e
        }, O.prototype.unbindEvt = function(t, i) {
            return this._domHandlers_ = this._domHandlers_ || {}, a(t, o[i], this._domHandlers_[i]), x[i] && a(t, x[i], this._domHandlers_[i]), delete this._domHandlers_[i], this
        };
        var _ = O;

        function w(t, i) {
            return this.identifier = i.identifier, this.position = i.position, this.frontPosition = i.frontPosition, this.collection = t, this.defaults = {
                size: 100,
                threshold: .1,
                color: "white",
                fadeTime: 250,
                dataOnly: !1,
                restJoystick: !0,
                restOpacity: .5,
                mode: "dynamic",
                zone: document.body,
                lockX: !1,
                lockY: !1
            }, this.config(i), "dynamic" === this.options.mode && (this.options.restOpacity = 0), this.id = w.id, w.id += 1, this.buildEl().stylize(), this.instance = {
                el: this.ui.el,
                on: this.on.bind(this),
                off: this.off.bind(this),
                show: this.show.bind(this),
                hide: this.hide.bind(this),
                add: this.addToDom.bind(this),
                remove: this.removeFromDom.bind(this),
                destroy: this.destroy.bind(this),
                setPosition: this.setPosition.bind(this),
                resetDirection: this.resetDirection.bind(this),
                computeDirection: this.computeDirection.bind(this),
                trigger: this.trigger.bind(this),
                position: this.position,
                frontPosition: this.frontPosition,
                ui: this.ui,
                identifier: this.identifier,
                id: this.id,
                options: this.options
            }, this.instance
        }
        w.prototype = new _, w.constructor = w, w.id = 0, w.prototype.buildEl = function(t) {
            return this.ui = {}, this.options.dataOnly ? this : (this.ui.el = document.createElement("div"), this.ui.back = document.createElement("div"), this.ui.front = document.createElement("div"), this.ui.el.className = "nipple collection_" + this.collection.id, this.ui.back.className = "back", this.ui.front.className = "front", this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id), this.ui.el.appendChild(this.ui.back), this.ui.el.appendChild(this.ui.front), this)
        }, w.prototype.stylize = function() {
            if (this.options.dataOnly) return this;
            var t = this.options.fadeTime + "ms",
                i = function(t, i) {
                    var e = u(t);
                    for (var o in e) e.hasOwnProperty(o) && (e[o] = i);
                    return e
                }("borderRadius", "50%"),
                e = l("transition", "opacity", t),
                o = {};
            return o.el = {
                position: "absolute",
                opacity: this.options.restOpacity,
                display: "block",
                zIndex: 999
            }, o.back = {
                position: "absolute",
                display: "block",
                width: this.options.size + "px",
                height: this.options.size + "px",
                marginLeft: -this.options.size / 2 + "px",
                marginTop: -this.options.size / 2 + "px",
                background: this.options.color,
                opacity: ".5"
            }, o.front = {
                width: this.options.size / 2 + "px",
                height: this.options.size / 2 + "px",
                position: "absolute",
                display: "block",
                marginLeft: -this.options.size / 4 + "px",
                marginTop: -this.options.size / 4 + "px",
                background: this.options.color,
                opacity: ".5"
            }, f(o.el, e), f(o.back, i), f(o.front, i), this.applyStyles(o), this
        }, w.prototype.applyStyles = function(t) {
            for (var i in this.ui)
                if (this.ui.hasOwnProperty(i))
                    for (var e in t[i]) this.ui[i].style[e] = t[i][e];
            return this
        }, w.prototype.addToDom = function() {
            return this.options.dataOnly || document.body.contains(this.ui.el) ? this : (this.options.zone.appendChild(this.ui.el), this)
        }, w.prototype.removeFromDom = function() {
            return this.options.dataOnly || !document.body.contains(this.ui.el) ? this : (this.options.zone.removeChild(this.ui.el), this)
        }, w.prototype.destroy = function() {
            clearTimeout(this.removeTimeout), clearTimeout(this.showTimeout), clearTimeout(this.restTimeout), this.trigger("destroyed", this.instance), this.removeFromDom(), this.off()
        }, w.prototype.show = function(t) {
            var i = this;
            return i.options.dataOnly ? i : (clearTimeout(i.removeTimeout), clearTimeout(i.showTimeout), clearTimeout(i.restTimeout), i.addToDom(), i.restCallback(), setTimeout(function() {
                i.ui.el.style.opacity = 1
            }, 0), i.showTimeout = setTimeout(function() {
                i.trigger("shown", i.instance), "function" == typeof t && t.call(this)
            }, i.options.fadeTime), i)
        }, w.prototype.hide = function(t) {
            var i = this;
            return i.options.dataOnly ? i : (i.ui.el.style.opacity = i.options.restOpacity, clearTimeout(i.removeTimeout), clearTimeout(i.showTimeout), clearTimeout(i.restTimeout), i.removeTimeout = setTimeout(function() {
                var e = "dynamic" === i.options.mode ? "none" : "block";
                i.ui.el.style.display = e, "function" == typeof t && t.call(i), i.trigger("hidden", i.instance)
            }, i.options.fadeTime), i.options.restJoystick && i.setPosition(t, {
                x: 0,
                y: 0
            }), i)
        }, w.prototype.setPosition = function(t, i) {
            var e = this;
            e.frontPosition = {
                x: i.x,
                y: i.y
            };
            var o = e.options.fadeTime + "ms",
                n = {};
            n.front = l("transition", ["top", "left"], o);
            var s = {
                front: {}
            };
            s.front = {
                left: e.frontPosition.x + "px",
                top: e.frontPosition.y + "px"
            }, e.applyStyles(n), e.applyStyles(s), e.restTimeout = setTimeout(function() {
                "function" == typeof t && t.call(e), e.restCallback()
            }, e.options.fadeTime)
        }, w.prototype.restCallback = function() {
            var t = {};
            t.front = l("transition", "none", ""), this.applyStyles(t), this.trigger("rested", this.instance)
        }, w.prototype.resetDirection = function() {
            this.direction = {
                x: !1,
                y: !1,
                angle: !1
            }
        }, w.prototype.computeDirection = function(t) {
            var i, e, o, n = t.angle.radian,
                s = Math.PI / 4,
                r = Math.PI / 2;
            if (n > s && n < 3 * s && !t.lockX ? i = "up" : n > -s && n <= s && !t.lockY ? i = "left" : n > 3 * -s && n <= -s && !t.lockX ? i = "down" : t.lockY || (i = "right"), t.lockY || (e = n > -r && n < r ? "left" : "right"), t.lockX || (o = n > 0 ? "up" : "down"), t.force > this.options.threshold) {
                var d, a = {};
                for (d in this.direction) this.direction.hasOwnProperty(d) && (a[d] = this.direction[d]);
                var p = {};
                for (d in this.direction = {
                        x: e,
                        y: o,
                        angle: i
                    }, t.direction = this.direction, a) a[d] === this.direction[d] && (p[d] = !0);
                if (p.x && p.y && p.angle) return t;
                p.x && p.y || this.trigger("plain", t), p.x || this.trigger("plain:" + e, t), p.y || this.trigger("plain:" + o, t), p.angle || this.trigger("dir dir:" + i, t)
            } else this.resetDirection();
            return t
        };
        var T = w;

        function k(t, i) {
            return this.nipples = [], this.idles = [], this.actives = [], this.ids = [], this.pressureIntervals = {}, this.manager = t, this.id = k.id, k.id += 1, this.defaults = {
                zone: document.body,
                multitouch: !1,
                maxNumberOfNipples: 10,
                mode: "dynamic",
                position: {
                    top: 0,
                    left: 0
                },
                catchDistance: 200,
                size: 100,
                threshold: .1,
                color: "white",
                fadeTime: 250,
                dataOnly: !1,
                restJoystick: !0,
                restOpacity: .5,
                lockX: !1,
                lockY: !1,
                dynamicPage: !1
            }, this.config(i), "static" !== this.options.mode && "semi" !== this.options.mode || (this.options.multitouch = !1), this.options.multitouch || (this.options.maxNumberOfNipples = 1), this.updateBox(), this.prepareNipples(), this.bindings(), this.begin(), this.nipples
        }
        k.prototype = new _, k.constructor = k, k.id = 0, k.prototype.prepareNipples = function() {
            var t = this.nipples;
            t.on = this.on.bind(this), t.off = this.off.bind(this), t.options = this.options, t.destroy = this.destroy.bind(this), t.ids = this.ids, t.id = this.id, t.processOnMove = this.processOnMove.bind(this), t.processOnEnd = this.processOnEnd.bind(this), t.get = function(i) {
                if (void 0 === i) return t[0];
                for (var e = 0, o = t.length; e < o; e += 1)
                    if (t[e].identifier === i) return t[e];
                return !1
            }
        }, k.prototype.bindings = function() {
            this.bindEvt(this.options.zone, "start"), this.options.zone.style.touchAction = "none", this.options.zone.style.msTouchAction = "none"
        }, k.prototype.begin = function() {
            var t = this.options;
            if ("static" === t.mode) {
                var i = this.createNipple(t.position, this.manager.getIdentifier());
                i.add(), this.idles.push(i)
            }
        }, k.prototype.createNipple = function(t, i) {
            var e = c(),
                o = {},
                n = this.options;
            if (t.x && t.y) o = {
                x: t.x - (e.x + this.box.left),
                y: t.y - (e.y + this.box.top)
            };
            else if (t.top || t.right || t.bottom || t.left) {
                var s = document.createElement("DIV");
                s.style.display = "hidden", s.style.top = t.top, s.style.right = t.right, s.style.bottom = t.bottom, s.style.left = t.left, s.style.position = "absolute", n.zone.appendChild(s);
                var r = s.getBoundingClientRect();
                n.zone.removeChild(s), o = t, t = {
                    x: r.left + e.x,
                    y: r.top + e.y
                }
            }
            var d = new T(this, {
                color: n.color,
                size: n.size,
                threshold: n.threshold,
                fadeTime: n.fadeTime,
                dataOnly: n.dataOnly,
                restJoystick: n.restJoystick,
                restOpacity: n.restOpacity,
                mode: n.mode,
                identifier: i,
                position: t,
                zone: n.zone,
                frontPosition: {
                    x: 0,
                    y: 0
                }
            });
            return n.dataOnly || (h(d.ui.el, o), h(d.ui.front, d.frontPosition)), this.nipples.push(d), this.trigger("added " + d.identifier + ":added", d), this.manager.trigger("added " + d.identifier + ":added", d), this.bindNipple(d), d
        }, k.prototype.updateBox = function() {
            this.box = this.options.zone.getBoundingClientRect()
        }, k.prototype.bindNipple = function(t) {
            var i, e = this,
                o = function(t, o) {
                    i = t.type + " " + o.id + ":" + t.type, e.trigger(i, o)
                };
            t.on("destroyed", e.onDestroyed.bind(e)), t.on("shown hidden rested dir plain", o), t.on("dir:up dir:right dir:down dir:left", o), t.on("plain:up plain:right plain:down plain:left", o)
        }, k.prototype.pressureFn = function(t, i, e) {
            var o = this,
                n = 0;
            clearInterval(o.pressureIntervals[e]), o.pressureIntervals[e] = setInterval(function() {
                var e = t.force || t.pressure || t.webkitForce || 0;
                e !== n && (i.trigger("pressure", e), o.trigger("pressure " + i.identifier + ":pressure", e), n = e)
            }.bind(o), 100)
        }, k.prototype.onstart = function(t) {
            var i = this,
                e = i.options,
                o = t;
            t = p(t), i.updateBox();
            return y(t, function(n) {
                i.actives.length < e.maxNumberOfNipples ? i.processOnStart(n) : o.type.match(/^touch/) && (Object.keys(i.manager.ids).forEach(function(e) {
                    if (Object.values(o.touches).findIndex(function(t) {
                            return t.identifier === e
                        }) < 0) {
                        var n = [t[0]];
                        n.identifier = e, i.processOnEnd(n)
                    }
                }), i.actives.length < e.maxNumberOfNipples && i.processOnStart(n))
            }), i.manager.bindDocument(), !1
        }, k.prototype.processOnStart = function(t) {
            var i, e = this,
                o = e.options,
                s = e.manager.getIdentifier(t),
                r = t.force || t.pressure || t.webkitForce || 0,
                d = {
                    x: t.pageX,
                    y: t.pageY
                },
                a = e.getOrCreate(s, d);
            a.identifier !== s && e.manager.removeIdentifier(a.identifier), a.identifier = s;
            var p = function(i) {
                i.trigger("start", i), e.trigger("start " + i.id + ":start", i), i.show(), r > 0 && e.pressureFn(t, i, i.identifier), e.processOnMove(t)
            };
            if ((i = e.idles.indexOf(a)) >= 0 && e.idles.splice(i, 1), e.actives.push(a), e.ids.push(a.identifier), "semi" !== o.mode) p(a);
            else {
                if (!(n(d, a.position) <= o.catchDistance)) return a.destroy(), void e.processOnStart(t);
                p(a)
            }
            return a
        }, k.prototype.getOrCreate = function(t, i) {
            var e, o = this.options;
            return /(semi|static)/.test(o.mode) ? (e = this.idles[0]) ? (this.idles.splice(0, 1), e) : "semi" === o.mode ? this.createNipple(i, t) : (console.warn("Coudln't find the needed nipple."), !1) : e = this.createNipple(i, t)
        }, k.prototype.processOnMove = function(t) {
            var i = this.options,
                e = this.manager.getIdentifier(t),
                o = this.nipples.get(e);
            if (function(t) {
                    return isNaN(t.buttons) ? 0 !== t.pressure : 0 !== t.buttons
                }(t)) {
                if (!o) return console.error("Found zombie joystick with ID " + e), void this.manager.removeIdentifier(e);
                if (i.dynamicPage) {
                    var d = c();
                    p = o.el.getBoundingClientRect(), o.position = {
                        x: d.x + p.left,
                        y: d.y + p.top
                    }
                }
                o.identifier = e;
                var a = o.options.size / 2,
                    p = {
                        x: t.pageX,
                        y: t.pageY
                    };
                i.lockX && (p.y = o.position.y), i.lockY && (p.x = o.position.x);
                var l, u, f, y, m, v, g, b, x = n(p, o.position),
                    O = (l = p, u = o.position, f = u.x - l.x, y = u.y - l.y, r(Math.atan2(y, f))),
                    _ = s(O),
                    w = x / a,
                    T = {
                        distance: x,
                        position: p
                    };
                x > a && (x = a, m = o.position, v = x, b = {
                    x: 0,
                    y: 0
                }, g = s(g = O), b.x = m.x - v * Math.cos(g), b.y = m.y - v * Math.sin(g), p = b);
                var k = p.x - o.position.x,
                    P = p.y - o.position.y;
                o.frontPosition = {
                    x: k,
                    y: P
                }, i.dataOnly || h(o.ui.front, o.frontPosition);
                var E = {
                    identifier: o.identifier,
                    position: p,
                    force: w,
                    pressure: t.force || t.pressure || t.webkitForce || 0,
                    distance: x,
                    angle: {
                        radian: _,
                        degree: O
                    },
                    vector: {
                        x: k / a,
                        y: -P / a
                    },
                    raw: T,
                    instance: o,
                    lockX: i.lockX,
                    lockY: i.lockY
                };
                (E = o.computeDirection(E)).angle = {
                    radian: s(180 - O),
                    degree: 180 - O
                }, o.trigger("move", E), this.trigger("move " + o.id + ":move", E)
            } else this.processOnEnd(t)
        }, k.prototype.processOnEnd = function(t) {
            var i = this,
                e = i.options,
                o = i.manager.getIdentifier(t),
                n = i.nipples.get(o),
                s = i.manager.removeIdentifier(n.identifier);
            n && (e.dataOnly || n.hide(function() {
                "dynamic" === e.mode && (n.trigger("removed", n), i.trigger("removed " + n.id + ":removed", n), i.manager.trigger("removed " + n.id + ":removed", n), n.destroy())
            }), clearInterval(i.pressureIntervals[n.identifier]), n.resetDirection(), n.trigger("end", n), i.trigger("end " + n.id + ":end", n), i.ids.indexOf(n.identifier) >= 0 && i.ids.splice(i.ids.indexOf(n.identifier), 1), i.actives.indexOf(n) >= 0 && i.actives.splice(i.actives.indexOf(n), 1), /(semi|static)/.test(e.mode) ? i.idles.push(n) : i.nipples.indexOf(n) >= 0 && i.nipples.splice(i.nipples.indexOf(n), 1), i.manager.unbindDocument(), /(semi|static)/.test(e.mode) && (i.manager.ids[s.id] = s.identifier))
        }, k.prototype.onDestroyed = function(t, i) {
            this.nipples.indexOf(i) >= 0 && this.nipples.splice(this.nipples.indexOf(i), 1), this.actives.indexOf(i) >= 0 && this.actives.splice(this.actives.indexOf(i), 1), this.idles.indexOf(i) >= 0 && this.idles.splice(this.idles.indexOf(i), 1), this.ids.indexOf(i.identifier) >= 0 && this.ids.splice(this.ids.indexOf(i.identifier), 1), this.manager.removeIdentifier(i.identifier), this.manager.unbindDocument()
        }, k.prototype.destroy = function() {
            for (var t in this.unbindEvt(this.options.zone, "start"), this.nipples.forEach(function(t) {
                    t.destroy()
                }), this.pressureIntervals) this.pressureIntervals.hasOwnProperty(t) && clearInterval(this.pressureIntervals[t]);
            this.trigger("destroyed", this.nipples), this.manager.unbindDocument(), this.off()
        };
        var P = k;

        function E(t) {
            var i, e = this;
            return e.ids = {}, e.index = 0, e.collections = [], e.config(t), e.prepareCollections(), d(window, "resize", function(t) {
                clearTimeout(i), i = setTimeout(function() {
                    var t, i = c();
                    e.collections.forEach(function(e) {
                        e.forEach(function(e) {
                            t = e.el.getBoundingClientRect(), e.position = {
                                x: i.x + t.left,
                                y: i.y + t.top
                            }
                        })
                    })
                }, 100)
            }), e.collections
        }
        E.prototype = new _, E.constructor = E, E.prototype.prepareCollections = function() {
            var t = this;
            t.collections.create = t.create.bind(t), t.collections.on = t.on.bind(t), t.collections.off = t.off.bind(t), t.collections.destroy = t.destroy.bind(t), t.collections.get = function(i) {
                var e;
                return t.collections.every(function(t) {
                    return !(e = t.get(i))
                }), e
            }
        }, E.prototype.create = function(t) {
            return this.createCollection(t)
        }, E.prototype.createCollection = function(t) {
            var i = new P(this, t);
            return this.bindCollection(i), this.collections.push(i), i
        }, E.prototype.bindCollection = function(t) {
            var i, e = this,
                o = function(t, o) {
                    i = t.type + " " + o.id + ":" + t.type, e.trigger(i, o)
                };
            t.on("destroyed", e.onDestroyed.bind(e)), t.on("shown hidden rested dir plain", o), t.on("dir:up dir:right dir:down dir:left", o), t.on("plain:up plain:right plain:down plain:left", o)
        }, E.prototype.bindDocument = function() {
            this.binded || (this.bindEvt(document, "move").bindEvt(document, "end"), this.binded = !0)
        }, E.prototype.unbindDocument = function(t) {
            Object.keys(this.ids).length && !0 !== t || (this.unbindEvt(document, "move").unbindEvt(document, "end"), this.binded = !1)
        }, E.prototype.getIdentifier = function(t) {
            var i;
            return t ? void 0 === (i = void 0 === t.identifier ? t.pointerId : t.identifier) && (i = this.latest || 0) : i = this.index, void 0 === this.ids[i] && (this.ids[i] = this.index, this.index += 1), this.latest = i, this.ids[i]
        }, E.prototype.removeIdentifier = function(t) {
            var i = {};
            for (var e in this.ids)
                if (this.ids[e] === t) {
                    i.id = e, i.identifier = this.ids[e], delete this.ids[e];
                    break
                } return i
        }, E.prototype.onmove = function(t) {
            return this.onAny("move", t), !1
        }, E.prototype.onend = function(t) {
            return this.onAny("end", t), !1
        }, E.prototype.oncancel = function(t) {
            return this.onAny("end", t), !1
        }, E.prototype.onAny = function(t, i) {
            var e, o = this,
                n = "processOn" + t.charAt(0).toUpperCase() + t.slice(1);
            i = p(i);
            return y(i, function(t) {
                e = o.getIdentifier(t), y(o.collections, function(t, i, e) {
                    e.ids.indexOf(i) >= 0 && (e[n](t), t._found_ = !0)
                }.bind(null, t, e)), t._found_ || o.removeIdentifier(e)
            }), !1
        }, E.prototype.destroy = function() {
            this.unbindDocument(!0), this.ids = {}, this.index = 0, this.collections.forEach(function(t) {
                t.destroy()
            }), this.off()
        }, E.prototype.onDestroyed = function(t, i) {
            if (this.collections.indexOf(i) < 0) return !1;
            this.collections.splice(this.collections.indexOf(i), 1)
        };
        var I = new E;
        i.default = {
            create: function(t) {
                return I.create(t)
            },
            factory: I
        }
    }]).default
});