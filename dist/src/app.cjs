/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const-enums/CE_CASH_UNIT.ts":
/*!*****************************************!*\
  !*** ./src/const-enums/CE_CASH_UNIT.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var CE_CASH_UNIT = {
    ZERO: 0,
    ONE_HUNDRED: 100,
    FIVE_HUNDRED: 500,
    ONE_THOUSAND: 1000,
    FIVE_THOUSAND: 5000,
    TEN_THOUSAND: 10000,
};
exports["default"] = CE_CASH_UNIT;


/***/ }),

/***/ "./src/const-enums/CE_ITEM_NAME.ts":
/*!*****************************************!*\
  !*** ./src/const-enums/CE_ITEM_NAME.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var CE_ITEM_NAME = {
    COLA: 'cola',
    WATER: 'water',
    COFFEE: 'coffee',
};
exports["default"] = CE_ITEM_NAME;


/***/ }),

/***/ "./src/const-enums/CE_PAYMENT_METHOD.ts":
/*!**********************************************!*\
  !*** ./src/const-enums/CE_PAYMENT_METHOD.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var CE_PAYMENT_METHOD = {
    CARD: 'card',
    CASH: 'cash',
};
exports["default"] = CE_PAYMENT_METHOD;


/***/ }),

/***/ "./src/handlers/getHealth.ts":
/*!***********************************!*\
  !*** ./src/handlers/getHealth.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHealthRoute = exports.getHealthHandler = void 0;
function getHealthHandler(_req) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, {
                    timestamp: new Date().toISOString(),
                }];
        });
    });
}
exports.getHealthHandler = getHealthHandler;
function getHealthRoute(server) {
    server.get('/', {
        schema: {},
    }, getHealthHandler);
}
exports.getHealthRoute = getHealthRoute;


/***/ }),

/***/ "./src/handlers/v1/getItem.ts":
/*!************************************!*\
  !*** ./src/handlers/v1/getItem.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getItemRoute = exports.getItemHandler = void 0;
var JSC_IReqGetItem_1 = __importDefault(__webpack_require__(/*! #interfaces/items/JSC_IReqGetItem */ "./src/interfaces/items/JSC_IReqGetItem.ts"));
var JSC_IResGetItem_1 = __importDefault(__webpack_require__(/*! #interfaces/items/JSC_IResGetItem */ "./src/interfaces/items/JSC_IResGetItem.ts"));
var selectItem_1 = __importDefault(__webpack_require__(/*! #modules/items/selectItem */ "./src/modules/items/selectItem.ts"));
var validateItem_1 = __importDefault(__webpack_require__(/*! #modules/items/validateItem */ "./src/modules/items/validateItem.ts"));
var serializerItemDto_1 = __importDefault(__webpack_require__(/*! #serializers/serializerItemDto */ "./src/serializers/serializerItemDto.ts"));
function getItemHandler(req) {
    return __awaiter(this, void 0, void 0, function () {
        var selectedItemEntity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, selectItem_1.default)({
                        name: req.params.name,
                    })];
                case 1:
                    selectedItemEntity = _a.sent();
                    (0, validateItem_1.default)({ itemEntity: selectedItemEntity });
                    return [2, (0, serializerItemDto_1.default)(selectedItemEntity)];
            }
        });
    });
}
exports.getItemHandler = getItemHandler;
function getItemRoute(server) {
    var _a, _b;
    server.get('/v1/items/:name', {
        schema: {
            summary: '상품 조회 API - 상품 검증',
            headers: (_a = JSC_IReqGetItem_1.default.properties) === null || _a === void 0 ? void 0 : _a.headers,
            params: (_b = JSC_IReqGetItem_1.default.properties) === null || _b === void 0 ? void 0 : _b.params,
            response: {
                200: JSC_IResGetItem_1.default,
            },
        },
    }, getItemHandler);
}
exports.getItemRoute = getItemRoute;


/***/ }),

/***/ "./src/handlers/v1/getItems.ts":
/*!*************************************!*\
  !*** ./src/handlers/v1/getItems.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getItemsRoute = exports.getItemsHandler = void 0;
var JSC_IReqGetItems_1 = __importDefault(__webpack_require__(/*! #interfaces/items/JSC_IReqGetItems */ "./src/interfaces/items/JSC_IReqGetItems.ts"));
var JSC_IResGetItems_1 = __importDefault(__webpack_require__(/*! #interfaces/items/JSC_IResGetItems */ "./src/interfaces/items/JSC_IResGetItems.ts"));
var displayItems_1 = __importDefault(__webpack_require__(/*! #modules/items/displayItems */ "./src/modules/items/displayItems.ts"));
var serializerItemDto_1 = __importDefault(__webpack_require__(/*! #serializers/serializerItemDto */ "./src/serializers/serializerItemDto.ts"));
function getItemsHandler(_req) {
    return __awaiter(this, void 0, void 0, function () {
        var itemEntities, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, displayItems_1.default)()];
                case 1:
                    itemEntities = _a.sent();
                    items = itemEntities.map(serializerItemDto_1.default);
                    return [2, {
                            items: items,
                        }];
            }
        });
    });
}
exports.getItemsHandler = getItemsHandler;
function getItemsRoute(server) {
    var _a;
    server.get('/v1/items', {
        schema: {
            summary: '상품 목록 조회 API - 상품 진열',
            headers: (_a = JSC_IReqGetItems_1.default.properties) === null || _a === void 0 ? void 0 : _a.headers,
            response: {
                200: JSC_IResGetItems_1.default,
            },
        },
    }, getItemsHandler);
}
exports.getItemsRoute = getItemsRoute;


/***/ }),

/***/ "./src/handlers/v1/postPayment.ts":
/*!****************************************!*\
  !*** ./src/handlers/v1/postPayment.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.postPaymentRoute = exports.postPaymentHandler = void 0;
var JSC_IReqPostPayment_1 = __importDefault(__webpack_require__(/*! #interfaces/payments/JSC_IReqPostPayment */ "./src/interfaces/payments/JSC_IReqPostPayment.ts"));
var JSC_IResPostPayment_1 = __importDefault(__webpack_require__(/*! #interfaces/payments/JSC_IResPostPayment */ "./src/interfaces/payments/JSC_IResPostPayment.ts"));
var mockupDispenseChange_1 = __importDefault(__webpack_require__(/*! #mockups/mockupDispenseChange */ "./src/mockups/mockupDispenseChange.ts"));
var mockupDispenseItem_1 = __importDefault(__webpack_require__(/*! #mockups/mockupDispenseItem */ "./src/mockups/mockupDispenseItem.ts"));
var selectItem_1 = __importDefault(__webpack_require__(/*! #modules/items/selectItem */ "./src/modules/items/selectItem.ts"));
var executePayment_1 = __importDefault(__webpack_require__(/*! #modules/payments/executePayment */ "./src/modules/payments/executePayment.ts"));
var serializerPaymentDto_1 = __importDefault(__webpack_require__(/*! #serializers/serializerPaymentDto */ "./src/serializers/serializerPaymentDto.ts"));
function postPaymentHandler(req) {
    return __awaiter(this, void 0, void 0, function () {
        var itemEntity, _a, totalInsertedCash, changeMap;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, (0, selectItem_1.default)({
                        name: req.body.name,
                    })];
                case 1:
                    itemEntity = _b.sent();
                    return [4, (0, executePayment_1.default)({ itemEntity: itemEntity, paymentMethod: req.body.paymentMethod })];
                case 2:
                    _a = _b.sent(), totalInsertedCash = _a.totalInsertedCash, changeMap = _a.changeMap;
                    if (!(changeMap != null && changeMap.size > 0)) return [3, 4];
                    return [4, (0, mockupDispenseChange_1.default)({ changeMap: changeMap })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [4, (0, mockupDispenseItem_1.default)({ itemEntity: itemEntity })];
                case 5:
                    _b.sent();
                    return [2, (0, serializerPaymentDto_1.default)({
                            itemEntity: itemEntity,
                            totalInsertedCash: totalInsertedCash,
                            changeMap: changeMap,
                        })];
            }
        });
    });
}
exports.postPaymentHandler = postPaymentHandler;
function postPaymentRoute(server) {
    var _a, _b;
    server.post('/v1/payments', {
        schema: {
            summary: '결제 API',
            headers: (_a = JSC_IReqPostPayment_1.default.properties) === null || _a === void 0 ? void 0 : _a.headers,
            body: (_b = JSC_IReqPostPayment_1.default.properties) === null || _b === void 0 ? void 0 : _b.body,
            response: {
                200: JSC_IResPostPayment_1.default,
            },
        },
    }, postPaymentHandler);
}
exports.postPaymentRoute = postPaymentRoute;


/***/ }),

/***/ "./src/interfaces/items/JSC_IReqGetItem.ts":
/*!*************************************************!*\
  !*** ./src/interfaces/items/JSC_IReqGetItem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var JSC_IReqGetItem = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        headers: {
            type: 'object',
            properties: {
                'x-request-id': {
                    type: 'string',
                    description: '요청 구분을 위한 id',
                    format: 'uuid',
                    examples: ['49c1e4d6-9bc5-4d66-9eb7-41715e2b62c5'],
                },
            },
            required: ['x-request-id'],
        },
        params: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    enum: ['cola', 'water', 'coffee'],
                },
            },
            required: ['name'],
        },
    },
    required: ['headers', 'params'],
    definitions: {},
};
exports["default"] = JSC_IReqGetItem;


/***/ }),

/***/ "./src/interfaces/items/JSC_IReqGetItems.ts":
/*!**************************************************!*\
  !*** ./src/interfaces/items/JSC_IReqGetItems.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var JSC_IReqGetItems = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        headers: {
            type: 'object',
            properties: {
                'x-request-id': {
                    type: 'string',
                    description: '요청 구분을 위한 id',
                    format: 'uuid',
                    examples: ['49c1e4d6-9bc5-4d66-9eb7-41715e2b62c5'],
                },
            },
            required: ['x-request-id'],
        },
    },
    required: ['headers'],
    definitions: {},
};
exports["default"] = JSC_IReqGetItems;


/***/ }),

/***/ "./src/interfaces/items/JSC_IResGetItem.ts":
/*!*************************************************!*\
  !*** ./src/interfaces/items/JSC_IResGetItem.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var JSC_IResGetItem = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            enum: ['cola', 'water', 'coffee'],
        },
        price: {
            type: 'number',
            description: '가격',
        },
        quantity: {
            type: 'number',
            description: '수량',
        },
    },
    required: ['name', 'price', 'quantity'],
    definitions: {},
};
exports["default"] = JSC_IResGetItem;


/***/ }),

/***/ "./src/interfaces/items/JSC_IResGetItems.ts":
/*!**************************************************!*\
  !*** ./src/interfaces/items/JSC_IResGetItems.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var JSC_IResGetItems = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        items: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        enum: ['cola', 'water', 'coffee'],
                    },
                    price: {
                        type: 'number',
                        description: '가격',
                    },
                    quantity: {
                        type: 'number',
                        description: '수량',
                    },
                },
                required: ['name', 'price', 'quantity'],
            },
        },
    },
    required: ['items'],
    definitions: {},
};
exports["default"] = JSC_IResGetItems;


/***/ }),

/***/ "./src/interfaces/payments/JSC_IReqPostPayment.ts":
/*!********************************************************!*\
  !*** ./src/interfaces/payments/JSC_IReqPostPayment.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var JSC_IReqPostPayment = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        body: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    enum: ['cola', 'water', 'coffee'],
                    description: '상품 명',
                },
                paymentMethod: {
                    type: 'string',
                    enum: ['card', 'cash'],
                    description: '결제 방법법',
                },
            },
            required: ['name', 'paymentMethod'],
        },
        headers: {
            type: 'object',
            properties: {
                'x-request-id': {
                    type: 'string',
                    description: '요청 구분을 위한 id',
                    format: 'uuid',
                    examples: ['49c1e4d6-9bc5-4d66-9eb7-41715e2b62c5'],
                },
            },
            required: ['x-request-id'],
        },
    },
    required: ['body', 'headers'],
    definitions: {},
};
exports["default"] = JSC_IReqPostPayment;


/***/ }),

/***/ "./src/interfaces/payments/JSC_IResPostPayment.ts":
/*!********************************************************!*\
  !*** ./src/interfaces/payments/JSC_IResPostPayment.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var JSC_IResPostPayment = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        item: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    enum: ['cola', 'water', 'coffee'],
                },
                price: {
                    type: 'number',
                    description: '가격',
                },
                quantity: {
                    type: 'number',
                    description: '수량',
                },
            },
            required: ['name', 'price', 'quantity'],
            description: '상품 정보',
        },
        cash: {
            type: 'object',
            properties: {
                depositAmount: {
                    type: 'number',
                    description: '입금 액수',
                },
                change: {
                    type: 'object',
                    properties: {
                        '0': {
                            type: 'number',
                        },
                        '100': {
                            type: 'number',
                        },
                        '500': {
                            type: 'number',
                        },
                        '1000': {
                            type: 'number',
                        },
                        '5000': {
                            type: 'number',
                        },
                        '10000': {
                            type: 'number',
                        },
                    },
                    description: '거스름 돈',
                },
            },
            description: '현금 정보',
        },
    },
    required: ['item'],
    definitions: {},
};
exports["default"] = JSC_IResPostPayment;


/***/ }),

/***/ "./src/mockups/mockupDispenseChange.ts":
/*!*********************************************!*\
  !*** ./src/mockups/mockupDispenseChange.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function mockupDispenseChange(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (args.changeMap.size > 0 === false) {
                return [2, args];
            }
            return [2, args];
        });
    });
}
exports["default"] = mockupDispenseChange;


/***/ }),

/***/ "./src/mockups/mockupDispenseItem.ts":
/*!*******************************************!*\
  !*** ./src/mockups/mockupDispenseItem.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function mockupDispenseItem(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, args];
        });
    });
}
exports["default"] = mockupDispenseItem;


/***/ }),

/***/ "./src/mockups/mockupInsertCard.ts":
/*!*****************************************!*\
  !*** ./src/mockups/mockupInsertCard.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function getMockupInserCard(_args) {
    return __awaiter(this, void 0, void 0, function () {
        var card;
        return __generator(this, function (_a) {
            card = {};
            return [2, card];
        });
    });
}
exports["default"] = getMockupInserCard;


/***/ }),

/***/ "./src/mockups/mockupInsertCash.ts":
/*!*****************************************!*\
  !*** ./src/mockups/mockupInsertCash.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var getRandomElement_1 = __importDefault(__webpack_require__(/*! #tools/misc/getRandomElement */ "./src/tools/misc/getRandomElement.ts"));
function getMockupInserCash() {
    return __awaiter(this, void 0, void 0, function () {
        var cashUnits;
        return __generator(this, function (_a) {
            cashUnits = [100, 500, 1000, 5000, 10000];
            return [2, (0, getRandomElement_1.default)(cashUnits)];
        });
    });
}
exports["default"] = getMockupInserCash;


/***/ }),

/***/ "./src/mockups/mockupItemEntities.ts":
/*!*******************************************!*\
  !*** ./src/mockups/mockupItemEntities.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMockupItemEntityMap = exports.getMockupItemEntities = void 0;
var CE_ITEM_NAME_1 = __importDefault(__webpack_require__(/*! #const-enums/CE_ITEM_NAME */ "./src/const-enums/CE_ITEM_NAME.ts"));
var mockupItemEntities = [
    {
        id: '1',
        name: CE_ITEM_NAME_1.default.COLA,
        price: 1100,
        quantity: 2,
    },
    {
        id: '2',
        name: CE_ITEM_NAME_1.default.WATER,
        price: 600,
        quantity: 0,
    },
    {
        id: '3',
        name: CE_ITEM_NAME_1.default.COFFEE,
        price: 700,
        quantity: 1,
    },
];
function getMockupItemEntities() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, mockupItemEntities];
        });
    });
}
exports.getMockupItemEntities = getMockupItemEntities;
function getMockupItemEntityMap() {
    return __awaiter(this, void 0, void 0, function () {
        var mockupItemMap;
        return __generator(this, function (_a) {
            mockupItemMap = new Map(mockupItemEntities.reduce(function (acc, itemEntity) {
                var name = itemEntity.name;
                return __spreadArray(__spreadArray([], acc, true), [[name, itemEntity]], false);
            }, []));
            return [2, mockupItemMap];
        });
    });
}
exports.getMockupItemEntityMap = getMockupItemEntityMap;


/***/ }),

/***/ "./src/mockups/mockupValidateCardBalance.ts":
/*!**************************************************!*\
  !*** ./src/mockups/mockupValidateCardBalance.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var getRandomElement_1 = __importDefault(__webpack_require__(/*! #tools/misc/getRandomElement */ "./src/tools/misc/getRandomElement.ts"));
function getMockupValidateCardBalance(_args) {
    return __awaiter(this, void 0, void 0, function () {
        var cardBalances;
        return __generator(this, function (_a) {
            cardBalances = [true, false];
            return [2, (0, getRandomElement_1.default)(cardBalances)];
        });
    });
}
exports["default"] = getMockupValidateCardBalance;


/***/ }),

/***/ "./src/modules/items/displayItems.ts":
/*!*******************************************!*\
  !*** ./src/modules/items/displayItems.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mockupItemEntities_1 = __webpack_require__(/*! #mockups/mockupItemEntities */ "./src/mockups/mockupItemEntities.ts");
function displayItems() {
    return __awaiter(this, void 0, void 0, function () {
        var itemEntities;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, mockupItemEntities_1.getMockupItemEntities)()];
                case 1:
                    itemEntities = _a.sent();
                    return [2, itemEntities];
            }
        });
    });
}
exports["default"] = displayItems;


/***/ }),

/***/ "./src/modules/items/selectItem.ts":
/*!*****************************************!*\
  !*** ./src/modules/items/selectItem.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mockupItemEntities_1 = __webpack_require__(/*! #mockups/mockupItemEntities */ "./src/mockups/mockupItemEntities.ts");
var StatusError_1 = __importDefault(__webpack_require__(/*! #tools/StatusError */ "./src/tools/StatusError.ts"));
var http_status_codes_1 = __webpack_require__(/*! http-status-codes */ "http-status-codes");
function selectItem(args) {
    return __awaiter(this, void 0, void 0, function () {
        var itemMap, itemEntity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, mockupItemEntities_1.getMockupItemEntityMap)()];
                case 1:
                    itemMap = _a.sent();
                    itemEntity = itemMap.get(args.name);
                    if (itemEntity == null) {
                        throw new StatusError_1.default({
                            message: 'item not found',
                            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
                        });
                    }
                    return [2, itemEntity];
            }
        });
    });
}
exports["default"] = selectItem;


/***/ }),

/***/ "./src/modules/items/validateItem.ts":
/*!*******************************************!*\
  !*** ./src/modules/items/validateItem.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var StatusError_1 = __importDefault(__webpack_require__(/*! #tools/StatusError */ "./src/tools/StatusError.ts"));
var http_status_codes_1 = __webpack_require__(/*! http-status-codes */ "http-status-codes");
function validateItem(args) {
    if (args.itemEntity.quantity > 0 === false) {
        throw new StatusError_1.default({
            message: 'item quantity error',
            statusCode: http_status_codes_1.StatusCodes.FORBIDDEN,
        });
    }
    return true;
}
exports["default"] = validateItem;


/***/ }),

/***/ "./src/modules/payments/executePayment.ts":
/*!************************************************!*\
  !*** ./src/modules/payments/executePayment.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var CE_PAYMENT_METHOD_1 = __importDefault(__webpack_require__(/*! #const-enums/CE_PAYMENT_METHOD */ "./src/const-enums/CE_PAYMENT_METHOD.ts"));
var paymentCard_1 = __importDefault(__webpack_require__(/*! #modules/payments/paymentCard */ "./src/modules/payments/paymentCard.ts"));
var paymentCash_1 = __importDefault(__webpack_require__(/*! #modules/payments/paymentCash */ "./src/modules/payments/paymentCash.ts"));
var StatusError_1 = __importDefault(__webpack_require__(/*! #tools/StatusError */ "./src/tools/StatusError.ts"));
var http_status_codes_1 = __webpack_require__(/*! http-status-codes */ "http-status-codes");
function executePayment(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (args.paymentMethod === CE_PAYMENT_METHOD_1.default.CASH) {
                return [2, (0, paymentCash_1.default)({ itemEntity: args.itemEntity })];
            }
            if (args.paymentMethod === CE_PAYMENT_METHOD_1.default.CARD) {
                return [2, (0, paymentCard_1.default)({ itemEntity: args.itemEntity })];
            }
            throw new StatusError_1.default({
                message: 'payment method not found',
                statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            });
        });
    });
}
exports["default"] = executePayment;


/***/ }),

/***/ "./src/modules/payments/paymentCard.ts":
/*!*********************************************!*\
  !*** ./src/modules/payments/paymentCard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mockupInsertCard_1 = __importDefault(__webpack_require__(/*! #mockups/mockupInsertCard */ "./src/mockups/mockupInsertCard.ts"));
var mockupValidateCardBalance_1 = __importDefault(__webpack_require__(/*! #mockups/mockupValidateCardBalance */ "./src/mockups/mockupValidateCardBalance.ts"));
var StatusError_1 = __importDefault(__webpack_require__(/*! #tools/StatusError */ "./src/tools/StatusError.ts"));
var http_status_codes_1 = __webpack_require__(/*! http-status-codes */ "http-status-codes");
function paymentCard(args) {
    return __awaiter(this, void 0, void 0, function () {
        var insertedCard, validatedCardBalance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, mockupInsertCard_1.default)(args)];
                case 1:
                    insertedCard = _a.sent();
                    return [4, (0, mockupValidateCardBalance_1.default)({
                            itemEntity: args.itemEntity,
                            card: insertedCard,
                        })];
                case 2:
                    validatedCardBalance = _a.sent();
                    if (validatedCardBalance === false) {
                        throw new StatusError_1.default({
                            message: 'card balance is insufficient',
                            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
                        });
                    }
                    return [2, {
                            itemEntity: args.itemEntity,
                        }];
            }
        });
    });
}
exports["default"] = paymentCard;


/***/ }),

/***/ "./src/modules/payments/paymentCash.ts":
/*!*********************************************!*\
  !*** ./src/modules/payments/paymentCash.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var CE_CASH_UNIT_1 = __importDefault(__webpack_require__(/*! #const-enums/CE_CASH_UNIT */ "./src/const-enums/CE_CASH_UNIT.ts"));
var mockupDispenseChange_1 = __importDefault(__webpack_require__(/*! #mockups/mockupDispenseChange */ "./src/mockups/mockupDispenseChange.ts"));
var mockupInsertCash_1 = __importDefault(__webpack_require__(/*! #mockups/mockupInsertCash */ "./src/mockups/mockupInsertCash.ts"));
function insertCash(args) {
    return __awaiter(this, void 0, void 0, function () {
        var totalInsertedCash, insertedCash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    totalInsertedCash = 0;
                    _a.label = 1;
                case 1:
                    if (!(totalInsertedCash < args.itemEntity.price)) return [3, 3];
                    return [4, (0, mockupInsertCash_1.default)()];
                case 2:
                    insertedCash = _a.sent();
                    totalInsertedCash += insertedCash;
                    return [3, 1];
                case 3: return [2, totalInsertedCash];
            }
        });
    });
}
function getChangeMap(args) {
    var change = args.change;
    var cashUnits = [
        CE_CASH_UNIT_1.default.FIVE_HUNDRED,
        CE_CASH_UNIT_1.default.ONE_HUNDRED,
    ];
    var changeMap = new Map();
    cashUnits.forEach(function (cashUnit) {
        var cashCount = Math.floor(change / cashUnit);
        change -= cashUnit * cashCount;
        changeMap.set(cashUnit, cashCount);
    });
    return {
        changeMap: changeMap,
    };
}
function checkCashChange(args) {
    return __awaiter(this, void 0, void 0, function () {
        var change, changeMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    change = args.totalInsertedCash - args.itemEntity.price;
                    if (change <= 0) {
                        return [2, {
                                itemEntity: args.itemEntity,
                                totalInsertedCash: args.totalInsertedCash,
                            }];
                    }
                    changeMap = getChangeMap({
                        change: change,
                    }).changeMap;
                    if (!(changeMap != null && changeMap.size > 0)) return [3, 2];
                    return [4, (0, mockupDispenseChange_1.default)({ changeMap: changeMap })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2, {
                        itemEntity: args.itemEntity,
                        totalInsertedCash: args.totalInsertedCash,
                        changeMap: changeMap,
                    }];
            }
        });
    });
}
function paymentCash(args) {
    return __awaiter(this, void 0, void 0, function () {
        var totalInsertedCash;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, insertCash({
                        itemEntity: args.itemEntity,
                    })];
                case 1:
                    totalInsertedCash = _a.sent();
                    return [2, checkCashChange({
                            itemEntity: args.itemEntity,
                            totalInsertedCash: totalInsertedCash,
                        })];
            }
        });
    });
}
exports["default"] = paymentCash;


/***/ }),

/***/ "./src/serializers/serializerChangeDto.ts":
/*!************************************************!*\
  !*** ./src/serializers/serializerChangeDto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
function serializerChangeDto(changeMap) {
    return Array.from(changeMap.entries()).reduce(function (acc, _a) {
        var _b;
        var changeUnit = _a[0], changeCount = _a[1];
        return __assign(__assign({}, acc), (_b = {}, _b[changeUnit] = changeCount, _b));
    }, {});
}
exports["default"] = serializerChangeDto;


/***/ }),

/***/ "./src/serializers/serializerItemDto.ts":
/*!**********************************************!*\
  !*** ./src/serializers/serializerItemDto.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function serializerItemDto(itemEntity) {
    return {
        name: itemEntity.name,
        price: itemEntity.price,
        quantity: itemEntity.quantity,
    };
}
exports["default"] = serializerItemDto;


/***/ }),

/***/ "./src/serializers/serializerPaymentDto.ts":
/*!*************************************************!*\
  !*** ./src/serializers/serializerPaymentDto.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var serializerChangeDto_1 = __importDefault(__webpack_require__(/*! #serializers/serializerChangeDto */ "./src/serializers/serializerChangeDto.ts"));
var serializerItemDto_1 = __importDefault(__webpack_require__(/*! #serializers/serializerItemDto */ "./src/serializers/serializerItemDto.ts"));
function serializerResPostPayment(args) {
    var itemEntity = args.itemEntity, totalInsertedCash = args.totalInsertedCash, changeMap = args.changeMap;
    return {
        item: (0, serializerItemDto_1.default)(itemEntity),
        cash: totalInsertedCash == null && changeMap == null
            ? undefined
            : {
                depositAmount: totalInsertedCash,
                change: changeMap == null ? undefined : (0, serializerChangeDto_1.default)(changeMap),
            },
    };
}
exports["default"] = serializerResPostPayment;


/***/ }),

/***/ "./src/servers/app.ts":
/*!****************************!*\
  !*** ./src/servers/app.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var swaggerConfig_1 = __importDefault(__webpack_require__(/*! #servers/plugins/swaggerConfig */ "./src/servers/plugins/swaggerConfig.ts"));
var swaggerUIConfig_1 = __importDefault(__webpack_require__(/*! #servers/plugins/swaggerUIConfig */ "./src/servers/plugins/swaggerUIConfig.ts"));
var route_1 = __importDefault(__webpack_require__(/*! #servers/route */ "./src/servers/route.ts"));
var StatusError_1 = __importDefault(__webpack_require__(/*! #tools/StatusError */ "./src/tools/StatusError.ts"));
var swagger_1 = __importDefault(__webpack_require__(/*! @fastify/swagger */ "@fastify/swagger"));
var swagger_ui_1 = __importDefault(__webpack_require__(/*! @fastify/swagger-ui */ "@fastify/swagger-ui"));
var fastify_1 = __importDefault(__webpack_require__(/*! fastify */ "fastify"));
var server = (0, fastify_1.default)();
function start() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, server.register(swagger_1.default, (0, swaggerConfig_1.default)())];
                case 1:
                    _a.sent();
                    return [4, server.register(swagger_ui_1.default, (0, swaggerUIConfig_1.default)())];
                case 2:
                    _a.sent();
                    (0, route_1.default)(server);
                    server.setErrorHandler(function (error, _req, reply) {
                        if (error instanceof StatusError_1.default) {
                            return reply.status(error.statusCode).send({
                                message: error.message,
                            });
                        }
                        return reply.send(error);
                    });
                    server.listen({ port: 8080 }, function (err, address) {
                        if (err) {
                            console.error(err);
                            process.exit(1);
                        }
                        console.log("Server listening at ".concat(address));
                    });
                    return [2];
            }
        });
    });
}
start().catch(function (catched) {
    var err = catched instanceof Error ? catched : new Error('unknown error raised');
    console.error(err);
});


/***/ }),

/***/ "./src/servers/plugins/swaggerConfig.ts":
/*!**********************************************!*\
  !*** ./src/servers/plugins/swaggerConfig.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function swaggerConfig() {
    return {
        openapi: {
            info: {
                title: 'vending-mechine-api',
                description: 'vending-mechine-api 서버의 Swagger 문서입니다',
                version: '0.1.0',
            },
        },
    };
}
exports["default"] = swaggerConfig;


/***/ }),

/***/ "./src/servers/plugins/swaggerUIConfig.ts":
/*!************************************************!*\
  !*** ./src/servers/plugins/swaggerUIConfig.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function swaggerUIConfig() {
    return {
        routePrefix: '/swagger.io',
        uiConfig: {
            deepLinking: true,
            filter: true,
            displayRequestDuration: true,
            displayOperationId: false,
            showExtensions: true,
        },
        staticCSP: false,
    };
}
exports["default"] = swaggerUIConfig;


/***/ }),

/***/ "./src/servers/route.ts":
/*!******************************!*\
  !*** ./src/servers/route.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var getHealth_1 = __webpack_require__(/*! #handlers/getHealth */ "./src/handlers/getHealth.ts");
var getItem_1 = __webpack_require__(/*! #handlers/v1/getItem */ "./src/handlers/v1/getItem.ts");
var getItems_1 = __webpack_require__(/*! #handlers/v1/getItems */ "./src/handlers/v1/getItems.ts");
var postPayment_1 = __webpack_require__(/*! #handlers/v1/postPayment */ "./src/handlers/v1/postPayment.ts");
function route(fastify) {
    (0, getHealth_1.getHealthRoute)(fastify);
    (0, getItem_1.getItemRoute)(fastify);
    (0, getItems_1.getItemsRoute)(fastify);
    (0, postPayment_1.postPaymentRoute)(fastify);
}
exports["default"] = route;


/***/ }),

/***/ "./src/tools/StatusError.ts":
/*!**********************************!*\
  !*** ./src/tools/StatusError.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var http_status_codes_1 = __webpack_require__(/*! http-status-codes */ "http-status-codes");
var StatusError = (function (_super) {
    __extends(StatusError, _super);
    function StatusError(args) {
        var _a;
        var _this = _super.call(this, args.message) || this;
        _this.statusCode = (_a = args.statusCode) !== null && _a !== void 0 ? _a : http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        return _this;
    }
    return StatusError;
}(Error));
exports["default"] = StatusError;


/***/ }),

/***/ "./src/tools/misc/getRandomElement.ts":
/*!********************************************!*\
  !*** ./src/tools/misc/getRandomElement.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function getRandomElement(array) {
    var value = array[Math.floor(Math.random() * array.length)];
    if (value == null) {
        throw new Error('value not found');
    }
    return value;
}
exports["default"] = getRandomElement;


/***/ }),

/***/ "@fastify/swagger":
/*!***********************************!*\
  !*** external "@fastify/swagger" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@fastify/swagger");

/***/ }),

/***/ "@fastify/swagger-ui":
/*!**************************************!*\
  !*** external "@fastify/swagger-ui" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@fastify/swagger-ui");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/servers/app.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtoRDtJQUF5QywrQkFBSztJQUc1QyxxQkFBWSxJQUFvRDs7UUFBaEUsWUFDRSxrQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBR3BCO1FBREMsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFJLENBQUMsVUFBVSxtQ0FBSSwrQkFBVyxDQUFDLHFCQUFxQixDQUFDOztJQUN6RSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLENBUndDLEtBQUssR0FRN0M7Ozs7Ozs7Ozs7Ozs7O0FDYkQsU0FBd0IsZ0JBQWdCLENBQUksS0FBVTtJQUNwRCxJQUFNLEtBQUssR0FBa0IsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRTdFLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDcEM7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFSRCxzQ0FRQzs7Ozs7Ozs7Ozs7QUNSRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvY29uc3QtZW51bXMvQ0VfQ0FTSF9VTklULnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvY29uc3QtZW51bXMvQ0VfSVRFTV9OQU1FLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvY29uc3QtZW51bXMvQ0VfUEFZTUVOVF9NRVRIT0QudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9oYW5kbGVycy9nZXRIZWFsdGgudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9oYW5kbGVycy92MS9nZXRJdGVtLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvaGFuZGxlcnMvdjEvZ2V0SXRlbXMudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9oYW5kbGVycy92MS9wb3N0UGF5bWVudC50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1lY2hpbmUtYXBpLy4vc3JjL2ludGVyZmFjZXMvaXRlbXMvSlNDX0lSZXFHZXRJdGVtLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvaW50ZXJmYWNlcy9pdGVtcy9KU0NfSVJlcUdldEl0ZW1zLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvaW50ZXJmYWNlcy9pdGVtcy9KU0NfSVJlc0dldEl0ZW0udHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9pbnRlcmZhY2VzL2l0ZW1zL0pTQ19JUmVzR2V0SXRlbXMudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9pbnRlcmZhY2VzL3BheW1lbnRzL0pTQ19JUmVxUG9zdFBheW1lbnQudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9pbnRlcmZhY2VzL3BheW1lbnRzL0pTQ19JUmVzUG9zdFBheW1lbnQudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9tb2NrdXBzL21vY2t1cERpc3BlbnNlQ2hhbmdlLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvbW9ja3Vwcy9tb2NrdXBEaXNwZW5zZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9tb2NrdXBzL21vY2t1cEluc2VydENhcmQudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9tb2NrdXBzL21vY2t1cEluc2VydENhc2gudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9tb2NrdXBzL21vY2t1cEl0ZW1FbnRpdGllcy50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1lY2hpbmUtYXBpLy4vc3JjL21vY2t1cHMvbW9ja3VwVmFsaWRhdGVDYXJkQmFsYW5jZS50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1lY2hpbmUtYXBpLy4vc3JjL21vZHVsZXMvaXRlbXMvZGlzcGxheUl0ZW1zLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvbW9kdWxlcy9pdGVtcy9zZWxlY3RJdGVtLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvbW9kdWxlcy9pdGVtcy92YWxpZGF0ZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9tb2R1bGVzL3BheW1lbnRzL2V4ZWN1dGVQYXltZW50LnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvbW9kdWxlcy9wYXltZW50cy9wYXltZW50Q2FyZC50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1lY2hpbmUtYXBpLy4vc3JjL21vZHVsZXMvcGF5bWVudHMvcGF5bWVudENhc2gudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyQ2hhbmdlRHRvLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvc2VyaWFsaXplcnMvc2VyaWFsaXplckl0ZW1EdG8udHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9zZXJpYWxpemVycy9zZXJpYWxpemVyUGF5bWVudER0by50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1lY2hpbmUtYXBpLy4vc3JjL3NlcnZlcnMvYXBwLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvc2VydmVycy9wbHVnaW5zL3N3YWdnZXJDb25maWcudHMiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS8uL3NyYy9zZXJ2ZXJzL3BsdWdpbnMvc3dhZ2dlclVJQ29uZmlnLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvc2VydmVycy9yb3V0ZS50cyIsIndlYnBhY2s6Ly92ZW5kaW5nLW1lY2hpbmUtYXBpLy4vc3JjL3Rvb2xzL1N0YXR1c0Vycm9yLnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvLi9zcmMvdG9vbHMvbWlzYy9nZXRSYW5kb21FbGVtZW50LnRzIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJAZmFzdGlmeS9zd2FnZ2VyXCIiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS9leHRlcm5hbCBjb21tb25qcyBcIkBmYXN0aWZ5L3N3YWdnZXItdWlcIiIsIndlYnBhY2s6Ly92ZW5kaW5nLW1lY2hpbmUtYXBpL2V4dGVybmFsIGNvbW1vbmpzIFwiZmFzdGlmeVwiIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwLXN0YXR1cy1jb2Rlc1wiIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmVuZGluZy1tZWNoaW5lLWFwaS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZlbmRpbmctbWVjaGluZS1hcGkvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog7ZiE6riIIOuLqOychFxuICogKiBaRVJPLDBcbiAqICogT05FX0hVTkRSRUQsMTAwXG4gKiAqIEZJVkVfSFVORFJFRCw1MDBcbiAqICogT05FX1RIT1VTQU5ELDFfMDAwXG4gKiAqIEZJVkVfVEhPVVNBTkQsNV8wMDBcbiAqICogVEVOX1RIT1VTQU5ELDEwXzAwMFxuICovXG5jb25zdCBDRV9DQVNIX1VOSVQgPSB7XG4gIFpFUk86IDAsXG4gIE9ORV9IVU5EUkVEOiAxMDAsXG4gIEZJVkVfSFVORFJFRDogNTAwLFxuICBPTkVfVEhPVVNBTkQ6IDFfMDAwLFxuICBGSVZFX1RIT1VTQU5EOiA1XzAwMCxcbiAgVEVOX1RIT1VTQU5EOiAxMF8wMDAsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgZGVmYXVsdCBDRV9DQVNIX1VOSVQ7XG5cbmV4cG9ydCB0eXBlIFRDYXNoVW5pdCA9ICh0eXBlb2YgQ0VfQ0FTSF9VTklUKVtrZXlvZiB0eXBlb2YgQ0VfQ0FTSF9VTklUXTtcbiIsIi8qKlxuICog7IOB7ZKIIOuqhVxuICogKiBDT0xBLGNvbGE6IOy9nOudvFxuICogKiBXQVRFUix3YXRlcjog66y8XG4gKiAqIENPRkZFRSxjb2ZmZWU6IOy7pO2UvFxuICovXG5jb25zdCBDRV9JVEVNX05BTUUgPSB7XG4gIENPTEE6ICdjb2xhJyxcbiAgV0FURVI6ICd3YXRlcicsXG4gIENPRkZFRTogJ2NvZmZlZScsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgZGVmYXVsdCBDRV9JVEVNX05BTUU7XG5cbmV4cG9ydCB0eXBlIFRJdGVtTmFtZSA9ICh0eXBlb2YgQ0VfSVRFTV9OQU1FKVtrZXlvZiB0eXBlb2YgQ0VfSVRFTV9OQU1FXTtcbiIsIi8qKlxuICog6rKw7KCcIOuwqeuylVxuICogKiBDQVJELGNhcmQ6IOy5tOuTnCDqsrDsoJxcbiAqICogQ0FTSCxjYXNoOiDtmITquIgg6rKw7KCcXG4gKi9cbmNvbnN0IENFX1BBWU1FTlRfTUVUSE9EID0ge1xuICBDQVJEOiAnY2FyZCcsXG4gIENBU0g6ICdjYXNoJyxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IENFX1BBWU1FTlRfTUVUSE9EO1xuXG5leHBvcnQgdHlwZSBUUGF5bWVudE1ldGhvZCA9ICh0eXBlb2YgQ0VfUEFZTUVOVF9NRVRIT0QpW2tleW9mIHR5cGVvZiBDRV9QQVlNRU5UX01FVEhPRF07XG4iLCJpbXBvcnQgdHlwZSB7IEZhc3RpZnlJbnN0YW5jZSwgRmFzdGlmeVJlcXVlc3QgfSBmcm9tICdmYXN0aWZ5JztcbmltcG9ydCB0eXBlIHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXIsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIZWFsdGhIYW5kbGVyKF9yZXE6IEZhc3RpZnlSZXF1ZXN0KSB7XG4gIHJldHVybiB7XG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFsdGhSb3V0ZShzZXJ2ZXI6IEZhc3RpZnlJbnN0YW5jZTxTZXJ2ZXIsIEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2U+KTogdm9pZCB7XG4gIHNlcnZlci5nZXQoXG4gICAgJy8nLFxuICAgIHtcbiAgICAgIHNjaGVtYToge30sXG4gICAgfSxcbiAgICBnZXRIZWFsdGhIYW5kbGVyLFxuICApO1xufVxuIiwiaW1wb3J0IHR5cGUgSVJlcUdldEl0ZW0gZnJvbSAnI2ludGVyZmFjZXMvaXRlbXMvSVJlcUdldEl0ZW0nO1xuaW1wb3J0IHR5cGUgSVJlc0dldEl0ZW0gZnJvbSAnI2ludGVyZmFjZXMvaXRlbXMvSVJlc0dldEl0ZW0nO1xuaW1wb3J0IEpTQ19JUmVxR2V0SXRlbSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9KU0NfSVJlcUdldEl0ZW0nO1xuaW1wb3J0IEpTQ19JUmVzR2V0SXRlbSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9KU0NfSVJlc0dldEl0ZW0nO1xuaW1wb3J0IHNlbGVjdEl0ZW0gZnJvbSAnI21vZHVsZXMvaXRlbXMvc2VsZWN0SXRlbSc7XG5pbXBvcnQgdmFsaWRhdGVJdGVtIGZyb20gJyNtb2R1bGVzL2l0ZW1zL3ZhbGlkYXRlSXRlbSc7XG5pbXBvcnQgc2VyaWFsaXplckl0ZW1EdG8gZnJvbSAnI3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXJJdGVtRHRvJztcbmltcG9ydCB0eXBlIHsgRmFzdGlmeUluc3RhbmNlLCBGYXN0aWZ5UmVxdWVzdCB9IGZyb20gJ2Zhc3RpZnknO1xuaW1wb3J0IHR5cGUgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlciwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEl0ZW1IYW5kbGVyKFxuICByZXE6IEZhc3RpZnlSZXF1ZXN0PHtcbiAgICBIZWFkZXJzOiBJUmVxR2V0SXRlbVsnaGVhZGVycyddO1xuICAgIFBhcmFtczogSVJlcUdldEl0ZW1bJ3BhcmFtcyddO1xuICB9Pixcbik6IFByb21pc2U8SVJlc0dldEl0ZW0+IHtcbiAgLy8g7IOB7ZKIIOyhsO2ajFxuICBjb25zdCBzZWxlY3RlZEl0ZW1FbnRpdHkgPSBhd2FpdCBzZWxlY3RJdGVtKHtcbiAgICBuYW1lOiByZXEucGFyYW1zLm5hbWUsXG4gIH0pO1xuXG4gIC8vIOyDge2SiCDqsoDspp1cbiAgdmFsaWRhdGVJdGVtKHsgaXRlbUVudGl0eTogc2VsZWN0ZWRJdGVtRW50aXR5IH0pO1xuXG4gIHJldHVybiBzZXJpYWxpemVySXRlbUR0byhzZWxlY3RlZEl0ZW1FbnRpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJvdXRlKHNlcnZlcjogRmFzdGlmeUluc3RhbmNlPFNlcnZlciwgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZT4pOiB2b2lkIHtcbiAgc2VydmVyLmdldChcbiAgICAnL3YxL2l0ZW1zLzpuYW1lJyxcbiAgICB7XG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgc3VtbWFyeTogJ+yDge2SiCDsobDtmowgQVBJIC0g7IOB7ZKIIOqygOymnScsXG4gICAgICAgIGhlYWRlcnM6IEpTQ19JUmVxR2V0SXRlbS5wcm9wZXJ0aWVzPy5oZWFkZXJzLFxuICAgICAgICBwYXJhbXM6IEpTQ19JUmVxR2V0SXRlbS5wcm9wZXJ0aWVzPy5wYXJhbXMsXG4gICAgICAgIHJlc3BvbnNlOiB7XG4gICAgICAgICAgMjAwOiBKU0NfSVJlc0dldEl0ZW0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZ2V0SXRlbUhhbmRsZXIsXG4gICk7XG59XG4iLCJpbXBvcnQgdHlwZSBJUmVxR2V0SXRlbXMgZnJvbSAnI2ludGVyZmFjZXMvaXRlbXMvSVJlcUdldEl0ZW1zJztcbmltcG9ydCB0eXBlIElSZXNHZXRJdGVtcyBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JUmVzR2V0SXRlbXMnO1xuaW1wb3J0IEpTQ19JUmVxR2V0SXRlbXMgZnJvbSAnI2ludGVyZmFjZXMvaXRlbXMvSlNDX0lSZXFHZXRJdGVtcyc7XG5pbXBvcnQgSlNDX0lSZXNHZXRJdGVtcyBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9KU0NfSVJlc0dldEl0ZW1zJztcbmltcG9ydCBkaXNwbGF5SXRlbXMgZnJvbSAnI21vZHVsZXMvaXRlbXMvZGlzcGxheUl0ZW1zJztcbmltcG9ydCBzZXJpYWxpemVySXRlbUR0byBmcm9tICcjc2VyaWFsaXplcnMvc2VyaWFsaXplckl0ZW1EdG8nO1xuaW1wb3J0IHR5cGUgeyBGYXN0aWZ5SW5zdGFuY2UsIEZhc3RpZnlSZXF1ZXN0IH0gZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgdHlwZSB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SXRlbXNIYW5kbGVyKFxuICBfcmVxOiBGYXN0aWZ5UmVxdWVzdDx7XG4gICAgSGVhZGVyczogSVJlcUdldEl0ZW1zWydoZWFkZXJzJ107XG4gIH0+LFxuKTogUHJvbWlzZTxJUmVzR2V0SXRlbXM+IHtcbiAgY29uc3QgaXRlbUVudGl0aWVzID0gYXdhaXQgZGlzcGxheUl0ZW1zKCk7XG4gIGNvbnN0IGl0ZW1zID0gaXRlbUVudGl0aWVzLm1hcChzZXJpYWxpemVySXRlbUR0byk7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtcyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1zUm91dGUoc2VydmVyOiBGYXN0aWZ5SW5zdGFuY2U8U2VydmVyLCBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlPik6IHZvaWQge1xuICBzZXJ2ZXIuZ2V0KFxuICAgICcvdjEvaXRlbXMnLFxuICAgIHtcbiAgICAgIHNjaGVtYToge1xuICAgICAgICBzdW1tYXJ5OiAn7IOB7ZKIIOuqqeuhnSDsobDtmowgQVBJIC0g7IOB7ZKIIOynhOyXtCcsXG4gICAgICAgIGhlYWRlcnM6IEpTQ19JUmVxR2V0SXRlbXMucHJvcGVydGllcz8uaGVhZGVycyxcbiAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAyMDA6IEpTQ19JUmVzR2V0SXRlbXMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZ2V0SXRlbXNIYW5kbGVyLFxuICApO1xufVxuIiwiaW1wb3J0IHR5cGUgSVJlcVBvc3RQYXltZW50IGZyb20gJyNpbnRlcmZhY2VzL3BheW1lbnRzL0lSZXFQb3N0UGF5bWVudCc7XG5pbXBvcnQgdHlwZSBJUmVzUG9zdFBheW1lbnQgZnJvbSAnI2ludGVyZmFjZXMvcGF5bWVudHMvSVJlc1Bvc3RQYXltZW50JztcbmltcG9ydCBKU0NfSVJlcVBvc3RQYXltZW50IGZyb20gJyNpbnRlcmZhY2VzL3BheW1lbnRzL0pTQ19JUmVxUG9zdFBheW1lbnQnO1xuaW1wb3J0IEpTQ19JUmVzUG9zdFBheW1lbnQgZnJvbSAnI2ludGVyZmFjZXMvcGF5bWVudHMvSlNDX0lSZXNQb3N0UGF5bWVudCc7XG5pbXBvcnQgbW9ja3VwRGlzcGVuc2VDaGFuZ2UgZnJvbSAnI21vY2t1cHMvbW9ja3VwRGlzcGVuc2VDaGFuZ2UnO1xuaW1wb3J0IG1vY2t1cERpc3BlbnNlSXRlbSBmcm9tICcjbW9ja3Vwcy9tb2NrdXBEaXNwZW5zZUl0ZW0nO1xuaW1wb3J0IHNlbGVjdEl0ZW0gZnJvbSAnI21vZHVsZXMvaXRlbXMvc2VsZWN0SXRlbSc7XG5pbXBvcnQgZXhlY3V0ZVBheW1lbnQgZnJvbSAnI21vZHVsZXMvcGF5bWVudHMvZXhlY3V0ZVBheW1lbnQnO1xuaW1wb3J0IHNlcmlhbGl6ZXJSZXNQb3N0UGF5bWVudCBmcm9tICcjc2VyaWFsaXplcnMvc2VyaWFsaXplclBheW1lbnREdG8nO1xuaW1wb3J0IHR5cGUgeyBGYXN0aWZ5SW5zdGFuY2UsIEZhc3RpZnlSZXF1ZXN0IH0gZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgdHlwZSB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdFBheW1lbnRIYW5kbGVyKFxuICByZXE6IEZhc3RpZnlSZXF1ZXN0PHtcbiAgICBCb2R5OiBJUmVxUG9zdFBheW1lbnRbJ2JvZHknXTtcbiAgICBIZWFkZXJzOiBJUmVxUG9zdFBheW1lbnRbJ2hlYWRlcnMnXTtcbiAgfT4sXG4pOiBQcm9taXNlPElSZXNQb3N0UGF5bWVudD4ge1xuICAvLyDsg4Htkogg7KGw7ZqMXG4gIGNvbnN0IGl0ZW1FbnRpdHkgPSBhd2FpdCBzZWxlY3RJdGVtKHtcbiAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICB9KTtcblxuICAvLyDsg4Htkogg6rKw7KCcXG4gIGNvbnN0IHsgdG90YWxJbnNlcnRlZENhc2gsIGNoYW5nZU1hcCB9ID0gYXdhaXQgZXhlY3V0ZVBheW1lbnQoeyBpdGVtRW50aXR5LCBwYXltZW50TWV0aG9kOiByZXEuYm9keS5wYXltZW50TWV0aG9kIH0pO1xuXG4gIC8vIOqxsOyKpOumhCDrj4gg7J6I7J2EIOqyveyasCDrsLDstpxcbiAgaWYgKGNoYW5nZU1hcCAhPSBudWxsICYmIGNoYW5nZU1hcC5zaXplID4gMCkge1xuICAgIGF3YWl0IG1vY2t1cERpc3BlbnNlQ2hhbmdlKHsgY2hhbmdlTWFwIH0pO1xuICB9XG5cbiAgLy8g7IOB7ZKIIOuwsOy2nFxuICBhd2FpdCBtb2NrdXBEaXNwZW5zZUl0ZW0oeyBpdGVtRW50aXR5IH0pO1xuXG4gIHJldHVybiBzZXJpYWxpemVyUmVzUG9zdFBheW1lbnQoe1xuICAgIGl0ZW1FbnRpdHksXG4gICAgdG90YWxJbnNlcnRlZENhc2gsXG4gICAgY2hhbmdlTWFwLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RQYXltZW50Um91dGUoc2VydmVyOiBGYXN0aWZ5SW5zdGFuY2U8U2VydmVyLCBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlPik6IHZvaWQge1xuICBzZXJ2ZXIucG9zdChcbiAgICAnL3YxL3BheW1lbnRzJyxcbiAgICB7XG4gICAgICBzY2hlbWE6IHtcbiAgICAgICAgc3VtbWFyeTogJ+qysOygnCBBUEknLFxuICAgICAgICBoZWFkZXJzOiBKU0NfSVJlcVBvc3RQYXltZW50LnByb3BlcnRpZXM/LmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTQ19JUmVxUG9zdFBheW1lbnQucHJvcGVydGllcz8uYm9keSxcbiAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAyMDA6IEpTQ19JUmVzUG9zdFBheW1lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcG9zdFBheW1lbnRIYW5kbGVyLFxuICApO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBKU09OU2NoZW1hNyB9IGZyb20gJ2pzb24tc2NoZW1hJztcblxuLy8gdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuY29uc3QgSlNDX0lSZXFHZXRJdGVtOiBKU09OU2NoZW1hNyA9IHtcbiAgJHNjaGVtYTogJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIycsXG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICd4LXJlcXVlc3QtaWQnOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfsmpTssq0g6rWs67aE7J2EIOychO2VnCBpZCcsXG4gICAgICAgICAgZm9ybWF0OiAndXVpZCcsXG4gICAgICAgICAgZXhhbXBsZXM6IFsnNDljMWU0ZDYtOWJjNS00ZDY2LTllYjctNDE3MTVlMmI2MmM1J10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFsneC1yZXF1ZXN0LWlkJ10sXG4gICAgfSxcbiAgICBwYXJhbXM6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZW51bTogWydjb2xhJywgJ3dhdGVyJywgJ2NvZmZlZSddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbJ25hbWUnXSxcbiAgICB9LFxuICB9LFxuICByZXF1aXJlZDogWydoZWFkZXJzJywgJ3BhcmFtcyddLFxuICBkZWZpbml0aW9uczoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBKU0NfSVJlcUdldEl0ZW07XG4iLCJpbXBvcnQgdHlwZSB7IEpTT05TY2hlbWE3IH0gZnJvbSAnanNvbi1zY2hlbWEnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5jb25zdCBKU0NfSVJlcUdldEl0ZW1zOiBKU09OU2NoZW1hNyA9IHtcbiAgJHNjaGVtYTogJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIycsXG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICd4LXJlcXVlc3QtaWQnOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfsmpTssq0g6rWs67aE7J2EIOychO2VnCBpZCcsXG4gICAgICAgICAgZm9ybWF0OiAndXVpZCcsXG4gICAgICAgICAgZXhhbXBsZXM6IFsnNDljMWU0ZDYtOWJjNS00ZDY2LTllYjctNDE3MTVlMmI2MmM1J10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFsneC1yZXF1ZXN0LWlkJ10sXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnaGVhZGVycyddLFxuICBkZWZpbml0aW9uczoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBKU0NfSVJlcUdldEl0ZW1zO1xuIiwiaW1wb3J0IHR5cGUgeyBKU09OU2NoZW1hNyB9IGZyb20gJ2pzb24tc2NoZW1hJztcblxuLy8gdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuY29uc3QgSlNDX0lSZXNHZXRJdGVtOiBKU09OU2NoZW1hNyA9IHtcbiAgJHNjaGVtYTogJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIycsXG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBlbnVtOiBbJ2NvbGEnLCAnd2F0ZXInLCAnY29mZmVlJ10sXG4gICAgfSxcbiAgICBwcmljZToge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ+qwgOqyqScsXG4gICAgfSxcbiAgICBxdWFudGl0eToge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBkZXNjcmlwdGlvbjogJ+yImOufiScsXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnbmFtZScsICdwcmljZScsICdxdWFudGl0eSddLFxuICBkZWZpbml0aW9uczoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBKU0NfSVJlc0dldEl0ZW07XG4iLCJpbXBvcnQgdHlwZSB7IEpTT05TY2hlbWE3IH0gZnJvbSAnanNvbi1zY2hlbWEnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5jb25zdCBKU0NfSVJlc0dldEl0ZW1zOiBKU09OU2NoZW1hNyA9IHtcbiAgJHNjaGVtYTogJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIycsXG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW51bTogWydjb2xhJywgJ3dhdGVyJywgJ2NvZmZlZSddLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfqsIDqsqknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfsiJjrn4knLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiBbJ25hbWUnLCAncHJpY2UnLCAncXVhbnRpdHknXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnaXRlbXMnXSxcbiAgZGVmaW5pdGlvbnM6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSlNDX0lSZXNHZXRJdGVtcztcbiIsImltcG9ydCB0eXBlIHsgSlNPTlNjaGVtYTcgfSBmcm9tICdqc29uLXNjaGVtYSc7XG5cbi8vIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbmNvbnN0IEpTQ19JUmVxUG9zdFBheW1lbnQ6IEpTT05TY2hlbWE3ID0ge1xuICAkc2NoZW1hOiAnaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjJyxcbiAgdHlwZTogJ29iamVjdCcsXG4gIHByb3BlcnRpZXM6IHtcbiAgICBib2R5OiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGVudW06IFsnY29sYScsICd3YXRlcicsICdjb2ZmZWUnXSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+yDge2SiCDrqoUnLFxuICAgICAgICB9LFxuICAgICAgICBwYXltZW50TWV0aG9kOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZW51bTogWydjYXJkJywgJ2Nhc2gnXSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+qysOygnCDrsKnrspXrspUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbJ25hbWUnLCAncGF5bWVudE1ldGhvZCddLFxuICAgIH0sXG4gICAgaGVhZGVyczoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICd4LXJlcXVlc3QtaWQnOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfsmpTssq0g6rWs67aE7J2EIOychO2VnCBpZCcsXG4gICAgICAgICAgZm9ybWF0OiAndXVpZCcsXG4gICAgICAgICAgZXhhbXBsZXM6IFsnNDljMWU0ZDYtOWJjNS00ZDY2LTllYjctNDE3MTVlMmI2MmM1J10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFsneC1yZXF1ZXN0LWlkJ10sXG4gICAgfSxcbiAgfSxcbiAgcmVxdWlyZWQ6IFsnYm9keScsICdoZWFkZXJzJ10sXG4gIGRlZmluaXRpb25zOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpTQ19JUmVxUG9zdFBheW1lbnQ7XG4iLCJpbXBvcnQgdHlwZSB7IEpTT05TY2hlbWE3IH0gZnJvbSAnanNvbi1zY2hlbWEnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG5jb25zdCBKU0NfSVJlc1Bvc3RQYXltZW50OiBKU09OU2NoZW1hNyA9IHtcbiAgJHNjaGVtYTogJ2h0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hIycsXG4gIHR5cGU6ICdvYmplY3QnLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgaXRlbToge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBlbnVtOiBbJ2NvbGEnLCAnd2F0ZXInLCAnY29mZmVlJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfqsIDqsqknLFxuICAgICAgICB9LFxuICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn7IiY65+JJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogWyduYW1lJywgJ3ByaWNlJywgJ3F1YW50aXR5J10sXG4gICAgICBkZXNjcmlwdGlvbjogJ+yDge2SiCDsoJXrs7QnLFxuICAgIH0sXG4gICAgY2FzaDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRlcG9zaXRBbW91bnQ6IHtcbiAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ+yeheq4iCDslaHsiJgnLFxuICAgICAgICB9LFxuICAgICAgICBjaGFuZ2U6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAnMCc6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJzEwMCc6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJzUwMCc6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJzEwMDAnOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICc1MDAwJzoge1xuICAgICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnMTAwMDAnOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn6rGw7Iqk66aEIOuPiCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb246ICftmITquIgg7KCV67O0JyxcbiAgICB9LFxuICB9LFxuICByZXF1aXJlZDogWydpdGVtJ10sXG4gIGRlZmluaXRpb25zOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpTQ19JUmVzUG9zdFBheW1lbnQ7XG4iLCJpbXBvcnQgdHlwZSB7IFRDaGFuZ2VNYXAgfSBmcm9tICcjaW50ZXJmYWNlcy9wYXltZW50cy9JQ2hhbmdlRHRvJztcblxuLyoqXG4gKiDqsbDsiqTrpoTrj4gg67Cw7LacXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1vY2t1cERpc3BlbnNlQ2hhbmdlKGFyZ3M6IHsgY2hhbmdlTWFwOiBUQ2hhbmdlTWFwIH0pIHtcbiAgLy8g6rGw7Iqk66aEIOuPiCDrsLDstpztlaAg6rKD7J20IOyXhuydhCDqsr3smrDripQg67Cw7Lac7ZWY7KeAIOyViuydjFxuICBpZiAoYXJncy5jaGFuZ2VNYXAuc2l6ZSA+IDAgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGFyZ3M7XG4gIH1cblxuICAvLyBUT0RPOiDsnpDtjJDquLDroZwg6rGw7Iqk66aE64+IIOuwsOy2nCDsmpTssq1cbiAgcmV0dXJuIGFyZ3M7XG59XG4iLCJpbXBvcnQgdHlwZSBJSXRlbUVudGl0eSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JSXRlbUVudGl0eSc7XG5cbi8qKlxuICog7IOd7ZKIIOuwsOy2nFxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtb2NrdXBEaXNwZW5zZUl0ZW0oYXJnczogeyBpdGVtRW50aXR5OiBJSXRlbUVudGl0eSB9KSB7XG4gIC8vIFRPRE86IOyekO2MkOq4sOuhnCDsg4Htkogg67Cw7LacIOyalOyyrVxuICByZXR1cm4gYXJncztcbn1cbiIsImltcG9ydCB0eXBlIElJdGVtRW50aXR5IGZyb20gJyNpbnRlcmZhY2VzL2l0ZW1zL0lJdGVtRW50aXR5JztcbmltcG9ydCB0eXBlIElDYXJkRHRvIGZyb20gJyNpbnRlcmZhY2VzL3BheW1lbnRzL0lDYXJkRHRvJztcblxuLyoqXG4gKiDsubTrk5wg7J6F66ClXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldE1vY2t1cEluc2VyQ2FyZChfYXJnczogeyBpdGVtRW50aXR5OiBJSXRlbUVudGl0eSB9KSB7XG4gIC8vIFRPRE86IOyekO2MkOq4sOulvCDthrXtlbQg7Lm065OcIOygleuztOulvCDsobDtmoztlbTslbwg7ZWoXG4gIGNvbnN0IGNhcmQgPSB7fSBzYXRpc2ZpZXMgSUNhcmREdG87XG5cbiAgcmV0dXJuIGNhcmQ7XG59XG4iLCJpbXBvcnQgdHlwZSB7IFRDYXNoVW5pdCB9IGZyb20gJyNjb25zdC1lbnVtcy9DRV9DQVNIX1VOSVQnO1xuaW1wb3J0IGdldFJhbmRvbUVsZW1lbnQgZnJvbSAnI3Rvb2xzL21pc2MvZ2V0UmFuZG9tRWxlbWVudCc7XG5cbi8qKlxuICog7ZiE6riIIOyeheq4iFxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRNb2NrdXBJbnNlckNhc2goKTogUHJvbWlzZTxUQ2FzaFVuaXQ+IHtcbiAgLy8gVE9ETzog7J6Q7YyQ6riw66W8IO2Gte2VtCDtmITquIgg7J6F66ClIOygleuztOulvCDrsJvslYTslbwg7ZWoXG4gIGNvbnN0IGNhc2hVbml0cyA9IFsxMDAsIDUwMCwgMTAwMCwgNTAwMCwgMTAwMDBdIHNhdGlzZmllcyBUQ2FzaFVuaXRbXTtcblxuICByZXR1cm4gZ2V0UmFuZG9tRWxlbWVudChjYXNoVW5pdHMpO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBUSXRlbU5hbWUgfSBmcm9tICcjY29uc3QtZW51bXMvQ0VfSVRFTV9OQU1FJztcbmltcG9ydCBDRV9JVEVNX05BTUUgZnJvbSAnI2NvbnN0LWVudW1zL0NFX0lURU1fTkFNRSc7XG5pbXBvcnQgdHlwZSBJSXRlbUVudGl0eSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JSXRlbUVudGl0eSc7XG5cbi8vIFRPRE86IOyLpOygnCDsg4Htkogg7KCV67O066W8IOqwgOyngOqzoCDsnojslrTslbwg7ZWoXG5jb25zdCBtb2NrdXBJdGVtRW50aXRpZXMgPSBbXG4gIHtcbiAgICBpZDogJzEnLFxuICAgIG5hbWU6IENFX0lURU1fTkFNRS5DT0xBLFxuICAgIHByaWNlOiAxMTAwLFxuICAgIHF1YW50aXR5OiAyLFxuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICBuYW1lOiBDRV9JVEVNX05BTUUuV0FURVIsXG4gICAgcHJpY2U6IDYwMCxcbiAgICBxdWFudGl0eTogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAnMycsXG4gICAgbmFtZTogQ0VfSVRFTV9OQU1FLkNPRkZFRSxcbiAgICBwcmljZTogNzAwLFxuICAgIHF1YW50aXR5OiAxLFxuICB9LFxuXSBzYXRpc2ZpZXMgQXJyYXk8SUl0ZW1FbnRpdHk+O1xuXG4vKipcbiAqIOyDge2SiCDsoJXrs7Qg7JeU7Yuw7YuwIOuqqeuhnVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9ja3VwSXRlbUVudGl0aWVzKCk6IFByb21pc2U8QXJyYXk8SUl0ZW1FbnRpdHk+PiB7XG4gIHJldHVybiBtb2NrdXBJdGVtRW50aXRpZXM7XG59XG5cbi8qKlxuICog7IOB7ZKIIOygleuztCDsl5Tti7Dti7Ag66e1XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb2NrdXBJdGVtRW50aXR5TWFwKCkge1xuICBjb25zdCBtb2NrdXBJdGVtTWFwID0gbmV3IE1hcChcbiAgICBtb2NrdXBJdGVtRW50aXRpZXMucmVkdWNlPEFycmF5PFtUSXRlbU5hbWUsIElJdGVtRW50aXR5XT4+KChhY2MsIGl0ZW1FbnRpdHkpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gaXRlbUVudGl0eTtcblxuICAgICAgcmV0dXJuIFsuLi5hY2MsIFtuYW1lLCBpdGVtRW50aXR5XV07XG4gICAgfSwgW10pLFxuICApO1xuXG4gIHJldHVybiBtb2NrdXBJdGVtTWFwO1xufVxuIiwiaW1wb3J0IHR5cGUgSUl0ZW1FbnRpdHkgZnJvbSAnI2ludGVyZmFjZXMvaXRlbXMvSUl0ZW1FbnRpdHknO1xuaW1wb3J0IHR5cGUgSUNhcmREdG8gZnJvbSAnI2ludGVyZmFjZXMvcGF5bWVudHMvSUNhcmREdG8nO1xuaW1wb3J0IGdldFJhbmRvbUVsZW1lbnQgZnJvbSAnI3Rvb2xzL21pc2MvZ2V0UmFuZG9tRWxlbWVudCc7XG5cbi8qKlxuICog7Lm065OcIOyelOyVoSDqsoDspp1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9ja3VwVmFsaWRhdGVDYXJkQmFsYW5jZShfYXJnczogeyBpdGVtRW50aXR5OiBJSXRlbUVudGl0eTsgY2FyZDogSUNhcmREdG8gfSkge1xuICAvLyBUT0RPOiDsubTrk5zsl5Ag6rKw7KCc7ZWgIOyImCDsnojripQg7J6U7JWh7J20IOyeiOuKlOyngCDqsoDspp3tlbTslbwg7ZWoXG4gIGNvbnN0IGNhcmRCYWxhbmNlcyA9IFt0cnVlLCBmYWxzZV07XG5cbiAgcmV0dXJuIGdldFJhbmRvbUVsZW1lbnQoY2FyZEJhbGFuY2VzKTtcbn1cbiIsImltcG9ydCB0eXBlIElJdGVtRW50aXR5IGZyb20gJyNpbnRlcmZhY2VzL2l0ZW1zL0lJdGVtRW50aXR5JztcbmltcG9ydCB7IGdldE1vY2t1cEl0ZW1FbnRpdGllcyB9IGZyb20gJyNtb2NrdXBzL21vY2t1cEl0ZW1FbnRpdGllcyc7XG5cbi8qKlxuICog7IOB7ZKIIOynhOyXtFxuICogQHJldHVybnMge1Byb21pc2U8QXJyYXk8SUl0ZW1FbnRpdHk+Pn0g7IOB7ZKIIOuqqeuhnSDsobDtmowg6rKw6rO8XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlJdGVtcygpOiBQcm9taXNlPEFycmF5PElJdGVtRW50aXR5Pj4ge1xuICBjb25zdCBpdGVtRW50aXRpZXMgPSBhd2FpdCBnZXRNb2NrdXBJdGVtRW50aXRpZXMoKTtcblxuICByZXR1cm4gaXRlbUVudGl0aWVzO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBUSXRlbU5hbWUgfSBmcm9tICcjY29uc3QtZW51bXMvQ0VfSVRFTV9OQU1FJztcbmltcG9ydCB0eXBlIElJdGVtRW50aXR5IGZyb20gJyNpbnRlcmZhY2VzL2l0ZW1zL0lJdGVtRW50aXR5JztcbmltcG9ydCB7IGdldE1vY2t1cEl0ZW1FbnRpdHlNYXAgfSBmcm9tICcjbW9ja3Vwcy9tb2NrdXBJdGVtRW50aXRpZXMnO1xuaW1wb3J0IFN0YXR1c0Vycm9yIGZyb20gJyN0b29scy9TdGF0dXNFcnJvcic7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gJ2h0dHAtc3RhdHVzLWNvZGVzJztcblxuLyoqXG4gKiDsg4Htkogg7ISg7YOdXG4gKiBAcGFyYW0ge1RJdGVtTmFtZX0gYXJncy5uYW1lIOyDge2SiCDrqoVcbiAqIEByZXR1cm5zIHtQcm9taXNlPElJdGVtRW50aXR5Pn0g7IOB7ZKIIOuLqOqxtCDsobDtmowg6rKw6rO8XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNlbGVjdEl0ZW0oYXJnczogeyBuYW1lOiBUSXRlbU5hbWUgfSk6IFByb21pc2U8SUl0ZW1FbnRpdHk+IHtcbiAgY29uc3QgaXRlbU1hcCA9IGF3YWl0IGdldE1vY2t1cEl0ZW1FbnRpdHlNYXAoKTtcblxuICBjb25zdCBpdGVtRW50aXR5ID0gaXRlbU1hcC5nZXQoYXJncy5uYW1lKTtcblxuICBpZiAoaXRlbUVudGl0eSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFN0YXR1c0Vycm9yKHtcbiAgICAgIG1lc3NhZ2U6ICdpdGVtIG5vdCBmb3VuZCcsXG4gICAgICBzdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaXRlbUVudGl0eTtcbn1cbiIsImltcG9ydCB0eXBlIElJdGVtRW50aXR5IGZyb20gJyNpbnRlcmZhY2VzL2l0ZW1zL0lJdGVtRW50aXR5JztcbmltcG9ydCBTdGF0dXNFcnJvciBmcm9tICcjdG9vbHMvU3RhdHVzRXJyb3InO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbi8qKlxuICog7IOB7ZKIIOqygOymnSAtIOyImOufiSDtmZXsnbhcbiAqIEBwYXJhbSB7SUl0ZW1FbnRpdHl9IGFyZ3MuaXRlbUVudGl0eSDsg4Htkogg7KCV67O0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0g6rKA7KadIOyXrOu2gFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUl0ZW0oYXJnczogeyBpdGVtRW50aXR5OiBJSXRlbUVudGl0eSB9KTogQm9vbGVhbiB7XG4gIC8vIOyImOufieydtCAw6rCcIOy0iOqzvOuQmOyngCDslYrsnLzrqbQg6rKA7KadIOyLpO2MqFxuICBpZiAoYXJncy5pdGVtRW50aXR5LnF1YW50aXR5ID4gMCA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgU3RhdHVzRXJyb3Ioe1xuICAgICAgbWVzc2FnZTogJ2l0ZW0gcXVhbnRpdHkgZXJyb3InLFxuICAgICAgc3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuRk9SQklEREVOLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgdHlwZSB7IFRQYXltZW50TWV0aG9kIH0gZnJvbSAnI2NvbnN0LWVudW1zL0NFX1BBWU1FTlRfTUVUSE9EJztcbmltcG9ydCBDRV9QQVlNRU5UX01FVEhPRCBmcm9tICcjY29uc3QtZW51bXMvQ0VfUEFZTUVOVF9NRVRIT0QnO1xuaW1wb3J0IHR5cGUgSUl0ZW1FbnRpdHkgZnJvbSAnI2ludGVyZmFjZXMvaXRlbXMvSUl0ZW1FbnRpdHknO1xuaW1wb3J0IHR5cGUgeyBUQ2hhbmdlTWFwIH0gZnJvbSAnI2ludGVyZmFjZXMvcGF5bWVudHMvSUNoYW5nZUR0byc7XG5pbXBvcnQgcGF5bWVudENhcmQgZnJvbSAnI21vZHVsZXMvcGF5bWVudHMvcGF5bWVudENhcmQnO1xuaW1wb3J0IHBheW1lbnRDYXNoIGZyb20gJyNtb2R1bGVzL3BheW1lbnRzL3BheW1lbnRDYXNoJztcbmltcG9ydCBTdGF0dXNFcnJvciBmcm9tICcjdG9vbHMvU3RhdHVzRXJyb3InO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbi8qKlxuICog7IOB7ZKIIOqysOygnCDsi6TtlolcbiAqIEBwYXJhbSB7SUl0ZW1FbnRpdHl9IGFyZ3MuaXRlbUVudGl0eSDsg4Htkogg7KCV67O0XG4gKiBAcGFyYW0ge1RQYXltZW50TWV0aG9kfSBhcmdzLnBheW1lbnRNZXRob2Qg6rKw7KCcIOuwqeuylVxuICogQHJldHVybnMge0Jvb2xlYW59IOyDge2SiCDqsrDsoJwg6rKw6rO8XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVQYXltZW50KGFyZ3M6IHtcbiAgaXRlbUVudGl0eTogSUl0ZW1FbnRpdHk7XG4gIHBheW1lbnRNZXRob2Q6IFRQYXltZW50TWV0aG9kO1xufSk6IFByb21pc2U8e1xuICBpdGVtRW50aXR5OiBJSXRlbUVudGl0eTtcbiAgdG90YWxJbnNlcnRlZENhc2g/OiBudW1iZXI7XG4gIGNoYW5nZU1hcD86IFRDaGFuZ2VNYXA7XG59PiB7XG4gIGlmIChhcmdzLnBheW1lbnRNZXRob2QgPT09IENFX1BBWU1FTlRfTUVUSE9ELkNBU0gpIHtcbiAgICByZXR1cm4gcGF5bWVudENhc2goeyBpdGVtRW50aXR5OiBhcmdzLml0ZW1FbnRpdHkgfSk7XG4gIH1cblxuICBpZiAoYXJncy5wYXltZW50TWV0aG9kID09PSBDRV9QQVlNRU5UX01FVEhPRC5DQVJEKSB7XG4gICAgcmV0dXJuIHBheW1lbnRDYXJkKHsgaXRlbUVudGl0eTogYXJncy5pdGVtRW50aXR5IH0pO1xuICB9XG5cbiAgdGhyb3cgbmV3IFN0YXR1c0Vycm9yKHtcbiAgICBtZXNzYWdlOiAncGF5bWVudCBtZXRob2Qgbm90IGZvdW5kJyxcbiAgICBzdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgfSk7XG59XG4iLCJpbXBvcnQgdHlwZSBJSXRlbUVudGl0eSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JSXRlbUVudGl0eSc7XG5pbXBvcnQgZ2V0TW9ja3VwSW5zZXJDYXJkIGZyb20gJyNtb2NrdXBzL21vY2t1cEluc2VydENhcmQnO1xuaW1wb3J0IGdldE1vY2t1cFZhbGlkYXRlQ2FyZEJhbGFuY2UgZnJvbSAnI21vY2t1cHMvbW9ja3VwVmFsaWRhdGVDYXJkQmFsYW5jZSc7XG5pbXBvcnQgU3RhdHVzRXJyb3IgZnJvbSAnI3Rvb2xzL1N0YXR1c0Vycm9yJztcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSAnaHR0cC1zdGF0dXMtY29kZXMnO1xuXG4vKipcbiAq7Lm065OcIOqysOygnFxuICogQHBhcmFtIHtJSXRlbUVudGl0eX0gYXJncy5pdGVtRW50aXR5IOyDge2SiCDsoJXrs7RcbiAqIEByZXR1cm5zIHtJSXRlbUVudGl0eX0g7IOB7ZKIIOygleuztFxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwYXltZW50Q2FyZChhcmdzOiB7IGl0ZW1FbnRpdHk6IElJdGVtRW50aXR5IH0pIHtcbiAgLy8g7Lm065OcIOyeheugpSAtIOy5tOuTnCDsoJXrs7Qg7KGw7ZqMXG4gIGNvbnN0IGluc2VydGVkQ2FyZCA9IGF3YWl0IGdldE1vY2t1cEluc2VyQ2FyZChhcmdzKTtcblxuICAvLyDsubTrk5wg7J6U7JWhIO2ZleyduFxuICBjb25zdCB2YWxpZGF0ZWRDYXJkQmFsYW5jZSA9IGF3YWl0IGdldE1vY2t1cFZhbGlkYXRlQ2FyZEJhbGFuY2Uoe1xuICAgIGl0ZW1FbnRpdHk6IGFyZ3MuaXRlbUVudGl0eSxcbiAgICBjYXJkOiBpbnNlcnRlZENhcmQsXG4gIH0pO1xuXG4gIC8vIOy5tOuTnCDsnpTslaEg67aA7KGxXG4gIGlmICh2YWxpZGF0ZWRDYXJkQmFsYW5jZSA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgU3RhdHVzRXJyb3Ioe1xuICAgICAgbWVzc2FnZTogJ2NhcmQgYmFsYW5jZSBpcyBpbnN1ZmZpY2llbnQnLFxuICAgICAgc3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGl0ZW1FbnRpdHk6IGFyZ3MuaXRlbUVudGl0eSxcbiAgfTtcbn1cbiIsImltcG9ydCBDRV9DQVNIX1VOSVQgZnJvbSAnI2NvbnN0LWVudW1zL0NFX0NBU0hfVU5JVCc7XG5pbXBvcnQgdHlwZSBJSXRlbUVudGl0eSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JSXRlbUVudGl0eSc7XG5pbXBvcnQgdHlwZSB7IFRDaGFuZ2VNYXAgfSBmcm9tICcjaW50ZXJmYWNlcy9wYXltZW50cy9JQ2hhbmdlRHRvJztcbmltcG9ydCBtb2NrdXBEaXNwZW5zZUNoYW5nZSBmcm9tICcjbW9ja3Vwcy9tb2NrdXBEaXNwZW5zZUNoYW5nZSc7XG5pbXBvcnQgZ2V0TW9ja3VwSW5zZXJDYXNoIGZyb20gJyNtb2NrdXBzL21vY2t1cEluc2VydENhc2gnO1xuaW1wb3J0IHR5cGUgeyBMYXN0QXJyYXlFbGVtZW50IH0gZnJvbSAndHlwZS1mZXN0JztcblxuLyoqXG4gKiDtmITquIgg7J6F6riIXG4gKiBAcGFyYW0ge0lJdGVtRW50aXR5fSBhcmdzLml0ZW1FbnRpdHkg7IOB7ZKIIOygleuztFxuICogQHJldHVybnMge251bWJlcn0g7LSdIOyeheq4iOuQnCDtmITquIjslaFcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0Q2FzaChhcmdzOiB7IGl0ZW1FbnRpdHk6IElJdGVtRW50aXR5IH0pIHtcbiAgbGV0IHRvdGFsSW5zZXJ0ZWRDYXNoID0gMDtcblxuICAvKipcbiAgICog7KCE7LK0IOyeheq4iCDquIjslaHsnbQg7IOB7ZKIIOqwgOqyqSDsnbTsg4Hsnbwg6rK97JqwIOq5jOyngCDsnoXroKUg67Cb7J2MXG4gICAqL1xuICB3aGlsZSAodG90YWxJbnNlcnRlZENhc2ggPCBhcmdzLml0ZW1FbnRpdHkucHJpY2UpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgIGNvbnN0IGluc2VydGVkQ2FzaCA9IGF3YWl0IGdldE1vY2t1cEluc2VyQ2FzaCgpO1xuICAgIHRvdGFsSW5zZXJ0ZWRDYXNoICs9IGluc2VydGVkQ2FzaDtcbiAgfVxuXG4gIHJldHVybiB0b3RhbEluc2VydGVkQ2FzaDtcbn1cblxuLyoqXG4gKiDtmZTtj5Ag64uo7JyEIOuzhCDqsbDsiqTrpoQg64+I7J2EIOq1rO2VnOuLpC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhcmdzLmNoYW5nZSDqsbDsiqTrpoQg64+IXG4gKiBAcmV0dXJucyDtmZTtj5Ag64uo7JyEIOuzhCDqsbDsiqTrpoQg64+IIOygleuztFxuICovXG5mdW5jdGlvbiBnZXRDaGFuZ2VNYXAoYXJnczogeyBjaGFuZ2U6IG51bWJlciB9KSB7XG4gIGxldCB7IGNoYW5nZSB9ID0gYXJncztcblxuICAvLyDqsbDsiqTrpoQg64+IIOykhCDqsoPsnbQg7J6I64qUIOqyveyasFxuICAvLyA1MDAsIDEwMCDrp4wg7J6I64uk6rOgIOqwgOygle2VqFxuICBjb25zdCBjYXNoVW5pdHMgPSBbXG4gICAgLy9cbiAgICBDRV9DQVNIX1VOSVQuRklWRV9IVU5EUkVELFxuICAgIENFX0NBU0hfVU5JVC5PTkVfSFVORFJFRCxcbiAgXTtcbiAgY29uc3QgY2hhbmdlTWFwID0gbmV3IE1hcDxMYXN0QXJyYXlFbGVtZW50PHR5cGVvZiBjYXNoVW5pdHM+LCBudW1iZXI+KCk7XG5cbiAgY2FzaFVuaXRzLmZvckVhY2goKGNhc2hVbml0KSA9PiB7XG4gICAgY29uc3QgY2FzaENvdW50ID0gTWF0aC5mbG9vcihjaGFuZ2UgLyBjYXNoVW5pdCk7XG5cbiAgICBjaGFuZ2UgLT0gY2FzaFVuaXQgKiBjYXNoQ291bnQ7XG4gICAgY2hhbmdlTWFwLnNldChjYXNoVW5pdCwgY2FzaENvdW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VNYXAsXG4gIH07XG59XG5cbi8qKlxuICog7ZiE6riIIOqxsOyKpOumhOuPiCDtmZXsnbhcbiAqIEBwYXJhbSB7SUl0ZW1FbnRpdHl9IGFyZ3MuaXRlbUVudGl0eSDsg4Htkogg7KCV67O0XG4gKiBAcGFyYW0ge251bWJlcn0gYXJncy50b3RhbEluc2VydGVkQ2FzaCDstJ0g7J6F6riI65CcIO2YhOq4iOyVoVxuICogQHJldHVybnMg6rGw7Iqk66aE64+IIOqysOqzvFxuICovXG5hc3luYyBmdW5jdGlvbiBjaGVja0Nhc2hDaGFuZ2UoYXJnczogeyBpdGVtRW50aXR5OiBJSXRlbUVudGl0eTsgdG90YWxJbnNlcnRlZENhc2g6IG51bWJlciB9KTogUHJvbWlzZTx7XG4gIGl0ZW1FbnRpdHk6IElJdGVtRW50aXR5O1xuICB0b3RhbEluc2VydGVkQ2FzaD86IG51bWJlcjtcbiAgY2hhbmdlTWFwPzogVENoYW5nZU1hcDtcbn0+IHtcbiAgLy8g6rGw7Iqk66aEIOuPiFxuICBjb25zdCBjaGFuZ2UgPSBhcmdzLnRvdGFsSW5zZXJ0ZWRDYXNoIC0gYXJncy5pdGVtRW50aXR5LnByaWNlO1xuXG4gIC8vIOqxsOyKpOumhCDrj4gg7KSEIOqyg+ydtCDsl4bsnYQg6rK97JqwXG4gIGlmIChjaGFuZ2UgPD0gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtRW50aXR5OiBhcmdzLml0ZW1FbnRpdHksXG4gICAgICB0b3RhbEluc2VydGVkQ2FzaDogYXJncy50b3RhbEluc2VydGVkQ2FzaCxcbiAgICB9O1xuICB9XG5cbiAgLy8g6rGw7Iqk66aEIOuPiCDspIQg6rKD7J20IOyeiOuKlCDqsr3smrBcbiAgY29uc3QgeyBjaGFuZ2VNYXAgfSA9IGdldENoYW5nZU1hcCh7XG4gICAgY2hhbmdlLFxuICB9KTtcblxuICAvLyDqsbDsiqTrpoQg64+IIOyeiOydhCDqsr3smrAg67Cw7LacXG4gIGlmIChjaGFuZ2VNYXAgIT0gbnVsbCAmJiBjaGFuZ2VNYXAuc2l6ZSA+IDApIHtcbiAgICBhd2FpdCBtb2NrdXBEaXNwZW5zZUNoYW5nZSh7IGNoYW5nZU1hcCB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXRlbUVudGl0eTogYXJncy5pdGVtRW50aXR5LFxuICAgIHRvdGFsSW5zZXJ0ZWRDYXNoOiBhcmdzLnRvdGFsSW5zZXJ0ZWRDYXNoLFxuICAgIGNoYW5nZU1hcCxcbiAgfTtcbn1cblxuLyoqXG4gKiDtmITquIgg6rKw7KCcXG4gKiBAcGFyYW0ge0lJdGVtRW50aXR5fSBhcmdzLml0ZW1FbnRpdHkg7IOB7ZKIIOygleuztFxuICogQHJldHVybnMg7IOB7ZKIIOygleuztCwg6rGw7Iqk66aEIOuPiCDsoJXrs7RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGF5bWVudENhc2goYXJnczogeyBpdGVtRW50aXR5OiBJSXRlbUVudGl0eSB9KTogUHJvbWlzZTx7XG4gIGl0ZW1FbnRpdHk6IElJdGVtRW50aXR5O1xuICB0b3RhbEluc2VydGVkQ2FzaD86IG51bWJlcjtcbiAgY2hhbmdlTWFwPzogVENoYW5nZU1hcDtcbn0+IHtcbiAgY29uc3QgdG90YWxJbnNlcnRlZENhc2ggPSBhd2FpdCBpbnNlcnRDYXNoKHtcbiAgICBpdGVtRW50aXR5OiBhcmdzLml0ZW1FbnRpdHksXG4gIH0pO1xuXG4gIHJldHVybiBjaGVja0Nhc2hDaGFuZ2Uoe1xuICAgIGl0ZW1FbnRpdHk6IGFyZ3MuaXRlbUVudGl0eSxcbiAgICB0b3RhbEluc2VydGVkQ2FzaCxcbiAgfSk7XG59XG4iLCJpbXBvcnQgdHlwZSBJQ2hhbmdlRHRvIGZyb20gJyNpbnRlcmZhY2VzL3BheW1lbnRzL0lDaGFuZ2VEdG8nO1xuaW1wb3J0IHR5cGUgeyBUQ2hhbmdlTWFwIH0gZnJvbSAnI2ludGVyZmFjZXMvcGF5bWVudHMvSUNoYW5nZUR0byc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcmlhbGl6ZXJDaGFuZ2VEdG8oY2hhbmdlTWFwOiBUQ2hhbmdlTWFwKTogSUNoYW5nZUR0byB7XG4gIHJldHVybiBBcnJheS5mcm9tKGNoYW5nZU1hcC5lbnRyaWVzKCkpLnJlZHVjZTxJQ2hhbmdlRHRvPigoYWNjLCBbY2hhbmdlVW5pdCwgY2hhbmdlQ291bnRdKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtjaGFuZ2VVbml0XTogY2hhbmdlQ291bnQsXG4gICAgfTtcbiAgfSwge30gYXMgSUNoYW5nZUR0byk7XG59XG4iLCJpbXBvcnQgdHlwZSBJSXRlbUR0byBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JSXRlbUR0byc7XG5pbXBvcnQgdHlwZSBJSXRlbUVudGl0eSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JSXRlbUVudGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcmlhbGl6ZXJJdGVtRHRvKGl0ZW1FbnRpdHk6IElJdGVtRW50aXR5KTogSUl0ZW1EdG8ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGl0ZW1FbnRpdHkubmFtZSxcbiAgICBwcmljZTogaXRlbUVudGl0eS5wcmljZSxcbiAgICBxdWFudGl0eTogaXRlbUVudGl0eS5xdWFudGl0eSxcbiAgfSBzYXRpc2ZpZXMgSUl0ZW1EdG87XG59XG4iLCJpbXBvcnQgdHlwZSBJSXRlbUVudGl0eSBmcm9tICcjaW50ZXJmYWNlcy9pdGVtcy9JSXRlbUVudGl0eSc7XG5pbXBvcnQgdHlwZSB7IFRDaGFuZ2VNYXAgfSBmcm9tICcjaW50ZXJmYWNlcy9wYXltZW50cy9JQ2hhbmdlRHRvJztcbmltcG9ydCB0eXBlIElSZXNQb3N0UGF5bWVudCBmcm9tICcjaW50ZXJmYWNlcy9wYXltZW50cy9JUmVzUG9zdFBheW1lbnQnO1xuaW1wb3J0IHNlcmlhbGl6ZXJDaGFuZ2VEdG8gZnJvbSAnI3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXJDaGFuZ2VEdG8nO1xuaW1wb3J0IHNlcmlhbGl6ZXJJdGVtRHRvIGZyb20gJyNzZXJpYWxpemVycy9zZXJpYWxpemVySXRlbUR0byc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcmlhbGl6ZXJSZXNQb3N0UGF5bWVudChhcmdzOiB7XG4gIGl0ZW1FbnRpdHk6IElJdGVtRW50aXR5O1xuICB0b3RhbEluc2VydGVkQ2FzaD86IG51bWJlcjtcbiAgY2hhbmdlTWFwPzogVENoYW5nZU1hcDtcbn0pOiBJUmVzUG9zdFBheW1lbnQge1xuICBjb25zdCB7IGl0ZW1FbnRpdHksIHRvdGFsSW5zZXJ0ZWRDYXNoLCBjaGFuZ2VNYXAgfSA9IGFyZ3M7XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtOiBzZXJpYWxpemVySXRlbUR0byhpdGVtRW50aXR5KSxcbiAgICBjYXNoOlxuICAgICAgdG90YWxJbnNlcnRlZENhc2ggPT0gbnVsbCAmJiBjaGFuZ2VNYXAgPT0gbnVsbFxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGRlcG9zaXRBbW91bnQ6IHRvdGFsSW5zZXJ0ZWRDYXNoLFxuICAgICAgICAgICAgY2hhbmdlOiBjaGFuZ2VNYXAgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHNlcmlhbGl6ZXJDaGFuZ2VEdG8oY2hhbmdlTWFwKSxcbiAgICAgICAgICB9LFxuICB9IHNhdGlzZmllcyBJUmVzUG9zdFBheW1lbnQ7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgc3dhZ2dlckNvbmZpZyBmcm9tICcjc2VydmVycy9wbHVnaW5zL3N3YWdnZXJDb25maWcnO1xuaW1wb3J0IHN3YWdnZXJVSUNvbmZpZyBmcm9tICcjc2VydmVycy9wbHVnaW5zL3N3YWdnZXJVSUNvbmZpZyc7XG5pbXBvcnQgcm91dGUgZnJvbSAnI3NlcnZlcnMvcm91dGUnO1xuaW1wb3J0IFN0YXR1c0Vycm9yIGZyb20gJyN0b29scy9TdGF0dXNFcnJvcic7XG5pbXBvcnQgZmFzdGlmeVN3YWdnZXIgZnJvbSAnQGZhc3RpZnkvc3dhZ2dlcic7XG5pbXBvcnQgZmFzdGlmeVN3YWdnZXJVSSBmcm9tICdAZmFzdGlmeS9zd2FnZ2VyLXVpJztcbmltcG9ydCB0eXBlIHsgRmFzdGlmeUVycm9yLCBGYXN0aWZ5SW5zdGFuY2UgfSBmcm9tICdmYXN0aWZ5JztcbmltcG9ydCBmYXN0aWZ5IGZyb20gJ2Zhc3RpZnknO1xuaW1wb3J0IHsgdHlwZSBJbmNvbWluZ01lc3NhZ2UsIHR5cGUgU2VydmVyLCB0eXBlIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuY29uc3Qgc2VydmVyOiBGYXN0aWZ5SW5zdGFuY2UgPSBmYXN0aWZ5PFNlcnZlciwgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZT4oKTtcblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGF3YWl0IHNlcnZlci5yZWdpc3RlcihmYXN0aWZ5U3dhZ2dlciwgc3dhZ2dlckNvbmZpZygpKTtcbiAgYXdhaXQgc2VydmVyLnJlZ2lzdGVyKGZhc3RpZnlTd2FnZ2VyVUksIHN3YWdnZXJVSUNvbmZpZygpKTtcblxuICByb3V0ZShzZXJ2ZXIpO1xuXG4gIHNlcnZlci5zZXRFcnJvckhhbmRsZXIoKGVycm9yOiBGYXN0aWZ5RXJyb3IsIF9yZXEsIHJlcGx5KSA9PiB7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgU3RhdHVzRXJyb3IpIHtcbiAgICAgIHJldHVybiByZXBseS5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSkuc2VuZCh7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcGx5LnNlbmQoZXJyb3IpO1xuICB9KTtcblxuICBzZXJ2ZXIubGlzdGVuKHsgcG9ydDogODA4MCB9LCAoZXJyLCBhZGRyZXNzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBhdCAke2FkZHJlc3N9YCk7XG4gIH0pO1xufVxuXG5zdGFydCgpLmNhdGNoKChjYXRjaGVkKSA9PiB7XG4gIGNvbnN0IGVyciA9IGNhdGNoZWQgaW5zdGFuY2VvZiBFcnJvciA/IGNhdGNoZWQgOiBuZXcgRXJyb3IoJ3Vua25vd24gZXJyb3IgcmFpc2VkJyk7XG5cbiAgY29uc29sZS5lcnJvcihlcnIpO1xufSk7XG4iLCJpbXBvcnQgdHlwZSB7IEZhc3RpZnlEeW5hbWljU3dhZ2dlck9wdGlvbnMgfSBmcm9tICdAZmFzdGlmeS9zd2FnZ2VyJztcblxuLyoqIHN3YWdnZXIg7ISk7KCV7J2EIOuPjOugpOykjCAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3dhZ2dlckNvbmZpZygpOiBGYXN0aWZ5RHluYW1pY1N3YWdnZXJPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICBvcGVuYXBpOiB7XG4gICAgICBpbmZvOiB7XG4gICAgICAgIHRpdGxlOiAndmVuZGluZy1tZWNoaW5lLWFwaScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndmVuZGluZy1tZWNoaW5lLWFwaSDshJzrsoTsnZggU3dhZ2dlciDrrLjshJzsnoXri4jri6QnLFxuICAgICAgICB2ZXJzaW9uOiAnMC4xLjAnLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHR5cGUgeyBGYXN0aWZ5U3dhZ2dlclVpT3B0aW9ucyB9IGZyb20gJ0BmYXN0aWZ5L3N3YWdnZXItdWknO1xuXG4vKiogc3dhZ2dlciDshKTsoJXsnYQg64+M66Ck7KSMICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzd2FnZ2VyVUlDb25maWcoKTogRmFzdGlmeVN3YWdnZXJVaU9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIHJvdXRlUHJlZml4OiAnL3N3YWdnZXIuaW8nLFxuXG4gICAgdWlDb25maWc6IHtcbiAgICAgIGRlZXBMaW5raW5nOiB0cnVlLFxuICAgICAgZmlsdGVyOiB0cnVlLFxuICAgICAgZGlzcGxheVJlcXVlc3REdXJhdGlvbjogdHJ1ZSxcbiAgICAgIGRpc3BsYXlPcGVyYXRpb25JZDogZmFsc2UsXG4gICAgICBzaG93RXh0ZW5zaW9uczogdHJ1ZSxcbiAgICB9LFxuICAgIHN0YXRpY0NTUDogZmFsc2UsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBnZXRIZWFsdGhSb3V0ZSB9IGZyb20gJyNoYW5kbGVycy9nZXRIZWFsdGgnO1xuaW1wb3J0IHsgZ2V0SXRlbVJvdXRlIH0gZnJvbSAnI2hhbmRsZXJzL3YxL2dldEl0ZW0nO1xuaW1wb3J0IHsgZ2V0SXRlbXNSb3V0ZSB9IGZyb20gJyNoYW5kbGVycy92MS9nZXRJdGVtcyc7XG5pbXBvcnQgeyBwb3N0UGF5bWVudFJvdXRlIH0gZnJvbSAnI2hhbmRsZXJzL3YxL3Bvc3RQYXltZW50JztcbmltcG9ydCB0eXBlIHsgRmFzdGlmeUluc3RhbmNlIH0gZnJvbSAnZmFzdGlmeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlKGZhc3RpZnk6IEZhc3RpZnlJbnN0YW5jZSk6IHZvaWQge1xuICBnZXRIZWFsdGhSb3V0ZShmYXN0aWZ5KTtcbiAgZ2V0SXRlbVJvdXRlKGZhc3RpZnkpO1xuICBnZXRJdGVtc1JvdXRlKGZhc3RpZnkpO1xuICBwb3N0UGF5bWVudFJvdXRlKGZhc3RpZnkpO1xufVxuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tICdodHRwLXN0YXR1cy1jb2Rlcyc7XG5cbi8qKlxuICogaHR0cCBzdGF0dXMgY29kZSDrpbwg7Y+s7ZWo7ZWcIEVycm9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXR1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgc3RhdHVzQ29kZTogU3RhdHVzQ29kZXM7XG5cbiAgY29uc3RydWN0b3IoYXJnczogeyBtZXNzYWdlPzogc3RyaW5nOyBzdGF0dXNDb2RlPzogU3RhdHVzQ29kZXMgfSkge1xuICAgIHN1cGVyKGFyZ3MubWVzc2FnZSk7XG5cbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBhcmdzLnN0YXR1c0NvZGUgPz8gU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSYW5kb21FbGVtZW50PFQ+KGFycmF5OiBUW10pOiBUIHtcbiAgY29uc3QgdmFsdWU6IFQgfCB1bmRlZmluZWQgPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndmFsdWUgbm90IGZvdW5kJyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZmFzdGlmeS9zd2FnZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmYXN0aWZ5L3N3YWdnZXItdWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXN0YXR1cy1jb2Rlc1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2VydmVycy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=