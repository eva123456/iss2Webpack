/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasePage = function () {
    function BasePage(world) {
        _classCallCheck(this, BasePage);

        this.world = world;
    }

    _createClass(BasePage, [{
        key: 'startPage',
        value: function startPage(resource) {}
    }, {
        key: 'stopPage',
        value: function stopPage() {}
    }]);

    return BasePage;
}();

exports.default = BasePage;

;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RES_ERROR = exports.RES_ROLLBACK = exports.RES_OK = undefined;

var _area = __webpack_require__(2);

var _area2 = _interopRequireDefault(_area);

var _menu = __webpack_require__(4);

var _menu2 = _interopRequireDefault(_menu);

var _play_page = __webpack_require__(5);

var _play_page2 = _interopRequireDefault(_play_page);

var _world = __webpack_require__(6);

var _world2 = _interopRequireDefault(_world);

var _loader = __webpack_require__(3);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RES_OK = exports.RES_OK = 0;
var RES_ROLLBACK = exports.RES_ROLLBACK = 1;
var RES_ERROR = exports.RES_ERROR = 2;

window.conf = {
    defaultStartUnit: 100,
    userSize: 5,
    radiusTower: 28,
    betweenTowersPadding: 15
};

window.towerType = {
    DEFAULT: 0
};

(function (window) {
    var needFilesForProjectManifest = [{ id: "playButton", src: "./img/play.png" }];

    var startGame = function startGame() {
        menuPage.stopPage();

        var run = function run() {
            new _play_page2.default(world).startPage(null);
            world.update();
        };
        run();
        //  userService = new Connection(run);
    };

    var area = new _area2.default();

    var world = new _world2.default(area);
    var menuPage = new _menu2.default(world, startGame);

    new _loader2.default(needFilesForProjectManifest, function (result) {
        console.log(result);

        menuPage.startPage(result);
    });
})(window);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//window.Area =

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Area = function () {
    function Area() {
        _classCallCheck(this, Area);

        this.canvas = document.createElement("canvas");
        this.canvas.id = "canvas-area";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 0;
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;

        this.canvas.height = document.documentElement.clientHeight;
        this.canvas.width = document.documentElement.clientWidth;

        document.body = document.createElement("body");
        document.body.appendChild(this.canvas);

        this.world = new createjs.Stage(this.canvas.id);
        createjs.Touch.enable(this.world);
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.rectSize = 100;
        this.borderSize = 8;

        this.initArea();
        this.world.stage.update();
    }

    _createClass(Area, [{
        key: "initArea",
        value: function initArea() {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            var xCount = (this.width / rectSize | 0) + 1;
            var yCount = (this.height / rectSize | 0) + 1;
            var cell = new createjs.Shape();
            for (var i = 0; i < xCount; i++) {
                for (var j = 0; j < yCount; j++) {
                    cell.graphics.beginFill("#fffbf7").drawRect(i * rectSize, j * rectSize, rectSize, rectSize).beginFill("#dbffd0").drawRect(i * rectSize + borderSize, j * rectSize + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
                }
            }
            this.world.stage.addChild(cell);
        }
    }, {
        key: "getExactPosition",
        value: function getExactPosition(x, y) {
            var cx = x / this.rectSize | 0;
            var cy = y / this.rectSize | 0;
            cx *= this.rectSize;
            cy *= this.rectSize;
            cx += this.rectSize / 2 | 0;
            cy += this.rectSize / 2 | 0;
            cx += this.borderSize / 2;
            cy += this.borderSize / 2;
            return { x: cx, y: cy };
        }
    }, {
        key: "getCellPosition",
        value: function getCellPosition(x, y) {
            var cx = x / this.rectSize | 0;
            var cy = y / this.rectSize | 0;
            return { x: cx, y: cy };
        }
    }, {
        key: "getPixelPoint",
        value: function getPixelPoint(x, y) {
            var px = x * this.rectSize + (this.rectSize + this.borderSize) / 2;
            var py = y * this.rectSize + (this.rectSize + this.borderSize) / 2;
            return { x: px, y: py };
        }
    }, {
        key: "markSelectedCell",
        value: function markSelectedCell(x, y) {
            var rectSize = this.rectSize;
            var borderSize = this.borderSize;
            x *= rectSize;
            y *= rectSize;

            var cell = new createjs.Shape();
            cell.graphics.beginFill("#beffb1").drawRect(x + borderSize, y + borderSize, rectSize - borderSize, rectSize - borderSize).endFill();
            this.world.stage.addChild(cell);
            this.world.stage.update();
        }
    }]);

    return Area;
}();

exports.default = Area;
;
//;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
    function Loader(srcManifest, callback) {
        _classCallCheck(this, Loader);

        this.queue = new createjs.LoadQueue(true);
        this.queue.loadManifest(srcManifest);
        this.queue.on("complete", this.handleLoadAllFile.bind(this));

        this.fromCallback = callback;
    }

    _createClass(Loader, [{
        key: "handleLoadAllFile",
        value: function handleLoadAllFile(event) {
            // Example work with queue
            /* queue.getResult(Name) */
            // TODO check errors

            this.fromCallback(this.queue);
        }
    }]);

    return Loader;
}();

exports.default = Loader;
;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base_page = __webpack_require__(0);

var _base_page2 = _interopRequireDefault(_base_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuPage = function (_BasePage) {
    _inherits(MenuPage, _BasePage);

    function MenuPage(world, callBackIfRun) {
        _classCallCheck(this, MenuPage);

        var _this = _possibleConstructorReturn(this, (MenuPage.__proto__ || Object.getPrototypeOf(MenuPage)).call(this, world));

        _this.callbackIfRun = callBackIfRun;

        _this.children = [];

        _this.buttonMenu = null;
        _this.menuShapes = null;

        _this.ticker = 0;
        return _this;
    }

    _createClass(MenuPage, [{
        key: 'startPage',
        value: function startPage(resource) {
            var _this2 = this;

            var cenX = this.world.basicCenter.x,
                cenY = this.world.basicCenter.y;

            this.buttonMenu = this.world.newImage(resource.getResult("playButton"));
            this.buttonMenu.x = cenX - this.buttonMenu.image.width / 2;
            this.buttonMenu.y = cenY - this.buttonMenu.image.height / 2;

            var onClickRun = function onClickRun(event) {
                _this2.callbackIfRun();
            };
            this.buttonMenu.on('click', onClickRun.bind(this));

            /*
            let children = [];
             this.menuGraph = new GraphTree(this.world);
             let cellPos = this.world.area.getCellPosition(cenX, cenY);
            children.push(this.menuGraph.addNewVertexToCurrent({x: cellPos.x + 3, y: cellPos.y + 4}));
            children.push(this.menuGraph.addNewVertexByMove(5, 5));
            children.push(this.menuGraph.addNewVertexByNode({x: 5, y: 10}, this.menuGraph.getCurrentVertex));
            children.push(this.menuGraph.addNewVertexByMove(7, 13));
            children.push(this.menuGraph.addNewVertexByMove(7, -5));
            this.children = children;
             this.menuShapes = [
                {angle: 0, left: 0, right: this.world.getWidth / 2.5, top: 0, down: this.world.getHeight / 2.5},
                {angle: 100, left: 0, right: this.world.getWidth / 2.5, top: 0, down: this.world.getHeight / 2.5},
                {
                    angle: 300,
                    left: this.world.getWidth / 1.5,
                    right: this.world.getWidth,
                    top: 0,
                    down: this.world.getHeight / 2.5
                },
                {
                    angle: 40,
                    left: 0,
                    right: this.world.getWidth / 2.5,
                    top: this.world.getHeight / 1.5,
                    down: this.world.getHeight
                },
                {
                    angle: 200,
                    left: this.world.getWidth / 1.5,
                    right: this.world.getWidth,
                    top: this.world.getHeight / 1.5,
                    down: this.world.getHeight
                }
            ];
            */
            createjs.Ticker.addEventListener("tick", this.tick.bind(this));
            createjs.Ticker.setInterval(100);
            createjs.Ticker.setFPS(40);
        }
    }, {
        key: 'stopPage',
        value: function stopPage() {
            createjs.Ticker.setPaused(true);
            createjs.Ticker.removeEventListener("tick", this.tick);

            // this.menuGraph.destruct();
            this.world.stage.removeChild(this.buttonMenu);
            this.world.stage.clear();

            this.world.update();
        }
    }, {
        key: 'tick',
        value: function tick(event) {
            // console.log(createjs.Ticker.getMeasuredFPS());
            var randomInteger = window.randomInteger;
            if (!createjs.Ticker.getPaused()) {
                this.ticker++;
                /*
                let menuShapes = this.menuShapes;
                 this.children.forEach(function (item, index) {
                    menuShapes[index].angle += window.randomInteger(-20, 20) * (Math.PI / 180); // randomInteger(0, 360) * (Math.PI / 180);
                     item.data.x += Math.cos(menuShapes[index].angle);
                    item.data.y += Math.sin(menuShapes[index].angle);
                });
                 this.menuGraph.showNodes();
                */
                this.world.update();
            }
        }
    }]);

    return MenuPage;
}(_base_page2.default);

exports.default = MenuPage;

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base_page = __webpack_require__(0);

var _base_page2 = _interopRequireDefault(_base_page);

var _user = __webpack_require__(11);

var _user2 = _interopRequireDefault(_user);

var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayPage = function (_BasePage) {
    _inherits(PlayPage, _BasePage);

    function PlayPage(world) {
        _classCallCheck(this, PlayPage);

        /*
         this.userService = userService;
         this.userService.eventReceive = this.updateAllUsers.bind(this);
         */

        var _this = _possibleConstructorReturn(this, (PlayPage.__proto__ || Object.getPrototypeOf(PlayPage)).call(this, world));

        _this.enemies = [];
        _this.user = null;

        _this.connection = null;
        _this.resource = null;
        return _this;
    }

    _createClass(PlayPage, [{
        key: 'startPage',
        value: function startPage(connection, resource) {
            // if(connection === null)
            //    return RES_ERROR;


            this.connection = connection;
            this.resource = resource;

            this.initScene("player1");

            return _main2.default;
        }
    }, {
        key: 'initScene',
        value: function initScene(nameUser) {
            // TODO get position from server
            this.user = new _user2.default(null, this.world, { x: 3, y: 3 }, nameUser || "Wonder");
        }
    }, {
        key: 'updateAllUsers',
        value: function updateAllUsers(json) {
            // TODO Noraml method`
            /*
            console.log("receive");
            let objects = json["newUsersPositions"];
            for (let key in objects) {
                console.log(objects[key]["NewPoint"]["x"]);
                console.log(objects[key]["NewPoint"]["y"]);
                this.enemies.push(new User(this.world, {
                    x: objects[key]["NewPoint"]["x"],
                    y: objects[key]["NewPoint"]["y"]
                }));
            }
            */
        }
    }]);

    return PlayPage;
}(_base_page2.default);

exports.default = PlayPage;
;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function () {
    function World(area) {
        _classCallCheck(this, World);

        this.canvas = document.createElement("canvas");
        this.canvas.id = "canvas-game";
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 1;
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.canvas.style.background = "transparent";

        this.canvas.height = document.documentElement.clientHeight;
        this.canvas.width = document.documentElement.clientWidth;

        document.body.appendChild(this.canvas);

        this.world = new createjs.Stage(this.canvas.id);
        createjs.Touch.enable(this.world);
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.area = area;
    }

    _createClass(World, [{
        key: "update",
        value: function update() {
            this.stage.update();
        }
    }, {
        key: "setCallBack",
        value: function setCallBack(event, func) {
            this.world.on(event, func);
        }
    }, {
        key: "appendOnMap",
        value: function appendOnMap(child) {
            this.world.stage.addChild(child); // TODO normal coor
        }

        /** Fabric draw **/

    }, {
        key: "newShape",
        value: function newShape(position, radius, color, visible) {
            var circle = new createjs.Shape();
            circle.visibility = visible || true;

            var pos = position || { x: 0, y: 0 };

            circle.graphics.beginFill(color).drawCircle(pos.x, pos.y, radius);
            this.world.stage.addChild(circle);
            return circle;
        }
    }, {
        key: "newLine",
        value: function newLine(color, visible) {
            var line = new createjs.Shape();
            line.graphics.setStrokeStyle(3);
            line.visibility = visible || true;

            this.world.addChild(line);
            return line;
        }
    }, {
        key: "newImage",
        value: function newImage(file, visible) {
            /*var box = new createjs.Shape();
             box.graphics.beginLinearGradientFill(["#ff0000", "#0000ff"], [0, 1], 0, 0, 0, 100);
             box.graphics.drawCircle(0, 0, 100);
             box.cache(0, 0, 100, 100);
              let image = new createjs.Bitmap(file);
             image.filters = [
             new createjs.AlphaMapFilter(box.cacheCanvas)
             ];*/

            var image = new createjs.Bitmap(file);

            this.world.addChild(image);
            return image;
        }
    }, {
        key: "stage",
        get: function get() {
            return this.world;
        }
    }, {
        key: "basicCenter",
        get: function get() {
            return { x: this.world.canvas.width / 2, y: this.world.canvas.height / 2 };
        }
    }, {
        key: "getWidth",
        get: function get() {
            return this.width;
        }
    }, {
        key: "getHeight",
        get: function get() {
            return this.height;
        }
    }]);

    return World;
}();

exports.default = World;
;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
    function GameObject(world, point, nameUser) {
        _classCallCheck(this, GameObject);

        this.world = world;
        this.name = nameUser;
    }

    _createClass(GameObject, [{
        key: "drawObject",
        value: function drawObject() {
            console.log("Draw NoObject!");
        }
    }, {
        key: "animation",
        value: function animation(dx, dy) {
            console.log("Animate NoObject!");
        }
    }]);

    return GameObject;
}();

exports.default = GameObject;
;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tree = __webpack_require__(10);

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphTree = function () {
    function GraphTree(map) {
        _classCallCheck(this, GraphTree);

        this.world = map;

        this.tree = new _tree2.default();
        this.currentVertex = null;

        this.shapes = new Map();
        this.graphLine = null;
    }

    _createClass(GraphTree, [{
        key: 'addNewVertexToCurrent',
        value: function addNewVertexToCurrent(data) {
            this.currentVertex = this.tree.addNode(data, this.currentVertex);
            return this.currentVertex;
        }
    }, {
        key: 'addNewVertexByNode',
        value: function addNewVertexByNode(data, node) {
            return this.tree.addNode(data, node);
        }
    }, {
        key: 'addNewVertexByMove',
        value: function addNewVertexByMove(dx, dy) {
            var data = this.currentVertex.data;
            data.posX += dx;
            data.posX += dy;

            this.currentVertex = this.tree.addNode(data, this.currentVertex);
            return this.currentVertex;
        }
    }, {
        key: 'destruct',
        value: function destruct() {
            this.world.stage.removeChild(this.graphLine);
            console.log(this.shapes);
            this.shapes.forEach(function (value, key) {
                key.destruct();
            });
        }
    }, {
        key: 'setNode',
        value: function setNode(tower) {
            var coordinatesX = tower.pointX,
                coordinatesY = tower.pointY;

            if (!this.shapes.has(tower)) {
                this.shapes.set(tower, 1 /* default */);
            }

            tower.setRealCoordinates(coordinatesX, coordinatesY);
            tower.draw();
        }
    }, {
        key: 'showNodes',
        value: function showNodes() {
            this.graphLine = this.graphLine || this.world.newLine("red");
            this.graphLine.graphics.clear();

            var setBack = function setBack(toNode, fromNode) {
                var pxPoint = this.world.area.getPixelPoint(toNode.data.pointX, toNode.data.pointY);
                this.graphLine.graphics.moveTo(pxPoint.x, pxPoint.y);
            };

            var iter = this.tree.iterator(setBack.bind(this));

            var last_x = void 0,
                last_y = void 0;

            for (;;) {
                var node = iter.nextNode();
                if (!node) break;

                // debugger;

                var nowPoint = this.world.area.getPixelPoint(node.data.pointX, node.data.pointY);

                if (node === this.tree.root) {
                    last_x = nowPoint.x;
                    last_y = nowPoint.y;

                    this.graphLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");
                    this.graphLine.graphics.moveTo(last_x, last_y);

                    this.setNode(node.data);
                    continue;
                }

                this.setNode(node.data);

                debugger;
                this.drawWireBetweenTowers(nowPoint, { posX: last_x, posY: last_y });

                last_x = nowPoint.x;
                last_y = nowPoint.y;
            }

            this.graphLine.graphics.endStroke();
        }
    }, {
        key: 'drawWireBetweenTowers',
        value: function drawWireBetweenTowers(to, from, anim) {
            var x = to.x,
                y = to.y;
            var l = Math.sqrt(Math.pow(x - from.posX, 2) + Math.pow(y - from.posY, 2));

            var byLine = function byLine(lamda) {
                return { posX: (from.posX + lamda * x) / (1 + lamda), posY: (from.posY + lamda * y) / (1 + lamda) };
            };

            var radius = conf.radiusTower + conf.betweenTowersPadding;
            var lamda = (l - radius) / radius;

            var fromPoint = byLine(1 / lamda);
            var toPoint = byLine(lamda);

            this.graphLine.graphics.moveTo(fromPoint.posX, fromPoint.posY);
            this.graphLine.graphics.lineTo(toPoint.posX, toPoint.posY);
            this.graphLine.graphics.moveTo(x, y);
        }
    }, {
        key: 'getTree',
        get: function get() {
            return this.tree;
        }
    }, {
        key: 'getCurrentVertex',
        get: function get() {
            return this.currentVertex;
        }
    }]);

    return GraphTree;
}();

exports.default = GraphTree;
;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tower = function () {
    function Tower(world, pointX, pointY, typeOfTower, units) {
        _classCallCheck(this, Tower);

        this.world = world;
        this.pointX = pointX; // TODO to normal
        this.pointY = pointY;

        var pxPoint = this.world.area.getPixelPoint(pointX, pointY);
        this.realX = pxPoint.x;
        this.realY = pxPoint.y;

        this.typeOfTower = typeOfTower;
        this.cache = null;

        this.units = units;
    }

    _createClass(Tower, [{
        key: "draw",
        value: function draw() {
            switch (this.typeOfTower) {
                case towerType.DEFAULT:
                    this.drawStandartImpl();
                    break;
                default:
                    break;
            }
        }
    }, {
        key: "setRealCoordinates",
        value: function setRealCoordinates(x, y) {
            var pxPoint = this.world.area.getPixelPoint(x, y);
            this.realX = pxPoint.x;
            this.realY = pxPoint.y;
        }
    }, {
        key: "setCell",
        value: function setCell(pointX, pointY) {
            this.pointX = pointX;
            this.pointY = pointY;
        }
    }, {
        key: "setTextCoordinates",
        value: function setTextCoordinates(x, y) {
            if (this.cache == null) return;

            this.cache.text.x = x;
            this.cache.text.y = y;

            if (this.units) this.cache.text.text = this.units;
        }
    }, {
        key: "setTowerCoordinates",
        value: function setTowerCoordinates(x, y) {
            if (this.cache == null) return;

            this.cache.circle.x = x;
            this.cache.circle.y = y;
        }
    }, {
        key: "destruct",
        value: function destruct() {
            if (this.cache) {
                this.world.stage.removeChild(this.cache.circle);
                this.world.stage.removeChild(this.cache.text);
            }
        }
    }, {
        key: "drawStandartImpl",
        value: function drawStandartImpl() {
            if (this.cache == null) {
                this.cache = {};

                var shape = new createjs.Shape();
                shape.graphics.beginStroke("#ff0000").drawCircle(0, 0, conf.radiusTower);

                this.cache.circle = shape;

                this.cache.text = new createjs.Text(this.units, "20px Arial", "#ff7700");
                this.cache.text.textBaseline = "middle";
                this.cache.text.textAlign = "center";

                this.setTextCoordinates(this.realX, this.realY);
                this.setTowerCoordinates(this.realX, this.realY);

                this.world.appendOnMap(this.cache.circle);
                this.world.appendOnMap(this.cache.text);
            }

            this.setTextCoordinates(this.realX, this.realY);
            this.setTowerCoordinates(this.realX, this.realY);
        }
    }]);

    return Tower;
}();

exports.default = Tower;
;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Cyclic graph */

var Tree = function () {
    function Tree() {
        _classCallCheck(this, Tree);

        this.rootNode = null;
    }

    _createClass(Tree, [{
        key: "iterator",
        value: function iterator(callbackDown) {
            return Tree.iteratorByNode(this.rootNode, callbackDown);
        }
    }, {
        key: "addNode",
        value: function addNode(data, node) {
            if (!this.rootNode) {
                this.rootNode = new NodeImpl(data, null);
                return this.rootNode;
            }

            var added = new NodeImpl(data, node);
            node.addNode(added);

            return added;
        }
    }, {
        key: "root",
        get: function get() {
            return this.rootNode;
        }
    }], [{
        key: "iteratorByNode",
        value: function iteratorByNode(node, callbackDown) {
            return {
                currentNode: node,
                stackImpl: [0],
                stopNodeImpl: node.parentNode,
                callBackIfDown: callbackDown,
                nextNode: function nextNode() {
                    if (!this.currentNode) {
                        return null;
                    }

                    var return_value = this.currentNode;
                    var lastValueStack = this.stackImpl[this.stackImpl.length - 1];

                    if (!(this.currentNode.nextNode.length > lastValueStack)) {
                        this.stackImpl.pop();

                        this.currentNode = function down(node, stack, stop_value, callback) {
                            if (node == null) {
                                return null;
                            }
                            var last = stack[stack.length - 1];
                            if (node.nextNode.length > last) {
                                return node;
                            } else {
                                stack.pop();

                                if (node.parentNode === stop_value) {
                                    return null;
                                }

                                if (callback) {
                                    callback(node, node.parentNode); // call system function
                                }
                                return down(node.parentNode, stack, stop_value);
                            }
                        }(this.currentNode.parentNode, this.stackImpl, this.stopNodeImpl, this.callBackIfDown);

                        lastValueStack = this.stackImpl[this.stackImpl.length - 1];
                    }

                    if (this.currentNode) {
                        this.stackImpl[this.stackImpl.length - 1]++;
                        this.stackImpl.push(0);
                        this.currentNode = this.currentNode.nextNode[lastValueStack];
                    }

                    return return_value;
                }
            };
        }
    }]);

    return Tree;
}();

exports.default = Tree;
;

function NodeImpl(data, parentNode) {
    this.nextNode = [];
    this.parentNode = parentNode;
    // Это нода
    this.data = data; // in data we need id игрока,цвет игрока, И КООРДИНАТЫ, КОТОРЫЕ В ДВУХМЕРНОМ МАССИВЕ
    // ЕЩЕ нужно хранить количество поинтов в данный момент
}

NodeImpl.prototype.addNode = function (node) {
    this.nextNode.push(node);
    return this.nextNode;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game_object = __webpack_require__(7);

var _game_object2 = _interopRequireDefault(_game_object);

var _user_interface = __webpack_require__(13);

var _user_interface2 = _interopRequireDefault(_user_interface);

var _user_action = __webpack_require__(12);

var _user_action2 = _interopRequireDefault(_user_action);

var _graph_tree = __webpack_require__(8);

var _graph_tree2 = _interopRequireDefault(_graph_tree);

var _tower = __webpack_require__(9);

var _tower2 = _interopRequireDefault(_tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_GameObject) {
    _inherits(User, _GameObject);

    function User(connection, world, point, nameUser) {
        _classCallCheck(this, User);

        var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, world, nameUser));

        _this.userInterface = new _user_interface2.default(world, {
            "getRealPosition": _this.myRealPosition.bind(_this),
            "addTower": _this.addNewTower.bind(_this)
        });

        _this.userAction = new _user_action2.default(connection);

        /*** Events ***/
        // connection.eventListen("bonus", (json) => {
        //     // parse json and call newBonus
        // });
        /**************/
        _this.myGraph = new _graph_tree2.default(world);

        var tower = new _tower2.default(_this.world, point.x, point.y, towerType.DEFAULT, conf.defaultStartUnit);
        _this.currentNode = _this.myGraph.addNewVertexToCurrent(tower);

        _this.drawObject();
        return _this;
    }

    /**
     *
     * @param pointNewTower
     */


    _createClass(User, [{
        key: 'addNewTower',
        value: function addNewTower(pointNewTower) {
            var tower = new _tower2.default(this.world, pointNewTower.x, pointNewTower.y, towerType.DEFAULT, this.currentNode.data.units / 2);
            this.currentNode = this.myGraph.addNewVertexToCurrent(tower);

            this.positionRealX = pointNewTower.x;
            this.positionRealY = pointNewTower.y;

            this.drawObject();
        }
    }, {
        key: 'createVertextData',
        value: function createVertextData(position, units) {
            if ((typeof position === 'undefined' ? 'undefined' : _typeof(position)) !== "object") return null;

            position["units"] = units;
            return position;
        }
    }, {
        key: 'newBonus',
        value: function newBonus(position) {}
    }, {
        key: 'myRealPosition',
        value: function myRealPosition() {
            return { x: this.currentNode.data.realX, y: this.currentNode.data.realY };
        }
    }, {
        key: 'drawObject',
        value: function drawObject() {
            this.myGraph.showNodes();
        }
    }]);

    return User;
}(_game_object2.default);

exports.default = User;
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserAction = function () {
    function UserAction(connection) {
        _classCallCheck(this, UserAction);

        this.connection = connection;
        this.cientId = null;
    }

    _createClass(UserAction, [{
        key: 'setStart',
        value: function setStart(world, clientId) {
            this.clientId = clientId;
        }
    }, {
        key: 'createTown',
        value: function createTown(world, to) {
            if (this.clientId === null) return;
        }
    }, {
        key: 'setStop',
        value: function setStop(world) {}
    }]);

    return UserAction;
}();

exports.default = UserAction;
;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInterface = function () {
    function UserInterface(world, packCallback) {
        _classCallCheck(this, UserInterface);

        this.world = world; // get area
        this.world.setCallBack("stagemousemove", this.eventMove.bind(this));

        this.probablyLine = this.world.newLine("black");

        this.probablyCircle = this.world.newShape(null, conf.userSize, "DeepSkyBlue", false);
        this.probablyCircle.on("click", this.eventPutNewVertex.bind(this));

        this.packCallback = packCallback;
    }

    _createClass(UserInterface, [{
        key: "eventMove",
        value: function eventMove(event) {
            this.probablyCircle.x = event.stageX;
            this.probablyCircle.y = event.stageY;
            this.probablyLine.graphics.clear();
            this.probablyLine.graphics.setStrokeStyle(1).beginStroke("#00ff00");

            var _packCallback$getReal = this.packCallback["getRealPosition"](),
                x = _packCallback$getReal.x,
                y = _packCallback$getReal.y;

            this.probablyLine.graphics.moveTo(x, y);

            this.probablyLine.graphics.lineTo(event.stageX, event.stageY);
            this.probablyLine.graphics.endStroke();

            this.world.update();
        }
    }, {
        key: "eventPutNewVertex",
        value: function eventPutNewVertex(event) {
            var newX = parseInt(event.target.x),
                newY = parseInt(event.target.y);
            var newPos = this.world.area.getCellPosition(newX, newY);

            this.packCallback["addTower"](newPos);

            this.world.update();
        }
    }]);

    return UserInterface;
}();

exports.default = UserInterface;
;

/***/ })
/******/ ]);