type Long = protobuf.Long;

/** Namespace com. */
declare namespace com {

    /** Namespace msg. */
    namespace msg {

        /** Properties of a c_getOpenId_800. */
        interface Ic_getOpenId_800 {

            /** c_getOpenId_800 appid */
            appid: string;

            /** c_getOpenId_800 sessionCode */
            sessionCode: string;
        }

        /** Represents a c_getOpenId_800. */
        class c_getOpenId_800 implements Ic_getOpenId_800 {

            /**
             * Constructs a new c_getOpenId_800.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getOpenId_800);

            /** c_getOpenId_800 appid. */
            public appid: string;

            /** c_getOpenId_800 sessionCode. */
            public sessionCode: string;

            /**
             * Creates a new c_getOpenId_800 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getOpenId_800 instance
             */
            public static create(properties?: com.msg.Ic_getOpenId_800): com.msg.c_getOpenId_800;

            /**
             * Encodes the specified c_getOpenId_800 message. Does not implicitly {@link com.msg.c_getOpenId_800.verify|verify} messages.
             * @param message c_getOpenId_800 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getOpenId_800, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getOpenId_800 message, length delimited. Does not implicitly {@link com.msg.c_getOpenId_800.verify|verify} messages.
             * @param message c_getOpenId_800 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getOpenId_800, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getOpenId_800 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getOpenId_800
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getOpenId_800;

            /**
             * Decodes a c_getOpenId_800 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getOpenId_800
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getOpenId_800;

            /**
             * Verifies a c_getOpenId_800 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getOpenId_801. */
        interface Is_getOpenId_801 {

            /** s_getOpenId_801 result */
            result: com.msg.ImsgResult;

            /** s_getOpenId_801 openId */
            openId: string;
        }

        /** Represents a s_getOpenId_801. */
        class s_getOpenId_801 implements Is_getOpenId_801 {

            /**
             * Constructs a new s_getOpenId_801.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getOpenId_801);

            /** s_getOpenId_801 result. */
            public result: com.msg.ImsgResult;

            /** s_getOpenId_801 openId. */
            public openId: string;

            /**
             * Creates a new s_getOpenId_801 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getOpenId_801 instance
             */
            public static create(properties?: com.msg.Is_getOpenId_801): com.msg.s_getOpenId_801;

            /**
             * Encodes the specified s_getOpenId_801 message. Does not implicitly {@link com.msg.s_getOpenId_801.verify|verify} messages.
             * @param message s_getOpenId_801 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getOpenId_801, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getOpenId_801 message, length delimited. Does not implicitly {@link com.msg.s_getOpenId_801.verify|verify} messages.
             * @param message s_getOpenId_801 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getOpenId_801, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getOpenId_801 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getOpenId_801
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getOpenId_801;

            /**
             * Decodes a s_getOpenId_801 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getOpenId_801
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getOpenId_801;

            /**
             * Verifies a s_getOpenId_801 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_chooseServer_998. */
        interface Ic_chooseServer_998 {

            /** c_chooseServer_998 openID */
            openID: string;
        }

        /** Represents a c_chooseServer_998. */
        class c_chooseServer_998 implements Ic_chooseServer_998 {

            /**
             * Constructs a new c_chooseServer_998.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_chooseServer_998);

            /** c_chooseServer_998 openID. */
            public openID: string;

            /**
             * Creates a new c_chooseServer_998 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_chooseServer_998 instance
             */
            public static create(properties?: com.msg.Ic_chooseServer_998): com.msg.c_chooseServer_998;

            /**
             * Encodes the specified c_chooseServer_998 message. Does not implicitly {@link com.msg.c_chooseServer_998.verify|verify} messages.
             * @param message c_chooseServer_998 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_chooseServer_998, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_chooseServer_998 message, length delimited. Does not implicitly {@link com.msg.c_chooseServer_998.verify|verify} messages.
             * @param message c_chooseServer_998 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_chooseServer_998, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_chooseServer_998 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_chooseServer_998
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_chooseServer_998;

            /**
             * Decodes a c_chooseServer_998 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_chooseServer_998
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_chooseServer_998;

            /**
             * Verifies a c_chooseServer_998 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_chooseServer_999. */
        interface Is_chooseServer_999 {

            /** s_chooseServer_999 result */
            result: com.msg.ImsgResult;

            /** s_chooseServer_999 serverAddress */
            serverAddress: string;
        }

        /** Represents a s_chooseServer_999. */
        class s_chooseServer_999 implements Is_chooseServer_999 {

            /**
             * Constructs a new s_chooseServer_999.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_chooseServer_999);

            /** s_chooseServer_999 result. */
            public result: com.msg.ImsgResult;

            /** s_chooseServer_999 serverAddress. */
            public serverAddress: string;

            /**
             * Creates a new s_chooseServer_999 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_chooseServer_999 instance
             */
            public static create(properties?: com.msg.Is_chooseServer_999): com.msg.s_chooseServer_999;

            /**
             * Encodes the specified s_chooseServer_999 message. Does not implicitly {@link com.msg.s_chooseServer_999.verify|verify} messages.
             * @param message s_chooseServer_999 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_chooseServer_999, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_chooseServer_999 message, length delimited. Does not implicitly {@link com.msg.s_chooseServer_999.verify|verify} messages.
             * @param message s_chooseServer_999 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_chooseServer_999, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_chooseServer_999 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_chooseServer_999
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_chooseServer_999;

            /**
             * Decodes a s_chooseServer_999 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_chooseServer_999
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_chooseServer_999;

            /**
             * Verifies a s_chooseServer_999 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_userLogin_1000. */
        interface Ic_userLogin_1000 {

            /** c_userLogin_1000 openID */
            openID: string;

            /** c_userLogin_1000 nickName */
            nickName?: (string|null);

            /** c_userLogin_1000 imageUrl */
            imageUrl?: (string|null);

            /** c_userLogin_1000 invitorInfo */
            invitorInfo?: (com.msg.IinvitorInfo|null);
        }

        /** Represents a c_userLogin_1000. */
        class c_userLogin_1000 implements Ic_userLogin_1000 {

            /**
             * Constructs a new c_userLogin_1000.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_userLogin_1000);

            /** c_userLogin_1000 openID. */
            public openID: string;

            /** c_userLogin_1000 nickName. */
            public nickName: string;

            /** c_userLogin_1000 imageUrl. */
            public imageUrl: string;

            /** c_userLogin_1000 invitorInfo. */
            public invitorInfo?: (com.msg.IinvitorInfo|null);

            /**
             * Creates a new c_userLogin_1000 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_userLogin_1000 instance
             */
            public static create(properties?: com.msg.Ic_userLogin_1000): com.msg.c_userLogin_1000;

            /**
             * Encodes the specified c_userLogin_1000 message. Does not implicitly {@link com.msg.c_userLogin_1000.verify|verify} messages.
             * @param message c_userLogin_1000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_userLogin_1000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_userLogin_1000 message, length delimited. Does not implicitly {@link com.msg.c_userLogin_1000.verify|verify} messages.
             * @param message c_userLogin_1000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_userLogin_1000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_userLogin_1000 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_userLogin_1000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_userLogin_1000;

            /**
             * Decodes a c_userLogin_1000 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_userLogin_1000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_userLogin_1000;

            /**
             * Verifies a c_userLogin_1000 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_userLogin_1001. */
        interface Is_userLogin_1001 {

            /** s_userLogin_1001 result */
            result: com.msg.ImsgResult;

            /** s_userLogin_1001 playerInfo */
            playerInfo?: (com.msg.IplayerInfo|null);

            /** s_userLogin_1001 openID */
            openID?: (string|null);
        }

        /** Represents a s_userLogin_1001. */
        class s_userLogin_1001 implements Is_userLogin_1001 {

            /**
             * Constructs a new s_userLogin_1001.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_userLogin_1001);

            /** s_userLogin_1001 result. */
            public result: com.msg.ImsgResult;

            /** s_userLogin_1001 playerInfo. */
            public playerInfo?: (com.msg.IplayerInfo|null);

            /** s_userLogin_1001 openID. */
            public openID: string;

            /**
             * Creates a new s_userLogin_1001 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_userLogin_1001 instance
             */
            public static create(properties?: com.msg.Is_userLogin_1001): com.msg.s_userLogin_1001;

            /**
             * Encodes the specified s_userLogin_1001 message. Does not implicitly {@link com.msg.s_userLogin_1001.verify|verify} messages.
             * @param message s_userLogin_1001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_userLogin_1001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_userLogin_1001 message, length delimited. Does not implicitly {@link com.msg.s_userLogin_1001.verify|verify} messages.
             * @param message s_userLogin_1001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_userLogin_1001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_userLogin_1001 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_userLogin_1001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_userLogin_1001;

            /**
             * Decodes a s_userLogin_1001 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_userLogin_1001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_userLogin_1001;

            /**
             * Verifies a s_userLogin_1001 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_setNewbieStep_1100. */
        interface Ic_setNewbieStep_1100 {

            /** c_setNewbieStep_1100 playerID */
            playerID: (number|Long);

            /** c_setNewbieStep_1100 newStepId */
            newStepId: number;
        }

        /** Represents a c_setNewbieStep_1100. */
        class c_setNewbieStep_1100 implements Ic_setNewbieStep_1100 {

            /**
             * Constructs a new c_setNewbieStep_1100.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_setNewbieStep_1100);

            /** c_setNewbieStep_1100 playerID. */
            public playerID: (number|Long);

            /** c_setNewbieStep_1100 newStepId. */
            public newStepId: number;

            /**
             * Creates a new c_setNewbieStep_1100 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_setNewbieStep_1100 instance
             */
            public static create(properties?: com.msg.Ic_setNewbieStep_1100): com.msg.c_setNewbieStep_1100;

            /**
             * Encodes the specified c_setNewbieStep_1100 message. Does not implicitly {@link com.msg.c_setNewbieStep_1100.verify|verify} messages.
             * @param message c_setNewbieStep_1100 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_setNewbieStep_1100, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_setNewbieStep_1100 message, length delimited. Does not implicitly {@link com.msg.c_setNewbieStep_1100.verify|verify} messages.
             * @param message c_setNewbieStep_1100 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_setNewbieStep_1100, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_setNewbieStep_1100 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_setNewbieStep_1100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_setNewbieStep_1100;

            /**
             * Decodes a c_setNewbieStep_1100 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_setNewbieStep_1100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_setNewbieStep_1100;

            /**
             * Verifies a c_setNewbieStep_1100 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_setNewbieStep_1101. */
        interface Is_setNewbieStep_1101 {

            /** s_setNewbieStep_1101 result */
            result: com.msg.ImsgResult;
        }

        /** Represents a s_setNewbieStep_1101. */
        class s_setNewbieStep_1101 implements Is_setNewbieStep_1101 {

            /**
             * Constructs a new s_setNewbieStep_1101.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_setNewbieStep_1101);

            /** s_setNewbieStep_1101 result. */
            public result: com.msg.ImsgResult;

            /**
             * Creates a new s_setNewbieStep_1101 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_setNewbieStep_1101 instance
             */
            public static create(properties?: com.msg.Is_setNewbieStep_1101): com.msg.s_setNewbieStep_1101;

            /**
             * Encodes the specified s_setNewbieStep_1101 message. Does not implicitly {@link com.msg.s_setNewbieStep_1101.verify|verify} messages.
             * @param message s_setNewbieStep_1101 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_setNewbieStep_1101, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_setNewbieStep_1101 message, length delimited. Does not implicitly {@link com.msg.s_setNewbieStep_1101.verify|verify} messages.
             * @param message s_setNewbieStep_1101 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_setNewbieStep_1101, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_setNewbieStep_1101 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_setNewbieStep_1101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_setNewbieStep_1101;

            /**
             * Decodes a s_setNewbieStep_1101 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_setNewbieStep_1101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_setNewbieStep_1101;

            /**
             * Verifies a s_setNewbieStep_1101 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_getSignUpInfo_4000. */
        interface Ic_getSignUpInfo_4000 {

            /** c_getSignUpInfo_4000 playerID */
            playerID: (number|Long);
        }

        /** Represents a c_getSignUpInfo_4000. */
        class c_getSignUpInfo_4000 implements Ic_getSignUpInfo_4000 {

            /**
             * Constructs a new c_getSignUpInfo_4000.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getSignUpInfo_4000);

            /** c_getSignUpInfo_4000 playerID. */
            public playerID: (number|Long);

            /**
             * Creates a new c_getSignUpInfo_4000 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getSignUpInfo_4000 instance
             */
            public static create(properties?: com.msg.Ic_getSignUpInfo_4000): com.msg.c_getSignUpInfo_4000;

            /**
             * Encodes the specified c_getSignUpInfo_4000 message. Does not implicitly {@link com.msg.c_getSignUpInfo_4000.verify|verify} messages.
             * @param message c_getSignUpInfo_4000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getSignUpInfo_4000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getSignUpInfo_4000 message, length delimited. Does not implicitly {@link com.msg.c_getSignUpInfo_4000.verify|verify} messages.
             * @param message c_getSignUpInfo_4000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getSignUpInfo_4000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getSignUpInfo_4000 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getSignUpInfo_4000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getSignUpInfo_4000;

            /**
             * Decodes a c_getSignUpInfo_4000 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getSignUpInfo_4000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getSignUpInfo_4000;

            /**
             * Verifies a c_getSignUpInfo_4000 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getSignUpInfo_4001. */
        interface Is_getSignUpInfo_4001 {

            /** s_getSignUpInfo_4001 result */
            result: com.msg.ImsgResult;

            /** s_getSignUpInfo_4001 signUpInfo */
            signUpInfo?: (com.msg.IsignUpInfo|null);
        }

        /** Represents a s_getSignUpInfo_4001. */
        class s_getSignUpInfo_4001 implements Is_getSignUpInfo_4001 {

            /**
             * Constructs a new s_getSignUpInfo_4001.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getSignUpInfo_4001);

            /** s_getSignUpInfo_4001 result. */
            public result: com.msg.ImsgResult;

            /** s_getSignUpInfo_4001 signUpInfo. */
            public signUpInfo?: (com.msg.IsignUpInfo|null);

            /**
             * Creates a new s_getSignUpInfo_4001 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getSignUpInfo_4001 instance
             */
            public static create(properties?: com.msg.Is_getSignUpInfo_4001): com.msg.s_getSignUpInfo_4001;

            /**
             * Encodes the specified s_getSignUpInfo_4001 message. Does not implicitly {@link com.msg.s_getSignUpInfo_4001.verify|verify} messages.
             * @param message s_getSignUpInfo_4001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getSignUpInfo_4001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getSignUpInfo_4001 message, length delimited. Does not implicitly {@link com.msg.s_getSignUpInfo_4001.verify|verify} messages.
             * @param message s_getSignUpInfo_4001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getSignUpInfo_4001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getSignUpInfo_4001 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getSignUpInfo_4001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getSignUpInfo_4001;

            /**
             * Decodes a s_getSignUpInfo_4001 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getSignUpInfo_4001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getSignUpInfo_4001;

            /**
             * Verifies a s_getSignUpInfo_4001 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_getSignUpReward_4002. */
        interface Ic_getSignUpReward_4002 {

            /** c_getSignUpReward_4002 playerID */
            playerID: (number|Long);
        }

        /** Represents a c_getSignUpReward_4002. */
        class c_getSignUpReward_4002 implements Ic_getSignUpReward_4002 {

            /**
             * Constructs a new c_getSignUpReward_4002.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getSignUpReward_4002);

            /** c_getSignUpReward_4002 playerID. */
            public playerID: (number|Long);

            /**
             * Creates a new c_getSignUpReward_4002 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getSignUpReward_4002 instance
             */
            public static create(properties?: com.msg.Ic_getSignUpReward_4002): com.msg.c_getSignUpReward_4002;

            /**
             * Encodes the specified c_getSignUpReward_4002 message. Does not implicitly {@link com.msg.c_getSignUpReward_4002.verify|verify} messages.
             * @param message c_getSignUpReward_4002 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getSignUpReward_4002, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getSignUpReward_4002 message, length delimited. Does not implicitly {@link com.msg.c_getSignUpReward_4002.verify|verify} messages.
             * @param message c_getSignUpReward_4002 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getSignUpReward_4002, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getSignUpReward_4002 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getSignUpReward_4002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getSignUpReward_4002;

            /**
             * Decodes a c_getSignUpReward_4002 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getSignUpReward_4002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getSignUpReward_4002;

            /**
             * Verifies a c_getSignUpReward_4002 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getSignUpReward_4003. */
        interface Is_getSignUpReward_4003 {

            /** s_getSignUpReward_4003 result */
            result: com.msg.ImsgResult;

            /** s_getSignUpReward_4003 getReward */
            getReward?: (com.msg.IgetReward|null);
        }

        /** Represents a s_getSignUpReward_4003. */
        class s_getSignUpReward_4003 implements Is_getSignUpReward_4003 {

            /**
             * Constructs a new s_getSignUpReward_4003.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getSignUpReward_4003);

            /** s_getSignUpReward_4003 result. */
            public result: com.msg.ImsgResult;

            /** s_getSignUpReward_4003 getReward. */
            public getReward?: (com.msg.IgetReward|null);

            /**
             * Creates a new s_getSignUpReward_4003 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getSignUpReward_4003 instance
             */
            public static create(properties?: com.msg.Is_getSignUpReward_4003): com.msg.s_getSignUpReward_4003;

            /**
             * Encodes the specified s_getSignUpReward_4003 message. Does not implicitly {@link com.msg.s_getSignUpReward_4003.verify|verify} messages.
             * @param message s_getSignUpReward_4003 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getSignUpReward_4003, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getSignUpReward_4003 message, length delimited. Does not implicitly {@link com.msg.s_getSignUpReward_4003.verify|verify} messages.
             * @param message s_getSignUpReward_4003 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getSignUpReward_4003, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getSignUpReward_4003 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getSignUpReward_4003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getSignUpReward_4003;

            /**
             * Decodes a s_getSignUpReward_4003 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getSignUpReward_4003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getSignUpReward_4003;

            /**
             * Verifies a s_getSignUpReward_4003 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_purchaseItem_5000. */
        interface Ic_purchaseItem_5000 {

            /** c_purchaseItem_5000 playerID */
            playerID: (number|Long);

            /** c_purchaseItem_5000 shopItemId */
            shopItemId: number;
        }

        /** Represents a c_purchaseItem_5000. */
        class c_purchaseItem_5000 implements Ic_purchaseItem_5000 {

            /**
             * Constructs a new c_purchaseItem_5000.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_purchaseItem_5000);

            /** c_purchaseItem_5000 playerID. */
            public playerID: (number|Long);

            /** c_purchaseItem_5000 shopItemId. */
            public shopItemId: number;

            /**
             * Creates a new c_purchaseItem_5000 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_purchaseItem_5000 instance
             */
            public static create(properties?: com.msg.Ic_purchaseItem_5000): com.msg.c_purchaseItem_5000;

            /**
             * Encodes the specified c_purchaseItem_5000 message. Does not implicitly {@link com.msg.c_purchaseItem_5000.verify|verify} messages.
             * @param message c_purchaseItem_5000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_purchaseItem_5000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_purchaseItem_5000 message, length delimited. Does not implicitly {@link com.msg.c_purchaseItem_5000.verify|verify} messages.
             * @param message c_purchaseItem_5000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_purchaseItem_5000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_purchaseItem_5000 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_purchaseItem_5000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_purchaseItem_5000;

            /**
             * Decodes a c_purchaseItem_5000 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_purchaseItem_5000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_purchaseItem_5000;

            /**
             * Verifies a c_purchaseItem_5000 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_purchaseItem_5001. */
        interface Is_purchaseItem_5001 {

            /** s_purchaseItem_5001 result */
            result: com.msg.ImsgResult;

            /** s_purchaseItem_5001 shopItemId */
            shopItemId?: (number|null);

            /** s_purchaseItem_5001 itemsUpdateInfo */
            itemsUpdateInfo?: (com.msg.IitemsUpdateInfo|null);
        }

        /** Represents a s_purchaseItem_5001. */
        class s_purchaseItem_5001 implements Is_purchaseItem_5001 {

            /**
             * Constructs a new s_purchaseItem_5001.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_purchaseItem_5001);

            /** s_purchaseItem_5001 result. */
            public result: com.msg.ImsgResult;

            /** s_purchaseItem_5001 shopItemId. */
            public shopItemId: number;

            /** s_purchaseItem_5001 itemsUpdateInfo. */
            public itemsUpdateInfo?: (com.msg.IitemsUpdateInfo|null);

            /**
             * Creates a new s_purchaseItem_5001 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_purchaseItem_5001 instance
             */
            public static create(properties?: com.msg.Is_purchaseItem_5001): com.msg.s_purchaseItem_5001;

            /**
             * Encodes the specified s_purchaseItem_5001 message. Does not implicitly {@link com.msg.s_purchaseItem_5001.verify|verify} messages.
             * @param message s_purchaseItem_5001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_purchaseItem_5001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_purchaseItem_5001 message, length delimited. Does not implicitly {@link com.msg.s_purchaseItem_5001.verify|verify} messages.
             * @param message s_purchaseItem_5001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_purchaseItem_5001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_purchaseItem_5001 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_purchaseItem_5001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_purchaseItem_5001;

            /**
             * Decodes a s_purchaseItem_5001 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_purchaseItem_5001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_purchaseItem_5001;

            /**
             * Verifies a s_purchaseItem_5001 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_getDailyTaskInfo_6001. */
        interface Ic_getDailyTaskInfo_6001 {

            /** c_getDailyTaskInfo_6001 playerID */
            playerID: (number|Long);
        }

        /** Represents a c_getDailyTaskInfo_6001. */
        class c_getDailyTaskInfo_6001 implements Ic_getDailyTaskInfo_6001 {

            /**
             * Constructs a new c_getDailyTaskInfo_6001.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getDailyTaskInfo_6001);

            /** c_getDailyTaskInfo_6001 playerID. */
            public playerID: (number|Long);

            /**
             * Creates a new c_getDailyTaskInfo_6001 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getDailyTaskInfo_6001 instance
             */
            public static create(properties?: com.msg.Ic_getDailyTaskInfo_6001): com.msg.c_getDailyTaskInfo_6001;

            /**
             * Encodes the specified c_getDailyTaskInfo_6001 message. Does not implicitly {@link com.msg.c_getDailyTaskInfo_6001.verify|verify} messages.
             * @param message c_getDailyTaskInfo_6001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getDailyTaskInfo_6001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getDailyTaskInfo_6001 message, length delimited. Does not implicitly {@link com.msg.c_getDailyTaskInfo_6001.verify|verify} messages.
             * @param message c_getDailyTaskInfo_6001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getDailyTaskInfo_6001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getDailyTaskInfo_6001 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getDailyTaskInfo_6001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getDailyTaskInfo_6001;

            /**
             * Decodes a c_getDailyTaskInfo_6001 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getDailyTaskInfo_6001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getDailyTaskInfo_6001;

            /**
             * Verifies a c_getDailyTaskInfo_6001 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getDailyTaskInfo_6002. */
        interface Is_getDailyTaskInfo_6002 {

            /** s_getDailyTaskInfo_6002 result */
            result: com.msg.ImsgResult;

            /** s_getDailyTaskInfo_6002 taskInfo */
            taskInfo?: (com.msg.ItaskInfo[]|null);
        }

        /** Represents a s_getDailyTaskInfo_6002. */
        class s_getDailyTaskInfo_6002 implements Is_getDailyTaskInfo_6002 {

            /**
             * Constructs a new s_getDailyTaskInfo_6002.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getDailyTaskInfo_6002);

            /** s_getDailyTaskInfo_6002 result. */
            public result: com.msg.ImsgResult;

            /** s_getDailyTaskInfo_6002 taskInfo. */
            public taskInfo: com.msg.ItaskInfo[];

            /**
             * Creates a new s_getDailyTaskInfo_6002 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getDailyTaskInfo_6002 instance
             */
            public static create(properties?: com.msg.Is_getDailyTaskInfo_6002): com.msg.s_getDailyTaskInfo_6002;

            /**
             * Encodes the specified s_getDailyTaskInfo_6002 message. Does not implicitly {@link com.msg.s_getDailyTaskInfo_6002.verify|verify} messages.
             * @param message s_getDailyTaskInfo_6002 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getDailyTaskInfo_6002, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getDailyTaskInfo_6002 message, length delimited. Does not implicitly {@link com.msg.s_getDailyTaskInfo_6002.verify|verify} messages.
             * @param message s_getDailyTaskInfo_6002 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getDailyTaskInfo_6002, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getDailyTaskInfo_6002 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getDailyTaskInfo_6002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getDailyTaskInfo_6002;

            /**
             * Decodes a s_getDailyTaskInfo_6002 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getDailyTaskInfo_6002
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getDailyTaskInfo_6002;

            /**
             * Verifies a s_getDailyTaskInfo_6002 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_getAchievementInfo_6003. */
        interface Ic_getAchievementInfo_6003 {

            /** c_getAchievementInfo_6003 playerID */
            playerID: (number|Long);
        }

        /** Represents a c_getAchievementInfo_6003. */
        class c_getAchievementInfo_6003 implements Ic_getAchievementInfo_6003 {

            /**
             * Constructs a new c_getAchievementInfo_6003.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getAchievementInfo_6003);

            /** c_getAchievementInfo_6003 playerID. */
            public playerID: (number|Long);

            /**
             * Creates a new c_getAchievementInfo_6003 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getAchievementInfo_6003 instance
             */
            public static create(properties?: com.msg.Ic_getAchievementInfo_6003): com.msg.c_getAchievementInfo_6003;

            /**
             * Encodes the specified c_getAchievementInfo_6003 message. Does not implicitly {@link com.msg.c_getAchievementInfo_6003.verify|verify} messages.
             * @param message c_getAchievementInfo_6003 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getAchievementInfo_6003, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getAchievementInfo_6003 message, length delimited. Does not implicitly {@link com.msg.c_getAchievementInfo_6003.verify|verify} messages.
             * @param message c_getAchievementInfo_6003 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getAchievementInfo_6003, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getAchievementInfo_6003 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getAchievementInfo_6003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getAchievementInfo_6003;

            /**
             * Decodes a c_getAchievementInfo_6003 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getAchievementInfo_6003
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getAchievementInfo_6003;

            /**
             * Verifies a c_getAchievementInfo_6003 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getAchievementInfo_6004. */
        interface Is_getAchievementInfo_6004 {

            /** s_getAchievementInfo_6004 result */
            result: com.msg.ImsgResult;

            /** s_getAchievementInfo_6004 achievementPoint */
            achievementPoint?: (number|null);

            /** s_getAchievementInfo_6004 hasJoinPrizeDraw */
            hasJoinPrizeDraw?: (number|null);

            /** s_getAchievementInfo_6004 achievementInfo */
            achievementInfo?: (com.msg.IachievementInfo[]|null);

            /** s_getAchievementInfo_6004 secLeftToPrizeDraw */
            secLeftToPrizeDraw?: (number|Long|null);
        }

        /** Represents a s_getAchievementInfo_6004. */
        class s_getAchievementInfo_6004 implements Is_getAchievementInfo_6004 {

            /**
             * Constructs a new s_getAchievementInfo_6004.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getAchievementInfo_6004);

            /** s_getAchievementInfo_6004 result. */
            public result: com.msg.ImsgResult;

            /** s_getAchievementInfo_6004 achievementPoint. */
            public achievementPoint: number;

            /** s_getAchievementInfo_6004 hasJoinPrizeDraw. */
            public hasJoinPrizeDraw: number;

            /** s_getAchievementInfo_6004 achievementInfo. */
            public achievementInfo: com.msg.IachievementInfo[];

            /** s_getAchievementInfo_6004 secLeftToPrizeDraw. */
            public secLeftToPrizeDraw: (number|Long);

            /**
             * Creates a new s_getAchievementInfo_6004 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getAchievementInfo_6004 instance
             */
            public static create(properties?: com.msg.Is_getAchievementInfo_6004): com.msg.s_getAchievementInfo_6004;

            /**
             * Encodes the specified s_getAchievementInfo_6004 message. Does not implicitly {@link com.msg.s_getAchievementInfo_6004.verify|verify} messages.
             * @param message s_getAchievementInfo_6004 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getAchievementInfo_6004, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getAchievementInfo_6004 message, length delimited. Does not implicitly {@link com.msg.s_getAchievementInfo_6004.verify|verify} messages.
             * @param message s_getAchievementInfo_6004 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getAchievementInfo_6004, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getAchievementInfo_6004 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getAchievementInfo_6004
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getAchievementInfo_6004;

            /**
             * Decodes a s_getAchievementInfo_6004 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getAchievementInfo_6004
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getAchievementInfo_6004;

            /**
             * Verifies a s_getAchievementInfo_6004 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_getAchievementReward_6005. */
        interface Ic_getAchievementReward_6005 {

            /** c_getAchievementReward_6005 playerID */
            playerID: (number|Long);

            /** c_getAchievementReward_6005 achievementId */
            achievementId: number;
        }

        /** Represents a c_getAchievementReward_6005. */
        class c_getAchievementReward_6005 implements Ic_getAchievementReward_6005 {

            /**
             * Constructs a new c_getAchievementReward_6005.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getAchievementReward_6005);

            /** c_getAchievementReward_6005 playerID. */
            public playerID: (number|Long);

            /** c_getAchievementReward_6005 achievementId. */
            public achievementId: number;

            /**
             * Creates a new c_getAchievementReward_6005 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getAchievementReward_6005 instance
             */
            public static create(properties?: com.msg.Ic_getAchievementReward_6005): com.msg.c_getAchievementReward_6005;

            /**
             * Encodes the specified c_getAchievementReward_6005 message. Does not implicitly {@link com.msg.c_getAchievementReward_6005.verify|verify} messages.
             * @param message c_getAchievementReward_6005 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getAchievementReward_6005, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getAchievementReward_6005 message, length delimited. Does not implicitly {@link com.msg.c_getAchievementReward_6005.verify|verify} messages.
             * @param message c_getAchievementReward_6005 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getAchievementReward_6005, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getAchievementReward_6005 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getAchievementReward_6005
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getAchievementReward_6005;

            /**
             * Decodes a c_getAchievementReward_6005 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getAchievementReward_6005
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getAchievementReward_6005;

            /**
             * Verifies a c_getAchievementReward_6005 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getAchievementReward_6006. */
        interface Is_getAchievementReward_6006 {

            /** s_getAchievementReward_6006 result */
            result: com.msg.ImsgResult;

            /** s_getAchievementReward_6006 achievementInfo */
            achievementInfo?: (com.msg.IachievementInfo|null);

            /** s_getAchievementReward_6006 addAchievementPoint */
            addAchievementPoint?: (number|null);
        }

        /** Represents a s_getAchievementReward_6006. */
        class s_getAchievementReward_6006 implements Is_getAchievementReward_6006 {

            /**
             * Constructs a new s_getAchievementReward_6006.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getAchievementReward_6006);

            /** s_getAchievementReward_6006 result. */
            public result: com.msg.ImsgResult;

            /** s_getAchievementReward_6006 achievementInfo. */
            public achievementInfo?: (com.msg.IachievementInfo|null);

            /** s_getAchievementReward_6006 addAchievementPoint. */
            public addAchievementPoint: number;

            /**
             * Creates a new s_getAchievementReward_6006 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getAchievementReward_6006 instance
             */
            public static create(properties?: com.msg.Is_getAchievementReward_6006): com.msg.s_getAchievementReward_6006;

            /**
             * Encodes the specified s_getAchievementReward_6006 message. Does not implicitly {@link com.msg.s_getAchievementReward_6006.verify|verify} messages.
             * @param message s_getAchievementReward_6006 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getAchievementReward_6006, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getAchievementReward_6006 message, length delimited. Does not implicitly {@link com.msg.s_getAchievementReward_6006.verify|verify} messages.
             * @param message s_getAchievementReward_6006 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getAchievementReward_6006, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getAchievementReward_6006 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getAchievementReward_6006
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getAchievementReward_6006;

            /**
             * Decodes a s_getAchievementReward_6006 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getAchievementReward_6006
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getAchievementReward_6006;

            /**
             * Verifies a s_getAchievementReward_6006 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_getTaskReward_6007. */
        interface Ic_getTaskReward_6007 {

            /** c_getTaskReward_6007 playerID */
            playerID: (number|Long);

            /** c_getTaskReward_6007 taskId */
            taskId: number;
        }

        /** Represents a c_getTaskReward_6007. */
        class c_getTaskReward_6007 implements Ic_getTaskReward_6007 {

            /**
             * Constructs a new c_getTaskReward_6007.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getTaskReward_6007);

            /** c_getTaskReward_6007 playerID. */
            public playerID: (number|Long);

            /** c_getTaskReward_6007 taskId. */
            public taskId: number;

            /**
             * Creates a new c_getTaskReward_6007 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getTaskReward_6007 instance
             */
            public static create(properties?: com.msg.Ic_getTaskReward_6007): com.msg.c_getTaskReward_6007;

            /**
             * Encodes the specified c_getTaskReward_6007 message. Does not implicitly {@link com.msg.c_getTaskReward_6007.verify|verify} messages.
             * @param message c_getTaskReward_6007 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getTaskReward_6007, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getTaskReward_6007 message, length delimited. Does not implicitly {@link com.msg.c_getTaskReward_6007.verify|verify} messages.
             * @param message c_getTaskReward_6007 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getTaskReward_6007, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getTaskReward_6007 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getTaskReward_6007
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getTaskReward_6007;

            /**
             * Decodes a c_getTaskReward_6007 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getTaskReward_6007
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getTaskReward_6007;

            /**
             * Verifies a c_getTaskReward_6007 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getTaskReward_6008. */
        interface Is_getTaskReward_6008 {

            /** s_getTaskReward_6008 result */
            result: com.msg.ImsgResult;

            /** s_getTaskReward_6008 taskId */
            taskId: number;

            /** s_getTaskReward_6008 getReward */
            getReward?: (com.msg.IgetReward|null);
        }

        /** Represents a s_getTaskReward_6008. */
        class s_getTaskReward_6008 implements Is_getTaskReward_6008 {

            /**
             * Constructs a new s_getTaskReward_6008.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getTaskReward_6008);

            /** s_getTaskReward_6008 result. */
            public result: com.msg.ImsgResult;

            /** s_getTaskReward_6008 taskId. */
            public taskId: number;

            /** s_getTaskReward_6008 getReward. */
            public getReward?: (com.msg.IgetReward|null);

            /**
             * Creates a new s_getTaskReward_6008 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getTaskReward_6008 instance
             */
            public static create(properties?: com.msg.Is_getTaskReward_6008): com.msg.s_getTaskReward_6008;

            /**
             * Encodes the specified s_getTaskReward_6008 message. Does not implicitly {@link com.msg.s_getTaskReward_6008.verify|verify} messages.
             * @param message s_getTaskReward_6008 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getTaskReward_6008, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getTaskReward_6008 message, length delimited. Does not implicitly {@link com.msg.s_getTaskReward_6008.verify|verify} messages.
             * @param message s_getTaskReward_6008 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getTaskReward_6008, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getTaskReward_6008 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getTaskReward_6008
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getTaskReward_6008;

            /**
             * Decodes a s_getTaskReward_6008 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getTaskReward_6008
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getTaskReward_6008;

            /**
             * Verifies a s_getTaskReward_6008 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_assemble_7000. */
        interface Ic_assemble_7000 {

            /** c_assemble_7000 playerID */
            playerID: (number|Long);

            /** c_assemble_7000 actionType */
            actionType: number;

            /** c_assemble_7000 formulaOrItemId */
            formulaOrItemId: number;
        }

        /** Represents a c_assemble_7000. */
        class c_assemble_7000 implements Ic_assemble_7000 {

            /**
             * Constructs a new c_assemble_7000.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_assemble_7000);

            /** c_assemble_7000 playerID. */
            public playerID: (number|Long);

            /** c_assemble_7000 actionType. */
            public actionType: number;

            /** c_assemble_7000 formulaOrItemId. */
            public formulaOrItemId: number;

            /**
             * Creates a new c_assemble_7000 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_assemble_7000 instance
             */
            public static create(properties?: com.msg.Ic_assemble_7000): com.msg.c_assemble_7000;

            /**
             * Encodes the specified c_assemble_7000 message. Does not implicitly {@link com.msg.c_assemble_7000.verify|verify} messages.
             * @param message c_assemble_7000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_assemble_7000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_assemble_7000 message, length delimited. Does not implicitly {@link com.msg.c_assemble_7000.verify|verify} messages.
             * @param message c_assemble_7000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_assemble_7000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_assemble_7000 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_assemble_7000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_assemble_7000;

            /**
             * Decodes a c_assemble_7000 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_assemble_7000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_assemble_7000;

            /**
             * Verifies a c_assemble_7000 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_assemble_7001. */
        interface Is_assemble_7001 {

            /** s_assemble_7001 result */
            result: com.msg.ImsgResult;

            /** s_assemble_7001 itemsUpdateInfo */
            itemsUpdateInfo?: (com.msg.IitemsUpdateInfo|null);
        }

        /** Represents a s_assemble_7001. */
        class s_assemble_7001 implements Is_assemble_7001 {

            /**
             * Constructs a new s_assemble_7001.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_assemble_7001);

            /** s_assemble_7001 result. */
            public result: com.msg.ImsgResult;

            /** s_assemble_7001 itemsUpdateInfo. */
            public itemsUpdateInfo?: (com.msg.IitemsUpdateInfo|null);

            /**
             * Creates a new s_assemble_7001 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_assemble_7001 instance
             */
            public static create(properties?: com.msg.Is_assemble_7001): com.msg.s_assemble_7001;

            /**
             * Encodes the specified s_assemble_7001 message. Does not implicitly {@link com.msg.s_assemble_7001.verify|verify} messages.
             * @param message s_assemble_7001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_assemble_7001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_assemble_7001 message, length delimited. Does not implicitly {@link com.msg.s_assemble_7001.verify|verify} messages.
             * @param message s_assemble_7001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_assemble_7001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_assemble_7001 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_assemble_7001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_assemble_7001;

            /**
             * Decodes a s_assemble_7001 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_assemble_7001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_assemble_7001;

            /**
             * Verifies a s_assemble_7001 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_getFriendsInfo_9000. */
        interface Ic_getFriendsInfo_9000 {

            /** c_getFriendsInfo_9000 playerID */
            playerID: (number|Long);
        }

        /** Represents a c_getFriendsInfo_9000. */
        class c_getFriendsInfo_9000 implements Ic_getFriendsInfo_9000 {

            /**
             * Constructs a new c_getFriendsInfo_9000.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_getFriendsInfo_9000);

            /** c_getFriendsInfo_9000 playerID. */
            public playerID: (number|Long);

            /**
             * Creates a new c_getFriendsInfo_9000 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_getFriendsInfo_9000 instance
             */
            public static create(properties?: com.msg.Ic_getFriendsInfo_9000): com.msg.c_getFriendsInfo_9000;

            /**
             * Encodes the specified c_getFriendsInfo_9000 message. Does not implicitly {@link com.msg.c_getFriendsInfo_9000.verify|verify} messages.
             * @param message c_getFriendsInfo_9000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_getFriendsInfo_9000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_getFriendsInfo_9000 message, length delimited. Does not implicitly {@link com.msg.c_getFriendsInfo_9000.verify|verify} messages.
             * @param message c_getFriendsInfo_9000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_getFriendsInfo_9000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_getFriendsInfo_9000 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_getFriendsInfo_9000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_getFriendsInfo_9000;

            /**
             * Decodes a c_getFriendsInfo_9000 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_getFriendsInfo_9000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_getFriendsInfo_9000;

            /**
             * Verifies a c_getFriendsInfo_9000 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_getFriendsInfo_9001. */
        interface Is_getFriendsInfo_9001 {

            /** s_getFriendsInfo_9001 result */
            result: com.msg.ImsgResult;

            /** s_getFriendsInfo_9001 friendInfoList */
            friendInfoList?: (com.msg.IfriendInfo[]|null);
        }

        /** Represents a s_getFriendsInfo_9001. */
        class s_getFriendsInfo_9001 implements Is_getFriendsInfo_9001 {

            /**
             * Constructs a new s_getFriendsInfo_9001.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_getFriendsInfo_9001);

            /** s_getFriendsInfo_9001 result. */
            public result: com.msg.ImsgResult;

            /** s_getFriendsInfo_9001 friendInfoList. */
            public friendInfoList: com.msg.IfriendInfo[];

            /**
             * Creates a new s_getFriendsInfo_9001 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_getFriendsInfo_9001 instance
             */
            public static create(properties?: com.msg.Is_getFriendsInfo_9001): com.msg.s_getFriendsInfo_9001;

            /**
             * Encodes the specified s_getFriendsInfo_9001 message. Does not implicitly {@link com.msg.s_getFriendsInfo_9001.verify|verify} messages.
             * @param message s_getFriendsInfo_9001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_getFriendsInfo_9001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_getFriendsInfo_9001 message, length delimited. Does not implicitly {@link com.msg.s_getFriendsInfo_9001.verify|verify} messages.
             * @param message s_getFriendsInfo_9001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_getFriendsInfo_9001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_getFriendsInfo_9001 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_getFriendsInfo_9001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_getFriendsInfo_9001;

            /**
             * Decodes a s_getFriendsInfo_9001 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_getFriendsInfo_9001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_getFriendsInfo_9001;

            /**
             * Verifies a s_getFriendsInfo_9001 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_heartBeatPackage_100000. */
        interface Ic_heartBeatPackage_100000 {

            /** c_heartBeatPackage_100000 playerID */
            playerID: number;
        }

        /** Represents a c_heartBeatPackage_100000. */
        class c_heartBeatPackage_100000 implements Ic_heartBeatPackage_100000 {

            /**
             * Constructs a new c_heartBeatPackage_100000.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_heartBeatPackage_100000);

            /** c_heartBeatPackage_100000 playerID. */
            public playerID: number;

            /**
             * Creates a new c_heartBeatPackage_100000 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_heartBeatPackage_100000 instance
             */
            public static create(properties?: com.msg.Ic_heartBeatPackage_100000): com.msg.c_heartBeatPackage_100000;

            /**
             * Encodes the specified c_heartBeatPackage_100000 message. Does not implicitly {@link com.msg.c_heartBeatPackage_100000.verify|verify} messages.
             * @param message c_heartBeatPackage_100000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_heartBeatPackage_100000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_heartBeatPackage_100000 message, length delimited. Does not implicitly {@link com.msg.c_heartBeatPackage_100000.verify|verify} messages.
             * @param message c_heartBeatPackage_100000 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_heartBeatPackage_100000, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_heartBeatPackage_100000 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_heartBeatPackage_100000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_heartBeatPackage_100000;

            /**
             * Decodes a c_heartBeatPackage_100000 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_heartBeatPackage_100000
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_heartBeatPackage_100000;

            /**
             * Verifies a c_heartBeatPackage_100000 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_heartBeatPackage_100001. */
        interface Is_heartBeatPackage_100001 {
        }

        /** Represents a s_heartBeatPackage_100001. */
        class s_heartBeatPackage_100001 implements Is_heartBeatPackage_100001 {

            /**
             * Constructs a new s_heartBeatPackage_100001.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_heartBeatPackage_100001);

            /**
             * Creates a new s_heartBeatPackage_100001 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_heartBeatPackage_100001 instance
             */
            public static create(properties?: com.msg.Is_heartBeatPackage_100001): com.msg.s_heartBeatPackage_100001;

            /**
             * Encodes the specified s_heartBeatPackage_100001 message. Does not implicitly {@link com.msg.s_heartBeatPackage_100001.verify|verify} messages.
             * @param message s_heartBeatPackage_100001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_heartBeatPackage_100001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_heartBeatPackage_100001 message, length delimited. Does not implicitly {@link com.msg.s_heartBeatPackage_100001.verify|verify} messages.
             * @param message s_heartBeatPackage_100001 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_heartBeatPackage_100001, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_heartBeatPackage_100001 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_heartBeatPackage_100001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_heartBeatPackage_100001;

            /**
             * Decodes a s_heartBeatPackage_100001 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_heartBeatPackage_100001
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_heartBeatPackage_100001;

            /**
             * Verifies a s_heartBeatPackage_100001 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_createAdventureRoom_100100. */
        interface Ic_createAdventureRoom_100100 {

            /** c_createAdventureRoom_100100 playerID */
            playerID: (number|Long);
        }

        /** Represents a c_createAdventureRoom_100100. */
        class c_createAdventureRoom_100100 implements Ic_createAdventureRoom_100100 {

            /**
             * Constructs a new c_createAdventureRoom_100100.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_createAdventureRoom_100100);

            /** c_createAdventureRoom_100100 playerID. */
            public playerID: (number|Long);

            /**
             * Creates a new c_createAdventureRoom_100100 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_createAdventureRoom_100100 instance
             */
            public static create(properties?: com.msg.Ic_createAdventureRoom_100100): com.msg.c_createAdventureRoom_100100;

            /**
             * Encodes the specified c_createAdventureRoom_100100 message. Does not implicitly {@link com.msg.c_createAdventureRoom_100100.verify|verify} messages.
             * @param message c_createAdventureRoom_100100 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_createAdventureRoom_100100, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_createAdventureRoom_100100 message, length delimited. Does not implicitly {@link com.msg.c_createAdventureRoom_100100.verify|verify} messages.
             * @param message c_createAdventureRoom_100100 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_createAdventureRoom_100100, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_createAdventureRoom_100100 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_createAdventureRoom_100100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_createAdventureRoom_100100;

            /**
             * Decodes a c_createAdventureRoom_100100 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_createAdventureRoom_100100
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_createAdventureRoom_100100;

            /**
             * Verifies a c_createAdventureRoom_100100 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_createAdventureRoom_100101. */
        interface Is_createAdventureRoom_100101 {

            /** s_createAdventureRoom_100101 result */
            result: com.msg.ImsgResult;

            /** s_createAdventureRoom_100101 roomId */
            roomId?: (string|null);
        }

        /** Represents a s_createAdventureRoom_100101. */
        class s_createAdventureRoom_100101 implements Is_createAdventureRoom_100101 {

            /**
             * Constructs a new s_createAdventureRoom_100101.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_createAdventureRoom_100101);

            /** s_createAdventureRoom_100101 result. */
            public result: com.msg.ImsgResult;

            /** s_createAdventureRoom_100101 roomId. */
            public roomId: string;

            /**
             * Creates a new s_createAdventureRoom_100101 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_createAdventureRoom_100101 instance
             */
            public static create(properties?: com.msg.Is_createAdventureRoom_100101): com.msg.s_createAdventureRoom_100101;

            /**
             * Encodes the specified s_createAdventureRoom_100101 message. Does not implicitly {@link com.msg.s_createAdventureRoom_100101.verify|verify} messages.
             * @param message s_createAdventureRoom_100101 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_createAdventureRoom_100101, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_createAdventureRoom_100101 message, length delimited. Does not implicitly {@link com.msg.s_createAdventureRoom_100101.verify|verify} messages.
             * @param message s_createAdventureRoom_100101 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_createAdventureRoom_100101, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_createAdventureRoom_100101 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_createAdventureRoom_100101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_createAdventureRoom_100101;

            /**
             * Decodes a s_createAdventureRoom_100101 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_createAdventureRoom_100101
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_createAdventureRoom_100101;

            /**
             * Verifies a s_createAdventureRoom_100101 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_joinAdventure_100102. */
        interface Ic_joinAdventure_100102 {

            /** c_joinAdventure_100102 playerID */
            playerID: (number|Long);

            /** c_joinAdventure_100102 roomId */
            roomId: string;

            /** c_joinAdventure_100102 slotId */
            slotId: number;
        }

        /** Represents a c_joinAdventure_100102. */
        class c_joinAdventure_100102 implements Ic_joinAdventure_100102 {

            /**
             * Constructs a new c_joinAdventure_100102.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_joinAdventure_100102);

            /** c_joinAdventure_100102 playerID. */
            public playerID: (number|Long);

            /** c_joinAdventure_100102 roomId. */
            public roomId: string;

            /** c_joinAdventure_100102 slotId. */
            public slotId: number;

            /**
             * Creates a new c_joinAdventure_100102 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_joinAdventure_100102 instance
             */
            public static create(properties?: com.msg.Ic_joinAdventure_100102): com.msg.c_joinAdventure_100102;

            /**
             * Encodes the specified c_joinAdventure_100102 message. Does not implicitly {@link com.msg.c_joinAdventure_100102.verify|verify} messages.
             * @param message c_joinAdventure_100102 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_joinAdventure_100102, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_joinAdventure_100102 message, length delimited. Does not implicitly {@link com.msg.c_joinAdventure_100102.verify|verify} messages.
             * @param message c_joinAdventure_100102 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_joinAdventure_100102, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_joinAdventure_100102 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_joinAdventure_100102
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_joinAdventure_100102;

            /**
             * Decodes a c_joinAdventure_100102 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_joinAdventure_100102
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_joinAdventure_100102;

            /**
             * Verifies a c_joinAdventure_100102 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_joinAdventure_100103. */
        interface Is_joinAdventure_100103 {

            /** s_joinAdventure_100103 result */
            result: com.msg.ImsgResult;

            /** s_joinAdventure_100103 playerID */
            playerID: (number|Long);

            /** s_joinAdventure_100103 playerHeadImgUrl */
            playerHeadImgUrl: string;

            /** s_joinAdventure_100103 playerNickName */
            playerNickName: string;

            /** s_joinAdventure_100103 slotId */
            slotId: number;
        }

        /** Represents a s_joinAdventure_100103. */
        class s_joinAdventure_100103 implements Is_joinAdventure_100103 {

            /**
             * Constructs a new s_joinAdventure_100103.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_joinAdventure_100103);

            /** s_joinAdventure_100103 result. */
            public result: com.msg.ImsgResult;

            /** s_joinAdventure_100103 playerID. */
            public playerID: (number|Long);

            /** s_joinAdventure_100103 playerHeadImgUrl. */
            public playerHeadImgUrl: string;

            /** s_joinAdventure_100103 playerNickName. */
            public playerNickName: string;

            /** s_joinAdventure_100103 slotId. */
            public slotId: number;

            /**
             * Creates a new s_joinAdventure_100103 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_joinAdventure_100103 instance
             */
            public static create(properties?: com.msg.Is_joinAdventure_100103): com.msg.s_joinAdventure_100103;

            /**
             * Encodes the specified s_joinAdventure_100103 message. Does not implicitly {@link com.msg.s_joinAdventure_100103.verify|verify} messages.
             * @param message s_joinAdventure_100103 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_joinAdventure_100103, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_joinAdventure_100103 message, length delimited. Does not implicitly {@link com.msg.s_joinAdventure_100103.verify|verify} messages.
             * @param message s_joinAdventure_100103 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_joinAdventure_100103, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_joinAdventure_100103 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_joinAdventure_100103
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_joinAdventure_100103;

            /**
             * Decodes a s_joinAdventure_100103 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_joinAdventure_100103
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_joinAdventure_100103;

            /**
             * Verifies a s_joinAdventure_100103 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_dismissAdventure_100104. */
        interface Ic_dismissAdventure_100104 {

            /** c_dismissAdventure_100104 playerID */
            playerID: (number|Long);

            /** c_dismissAdventure_100104 roomId */
            roomId: string;
        }

        /** Represents a c_dismissAdventure_100104. */
        class c_dismissAdventure_100104 implements Ic_dismissAdventure_100104 {

            /**
             * Constructs a new c_dismissAdventure_100104.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_dismissAdventure_100104);

            /** c_dismissAdventure_100104 playerID. */
            public playerID: (number|Long);

            /** c_dismissAdventure_100104 roomId. */
            public roomId: string;

            /**
             * Creates a new c_dismissAdventure_100104 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_dismissAdventure_100104 instance
             */
            public static create(properties?: com.msg.Ic_dismissAdventure_100104): com.msg.c_dismissAdventure_100104;

            /**
             * Encodes the specified c_dismissAdventure_100104 message. Does not implicitly {@link com.msg.c_dismissAdventure_100104.verify|verify} messages.
             * @param message c_dismissAdventure_100104 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_dismissAdventure_100104, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_dismissAdventure_100104 message, length delimited. Does not implicitly {@link com.msg.c_dismissAdventure_100104.verify|verify} messages.
             * @param message c_dismissAdventure_100104 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_dismissAdventure_100104, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_dismissAdventure_100104 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_dismissAdventure_100104
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_dismissAdventure_100104;

            /**
             * Decodes a c_dismissAdventure_100104 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_dismissAdventure_100104
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_dismissAdventure_100104;

            /**
             * Verifies a c_dismissAdventure_100104 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_dismissAdventure_100105. */
        interface Is_dismissAdventure_100105 {

            /** s_dismissAdventure_100105 result */
            result: com.msg.ImsgResult;
        }

        /** Represents a s_dismissAdventure_100105. */
        class s_dismissAdventure_100105 implements Is_dismissAdventure_100105 {

            /**
             * Constructs a new s_dismissAdventure_100105.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_dismissAdventure_100105);

            /** s_dismissAdventure_100105 result. */
            public result: com.msg.ImsgResult;

            /**
             * Creates a new s_dismissAdventure_100105 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_dismissAdventure_100105 instance
             */
            public static create(properties?: com.msg.Is_dismissAdventure_100105): com.msg.s_dismissAdventure_100105;

            /**
             * Encodes the specified s_dismissAdventure_100105 message. Does not implicitly {@link com.msg.s_dismissAdventure_100105.verify|verify} messages.
             * @param message s_dismissAdventure_100105 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_dismissAdventure_100105, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_dismissAdventure_100105 message, length delimited. Does not implicitly {@link com.msg.s_dismissAdventure_100105.verify|verify} messages.
             * @param message s_dismissAdventure_100105 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_dismissAdventure_100105, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_dismissAdventure_100105 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_dismissAdventure_100105
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_dismissAdventure_100105;

            /**
             * Decodes a s_dismissAdventure_100105 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_dismissAdventure_100105
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_dismissAdventure_100105;

            /**
             * Verifies a s_dismissAdventure_100105 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a c_startAdventure_100106. */
        interface Ic_startAdventure_100106 {

            /** c_startAdventure_100106 roomId */
            roomId: string;

            /** c_startAdventure_100106 matIds */
            matIds?: (number[]|null);

            /** c_startAdventure_100106 matSlotIds */
            matSlotIds?: (number[]|null);
        }

        /** Represents a c_startAdventure_100106. */
        class c_startAdventure_100106 implements Ic_startAdventure_100106 {

            /**
             * Constructs a new c_startAdventure_100106.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ic_startAdventure_100106);

            /** c_startAdventure_100106 roomId. */
            public roomId: string;

            /** c_startAdventure_100106 matIds. */
            public matIds: number[];

            /** c_startAdventure_100106 matSlotIds. */
            public matSlotIds: number[];

            /**
             * Creates a new c_startAdventure_100106 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns c_startAdventure_100106 instance
             */
            public static create(properties?: com.msg.Ic_startAdventure_100106): com.msg.c_startAdventure_100106;

            /**
             * Encodes the specified c_startAdventure_100106 message. Does not implicitly {@link com.msg.c_startAdventure_100106.verify|verify} messages.
             * @param message c_startAdventure_100106 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ic_startAdventure_100106, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified c_startAdventure_100106 message, length delimited. Does not implicitly {@link com.msg.c_startAdventure_100106.verify|verify} messages.
             * @param message c_startAdventure_100106 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ic_startAdventure_100106, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a c_startAdventure_100106 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns c_startAdventure_100106
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.c_startAdventure_100106;

            /**
             * Decodes a c_startAdventure_100106 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns c_startAdventure_100106
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.c_startAdventure_100106;

            /**
             * Verifies a c_startAdventure_100106 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a s_startAdventure_100107. */
        interface Is_startAdventure_100107 {

            /** s_startAdventure_100107 result */
            result: com.msg.ImsgResult;
        }

        /** Represents a s_startAdventure_100107. */
        class s_startAdventure_100107 implements Is_startAdventure_100107 {

            /**
             * Constructs a new s_startAdventure_100107.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Is_startAdventure_100107);

            /** s_startAdventure_100107 result. */
            public result: com.msg.ImsgResult;

            /**
             * Creates a new s_startAdventure_100107 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns s_startAdventure_100107 instance
             */
            public static create(properties?: com.msg.Is_startAdventure_100107): com.msg.s_startAdventure_100107;

            /**
             * Encodes the specified s_startAdventure_100107 message. Does not implicitly {@link com.msg.s_startAdventure_100107.verify|verify} messages.
             * @param message s_startAdventure_100107 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Is_startAdventure_100107, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified s_startAdventure_100107 message, length delimited. Does not implicitly {@link com.msg.s_startAdventure_100107.verify|verify} messages.
             * @param message s_startAdventure_100107 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Is_startAdventure_100107, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a s_startAdventure_100107 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns s_startAdventure_100107
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.s_startAdventure_100107;

            /**
             * Decodes a s_startAdventure_100107 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns s_startAdventure_100107
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.s_startAdventure_100107;

            /**
             * Verifies a s_startAdventure_100107 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a msgResult. */
        interface ImsgResult {

            /** msgResult ErrorCode */
            ErrorCode: number;

            /** msgResult ErrorMsg */
            ErrorMsg?: (string|null);
        }

        /** Represents a msgResult. */
        class msgResult implements ImsgResult {

            /**
             * Constructs a new msgResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.ImsgResult);

            /** msgResult ErrorCode. */
            public ErrorCode: number;

            /** msgResult ErrorMsg. */
            public ErrorMsg: string;

            /**
             * Creates a new msgResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns msgResult instance
             */
            public static create(properties?: com.msg.ImsgResult): com.msg.msgResult;

            /**
             * Encodes the specified msgResult message. Does not implicitly {@link com.msg.msgResult.verify|verify} messages.
             * @param message msgResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.ImsgResult, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified msgResult message, length delimited. Does not implicitly {@link com.msg.msgResult.verify|verify} messages.
             * @param message msgResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.ImsgResult, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a msgResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns msgResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.msgResult;

            /**
             * Decodes a msgResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns msgResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.msgResult;

            /**
             * Verifies a msgResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a playerInfo. */
        interface IplayerInfo {

            /** playerInfo commonPlayerInfo */
            commonPlayerInfo: com.msg.IcommonPlayerInfo;

            /** playerInfo money */
            money: com.msg.ImoneyInfo;

            /** playerInfo bagInfo */
            bagInfo: com.msg.IbagInfo;

            /** playerInfo newbieStepId */
            newbieStepId: number;

            /** playerInfo adSwitch */
            adSwitch: number;
        }

        /** Represents a playerInfo. */
        class playerInfo implements IplayerInfo {

            /**
             * Constructs a new playerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IplayerInfo);

            /** playerInfo commonPlayerInfo. */
            public commonPlayerInfo: com.msg.IcommonPlayerInfo;

            /** playerInfo money. */
            public money: com.msg.ImoneyInfo;

            /** playerInfo bagInfo. */
            public bagInfo: com.msg.IbagInfo;

            /** playerInfo newbieStepId. */
            public newbieStepId: number;

            /** playerInfo adSwitch. */
            public adSwitch: number;

            /**
             * Creates a new playerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns playerInfo instance
             */
            public static create(properties?: com.msg.IplayerInfo): com.msg.playerInfo;

            /**
             * Encodes the specified playerInfo message. Does not implicitly {@link com.msg.playerInfo.verify|verify} messages.
             * @param message playerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IplayerInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified playerInfo message, length delimited. Does not implicitly {@link com.msg.playerInfo.verify|verify} messages.
             * @param message playerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IplayerInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a playerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns playerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.playerInfo;

            /**
             * Decodes a playerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns playerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.playerInfo;

            /**
             * Verifies a playerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a commonPlayerInfo. */
        interface IcommonPlayerInfo {

            /** commonPlayerInfo playerID */
            playerID: (number|Long);

            /** commonPlayerInfo header */
            header: com.msg.IplayerHeaderInfo;
        }

        /** Represents a commonPlayerInfo. */
        class commonPlayerInfo implements IcommonPlayerInfo {

            /**
             * Constructs a new commonPlayerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IcommonPlayerInfo);

            /** commonPlayerInfo playerID. */
            public playerID: (number|Long);

            /** commonPlayerInfo header. */
            public header: com.msg.IplayerHeaderInfo;

            /**
             * Creates a new commonPlayerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns commonPlayerInfo instance
             */
            public static create(properties?: com.msg.IcommonPlayerInfo): com.msg.commonPlayerInfo;

            /**
             * Encodes the specified commonPlayerInfo message. Does not implicitly {@link com.msg.commonPlayerInfo.verify|verify} messages.
             * @param message commonPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IcommonPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified commonPlayerInfo message, length delimited. Does not implicitly {@link com.msg.commonPlayerInfo.verify|verify} messages.
             * @param message commonPlayerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IcommonPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a commonPlayerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns commonPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.commonPlayerInfo;

            /**
             * Decodes a commonPlayerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns commonPlayerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.commonPlayerInfo;

            /**
             * Verifies a commonPlayerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a moneyInfo. */
        interface ImoneyInfo {

            /** moneyInfo coinNum */
            coinNum: number;

            /** moneyInfo diamondNum */
            diamondNum: number;
        }

        /** Represents a moneyInfo. */
        class moneyInfo implements ImoneyInfo {

            /**
             * Constructs a new moneyInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.ImoneyInfo);

            /** moneyInfo coinNum. */
            public coinNum: number;

            /** moneyInfo diamondNum. */
            public diamondNum: number;

            /**
             * Creates a new moneyInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns moneyInfo instance
             */
            public static create(properties?: com.msg.ImoneyInfo): com.msg.moneyInfo;

            /**
             * Encodes the specified moneyInfo message. Does not implicitly {@link com.msg.moneyInfo.verify|verify} messages.
             * @param message moneyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.ImoneyInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified moneyInfo message, length delimited. Does not implicitly {@link com.msg.moneyInfo.verify|verify} messages.
             * @param message moneyInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.ImoneyInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a moneyInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns moneyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.moneyInfo;

            /**
             * Decodes a moneyInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns moneyInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.moneyInfo;

            /**
             * Verifies a moneyInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a playerHeaderInfo. */
        interface IplayerHeaderInfo {

            /** playerHeaderInfo nickName */
            nickName: string;

            /** playerHeaderInfo imageUrl */
            imageUrl: string;
        }

        /** Represents a playerHeaderInfo. */
        class playerHeaderInfo implements IplayerHeaderInfo {

            /**
             * Constructs a new playerHeaderInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IplayerHeaderInfo);

            /** playerHeaderInfo nickName. */
            public nickName: string;

            /** playerHeaderInfo imageUrl. */
            public imageUrl: string;

            /**
             * Creates a new playerHeaderInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns playerHeaderInfo instance
             */
            public static create(properties?: com.msg.IplayerHeaderInfo): com.msg.playerHeaderInfo;

            /**
             * Encodes the specified playerHeaderInfo message. Does not implicitly {@link com.msg.playerHeaderInfo.verify|verify} messages.
             * @param message playerHeaderInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IplayerHeaderInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified playerHeaderInfo message, length delimited. Does not implicitly {@link com.msg.playerHeaderInfo.verify|verify} messages.
             * @param message playerHeaderInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IplayerHeaderInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a playerHeaderInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns playerHeaderInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.playerHeaderInfo;

            /**
             * Decodes a playerHeaderInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns playerHeaderInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.playerHeaderInfo;

            /**
             * Verifies a playerHeaderInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a bagInfo. */
        interface IbagInfo {

            /** bagInfo itemIds */
            itemIds?: (number[]|null);

            /** bagInfo itemCount */
            itemCount?: (number[]|null);
        }

        /** Represents a bagInfo. */
        class bagInfo implements IbagInfo {

            /**
             * Constructs a new bagInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IbagInfo);

            /** bagInfo itemIds. */
            public itemIds: number[];

            /** bagInfo itemCount. */
            public itemCount: number[];

            /**
             * Creates a new bagInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns bagInfo instance
             */
            public static create(properties?: com.msg.IbagInfo): com.msg.bagInfo;

            /**
             * Encodes the specified bagInfo message. Does not implicitly {@link com.msg.bagInfo.verify|verify} messages.
             * @param message bagInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IbagInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified bagInfo message, length delimited. Does not implicitly {@link com.msg.bagInfo.verify|verify} messages.
             * @param message bagInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IbagInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a bagInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns bagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.bagInfo;

            /**
             * Decodes a bagInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns bagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.bagInfo;

            /**
             * Verifies a bagInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an invitorInfo. */
        interface IinvitorInfo {

            /** invitorInfo invitorUserId */
            invitorUserId: (number|Long);

            /** invitorInfo invitedActivityId */
            invitedActivityId?: (number|null);
        }

        /** Represents an invitorInfo. */
        class invitorInfo implements IinvitorInfo {

            /**
             * Constructs a new invitorInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IinvitorInfo);

            /** invitorInfo invitorUserId. */
            public invitorUserId: (number|Long);

            /** invitorInfo invitedActivityId. */
            public invitedActivityId: number;

            /**
             * Creates a new invitorInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns invitorInfo instance
             */
            public static create(properties?: com.msg.IinvitorInfo): com.msg.invitorInfo;

            /**
             * Encodes the specified invitorInfo message. Does not implicitly {@link com.msg.invitorInfo.verify|verify} messages.
             * @param message invitorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IinvitorInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified invitorInfo message, length delimited. Does not implicitly {@link com.msg.invitorInfo.verify|verify} messages.
             * @param message invitorInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IinvitorInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an invitorInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns invitorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.invitorInfo;

            /**
             * Decodes an invitorInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns invitorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.invitorInfo;

            /**
             * Verifies an invitorInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a vec2. */
        interface Ivec2 {

            /** vec2 x */
            x: number;

            /** vec2 y */
            y: number;
        }

        /** Represents a vec2. */
        class vec2 implements Ivec2 {

            /**
             * Constructs a new vec2.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.Ivec2);

            /** vec2 x. */
            public x: number;

            /** vec2 y. */
            public y: number;

            /**
             * Creates a new vec2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns vec2 instance
             */
            public static create(properties?: com.msg.Ivec2): com.msg.vec2;

            /**
             * Encodes the specified vec2 message. Does not implicitly {@link com.msg.vec2.verify|verify} messages.
             * @param message vec2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.Ivec2, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified vec2 message, length delimited. Does not implicitly {@link com.msg.vec2.verify|verify} messages.
             * @param message vec2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.Ivec2, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a vec2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns vec2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.vec2;

            /**
             * Decodes a vec2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns vec2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.vec2;

            /**
             * Verifies a vec2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a getReward. */
        interface IgetReward {

            /** getReward itemsUpdateInfo */
            itemsUpdateInfo?: (com.msg.IitemsUpdateInfo[]|null);

            /** getReward rewardType */
            rewardType: number;
        }

        /** Represents a getReward. */
        class getReward implements IgetReward {

            /**
             * Constructs a new getReward.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IgetReward);

            /** getReward itemsUpdateInfo. */
            public itemsUpdateInfo: com.msg.IitemsUpdateInfo[];

            /** getReward rewardType. */
            public rewardType: number;

            /**
             * Creates a new getReward instance using the specified properties.
             * @param [properties] Properties to set
             * @returns getReward instance
             */
            public static create(properties?: com.msg.IgetReward): com.msg.getReward;

            /**
             * Encodes the specified getReward message. Does not implicitly {@link com.msg.getReward.verify|verify} messages.
             * @param message getReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IgetReward, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified getReward message, length delimited. Does not implicitly {@link com.msg.getReward.verify|verify} messages.
             * @param message getReward message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IgetReward, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a getReward message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns getReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.getReward;

            /**
             * Decodes a getReward message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns getReward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.getReward;

            /**
             * Verifies a getReward message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an itemsUpdateInfo. */
        interface IitemsUpdateInfo {

            /** itemsUpdateInfo newBagItemIds */
            newBagItemIds?: (number[]|null);

            /** itemsUpdateInfo itemCounts */
            itemCounts?: (number[]|null);
        }

        /** Represents an itemsUpdateInfo. */
        class itemsUpdateInfo implements IitemsUpdateInfo {

            /**
             * Constructs a new itemsUpdateInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IitemsUpdateInfo);

            /** itemsUpdateInfo newBagItemIds. */
            public newBagItemIds: number[];

            /** itemsUpdateInfo itemCounts. */
            public itemCounts: number[];

            /**
             * Creates a new itemsUpdateInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns itemsUpdateInfo instance
             */
            public static create(properties?: com.msg.IitemsUpdateInfo): com.msg.itemsUpdateInfo;

            /**
             * Encodes the specified itemsUpdateInfo message. Does not implicitly {@link com.msg.itemsUpdateInfo.verify|verify} messages.
             * @param message itemsUpdateInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IitemsUpdateInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified itemsUpdateInfo message, length delimited. Does not implicitly {@link com.msg.itemsUpdateInfo.verify|verify} messages.
             * @param message itemsUpdateInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IitemsUpdateInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an itemsUpdateInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns itemsUpdateInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.itemsUpdateInfo;

            /**
             * Decodes an itemsUpdateInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns itemsUpdateInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.itemsUpdateInfo;

            /**
             * Verifies an itemsUpdateInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a signUpInfo. */
        interface IsignUpInfo {

            /** signUpInfo signUpInfo */
            signUpInfo: string;

            /** signUpInfo signUpState */
            signUpState: string;

            /** signUpInfo serverWeekDay */
            serverWeekDay: number;
        }

        /** Represents a signUpInfo. */
        class signUpInfo implements IsignUpInfo {

            /**
             * Constructs a new signUpInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IsignUpInfo);

            /** signUpInfo signUpInfo. */
            public signUpInfo: string;

            /** signUpInfo signUpState. */
            public signUpState: string;

            /** signUpInfo serverWeekDay. */
            public serverWeekDay: number;

            /**
             * Creates a new signUpInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns signUpInfo instance
             */
            public static create(properties?: com.msg.IsignUpInfo): com.msg.signUpInfo;

            /**
             * Encodes the specified signUpInfo message. Does not implicitly {@link com.msg.signUpInfo.verify|verify} messages.
             * @param message signUpInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IsignUpInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified signUpInfo message, length delimited. Does not implicitly {@link com.msg.signUpInfo.verify|verify} messages.
             * @param message signUpInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IsignUpInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a signUpInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns signUpInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.signUpInfo;

            /**
             * Decodes a signUpInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns signUpInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.signUpInfo;

            /**
             * Verifies a signUpInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a friendInfo. */
        interface IfriendInfo {

            /** friendInfo playerID */
            playerID: (number|Long);

            /** friendInfo headUrl */
            headUrl: string;

            /** friendInfo nickName */
            nickName: string;

            /** friendInfo achievementValue */
            achievementValue: number;
        }

        /** Represents a friendInfo. */
        class friendInfo implements IfriendInfo {

            /**
             * Constructs a new friendInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IfriendInfo);

            /** friendInfo playerID. */
            public playerID: (number|Long);

            /** friendInfo headUrl. */
            public headUrl: string;

            /** friendInfo nickName. */
            public nickName: string;

            /** friendInfo achievementValue. */
            public achievementValue: number;

            /**
             * Creates a new friendInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns friendInfo instance
             */
            public static create(properties?: com.msg.IfriendInfo): com.msg.friendInfo;

            /**
             * Encodes the specified friendInfo message. Does not implicitly {@link com.msg.friendInfo.verify|verify} messages.
             * @param message friendInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IfriendInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified friendInfo message, length delimited. Does not implicitly {@link com.msg.friendInfo.verify|verify} messages.
             * @param message friendInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IfriendInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a friendInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns friendInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.friendInfo;

            /**
             * Decodes a friendInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns friendInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.friendInfo;

            /**
             * Verifies a friendInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an achievementInfo. */
        interface IachievementInfo {

            /** achievementInfo id */
            id: number;

            /** achievementInfo progress */
            progress: number;

            /** achievementInfo phase */
            phase: number;

            /** achievementInfo state */
            state: number;
        }

        /** Represents an achievementInfo. */
        class achievementInfo implements IachievementInfo {

            /**
             * Constructs a new achievementInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.IachievementInfo);

            /** achievementInfo id. */
            public id: number;

            /** achievementInfo progress. */
            public progress: number;

            /** achievementInfo phase. */
            public phase: number;

            /** achievementInfo state. */
            public state: number;

            /**
             * Creates a new achievementInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns achievementInfo instance
             */
            public static create(properties?: com.msg.IachievementInfo): com.msg.achievementInfo;

            /**
             * Encodes the specified achievementInfo message. Does not implicitly {@link com.msg.achievementInfo.verify|verify} messages.
             * @param message achievementInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.IachievementInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified achievementInfo message, length delimited. Does not implicitly {@link com.msg.achievementInfo.verify|verify} messages.
             * @param message achievementInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.IachievementInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an achievementInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns achievementInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.achievementInfo;

            /**
             * Decodes an achievementInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns achievementInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.achievementInfo;

            /**
             * Verifies an achievementInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a taskInfo. */
        interface ItaskInfo {

            /** taskInfo id */
            id: number;

            /** taskInfo progress */
            progress: number;

            /** taskInfo state */
            state: number;
        }

        /** Represents a taskInfo. */
        class taskInfo implements ItaskInfo {

            /**
             * Constructs a new taskInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: com.msg.ItaskInfo);

            /** taskInfo id. */
            public id: number;

            /** taskInfo progress. */
            public progress: number;

            /** taskInfo state. */
            public state: number;

            /**
             * Creates a new taskInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns taskInfo instance
             */
            public static create(properties?: com.msg.ItaskInfo): com.msg.taskInfo;

            /**
             * Encodes the specified taskInfo message. Does not implicitly {@link com.msg.taskInfo.verify|verify} messages.
             * @param message taskInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: com.msg.ItaskInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified taskInfo message, length delimited. Does not implicitly {@link com.msg.taskInfo.verify|verify} messages.
             * @param message taskInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: com.msg.ItaskInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a taskInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns taskInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.msg.taskInfo;

            /**
             * Decodes a taskInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns taskInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.msg.taskInfo;

            /**
             * Verifies a taskInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }
}
