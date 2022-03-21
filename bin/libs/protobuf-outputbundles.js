var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.msg = (function() {

        /**
         * Namespace msg.
         * @memberof com
         * @namespace
         */
        var msg = {};

        msg.c_getOpenId_800 = (function() {

            /**
             * Properties of a c_getOpenId_800.
             * @memberof com.msg
             * @interface Ic_getOpenId_800
             * @property {string} appid c_getOpenId_800 appid
             * @property {string} sessionCode c_getOpenId_800 sessionCode
             */

            /**
             * Constructs a new c_getOpenId_800.
             * @memberof com.msg
             * @classdesc Represents a c_getOpenId_800.
             * @implements Ic_getOpenId_800
             * @constructor
             * @param {com.msg.Ic_getOpenId_800=} [properties] Properties to set
             */
            function c_getOpenId_800(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getOpenId_800 appid.
             * @member {string} appid
             * @memberof com.msg.c_getOpenId_800
             * @instance
             */
            c_getOpenId_800.prototype.appid = "";

            /**
             * c_getOpenId_800 sessionCode.
             * @member {string} sessionCode
             * @memberof com.msg.c_getOpenId_800
             * @instance
             */
            c_getOpenId_800.prototype.sessionCode = "";

            /**
             * Creates a new c_getOpenId_800 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getOpenId_800
             * @static
             * @param {com.msg.Ic_getOpenId_800=} [properties] Properties to set
             * @returns {com.msg.c_getOpenId_800} c_getOpenId_800 instance
             */
            c_getOpenId_800.create = function create(properties) {
                return new c_getOpenId_800(properties);
            };

            /**
             * Encodes the specified c_getOpenId_800 message. Does not implicitly {@link com.msg.c_getOpenId_800.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getOpenId_800
             * @static
             * @param {com.msg.Ic_getOpenId_800} message c_getOpenId_800 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getOpenId_800.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appid);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionCode);
                return writer;
            };

            /**
             * Encodes the specified c_getOpenId_800 message, length delimited. Does not implicitly {@link com.msg.c_getOpenId_800.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getOpenId_800
             * @static
             * @param {com.msg.Ic_getOpenId_800} message c_getOpenId_800 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getOpenId_800.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getOpenId_800 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getOpenId_800
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getOpenId_800} c_getOpenId_800
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getOpenId_800.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getOpenId_800();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.appid = reader.string();
                        break;
                    case 2:
                        message.sessionCode = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("appid"))
                    throw $util.ProtocolError("missing required 'appid'", { instance: message });
                if (!message.hasOwnProperty("sessionCode"))
                    throw $util.ProtocolError("missing required 'sessionCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getOpenId_800 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getOpenId_800
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getOpenId_800} c_getOpenId_800
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getOpenId_800.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getOpenId_800 message.
             * @function verify
             * @memberof com.msg.c_getOpenId_800
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getOpenId_800.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.appid))
                    return "appid: string expected";
                if (!$util.isString(message.sessionCode))
                    return "sessionCode: string expected";
                return null;
            };

            return c_getOpenId_800;
        })();

        msg.s_getOpenId_801 = (function() {

            /**
             * Properties of a s_getOpenId_801.
             * @memberof com.msg
             * @interface Is_getOpenId_801
             * @property {com.msg.ImsgResult} result s_getOpenId_801 result
             * @property {string} openId s_getOpenId_801 openId
             */

            /**
             * Constructs a new s_getOpenId_801.
             * @memberof com.msg
             * @classdesc Represents a s_getOpenId_801.
             * @implements Is_getOpenId_801
             * @constructor
             * @param {com.msg.Is_getOpenId_801=} [properties] Properties to set
             */
            function s_getOpenId_801(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getOpenId_801 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getOpenId_801
             * @instance
             */
            s_getOpenId_801.prototype.result = null;

            /**
             * s_getOpenId_801 openId.
             * @member {string} openId
             * @memberof com.msg.s_getOpenId_801
             * @instance
             */
            s_getOpenId_801.prototype.openId = "";

            /**
             * Creates a new s_getOpenId_801 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getOpenId_801
             * @static
             * @param {com.msg.Is_getOpenId_801=} [properties] Properties to set
             * @returns {com.msg.s_getOpenId_801} s_getOpenId_801 instance
             */
            s_getOpenId_801.create = function create(properties) {
                return new s_getOpenId_801(properties);
            };

            /**
             * Encodes the specified s_getOpenId_801 message. Does not implicitly {@link com.msg.s_getOpenId_801.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getOpenId_801
             * @static
             * @param {com.msg.Is_getOpenId_801} message s_getOpenId_801 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getOpenId_801.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.openId);
                return writer;
            };

            /**
             * Encodes the specified s_getOpenId_801 message, length delimited. Does not implicitly {@link com.msg.s_getOpenId_801.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getOpenId_801
             * @static
             * @param {com.msg.Is_getOpenId_801} message s_getOpenId_801 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getOpenId_801.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getOpenId_801 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getOpenId_801
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getOpenId_801} s_getOpenId_801
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getOpenId_801.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getOpenId_801();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.openId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("openId"))
                    throw $util.ProtocolError("missing required 'openId'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getOpenId_801 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getOpenId_801
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getOpenId_801} s_getOpenId_801
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getOpenId_801.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getOpenId_801 message.
             * @function verify
             * @memberof com.msg.s_getOpenId_801
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getOpenId_801.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (!$util.isString(message.openId))
                    return "openId: string expected";
                return null;
            };

            return s_getOpenId_801;
        })();

        msg.c_chooseServer_998 = (function() {

            /**
             * Properties of a c_chooseServer_998.
             * @memberof com.msg
             * @interface Ic_chooseServer_998
             * @property {string} openID c_chooseServer_998 openID
             */

            /**
             * Constructs a new c_chooseServer_998.
             * @memberof com.msg
             * @classdesc Represents a c_chooseServer_998.
             * @implements Ic_chooseServer_998
             * @constructor
             * @param {com.msg.Ic_chooseServer_998=} [properties] Properties to set
             */
            function c_chooseServer_998(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_chooseServer_998 openID.
             * @member {string} openID
             * @memberof com.msg.c_chooseServer_998
             * @instance
             */
            c_chooseServer_998.prototype.openID = "";

            /**
             * Creates a new c_chooseServer_998 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_chooseServer_998
             * @static
             * @param {com.msg.Ic_chooseServer_998=} [properties] Properties to set
             * @returns {com.msg.c_chooseServer_998} c_chooseServer_998 instance
             */
            c_chooseServer_998.create = function create(properties) {
                return new c_chooseServer_998(properties);
            };

            /**
             * Encodes the specified c_chooseServer_998 message. Does not implicitly {@link com.msg.c_chooseServer_998.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_chooseServer_998
             * @static
             * @param {com.msg.Ic_chooseServer_998} message c_chooseServer_998 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_chooseServer_998.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openID);
                return writer;
            };

            /**
             * Encodes the specified c_chooseServer_998 message, length delimited. Does not implicitly {@link com.msg.c_chooseServer_998.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_chooseServer_998
             * @static
             * @param {com.msg.Ic_chooseServer_998} message c_chooseServer_998 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_chooseServer_998.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_chooseServer_998 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_chooseServer_998
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_chooseServer_998} c_chooseServer_998
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_chooseServer_998.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_chooseServer_998();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.openID = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("openID"))
                    throw $util.ProtocolError("missing required 'openID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_chooseServer_998 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_chooseServer_998
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_chooseServer_998} c_chooseServer_998
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_chooseServer_998.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_chooseServer_998 message.
             * @function verify
             * @memberof com.msg.c_chooseServer_998
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_chooseServer_998.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.openID))
                    return "openID: string expected";
                return null;
            };

            return c_chooseServer_998;
        })();

        msg.s_chooseServer_999 = (function() {

            /**
             * Properties of a s_chooseServer_999.
             * @memberof com.msg
             * @interface Is_chooseServer_999
             * @property {com.msg.ImsgResult} result s_chooseServer_999 result
             * @property {string} serverAddress s_chooseServer_999 serverAddress
             */

            /**
             * Constructs a new s_chooseServer_999.
             * @memberof com.msg
             * @classdesc Represents a s_chooseServer_999.
             * @implements Is_chooseServer_999
             * @constructor
             * @param {com.msg.Is_chooseServer_999=} [properties] Properties to set
             */
            function s_chooseServer_999(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_chooseServer_999 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_chooseServer_999
             * @instance
             */
            s_chooseServer_999.prototype.result = null;

            /**
             * s_chooseServer_999 serverAddress.
             * @member {string} serverAddress
             * @memberof com.msg.s_chooseServer_999
             * @instance
             */
            s_chooseServer_999.prototype.serverAddress = "";

            /**
             * Creates a new s_chooseServer_999 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_chooseServer_999
             * @static
             * @param {com.msg.Is_chooseServer_999=} [properties] Properties to set
             * @returns {com.msg.s_chooseServer_999} s_chooseServer_999 instance
             */
            s_chooseServer_999.create = function create(properties) {
                return new s_chooseServer_999(properties);
            };

            /**
             * Encodes the specified s_chooseServer_999 message. Does not implicitly {@link com.msg.s_chooseServer_999.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_chooseServer_999
             * @static
             * @param {com.msg.Is_chooseServer_999} message s_chooseServer_999 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_chooseServer_999.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverAddress);
                return writer;
            };

            /**
             * Encodes the specified s_chooseServer_999 message, length delimited. Does not implicitly {@link com.msg.s_chooseServer_999.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_chooseServer_999
             * @static
             * @param {com.msg.Is_chooseServer_999} message s_chooseServer_999 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_chooseServer_999.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_chooseServer_999 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_chooseServer_999
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_chooseServer_999} s_chooseServer_999
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_chooseServer_999.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_chooseServer_999();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.serverAddress = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("serverAddress"))
                    throw $util.ProtocolError("missing required 'serverAddress'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_chooseServer_999 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_chooseServer_999
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_chooseServer_999} s_chooseServer_999
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_chooseServer_999.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_chooseServer_999 message.
             * @function verify
             * @memberof com.msg.s_chooseServer_999
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_chooseServer_999.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (!$util.isString(message.serverAddress))
                    return "serverAddress: string expected";
                return null;
            };

            return s_chooseServer_999;
        })();

        msg.c_userLogin_1000 = (function() {

            /**
             * Properties of a c_userLogin_1000.
             * @memberof com.msg
             * @interface Ic_userLogin_1000
             * @property {string} openID c_userLogin_1000 openID
             * @property {string|null} [nickName] c_userLogin_1000 nickName
             * @property {string|null} [imageUrl] c_userLogin_1000 imageUrl
             * @property {com.msg.IinvitorInfo|null} [invitorInfo] c_userLogin_1000 invitorInfo
             */

            /**
             * Constructs a new c_userLogin_1000.
             * @memberof com.msg
             * @classdesc Represents a c_userLogin_1000.
             * @implements Ic_userLogin_1000
             * @constructor
             * @param {com.msg.Ic_userLogin_1000=} [properties] Properties to set
             */
            function c_userLogin_1000(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_userLogin_1000 openID.
             * @member {string} openID
             * @memberof com.msg.c_userLogin_1000
             * @instance
             */
            c_userLogin_1000.prototype.openID = "";

            /**
             * c_userLogin_1000 nickName.
             * @member {string} nickName
             * @memberof com.msg.c_userLogin_1000
             * @instance
             */
            c_userLogin_1000.prototype.nickName = "";

            /**
             * c_userLogin_1000 imageUrl.
             * @member {string} imageUrl
             * @memberof com.msg.c_userLogin_1000
             * @instance
             */
            c_userLogin_1000.prototype.imageUrl = "";

            /**
             * c_userLogin_1000 invitorInfo.
             * @member {com.msg.IinvitorInfo|null|undefined} invitorInfo
             * @memberof com.msg.c_userLogin_1000
             * @instance
             */
            c_userLogin_1000.prototype.invitorInfo = null;

            /**
             * Creates a new c_userLogin_1000 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_userLogin_1000
             * @static
             * @param {com.msg.Ic_userLogin_1000=} [properties] Properties to set
             * @returns {com.msg.c_userLogin_1000} c_userLogin_1000 instance
             */
            c_userLogin_1000.create = function create(properties) {
                return new c_userLogin_1000(properties);
            };

            /**
             * Encodes the specified c_userLogin_1000 message. Does not implicitly {@link com.msg.c_userLogin_1000.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_userLogin_1000
             * @static
             * @param {com.msg.Ic_userLogin_1000} message c_userLogin_1000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_userLogin_1000.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.openID);
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
                if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.imageUrl);
                if (message.invitorInfo != null && message.hasOwnProperty("invitorInfo"))
                    $root.com.msg.invitorInfo.encode(message.invitorInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified c_userLogin_1000 message, length delimited. Does not implicitly {@link com.msg.c_userLogin_1000.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_userLogin_1000
             * @static
             * @param {com.msg.Ic_userLogin_1000} message c_userLogin_1000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_userLogin_1000.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_userLogin_1000 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_userLogin_1000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_userLogin_1000} c_userLogin_1000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_userLogin_1000.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_userLogin_1000();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.openID = reader.string();
                        break;
                    case 2:
                        message.nickName = reader.string();
                        break;
                    case 3:
                        message.imageUrl = reader.string();
                        break;
                    case 4:
                        message.invitorInfo = $root.com.msg.invitorInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("openID"))
                    throw $util.ProtocolError("missing required 'openID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_userLogin_1000 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_userLogin_1000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_userLogin_1000} c_userLogin_1000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_userLogin_1000.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_userLogin_1000 message.
             * @function verify
             * @memberof com.msg.c_userLogin_1000
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_userLogin_1000.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.openID))
                    return "openID: string expected";
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    if (!$util.isString(message.nickName))
                        return "nickName: string expected";
                if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                    if (!$util.isString(message.imageUrl))
                        return "imageUrl: string expected";
                if (message.invitorInfo != null && message.hasOwnProperty("invitorInfo")) {
                    var error = $root.com.msg.invitorInfo.verify(message.invitorInfo);
                    if (error)
                        return "invitorInfo." + error;
                }
                return null;
            };

            return c_userLogin_1000;
        })();

        msg.s_userLogin_1001 = (function() {

            /**
             * Properties of a s_userLogin_1001.
             * @memberof com.msg
             * @interface Is_userLogin_1001
             * @property {com.msg.ImsgResult} result s_userLogin_1001 result
             * @property {com.msg.IplayerInfo|null} [playerInfo] s_userLogin_1001 playerInfo
             * @property {string|null} [openID] s_userLogin_1001 openID
             */

            /**
             * Constructs a new s_userLogin_1001.
             * @memberof com.msg
             * @classdesc Represents a s_userLogin_1001.
             * @implements Is_userLogin_1001
             * @constructor
             * @param {com.msg.Is_userLogin_1001=} [properties] Properties to set
             */
            function s_userLogin_1001(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_userLogin_1001 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_userLogin_1001
             * @instance
             */
            s_userLogin_1001.prototype.result = null;

            /**
             * s_userLogin_1001 playerInfo.
             * @member {com.msg.IplayerInfo|null|undefined} playerInfo
             * @memberof com.msg.s_userLogin_1001
             * @instance
             */
            s_userLogin_1001.prototype.playerInfo = null;

            /**
             * s_userLogin_1001 openID.
             * @member {string} openID
             * @memberof com.msg.s_userLogin_1001
             * @instance
             */
            s_userLogin_1001.prototype.openID = "";

            /**
             * Creates a new s_userLogin_1001 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_userLogin_1001
             * @static
             * @param {com.msg.Is_userLogin_1001=} [properties] Properties to set
             * @returns {com.msg.s_userLogin_1001} s_userLogin_1001 instance
             */
            s_userLogin_1001.create = function create(properties) {
                return new s_userLogin_1001(properties);
            };

            /**
             * Encodes the specified s_userLogin_1001 message. Does not implicitly {@link com.msg.s_userLogin_1001.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_userLogin_1001
             * @static
             * @param {com.msg.Is_userLogin_1001} message s_userLogin_1001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_userLogin_1001.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                    $root.com.msg.playerInfo.encode(message.playerInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.openID != null && message.hasOwnProperty("openID"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.openID);
                return writer;
            };

            /**
             * Encodes the specified s_userLogin_1001 message, length delimited. Does not implicitly {@link com.msg.s_userLogin_1001.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_userLogin_1001
             * @static
             * @param {com.msg.Is_userLogin_1001} message s_userLogin_1001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_userLogin_1001.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_userLogin_1001 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_userLogin_1001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_userLogin_1001} s_userLogin_1001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_userLogin_1001.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_userLogin_1001();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.playerInfo = $root.com.msg.playerInfo.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.openID = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_userLogin_1001 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_userLogin_1001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_userLogin_1001} s_userLogin_1001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_userLogin_1001.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_userLogin_1001 message.
             * @function verify
             * @memberof com.msg.s_userLogin_1001
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_userLogin_1001.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                    var error = $root.com.msg.playerInfo.verify(message.playerInfo);
                    if (error)
                        return "playerInfo." + error;
                }
                if (message.openID != null && message.hasOwnProperty("openID"))
                    if (!$util.isString(message.openID))
                        return "openID: string expected";
                return null;
            };

            return s_userLogin_1001;
        })();

        msg.c_setNewbieStep_1100 = (function() {

            /**
             * Properties of a c_setNewbieStep_1100.
             * @memberof com.msg
             * @interface Ic_setNewbieStep_1100
             * @property {number|Long} playerID c_setNewbieStep_1100 playerID
             * @property {number} newStepId c_setNewbieStep_1100 newStepId
             */

            /**
             * Constructs a new c_setNewbieStep_1100.
             * @memberof com.msg
             * @classdesc Represents a c_setNewbieStep_1100.
             * @implements Ic_setNewbieStep_1100
             * @constructor
             * @param {com.msg.Ic_setNewbieStep_1100=} [properties] Properties to set
             */
            function c_setNewbieStep_1100(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_setNewbieStep_1100 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_setNewbieStep_1100
             * @instance
             */
            c_setNewbieStep_1100.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * c_setNewbieStep_1100 newStepId.
             * @member {number} newStepId
             * @memberof com.msg.c_setNewbieStep_1100
             * @instance
             */
            c_setNewbieStep_1100.prototype.newStepId = 0;

            /**
             * Creates a new c_setNewbieStep_1100 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_setNewbieStep_1100
             * @static
             * @param {com.msg.Ic_setNewbieStep_1100=} [properties] Properties to set
             * @returns {com.msg.c_setNewbieStep_1100} c_setNewbieStep_1100 instance
             */
            c_setNewbieStep_1100.create = function create(properties) {
                return new c_setNewbieStep_1100(properties);
            };

            /**
             * Encodes the specified c_setNewbieStep_1100 message. Does not implicitly {@link com.msg.c_setNewbieStep_1100.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_setNewbieStep_1100
             * @static
             * @param {com.msg.Ic_setNewbieStep_1100} message c_setNewbieStep_1100 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_setNewbieStep_1100.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.newStepId);
                return writer;
            };

            /**
             * Encodes the specified c_setNewbieStep_1100 message, length delimited. Does not implicitly {@link com.msg.c_setNewbieStep_1100.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_setNewbieStep_1100
             * @static
             * @param {com.msg.Ic_setNewbieStep_1100} message c_setNewbieStep_1100 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_setNewbieStep_1100.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_setNewbieStep_1100 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_setNewbieStep_1100
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_setNewbieStep_1100} c_setNewbieStep_1100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_setNewbieStep_1100.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_setNewbieStep_1100();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.newStepId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("newStepId"))
                    throw $util.ProtocolError("missing required 'newStepId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_setNewbieStep_1100 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_setNewbieStep_1100
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_setNewbieStep_1100} c_setNewbieStep_1100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_setNewbieStep_1100.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_setNewbieStep_1100 message.
             * @function verify
             * @memberof com.msg.c_setNewbieStep_1100
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_setNewbieStep_1100.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isInteger(message.newStepId))
                    return "newStepId: integer expected";
                return null;
            };

            return c_setNewbieStep_1100;
        })();

        msg.s_setNewbieStep_1101 = (function() {

            /**
             * Properties of a s_setNewbieStep_1101.
             * @memberof com.msg
             * @interface Is_setNewbieStep_1101
             * @property {com.msg.ImsgResult} result s_setNewbieStep_1101 result
             */

            /**
             * Constructs a new s_setNewbieStep_1101.
             * @memberof com.msg
             * @classdesc Represents a s_setNewbieStep_1101.
             * @implements Is_setNewbieStep_1101
             * @constructor
             * @param {com.msg.Is_setNewbieStep_1101=} [properties] Properties to set
             */
            function s_setNewbieStep_1101(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_setNewbieStep_1101 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_setNewbieStep_1101
             * @instance
             */
            s_setNewbieStep_1101.prototype.result = null;

            /**
             * Creates a new s_setNewbieStep_1101 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_setNewbieStep_1101
             * @static
             * @param {com.msg.Is_setNewbieStep_1101=} [properties] Properties to set
             * @returns {com.msg.s_setNewbieStep_1101} s_setNewbieStep_1101 instance
             */
            s_setNewbieStep_1101.create = function create(properties) {
                return new s_setNewbieStep_1101(properties);
            };

            /**
             * Encodes the specified s_setNewbieStep_1101 message. Does not implicitly {@link com.msg.s_setNewbieStep_1101.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_setNewbieStep_1101
             * @static
             * @param {com.msg.Is_setNewbieStep_1101} message s_setNewbieStep_1101 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_setNewbieStep_1101.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_setNewbieStep_1101 message, length delimited. Does not implicitly {@link com.msg.s_setNewbieStep_1101.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_setNewbieStep_1101
             * @static
             * @param {com.msg.Is_setNewbieStep_1101} message s_setNewbieStep_1101 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_setNewbieStep_1101.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_setNewbieStep_1101 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_setNewbieStep_1101
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_setNewbieStep_1101} s_setNewbieStep_1101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_setNewbieStep_1101.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_setNewbieStep_1101();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_setNewbieStep_1101 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_setNewbieStep_1101
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_setNewbieStep_1101} s_setNewbieStep_1101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_setNewbieStep_1101.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_setNewbieStep_1101 message.
             * @function verify
             * @memberof com.msg.s_setNewbieStep_1101
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_setNewbieStep_1101.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };

            return s_setNewbieStep_1101;
        })();

        msg.c_getSignUpInfo_4000 = (function() {

            /**
             * Properties of a c_getSignUpInfo_4000.
             * @memberof com.msg
             * @interface Ic_getSignUpInfo_4000
             * @property {number|Long} playerID c_getSignUpInfo_4000 playerID
             */

            /**
             * Constructs a new c_getSignUpInfo_4000.
             * @memberof com.msg
             * @classdesc Represents a c_getSignUpInfo_4000.
             * @implements Ic_getSignUpInfo_4000
             * @constructor
             * @param {com.msg.Ic_getSignUpInfo_4000=} [properties] Properties to set
             */
            function c_getSignUpInfo_4000(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getSignUpInfo_4000 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_getSignUpInfo_4000
             * @instance
             */
            c_getSignUpInfo_4000.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new c_getSignUpInfo_4000 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getSignUpInfo_4000
             * @static
             * @param {com.msg.Ic_getSignUpInfo_4000=} [properties] Properties to set
             * @returns {com.msg.c_getSignUpInfo_4000} c_getSignUpInfo_4000 instance
             */
            c_getSignUpInfo_4000.create = function create(properties) {
                return new c_getSignUpInfo_4000(properties);
            };

            /**
             * Encodes the specified c_getSignUpInfo_4000 message. Does not implicitly {@link com.msg.c_getSignUpInfo_4000.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getSignUpInfo_4000
             * @static
             * @param {com.msg.Ic_getSignUpInfo_4000} message c_getSignUpInfo_4000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getSignUpInfo_4000.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                return writer;
            };

            /**
             * Encodes the specified c_getSignUpInfo_4000 message, length delimited. Does not implicitly {@link com.msg.c_getSignUpInfo_4000.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getSignUpInfo_4000
             * @static
             * @param {com.msg.Ic_getSignUpInfo_4000} message c_getSignUpInfo_4000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getSignUpInfo_4000.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getSignUpInfo_4000 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getSignUpInfo_4000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getSignUpInfo_4000} c_getSignUpInfo_4000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getSignUpInfo_4000.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getSignUpInfo_4000();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getSignUpInfo_4000 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getSignUpInfo_4000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getSignUpInfo_4000} c_getSignUpInfo_4000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getSignUpInfo_4000.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getSignUpInfo_4000 message.
             * @function verify
             * @memberof com.msg.c_getSignUpInfo_4000
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getSignUpInfo_4000.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                return null;
            };

            return c_getSignUpInfo_4000;
        })();

        msg.s_getSignUpInfo_4001 = (function() {

            /**
             * Properties of a s_getSignUpInfo_4001.
             * @memberof com.msg
             * @interface Is_getSignUpInfo_4001
             * @property {com.msg.ImsgResult} result s_getSignUpInfo_4001 result
             * @property {com.msg.IsignUpInfo|null} [signUpInfo] s_getSignUpInfo_4001 signUpInfo
             */

            /**
             * Constructs a new s_getSignUpInfo_4001.
             * @memberof com.msg
             * @classdesc Represents a s_getSignUpInfo_4001.
             * @implements Is_getSignUpInfo_4001
             * @constructor
             * @param {com.msg.Is_getSignUpInfo_4001=} [properties] Properties to set
             */
            function s_getSignUpInfo_4001(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getSignUpInfo_4001 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getSignUpInfo_4001
             * @instance
             */
            s_getSignUpInfo_4001.prototype.result = null;

            /**
             * s_getSignUpInfo_4001 signUpInfo.
             * @member {com.msg.IsignUpInfo|null|undefined} signUpInfo
             * @memberof com.msg.s_getSignUpInfo_4001
             * @instance
             */
            s_getSignUpInfo_4001.prototype.signUpInfo = null;

            /**
             * Creates a new s_getSignUpInfo_4001 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getSignUpInfo_4001
             * @static
             * @param {com.msg.Is_getSignUpInfo_4001=} [properties] Properties to set
             * @returns {com.msg.s_getSignUpInfo_4001} s_getSignUpInfo_4001 instance
             */
            s_getSignUpInfo_4001.create = function create(properties) {
                return new s_getSignUpInfo_4001(properties);
            };

            /**
             * Encodes the specified s_getSignUpInfo_4001 message. Does not implicitly {@link com.msg.s_getSignUpInfo_4001.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getSignUpInfo_4001
             * @static
             * @param {com.msg.Is_getSignUpInfo_4001} message s_getSignUpInfo_4001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getSignUpInfo_4001.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.signUpInfo != null && message.hasOwnProperty("signUpInfo"))
                    $root.com.msg.signUpInfo.encode(message.signUpInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_getSignUpInfo_4001 message, length delimited. Does not implicitly {@link com.msg.s_getSignUpInfo_4001.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getSignUpInfo_4001
             * @static
             * @param {com.msg.Is_getSignUpInfo_4001} message s_getSignUpInfo_4001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getSignUpInfo_4001.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getSignUpInfo_4001 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getSignUpInfo_4001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getSignUpInfo_4001} s_getSignUpInfo_4001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getSignUpInfo_4001.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getSignUpInfo_4001();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.signUpInfo = $root.com.msg.signUpInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getSignUpInfo_4001 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getSignUpInfo_4001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getSignUpInfo_4001} s_getSignUpInfo_4001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getSignUpInfo_4001.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getSignUpInfo_4001 message.
             * @function verify
             * @memberof com.msg.s_getSignUpInfo_4001
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getSignUpInfo_4001.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.signUpInfo != null && message.hasOwnProperty("signUpInfo")) {
                    var error = $root.com.msg.signUpInfo.verify(message.signUpInfo);
                    if (error)
                        return "signUpInfo." + error;
                }
                return null;
            };

            return s_getSignUpInfo_4001;
        })();

        msg.c_getSignUpReward_4002 = (function() {

            /**
             * Properties of a c_getSignUpReward_4002.
             * @memberof com.msg
             * @interface Ic_getSignUpReward_4002
             * @property {number|Long} playerID c_getSignUpReward_4002 playerID
             */

            /**
             * Constructs a new c_getSignUpReward_4002.
             * @memberof com.msg
             * @classdesc Represents a c_getSignUpReward_4002.
             * @implements Ic_getSignUpReward_4002
             * @constructor
             * @param {com.msg.Ic_getSignUpReward_4002=} [properties] Properties to set
             */
            function c_getSignUpReward_4002(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getSignUpReward_4002 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_getSignUpReward_4002
             * @instance
             */
            c_getSignUpReward_4002.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new c_getSignUpReward_4002 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getSignUpReward_4002
             * @static
             * @param {com.msg.Ic_getSignUpReward_4002=} [properties] Properties to set
             * @returns {com.msg.c_getSignUpReward_4002} c_getSignUpReward_4002 instance
             */
            c_getSignUpReward_4002.create = function create(properties) {
                return new c_getSignUpReward_4002(properties);
            };

            /**
             * Encodes the specified c_getSignUpReward_4002 message. Does not implicitly {@link com.msg.c_getSignUpReward_4002.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getSignUpReward_4002
             * @static
             * @param {com.msg.Ic_getSignUpReward_4002} message c_getSignUpReward_4002 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getSignUpReward_4002.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                return writer;
            };

            /**
             * Encodes the specified c_getSignUpReward_4002 message, length delimited. Does not implicitly {@link com.msg.c_getSignUpReward_4002.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getSignUpReward_4002
             * @static
             * @param {com.msg.Ic_getSignUpReward_4002} message c_getSignUpReward_4002 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getSignUpReward_4002.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getSignUpReward_4002 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getSignUpReward_4002
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getSignUpReward_4002} c_getSignUpReward_4002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getSignUpReward_4002.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getSignUpReward_4002();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getSignUpReward_4002 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getSignUpReward_4002
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getSignUpReward_4002} c_getSignUpReward_4002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getSignUpReward_4002.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getSignUpReward_4002 message.
             * @function verify
             * @memberof com.msg.c_getSignUpReward_4002
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getSignUpReward_4002.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                return null;
            };

            return c_getSignUpReward_4002;
        })();

        msg.s_getSignUpReward_4003 = (function() {

            /**
             * Properties of a s_getSignUpReward_4003.
             * @memberof com.msg
             * @interface Is_getSignUpReward_4003
             * @property {com.msg.ImsgResult} result s_getSignUpReward_4003 result
             * @property {com.msg.IgetReward|null} [getReward] s_getSignUpReward_4003 getReward
             */

            /**
             * Constructs a new s_getSignUpReward_4003.
             * @memberof com.msg
             * @classdesc Represents a s_getSignUpReward_4003.
             * @implements Is_getSignUpReward_4003
             * @constructor
             * @param {com.msg.Is_getSignUpReward_4003=} [properties] Properties to set
             */
            function s_getSignUpReward_4003(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getSignUpReward_4003 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getSignUpReward_4003
             * @instance
             */
            s_getSignUpReward_4003.prototype.result = null;

            /**
             * s_getSignUpReward_4003 getReward.
             * @member {com.msg.IgetReward|null|undefined} getReward
             * @memberof com.msg.s_getSignUpReward_4003
             * @instance
             */
            s_getSignUpReward_4003.prototype.getReward = null;

            /**
             * Creates a new s_getSignUpReward_4003 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getSignUpReward_4003
             * @static
             * @param {com.msg.Is_getSignUpReward_4003=} [properties] Properties to set
             * @returns {com.msg.s_getSignUpReward_4003} s_getSignUpReward_4003 instance
             */
            s_getSignUpReward_4003.create = function create(properties) {
                return new s_getSignUpReward_4003(properties);
            };

            /**
             * Encodes the specified s_getSignUpReward_4003 message. Does not implicitly {@link com.msg.s_getSignUpReward_4003.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getSignUpReward_4003
             * @static
             * @param {com.msg.Is_getSignUpReward_4003} message s_getSignUpReward_4003 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getSignUpReward_4003.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.getReward != null && message.hasOwnProperty("getReward"))
                    $root.com.msg.getReward.encode(message.getReward, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_getSignUpReward_4003 message, length delimited. Does not implicitly {@link com.msg.s_getSignUpReward_4003.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getSignUpReward_4003
             * @static
             * @param {com.msg.Is_getSignUpReward_4003} message s_getSignUpReward_4003 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getSignUpReward_4003.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getSignUpReward_4003 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getSignUpReward_4003
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getSignUpReward_4003} s_getSignUpReward_4003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getSignUpReward_4003.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getSignUpReward_4003();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.getReward = $root.com.msg.getReward.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getSignUpReward_4003 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getSignUpReward_4003
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getSignUpReward_4003} s_getSignUpReward_4003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getSignUpReward_4003.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getSignUpReward_4003 message.
             * @function verify
             * @memberof com.msg.s_getSignUpReward_4003
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getSignUpReward_4003.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.getReward != null && message.hasOwnProperty("getReward")) {
                    var error = $root.com.msg.getReward.verify(message.getReward);
                    if (error)
                        return "getReward." + error;
                }
                return null;
            };

            return s_getSignUpReward_4003;
        })();

        msg.c_purchaseItem_5000 = (function() {

            /**
             * Properties of a c_purchaseItem_5000.
             * @memberof com.msg
             * @interface Ic_purchaseItem_5000
             * @property {number|Long} playerID c_purchaseItem_5000 playerID
             * @property {number} shopItemId c_purchaseItem_5000 shopItemId
             */

            /**
             * Constructs a new c_purchaseItem_5000.
             * @memberof com.msg
             * @classdesc Represents a c_purchaseItem_5000.
             * @implements Ic_purchaseItem_5000
             * @constructor
             * @param {com.msg.Ic_purchaseItem_5000=} [properties] Properties to set
             */
            function c_purchaseItem_5000(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_purchaseItem_5000 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_purchaseItem_5000
             * @instance
             */
            c_purchaseItem_5000.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * c_purchaseItem_5000 shopItemId.
             * @member {number} shopItemId
             * @memberof com.msg.c_purchaseItem_5000
             * @instance
             */
            c_purchaseItem_5000.prototype.shopItemId = 0;

            /**
             * Creates a new c_purchaseItem_5000 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_purchaseItem_5000
             * @static
             * @param {com.msg.Ic_purchaseItem_5000=} [properties] Properties to set
             * @returns {com.msg.c_purchaseItem_5000} c_purchaseItem_5000 instance
             */
            c_purchaseItem_5000.create = function create(properties) {
                return new c_purchaseItem_5000(properties);
            };

            /**
             * Encodes the specified c_purchaseItem_5000 message. Does not implicitly {@link com.msg.c_purchaseItem_5000.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_purchaseItem_5000
             * @static
             * @param {com.msg.Ic_purchaseItem_5000} message c_purchaseItem_5000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_purchaseItem_5000.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.shopItemId);
                return writer;
            };

            /**
             * Encodes the specified c_purchaseItem_5000 message, length delimited. Does not implicitly {@link com.msg.c_purchaseItem_5000.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_purchaseItem_5000
             * @static
             * @param {com.msg.Ic_purchaseItem_5000} message c_purchaseItem_5000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_purchaseItem_5000.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_purchaseItem_5000 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_purchaseItem_5000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_purchaseItem_5000} c_purchaseItem_5000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_purchaseItem_5000.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_purchaseItem_5000();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.shopItemId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("shopItemId"))
                    throw $util.ProtocolError("missing required 'shopItemId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_purchaseItem_5000 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_purchaseItem_5000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_purchaseItem_5000} c_purchaseItem_5000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_purchaseItem_5000.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_purchaseItem_5000 message.
             * @function verify
             * @memberof com.msg.c_purchaseItem_5000
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_purchaseItem_5000.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isInteger(message.shopItemId))
                    return "shopItemId: integer expected";
                return null;
            };

            return c_purchaseItem_5000;
        })();

        msg.s_purchaseItem_5001 = (function() {

            /**
             * Properties of a s_purchaseItem_5001.
             * @memberof com.msg
             * @interface Is_purchaseItem_5001
             * @property {com.msg.ImsgResult} result s_purchaseItem_5001 result
             * @property {number|null} [shopItemId] s_purchaseItem_5001 shopItemId
             * @property {com.msg.IitemsUpdateInfo|null} [itemsUpdateInfo] s_purchaseItem_5001 itemsUpdateInfo
             */

            /**
             * Constructs a new s_purchaseItem_5001.
             * @memberof com.msg
             * @classdesc Represents a s_purchaseItem_5001.
             * @implements Is_purchaseItem_5001
             * @constructor
             * @param {com.msg.Is_purchaseItem_5001=} [properties] Properties to set
             */
            function s_purchaseItem_5001(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_purchaseItem_5001 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_purchaseItem_5001
             * @instance
             */
            s_purchaseItem_5001.prototype.result = null;

            /**
             * s_purchaseItem_5001 shopItemId.
             * @member {number} shopItemId
             * @memberof com.msg.s_purchaseItem_5001
             * @instance
             */
            s_purchaseItem_5001.prototype.shopItemId = 0;

            /**
             * s_purchaseItem_5001 itemsUpdateInfo.
             * @member {com.msg.IitemsUpdateInfo|null|undefined} itemsUpdateInfo
             * @memberof com.msg.s_purchaseItem_5001
             * @instance
             */
            s_purchaseItem_5001.prototype.itemsUpdateInfo = null;

            /**
             * Creates a new s_purchaseItem_5001 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_purchaseItem_5001
             * @static
             * @param {com.msg.Is_purchaseItem_5001=} [properties] Properties to set
             * @returns {com.msg.s_purchaseItem_5001} s_purchaseItem_5001 instance
             */
            s_purchaseItem_5001.create = function create(properties) {
                return new s_purchaseItem_5001(properties);
            };

            /**
             * Encodes the specified s_purchaseItem_5001 message. Does not implicitly {@link com.msg.s_purchaseItem_5001.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_purchaseItem_5001
             * @static
             * @param {com.msg.Is_purchaseItem_5001} message s_purchaseItem_5001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_purchaseItem_5001.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.shopItemId != null && message.hasOwnProperty("shopItemId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.shopItemId);
                if (message.itemsUpdateInfo != null && message.hasOwnProperty("itemsUpdateInfo"))
                    $root.com.msg.itemsUpdateInfo.encode(message.itemsUpdateInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_purchaseItem_5001 message, length delimited. Does not implicitly {@link com.msg.s_purchaseItem_5001.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_purchaseItem_5001
             * @static
             * @param {com.msg.Is_purchaseItem_5001} message s_purchaseItem_5001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_purchaseItem_5001.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_purchaseItem_5001 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_purchaseItem_5001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_purchaseItem_5001} s_purchaseItem_5001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_purchaseItem_5001.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_purchaseItem_5001();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.shopItemId = reader.int32();
                        break;
                    case 3:
                        message.itemsUpdateInfo = $root.com.msg.itemsUpdateInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_purchaseItem_5001 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_purchaseItem_5001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_purchaseItem_5001} s_purchaseItem_5001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_purchaseItem_5001.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_purchaseItem_5001 message.
             * @function verify
             * @memberof com.msg.s_purchaseItem_5001
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_purchaseItem_5001.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.shopItemId != null && message.hasOwnProperty("shopItemId"))
                    if (!$util.isInteger(message.shopItemId))
                        return "shopItemId: integer expected";
                if (message.itemsUpdateInfo != null && message.hasOwnProperty("itemsUpdateInfo")) {
                    var error = $root.com.msg.itemsUpdateInfo.verify(message.itemsUpdateInfo);
                    if (error)
                        return "itemsUpdateInfo." + error;
                }
                return null;
            };

            return s_purchaseItem_5001;
        })();

        msg.c_getDailyTaskInfo_6001 = (function() {

            /**
             * Properties of a c_getDailyTaskInfo_6001.
             * @memberof com.msg
             * @interface Ic_getDailyTaskInfo_6001
             * @property {number|Long} playerID c_getDailyTaskInfo_6001 playerID
             */

            /**
             * Constructs a new c_getDailyTaskInfo_6001.
             * @memberof com.msg
             * @classdesc Represents a c_getDailyTaskInfo_6001.
             * @implements Ic_getDailyTaskInfo_6001
             * @constructor
             * @param {com.msg.Ic_getDailyTaskInfo_6001=} [properties] Properties to set
             */
            function c_getDailyTaskInfo_6001(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getDailyTaskInfo_6001 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_getDailyTaskInfo_6001
             * @instance
             */
            c_getDailyTaskInfo_6001.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new c_getDailyTaskInfo_6001 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getDailyTaskInfo_6001
             * @static
             * @param {com.msg.Ic_getDailyTaskInfo_6001=} [properties] Properties to set
             * @returns {com.msg.c_getDailyTaskInfo_6001} c_getDailyTaskInfo_6001 instance
             */
            c_getDailyTaskInfo_6001.create = function create(properties) {
                return new c_getDailyTaskInfo_6001(properties);
            };

            /**
             * Encodes the specified c_getDailyTaskInfo_6001 message. Does not implicitly {@link com.msg.c_getDailyTaskInfo_6001.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getDailyTaskInfo_6001
             * @static
             * @param {com.msg.Ic_getDailyTaskInfo_6001} message c_getDailyTaskInfo_6001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getDailyTaskInfo_6001.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                return writer;
            };

            /**
             * Encodes the specified c_getDailyTaskInfo_6001 message, length delimited. Does not implicitly {@link com.msg.c_getDailyTaskInfo_6001.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getDailyTaskInfo_6001
             * @static
             * @param {com.msg.Ic_getDailyTaskInfo_6001} message c_getDailyTaskInfo_6001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getDailyTaskInfo_6001.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getDailyTaskInfo_6001 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getDailyTaskInfo_6001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getDailyTaskInfo_6001} c_getDailyTaskInfo_6001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getDailyTaskInfo_6001.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getDailyTaskInfo_6001();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getDailyTaskInfo_6001 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getDailyTaskInfo_6001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getDailyTaskInfo_6001} c_getDailyTaskInfo_6001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getDailyTaskInfo_6001.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getDailyTaskInfo_6001 message.
             * @function verify
             * @memberof com.msg.c_getDailyTaskInfo_6001
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getDailyTaskInfo_6001.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                return null;
            };

            return c_getDailyTaskInfo_6001;
        })();

        msg.s_getDailyTaskInfo_6002 = (function() {

            /**
             * Properties of a s_getDailyTaskInfo_6002.
             * @memberof com.msg
             * @interface Is_getDailyTaskInfo_6002
             * @property {com.msg.ImsgResult} result s_getDailyTaskInfo_6002 result
             * @property {Array.<com.msg.ItaskInfo>|null} [taskInfo] s_getDailyTaskInfo_6002 taskInfo
             */

            /**
             * Constructs a new s_getDailyTaskInfo_6002.
             * @memberof com.msg
             * @classdesc Represents a s_getDailyTaskInfo_6002.
             * @implements Is_getDailyTaskInfo_6002
             * @constructor
             * @param {com.msg.Is_getDailyTaskInfo_6002=} [properties] Properties to set
             */
            function s_getDailyTaskInfo_6002(properties) {
                this.taskInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getDailyTaskInfo_6002 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @instance
             */
            s_getDailyTaskInfo_6002.prototype.result = null;

            /**
             * s_getDailyTaskInfo_6002 taskInfo.
             * @member {Array.<com.msg.ItaskInfo>} taskInfo
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @instance
             */
            s_getDailyTaskInfo_6002.prototype.taskInfo = $util.emptyArray;

            /**
             * Creates a new s_getDailyTaskInfo_6002 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @static
             * @param {com.msg.Is_getDailyTaskInfo_6002=} [properties] Properties to set
             * @returns {com.msg.s_getDailyTaskInfo_6002} s_getDailyTaskInfo_6002 instance
             */
            s_getDailyTaskInfo_6002.create = function create(properties) {
                return new s_getDailyTaskInfo_6002(properties);
            };

            /**
             * Encodes the specified s_getDailyTaskInfo_6002 message. Does not implicitly {@link com.msg.s_getDailyTaskInfo_6002.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @static
             * @param {com.msg.Is_getDailyTaskInfo_6002} message s_getDailyTaskInfo_6002 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getDailyTaskInfo_6002.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.taskInfo != null && message.taskInfo.length)
                    for (var i = 0; i < message.taskInfo.length; ++i)
                        $root.com.msg.taskInfo.encode(message.taskInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_getDailyTaskInfo_6002 message, length delimited. Does not implicitly {@link com.msg.s_getDailyTaskInfo_6002.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @static
             * @param {com.msg.Is_getDailyTaskInfo_6002} message s_getDailyTaskInfo_6002 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getDailyTaskInfo_6002.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getDailyTaskInfo_6002 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getDailyTaskInfo_6002} s_getDailyTaskInfo_6002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getDailyTaskInfo_6002.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getDailyTaskInfo_6002();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.taskInfo && message.taskInfo.length))
                            message.taskInfo = [];
                        message.taskInfo.push($root.com.msg.taskInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getDailyTaskInfo_6002 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getDailyTaskInfo_6002} s_getDailyTaskInfo_6002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getDailyTaskInfo_6002.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getDailyTaskInfo_6002 message.
             * @function verify
             * @memberof com.msg.s_getDailyTaskInfo_6002
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getDailyTaskInfo_6002.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.taskInfo != null && message.hasOwnProperty("taskInfo")) {
                    if (!Array.isArray(message.taskInfo))
                        return "taskInfo: array expected";
                    for (var i = 0; i < message.taskInfo.length; ++i) {
                        var error = $root.com.msg.taskInfo.verify(message.taskInfo[i]);
                        if (error)
                            return "taskInfo." + error;
                    }
                }
                return null;
            };

            return s_getDailyTaskInfo_6002;
        })();

        msg.c_getAchievementInfo_6003 = (function() {

            /**
             * Properties of a c_getAchievementInfo_6003.
             * @memberof com.msg
             * @interface Ic_getAchievementInfo_6003
             * @property {number|Long} playerID c_getAchievementInfo_6003 playerID
             */

            /**
             * Constructs a new c_getAchievementInfo_6003.
             * @memberof com.msg
             * @classdesc Represents a c_getAchievementInfo_6003.
             * @implements Ic_getAchievementInfo_6003
             * @constructor
             * @param {com.msg.Ic_getAchievementInfo_6003=} [properties] Properties to set
             */
            function c_getAchievementInfo_6003(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getAchievementInfo_6003 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_getAchievementInfo_6003
             * @instance
             */
            c_getAchievementInfo_6003.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new c_getAchievementInfo_6003 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getAchievementInfo_6003
             * @static
             * @param {com.msg.Ic_getAchievementInfo_6003=} [properties] Properties to set
             * @returns {com.msg.c_getAchievementInfo_6003} c_getAchievementInfo_6003 instance
             */
            c_getAchievementInfo_6003.create = function create(properties) {
                return new c_getAchievementInfo_6003(properties);
            };

            /**
             * Encodes the specified c_getAchievementInfo_6003 message. Does not implicitly {@link com.msg.c_getAchievementInfo_6003.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getAchievementInfo_6003
             * @static
             * @param {com.msg.Ic_getAchievementInfo_6003} message c_getAchievementInfo_6003 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getAchievementInfo_6003.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                return writer;
            };

            /**
             * Encodes the specified c_getAchievementInfo_6003 message, length delimited. Does not implicitly {@link com.msg.c_getAchievementInfo_6003.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getAchievementInfo_6003
             * @static
             * @param {com.msg.Ic_getAchievementInfo_6003} message c_getAchievementInfo_6003 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getAchievementInfo_6003.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getAchievementInfo_6003 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getAchievementInfo_6003
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getAchievementInfo_6003} c_getAchievementInfo_6003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getAchievementInfo_6003.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getAchievementInfo_6003();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getAchievementInfo_6003 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getAchievementInfo_6003
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getAchievementInfo_6003} c_getAchievementInfo_6003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getAchievementInfo_6003.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getAchievementInfo_6003 message.
             * @function verify
             * @memberof com.msg.c_getAchievementInfo_6003
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getAchievementInfo_6003.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                return null;
            };

            return c_getAchievementInfo_6003;
        })();

        msg.s_getAchievementInfo_6004 = (function() {

            /**
             * Properties of a s_getAchievementInfo_6004.
             * @memberof com.msg
             * @interface Is_getAchievementInfo_6004
             * @property {com.msg.ImsgResult} result s_getAchievementInfo_6004 result
             * @property {number|null} [achievementPoint] s_getAchievementInfo_6004 achievementPoint
             * @property {number|null} [hasJoinPrizeDraw] s_getAchievementInfo_6004 hasJoinPrizeDraw
             * @property {Array.<com.msg.IachievementInfo>|null} [achievementInfo] s_getAchievementInfo_6004 achievementInfo
             * @property {number|Long|null} [secLeftToPrizeDraw] s_getAchievementInfo_6004 secLeftToPrizeDraw
             */

            /**
             * Constructs a new s_getAchievementInfo_6004.
             * @memberof com.msg
             * @classdesc Represents a s_getAchievementInfo_6004.
             * @implements Is_getAchievementInfo_6004
             * @constructor
             * @param {com.msg.Is_getAchievementInfo_6004=} [properties] Properties to set
             */
            function s_getAchievementInfo_6004(properties) {
                this.achievementInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getAchievementInfo_6004 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getAchievementInfo_6004
             * @instance
             */
            s_getAchievementInfo_6004.prototype.result = null;

            /**
             * s_getAchievementInfo_6004 achievementPoint.
             * @member {number} achievementPoint
             * @memberof com.msg.s_getAchievementInfo_6004
             * @instance
             */
            s_getAchievementInfo_6004.prototype.achievementPoint = 0;

            /**
             * s_getAchievementInfo_6004 hasJoinPrizeDraw.
             * @member {number} hasJoinPrizeDraw
             * @memberof com.msg.s_getAchievementInfo_6004
             * @instance
             */
            s_getAchievementInfo_6004.prototype.hasJoinPrizeDraw = 0;

            /**
             * s_getAchievementInfo_6004 achievementInfo.
             * @member {Array.<com.msg.IachievementInfo>} achievementInfo
             * @memberof com.msg.s_getAchievementInfo_6004
             * @instance
             */
            s_getAchievementInfo_6004.prototype.achievementInfo = $util.emptyArray;

            /**
             * s_getAchievementInfo_6004 secLeftToPrizeDraw.
             * @member {number|Long} secLeftToPrizeDraw
             * @memberof com.msg.s_getAchievementInfo_6004
             * @instance
             */
            s_getAchievementInfo_6004.prototype.secLeftToPrizeDraw = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new s_getAchievementInfo_6004 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getAchievementInfo_6004
             * @static
             * @param {com.msg.Is_getAchievementInfo_6004=} [properties] Properties to set
             * @returns {com.msg.s_getAchievementInfo_6004} s_getAchievementInfo_6004 instance
             */
            s_getAchievementInfo_6004.create = function create(properties) {
                return new s_getAchievementInfo_6004(properties);
            };

            /**
             * Encodes the specified s_getAchievementInfo_6004 message. Does not implicitly {@link com.msg.s_getAchievementInfo_6004.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getAchievementInfo_6004
             * @static
             * @param {com.msg.Is_getAchievementInfo_6004} message s_getAchievementInfo_6004 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getAchievementInfo_6004.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.achievementPoint != null && message.hasOwnProperty("achievementPoint"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.achievementPoint);
                if (message.hasJoinPrizeDraw != null && message.hasOwnProperty("hasJoinPrizeDraw"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.hasJoinPrizeDraw);
                if (message.achievementInfo != null && message.achievementInfo.length)
                    for (var i = 0; i < message.achievementInfo.length; ++i)
                        $root.com.msg.achievementInfo.encode(message.achievementInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.secLeftToPrizeDraw != null && message.hasOwnProperty("secLeftToPrizeDraw"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.secLeftToPrizeDraw);
                return writer;
            };

            /**
             * Encodes the specified s_getAchievementInfo_6004 message, length delimited. Does not implicitly {@link com.msg.s_getAchievementInfo_6004.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getAchievementInfo_6004
             * @static
             * @param {com.msg.Is_getAchievementInfo_6004} message s_getAchievementInfo_6004 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getAchievementInfo_6004.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getAchievementInfo_6004 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getAchievementInfo_6004
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getAchievementInfo_6004} s_getAchievementInfo_6004
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getAchievementInfo_6004.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getAchievementInfo_6004();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.achievementPoint = reader.int32();
                        break;
                    case 3:
                        message.hasJoinPrizeDraw = reader.int32();
                        break;
                    case 4:
                        if (!(message.achievementInfo && message.achievementInfo.length))
                            message.achievementInfo = [];
                        message.achievementInfo.push($root.com.msg.achievementInfo.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.secLeftToPrizeDraw = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getAchievementInfo_6004 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getAchievementInfo_6004
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getAchievementInfo_6004} s_getAchievementInfo_6004
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getAchievementInfo_6004.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getAchievementInfo_6004 message.
             * @function verify
             * @memberof com.msg.s_getAchievementInfo_6004
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getAchievementInfo_6004.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.achievementPoint != null && message.hasOwnProperty("achievementPoint"))
                    if (!$util.isInteger(message.achievementPoint))
                        return "achievementPoint: integer expected";
                if (message.hasJoinPrizeDraw != null && message.hasOwnProperty("hasJoinPrizeDraw"))
                    if (!$util.isInteger(message.hasJoinPrizeDraw))
                        return "hasJoinPrizeDraw: integer expected";
                if (message.achievementInfo != null && message.hasOwnProperty("achievementInfo")) {
                    if (!Array.isArray(message.achievementInfo))
                        return "achievementInfo: array expected";
                    for (var i = 0; i < message.achievementInfo.length; ++i) {
                        var error = $root.com.msg.achievementInfo.verify(message.achievementInfo[i]);
                        if (error)
                            return "achievementInfo." + error;
                    }
                }
                if (message.secLeftToPrizeDraw != null && message.hasOwnProperty("secLeftToPrizeDraw"))
                    if (!$util.isInteger(message.secLeftToPrizeDraw) && !(message.secLeftToPrizeDraw && $util.isInteger(message.secLeftToPrizeDraw.low) && $util.isInteger(message.secLeftToPrizeDraw.high)))
                        return "secLeftToPrizeDraw: integer|Long expected";
                return null;
            };

            return s_getAchievementInfo_6004;
        })();

        msg.c_getAchievementReward_6005 = (function() {

            /**
             * Properties of a c_getAchievementReward_6005.
             * @memberof com.msg
             * @interface Ic_getAchievementReward_6005
             * @property {number|Long} playerID c_getAchievementReward_6005 playerID
             * @property {number} achievementId c_getAchievementReward_6005 achievementId
             */

            /**
             * Constructs a new c_getAchievementReward_6005.
             * @memberof com.msg
             * @classdesc Represents a c_getAchievementReward_6005.
             * @implements Ic_getAchievementReward_6005
             * @constructor
             * @param {com.msg.Ic_getAchievementReward_6005=} [properties] Properties to set
             */
            function c_getAchievementReward_6005(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getAchievementReward_6005 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_getAchievementReward_6005
             * @instance
             */
            c_getAchievementReward_6005.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * c_getAchievementReward_6005 achievementId.
             * @member {number} achievementId
             * @memberof com.msg.c_getAchievementReward_6005
             * @instance
             */
            c_getAchievementReward_6005.prototype.achievementId = 0;

            /**
             * Creates a new c_getAchievementReward_6005 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getAchievementReward_6005
             * @static
             * @param {com.msg.Ic_getAchievementReward_6005=} [properties] Properties to set
             * @returns {com.msg.c_getAchievementReward_6005} c_getAchievementReward_6005 instance
             */
            c_getAchievementReward_6005.create = function create(properties) {
                return new c_getAchievementReward_6005(properties);
            };

            /**
             * Encodes the specified c_getAchievementReward_6005 message. Does not implicitly {@link com.msg.c_getAchievementReward_6005.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getAchievementReward_6005
             * @static
             * @param {com.msg.Ic_getAchievementReward_6005} message c_getAchievementReward_6005 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getAchievementReward_6005.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.achievementId);
                return writer;
            };

            /**
             * Encodes the specified c_getAchievementReward_6005 message, length delimited. Does not implicitly {@link com.msg.c_getAchievementReward_6005.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getAchievementReward_6005
             * @static
             * @param {com.msg.Ic_getAchievementReward_6005} message c_getAchievementReward_6005 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getAchievementReward_6005.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getAchievementReward_6005 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getAchievementReward_6005
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getAchievementReward_6005} c_getAchievementReward_6005
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getAchievementReward_6005.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getAchievementReward_6005();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.achievementId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("achievementId"))
                    throw $util.ProtocolError("missing required 'achievementId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getAchievementReward_6005 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getAchievementReward_6005
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getAchievementReward_6005} c_getAchievementReward_6005
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getAchievementReward_6005.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getAchievementReward_6005 message.
             * @function verify
             * @memberof com.msg.c_getAchievementReward_6005
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getAchievementReward_6005.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isInteger(message.achievementId))
                    return "achievementId: integer expected";
                return null;
            };

            return c_getAchievementReward_6005;
        })();

        msg.s_getAchievementReward_6006 = (function() {

            /**
             * Properties of a s_getAchievementReward_6006.
             * @memberof com.msg
             * @interface Is_getAchievementReward_6006
             * @property {com.msg.ImsgResult} result s_getAchievementReward_6006 result
             * @property {com.msg.IachievementInfo|null} [achievementInfo] s_getAchievementReward_6006 achievementInfo
             * @property {number|null} [addAchievementPoint] s_getAchievementReward_6006 addAchievementPoint
             */

            /**
             * Constructs a new s_getAchievementReward_6006.
             * @memberof com.msg
             * @classdesc Represents a s_getAchievementReward_6006.
             * @implements Is_getAchievementReward_6006
             * @constructor
             * @param {com.msg.Is_getAchievementReward_6006=} [properties] Properties to set
             */
            function s_getAchievementReward_6006(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getAchievementReward_6006 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getAchievementReward_6006
             * @instance
             */
            s_getAchievementReward_6006.prototype.result = null;

            /**
             * s_getAchievementReward_6006 achievementInfo.
             * @member {com.msg.IachievementInfo|null|undefined} achievementInfo
             * @memberof com.msg.s_getAchievementReward_6006
             * @instance
             */
            s_getAchievementReward_6006.prototype.achievementInfo = null;

            /**
             * s_getAchievementReward_6006 addAchievementPoint.
             * @member {number} addAchievementPoint
             * @memberof com.msg.s_getAchievementReward_6006
             * @instance
             */
            s_getAchievementReward_6006.prototype.addAchievementPoint = 0;

            /**
             * Creates a new s_getAchievementReward_6006 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getAchievementReward_6006
             * @static
             * @param {com.msg.Is_getAchievementReward_6006=} [properties] Properties to set
             * @returns {com.msg.s_getAchievementReward_6006} s_getAchievementReward_6006 instance
             */
            s_getAchievementReward_6006.create = function create(properties) {
                return new s_getAchievementReward_6006(properties);
            };

            /**
             * Encodes the specified s_getAchievementReward_6006 message. Does not implicitly {@link com.msg.s_getAchievementReward_6006.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getAchievementReward_6006
             * @static
             * @param {com.msg.Is_getAchievementReward_6006} message s_getAchievementReward_6006 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getAchievementReward_6006.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.achievementInfo != null && message.hasOwnProperty("achievementInfo"))
                    $root.com.msg.achievementInfo.encode(message.achievementInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.addAchievementPoint != null && message.hasOwnProperty("addAchievementPoint"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.addAchievementPoint);
                return writer;
            };

            /**
             * Encodes the specified s_getAchievementReward_6006 message, length delimited. Does not implicitly {@link com.msg.s_getAchievementReward_6006.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getAchievementReward_6006
             * @static
             * @param {com.msg.Is_getAchievementReward_6006} message s_getAchievementReward_6006 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getAchievementReward_6006.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getAchievementReward_6006 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getAchievementReward_6006
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getAchievementReward_6006} s_getAchievementReward_6006
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getAchievementReward_6006.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getAchievementReward_6006();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.achievementInfo = $root.com.msg.achievementInfo.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.addAchievementPoint = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getAchievementReward_6006 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getAchievementReward_6006
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getAchievementReward_6006} s_getAchievementReward_6006
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getAchievementReward_6006.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getAchievementReward_6006 message.
             * @function verify
             * @memberof com.msg.s_getAchievementReward_6006
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getAchievementReward_6006.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.achievementInfo != null && message.hasOwnProperty("achievementInfo")) {
                    var error = $root.com.msg.achievementInfo.verify(message.achievementInfo);
                    if (error)
                        return "achievementInfo." + error;
                }
                if (message.addAchievementPoint != null && message.hasOwnProperty("addAchievementPoint"))
                    if (!$util.isInteger(message.addAchievementPoint))
                        return "addAchievementPoint: integer expected";
                return null;
            };

            return s_getAchievementReward_6006;
        })();

        msg.c_getTaskReward_6007 = (function() {

            /**
             * Properties of a c_getTaskReward_6007.
             * @memberof com.msg
             * @interface Ic_getTaskReward_6007
             * @property {number|Long} playerID c_getTaskReward_6007 playerID
             * @property {number} taskId c_getTaskReward_6007 taskId
             */

            /**
             * Constructs a new c_getTaskReward_6007.
             * @memberof com.msg
             * @classdesc Represents a c_getTaskReward_6007.
             * @implements Ic_getTaskReward_6007
             * @constructor
             * @param {com.msg.Ic_getTaskReward_6007=} [properties] Properties to set
             */
            function c_getTaskReward_6007(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getTaskReward_6007 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_getTaskReward_6007
             * @instance
             */
            c_getTaskReward_6007.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * c_getTaskReward_6007 taskId.
             * @member {number} taskId
             * @memberof com.msg.c_getTaskReward_6007
             * @instance
             */
            c_getTaskReward_6007.prototype.taskId = 0;

            /**
             * Creates a new c_getTaskReward_6007 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getTaskReward_6007
             * @static
             * @param {com.msg.Ic_getTaskReward_6007=} [properties] Properties to set
             * @returns {com.msg.c_getTaskReward_6007} c_getTaskReward_6007 instance
             */
            c_getTaskReward_6007.create = function create(properties) {
                return new c_getTaskReward_6007(properties);
            };

            /**
             * Encodes the specified c_getTaskReward_6007 message. Does not implicitly {@link com.msg.c_getTaskReward_6007.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getTaskReward_6007
             * @static
             * @param {com.msg.Ic_getTaskReward_6007} message c_getTaskReward_6007 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getTaskReward_6007.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taskId);
                return writer;
            };

            /**
             * Encodes the specified c_getTaskReward_6007 message, length delimited. Does not implicitly {@link com.msg.c_getTaskReward_6007.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getTaskReward_6007
             * @static
             * @param {com.msg.Ic_getTaskReward_6007} message c_getTaskReward_6007 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getTaskReward_6007.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getTaskReward_6007 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getTaskReward_6007
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getTaskReward_6007} c_getTaskReward_6007
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getTaskReward_6007.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getTaskReward_6007();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.taskId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("taskId"))
                    throw $util.ProtocolError("missing required 'taskId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getTaskReward_6007 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getTaskReward_6007
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getTaskReward_6007} c_getTaskReward_6007
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getTaskReward_6007.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getTaskReward_6007 message.
             * @function verify
             * @memberof com.msg.c_getTaskReward_6007
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getTaskReward_6007.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isInteger(message.taskId))
                    return "taskId: integer expected";
                return null;
            };

            return c_getTaskReward_6007;
        })();

        msg.s_getTaskReward_6008 = (function() {

            /**
             * Properties of a s_getTaskReward_6008.
             * @memberof com.msg
             * @interface Is_getTaskReward_6008
             * @property {com.msg.ImsgResult} result s_getTaskReward_6008 result
             * @property {number} taskId s_getTaskReward_6008 taskId
             * @property {com.msg.IgetReward|null} [getReward] s_getTaskReward_6008 getReward
             */

            /**
             * Constructs a new s_getTaskReward_6008.
             * @memberof com.msg
             * @classdesc Represents a s_getTaskReward_6008.
             * @implements Is_getTaskReward_6008
             * @constructor
             * @param {com.msg.Is_getTaskReward_6008=} [properties] Properties to set
             */
            function s_getTaskReward_6008(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getTaskReward_6008 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getTaskReward_6008
             * @instance
             */
            s_getTaskReward_6008.prototype.result = null;

            /**
             * s_getTaskReward_6008 taskId.
             * @member {number} taskId
             * @memberof com.msg.s_getTaskReward_6008
             * @instance
             */
            s_getTaskReward_6008.prototype.taskId = 0;

            /**
             * s_getTaskReward_6008 getReward.
             * @member {com.msg.IgetReward|null|undefined} getReward
             * @memberof com.msg.s_getTaskReward_6008
             * @instance
             */
            s_getTaskReward_6008.prototype.getReward = null;

            /**
             * Creates a new s_getTaskReward_6008 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getTaskReward_6008
             * @static
             * @param {com.msg.Is_getTaskReward_6008=} [properties] Properties to set
             * @returns {com.msg.s_getTaskReward_6008} s_getTaskReward_6008 instance
             */
            s_getTaskReward_6008.create = function create(properties) {
                return new s_getTaskReward_6008(properties);
            };

            /**
             * Encodes the specified s_getTaskReward_6008 message. Does not implicitly {@link com.msg.s_getTaskReward_6008.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getTaskReward_6008
             * @static
             * @param {com.msg.Is_getTaskReward_6008} message s_getTaskReward_6008 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getTaskReward_6008.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taskId);
                if (message.getReward != null && message.hasOwnProperty("getReward"))
                    $root.com.msg.getReward.encode(message.getReward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_getTaskReward_6008 message, length delimited. Does not implicitly {@link com.msg.s_getTaskReward_6008.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getTaskReward_6008
             * @static
             * @param {com.msg.Is_getTaskReward_6008} message s_getTaskReward_6008 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getTaskReward_6008.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getTaskReward_6008 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getTaskReward_6008
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getTaskReward_6008} s_getTaskReward_6008
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getTaskReward_6008.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getTaskReward_6008();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.taskId = reader.int32();
                        break;
                    case 3:
                        message.getReward = $root.com.msg.getReward.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("taskId"))
                    throw $util.ProtocolError("missing required 'taskId'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getTaskReward_6008 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getTaskReward_6008
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getTaskReward_6008} s_getTaskReward_6008
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getTaskReward_6008.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getTaskReward_6008 message.
             * @function verify
             * @memberof com.msg.s_getTaskReward_6008
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getTaskReward_6008.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (!$util.isInteger(message.taskId))
                    return "taskId: integer expected";
                if (message.getReward != null && message.hasOwnProperty("getReward")) {
                    var error = $root.com.msg.getReward.verify(message.getReward);
                    if (error)
                        return "getReward." + error;
                }
                return null;
            };

            return s_getTaskReward_6008;
        })();

        msg.c_assemble_7000 = (function() {

            /**
             * Properties of a c_assemble_7000.
             * @memberof com.msg
             * @interface Ic_assemble_7000
             * @property {number|Long} playerID c_assemble_7000 playerID
             * @property {number} actionType c_assemble_7000 actionType
             * @property {number} formulaOrItemId c_assemble_7000 formulaOrItemId
             */

            /**
             * Constructs a new c_assemble_7000.
             * @memberof com.msg
             * @classdesc Represents a c_assemble_7000.
             * @implements Ic_assemble_7000
             * @constructor
             * @param {com.msg.Ic_assemble_7000=} [properties] Properties to set
             */
            function c_assemble_7000(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_assemble_7000 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_assemble_7000
             * @instance
             */
            c_assemble_7000.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * c_assemble_7000 actionType.
             * @member {number} actionType
             * @memberof com.msg.c_assemble_7000
             * @instance
             */
            c_assemble_7000.prototype.actionType = 0;

            /**
             * c_assemble_7000 formulaOrItemId.
             * @member {number} formulaOrItemId
             * @memberof com.msg.c_assemble_7000
             * @instance
             */
            c_assemble_7000.prototype.formulaOrItemId = 0;

            /**
             * Creates a new c_assemble_7000 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_assemble_7000
             * @static
             * @param {com.msg.Ic_assemble_7000=} [properties] Properties to set
             * @returns {com.msg.c_assemble_7000} c_assemble_7000 instance
             */
            c_assemble_7000.create = function create(properties) {
                return new c_assemble_7000(properties);
            };

            /**
             * Encodes the specified c_assemble_7000 message. Does not implicitly {@link com.msg.c_assemble_7000.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_assemble_7000
             * @static
             * @param {com.msg.Ic_assemble_7000} message c_assemble_7000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_assemble_7000.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.actionType);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.formulaOrItemId);
                return writer;
            };

            /**
             * Encodes the specified c_assemble_7000 message, length delimited. Does not implicitly {@link com.msg.c_assemble_7000.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_assemble_7000
             * @static
             * @param {com.msg.Ic_assemble_7000} message c_assemble_7000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_assemble_7000.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_assemble_7000 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_assemble_7000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_assemble_7000} c_assemble_7000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_assemble_7000.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_assemble_7000();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.actionType = reader.int32();
                        break;
                    case 3:
                        message.formulaOrItemId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("actionType"))
                    throw $util.ProtocolError("missing required 'actionType'", { instance: message });
                if (!message.hasOwnProperty("formulaOrItemId"))
                    throw $util.ProtocolError("missing required 'formulaOrItemId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_assemble_7000 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_assemble_7000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_assemble_7000} c_assemble_7000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_assemble_7000.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_assemble_7000 message.
             * @function verify
             * @memberof com.msg.c_assemble_7000
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_assemble_7000.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isInteger(message.actionType))
                    return "actionType: integer expected";
                if (!$util.isInteger(message.formulaOrItemId))
                    return "formulaOrItemId: integer expected";
                return null;
            };

            return c_assemble_7000;
        })();

        msg.s_assemble_7001 = (function() {

            /**
             * Properties of a s_assemble_7001.
             * @memberof com.msg
             * @interface Is_assemble_7001
             * @property {com.msg.ImsgResult} result s_assemble_7001 result
             * @property {com.msg.IitemsUpdateInfo|null} [itemsUpdateInfo] s_assemble_7001 itemsUpdateInfo
             */

            /**
             * Constructs a new s_assemble_7001.
             * @memberof com.msg
             * @classdesc Represents a s_assemble_7001.
             * @implements Is_assemble_7001
             * @constructor
             * @param {com.msg.Is_assemble_7001=} [properties] Properties to set
             */
            function s_assemble_7001(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_assemble_7001 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_assemble_7001
             * @instance
             */
            s_assemble_7001.prototype.result = null;

            /**
             * s_assemble_7001 itemsUpdateInfo.
             * @member {com.msg.IitemsUpdateInfo|null|undefined} itemsUpdateInfo
             * @memberof com.msg.s_assemble_7001
             * @instance
             */
            s_assemble_7001.prototype.itemsUpdateInfo = null;

            /**
             * Creates a new s_assemble_7001 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_assemble_7001
             * @static
             * @param {com.msg.Is_assemble_7001=} [properties] Properties to set
             * @returns {com.msg.s_assemble_7001} s_assemble_7001 instance
             */
            s_assemble_7001.create = function create(properties) {
                return new s_assemble_7001(properties);
            };

            /**
             * Encodes the specified s_assemble_7001 message. Does not implicitly {@link com.msg.s_assemble_7001.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_assemble_7001
             * @static
             * @param {com.msg.Is_assemble_7001} message s_assemble_7001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_assemble_7001.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.itemsUpdateInfo != null && message.hasOwnProperty("itemsUpdateInfo"))
                    $root.com.msg.itemsUpdateInfo.encode(message.itemsUpdateInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_assemble_7001 message, length delimited. Does not implicitly {@link com.msg.s_assemble_7001.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_assemble_7001
             * @static
             * @param {com.msg.Is_assemble_7001} message s_assemble_7001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_assemble_7001.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_assemble_7001 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_assemble_7001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_assemble_7001} s_assemble_7001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_assemble_7001.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_assemble_7001();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.itemsUpdateInfo = $root.com.msg.itemsUpdateInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_assemble_7001 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_assemble_7001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_assemble_7001} s_assemble_7001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_assemble_7001.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_assemble_7001 message.
             * @function verify
             * @memberof com.msg.s_assemble_7001
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_assemble_7001.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.itemsUpdateInfo != null && message.hasOwnProperty("itemsUpdateInfo")) {
                    var error = $root.com.msg.itemsUpdateInfo.verify(message.itemsUpdateInfo);
                    if (error)
                        return "itemsUpdateInfo." + error;
                }
                return null;
            };

            return s_assemble_7001;
        })();

        msg.c_getFriendsInfo_9000 = (function() {

            /**
             * Properties of a c_getFriendsInfo_9000.
             * @memberof com.msg
             * @interface Ic_getFriendsInfo_9000
             * @property {number|Long} playerID c_getFriendsInfo_9000 playerID
             */

            /**
             * Constructs a new c_getFriendsInfo_9000.
             * @memberof com.msg
             * @classdesc Represents a c_getFriendsInfo_9000.
             * @implements Ic_getFriendsInfo_9000
             * @constructor
             * @param {com.msg.Ic_getFriendsInfo_9000=} [properties] Properties to set
             */
            function c_getFriendsInfo_9000(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_getFriendsInfo_9000 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_getFriendsInfo_9000
             * @instance
             */
            c_getFriendsInfo_9000.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new c_getFriendsInfo_9000 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_getFriendsInfo_9000
             * @static
             * @param {com.msg.Ic_getFriendsInfo_9000=} [properties] Properties to set
             * @returns {com.msg.c_getFriendsInfo_9000} c_getFriendsInfo_9000 instance
             */
            c_getFriendsInfo_9000.create = function create(properties) {
                return new c_getFriendsInfo_9000(properties);
            };

            /**
             * Encodes the specified c_getFriendsInfo_9000 message. Does not implicitly {@link com.msg.c_getFriendsInfo_9000.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_getFriendsInfo_9000
             * @static
             * @param {com.msg.Ic_getFriendsInfo_9000} message c_getFriendsInfo_9000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getFriendsInfo_9000.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                return writer;
            };

            /**
             * Encodes the specified c_getFriendsInfo_9000 message, length delimited. Does not implicitly {@link com.msg.c_getFriendsInfo_9000.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_getFriendsInfo_9000
             * @static
             * @param {com.msg.Ic_getFriendsInfo_9000} message c_getFriendsInfo_9000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_getFriendsInfo_9000.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_getFriendsInfo_9000 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_getFriendsInfo_9000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_getFriendsInfo_9000} c_getFriendsInfo_9000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getFriendsInfo_9000.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_getFriendsInfo_9000();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_getFriendsInfo_9000 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_getFriendsInfo_9000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_getFriendsInfo_9000} c_getFriendsInfo_9000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_getFriendsInfo_9000.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_getFriendsInfo_9000 message.
             * @function verify
             * @memberof com.msg.c_getFriendsInfo_9000
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_getFriendsInfo_9000.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                return null;
            };

            return c_getFriendsInfo_9000;
        })();

        msg.s_getFriendsInfo_9001 = (function() {

            /**
             * Properties of a s_getFriendsInfo_9001.
             * @memberof com.msg
             * @interface Is_getFriendsInfo_9001
             * @property {com.msg.ImsgResult} result s_getFriendsInfo_9001 result
             * @property {Array.<com.msg.IfriendInfo>|null} [friendInfoList] s_getFriendsInfo_9001 friendInfoList
             */

            /**
             * Constructs a new s_getFriendsInfo_9001.
             * @memberof com.msg
             * @classdesc Represents a s_getFriendsInfo_9001.
             * @implements Is_getFriendsInfo_9001
             * @constructor
             * @param {com.msg.Is_getFriendsInfo_9001=} [properties] Properties to set
             */
            function s_getFriendsInfo_9001(properties) {
                this.friendInfoList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_getFriendsInfo_9001 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_getFriendsInfo_9001
             * @instance
             */
            s_getFriendsInfo_9001.prototype.result = null;

            /**
             * s_getFriendsInfo_9001 friendInfoList.
             * @member {Array.<com.msg.IfriendInfo>} friendInfoList
             * @memberof com.msg.s_getFriendsInfo_9001
             * @instance
             */
            s_getFriendsInfo_9001.prototype.friendInfoList = $util.emptyArray;

            /**
             * Creates a new s_getFriendsInfo_9001 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_getFriendsInfo_9001
             * @static
             * @param {com.msg.Is_getFriendsInfo_9001=} [properties] Properties to set
             * @returns {com.msg.s_getFriendsInfo_9001} s_getFriendsInfo_9001 instance
             */
            s_getFriendsInfo_9001.create = function create(properties) {
                return new s_getFriendsInfo_9001(properties);
            };

            /**
             * Encodes the specified s_getFriendsInfo_9001 message. Does not implicitly {@link com.msg.s_getFriendsInfo_9001.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_getFriendsInfo_9001
             * @static
             * @param {com.msg.Is_getFriendsInfo_9001} message s_getFriendsInfo_9001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getFriendsInfo_9001.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.friendInfoList != null && message.friendInfoList.length)
                    for (var i = 0; i < message.friendInfoList.length; ++i)
                        $root.com.msg.friendInfo.encode(message.friendInfoList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_getFriendsInfo_9001 message, length delimited. Does not implicitly {@link com.msg.s_getFriendsInfo_9001.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_getFriendsInfo_9001
             * @static
             * @param {com.msg.Is_getFriendsInfo_9001} message s_getFriendsInfo_9001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_getFriendsInfo_9001.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_getFriendsInfo_9001 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_getFriendsInfo_9001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_getFriendsInfo_9001} s_getFriendsInfo_9001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getFriendsInfo_9001.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_getFriendsInfo_9001();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (!(message.friendInfoList && message.friendInfoList.length))
                            message.friendInfoList = [];
                        message.friendInfoList.push($root.com.msg.friendInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_getFriendsInfo_9001 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_getFriendsInfo_9001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_getFriendsInfo_9001} s_getFriendsInfo_9001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_getFriendsInfo_9001.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_getFriendsInfo_9001 message.
             * @function verify
             * @memberof com.msg.s_getFriendsInfo_9001
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_getFriendsInfo_9001.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.friendInfoList != null && message.hasOwnProperty("friendInfoList")) {
                    if (!Array.isArray(message.friendInfoList))
                        return "friendInfoList: array expected";
                    for (var i = 0; i < message.friendInfoList.length; ++i) {
                        var error = $root.com.msg.friendInfo.verify(message.friendInfoList[i]);
                        if (error)
                            return "friendInfoList." + error;
                    }
                }
                return null;
            };

            return s_getFriendsInfo_9001;
        })();

        msg.c_heartBeatPackage_100000 = (function() {

            /**
             * Properties of a c_heartBeatPackage_100000.
             * @memberof com.msg
             * @interface Ic_heartBeatPackage_100000
             * @property {number} playerID c_heartBeatPackage_100000 playerID
             */

            /**
             * Constructs a new c_heartBeatPackage_100000.
             * @memberof com.msg
             * @classdesc Represents a c_heartBeatPackage_100000.
             * @implements Ic_heartBeatPackage_100000
             * @constructor
             * @param {com.msg.Ic_heartBeatPackage_100000=} [properties] Properties to set
             */
            function c_heartBeatPackage_100000(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_heartBeatPackage_100000 playerID.
             * @member {number} playerID
             * @memberof com.msg.c_heartBeatPackage_100000
             * @instance
             */
            c_heartBeatPackage_100000.prototype.playerID = 0;

            /**
             * Creates a new c_heartBeatPackage_100000 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_heartBeatPackage_100000
             * @static
             * @param {com.msg.Ic_heartBeatPackage_100000=} [properties] Properties to set
             * @returns {com.msg.c_heartBeatPackage_100000} c_heartBeatPackage_100000 instance
             */
            c_heartBeatPackage_100000.create = function create(properties) {
                return new c_heartBeatPackage_100000(properties);
            };

            /**
             * Encodes the specified c_heartBeatPackage_100000 message. Does not implicitly {@link com.msg.c_heartBeatPackage_100000.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_heartBeatPackage_100000
             * @static
             * @param {com.msg.Ic_heartBeatPackage_100000} message c_heartBeatPackage_100000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_heartBeatPackage_100000.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerID);
                return writer;
            };

            /**
             * Encodes the specified c_heartBeatPackage_100000 message, length delimited. Does not implicitly {@link com.msg.c_heartBeatPackage_100000.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_heartBeatPackage_100000
             * @static
             * @param {com.msg.Ic_heartBeatPackage_100000} message c_heartBeatPackage_100000 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_heartBeatPackage_100000.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_heartBeatPackage_100000 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_heartBeatPackage_100000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_heartBeatPackage_100000} c_heartBeatPackage_100000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_heartBeatPackage_100000.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_heartBeatPackage_100000();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_heartBeatPackage_100000 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_heartBeatPackage_100000
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_heartBeatPackage_100000} c_heartBeatPackage_100000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_heartBeatPackage_100000.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_heartBeatPackage_100000 message.
             * @function verify
             * @memberof com.msg.c_heartBeatPackage_100000
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_heartBeatPackage_100000.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID))
                    return "playerID: integer expected";
                return null;
            };

            return c_heartBeatPackage_100000;
        })();

        msg.s_heartBeatPackage_100001 = (function() {

            /**
             * Properties of a s_heartBeatPackage_100001.
             * @memberof com.msg
             * @interface Is_heartBeatPackage_100001
             */

            /**
             * Constructs a new s_heartBeatPackage_100001.
             * @memberof com.msg
             * @classdesc Represents a s_heartBeatPackage_100001.
             * @implements Is_heartBeatPackage_100001
             * @constructor
             * @param {com.msg.Is_heartBeatPackage_100001=} [properties] Properties to set
             */
            function s_heartBeatPackage_100001(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new s_heartBeatPackage_100001 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_heartBeatPackage_100001
             * @static
             * @param {com.msg.Is_heartBeatPackage_100001=} [properties] Properties to set
             * @returns {com.msg.s_heartBeatPackage_100001} s_heartBeatPackage_100001 instance
             */
            s_heartBeatPackage_100001.create = function create(properties) {
                return new s_heartBeatPackage_100001(properties);
            };

            /**
             * Encodes the specified s_heartBeatPackage_100001 message. Does not implicitly {@link com.msg.s_heartBeatPackage_100001.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_heartBeatPackage_100001
             * @static
             * @param {com.msg.Is_heartBeatPackage_100001} message s_heartBeatPackage_100001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_heartBeatPackage_100001.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified s_heartBeatPackage_100001 message, length delimited. Does not implicitly {@link com.msg.s_heartBeatPackage_100001.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_heartBeatPackage_100001
             * @static
             * @param {com.msg.Is_heartBeatPackage_100001} message s_heartBeatPackage_100001 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_heartBeatPackage_100001.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_heartBeatPackage_100001 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_heartBeatPackage_100001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_heartBeatPackage_100001} s_heartBeatPackage_100001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_heartBeatPackage_100001.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_heartBeatPackage_100001();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a s_heartBeatPackage_100001 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_heartBeatPackage_100001
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_heartBeatPackage_100001} s_heartBeatPackage_100001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_heartBeatPackage_100001.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_heartBeatPackage_100001 message.
             * @function verify
             * @memberof com.msg.s_heartBeatPackage_100001
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_heartBeatPackage_100001.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            return s_heartBeatPackage_100001;
        })();

        msg.c_createAdventureRoom_100100 = (function() {

            /**
             * Properties of a c_createAdventureRoom_100100.
             * @memberof com.msg
             * @interface Ic_createAdventureRoom_100100
             * @property {number|Long} playerID c_createAdventureRoom_100100 playerID
             */

            /**
             * Constructs a new c_createAdventureRoom_100100.
             * @memberof com.msg
             * @classdesc Represents a c_createAdventureRoom_100100.
             * @implements Ic_createAdventureRoom_100100
             * @constructor
             * @param {com.msg.Ic_createAdventureRoom_100100=} [properties] Properties to set
             */
            function c_createAdventureRoom_100100(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_createAdventureRoom_100100 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_createAdventureRoom_100100
             * @instance
             */
            c_createAdventureRoom_100100.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new c_createAdventureRoom_100100 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_createAdventureRoom_100100
             * @static
             * @param {com.msg.Ic_createAdventureRoom_100100=} [properties] Properties to set
             * @returns {com.msg.c_createAdventureRoom_100100} c_createAdventureRoom_100100 instance
             */
            c_createAdventureRoom_100100.create = function create(properties) {
                return new c_createAdventureRoom_100100(properties);
            };

            /**
             * Encodes the specified c_createAdventureRoom_100100 message. Does not implicitly {@link com.msg.c_createAdventureRoom_100100.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_createAdventureRoom_100100
             * @static
             * @param {com.msg.Ic_createAdventureRoom_100100} message c_createAdventureRoom_100100 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_createAdventureRoom_100100.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                return writer;
            };

            /**
             * Encodes the specified c_createAdventureRoom_100100 message, length delimited. Does not implicitly {@link com.msg.c_createAdventureRoom_100100.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_createAdventureRoom_100100
             * @static
             * @param {com.msg.Ic_createAdventureRoom_100100} message c_createAdventureRoom_100100 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_createAdventureRoom_100100.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_createAdventureRoom_100100 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_createAdventureRoom_100100
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_createAdventureRoom_100100} c_createAdventureRoom_100100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_createAdventureRoom_100100.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_createAdventureRoom_100100();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_createAdventureRoom_100100 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_createAdventureRoom_100100
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_createAdventureRoom_100100} c_createAdventureRoom_100100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_createAdventureRoom_100100.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_createAdventureRoom_100100 message.
             * @function verify
             * @memberof com.msg.c_createAdventureRoom_100100
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_createAdventureRoom_100100.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                return null;
            };

            return c_createAdventureRoom_100100;
        })();

        msg.s_createAdventureRoom_100101 = (function() {

            /**
             * Properties of a s_createAdventureRoom_100101.
             * @memberof com.msg
             * @interface Is_createAdventureRoom_100101
             * @property {com.msg.ImsgResult} result s_createAdventureRoom_100101 result
             * @property {string|null} [roomId] s_createAdventureRoom_100101 roomId
             */

            /**
             * Constructs a new s_createAdventureRoom_100101.
             * @memberof com.msg
             * @classdesc Represents a s_createAdventureRoom_100101.
             * @implements Is_createAdventureRoom_100101
             * @constructor
             * @param {com.msg.Is_createAdventureRoom_100101=} [properties] Properties to set
             */
            function s_createAdventureRoom_100101(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_createAdventureRoom_100101 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_createAdventureRoom_100101
             * @instance
             */
            s_createAdventureRoom_100101.prototype.result = null;

            /**
             * s_createAdventureRoom_100101 roomId.
             * @member {string} roomId
             * @memberof com.msg.s_createAdventureRoom_100101
             * @instance
             */
            s_createAdventureRoom_100101.prototype.roomId = "";

            /**
             * Creates a new s_createAdventureRoom_100101 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_createAdventureRoom_100101
             * @static
             * @param {com.msg.Is_createAdventureRoom_100101=} [properties] Properties to set
             * @returns {com.msg.s_createAdventureRoom_100101} s_createAdventureRoom_100101 instance
             */
            s_createAdventureRoom_100101.create = function create(properties) {
                return new s_createAdventureRoom_100101(properties);
            };

            /**
             * Encodes the specified s_createAdventureRoom_100101 message. Does not implicitly {@link com.msg.s_createAdventureRoom_100101.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_createAdventureRoom_100101
             * @static
             * @param {com.msg.Is_createAdventureRoom_100101} message s_createAdventureRoom_100101 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_createAdventureRoom_100101.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
                return writer;
            };

            /**
             * Encodes the specified s_createAdventureRoom_100101 message, length delimited. Does not implicitly {@link com.msg.s_createAdventureRoom_100101.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_createAdventureRoom_100101
             * @static
             * @param {com.msg.Is_createAdventureRoom_100101} message s_createAdventureRoom_100101 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_createAdventureRoom_100101.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_createAdventureRoom_100101 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_createAdventureRoom_100101
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_createAdventureRoom_100101} s_createAdventureRoom_100101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_createAdventureRoom_100101.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_createAdventureRoom_100101();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.roomId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_createAdventureRoom_100101 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_createAdventureRoom_100101
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_createAdventureRoom_100101} s_createAdventureRoom_100101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_createAdventureRoom_100101.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_createAdventureRoom_100101 message.
             * @function verify
             * @memberof com.msg.s_createAdventureRoom_100101
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_createAdventureRoom_100101.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (message.roomId != null && message.hasOwnProperty("roomId"))
                    if (!$util.isString(message.roomId))
                        return "roomId: string expected";
                return null;
            };

            return s_createAdventureRoom_100101;
        })();

        msg.c_joinAdventure_100102 = (function() {

            /**
             * Properties of a c_joinAdventure_100102.
             * @memberof com.msg
             * @interface Ic_joinAdventure_100102
             * @property {number|Long} playerID c_joinAdventure_100102 playerID
             * @property {string} roomId c_joinAdventure_100102 roomId
             * @property {number} slotId c_joinAdventure_100102 slotId
             */

            /**
             * Constructs a new c_joinAdventure_100102.
             * @memberof com.msg
             * @classdesc Represents a c_joinAdventure_100102.
             * @implements Ic_joinAdventure_100102
             * @constructor
             * @param {com.msg.Ic_joinAdventure_100102=} [properties] Properties to set
             */
            function c_joinAdventure_100102(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_joinAdventure_100102 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_joinAdventure_100102
             * @instance
             */
            c_joinAdventure_100102.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * c_joinAdventure_100102 roomId.
             * @member {string} roomId
             * @memberof com.msg.c_joinAdventure_100102
             * @instance
             */
            c_joinAdventure_100102.prototype.roomId = "";

            /**
             * c_joinAdventure_100102 slotId.
             * @member {number} slotId
             * @memberof com.msg.c_joinAdventure_100102
             * @instance
             */
            c_joinAdventure_100102.prototype.slotId = 0;

            /**
             * Creates a new c_joinAdventure_100102 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_joinAdventure_100102
             * @static
             * @param {com.msg.Ic_joinAdventure_100102=} [properties] Properties to set
             * @returns {com.msg.c_joinAdventure_100102} c_joinAdventure_100102 instance
             */
            c_joinAdventure_100102.create = function create(properties) {
                return new c_joinAdventure_100102(properties);
            };

            /**
             * Encodes the specified c_joinAdventure_100102 message. Does not implicitly {@link com.msg.c_joinAdventure_100102.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_joinAdventure_100102
             * @static
             * @param {com.msg.Ic_joinAdventure_100102} message c_joinAdventure_100102 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_joinAdventure_100102.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.slotId);
                return writer;
            };

            /**
             * Encodes the specified c_joinAdventure_100102 message, length delimited. Does not implicitly {@link com.msg.c_joinAdventure_100102.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_joinAdventure_100102
             * @static
             * @param {com.msg.Ic_joinAdventure_100102} message c_joinAdventure_100102 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_joinAdventure_100102.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_joinAdventure_100102 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_joinAdventure_100102
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_joinAdventure_100102} c_joinAdventure_100102
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_joinAdventure_100102.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_joinAdventure_100102();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.roomId = reader.string();
                        break;
                    case 3:
                        message.slotId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("roomId"))
                    throw $util.ProtocolError("missing required 'roomId'", { instance: message });
                if (!message.hasOwnProperty("slotId"))
                    throw $util.ProtocolError("missing required 'slotId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_joinAdventure_100102 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_joinAdventure_100102
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_joinAdventure_100102} c_joinAdventure_100102
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_joinAdventure_100102.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_joinAdventure_100102 message.
             * @function verify
             * @memberof com.msg.c_joinAdventure_100102
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_joinAdventure_100102.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
                if (!$util.isInteger(message.slotId))
                    return "slotId: integer expected";
                return null;
            };

            return c_joinAdventure_100102;
        })();

        msg.s_joinAdventure_100103 = (function() {

            /**
             * Properties of a s_joinAdventure_100103.
             * @memberof com.msg
             * @interface Is_joinAdventure_100103
             * @property {com.msg.ImsgResult} result s_joinAdventure_100103 result
             * @property {number|Long} playerID s_joinAdventure_100103 playerID
             * @property {string} playerHeadImgUrl s_joinAdventure_100103 playerHeadImgUrl
             * @property {string} playerNickName s_joinAdventure_100103 playerNickName
             * @property {number} slotId s_joinAdventure_100103 slotId
             */

            /**
             * Constructs a new s_joinAdventure_100103.
             * @memberof com.msg
             * @classdesc Represents a s_joinAdventure_100103.
             * @implements Is_joinAdventure_100103
             * @constructor
             * @param {com.msg.Is_joinAdventure_100103=} [properties] Properties to set
             */
            function s_joinAdventure_100103(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_joinAdventure_100103 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_joinAdventure_100103
             * @instance
             */
            s_joinAdventure_100103.prototype.result = null;

            /**
             * s_joinAdventure_100103 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.s_joinAdventure_100103
             * @instance
             */
            s_joinAdventure_100103.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * s_joinAdventure_100103 playerHeadImgUrl.
             * @member {string} playerHeadImgUrl
             * @memberof com.msg.s_joinAdventure_100103
             * @instance
             */
            s_joinAdventure_100103.prototype.playerHeadImgUrl = "";

            /**
             * s_joinAdventure_100103 playerNickName.
             * @member {string} playerNickName
             * @memberof com.msg.s_joinAdventure_100103
             * @instance
             */
            s_joinAdventure_100103.prototype.playerNickName = "";

            /**
             * s_joinAdventure_100103 slotId.
             * @member {number} slotId
             * @memberof com.msg.s_joinAdventure_100103
             * @instance
             */
            s_joinAdventure_100103.prototype.slotId = 0;

            /**
             * Creates a new s_joinAdventure_100103 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_joinAdventure_100103
             * @static
             * @param {com.msg.Is_joinAdventure_100103=} [properties] Properties to set
             * @returns {com.msg.s_joinAdventure_100103} s_joinAdventure_100103 instance
             */
            s_joinAdventure_100103.create = function create(properties) {
                return new s_joinAdventure_100103(properties);
            };

            /**
             * Encodes the specified s_joinAdventure_100103 message. Does not implicitly {@link com.msg.s_joinAdventure_100103.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_joinAdventure_100103
             * @static
             * @param {com.msg.Is_joinAdventure_100103} message s_joinAdventure_100103 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_joinAdventure_100103.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerID);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerHeadImgUrl);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerNickName);
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.slotId);
                return writer;
            };

            /**
             * Encodes the specified s_joinAdventure_100103 message, length delimited. Does not implicitly {@link com.msg.s_joinAdventure_100103.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_joinAdventure_100103
             * @static
             * @param {com.msg.Is_joinAdventure_100103} message s_joinAdventure_100103 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_joinAdventure_100103.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_joinAdventure_100103 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_joinAdventure_100103
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_joinAdventure_100103} s_joinAdventure_100103
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_joinAdventure_100103.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_joinAdventure_100103();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.playerID = reader.int64();
                        break;
                    case 3:
                        message.playerHeadImgUrl = reader.string();
                        break;
                    case 4:
                        message.playerNickName = reader.string();
                        break;
                    case 5:
                        message.slotId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("playerHeadImgUrl"))
                    throw $util.ProtocolError("missing required 'playerHeadImgUrl'", { instance: message });
                if (!message.hasOwnProperty("playerNickName"))
                    throw $util.ProtocolError("missing required 'playerNickName'", { instance: message });
                if (!message.hasOwnProperty("slotId"))
                    throw $util.ProtocolError("missing required 'slotId'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_joinAdventure_100103 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_joinAdventure_100103
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_joinAdventure_100103} s_joinAdventure_100103
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_joinAdventure_100103.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_joinAdventure_100103 message.
             * @function verify
             * @memberof com.msg.s_joinAdventure_100103
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_joinAdventure_100103.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isString(message.playerHeadImgUrl))
                    return "playerHeadImgUrl: string expected";
                if (!$util.isString(message.playerNickName))
                    return "playerNickName: string expected";
                if (!$util.isInteger(message.slotId))
                    return "slotId: integer expected";
                return null;
            };

            return s_joinAdventure_100103;
        })();

        msg.c_dismissAdventure_100104 = (function() {

            /**
             * Properties of a c_dismissAdventure_100104.
             * @memberof com.msg
             * @interface Ic_dismissAdventure_100104
             * @property {number|Long} playerID c_dismissAdventure_100104 playerID
             * @property {string} roomId c_dismissAdventure_100104 roomId
             */

            /**
             * Constructs a new c_dismissAdventure_100104.
             * @memberof com.msg
             * @classdesc Represents a c_dismissAdventure_100104.
             * @implements Ic_dismissAdventure_100104
             * @constructor
             * @param {com.msg.Ic_dismissAdventure_100104=} [properties] Properties to set
             */
            function c_dismissAdventure_100104(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_dismissAdventure_100104 playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.c_dismissAdventure_100104
             * @instance
             */
            c_dismissAdventure_100104.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * c_dismissAdventure_100104 roomId.
             * @member {string} roomId
             * @memberof com.msg.c_dismissAdventure_100104
             * @instance
             */
            c_dismissAdventure_100104.prototype.roomId = "";

            /**
             * Creates a new c_dismissAdventure_100104 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_dismissAdventure_100104
             * @static
             * @param {com.msg.Ic_dismissAdventure_100104=} [properties] Properties to set
             * @returns {com.msg.c_dismissAdventure_100104} c_dismissAdventure_100104 instance
             */
            c_dismissAdventure_100104.create = function create(properties) {
                return new c_dismissAdventure_100104(properties);
            };

            /**
             * Encodes the specified c_dismissAdventure_100104 message. Does not implicitly {@link com.msg.c_dismissAdventure_100104.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_dismissAdventure_100104
             * @static
             * @param {com.msg.Ic_dismissAdventure_100104} message c_dismissAdventure_100104 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_dismissAdventure_100104.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
                return writer;
            };

            /**
             * Encodes the specified c_dismissAdventure_100104 message, length delimited. Does not implicitly {@link com.msg.c_dismissAdventure_100104.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_dismissAdventure_100104
             * @static
             * @param {com.msg.Ic_dismissAdventure_100104} message c_dismissAdventure_100104 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_dismissAdventure_100104.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_dismissAdventure_100104 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_dismissAdventure_100104
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_dismissAdventure_100104} c_dismissAdventure_100104
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_dismissAdventure_100104.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_dismissAdventure_100104();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.roomId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("roomId"))
                    throw $util.ProtocolError("missing required 'roomId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_dismissAdventure_100104 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_dismissAdventure_100104
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_dismissAdventure_100104} c_dismissAdventure_100104
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_dismissAdventure_100104.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_dismissAdventure_100104 message.
             * @function verify
             * @memberof com.msg.c_dismissAdventure_100104
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_dismissAdventure_100104.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
                return null;
            };

            return c_dismissAdventure_100104;
        })();

        msg.s_dismissAdventure_100105 = (function() {

            /**
             * Properties of a s_dismissAdventure_100105.
             * @memberof com.msg
             * @interface Is_dismissAdventure_100105
             * @property {com.msg.ImsgResult} result s_dismissAdventure_100105 result
             */

            /**
             * Constructs a new s_dismissAdventure_100105.
             * @memberof com.msg
             * @classdesc Represents a s_dismissAdventure_100105.
             * @implements Is_dismissAdventure_100105
             * @constructor
             * @param {com.msg.Is_dismissAdventure_100105=} [properties] Properties to set
             */
            function s_dismissAdventure_100105(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_dismissAdventure_100105 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_dismissAdventure_100105
             * @instance
             */
            s_dismissAdventure_100105.prototype.result = null;

            /**
             * Creates a new s_dismissAdventure_100105 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_dismissAdventure_100105
             * @static
             * @param {com.msg.Is_dismissAdventure_100105=} [properties] Properties to set
             * @returns {com.msg.s_dismissAdventure_100105} s_dismissAdventure_100105 instance
             */
            s_dismissAdventure_100105.create = function create(properties) {
                return new s_dismissAdventure_100105(properties);
            };

            /**
             * Encodes the specified s_dismissAdventure_100105 message. Does not implicitly {@link com.msg.s_dismissAdventure_100105.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_dismissAdventure_100105
             * @static
             * @param {com.msg.Is_dismissAdventure_100105} message s_dismissAdventure_100105 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_dismissAdventure_100105.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_dismissAdventure_100105 message, length delimited. Does not implicitly {@link com.msg.s_dismissAdventure_100105.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_dismissAdventure_100105
             * @static
             * @param {com.msg.Is_dismissAdventure_100105} message s_dismissAdventure_100105 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_dismissAdventure_100105.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_dismissAdventure_100105 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_dismissAdventure_100105
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_dismissAdventure_100105} s_dismissAdventure_100105
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_dismissAdventure_100105.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_dismissAdventure_100105();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_dismissAdventure_100105 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_dismissAdventure_100105
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_dismissAdventure_100105} s_dismissAdventure_100105
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_dismissAdventure_100105.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_dismissAdventure_100105 message.
             * @function verify
             * @memberof com.msg.s_dismissAdventure_100105
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_dismissAdventure_100105.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };

            return s_dismissAdventure_100105;
        })();

        msg.c_startAdventure_100106 = (function() {

            /**
             * Properties of a c_startAdventure_100106.
             * @memberof com.msg
             * @interface Ic_startAdventure_100106
             * @property {string} roomId c_startAdventure_100106 roomId
             * @property {Array.<number>|null} [matIds] c_startAdventure_100106 matIds
             * @property {Array.<number>|null} [matSlotIds] c_startAdventure_100106 matSlotIds
             */

            /**
             * Constructs a new c_startAdventure_100106.
             * @memberof com.msg
             * @classdesc Represents a c_startAdventure_100106.
             * @implements Ic_startAdventure_100106
             * @constructor
             * @param {com.msg.Ic_startAdventure_100106=} [properties] Properties to set
             */
            function c_startAdventure_100106(properties) {
                this.matIds = [];
                this.matSlotIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * c_startAdventure_100106 roomId.
             * @member {string} roomId
             * @memberof com.msg.c_startAdventure_100106
             * @instance
             */
            c_startAdventure_100106.prototype.roomId = "";

            /**
             * c_startAdventure_100106 matIds.
             * @member {Array.<number>} matIds
             * @memberof com.msg.c_startAdventure_100106
             * @instance
             */
            c_startAdventure_100106.prototype.matIds = $util.emptyArray;

            /**
             * c_startAdventure_100106 matSlotIds.
             * @member {Array.<number>} matSlotIds
             * @memberof com.msg.c_startAdventure_100106
             * @instance
             */
            c_startAdventure_100106.prototype.matSlotIds = $util.emptyArray;

            /**
             * Creates a new c_startAdventure_100106 instance using the specified properties.
             * @function create
             * @memberof com.msg.c_startAdventure_100106
             * @static
             * @param {com.msg.Ic_startAdventure_100106=} [properties] Properties to set
             * @returns {com.msg.c_startAdventure_100106} c_startAdventure_100106 instance
             */
            c_startAdventure_100106.create = function create(properties) {
                return new c_startAdventure_100106(properties);
            };

            /**
             * Encodes the specified c_startAdventure_100106 message. Does not implicitly {@link com.msg.c_startAdventure_100106.verify|verify} messages.
             * @function encode
             * @memberof com.msg.c_startAdventure_100106
             * @static
             * @param {com.msg.Ic_startAdventure_100106} message c_startAdventure_100106 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_startAdventure_100106.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
                if (message.matIds != null && message.matIds.length)
                    for (var i = 0; i < message.matIds.length; ++i)
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.matIds[i]);
                if (message.matSlotIds != null && message.matSlotIds.length)
                    for (var i = 0; i < message.matSlotIds.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.matSlotIds[i]);
                return writer;
            };

            /**
             * Encodes the specified c_startAdventure_100106 message, length delimited. Does not implicitly {@link com.msg.c_startAdventure_100106.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.c_startAdventure_100106
             * @static
             * @param {com.msg.Ic_startAdventure_100106} message c_startAdventure_100106 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            c_startAdventure_100106.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a c_startAdventure_100106 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.c_startAdventure_100106
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.c_startAdventure_100106} c_startAdventure_100106
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_startAdventure_100106.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.c_startAdventure_100106();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.string();
                        break;
                    case 2:
                        if (!(message.matIds && message.matIds.length))
                            message.matIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.matIds.push(reader.int32());
                        } else
                            message.matIds.push(reader.int32());
                        break;
                    case 3:
                        if (!(message.matSlotIds && message.matSlotIds.length))
                            message.matSlotIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.matSlotIds.push(reader.int32());
                        } else
                            message.matSlotIds.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("roomId"))
                    throw $util.ProtocolError("missing required 'roomId'", { instance: message });
                return message;
            };

            /**
             * Decodes a c_startAdventure_100106 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.c_startAdventure_100106
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.c_startAdventure_100106} c_startAdventure_100106
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            c_startAdventure_100106.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a c_startAdventure_100106 message.
             * @function verify
             * @memberof com.msg.c_startAdventure_100106
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            c_startAdventure_100106.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
                if (message.matIds != null && message.hasOwnProperty("matIds")) {
                    if (!Array.isArray(message.matIds))
                        return "matIds: array expected";
                    for (var i = 0; i < message.matIds.length; ++i)
                        if (!$util.isInteger(message.matIds[i]))
                            return "matIds: integer[] expected";
                }
                if (message.matSlotIds != null && message.hasOwnProperty("matSlotIds")) {
                    if (!Array.isArray(message.matSlotIds))
                        return "matSlotIds: array expected";
                    for (var i = 0; i < message.matSlotIds.length; ++i)
                        if (!$util.isInteger(message.matSlotIds[i]))
                            return "matSlotIds: integer[] expected";
                }
                return null;
            };

            return c_startAdventure_100106;
        })();

        msg.s_startAdventure_100107 = (function() {

            /**
             * Properties of a s_startAdventure_100107.
             * @memberof com.msg
             * @interface Is_startAdventure_100107
             * @property {com.msg.ImsgResult} result s_startAdventure_100107 result
             */

            /**
             * Constructs a new s_startAdventure_100107.
             * @memberof com.msg
             * @classdesc Represents a s_startAdventure_100107.
             * @implements Is_startAdventure_100107
             * @constructor
             * @param {com.msg.Is_startAdventure_100107=} [properties] Properties to set
             */
            function s_startAdventure_100107(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * s_startAdventure_100107 result.
             * @member {com.msg.ImsgResult} result
             * @memberof com.msg.s_startAdventure_100107
             * @instance
             */
            s_startAdventure_100107.prototype.result = null;

            /**
             * Creates a new s_startAdventure_100107 instance using the specified properties.
             * @function create
             * @memberof com.msg.s_startAdventure_100107
             * @static
             * @param {com.msg.Is_startAdventure_100107=} [properties] Properties to set
             * @returns {com.msg.s_startAdventure_100107} s_startAdventure_100107 instance
             */
            s_startAdventure_100107.create = function create(properties) {
                return new s_startAdventure_100107(properties);
            };

            /**
             * Encodes the specified s_startAdventure_100107 message. Does not implicitly {@link com.msg.s_startAdventure_100107.verify|verify} messages.
             * @function encode
             * @memberof com.msg.s_startAdventure_100107
             * @static
             * @param {com.msg.Is_startAdventure_100107} message s_startAdventure_100107 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_startAdventure_100107.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.msgResult.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified s_startAdventure_100107 message, length delimited. Does not implicitly {@link com.msg.s_startAdventure_100107.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.s_startAdventure_100107
             * @static
             * @param {com.msg.Is_startAdventure_100107} message s_startAdventure_100107 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            s_startAdventure_100107.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a s_startAdventure_100107 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.s_startAdventure_100107
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.s_startAdventure_100107} s_startAdventure_100107
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_startAdventure_100107.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.s_startAdventure_100107();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.result = $root.com.msg.msgResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("result"))
                    throw $util.ProtocolError("missing required 'result'", { instance: message });
                return message;
            };

            /**
             * Decodes a s_startAdventure_100107 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.s_startAdventure_100107
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.s_startAdventure_100107} s_startAdventure_100107
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            s_startAdventure_100107.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a s_startAdventure_100107 message.
             * @function verify
             * @memberof com.msg.s_startAdventure_100107
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            s_startAdventure_100107.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.msgResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };

            return s_startAdventure_100107;
        })();

        msg.msgResult = (function() {

            /**
             * Properties of a msgResult.
             * @memberof com.msg
             * @interface ImsgResult
             * @property {number} ErrorCode msgResult ErrorCode
             * @property {string|null} [ErrorMsg] msgResult ErrorMsg
             */

            /**
             * Constructs a new msgResult.
             * @memberof com.msg
             * @classdesc Represents a msgResult.
             * @implements ImsgResult
             * @constructor
             * @param {com.msg.ImsgResult=} [properties] Properties to set
             */
            function msgResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * msgResult ErrorCode.
             * @member {number} ErrorCode
             * @memberof com.msg.msgResult
             * @instance
             */
            msgResult.prototype.ErrorCode = 0;

            /**
             * msgResult ErrorMsg.
             * @member {string} ErrorMsg
             * @memberof com.msg.msgResult
             * @instance
             */
            msgResult.prototype.ErrorMsg = "";

            /**
             * Creates a new msgResult instance using the specified properties.
             * @function create
             * @memberof com.msg.msgResult
             * @static
             * @param {com.msg.ImsgResult=} [properties] Properties to set
             * @returns {com.msg.msgResult} msgResult instance
             */
            msgResult.create = function create(properties) {
                return new msgResult(properties);
            };

            /**
             * Encodes the specified msgResult message. Does not implicitly {@link com.msg.msgResult.verify|verify} messages.
             * @function encode
             * @memberof com.msg.msgResult
             * @static
             * @param {com.msg.ImsgResult} message msgResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            msgResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ErrorCode);
                if (message.ErrorMsg != null && message.hasOwnProperty("ErrorMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.ErrorMsg);
                return writer;
            };

            /**
             * Encodes the specified msgResult message, length delimited. Does not implicitly {@link com.msg.msgResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.msgResult
             * @static
             * @param {com.msg.ImsgResult} message msgResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            msgResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a msgResult message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.msgResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.msgResult} msgResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            msgResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.msgResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ErrorCode = reader.int32();
                        break;
                    case 2:
                        message.ErrorMsg = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("ErrorCode"))
                    throw $util.ProtocolError("missing required 'ErrorCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a msgResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.msgResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.msgResult} msgResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            msgResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a msgResult message.
             * @function verify
             * @memberof com.msg.msgResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            msgResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.ErrorCode))
                    return "ErrorCode: integer expected";
                if (message.ErrorMsg != null && message.hasOwnProperty("ErrorMsg"))
                    if (!$util.isString(message.ErrorMsg))
                        return "ErrorMsg: string expected";
                return null;
            };

            return msgResult;
        })();

        msg.playerInfo = (function() {

            /**
             * Properties of a playerInfo.
             * @memberof com.msg
             * @interface IplayerInfo
             * @property {com.msg.IcommonPlayerInfo} commonPlayerInfo playerInfo commonPlayerInfo
             * @property {com.msg.ImoneyInfo} money playerInfo money
             * @property {com.msg.IbagInfo} bagInfo playerInfo bagInfo
             * @property {number} newbieStepId playerInfo newbieStepId
             * @property {number} adSwitch playerInfo adSwitch
             */

            /**
             * Constructs a new playerInfo.
             * @memberof com.msg
             * @classdesc Represents a playerInfo.
             * @implements IplayerInfo
             * @constructor
             * @param {com.msg.IplayerInfo=} [properties] Properties to set
             */
            function playerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * playerInfo commonPlayerInfo.
             * @member {com.msg.IcommonPlayerInfo} commonPlayerInfo
             * @memberof com.msg.playerInfo
             * @instance
             */
            playerInfo.prototype.commonPlayerInfo = null;

            /**
             * playerInfo money.
             * @member {com.msg.ImoneyInfo} money
             * @memberof com.msg.playerInfo
             * @instance
             */
            playerInfo.prototype.money = null;

            /**
             * playerInfo bagInfo.
             * @member {com.msg.IbagInfo} bagInfo
             * @memberof com.msg.playerInfo
             * @instance
             */
            playerInfo.prototype.bagInfo = null;

            /**
             * playerInfo newbieStepId.
             * @member {number} newbieStepId
             * @memberof com.msg.playerInfo
             * @instance
             */
            playerInfo.prototype.newbieStepId = 0;

            /**
             * playerInfo adSwitch.
             * @member {number} adSwitch
             * @memberof com.msg.playerInfo
             * @instance
             */
            playerInfo.prototype.adSwitch = 0;

            /**
             * Creates a new playerInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.playerInfo
             * @static
             * @param {com.msg.IplayerInfo=} [properties] Properties to set
             * @returns {com.msg.playerInfo} playerInfo instance
             */
            playerInfo.create = function create(properties) {
                return new playerInfo(properties);
            };

            /**
             * Encodes the specified playerInfo message. Does not implicitly {@link com.msg.playerInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.playerInfo
             * @static
             * @param {com.msg.IplayerInfo} message playerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            playerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.com.msg.commonPlayerInfo.encode(message.commonPlayerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                $root.com.msg.moneyInfo.encode(message.money, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                $root.com.msg.bagInfo.encode(message.bagInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.newbieStepId);
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.adSwitch);
                return writer;
            };

            /**
             * Encodes the specified playerInfo message, length delimited. Does not implicitly {@link com.msg.playerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.playerInfo
             * @static
             * @param {com.msg.IplayerInfo} message playerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            playerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a playerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.playerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.playerInfo} playerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            playerInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.playerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.commonPlayerInfo = $root.com.msg.commonPlayerInfo.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.money = $root.com.msg.moneyInfo.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.bagInfo = $root.com.msg.bagInfo.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.newbieStepId = reader.int32();
                        break;
                    case 5:
                        message.adSwitch = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("commonPlayerInfo"))
                    throw $util.ProtocolError("missing required 'commonPlayerInfo'", { instance: message });
                if (!message.hasOwnProperty("money"))
                    throw $util.ProtocolError("missing required 'money'", { instance: message });
                if (!message.hasOwnProperty("bagInfo"))
                    throw $util.ProtocolError("missing required 'bagInfo'", { instance: message });
                if (!message.hasOwnProperty("newbieStepId"))
                    throw $util.ProtocolError("missing required 'newbieStepId'", { instance: message });
                if (!message.hasOwnProperty("adSwitch"))
                    throw $util.ProtocolError("missing required 'adSwitch'", { instance: message });
                return message;
            };

            /**
             * Decodes a playerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.playerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.playerInfo} playerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            playerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a playerInfo message.
             * @function verify
             * @memberof com.msg.playerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            playerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.com.msg.commonPlayerInfo.verify(message.commonPlayerInfo);
                    if (error)
                        return "commonPlayerInfo." + error;
                }
                {
                    var error = $root.com.msg.moneyInfo.verify(message.money);
                    if (error)
                        return "money." + error;
                }
                {
                    var error = $root.com.msg.bagInfo.verify(message.bagInfo);
                    if (error)
                        return "bagInfo." + error;
                }
                if (!$util.isInteger(message.newbieStepId))
                    return "newbieStepId: integer expected";
                if (!$util.isInteger(message.adSwitch))
                    return "adSwitch: integer expected";
                return null;
            };

            return playerInfo;
        })();

        msg.commonPlayerInfo = (function() {

            /**
             * Properties of a commonPlayerInfo.
             * @memberof com.msg
             * @interface IcommonPlayerInfo
             * @property {number|Long} playerID commonPlayerInfo playerID
             * @property {com.msg.IplayerHeaderInfo} header commonPlayerInfo header
             */

            /**
             * Constructs a new commonPlayerInfo.
             * @memberof com.msg
             * @classdesc Represents a commonPlayerInfo.
             * @implements IcommonPlayerInfo
             * @constructor
             * @param {com.msg.IcommonPlayerInfo=} [properties] Properties to set
             */
            function commonPlayerInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * commonPlayerInfo playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.commonPlayerInfo
             * @instance
             */
            commonPlayerInfo.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * commonPlayerInfo header.
             * @member {com.msg.IplayerHeaderInfo} header
             * @memberof com.msg.commonPlayerInfo
             * @instance
             */
            commonPlayerInfo.prototype.header = null;

            /**
             * Creates a new commonPlayerInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.commonPlayerInfo
             * @static
             * @param {com.msg.IcommonPlayerInfo=} [properties] Properties to set
             * @returns {com.msg.commonPlayerInfo} commonPlayerInfo instance
             */
            commonPlayerInfo.create = function create(properties) {
                return new commonPlayerInfo(properties);
            };

            /**
             * Encodes the specified commonPlayerInfo message. Does not implicitly {@link com.msg.commonPlayerInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.commonPlayerInfo
             * @static
             * @param {com.msg.IcommonPlayerInfo} message commonPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            commonPlayerInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                $root.com.msg.playerHeaderInfo.encode(message.header, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified commonPlayerInfo message, length delimited. Does not implicitly {@link com.msg.commonPlayerInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.commonPlayerInfo
             * @static
             * @param {com.msg.IcommonPlayerInfo} message commonPlayerInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            commonPlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a commonPlayerInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.commonPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.commonPlayerInfo} commonPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            commonPlayerInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.commonPlayerInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.header = $root.com.msg.playerHeaderInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("header"))
                    throw $util.ProtocolError("missing required 'header'", { instance: message });
                return message;
            };

            /**
             * Decodes a commonPlayerInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.commonPlayerInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.commonPlayerInfo} commonPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            commonPlayerInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a commonPlayerInfo message.
             * @function verify
             * @memberof com.msg.commonPlayerInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            commonPlayerInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                {
                    var error = $root.com.msg.playerHeaderInfo.verify(message.header);
                    if (error)
                        return "header." + error;
                }
                return null;
            };

            return commonPlayerInfo;
        })();

        msg.moneyInfo = (function() {

            /**
             * Properties of a moneyInfo.
             * @memberof com.msg
             * @interface ImoneyInfo
             * @property {number} coinNum moneyInfo coinNum
             * @property {number} diamondNum moneyInfo diamondNum
             */

            /**
             * Constructs a new moneyInfo.
             * @memberof com.msg
             * @classdesc Represents a moneyInfo.
             * @implements ImoneyInfo
             * @constructor
             * @param {com.msg.ImoneyInfo=} [properties] Properties to set
             */
            function moneyInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * moneyInfo coinNum.
             * @member {number} coinNum
             * @memberof com.msg.moneyInfo
             * @instance
             */
            moneyInfo.prototype.coinNum = 0;

            /**
             * moneyInfo diamondNum.
             * @member {number} diamondNum
             * @memberof com.msg.moneyInfo
             * @instance
             */
            moneyInfo.prototype.diamondNum = 0;

            /**
             * Creates a new moneyInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.moneyInfo
             * @static
             * @param {com.msg.ImoneyInfo=} [properties] Properties to set
             * @returns {com.msg.moneyInfo} moneyInfo instance
             */
            moneyInfo.create = function create(properties) {
                return new moneyInfo(properties);
            };

            /**
             * Encodes the specified moneyInfo message. Does not implicitly {@link com.msg.moneyInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.moneyInfo
             * @static
             * @param {com.msg.ImoneyInfo} message moneyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            moneyInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.coinNum);
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.diamondNum);
                return writer;
            };

            /**
             * Encodes the specified moneyInfo message, length delimited. Does not implicitly {@link com.msg.moneyInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.moneyInfo
             * @static
             * @param {com.msg.ImoneyInfo} message moneyInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            moneyInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a moneyInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.moneyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.moneyInfo} moneyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            moneyInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.moneyInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.coinNum = reader.float();
                        break;
                    case 2:
                        message.diamondNum = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("coinNum"))
                    throw $util.ProtocolError("missing required 'coinNum'", { instance: message });
                if (!message.hasOwnProperty("diamondNum"))
                    throw $util.ProtocolError("missing required 'diamondNum'", { instance: message });
                return message;
            };

            /**
             * Decodes a moneyInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.moneyInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.moneyInfo} moneyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            moneyInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a moneyInfo message.
             * @function verify
             * @memberof com.msg.moneyInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            moneyInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.coinNum !== "number")
                    return "coinNum: number expected";
                if (typeof message.diamondNum !== "number")
                    return "diamondNum: number expected";
                return null;
            };

            return moneyInfo;
        })();

        msg.playerHeaderInfo = (function() {

            /**
             * Properties of a playerHeaderInfo.
             * @memberof com.msg
             * @interface IplayerHeaderInfo
             * @property {string} nickName playerHeaderInfo nickName
             * @property {string} imageUrl playerHeaderInfo imageUrl
             */

            /**
             * Constructs a new playerHeaderInfo.
             * @memberof com.msg
             * @classdesc Represents a playerHeaderInfo.
             * @implements IplayerHeaderInfo
             * @constructor
             * @param {com.msg.IplayerHeaderInfo=} [properties] Properties to set
             */
            function playerHeaderInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * playerHeaderInfo nickName.
             * @member {string} nickName
             * @memberof com.msg.playerHeaderInfo
             * @instance
             */
            playerHeaderInfo.prototype.nickName = "";

            /**
             * playerHeaderInfo imageUrl.
             * @member {string} imageUrl
             * @memberof com.msg.playerHeaderInfo
             * @instance
             */
            playerHeaderInfo.prototype.imageUrl = "";

            /**
             * Creates a new playerHeaderInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.playerHeaderInfo
             * @static
             * @param {com.msg.IplayerHeaderInfo=} [properties] Properties to set
             * @returns {com.msg.playerHeaderInfo} playerHeaderInfo instance
             */
            playerHeaderInfo.create = function create(properties) {
                return new playerHeaderInfo(properties);
            };

            /**
             * Encodes the specified playerHeaderInfo message. Does not implicitly {@link com.msg.playerHeaderInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.playerHeaderInfo
             * @static
             * @param {com.msg.IplayerHeaderInfo} message playerHeaderInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            playerHeaderInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.imageUrl);
                return writer;
            };

            /**
             * Encodes the specified playerHeaderInfo message, length delimited. Does not implicitly {@link com.msg.playerHeaderInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.playerHeaderInfo
             * @static
             * @param {com.msg.IplayerHeaderInfo} message playerHeaderInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            playerHeaderInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a playerHeaderInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.playerHeaderInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.playerHeaderInfo} playerHeaderInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            playerHeaderInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.playerHeaderInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nickName = reader.string();
                        break;
                    case 2:
                        message.imageUrl = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("nickName"))
                    throw $util.ProtocolError("missing required 'nickName'", { instance: message });
                if (!message.hasOwnProperty("imageUrl"))
                    throw $util.ProtocolError("missing required 'imageUrl'", { instance: message });
                return message;
            };

            /**
             * Decodes a playerHeaderInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.playerHeaderInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.playerHeaderInfo} playerHeaderInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            playerHeaderInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a playerHeaderInfo message.
             * @function verify
             * @memberof com.msg.playerHeaderInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            playerHeaderInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
                return null;
            };

            return playerHeaderInfo;
        })();

        msg.bagInfo = (function() {

            /**
             * Properties of a bagInfo.
             * @memberof com.msg
             * @interface IbagInfo
             * @property {Array.<number>|null} [itemIds] bagInfo itemIds
             * @property {Array.<number>|null} [itemCount] bagInfo itemCount
             */

            /**
             * Constructs a new bagInfo.
             * @memberof com.msg
             * @classdesc Represents a bagInfo.
             * @implements IbagInfo
             * @constructor
             * @param {com.msg.IbagInfo=} [properties] Properties to set
             */
            function bagInfo(properties) {
                this.itemIds = [];
                this.itemCount = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * bagInfo itemIds.
             * @member {Array.<number>} itemIds
             * @memberof com.msg.bagInfo
             * @instance
             */
            bagInfo.prototype.itemIds = $util.emptyArray;

            /**
             * bagInfo itemCount.
             * @member {Array.<number>} itemCount
             * @memberof com.msg.bagInfo
             * @instance
             */
            bagInfo.prototype.itemCount = $util.emptyArray;

            /**
             * Creates a new bagInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.bagInfo
             * @static
             * @param {com.msg.IbagInfo=} [properties] Properties to set
             * @returns {com.msg.bagInfo} bagInfo instance
             */
            bagInfo.create = function create(properties) {
                return new bagInfo(properties);
            };

            /**
             * Encodes the specified bagInfo message. Does not implicitly {@link com.msg.bagInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.bagInfo
             * @static
             * @param {com.msg.IbagInfo} message bagInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            bagInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.itemIds != null && message.itemIds.length)
                    for (var i = 0; i < message.itemIds.length; ++i)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemIds[i]);
                if (message.itemCount != null && message.itemCount.length)
                    for (var i = 0; i < message.itemCount.length; ++i)
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemCount[i]);
                return writer;
            };

            /**
             * Encodes the specified bagInfo message, length delimited. Does not implicitly {@link com.msg.bagInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.bagInfo
             * @static
             * @param {com.msg.IbagInfo} message bagInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            bagInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a bagInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.bagInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.bagInfo} bagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            bagInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.bagInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.itemIds && message.itemIds.length))
                            message.itemIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.itemIds.push(reader.int32());
                        } else
                            message.itemIds.push(reader.int32());
                        break;
                    case 2:
                        if (!(message.itemCount && message.itemCount.length))
                            message.itemCount = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.itemCount.push(reader.int32());
                        } else
                            message.itemCount.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a bagInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.bagInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.bagInfo} bagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            bagInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a bagInfo message.
             * @function verify
             * @memberof com.msg.bagInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            bagInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.itemIds != null && message.hasOwnProperty("itemIds")) {
                    if (!Array.isArray(message.itemIds))
                        return "itemIds: array expected";
                    for (var i = 0; i < message.itemIds.length; ++i)
                        if (!$util.isInteger(message.itemIds[i]))
                            return "itemIds: integer[] expected";
                }
                if (message.itemCount != null && message.hasOwnProperty("itemCount")) {
                    if (!Array.isArray(message.itemCount))
                        return "itemCount: array expected";
                    for (var i = 0; i < message.itemCount.length; ++i)
                        if (!$util.isInteger(message.itemCount[i]))
                            return "itemCount: integer[] expected";
                }
                return null;
            };

            return bagInfo;
        })();

        msg.invitorInfo = (function() {

            /**
             * Properties of an invitorInfo.
             * @memberof com.msg
             * @interface IinvitorInfo
             * @property {number|Long} invitorUserId invitorInfo invitorUserId
             * @property {number|null} [invitedActivityId] invitorInfo invitedActivityId
             */

            /**
             * Constructs a new invitorInfo.
             * @memberof com.msg
             * @classdesc Represents an invitorInfo.
             * @implements IinvitorInfo
             * @constructor
             * @param {com.msg.IinvitorInfo=} [properties] Properties to set
             */
            function invitorInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * invitorInfo invitorUserId.
             * @member {number|Long} invitorUserId
             * @memberof com.msg.invitorInfo
             * @instance
             */
            invitorInfo.prototype.invitorUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * invitorInfo invitedActivityId.
             * @member {number} invitedActivityId
             * @memberof com.msg.invitorInfo
             * @instance
             */
            invitorInfo.prototype.invitedActivityId = 0;

            /**
             * Creates a new invitorInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.invitorInfo
             * @static
             * @param {com.msg.IinvitorInfo=} [properties] Properties to set
             * @returns {com.msg.invitorInfo} invitorInfo instance
             */
            invitorInfo.create = function create(properties) {
                return new invitorInfo(properties);
            };

            /**
             * Encodes the specified invitorInfo message. Does not implicitly {@link com.msg.invitorInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.invitorInfo
             * @static
             * @param {com.msg.IinvitorInfo} message invitorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            invitorInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.invitorUserId);
                if (message.invitedActivityId != null && message.hasOwnProperty("invitedActivityId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.invitedActivityId);
                return writer;
            };

            /**
             * Encodes the specified invitorInfo message, length delimited. Does not implicitly {@link com.msg.invitorInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.invitorInfo
             * @static
             * @param {com.msg.IinvitorInfo} message invitorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            invitorInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an invitorInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.invitorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.invitorInfo} invitorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            invitorInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.invitorInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.invitorUserId = reader.int64();
                        break;
                    case 2:
                        message.invitedActivityId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("invitorUserId"))
                    throw $util.ProtocolError("missing required 'invitorUserId'", { instance: message });
                return message;
            };

            /**
             * Decodes an invitorInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.invitorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.invitorInfo} invitorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            invitorInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an invitorInfo message.
             * @function verify
             * @memberof com.msg.invitorInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            invitorInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.invitorUserId) && !(message.invitorUserId && $util.isInteger(message.invitorUserId.low) && $util.isInteger(message.invitorUserId.high)))
                    return "invitorUserId: integer|Long expected";
                if (message.invitedActivityId != null && message.hasOwnProperty("invitedActivityId"))
                    if (!$util.isInteger(message.invitedActivityId))
                        return "invitedActivityId: integer expected";
                return null;
            };

            return invitorInfo;
        })();

        msg.vec2 = (function() {

            /**
             * Properties of a vec2.
             * @memberof com.msg
             * @interface Ivec2
             * @property {number} x vec2 x
             * @property {number} y vec2 y
             */

            /**
             * Constructs a new vec2.
             * @memberof com.msg
             * @classdesc Represents a vec2.
             * @implements Ivec2
             * @constructor
             * @param {com.msg.Ivec2=} [properties] Properties to set
             */
            function vec2(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * vec2 x.
             * @member {number} x
             * @memberof com.msg.vec2
             * @instance
             */
            vec2.prototype.x = 0;

            /**
             * vec2 y.
             * @member {number} y
             * @memberof com.msg.vec2
             * @instance
             */
            vec2.prototype.y = 0;

            /**
             * Creates a new vec2 instance using the specified properties.
             * @function create
             * @memberof com.msg.vec2
             * @static
             * @param {com.msg.Ivec2=} [properties] Properties to set
             * @returns {com.msg.vec2} vec2 instance
             */
            vec2.create = function create(properties) {
                return new vec2(properties);
            };

            /**
             * Encodes the specified vec2 message. Does not implicitly {@link com.msg.vec2.verify|verify} messages.
             * @function encode
             * @memberof com.msg.vec2
             * @static
             * @param {com.msg.Ivec2} message vec2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            vec2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                return writer;
            };

            /**
             * Encodes the specified vec2 message, length delimited. Does not implicitly {@link com.msg.vec2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.vec2
             * @static
             * @param {com.msg.Ivec2} message vec2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            vec2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a vec2 message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.vec2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.vec2} vec2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            vec2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.vec2();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.float();
                        break;
                    case 2:
                        message.y = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("x"))
                    throw $util.ProtocolError("missing required 'x'", { instance: message });
                if (!message.hasOwnProperty("y"))
                    throw $util.ProtocolError("missing required 'y'", { instance: message });
                return message;
            };

            /**
             * Decodes a vec2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.vec2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.vec2} vec2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            vec2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a vec2 message.
             * @function verify
             * @memberof com.msg.vec2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            vec2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.x !== "number")
                    return "x: number expected";
                if (typeof message.y !== "number")
                    return "y: number expected";
                return null;
            };

            return vec2;
        })();

        msg.getReward = (function() {

            /**
             * Properties of a getReward.
             * @memberof com.msg
             * @interface IgetReward
             * @property {Array.<com.msg.IitemsUpdateInfo>|null} [itemsUpdateInfo] getReward itemsUpdateInfo
             * @property {number} rewardType getReward rewardType
             */

            /**
             * Constructs a new getReward.
             * @memberof com.msg
             * @classdesc Represents a getReward.
             * @implements IgetReward
             * @constructor
             * @param {com.msg.IgetReward=} [properties] Properties to set
             */
            function getReward(properties) {
                this.itemsUpdateInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * getReward itemsUpdateInfo.
             * @member {Array.<com.msg.IitemsUpdateInfo>} itemsUpdateInfo
             * @memberof com.msg.getReward
             * @instance
             */
            getReward.prototype.itemsUpdateInfo = $util.emptyArray;

            /**
             * getReward rewardType.
             * @member {number} rewardType
             * @memberof com.msg.getReward
             * @instance
             */
            getReward.prototype.rewardType = 0;

            /**
             * Creates a new getReward instance using the specified properties.
             * @function create
             * @memberof com.msg.getReward
             * @static
             * @param {com.msg.IgetReward=} [properties] Properties to set
             * @returns {com.msg.getReward} getReward instance
             */
            getReward.create = function create(properties) {
                return new getReward(properties);
            };

            /**
             * Encodes the specified getReward message. Does not implicitly {@link com.msg.getReward.verify|verify} messages.
             * @function encode
             * @memberof com.msg.getReward
             * @static
             * @param {com.msg.IgetReward} message getReward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            getReward.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.itemsUpdateInfo != null && message.itemsUpdateInfo.length)
                    for (var i = 0; i < message.itemsUpdateInfo.length; ++i)
                        $root.com.msg.itemsUpdateInfo.encode(message.itemsUpdateInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rewardType);
                return writer;
            };

            /**
             * Encodes the specified getReward message, length delimited. Does not implicitly {@link com.msg.getReward.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.getReward
             * @static
             * @param {com.msg.IgetReward} message getReward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            getReward.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a getReward message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.getReward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.getReward} getReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            getReward.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.getReward();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.itemsUpdateInfo && message.itemsUpdateInfo.length))
                            message.itemsUpdateInfo = [];
                        message.itemsUpdateInfo.push($root.com.msg.itemsUpdateInfo.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.rewardType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("rewardType"))
                    throw $util.ProtocolError("missing required 'rewardType'", { instance: message });
                return message;
            };

            /**
             * Decodes a getReward message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.getReward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.getReward} getReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            getReward.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a getReward message.
             * @function verify
             * @memberof com.msg.getReward
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            getReward.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.itemsUpdateInfo != null && message.hasOwnProperty("itemsUpdateInfo")) {
                    if (!Array.isArray(message.itemsUpdateInfo))
                        return "itemsUpdateInfo: array expected";
                    for (var i = 0; i < message.itemsUpdateInfo.length; ++i) {
                        var error = $root.com.msg.itemsUpdateInfo.verify(message.itemsUpdateInfo[i]);
                        if (error)
                            return "itemsUpdateInfo." + error;
                    }
                }
                if (!$util.isInteger(message.rewardType))
                    return "rewardType: integer expected";
                return null;
            };

            return getReward;
        })();

        msg.itemsUpdateInfo = (function() {

            /**
             * Properties of an itemsUpdateInfo.
             * @memberof com.msg
             * @interface IitemsUpdateInfo
             * @property {Array.<number>|null} [newBagItemIds] itemsUpdateInfo newBagItemIds
             * @property {Array.<number>|null} [itemCounts] itemsUpdateInfo itemCounts
             */

            /**
             * Constructs a new itemsUpdateInfo.
             * @memberof com.msg
             * @classdesc Represents an itemsUpdateInfo.
             * @implements IitemsUpdateInfo
             * @constructor
             * @param {com.msg.IitemsUpdateInfo=} [properties] Properties to set
             */
            function itemsUpdateInfo(properties) {
                this.newBagItemIds = [];
                this.itemCounts = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * itemsUpdateInfo newBagItemIds.
             * @member {Array.<number>} newBagItemIds
             * @memberof com.msg.itemsUpdateInfo
             * @instance
             */
            itemsUpdateInfo.prototype.newBagItemIds = $util.emptyArray;

            /**
             * itemsUpdateInfo itemCounts.
             * @member {Array.<number>} itemCounts
             * @memberof com.msg.itemsUpdateInfo
             * @instance
             */
            itemsUpdateInfo.prototype.itemCounts = $util.emptyArray;

            /**
             * Creates a new itemsUpdateInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.itemsUpdateInfo
             * @static
             * @param {com.msg.IitemsUpdateInfo=} [properties] Properties to set
             * @returns {com.msg.itemsUpdateInfo} itemsUpdateInfo instance
             */
            itemsUpdateInfo.create = function create(properties) {
                return new itemsUpdateInfo(properties);
            };

            /**
             * Encodes the specified itemsUpdateInfo message. Does not implicitly {@link com.msg.itemsUpdateInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.itemsUpdateInfo
             * @static
             * @param {com.msg.IitemsUpdateInfo} message itemsUpdateInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            itemsUpdateInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.newBagItemIds != null && message.newBagItemIds.length)
                    for (var i = 0; i < message.newBagItemIds.length; ++i)
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.newBagItemIds[i]);
                if (message.itemCounts != null && message.itemCounts.length)
                    for (var i = 0; i < message.itemCounts.length; ++i)
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemCounts[i]);
                return writer;
            };

            /**
             * Encodes the specified itemsUpdateInfo message, length delimited. Does not implicitly {@link com.msg.itemsUpdateInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.itemsUpdateInfo
             * @static
             * @param {com.msg.IitemsUpdateInfo} message itemsUpdateInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            itemsUpdateInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an itemsUpdateInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.itemsUpdateInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.itemsUpdateInfo} itemsUpdateInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            itemsUpdateInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.itemsUpdateInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.newBagItemIds && message.newBagItemIds.length))
                            message.newBagItemIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.newBagItemIds.push(reader.int32());
                        } else
                            message.newBagItemIds.push(reader.int32());
                        break;
                    case 2:
                        if (!(message.itemCounts && message.itemCounts.length))
                            message.itemCounts = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.itemCounts.push(reader.int32());
                        } else
                            message.itemCounts.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an itemsUpdateInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.itemsUpdateInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.itemsUpdateInfo} itemsUpdateInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            itemsUpdateInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an itemsUpdateInfo message.
             * @function verify
             * @memberof com.msg.itemsUpdateInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            itemsUpdateInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.newBagItemIds != null && message.hasOwnProperty("newBagItemIds")) {
                    if (!Array.isArray(message.newBagItemIds))
                        return "newBagItemIds: array expected";
                    for (var i = 0; i < message.newBagItemIds.length; ++i)
                        if (!$util.isInteger(message.newBagItemIds[i]))
                            return "newBagItemIds: integer[] expected";
                }
                if (message.itemCounts != null && message.hasOwnProperty("itemCounts")) {
                    if (!Array.isArray(message.itemCounts))
                        return "itemCounts: array expected";
                    for (var i = 0; i < message.itemCounts.length; ++i)
                        if (!$util.isInteger(message.itemCounts[i]))
                            return "itemCounts: integer[] expected";
                }
                return null;
            };

            return itemsUpdateInfo;
        })();

        msg.signUpInfo = (function() {

            /**
             * Properties of a signUpInfo.
             * @memberof com.msg
             * @interface IsignUpInfo
             * @property {string} signUpInfo signUpInfo signUpInfo
             * @property {string} signUpState signUpInfo signUpState
             * @property {number} serverWeekDay signUpInfo serverWeekDay
             */

            /**
             * Constructs a new signUpInfo.
             * @memberof com.msg
             * @classdesc Represents a signUpInfo.
             * @implements IsignUpInfo
             * @constructor
             * @param {com.msg.IsignUpInfo=} [properties] Properties to set
             */
            function signUpInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * signUpInfo signUpInfo.
             * @member {string} signUpInfo
             * @memberof com.msg.signUpInfo
             * @instance
             */
            signUpInfo.prototype.signUpInfo = "";

            /**
             * signUpInfo signUpState.
             * @member {string} signUpState
             * @memberof com.msg.signUpInfo
             * @instance
             */
            signUpInfo.prototype.signUpState = "";

            /**
             * signUpInfo serverWeekDay.
             * @member {number} serverWeekDay
             * @memberof com.msg.signUpInfo
             * @instance
             */
            signUpInfo.prototype.serverWeekDay = 0;

            /**
             * Creates a new signUpInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.signUpInfo
             * @static
             * @param {com.msg.IsignUpInfo=} [properties] Properties to set
             * @returns {com.msg.signUpInfo} signUpInfo instance
             */
            signUpInfo.create = function create(properties) {
                return new signUpInfo(properties);
            };

            /**
             * Encodes the specified signUpInfo message. Does not implicitly {@link com.msg.signUpInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.signUpInfo
             * @static
             * @param {com.msg.IsignUpInfo} message signUpInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            signUpInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.signUpInfo);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.signUpState);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverWeekDay);
                return writer;
            };

            /**
             * Encodes the specified signUpInfo message, length delimited. Does not implicitly {@link com.msg.signUpInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.signUpInfo
             * @static
             * @param {com.msg.IsignUpInfo} message signUpInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            signUpInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a signUpInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.signUpInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.signUpInfo} signUpInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            signUpInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.signUpInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.signUpInfo = reader.string();
                        break;
                    case 2:
                        message.signUpState = reader.string();
                        break;
                    case 3:
                        message.serverWeekDay = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("signUpInfo"))
                    throw $util.ProtocolError("missing required 'signUpInfo'", { instance: message });
                if (!message.hasOwnProperty("signUpState"))
                    throw $util.ProtocolError("missing required 'signUpState'", { instance: message });
                if (!message.hasOwnProperty("serverWeekDay"))
                    throw $util.ProtocolError("missing required 'serverWeekDay'", { instance: message });
                return message;
            };

            /**
             * Decodes a signUpInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.signUpInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.signUpInfo} signUpInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            signUpInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a signUpInfo message.
             * @function verify
             * @memberof com.msg.signUpInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            signUpInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.signUpInfo))
                    return "signUpInfo: string expected";
                if (!$util.isString(message.signUpState))
                    return "signUpState: string expected";
                if (!$util.isInteger(message.serverWeekDay))
                    return "serverWeekDay: integer expected";
                return null;
            };

            return signUpInfo;
        })();

        msg.friendInfo = (function() {

            /**
             * Properties of a friendInfo.
             * @memberof com.msg
             * @interface IfriendInfo
             * @property {number|Long} playerID friendInfo playerID
             * @property {string} headUrl friendInfo headUrl
             * @property {string} nickName friendInfo nickName
             * @property {number} achievementValue friendInfo achievementValue
             */

            /**
             * Constructs a new friendInfo.
             * @memberof com.msg
             * @classdesc Represents a friendInfo.
             * @implements IfriendInfo
             * @constructor
             * @param {com.msg.IfriendInfo=} [properties] Properties to set
             */
            function friendInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * friendInfo playerID.
             * @member {number|Long} playerID
             * @memberof com.msg.friendInfo
             * @instance
             */
            friendInfo.prototype.playerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * friendInfo headUrl.
             * @member {string} headUrl
             * @memberof com.msg.friendInfo
             * @instance
             */
            friendInfo.prototype.headUrl = "";

            /**
             * friendInfo nickName.
             * @member {string} nickName
             * @memberof com.msg.friendInfo
             * @instance
             */
            friendInfo.prototype.nickName = "";

            /**
             * friendInfo achievementValue.
             * @member {number} achievementValue
             * @memberof com.msg.friendInfo
             * @instance
             */
            friendInfo.prototype.achievementValue = 0;

            /**
             * Creates a new friendInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.friendInfo
             * @static
             * @param {com.msg.IfriendInfo=} [properties] Properties to set
             * @returns {com.msg.friendInfo} friendInfo instance
             */
            friendInfo.create = function create(properties) {
                return new friendInfo(properties);
            };

            /**
             * Encodes the specified friendInfo message. Does not implicitly {@link com.msg.friendInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.friendInfo
             * @static
             * @param {com.msg.IfriendInfo} message friendInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            friendInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerID);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.headUrl);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.achievementValue);
                return writer;
            };

            /**
             * Encodes the specified friendInfo message, length delimited. Does not implicitly {@link com.msg.friendInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.friendInfo
             * @static
             * @param {com.msg.IfriendInfo} message friendInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            friendInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a friendInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.friendInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.friendInfo} friendInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            friendInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.friendInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.playerID = reader.int64();
                        break;
                    case 2:
                        message.headUrl = reader.string();
                        break;
                    case 3:
                        message.nickName = reader.string();
                        break;
                    case 4:
                        message.achievementValue = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("playerID"))
                    throw $util.ProtocolError("missing required 'playerID'", { instance: message });
                if (!message.hasOwnProperty("headUrl"))
                    throw $util.ProtocolError("missing required 'headUrl'", { instance: message });
                if (!message.hasOwnProperty("nickName"))
                    throw $util.ProtocolError("missing required 'nickName'", { instance: message });
                if (!message.hasOwnProperty("achievementValue"))
                    throw $util.ProtocolError("missing required 'achievementValue'", { instance: message });
                return message;
            };

            /**
             * Decodes a friendInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.friendInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.friendInfo} friendInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            friendInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a friendInfo message.
             * @function verify
             * @memberof com.msg.friendInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            friendInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.playerID) && !(message.playerID && $util.isInteger(message.playerID.low) && $util.isInteger(message.playerID.high)))
                    return "playerID: integer|Long expected";
                if (!$util.isString(message.headUrl))
                    return "headUrl: string expected";
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
                if (!$util.isInteger(message.achievementValue))
                    return "achievementValue: integer expected";
                return null;
            };

            return friendInfo;
        })();

        msg.achievementInfo = (function() {

            /**
             * Properties of an achievementInfo.
             * @memberof com.msg
             * @interface IachievementInfo
             * @property {number} id achievementInfo id
             * @property {number} progress achievementInfo progress
             * @property {number} phase achievementInfo phase
             * @property {number} state achievementInfo state
             */

            /**
             * Constructs a new achievementInfo.
             * @memberof com.msg
             * @classdesc Represents an achievementInfo.
             * @implements IachievementInfo
             * @constructor
             * @param {com.msg.IachievementInfo=} [properties] Properties to set
             */
            function achievementInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * achievementInfo id.
             * @member {number} id
             * @memberof com.msg.achievementInfo
             * @instance
             */
            achievementInfo.prototype.id = 0;

            /**
             * achievementInfo progress.
             * @member {number} progress
             * @memberof com.msg.achievementInfo
             * @instance
             */
            achievementInfo.prototype.progress = 0;

            /**
             * achievementInfo phase.
             * @member {number} phase
             * @memberof com.msg.achievementInfo
             * @instance
             */
            achievementInfo.prototype.phase = 0;

            /**
             * achievementInfo state.
             * @member {number} state
             * @memberof com.msg.achievementInfo
             * @instance
             */
            achievementInfo.prototype.state = 0;

            /**
             * Creates a new achievementInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.achievementInfo
             * @static
             * @param {com.msg.IachievementInfo=} [properties] Properties to set
             * @returns {com.msg.achievementInfo} achievementInfo instance
             */
            achievementInfo.create = function create(properties) {
                return new achievementInfo(properties);
            };

            /**
             * Encodes the specified achievementInfo message. Does not implicitly {@link com.msg.achievementInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.achievementInfo
             * @static
             * @param {com.msg.IachievementInfo} message achievementInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            achievementInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.progress);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.phase);
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
                return writer;
            };

            /**
             * Encodes the specified achievementInfo message, length delimited. Does not implicitly {@link com.msg.achievementInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.achievementInfo
             * @static
             * @param {com.msg.IachievementInfo} message achievementInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            achievementInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an achievementInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.achievementInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.achievementInfo} achievementInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            achievementInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.achievementInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.progress = reader.int32();
                        break;
                    case 3:
                        message.phase = reader.int32();
                        break;
                    case 4:
                        message.state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("progress"))
                    throw $util.ProtocolError("missing required 'progress'", { instance: message });
                if (!message.hasOwnProperty("phase"))
                    throw $util.ProtocolError("missing required 'phase'", { instance: message });
                if (!message.hasOwnProperty("state"))
                    throw $util.ProtocolError("missing required 'state'", { instance: message });
                return message;
            };

            /**
             * Decodes an achievementInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.achievementInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.achievementInfo} achievementInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            achievementInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an achievementInfo message.
             * @function verify
             * @memberof com.msg.achievementInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            achievementInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.progress))
                    return "progress: integer expected";
                if (!$util.isInteger(message.phase))
                    return "phase: integer expected";
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
                return null;
            };

            return achievementInfo;
        })();

        msg.taskInfo = (function() {

            /**
             * Properties of a taskInfo.
             * @memberof com.msg
             * @interface ItaskInfo
             * @property {number} id taskInfo id
             * @property {number} progress taskInfo progress
             * @property {number} state taskInfo state
             */

            /**
             * Constructs a new taskInfo.
             * @memberof com.msg
             * @classdesc Represents a taskInfo.
             * @implements ItaskInfo
             * @constructor
             * @param {com.msg.ItaskInfo=} [properties] Properties to set
             */
            function taskInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * taskInfo id.
             * @member {number} id
             * @memberof com.msg.taskInfo
             * @instance
             */
            taskInfo.prototype.id = 0;

            /**
             * taskInfo progress.
             * @member {number} progress
             * @memberof com.msg.taskInfo
             * @instance
             */
            taskInfo.prototype.progress = 0;

            /**
             * taskInfo state.
             * @member {number} state
             * @memberof com.msg.taskInfo
             * @instance
             */
            taskInfo.prototype.state = 0;

            /**
             * Creates a new taskInfo instance using the specified properties.
             * @function create
             * @memberof com.msg.taskInfo
             * @static
             * @param {com.msg.ItaskInfo=} [properties] Properties to set
             * @returns {com.msg.taskInfo} taskInfo instance
             */
            taskInfo.create = function create(properties) {
                return new taskInfo(properties);
            };

            /**
             * Encodes the specified taskInfo message. Does not implicitly {@link com.msg.taskInfo.verify|verify} messages.
             * @function encode
             * @memberof com.msg.taskInfo
             * @static
             * @param {com.msg.ItaskInfo} message taskInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            taskInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.progress);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
                return writer;
            };

            /**
             * Encodes the specified taskInfo message, length delimited. Does not implicitly {@link com.msg.taskInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof com.msg.taskInfo
             * @static
             * @param {com.msg.ItaskInfo} message taskInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            taskInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a taskInfo message from the specified reader or buffer.
             * @function decode
             * @memberof com.msg.taskInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {com.msg.taskInfo} taskInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            taskInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.msg.taskInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.progress = reader.int32();
                        break;
                    case 3:
                        message.state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("progress"))
                    throw $util.ProtocolError("missing required 'progress'", { instance: message });
                if (!message.hasOwnProperty("state"))
                    throw $util.ProtocolError("missing required 'state'", { instance: message });
                return message;
            };

            /**
             * Decodes a taskInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof com.msg.taskInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {com.msg.taskInfo} taskInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            taskInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a taskInfo message.
             * @function verify
             * @memberof com.msg.taskInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            taskInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.progress))
                    return "progress: integer expected";
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
                return null;
            };

            return taskInfo;
        })();

        return msg;
    })();

    return com;
})();