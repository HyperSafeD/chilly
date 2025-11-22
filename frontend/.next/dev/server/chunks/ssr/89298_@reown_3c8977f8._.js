module.exports = [
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function noOpPrepareStackTrace(_, stack) {
    return stack;
}
module.exports = function getCallers() {
    const originalPrepare = Error.prepareStackTrace;
    Error.prepareStackTrace = noOpPrepareStackTrace;
    const stack = new Error().stack;
    Error.prepareStackTrace = originalPrepare;
    if (!Array.isArray(stack)) {
        return undefined;
    }
    const entries = stack.slice(2);
    const fileNames = [];
    for (const entry of entries){
        if (!entry) {
            continue;
        }
        fileNames.push(entry.getFileName());
    }
    return fileNames;
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createRequire } = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
const getCallers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const { join, isAbsolute, sep } = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const ThreadStream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/index.js [app-ssr] (ecmascript)");
function setupOnExit(stream) {
    // This is leak free, it does not leave event handlers
    onExit.register(stream, autoEnd);
    onExit.registerBeforeExit(stream, flush);
    stream.on('close', function() {
        onExit.unregister(stream);
    });
}
function buildStream(filename, workerData, workerOpts, sync) {
    const stream = new ThreadStream({
        filename,
        workerData,
        workerOpts,
        sync
    });
    stream.on('ready', onReady);
    stream.on('close', function() {
        process.removeListener('exit', onExit);
    });
    process.on('exit', onExit);
    function onReady() {
        process.removeListener('exit', onExit);
        stream.unref();
        if (workerOpts.autoEnd !== false) {
            setupOnExit(stream);
        }
    }
    function onExit() {
        /* istanbul ignore next */ if (stream.closed) {
            return;
        }
        stream.flushSync();
        // Apparently there is a very sporadic race condition
        // that in certain OS would prevent the messages to be flushed
        // because the thread might not have been created still.
        // Unfortunately we need to sleep(100) in this case.
        sleep(100);
        stream.end();
    }
    return stream;
}
function autoEnd(stream) {
    stream.ref();
    stream.flushSync();
    stream.end();
    stream.once('close', function() {
        stream.unref();
    });
}
function flush(stream) {
    stream.flushSync();
}
function transport(fullOptions) {
    const { pipeline, targets, levels, dedupe, worker = {}, caller = getCallers(), sync = false } = fullOptions;
    const options = {
        ...fullOptions.options
    };
    // Backwards compatibility
    const callers = typeof caller === 'string' ? [
        caller
    ] : caller;
    // This will be eventually modified by bundlers
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    let target = fullOptions.target;
    if (target && targets) {
        throw new Error('only one of target or targets can be specified');
    }
    if (targets) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib"), 'worker.js');
        options.targets = targets.filter((dest)=>dest.target).map((dest)=>{
            return {
                ...dest,
                target: fixTarget(dest.target)
            };
        });
        options.pipelines = targets.filter((dest)=>dest.pipeline).map((dest)=>{
            return dest.pipeline.map((t)=>{
                return {
                    ...t,
                    level: dest.level,
                    target: fixTarget(t.target)
                };
            });
        });
    } else if (pipeline) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib"), 'worker.js');
        options.pipelines = [
            pipeline.map((dest)=>{
                return {
                    ...dest,
                    target: fixTarget(dest.target)
                };
            })
        ];
    }
    if (levels) {
        options.levels = levels;
    }
    if (dedupe) {
        options.dedupe = dedupe;
    }
    options.pinoWillSendConfig = true;
    return buildStream(fixTarget(target), options, worker, sync);
    //TURBOPACK unreachable
    ;
    function fixTarget(origin) {
        origin = bundlerOverrides[origin] || origin;
        if (isAbsolute(origin) || origin.indexOf('file://') === 0) {
            return origin;
        }
        if (origin === 'pino/file') {
            return join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib"), '..', 'file.js');
        }
        let fixTarget;
        for (const filePath of callers){
            try {
                const context = filePath === 'node:repl' ? process.cwd() + sep : filePath;
                fixTarget = createRequire(context).resolve(origin);
                break;
            } catch (err) {
                continue;
            }
        }
        if (!fixTarget) {
            throw new Error(`unable to determine transport target for "${origin}"`);
        }
        return fixTarget;
    }
}
module.exports = transport;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Represents default log level values
 *
 * @enum {number}
 */ const DEFAULT_LEVELS = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
};
/**
 * Represents sort order direction: `ascending` or `descending`
 *
 * @enum {string}
 */ const SORTING_ORDER = {
    ASC: 'ASC',
    DESC: 'DESC'
};
module.exports = {
    DEFAULT_LEVELS,
    SORTING_ORDER
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const metadata = Symbol.for('pino.metadata');
const { DEFAULT_LEVELS } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info;
function multistream(streamsArray, opts) {
    streamsArray = streamsArray || [];
    opts = opts || {
        dedupe: false
    };
    const streamLevels = Object.create(DEFAULT_LEVELS);
    streamLevels.silent = Infinity;
    if (opts.levels && typeof opts.levels === 'object') {
        Object.keys(opts.levels).forEach((i)=>{
            streamLevels[i] = opts.levels[i];
        });
    }
    const res = {
        write,
        add,
        remove,
        emit,
        flushSync,
        end,
        minLevel: 0,
        lastId: 0,
        streams: [],
        clone,
        [metadata]: true,
        streamLevels
    };
    if (Array.isArray(streamsArray)) {
        streamsArray.forEach(add, res);
    } else {
        add.call(res, streamsArray);
    }
    // clean this object up
    // or it will stay allocated forever
    // as it is closed on the following closures
    streamsArray = null;
    return res;
    //TURBOPACK unreachable
    ;
    // we can exit early because the streams are ordered by level
    function write(data) {
        let dest;
        const level = this.lastLevel;
        const { streams } = this;
        // for handling situation when several streams has the same level
        let recordedLevel = 0;
        let stream;
        // if dedupe set to true we send logs to the stream with the highest level
        // therefore, we have to change sorting order
        for(let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)){
            dest = streams[i];
            if (dest.level <= level) {
                if (recordedLevel !== 0 && recordedLevel !== dest.level) {
                    break;
                }
                stream = dest.stream;
                if (stream[metadata]) {
                    const { lastTime, lastMsg, lastObj, lastLogger } = this;
                    stream.lastLevel = level;
                    stream.lastTime = lastTime;
                    stream.lastMsg = lastMsg;
                    stream.lastObj = lastObj;
                    stream.lastLogger = lastLogger;
                }
                stream.write(data);
                if (opts.dedupe) {
                    recordedLevel = dest.level;
                }
            } else if (!opts.dedupe) {
                break;
            }
        }
    }
    function emit(...args) {
        for (const { stream } of this.streams){
            if (typeof stream.emit === 'function') {
                stream.emit(...args);
            }
        }
    }
    function flushSync() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
        }
    }
    function add(dest) {
        if (!dest) {
            return res;
        }
        // Check that dest implements either StreamEntry or DestinationStream
        const isStream = typeof dest.write === 'function' || dest.stream;
        const stream_ = dest.write ? dest : dest.stream;
        // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
        if (!isStream) {
            throw Error('stream object needs to implement either StreamEntry or DestinationStream interface');
        }
        const { streams, streamLevels } = this;
        let level;
        if (typeof dest.levelVal === 'number') {
            level = dest.levelVal;
        } else if (typeof dest.level === 'string') {
            level = streamLevels[dest.level];
        } else if (typeof dest.level === 'number') {
            level = dest.level;
        } else {
            level = DEFAULT_INFO_LEVEL;
        }
        const dest_ = {
            stream: stream_,
            level,
            levelVal: undefined,
            id: ++res.lastId
        };
        streams.unshift(dest_);
        streams.sort(compareByLevel);
        this.minLevel = streams[0].level;
        return res;
    }
    function remove(id) {
        const { streams } = this;
        const index = streams.findIndex((s)=>s.id === id);
        if (index >= 0) {
            streams.splice(index, 1);
            streams.sort(compareByLevel);
            this.minLevel = streams.length > 0 ? streams[0].level : -1;
        }
        return res;
    }
    function end() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
            stream.end();
        }
    }
    function clone(level) {
        const streams = new Array(this.streams.length);
        for(let i = 0; i < streams.length; i++){
            streams[i] = {
                level,
                stream: this.streams[i].stream
            };
        }
        return {
            write,
            add,
            remove,
            minLevel: level,
            streams,
            clone,
            emit,
            flushSync,
            [metadata]: true
        };
    }
}
function compareByLevel(a, b) {
    return a.level - b.level;
}
function initLoopVar(length, dedupe) {
    return dedupe ? length - 1 : 0;
}
function adjustLoopVar(i, dedupe) {
    return dedupe ? i - 1 : i + 1;
}
function checkLoopVar(i, length, dedupe) {
    return dedupe ? i >= 0 : i < length;
}
module.exports = multistream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const setLevelSym = Symbol('pino.setLevel');
const getLevelSym = Symbol('pino.getLevel');
const levelValSym = Symbol('pino.levelVal');
const levelCompSym = Symbol('pino.levelComp');
const useLevelLabelsSym = Symbol('pino.useLevelLabels');
const useOnlyCustomLevelsSym = Symbol('pino.useOnlyCustomLevels');
const mixinSym = Symbol('pino.mixin');
const lsCacheSym = Symbol('pino.lsCache');
const chindingsSym = Symbol('pino.chindings');
const asJsonSym = Symbol('pino.asJson');
const writeSym = Symbol('pino.write');
const redactFmtSym = Symbol('pino.redactFmt');
const timeSym = Symbol('pino.time');
const timeSliceIndexSym = Symbol('pino.timeSliceIndex');
const streamSym = Symbol('pino.stream');
const stringifySym = Symbol('pino.stringify');
const stringifySafeSym = Symbol('pino.stringifySafe');
const stringifiersSym = Symbol('pino.stringifiers');
const endSym = Symbol('pino.end');
const formatOptsSym = Symbol('pino.formatOpts');
const messageKeySym = Symbol('pino.messageKey');
const errorKeySym = Symbol('pino.errorKey');
const nestedKeySym = Symbol('pino.nestedKey');
const nestedKeyStrSym = Symbol('pino.nestedKeyStr');
const mixinMergeStrategySym = Symbol('pino.mixinMergeStrategy');
const msgPrefixSym = Symbol('pino.msgPrefix');
const wildcardFirstSym = Symbol('pino.wildcardFirst');
// public symbols, no need to use the same pino
// version for these
const serializersSym = Symbol.for('pino.serializers');
const formattersSym = Symbol.for('pino.formatters');
const hooksSym = Symbol.for('pino.hooks');
const needsMetadataGsym = Symbol.for('pino.metadata');
module.exports = {
    setLevelSym,
    getLevelSym,
    levelValSym,
    levelCompSym,
    useLevelLabelsSym,
    mixinSym,
    lsCacheSym,
    chindingsSym,
    asJsonSym,
    writeSym,
    serializersSym,
    redactFmtSym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    stringifySym,
    stringifySafeSym,
    stringifiersSym,
    endSym,
    formatOptsSym,
    messageKeySym,
    errorKeySym,
    nestedKeySym,
    wildcardFirstSym,
    needsMetadataGsym,
    useOnlyCustomLevelsSym,
    formattersSym,
    hooksSym,
    nestedKeyStrSym,
    mixinMergeStrategySym,
    msgPrefixSym
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const slowRedact = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/slow-redact/index.js [app-ssr] (ecmascript)");
const { redactFmtSym, wildcardFirstSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
// Custom rx regex equivalent to fast-redact's rx
const rx = /[^.[\]]+|\[([^[\]]*?)\]/g;
const CENSOR = '[Redacted]';
const strict = false // TODO should this be configurable?
;
function redaction(opts, serialize) {
    const { paths, censor, remove } = handle(opts);
    const shape = paths.reduce((o, str)=>{
        rx.lastIndex = 0;
        const first = rx.exec(str);
        const next = rx.exec(str);
        // ns is the top-level path segment, brackets + quoting removed.
        let ns = first[1] !== undefined ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, '$1') : first[0];
        if (ns === '*') {
            ns = wildcardFirstSym;
        }
        // top level key:
        if (next === null) {
            o[ns] = null;
            return o;
        }
        // path with at least two segments:
        // if ns is already redacted at the top level, ignore lower level redactions
        if (o[ns] === null) {
            return o;
        }
        const { index } = next;
        const nextPath = `${str.substr(index, str.length - 1)}`;
        o[ns] = o[ns] || [];
        // shape is a mix of paths beginning with literal values and wildcard
        // paths [ "a.b.c", "*.b.z" ] should reduce to a shape of
        // { "a": [ "b.c", "b.z" ], *: [ "b.z" ] }
        // note: "b.z" is in both "a" and * arrays because "a" matches the wildcard.
        // (* entry has wildcardFirstSym as key)
        if (ns !== wildcardFirstSym && o[ns].length === 0) {
            // first time ns's get all '*' redactions so far
            o[ns].push(...o[wildcardFirstSym] || []);
        }
        if (ns === wildcardFirstSym) {
            // new * path gets added to all previously registered literal ns's.
            Object.keys(o).forEach(function(k) {
                if (o[k]) {
                    o[k].push(nextPath);
                }
            });
        }
        o[ns].push(nextPath);
        return o;
    }, {});
    // the redactor assigned to the format symbol key
    // provides top level redaction for instances where
    // an object is interpolated into the msg string
    const result = {
        [redactFmtSym]: slowRedact({
            paths,
            censor,
            serialize,
            strict,
            remove
        })
    };
    const topCensor = (...args)=>{
        return typeof censor === 'function' ? serialize(censor(...args)) : serialize(censor);
    };
    return [
        ...Object.keys(shape),
        ...Object.getOwnPropertySymbols(shape)
    ].reduce((o, k)=>{
        // top level key:
        if (shape[k] === null) {
            o[k] = (value)=>topCensor(value, [
                    k
                ]);
        } else {
            const wrappedCensor = typeof censor === 'function' ? (value, path)=>{
                return censor(value, [
                    k,
                    ...path
                ]);
            } : censor;
            o[k] = slowRedact({
                paths: shape[k],
                censor: wrappedCensor,
                serialize,
                strict,
                remove
            });
        }
        return o;
    }, result);
}
function handle(opts) {
    if (Array.isArray(opts)) {
        opts = {
            paths: opts,
            censor: CENSOR
        };
        return opts;
    }
    let { paths, censor = CENSOR, remove } = opts;
    if (Array.isArray(paths) === false) {
        throw Error('pino – redact must contain an array of strings');
    }
    if (remove === true) censor = undefined;
    return {
        paths,
        censor,
        remove
    };
}
module.exports = redaction;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/time.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const nullTime = ()=>'';
const epochTime = ()=>`,"time":${Date.now()}`;
const unixTime = ()=>`,"time":${Math.round(Date.now() / 1000.0)}`;
const isoTime = ()=>`,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability
;
const NS_PER_MS = 1_000_000n;
const NS_PER_SEC = 1_000_000_000n;
const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS;
const startHrTime = process.hrtime.bigint();
const isoTimeNano = ()=>{
    const elapsedNs = process.hrtime.bigint() - startHrTime;
    const currentTimeNs = startWallTimeNs + elapsedNs;
    const secondsSinceEpoch = currentTimeNs / NS_PER_SEC;
    const nanosWithinSecond = currentTimeNs % NS_PER_SEC;
    const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1_000_000n);
    const date = new Date(msSinceEpoch);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond.toString().padStart(9, '0')}Z"`;
};
module.exports = {
    nullTime,
    epochTime,
    unixTime,
    isoTime,
    isoTimeNano
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const diagChan = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-ssr] (ecmascript)");
const { mapHttpRequest, mapHttpResponse } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const SonicBoom = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const { lsCacheSym, chindingsSym, writeSym, serializersSym, formatOptsSym, endSym, stringifiersSym, stringifySym, stringifySafeSym, wildcardFirstSym, nestedKeySym, formattersSym, messageKeySym, errorKeySym, nestedKeyStrSym, msgPrefixSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { isMainThread } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
const asJsonChan = diagChan.tracingChannel('pino_asJson');
function noop() {}
function genLog(level, hook) {
    if (!hook) return LOG;
    return function hookWrappedLog(...args) {
        hook.call(this, args, LOG, level);
    };
    //TURBOPACK unreachable
    ;
    function LOG(o, ...n) {
        if (typeof o === 'object') {
            let msg = o;
            if (o !== null) {
                if (o.method && o.headers && o.socket) {
                    o = mapHttpRequest(o);
                } else if (typeof o.setHeader === 'function') {
                    o = mapHttpResponse(o);
                }
            }
            let formatParams;
            if (msg === null && n.length === 0) {
                formatParams = [
                    null
                ];
            } else {
                msg = n.shift();
                formatParams = n;
            }
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level);
        } else {
            let msg = o === undefined ? n.shift() : o;
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](null, format(msg, n, this[formatOptsSym]), level);
        }
    }
}
// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function asString(str) {
    let result = '';
    let last = 0;
    let found = false;
    let point = 255;
    const l = str.length;
    if (l > 100) {
        return JSON.stringify(str);
    }
    for(var i = 0; i < l && point >= 32; i++){
        point = str.charCodeAt(i);
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + '\\';
            last = i;
            found = true;
        }
    }
    if (!found) {
        result = str;
    } else {
        result += str.slice(last);
    }
    return point < 32 ? JSON.stringify(str) : '"' + result + '"';
}
/**
 * `asJson` wraps `_asJson` in order to facilitate generating diagnostics.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string}
 */ function asJson(obj, msg, num, time) {
    if (asJsonChan.hasSubscribers === false) {
        return _asJson.call(this, obj, msg, num, time);
    }
    const store = {
        instance: this,
        arguments
    };
    return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time);
}
/**
 * `_asJson` parses all collected data and generates the finalized newline
 * delimited JSON string.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string} The finalized log string terminated with a newline.
 * @private
 */ function _asJson(obj, msg, num, time) {
    const stringify = this[stringifySym];
    const stringifySafe = this[stringifySafeSym];
    const stringifiers = this[stringifiersSym];
    const end = this[endSym];
    const chindings = this[chindingsSym];
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const messageKey = this[messageKeySym];
    const errorKey = this[errorKeySym];
    let data = this[lsCacheSym][num] + time;
    // we need the child bindings added to the output first so instance logged
    // objects can take precedence when JSON.parse-ing the resulting log line
    data = data + chindings;
    let value;
    if (formatters.log) {
        obj = formatters.log(obj);
    }
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    let propStr = '';
    for(const key in obj){
        value = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
            if (serializers[key]) {
                value = serializers[key](value);
            } else if (key === errorKey && serializers.err) {
                value = serializers.err(value);
            }
            const stringifier = stringifiers[key] || wildcardStringifier;
            switch(typeof value){
                case 'undefined':
                case 'function':
                    continue;
                case 'number':
                    /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                        value = null;
                    }
                // this case explicitly falls through to the next one
                case 'boolean':
                    if (stringifier) value = stringifier(value);
                    break;
                case 'string':
                    value = (stringifier || asString)(value);
                    break;
                default:
                    value = (stringifier || stringify)(value, stringifySafe);
            }
            if (value === undefined) continue;
            const strKey = asString(key);
            propStr += ',' + strKey + ':' + value;
        }
    }
    let msgStr = '';
    if (msg !== undefined) {
        value = serializers[messageKey] ? serializers[messageKey](msg) : msg;
        const stringifier = stringifiers[messageKey] || wildcardStringifier;
        switch(typeof value){
            case 'function':
                break;
            case 'number':
                /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                    value = null;
                }
            // this case explicitly falls through to the next one
            case 'boolean':
                if (stringifier) value = stringifier(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            case 'string':
                value = (stringifier || asString)(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            default:
                value = (stringifier || stringify)(value, stringifySafe);
                msgStr = ',"' + messageKey + '":' + value;
        }
    }
    if (this[nestedKeySym] && propStr) {
        // place all the obj properties under the specified key
        // the nested key is already formatted from the constructor
        return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end;
    } else {
        return data + propStr + msgStr + end;
    }
}
function asChindings(instance, bindings) {
    let value;
    let data = instance[chindingsSym];
    const stringify = instance[stringifySym];
    const stringifySafe = instance[stringifySafeSym];
    const stringifiers = instance[stringifiersSym];
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    const serializers = instance[serializersSym];
    const formatter = instance[formattersSym].bindings;
    bindings = formatter(bindings);
    for(const key in bindings){
        value = bindings[key];
        const valid = (key.length < 5 || key !== 'level' && key !== 'serializers' && key !== 'formatters' && key !== 'customLevels') && bindings.hasOwnProperty(key) && value !== undefined;
        if (valid === true) {
            value = serializers[key] ? serializers[key](value) : value;
            value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe);
            if (value === undefined) continue;
            data += ',"' + key + '":' + value;
        }
    }
    return data;
}
function hasBeenTampered(stream) {
    return stream.write !== stream.constructor.prototype.write;
}
function buildSafeSonicBoom(opts) {
    const stream = new SonicBoom(opts);
    stream.on('error', filterBrokenPipe);
    // If we are sync: false, we must flush on exit
    if (!opts.sync && isMainThread) {
        onExit.register(stream, autoEnd);
        stream.on('close', function() {
            onExit.unregister(stream);
        });
    }
    return stream;
    //TURBOPACK unreachable
    ;
    function filterBrokenPipe(err) {
        // Impossible to replicate across all operating systems
        /* istanbul ignore next */ if (err.code === 'EPIPE') {
            // If we get EPIPE, we should stop logging here
            // however we have no control to the consumer of
            // SonicBoom, so we just overwrite the write method
            stream.write = noop;
            stream.end = noop;
            stream.flushSync = noop;
            stream.destroy = noop;
            return;
        }
        stream.removeListener('error', filterBrokenPipe);
        stream.emit('error', err);
    }
}
function autoEnd(stream, eventName) {
    // This check is needed only on some platforms
    /* istanbul ignore next */ if (stream.destroyed) {
        return;
    }
    if (eventName === 'beforeExit') {
        // We still have an event loop, let's use it
        stream.flush();
        stream.on('drain', function() {
            stream.end();
        });
    } else {
        // For some reason istanbul is not detecting this, but it's there
        /* istanbul ignore next */ // We do not have an event loop, so flush synchronously
        stream.flushSync();
    }
}
function createArgsNormalizer(defaultOptions) {
    return function normalizeArgs(instance, caller, opts = {}, stream) {
        // support stream as a string
        if (typeof opts === 'string') {
            stream = buildSafeSonicBoom({
                dest: opts
            });
            opts = {};
        } else if (typeof stream === 'string') {
            if (opts && opts.transport) {
                throw Error('only one of option.transport or stream can be specified');
            }
            stream = buildSafeSonicBoom({
                dest: stream
            });
        } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
            stream = opts;
            opts = {};
        } else if (opts.transport) {
            if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
                throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)');
            }
            if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
                throw Error('option.transport.targets do not allow custom level formatters');
            }
            let customLevels;
            if (opts.customLevels) {
                customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels);
            }
            stream = transport({
                caller,
                ...opts.transport,
                levels: customLevels
            });
        }
        opts = Object.assign({}, defaultOptions, opts);
        opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
        opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
        if (opts.prettyPrint) {
            throw new Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)');
        }
        const { enabled, onChild } = opts;
        if (enabled === false) opts.level = 'silent';
        if (!onChild) opts.onChild = noop;
        if (!stream) {
            if (!hasBeenTampered(process.stdout)) {
                // If process.stdout.fd is undefined, it means that we are running
                // in a worker thread. Let's assume we are logging to file descriptor 1.
                stream = buildSafeSonicBoom({
                    fd: process.stdout.fd || 1
                });
            } else {
                stream = process.stdout;
            }
        }
        return {
            opts,
            stream
        };
    };
}
function stringify(obj, stringifySafeFn) {
    try {
        return JSON.stringify(obj);
    } catch (_) {
        try {
            const stringify = stringifySafeFn || this[stringifySafeSym];
            return stringify(obj);
        } catch (_) {
            return '"[unable to serialize, circular reference is too complex to analyze]"';
        }
    }
}
function buildFormatters(level, bindings, log) {
    return {
        level,
        bindings,
        log
    };
}
/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */ function normalizeDestFileDescriptor(destination) {
    const fd = Number(destination);
    if (typeof destination === 'string' && Number.isFinite(fd)) {
        return fd;
    }
    // destination could be undefined if we are in a worker
    if (destination === undefined) {
        // This is stdout in UNIX systems
        return 1;
    }
    return destination;
}
module.exports = {
    noop,
    buildSafeSonicBoom,
    asChindings,
    asJson,
    genLog,
    createArgsNormalizer,
    stringify,
    buildFormatters,
    normalizeDestFileDescriptor
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { lsCacheSym, levelValSym, useOnlyCustomLevelsSym, streamSym, formattersSym, hooksSym, levelCompSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { noop, genLog } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const levelMethods = {
    fatal: (hook)=>{
        const logFatal = genLog(DEFAULT_LEVELS.fatal, hook);
        return function(...args) {
            const stream = this[streamSym];
            logFatal.call(this, ...args);
            if (typeof stream.flushSync === 'function') {
                try {
                    stream.flushSync();
                } catch (e) {
                // https://github.com/pinojs/pino/pull/740#discussion_r346788313
                }
            }
        };
    },
    error: (hook)=>genLog(DEFAULT_LEVELS.error, hook),
    warn: (hook)=>genLog(DEFAULT_LEVELS.warn, hook),
    info: (hook)=>genLog(DEFAULT_LEVELS.info, hook),
    debug: (hook)=>genLog(DEFAULT_LEVELS.debug, hook),
    trace: (hook)=>genLog(DEFAULT_LEVELS.trace, hook)
};
const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k)=>{
    o[DEFAULT_LEVELS[k]] = k;
    return o;
}, {});
const initialLsCache = Object.keys(nums).reduce((o, k)=>{
    o[k] = '{"level":' + Number(k);
    return o;
}, {});
function genLsCache(instance) {
    const formatter = instance[formattersSym].level;
    const { labels } = instance.levels;
    const cache = {};
    for(const label in labels){
        const level = formatter(labels[label], Number(label));
        cache[label] = JSON.stringify(level).slice(0, -1);
    }
    instance[lsCacheSym] = cache;
    return instance;
}
function isStandardLevel(level, useOnlyCustomLevels) {
    if (useOnlyCustomLevels) {
        return false;
    }
    switch(level){
        case 'fatal':
        case 'error':
        case 'warn':
        case 'info':
        case 'debug':
        case 'trace':
            return true;
        default:
            return false;
    }
}
function setLevel(level) {
    const { labels, values } = this.levels;
    if (typeof level === 'number') {
        if (labels[level] === undefined) throw Error('unknown level value' + level);
        level = labels[level];
    }
    if (values[level] === undefined) throw Error('unknown level ' + level);
    const preLevelVal = this[levelValSym];
    const levelVal = this[levelValSym] = values[level];
    const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
    const levelComparison = this[levelCompSym];
    const hook = this[hooksSym].logMethod;
    for(const key in values){
        if (levelComparison(values[key], levelVal) === false) {
            this[key] = noop;
            continue;
        }
        this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
    }
    this.emit('level-change', level, levelVal, labels[preLevelVal], preLevelVal, this);
}
function getLevel(level) {
    const { levels, levelVal } = this;
    // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
    return levels && levels.labels ? levels.labels[levelVal] : '';
}
function isLevelEnabled(logLevel) {
    const { values } = this.levels;
    const logLevelVal = values[logLevel];
    return logLevelVal !== undefined && this[levelCompSym](logLevelVal, this[levelValSym]);
}
/**
 * Determine if the given `current` level is enabled by comparing it
 * against the current threshold (`expected`).
 *
 * @param {SORTING_ORDER} direction comparison direction "ASC" or "DESC"
 * @param {number} current current log level number representation
 * @param {number} expected threshold value to compare with
 * @returns {boolean}
 */ function compareLevel(direction, current, expected) {
    if (direction === SORTING_ORDER.DESC) {
        return current <= expected;
    }
    return current >= expected;
}
/**
 * Create a level comparison function based on `levelComparison`
 * it could a default function which compares levels either in "ascending" or "descending" order or custom comparison function
 *
 * @param {SORTING_ORDER | Function} levelComparison sort levels order direction or custom comparison function
 * @returns Function
 */ function genLevelComparison(levelComparison) {
    if (typeof levelComparison === 'string') {
        return compareLevel.bind(null, levelComparison);
    }
    return levelComparison;
}
function mappings(customLevels = null, useOnlyCustomLevels = false) {
    const customNums = customLevels ? Object.keys(customLevels).reduce((o, k)=>{
        o[customLevels[k]] = k;
        return o;
    }, {}) : null;
    /* eslint-enable */ const labels = Object.assign(Object.create(Object.prototype, {
        Infinity: {
            value: 'silent'
        }
    }), useOnlyCustomLevels ? null : nums, customNums);
    const values = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    return {
        labels,
        values
    };
}
function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
    if (typeof defaultLevel === 'number') {
        const values = [].concat(Object.keys(customLevels || {}).map((key)=>customLevels[key]), useOnlyCustomLevels ? [] : Object.keys(nums).map((level)=>+level), Infinity);
        if (!values.includes(defaultLevel)) {
            throw Error(`default level:${defaultLevel} must be included in custom levels`);
        }
        return;
    }
    const labels = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    if (!(defaultLevel in labels)) {
        throw Error(`default level:${defaultLevel} must be included in custom levels`);
    }
}
function assertNoLevelCollisions(levels, customLevels) {
    const { labels, values } = levels;
    for(const k in customLevels){
        if (k in values) {
            throw Error('levels cannot be overridden');
        }
        if (customLevels[k] in labels) {
            throw Error('pre-existing level values cannot be used for new levels');
        }
    }
}
/**
 * Validates whether `levelComparison` is correct
 *
 * @throws Error
 * @param {SORTING_ORDER | Function} levelComparison - value to validate
 * @returns
 */ function assertLevelComparison(levelComparison) {
    if (typeof levelComparison === 'function') {
        return;
    }
    if (typeof levelComparison === 'string' && Object.values(SORTING_ORDER).includes(levelComparison)) {
        return;
    }
    throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type');
}
module.exports = {
    initialLsCache,
    genLsCache,
    levelMethods,
    getLevel,
    setLevel,
    isLevelEnabled,
    mappings,
    assertNoLevelCollisions,
    assertDefaultLevelFound,
    genLevelComparison,
    assertLevelComparison
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    version: '10.0.0'
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { EventEmitter } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { lsCacheSym, levelValSym, setLevelSym, getLevelSym, chindingsSym, parsedChindingsSym, mixinSym, asJsonSym, writeSym, mixinMergeStrategySym, timeSym, timeSliceIndexSym, streamSym, serializersSym, formattersSym, errorKeySym, messageKeySym, useOnlyCustomLevelsSym, needsMetadataGsym, redactFmtSym, stringifySym, formatOptsSym, stringifiersSym, msgPrefixSym, hooksSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { getLevel, setLevel, isLevelEnabled, mappings, initialLsCache, genLsCache, assertNoLevelCollisions } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { asChindings, asJson, buildFormatters, stringify, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {
};
const prototype = {
    constructor,
    child,
    bindings,
    setBindings,
    flush,
    isLevelEnabled,
    version,
    get level () {
        return this[getLevelSym]();
    },
    set level (lvl){
        this[setLevelSym](lvl);
    },
    get levelVal () {
        return this[levelValSym];
    },
    set levelVal (n){
        throw Error('levelVal is read-only');
    },
    get msgPrefix () {
        return this[msgPrefixSym];
    },
    get [Symbol.toStringTag] () {
        return 'Pino';
    },
    [lsCacheSym]: initialLsCache,
    [writeSym]: write,
    [asJsonSym]: asJson,
    [getLevelSym]: getLevel,
    [setLevelSym]: setLevel
};
Object.setPrototypeOf(prototype, EventEmitter.prototype);
// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function() {
    return Object.create(prototype);
};
const resetChildingsFormatter = (bindings)=>bindings;
function child(bindings, options) {
    if (!bindings) {
        throw Error('missing bindings for child Pino');
    }
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const instance = Object.create(this);
    // If an `options` object was not supplied, we can improve
    // the performance of child creation by skipping
    // the checks for set options and simply return
    // a baseline instance.
    if (options == null) {
        if (instance[formattersSym].bindings !== resetChildingsFormatter) {
            instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
        }
        instance[chindingsSym] = asChindings(instance, bindings);
        if (this.onChild !== noop) {
            this.onChild(instance);
        }
        return instance;
    }
    if (options.hasOwnProperty('serializers') === true) {
        instance[serializersSym] = Object.create(null);
        for(const k in serializers){
            instance[serializersSym][k] = serializers[k];
        }
        const parentSymbols = Object.getOwnPropertySymbols(serializers);
        /* eslint no-var: off */ for(var i = 0; i < parentSymbols.length; i++){
            const ks = parentSymbols[i];
            instance[serializersSym][ks] = serializers[ks];
        }
        for(const bk in options.serializers){
            instance[serializersSym][bk] = options.serializers[bk];
        }
        const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
        for(var bi = 0; bi < bindingsSymbols.length; bi++){
            const bks = bindingsSymbols[bi];
            instance[serializersSym][bks] = options.serializers[bks];
        }
    } else instance[serializersSym] = serializers;
    if (options.hasOwnProperty('formatters')) {
        const { level, bindings: chindings, log } = options.formatters;
        instance[formattersSym] = buildFormatters(level || formatters.level, chindings || resetChildingsFormatter, log || formatters.log);
    } else {
        instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
    }
    if (options.hasOwnProperty('customLevels') === true) {
        assertNoLevelCollisions(this.levels, options.customLevels);
        instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
        genLsCache(instance);
    }
    // redact must place before asChindings and only replace if exist
    if (typeof options.redact === 'object' && options.redact !== null || Array.isArray(options.redact)) {
        instance.redact = options.redact; // replace redact directly
        const stringifiers = redaction(instance.redact, stringify);
        const formatOpts = {
            stringify: stringifiers[redactFmtSym]
        };
        instance[stringifySym] = stringify;
        instance[stringifiersSym] = stringifiers;
        instance[formatOptsSym] = formatOpts;
    }
    if (typeof options.msgPrefix === 'string') {
        instance[msgPrefixSym] = (this[msgPrefixSym] || '') + options.msgPrefix;
    }
    instance[chindingsSym] = asChindings(instance, bindings);
    if (options.level !== undefined && options.level !== this.level || options.hasOwnProperty('customLevels')) {
        const childLevel = options.level || this.level;
        instance[setLevelSym](childLevel);
    }
    this.onChild(instance);
    return instance;
}
function bindings() {
    const chindings = this[chindingsSym];
    const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
    ;
    const bindingsFromJson = JSON.parse(chindingsJson);
    delete bindingsFromJson.pid;
    delete bindingsFromJson.hostname;
    return bindingsFromJson;
}
function setBindings(newBindings) {
    const chindings = asChindings(this, newBindings);
    this[chindingsSym] = chindings;
    delete this[parsedChindingsSym];
}
/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */ function defaultMixinMergeStrategy(mergeObject, mixinObject) {
    return Object.assign(mixinObject, mergeObject);
}
function write(_obj, msg, num) {
    const t = this[timeSym]();
    const mixin = this[mixinSym];
    const errorKey = this[errorKeySym];
    const messageKey = this[messageKeySym];
    const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy;
    let obj;
    const streamWriteHook = this[hooksSym].streamWrite;
    if (_obj === undefined || _obj === null) {
        obj = {};
    } else if (_obj instanceof Error) {
        obj = {
            [errorKey]: _obj
        };
        if (msg === undefined) {
            msg = _obj.message;
        }
    } else {
        obj = _obj;
        if (msg === undefined && _obj[messageKey] === undefined && _obj[errorKey]) {
            msg = _obj[errorKey].message;
        }
    }
    if (mixin) {
        obj = mixinMergeStrategy(obj, mixin(obj, num, this));
    }
    const s = this[asJsonSym](obj, msg, num, t);
    const stream = this[streamSym];
    if (stream[needsMetadataGsym] === true) {
        stream.lastLevel = num;
        stream.lastObj = obj;
        stream.lastMsg = msg;
        stream.lastTime = t.slice(this[timeSliceIndexSym]);
        stream.lastLogger = this; // for child loggers
    }
    stream.write(streamWriteHook ? streamWriteHook(s) : s);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw Error('callback must be a function');
    }
    const stream = this[streamSym];
    if (typeof stream.flush === 'function') {
        stream.flush(cb || noop);
    } else if (cb) cb();
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/pino.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const stdSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const caller = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
const time = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/time.js [app-ssr] (ecmascript)");
const proto = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)");
const symbols = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { configure } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/safe-stable-stringify/index.js [app-ssr] (ecmascript)");
const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const { createArgsNormalizer, asChindings, buildSafeSonicBoom, buildFormatters, stringify, normalizeDestFileDescriptor, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const { chindingsSym, redactFmtSym, serializersSym, timeSym, timeSliceIndexSym, streamSym, stringifySym, stringifySafeSym, stringifiersSym, setLevelSym, endSym, formatOptsSym, messageKeySym, errorKeySym, nestedKeySym, mixinSym, levelCompSym, useOnlyCustomLevelsSym, formattersSym, hooksSym, nestedKeyStrSym, mixinMergeStrategySym, msgPrefixSym } = symbols;
const { epochTime, nullTime } = time;
const { pid } = process;
const hostname = os.hostname();
const defaultErrorSerializer = stdSerializers.err;
const defaultOptions = {
    level: 'info',
    levelComparison: SORTING_ORDER.ASC,
    levels: DEFAULT_LEVELS,
    messageKey: 'msg',
    errorKey: 'err',
    nestedKey: null,
    enabled: true,
    base: {
        pid,
        hostname
    },
    serializers: Object.assign(Object.create(null), {
        err: defaultErrorSerializer
    }),
    formatters: Object.assign(Object.create(null), {
        bindings (bindings) {
            return bindings;
        },
        level (label, number) {
            return {
                level: number
            };
        }
    }),
    hooks: {
        logMethod: undefined,
        streamWrite: undefined
    },
    timestamp: epochTime,
    name: undefined,
    redact: null,
    customLevels: null,
    useOnlyCustomLevels: false,
    depthLimit: 5,
    edgeLimit: 100
};
const normalize = createArgsNormalizer(defaultOptions);
const serializers = Object.assign(Object.create(null), stdSerializers);
function pino(...args) {
    const instance = {};
    const { opts, stream } = normalize(instance, caller(), ...args);
    if (opts.level && typeof opts.level === 'string' && DEFAULT_LEVELS[opts.level.toLowerCase()] !== undefined) opts.level = opts.level.toLowerCase();
    const { redact, crlf, serializers, timestamp, messageKey, errorKey, nestedKey, base, name, level, customLevels, levelComparison, mixin, mixinMergeStrategy, useOnlyCustomLevels, formatters, hooks, depthLimit, edgeLimit, onChild, msgPrefix } = opts;
    const stringifySafe = configure({
        maximumDepth: depthLimit,
        maximumBreadth: edgeLimit
    });
    const allFormatters = buildFormatters(formatters.level, formatters.bindings, formatters.log);
    const stringifyFn = stringify.bind({
        [stringifySafeSym]: stringifySafe
    });
    const stringifiers = redact ? redaction(redact, stringifyFn) : {};
    const formatOpts = redact ? {
        stringify: stringifiers[redactFmtSym]
    } : {
        stringify: stringifyFn
    };
    const end = '}' + (crlf ? '\r\n' : '\n');
    const coreChindings = asChindings.bind(null, {
        [chindingsSym]: '',
        [serializersSym]: serializers,
        [stringifiersSym]: stringifiers,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [formattersSym]: allFormatters
    });
    let chindings = '';
    if (base !== null) {
        if (name === undefined) {
            chindings = coreChindings(base);
        } else {
            chindings = coreChindings(Object.assign({}, base, {
                name
            }));
        }
    }
    const time = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
    const timeSliceIndex = time().indexOf(':') + 1;
    if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true');
    if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
    if (msgPrefix && typeof msgPrefix !== 'string') throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`);
    assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels);
    const levels = mappings(customLevels, useOnlyCustomLevels);
    if (typeof stream.emit === 'function') {
        stream.emit('message', {
            code: 'PINO_CONFIG',
            config: {
                levels,
                messageKey,
                errorKey
            }
        });
    }
    assertLevelComparison(levelComparison);
    const levelCompFunc = genLevelComparison(levelComparison);
    Object.assign(instance, {
        levels,
        [levelCompSym]: levelCompFunc,
        [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
        [streamSym]: stream,
        [timeSym]: time,
        [timeSliceIndexSym]: timeSliceIndex,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [stringifiersSym]: stringifiers,
        [endSym]: end,
        [formatOptsSym]: formatOpts,
        [messageKeySym]: messageKey,
        [errorKeySym]: errorKey,
        [nestedKeySym]: nestedKey,
        // protect against injection
        [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
        [serializersSym]: serializers,
        [mixinSym]: mixin,
        [mixinMergeStrategySym]: mixinMergeStrategy,
        [chindingsSym]: chindings,
        [formattersSym]: allFormatters,
        [hooksSym]: hooks,
        silent: noop,
        onChild,
        [msgPrefixSym]: msgPrefix
    });
    Object.setPrototypeOf(instance, proto());
    genLsCache(instance);
    instance[setLevelSym](level);
    return instance;
}
module.exports = pino;
module.exports.destination = (dest = process.stdout.fd)=>{
    if (typeof dest === 'object') {
        dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
        return buildSafeSonicBoom(dest);
    } else {
        return buildSafeSonicBoom({
            dest: normalizeDestFileDescriptor(dest),
            minLength: 0
        });
    }
};
module.exports.transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
module.exports.multistream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)");
module.exports.levels = mappings();
module.exports.stdSerializers = serializers;
module.exports.stdTimeFunctions = Object.assign({}, time);
module.exports.symbols = symbols;
module.exports.version = version;
// Enables default and name export with TypeScript and Babel
module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function noOpPrepareStackTrace(_, stack) {
    return stack;
}
module.exports = function getCallers() {
    const originalPrepare = Error.prepareStackTrace;
    Error.prepareStackTrace = noOpPrepareStackTrace;
    const stack = new Error().stack;
    Error.prepareStackTrace = originalPrepare;
    if (!Array.isArray(stack)) {
        return undefined;
    }
    const entries = stack.slice(2);
    const fileNames = [];
    for (const entry of entries){
        if (!entry) {
            continue;
        }
        fileNames.push(entry.getFileName());
    }
    return fileNames;
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createRequire } = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
const getCallers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const { join, isAbsolute, sep } = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const ThreadStream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/index.js [app-ssr] (ecmascript)");
function setupOnExit(stream) {
    // This is leak free, it does not leave event handlers
    onExit.register(stream, autoEnd);
    onExit.registerBeforeExit(stream, flush);
    stream.on('close', function() {
        onExit.unregister(stream);
    });
}
function buildStream(filename, workerData, workerOpts, sync) {
    const stream = new ThreadStream({
        filename,
        workerData,
        workerOpts,
        sync
    });
    stream.on('ready', onReady);
    stream.on('close', function() {
        process.removeListener('exit', onExit);
    });
    process.on('exit', onExit);
    function onReady() {
        process.removeListener('exit', onExit);
        stream.unref();
        if (workerOpts.autoEnd !== false) {
            setupOnExit(stream);
        }
    }
    function onExit() {
        /* istanbul ignore next */ if (stream.closed) {
            return;
        }
        stream.flushSync();
        // Apparently there is a very sporadic race condition
        // that in certain OS would prevent the messages to be flushed
        // because the thread might not have been created still.
        // Unfortunately we need to sleep(100) in this case.
        sleep(100);
        stream.end();
    }
    return stream;
}
function autoEnd(stream) {
    stream.ref();
    stream.flushSync();
    stream.end();
    stream.once('close', function() {
        stream.unref();
    });
}
function flush(stream) {
    stream.flushSync();
}
function transport(fullOptions) {
    const { pipeline, targets, levels, dedupe, worker = {}, caller = getCallers(), sync = false } = fullOptions;
    const options = {
        ...fullOptions.options
    };
    // Backwards compatibility
    const callers = typeof caller === 'string' ? [
        caller
    ] : caller;
    // This will be eventually modified by bundlers
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    let target = fullOptions.target;
    if (target && targets) {
        throw new Error('only one of target or targets can be specified');
    }
    if (targets) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib"), 'worker.js');
        options.targets = targets.filter((dest)=>dest.target).map((dest)=>{
            return {
                ...dest,
                target: fixTarget(dest.target)
            };
        });
        options.pipelines = targets.filter((dest)=>dest.pipeline).map((dest)=>{
            return dest.pipeline.map((t)=>{
                return {
                    ...t,
                    level: dest.level,
                    target: fixTarget(t.target)
                };
            });
        });
    } else if (pipeline) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib"), 'worker.js');
        options.pipelines = [
            pipeline.map((dest)=>{
                return {
                    ...dest,
                    target: fixTarget(dest.target)
                };
            })
        ];
    }
    if (levels) {
        options.levels = levels;
    }
    if (dedupe) {
        options.dedupe = dedupe;
    }
    options.pinoWillSendConfig = true;
    return buildStream(fixTarget(target), options, worker, sync);
    //TURBOPACK unreachable
    ;
    function fixTarget(origin) {
        origin = bundlerOverrides[origin] || origin;
        if (isAbsolute(origin) || origin.indexOf('file://') === 0) {
            return origin;
        }
        if (origin === 'pino/file') {
            return join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib"), '..', 'file.js');
        }
        let fixTarget;
        for (const filePath of callers){
            try {
                const context = filePath === 'node:repl' ? process.cwd() + sep : filePath;
                fixTarget = createRequire(context).resolve(origin);
                break;
            } catch (err) {
                continue;
            }
        }
        if (!fixTarget) {
            throw new Error(`unable to determine transport target for "${origin}"`);
        }
        return fixTarget;
    }
}
module.exports = transport;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Represents default log level values
 *
 * @enum {number}
 */ const DEFAULT_LEVELS = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
};
/**
 * Represents sort order direction: `ascending` or `descending`
 *
 * @enum {string}
 */ const SORTING_ORDER = {
    ASC: 'ASC',
    DESC: 'DESC'
};
module.exports = {
    DEFAULT_LEVELS,
    SORTING_ORDER
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const metadata = Symbol.for('pino.metadata');
const { DEFAULT_LEVELS } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info;
function multistream(streamsArray, opts) {
    streamsArray = streamsArray || [];
    opts = opts || {
        dedupe: false
    };
    const streamLevels = Object.create(DEFAULT_LEVELS);
    streamLevels.silent = Infinity;
    if (opts.levels && typeof opts.levels === 'object') {
        Object.keys(opts.levels).forEach((i)=>{
            streamLevels[i] = opts.levels[i];
        });
    }
    const res = {
        write,
        add,
        remove,
        emit,
        flushSync,
        end,
        minLevel: 0,
        lastId: 0,
        streams: [],
        clone,
        [metadata]: true,
        streamLevels
    };
    if (Array.isArray(streamsArray)) {
        streamsArray.forEach(add, res);
    } else {
        add.call(res, streamsArray);
    }
    // clean this object up
    // or it will stay allocated forever
    // as it is closed on the following closures
    streamsArray = null;
    return res;
    //TURBOPACK unreachable
    ;
    // we can exit early because the streams are ordered by level
    function write(data) {
        let dest;
        const level = this.lastLevel;
        const { streams } = this;
        // for handling situation when several streams has the same level
        let recordedLevel = 0;
        let stream;
        // if dedupe set to true we send logs to the stream with the highest level
        // therefore, we have to change sorting order
        for(let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)){
            dest = streams[i];
            if (dest.level <= level) {
                if (recordedLevel !== 0 && recordedLevel !== dest.level) {
                    break;
                }
                stream = dest.stream;
                if (stream[metadata]) {
                    const { lastTime, lastMsg, lastObj, lastLogger } = this;
                    stream.lastLevel = level;
                    stream.lastTime = lastTime;
                    stream.lastMsg = lastMsg;
                    stream.lastObj = lastObj;
                    stream.lastLogger = lastLogger;
                }
                stream.write(data);
                if (opts.dedupe) {
                    recordedLevel = dest.level;
                }
            } else if (!opts.dedupe) {
                break;
            }
        }
    }
    function emit(...args) {
        for (const { stream } of this.streams){
            if (typeof stream.emit === 'function') {
                stream.emit(...args);
            }
        }
    }
    function flushSync() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
        }
    }
    function add(dest) {
        if (!dest) {
            return res;
        }
        // Check that dest implements either StreamEntry or DestinationStream
        const isStream = typeof dest.write === 'function' || dest.stream;
        const stream_ = dest.write ? dest : dest.stream;
        // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
        if (!isStream) {
            throw Error('stream object needs to implement either StreamEntry or DestinationStream interface');
        }
        const { streams, streamLevels } = this;
        let level;
        if (typeof dest.levelVal === 'number') {
            level = dest.levelVal;
        } else if (typeof dest.level === 'string') {
            level = streamLevels[dest.level];
        } else if (typeof dest.level === 'number') {
            level = dest.level;
        } else {
            level = DEFAULT_INFO_LEVEL;
        }
        const dest_ = {
            stream: stream_,
            level,
            levelVal: undefined,
            id: ++res.lastId
        };
        streams.unshift(dest_);
        streams.sort(compareByLevel);
        this.minLevel = streams[0].level;
        return res;
    }
    function remove(id) {
        const { streams } = this;
        const index = streams.findIndex((s)=>s.id === id);
        if (index >= 0) {
            streams.splice(index, 1);
            streams.sort(compareByLevel);
            this.minLevel = streams.length > 0 ? streams[0].level : -1;
        }
        return res;
    }
    function end() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
            stream.end();
        }
    }
    function clone(level) {
        const streams = new Array(this.streams.length);
        for(let i = 0; i < streams.length; i++){
            streams[i] = {
                level,
                stream: this.streams[i].stream
            };
        }
        return {
            write,
            add,
            remove,
            minLevel: level,
            streams,
            clone,
            emit,
            flushSync,
            [metadata]: true
        };
    }
}
function compareByLevel(a, b) {
    return a.level - b.level;
}
function initLoopVar(length, dedupe) {
    return dedupe ? length - 1 : 0;
}
function adjustLoopVar(i, dedupe) {
    return dedupe ? i - 1 : i + 1;
}
function checkLoopVar(i, length, dedupe) {
    return dedupe ? i >= 0 : i < length;
}
module.exports = multistream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const setLevelSym = Symbol('pino.setLevel');
const getLevelSym = Symbol('pino.getLevel');
const levelValSym = Symbol('pino.levelVal');
const levelCompSym = Symbol('pino.levelComp');
const useLevelLabelsSym = Symbol('pino.useLevelLabels');
const useOnlyCustomLevelsSym = Symbol('pino.useOnlyCustomLevels');
const mixinSym = Symbol('pino.mixin');
const lsCacheSym = Symbol('pino.lsCache');
const chindingsSym = Symbol('pino.chindings');
const asJsonSym = Symbol('pino.asJson');
const writeSym = Symbol('pino.write');
const redactFmtSym = Symbol('pino.redactFmt');
const timeSym = Symbol('pino.time');
const timeSliceIndexSym = Symbol('pino.timeSliceIndex');
const streamSym = Symbol('pino.stream');
const stringifySym = Symbol('pino.stringify');
const stringifySafeSym = Symbol('pino.stringifySafe');
const stringifiersSym = Symbol('pino.stringifiers');
const endSym = Symbol('pino.end');
const formatOptsSym = Symbol('pino.formatOpts');
const messageKeySym = Symbol('pino.messageKey');
const errorKeySym = Symbol('pino.errorKey');
const nestedKeySym = Symbol('pino.nestedKey');
const nestedKeyStrSym = Symbol('pino.nestedKeyStr');
const mixinMergeStrategySym = Symbol('pino.mixinMergeStrategy');
const msgPrefixSym = Symbol('pino.msgPrefix');
const wildcardFirstSym = Symbol('pino.wildcardFirst');
// public symbols, no need to use the same pino
// version for these
const serializersSym = Symbol.for('pino.serializers');
const formattersSym = Symbol.for('pino.formatters');
const hooksSym = Symbol.for('pino.hooks');
const needsMetadataGsym = Symbol.for('pino.metadata');
module.exports = {
    setLevelSym,
    getLevelSym,
    levelValSym,
    levelCompSym,
    useLevelLabelsSym,
    mixinSym,
    lsCacheSym,
    chindingsSym,
    asJsonSym,
    writeSym,
    serializersSym,
    redactFmtSym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    stringifySym,
    stringifySafeSym,
    stringifiersSym,
    endSym,
    formatOptsSym,
    messageKeySym,
    errorKeySym,
    nestedKeySym,
    wildcardFirstSym,
    needsMetadataGsym,
    useOnlyCustomLevelsSym,
    formattersSym,
    hooksSym,
    nestedKeyStrSym,
    mixinMergeStrategySym,
    msgPrefixSym
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const slowRedact = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/slow-redact/index.js [app-ssr] (ecmascript)");
const { redactFmtSym, wildcardFirstSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
// Custom rx regex equivalent to fast-redact's rx
const rx = /[^.[\]]+|\[([^[\]]*?)\]/g;
const CENSOR = '[Redacted]';
const strict = false // TODO should this be configurable?
;
function redaction(opts, serialize) {
    const { paths, censor, remove } = handle(opts);
    const shape = paths.reduce((o, str)=>{
        rx.lastIndex = 0;
        const first = rx.exec(str);
        const next = rx.exec(str);
        // ns is the top-level path segment, brackets + quoting removed.
        let ns = first[1] !== undefined ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, '$1') : first[0];
        if (ns === '*') {
            ns = wildcardFirstSym;
        }
        // top level key:
        if (next === null) {
            o[ns] = null;
            return o;
        }
        // path with at least two segments:
        // if ns is already redacted at the top level, ignore lower level redactions
        if (o[ns] === null) {
            return o;
        }
        const { index } = next;
        const nextPath = `${str.substr(index, str.length - 1)}`;
        o[ns] = o[ns] || [];
        // shape is a mix of paths beginning with literal values and wildcard
        // paths [ "a.b.c", "*.b.z" ] should reduce to a shape of
        // { "a": [ "b.c", "b.z" ], *: [ "b.z" ] }
        // note: "b.z" is in both "a" and * arrays because "a" matches the wildcard.
        // (* entry has wildcardFirstSym as key)
        if (ns !== wildcardFirstSym && o[ns].length === 0) {
            // first time ns's get all '*' redactions so far
            o[ns].push(...o[wildcardFirstSym] || []);
        }
        if (ns === wildcardFirstSym) {
            // new * path gets added to all previously registered literal ns's.
            Object.keys(o).forEach(function(k) {
                if (o[k]) {
                    o[k].push(nextPath);
                }
            });
        }
        o[ns].push(nextPath);
        return o;
    }, {});
    // the redactor assigned to the format symbol key
    // provides top level redaction for instances where
    // an object is interpolated into the msg string
    const result = {
        [redactFmtSym]: slowRedact({
            paths,
            censor,
            serialize,
            strict,
            remove
        })
    };
    const topCensor = (...args)=>{
        return typeof censor === 'function' ? serialize(censor(...args)) : serialize(censor);
    };
    return [
        ...Object.keys(shape),
        ...Object.getOwnPropertySymbols(shape)
    ].reduce((o, k)=>{
        // top level key:
        if (shape[k] === null) {
            o[k] = (value)=>topCensor(value, [
                    k
                ]);
        } else {
            const wrappedCensor = typeof censor === 'function' ? (value, path)=>{
                return censor(value, [
                    k,
                    ...path
                ]);
            } : censor;
            o[k] = slowRedact({
                paths: shape[k],
                censor: wrappedCensor,
                serialize,
                strict,
                remove
            });
        }
        return o;
    }, result);
}
function handle(opts) {
    if (Array.isArray(opts)) {
        opts = {
            paths: opts,
            censor: CENSOR
        };
        return opts;
    }
    let { paths, censor = CENSOR, remove } = opts;
    if (Array.isArray(paths) === false) {
        throw Error('pino – redact must contain an array of strings');
    }
    if (remove === true) censor = undefined;
    return {
        paths,
        censor,
        remove
    };
}
module.exports = redaction;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/time.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const nullTime = ()=>'';
const epochTime = ()=>`,"time":${Date.now()}`;
const unixTime = ()=>`,"time":${Math.round(Date.now() / 1000.0)}`;
const isoTime = ()=>`,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability
;
const NS_PER_MS = 1_000_000n;
const NS_PER_SEC = 1_000_000_000n;
const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS;
const startHrTime = process.hrtime.bigint();
const isoTimeNano = ()=>{
    const elapsedNs = process.hrtime.bigint() - startHrTime;
    const currentTimeNs = startWallTimeNs + elapsedNs;
    const secondsSinceEpoch = currentTimeNs / NS_PER_SEC;
    const nanosWithinSecond = currentTimeNs % NS_PER_SEC;
    const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1_000_000n);
    const date = new Date(msSinceEpoch);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond.toString().padStart(9, '0')}Z"`;
};
module.exports = {
    nullTime,
    epochTime,
    unixTime,
    isoTime,
    isoTimeNano
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const diagChan = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-ssr] (ecmascript)");
const { mapHttpRequest, mapHttpResponse } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const SonicBoom = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const { lsCacheSym, chindingsSym, writeSym, serializersSym, formatOptsSym, endSym, stringifiersSym, stringifySym, stringifySafeSym, wildcardFirstSym, nestedKeySym, formattersSym, messageKeySym, errorKeySym, nestedKeyStrSym, msgPrefixSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { isMainThread } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
const asJsonChan = diagChan.tracingChannel('pino_asJson');
function noop() {}
function genLog(level, hook) {
    if (!hook) return LOG;
    return function hookWrappedLog(...args) {
        hook.call(this, args, LOG, level);
    };
    //TURBOPACK unreachable
    ;
    function LOG(o, ...n) {
        if (typeof o === 'object') {
            let msg = o;
            if (o !== null) {
                if (o.method && o.headers && o.socket) {
                    o = mapHttpRequest(o);
                } else if (typeof o.setHeader === 'function') {
                    o = mapHttpResponse(o);
                }
            }
            let formatParams;
            if (msg === null && n.length === 0) {
                formatParams = [
                    null
                ];
            } else {
                msg = n.shift();
                formatParams = n;
            }
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level);
        } else {
            let msg = o === undefined ? n.shift() : o;
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](null, format(msg, n, this[formatOptsSym]), level);
        }
    }
}
// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function asString(str) {
    let result = '';
    let last = 0;
    let found = false;
    let point = 255;
    const l = str.length;
    if (l > 100) {
        return JSON.stringify(str);
    }
    for(var i = 0; i < l && point >= 32; i++){
        point = str.charCodeAt(i);
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + '\\';
            last = i;
            found = true;
        }
    }
    if (!found) {
        result = str;
    } else {
        result += str.slice(last);
    }
    return point < 32 ? JSON.stringify(str) : '"' + result + '"';
}
/**
 * `asJson` wraps `_asJson` in order to facilitate generating diagnostics.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string}
 */ function asJson(obj, msg, num, time) {
    if (asJsonChan.hasSubscribers === false) {
        return _asJson.call(this, obj, msg, num, time);
    }
    const store = {
        instance: this,
        arguments
    };
    return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time);
}
/**
 * `_asJson` parses all collected data and generates the finalized newline
 * delimited JSON string.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string} The finalized log string terminated with a newline.
 * @private
 */ function _asJson(obj, msg, num, time) {
    const stringify = this[stringifySym];
    const stringifySafe = this[stringifySafeSym];
    const stringifiers = this[stringifiersSym];
    const end = this[endSym];
    const chindings = this[chindingsSym];
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const messageKey = this[messageKeySym];
    const errorKey = this[errorKeySym];
    let data = this[lsCacheSym][num] + time;
    // we need the child bindings added to the output first so instance logged
    // objects can take precedence when JSON.parse-ing the resulting log line
    data = data + chindings;
    let value;
    if (formatters.log) {
        obj = formatters.log(obj);
    }
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    let propStr = '';
    for(const key in obj){
        value = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
            if (serializers[key]) {
                value = serializers[key](value);
            } else if (key === errorKey && serializers.err) {
                value = serializers.err(value);
            }
            const stringifier = stringifiers[key] || wildcardStringifier;
            switch(typeof value){
                case 'undefined':
                case 'function':
                    continue;
                case 'number':
                    /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                        value = null;
                    }
                // this case explicitly falls through to the next one
                case 'boolean':
                    if (stringifier) value = stringifier(value);
                    break;
                case 'string':
                    value = (stringifier || asString)(value);
                    break;
                default:
                    value = (stringifier || stringify)(value, stringifySafe);
            }
            if (value === undefined) continue;
            const strKey = asString(key);
            propStr += ',' + strKey + ':' + value;
        }
    }
    let msgStr = '';
    if (msg !== undefined) {
        value = serializers[messageKey] ? serializers[messageKey](msg) : msg;
        const stringifier = stringifiers[messageKey] || wildcardStringifier;
        switch(typeof value){
            case 'function':
                break;
            case 'number':
                /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                    value = null;
                }
            // this case explicitly falls through to the next one
            case 'boolean':
                if (stringifier) value = stringifier(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            case 'string':
                value = (stringifier || asString)(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            default:
                value = (stringifier || stringify)(value, stringifySafe);
                msgStr = ',"' + messageKey + '":' + value;
        }
    }
    if (this[nestedKeySym] && propStr) {
        // place all the obj properties under the specified key
        // the nested key is already formatted from the constructor
        return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end;
    } else {
        return data + propStr + msgStr + end;
    }
}
function asChindings(instance, bindings) {
    let value;
    let data = instance[chindingsSym];
    const stringify = instance[stringifySym];
    const stringifySafe = instance[stringifySafeSym];
    const stringifiers = instance[stringifiersSym];
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    const serializers = instance[serializersSym];
    const formatter = instance[formattersSym].bindings;
    bindings = formatter(bindings);
    for(const key in bindings){
        value = bindings[key];
        const valid = (key.length < 5 || key !== 'level' && key !== 'serializers' && key !== 'formatters' && key !== 'customLevels') && bindings.hasOwnProperty(key) && value !== undefined;
        if (valid === true) {
            value = serializers[key] ? serializers[key](value) : value;
            value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe);
            if (value === undefined) continue;
            data += ',"' + key + '":' + value;
        }
    }
    return data;
}
function hasBeenTampered(stream) {
    return stream.write !== stream.constructor.prototype.write;
}
function buildSafeSonicBoom(opts) {
    const stream = new SonicBoom(opts);
    stream.on('error', filterBrokenPipe);
    // If we are sync: false, we must flush on exit
    if (!opts.sync && isMainThread) {
        onExit.register(stream, autoEnd);
        stream.on('close', function() {
            onExit.unregister(stream);
        });
    }
    return stream;
    //TURBOPACK unreachable
    ;
    function filterBrokenPipe(err) {
        // Impossible to replicate across all operating systems
        /* istanbul ignore next */ if (err.code === 'EPIPE') {
            // If we get EPIPE, we should stop logging here
            // however we have no control to the consumer of
            // SonicBoom, so we just overwrite the write method
            stream.write = noop;
            stream.end = noop;
            stream.flushSync = noop;
            stream.destroy = noop;
            return;
        }
        stream.removeListener('error', filterBrokenPipe);
        stream.emit('error', err);
    }
}
function autoEnd(stream, eventName) {
    // This check is needed only on some platforms
    /* istanbul ignore next */ if (stream.destroyed) {
        return;
    }
    if (eventName === 'beforeExit') {
        // We still have an event loop, let's use it
        stream.flush();
        stream.on('drain', function() {
            stream.end();
        });
    } else {
        // For some reason istanbul is not detecting this, but it's there
        /* istanbul ignore next */ // We do not have an event loop, so flush synchronously
        stream.flushSync();
    }
}
function createArgsNormalizer(defaultOptions) {
    return function normalizeArgs(instance, caller, opts = {}, stream) {
        // support stream as a string
        if (typeof opts === 'string') {
            stream = buildSafeSonicBoom({
                dest: opts
            });
            opts = {};
        } else if (typeof stream === 'string') {
            if (opts && opts.transport) {
                throw Error('only one of option.transport or stream can be specified');
            }
            stream = buildSafeSonicBoom({
                dest: stream
            });
        } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
            stream = opts;
            opts = {};
        } else if (opts.transport) {
            if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
                throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)');
            }
            if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
                throw Error('option.transport.targets do not allow custom level formatters');
            }
            let customLevels;
            if (opts.customLevels) {
                customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels);
            }
            stream = transport({
                caller,
                ...opts.transport,
                levels: customLevels
            });
        }
        opts = Object.assign({}, defaultOptions, opts);
        opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
        opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
        if (opts.prettyPrint) {
            throw new Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)');
        }
        const { enabled, onChild } = opts;
        if (enabled === false) opts.level = 'silent';
        if (!onChild) opts.onChild = noop;
        if (!stream) {
            if (!hasBeenTampered(process.stdout)) {
                // If process.stdout.fd is undefined, it means that we are running
                // in a worker thread. Let's assume we are logging to file descriptor 1.
                stream = buildSafeSonicBoom({
                    fd: process.stdout.fd || 1
                });
            } else {
                stream = process.stdout;
            }
        }
        return {
            opts,
            stream
        };
    };
}
function stringify(obj, stringifySafeFn) {
    try {
        return JSON.stringify(obj);
    } catch (_) {
        try {
            const stringify = stringifySafeFn || this[stringifySafeSym];
            return stringify(obj);
        } catch (_) {
            return '"[unable to serialize, circular reference is too complex to analyze]"';
        }
    }
}
function buildFormatters(level, bindings, log) {
    return {
        level,
        bindings,
        log
    };
}
/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */ function normalizeDestFileDescriptor(destination) {
    const fd = Number(destination);
    if (typeof destination === 'string' && Number.isFinite(fd)) {
        return fd;
    }
    // destination could be undefined if we are in a worker
    if (destination === undefined) {
        // This is stdout in UNIX systems
        return 1;
    }
    return destination;
}
module.exports = {
    noop,
    buildSafeSonicBoom,
    asChindings,
    asJson,
    genLog,
    createArgsNormalizer,
    stringify,
    buildFormatters,
    normalizeDestFileDescriptor
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { lsCacheSym, levelValSym, useOnlyCustomLevelsSym, streamSym, formattersSym, hooksSym, levelCompSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { noop, genLog } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const levelMethods = {
    fatal: (hook)=>{
        const logFatal = genLog(DEFAULT_LEVELS.fatal, hook);
        return function(...args) {
            const stream = this[streamSym];
            logFatal.call(this, ...args);
            if (typeof stream.flushSync === 'function') {
                try {
                    stream.flushSync();
                } catch (e) {
                // https://github.com/pinojs/pino/pull/740#discussion_r346788313
                }
            }
        };
    },
    error: (hook)=>genLog(DEFAULT_LEVELS.error, hook),
    warn: (hook)=>genLog(DEFAULT_LEVELS.warn, hook),
    info: (hook)=>genLog(DEFAULT_LEVELS.info, hook),
    debug: (hook)=>genLog(DEFAULT_LEVELS.debug, hook),
    trace: (hook)=>genLog(DEFAULT_LEVELS.trace, hook)
};
const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k)=>{
    o[DEFAULT_LEVELS[k]] = k;
    return o;
}, {});
const initialLsCache = Object.keys(nums).reduce((o, k)=>{
    o[k] = '{"level":' + Number(k);
    return o;
}, {});
function genLsCache(instance) {
    const formatter = instance[formattersSym].level;
    const { labels } = instance.levels;
    const cache = {};
    for(const label in labels){
        const level = formatter(labels[label], Number(label));
        cache[label] = JSON.stringify(level).slice(0, -1);
    }
    instance[lsCacheSym] = cache;
    return instance;
}
function isStandardLevel(level, useOnlyCustomLevels) {
    if (useOnlyCustomLevels) {
        return false;
    }
    switch(level){
        case 'fatal':
        case 'error':
        case 'warn':
        case 'info':
        case 'debug':
        case 'trace':
            return true;
        default:
            return false;
    }
}
function setLevel(level) {
    const { labels, values } = this.levels;
    if (typeof level === 'number') {
        if (labels[level] === undefined) throw Error('unknown level value' + level);
        level = labels[level];
    }
    if (values[level] === undefined) throw Error('unknown level ' + level);
    const preLevelVal = this[levelValSym];
    const levelVal = this[levelValSym] = values[level];
    const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
    const levelComparison = this[levelCompSym];
    const hook = this[hooksSym].logMethod;
    for(const key in values){
        if (levelComparison(values[key], levelVal) === false) {
            this[key] = noop;
            continue;
        }
        this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
    }
    this.emit('level-change', level, levelVal, labels[preLevelVal], preLevelVal, this);
}
function getLevel(level) {
    const { levels, levelVal } = this;
    // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
    return levels && levels.labels ? levels.labels[levelVal] : '';
}
function isLevelEnabled(logLevel) {
    const { values } = this.levels;
    const logLevelVal = values[logLevel];
    return logLevelVal !== undefined && this[levelCompSym](logLevelVal, this[levelValSym]);
}
/**
 * Determine if the given `current` level is enabled by comparing it
 * against the current threshold (`expected`).
 *
 * @param {SORTING_ORDER} direction comparison direction "ASC" or "DESC"
 * @param {number} current current log level number representation
 * @param {number} expected threshold value to compare with
 * @returns {boolean}
 */ function compareLevel(direction, current, expected) {
    if (direction === SORTING_ORDER.DESC) {
        return current <= expected;
    }
    return current >= expected;
}
/**
 * Create a level comparison function based on `levelComparison`
 * it could a default function which compares levels either in "ascending" or "descending" order or custom comparison function
 *
 * @param {SORTING_ORDER | Function} levelComparison sort levels order direction or custom comparison function
 * @returns Function
 */ function genLevelComparison(levelComparison) {
    if (typeof levelComparison === 'string') {
        return compareLevel.bind(null, levelComparison);
    }
    return levelComparison;
}
function mappings(customLevels = null, useOnlyCustomLevels = false) {
    const customNums = customLevels ? Object.keys(customLevels).reduce((o, k)=>{
        o[customLevels[k]] = k;
        return o;
    }, {}) : null;
    /* eslint-enable */ const labels = Object.assign(Object.create(Object.prototype, {
        Infinity: {
            value: 'silent'
        }
    }), useOnlyCustomLevels ? null : nums, customNums);
    const values = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    return {
        labels,
        values
    };
}
function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
    if (typeof defaultLevel === 'number') {
        const values = [].concat(Object.keys(customLevels || {}).map((key)=>customLevels[key]), useOnlyCustomLevels ? [] : Object.keys(nums).map((level)=>+level), Infinity);
        if (!values.includes(defaultLevel)) {
            throw Error(`default level:${defaultLevel} must be included in custom levels`);
        }
        return;
    }
    const labels = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    if (!(defaultLevel in labels)) {
        throw Error(`default level:${defaultLevel} must be included in custom levels`);
    }
}
function assertNoLevelCollisions(levels, customLevels) {
    const { labels, values } = levels;
    for(const k in customLevels){
        if (k in values) {
            throw Error('levels cannot be overridden');
        }
        if (customLevels[k] in labels) {
            throw Error('pre-existing level values cannot be used for new levels');
        }
    }
}
/**
 * Validates whether `levelComparison` is correct
 *
 * @throws Error
 * @param {SORTING_ORDER | Function} levelComparison - value to validate
 * @returns
 */ function assertLevelComparison(levelComparison) {
    if (typeof levelComparison === 'function') {
        return;
    }
    if (typeof levelComparison === 'string' && Object.values(SORTING_ORDER).includes(levelComparison)) {
        return;
    }
    throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type');
}
module.exports = {
    initialLsCache,
    genLsCache,
    levelMethods,
    getLevel,
    setLevel,
    isLevelEnabled,
    mappings,
    assertNoLevelCollisions,
    assertDefaultLevelFound,
    genLevelComparison,
    assertLevelComparison
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    version: '10.0.0'
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { EventEmitter } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { lsCacheSym, levelValSym, setLevelSym, getLevelSym, chindingsSym, parsedChindingsSym, mixinSym, asJsonSym, writeSym, mixinMergeStrategySym, timeSym, timeSliceIndexSym, streamSym, serializersSym, formattersSym, errorKeySym, messageKeySym, useOnlyCustomLevelsSym, needsMetadataGsym, redactFmtSym, stringifySym, formatOptsSym, stringifiersSym, msgPrefixSym, hooksSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { getLevel, setLevel, isLevelEnabled, mappings, initialLsCache, genLsCache, assertNoLevelCollisions } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { asChindings, asJson, buildFormatters, stringify, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {
};
const prototype = {
    constructor,
    child,
    bindings,
    setBindings,
    flush,
    isLevelEnabled,
    version,
    get level () {
        return this[getLevelSym]();
    },
    set level (lvl){
        this[setLevelSym](lvl);
    },
    get levelVal () {
        return this[levelValSym];
    },
    set levelVal (n){
        throw Error('levelVal is read-only');
    },
    get msgPrefix () {
        return this[msgPrefixSym];
    },
    get [Symbol.toStringTag] () {
        return 'Pino';
    },
    [lsCacheSym]: initialLsCache,
    [writeSym]: write,
    [asJsonSym]: asJson,
    [getLevelSym]: getLevel,
    [setLevelSym]: setLevel
};
Object.setPrototypeOf(prototype, EventEmitter.prototype);
// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function() {
    return Object.create(prototype);
};
const resetChildingsFormatter = (bindings)=>bindings;
function child(bindings, options) {
    if (!bindings) {
        throw Error('missing bindings for child Pino');
    }
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const instance = Object.create(this);
    // If an `options` object was not supplied, we can improve
    // the performance of child creation by skipping
    // the checks for set options and simply return
    // a baseline instance.
    if (options == null) {
        if (instance[formattersSym].bindings !== resetChildingsFormatter) {
            instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
        }
        instance[chindingsSym] = asChindings(instance, bindings);
        if (this.onChild !== noop) {
            this.onChild(instance);
        }
        return instance;
    }
    if (options.hasOwnProperty('serializers') === true) {
        instance[serializersSym] = Object.create(null);
        for(const k in serializers){
            instance[serializersSym][k] = serializers[k];
        }
        const parentSymbols = Object.getOwnPropertySymbols(serializers);
        /* eslint no-var: off */ for(var i = 0; i < parentSymbols.length; i++){
            const ks = parentSymbols[i];
            instance[serializersSym][ks] = serializers[ks];
        }
        for(const bk in options.serializers){
            instance[serializersSym][bk] = options.serializers[bk];
        }
        const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
        for(var bi = 0; bi < bindingsSymbols.length; bi++){
            const bks = bindingsSymbols[bi];
            instance[serializersSym][bks] = options.serializers[bks];
        }
    } else instance[serializersSym] = serializers;
    if (options.hasOwnProperty('formatters')) {
        const { level, bindings: chindings, log } = options.formatters;
        instance[formattersSym] = buildFormatters(level || formatters.level, chindings || resetChildingsFormatter, log || formatters.log);
    } else {
        instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
    }
    if (options.hasOwnProperty('customLevels') === true) {
        assertNoLevelCollisions(this.levels, options.customLevels);
        instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
        genLsCache(instance);
    }
    // redact must place before asChindings and only replace if exist
    if (typeof options.redact === 'object' && options.redact !== null || Array.isArray(options.redact)) {
        instance.redact = options.redact; // replace redact directly
        const stringifiers = redaction(instance.redact, stringify);
        const formatOpts = {
            stringify: stringifiers[redactFmtSym]
        };
        instance[stringifySym] = stringify;
        instance[stringifiersSym] = stringifiers;
        instance[formatOptsSym] = formatOpts;
    }
    if (typeof options.msgPrefix === 'string') {
        instance[msgPrefixSym] = (this[msgPrefixSym] || '') + options.msgPrefix;
    }
    instance[chindingsSym] = asChindings(instance, bindings);
    if (options.level !== undefined && options.level !== this.level || options.hasOwnProperty('customLevels')) {
        const childLevel = options.level || this.level;
        instance[setLevelSym](childLevel);
    }
    this.onChild(instance);
    return instance;
}
function bindings() {
    const chindings = this[chindingsSym];
    const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
    ;
    const bindingsFromJson = JSON.parse(chindingsJson);
    delete bindingsFromJson.pid;
    delete bindingsFromJson.hostname;
    return bindingsFromJson;
}
function setBindings(newBindings) {
    const chindings = asChindings(this, newBindings);
    this[chindingsSym] = chindings;
    delete this[parsedChindingsSym];
}
/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */ function defaultMixinMergeStrategy(mergeObject, mixinObject) {
    return Object.assign(mixinObject, mergeObject);
}
function write(_obj, msg, num) {
    const t = this[timeSym]();
    const mixin = this[mixinSym];
    const errorKey = this[errorKeySym];
    const messageKey = this[messageKeySym];
    const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy;
    let obj;
    const streamWriteHook = this[hooksSym].streamWrite;
    if (_obj === undefined || _obj === null) {
        obj = {};
    } else if (_obj instanceof Error) {
        obj = {
            [errorKey]: _obj
        };
        if (msg === undefined) {
            msg = _obj.message;
        }
    } else {
        obj = _obj;
        if (msg === undefined && _obj[messageKey] === undefined && _obj[errorKey]) {
            msg = _obj[errorKey].message;
        }
    }
    if (mixin) {
        obj = mixinMergeStrategy(obj, mixin(obj, num, this));
    }
    const s = this[asJsonSym](obj, msg, num, t);
    const stream = this[streamSym];
    if (stream[needsMetadataGsym] === true) {
        stream.lastLevel = num;
        stream.lastObj = obj;
        stream.lastMsg = msg;
        stream.lastTime = t.slice(this[timeSliceIndexSym]);
        stream.lastLogger = this; // for child loggers
    }
    stream.write(streamWriteHook ? streamWriteHook(s) : s);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw Error('callback must be a function');
    }
    const stream = this[streamSym];
    if (typeof stream.flush === 'function') {
        stream.flush(cb || noop);
    } else if (cb) cb();
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/pino.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const stdSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const caller = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
const time = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/time.js [app-ssr] (ecmascript)");
const proto = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)");
const symbols = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { configure } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/safe-stable-stringify/index.js [app-ssr] (ecmascript)");
const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const { createArgsNormalizer, asChindings, buildSafeSonicBoom, buildFormatters, stringify, normalizeDestFileDescriptor, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const { chindingsSym, redactFmtSym, serializersSym, timeSym, timeSliceIndexSym, streamSym, stringifySym, stringifySafeSym, stringifiersSym, setLevelSym, endSym, formatOptsSym, messageKeySym, errorKeySym, nestedKeySym, mixinSym, levelCompSym, useOnlyCustomLevelsSym, formattersSym, hooksSym, nestedKeyStrSym, mixinMergeStrategySym, msgPrefixSym } = symbols;
const { epochTime, nullTime } = time;
const { pid } = process;
const hostname = os.hostname();
const defaultErrorSerializer = stdSerializers.err;
const defaultOptions = {
    level: 'info',
    levelComparison: SORTING_ORDER.ASC,
    levels: DEFAULT_LEVELS,
    messageKey: 'msg',
    errorKey: 'err',
    nestedKey: null,
    enabled: true,
    base: {
        pid,
        hostname
    },
    serializers: Object.assign(Object.create(null), {
        err: defaultErrorSerializer
    }),
    formatters: Object.assign(Object.create(null), {
        bindings (bindings) {
            return bindings;
        },
        level (label, number) {
            return {
                level: number
            };
        }
    }),
    hooks: {
        logMethod: undefined,
        streamWrite: undefined
    },
    timestamp: epochTime,
    name: undefined,
    redact: null,
    customLevels: null,
    useOnlyCustomLevels: false,
    depthLimit: 5,
    edgeLimit: 100
};
const normalize = createArgsNormalizer(defaultOptions);
const serializers = Object.assign(Object.create(null), stdSerializers);
function pino(...args) {
    const instance = {};
    const { opts, stream } = normalize(instance, caller(), ...args);
    if (opts.level && typeof opts.level === 'string' && DEFAULT_LEVELS[opts.level.toLowerCase()] !== undefined) opts.level = opts.level.toLowerCase();
    const { redact, crlf, serializers, timestamp, messageKey, errorKey, nestedKey, base, name, level, customLevels, levelComparison, mixin, mixinMergeStrategy, useOnlyCustomLevels, formatters, hooks, depthLimit, edgeLimit, onChild, msgPrefix } = opts;
    const stringifySafe = configure({
        maximumDepth: depthLimit,
        maximumBreadth: edgeLimit
    });
    const allFormatters = buildFormatters(formatters.level, formatters.bindings, formatters.log);
    const stringifyFn = stringify.bind({
        [stringifySafeSym]: stringifySafe
    });
    const stringifiers = redact ? redaction(redact, stringifyFn) : {};
    const formatOpts = redact ? {
        stringify: stringifiers[redactFmtSym]
    } : {
        stringify: stringifyFn
    };
    const end = '}' + (crlf ? '\r\n' : '\n');
    const coreChindings = asChindings.bind(null, {
        [chindingsSym]: '',
        [serializersSym]: serializers,
        [stringifiersSym]: stringifiers,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [formattersSym]: allFormatters
    });
    let chindings = '';
    if (base !== null) {
        if (name === undefined) {
            chindings = coreChindings(base);
        } else {
            chindings = coreChindings(Object.assign({}, base, {
                name
            }));
        }
    }
    const time = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
    const timeSliceIndex = time().indexOf(':') + 1;
    if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true');
    if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
    if (msgPrefix && typeof msgPrefix !== 'string') throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`);
    assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels);
    const levels = mappings(customLevels, useOnlyCustomLevels);
    if (typeof stream.emit === 'function') {
        stream.emit('message', {
            code: 'PINO_CONFIG',
            config: {
                levels,
                messageKey,
                errorKey
            }
        });
    }
    assertLevelComparison(levelComparison);
    const levelCompFunc = genLevelComparison(levelComparison);
    Object.assign(instance, {
        levels,
        [levelCompSym]: levelCompFunc,
        [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
        [streamSym]: stream,
        [timeSym]: time,
        [timeSliceIndexSym]: timeSliceIndex,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [stringifiersSym]: stringifiers,
        [endSym]: end,
        [formatOptsSym]: formatOpts,
        [messageKeySym]: messageKey,
        [errorKeySym]: errorKey,
        [nestedKeySym]: nestedKey,
        // protect against injection
        [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
        [serializersSym]: serializers,
        [mixinSym]: mixin,
        [mixinMergeStrategySym]: mixinMergeStrategy,
        [chindingsSym]: chindings,
        [formattersSym]: allFormatters,
        [hooksSym]: hooks,
        silent: noop,
        onChild,
        [msgPrefixSym]: msgPrefix
    });
    Object.setPrototypeOf(instance, proto());
    genLsCache(instance);
    instance[setLevelSym](level);
    return instance;
}
module.exports = pino;
module.exports.destination = (dest = process.stdout.fd)=>{
    if (typeof dest === 'object') {
        dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
        return buildSafeSonicBoom(dest);
    } else {
        return buildSafeSonicBoom({
            dest: normalizeDestFileDescriptor(dest),
            minLength: 0
        });
    }
};
module.exports.transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
module.exports.multistream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)");
module.exports.levels = mappings();
module.exports.stdSerializers = serializers;
module.exports.stdTimeFunctions = Object.assign({}, time);
module.exports.symbols = symbols;
module.exports.version = version;
// Enables default and name export with TypeScript and Babel
module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function noOpPrepareStackTrace(_, stack) {
    return stack;
}
module.exports = function getCallers() {
    const originalPrepare = Error.prepareStackTrace;
    Error.prepareStackTrace = noOpPrepareStackTrace;
    const stack = new Error().stack;
    Error.prepareStackTrace = originalPrepare;
    if (!Array.isArray(stack)) {
        return undefined;
    }
    const entries = stack.slice(2);
    const fileNames = [];
    for (const entry of entries){
        if (!entry) {
            continue;
        }
        fileNames.push(entry.getFileName());
    }
    return fileNames;
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createRequire } = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
const getCallers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const { join, isAbsolute, sep } = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const ThreadStream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/index.js [app-ssr] (ecmascript)");
function setupOnExit(stream) {
    // This is leak free, it does not leave event handlers
    onExit.register(stream, autoEnd);
    onExit.registerBeforeExit(stream, flush);
    stream.on('close', function() {
        onExit.unregister(stream);
    });
}
function buildStream(filename, workerData, workerOpts, sync) {
    const stream = new ThreadStream({
        filename,
        workerData,
        workerOpts,
        sync
    });
    stream.on('ready', onReady);
    stream.on('close', function() {
        process.removeListener('exit', onExit);
    });
    process.on('exit', onExit);
    function onReady() {
        process.removeListener('exit', onExit);
        stream.unref();
        if (workerOpts.autoEnd !== false) {
            setupOnExit(stream);
        }
    }
    function onExit() {
        /* istanbul ignore next */ if (stream.closed) {
            return;
        }
        stream.flushSync();
        // Apparently there is a very sporadic race condition
        // that in certain OS would prevent the messages to be flushed
        // because the thread might not have been created still.
        // Unfortunately we need to sleep(100) in this case.
        sleep(100);
        stream.end();
    }
    return stream;
}
function autoEnd(stream) {
    stream.ref();
    stream.flushSync();
    stream.end();
    stream.once('close', function() {
        stream.unref();
    });
}
function flush(stream) {
    stream.flushSync();
}
function transport(fullOptions) {
    const { pipeline, targets, levels, dedupe, worker = {}, caller = getCallers(), sync = false } = fullOptions;
    const options = {
        ...fullOptions.options
    };
    // Backwards compatibility
    const callers = typeof caller === 'string' ? [
        caller
    ] : caller;
    // This will be eventually modified by bundlers
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    let target = fullOptions.target;
    if (target && targets) {
        throw new Error('only one of target or targets can be specified');
    }
    if (targets) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib"), 'worker.js');
        options.targets = targets.filter((dest)=>dest.target).map((dest)=>{
            return {
                ...dest,
                target: fixTarget(dest.target)
            };
        });
        options.pipelines = targets.filter((dest)=>dest.pipeline).map((dest)=>{
            return dest.pipeline.map((t)=>{
                return {
                    ...t,
                    level: dest.level,
                    target: fixTarget(t.target)
                };
            });
        });
    } else if (pipeline) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib"), 'worker.js');
        options.pipelines = [
            pipeline.map((dest)=>{
                return {
                    ...dest,
                    target: fixTarget(dest.target)
                };
            })
        ];
    }
    if (levels) {
        options.levels = levels;
    }
    if (dedupe) {
        options.dedupe = dedupe;
    }
    options.pinoWillSendConfig = true;
    return buildStream(fixTarget(target), options, worker, sync);
    //TURBOPACK unreachable
    ;
    function fixTarget(origin) {
        origin = bundlerOverrides[origin] || origin;
        if (isAbsolute(origin) || origin.indexOf('file://') === 0) {
            return origin;
        }
        if (origin === 'pino/file') {
            return join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib"), '..', 'file.js');
        }
        let fixTarget;
        for (const filePath of callers){
            try {
                const context = filePath === 'node:repl' ? process.cwd() + sep : filePath;
                fixTarget = createRequire(context).resolve(origin);
                break;
            } catch (err) {
                continue;
            }
        }
        if (!fixTarget) {
            throw new Error(`unable to determine transport target for "${origin}"`);
        }
        return fixTarget;
    }
}
module.exports = transport;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Represents default log level values
 *
 * @enum {number}
 */ const DEFAULT_LEVELS = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
};
/**
 * Represents sort order direction: `ascending` or `descending`
 *
 * @enum {string}
 */ const SORTING_ORDER = {
    ASC: 'ASC',
    DESC: 'DESC'
};
module.exports = {
    DEFAULT_LEVELS,
    SORTING_ORDER
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const metadata = Symbol.for('pino.metadata');
const { DEFAULT_LEVELS } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info;
function multistream(streamsArray, opts) {
    streamsArray = streamsArray || [];
    opts = opts || {
        dedupe: false
    };
    const streamLevels = Object.create(DEFAULT_LEVELS);
    streamLevels.silent = Infinity;
    if (opts.levels && typeof opts.levels === 'object') {
        Object.keys(opts.levels).forEach((i)=>{
            streamLevels[i] = opts.levels[i];
        });
    }
    const res = {
        write,
        add,
        remove,
        emit,
        flushSync,
        end,
        minLevel: 0,
        lastId: 0,
        streams: [],
        clone,
        [metadata]: true,
        streamLevels
    };
    if (Array.isArray(streamsArray)) {
        streamsArray.forEach(add, res);
    } else {
        add.call(res, streamsArray);
    }
    // clean this object up
    // or it will stay allocated forever
    // as it is closed on the following closures
    streamsArray = null;
    return res;
    //TURBOPACK unreachable
    ;
    // we can exit early because the streams are ordered by level
    function write(data) {
        let dest;
        const level = this.lastLevel;
        const { streams } = this;
        // for handling situation when several streams has the same level
        let recordedLevel = 0;
        let stream;
        // if dedupe set to true we send logs to the stream with the highest level
        // therefore, we have to change sorting order
        for(let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)){
            dest = streams[i];
            if (dest.level <= level) {
                if (recordedLevel !== 0 && recordedLevel !== dest.level) {
                    break;
                }
                stream = dest.stream;
                if (stream[metadata]) {
                    const { lastTime, lastMsg, lastObj, lastLogger } = this;
                    stream.lastLevel = level;
                    stream.lastTime = lastTime;
                    stream.lastMsg = lastMsg;
                    stream.lastObj = lastObj;
                    stream.lastLogger = lastLogger;
                }
                stream.write(data);
                if (opts.dedupe) {
                    recordedLevel = dest.level;
                }
            } else if (!opts.dedupe) {
                break;
            }
        }
    }
    function emit(...args) {
        for (const { stream } of this.streams){
            if (typeof stream.emit === 'function') {
                stream.emit(...args);
            }
        }
    }
    function flushSync() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
        }
    }
    function add(dest) {
        if (!dest) {
            return res;
        }
        // Check that dest implements either StreamEntry or DestinationStream
        const isStream = typeof dest.write === 'function' || dest.stream;
        const stream_ = dest.write ? dest : dest.stream;
        // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
        if (!isStream) {
            throw Error('stream object needs to implement either StreamEntry or DestinationStream interface');
        }
        const { streams, streamLevels } = this;
        let level;
        if (typeof dest.levelVal === 'number') {
            level = dest.levelVal;
        } else if (typeof dest.level === 'string') {
            level = streamLevels[dest.level];
        } else if (typeof dest.level === 'number') {
            level = dest.level;
        } else {
            level = DEFAULT_INFO_LEVEL;
        }
        const dest_ = {
            stream: stream_,
            level,
            levelVal: undefined,
            id: ++res.lastId
        };
        streams.unshift(dest_);
        streams.sort(compareByLevel);
        this.minLevel = streams[0].level;
        return res;
    }
    function remove(id) {
        const { streams } = this;
        const index = streams.findIndex((s)=>s.id === id);
        if (index >= 0) {
            streams.splice(index, 1);
            streams.sort(compareByLevel);
            this.minLevel = streams.length > 0 ? streams[0].level : -1;
        }
        return res;
    }
    function end() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
            stream.end();
        }
    }
    function clone(level) {
        const streams = new Array(this.streams.length);
        for(let i = 0; i < streams.length; i++){
            streams[i] = {
                level,
                stream: this.streams[i].stream
            };
        }
        return {
            write,
            add,
            remove,
            minLevel: level,
            streams,
            clone,
            emit,
            flushSync,
            [metadata]: true
        };
    }
}
function compareByLevel(a, b) {
    return a.level - b.level;
}
function initLoopVar(length, dedupe) {
    return dedupe ? length - 1 : 0;
}
function adjustLoopVar(i, dedupe) {
    return dedupe ? i - 1 : i + 1;
}
function checkLoopVar(i, length, dedupe) {
    return dedupe ? i >= 0 : i < length;
}
module.exports = multistream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const setLevelSym = Symbol('pino.setLevel');
const getLevelSym = Symbol('pino.getLevel');
const levelValSym = Symbol('pino.levelVal');
const levelCompSym = Symbol('pino.levelComp');
const useLevelLabelsSym = Symbol('pino.useLevelLabels');
const useOnlyCustomLevelsSym = Symbol('pino.useOnlyCustomLevels');
const mixinSym = Symbol('pino.mixin');
const lsCacheSym = Symbol('pino.lsCache');
const chindingsSym = Symbol('pino.chindings');
const asJsonSym = Symbol('pino.asJson');
const writeSym = Symbol('pino.write');
const redactFmtSym = Symbol('pino.redactFmt');
const timeSym = Symbol('pino.time');
const timeSliceIndexSym = Symbol('pino.timeSliceIndex');
const streamSym = Symbol('pino.stream');
const stringifySym = Symbol('pino.stringify');
const stringifySafeSym = Symbol('pino.stringifySafe');
const stringifiersSym = Symbol('pino.stringifiers');
const endSym = Symbol('pino.end');
const formatOptsSym = Symbol('pino.formatOpts');
const messageKeySym = Symbol('pino.messageKey');
const errorKeySym = Symbol('pino.errorKey');
const nestedKeySym = Symbol('pino.nestedKey');
const nestedKeyStrSym = Symbol('pino.nestedKeyStr');
const mixinMergeStrategySym = Symbol('pino.mixinMergeStrategy');
const msgPrefixSym = Symbol('pino.msgPrefix');
const wildcardFirstSym = Symbol('pino.wildcardFirst');
// public symbols, no need to use the same pino
// version for these
const serializersSym = Symbol.for('pino.serializers');
const formattersSym = Symbol.for('pino.formatters');
const hooksSym = Symbol.for('pino.hooks');
const needsMetadataGsym = Symbol.for('pino.metadata');
module.exports = {
    setLevelSym,
    getLevelSym,
    levelValSym,
    levelCompSym,
    useLevelLabelsSym,
    mixinSym,
    lsCacheSym,
    chindingsSym,
    asJsonSym,
    writeSym,
    serializersSym,
    redactFmtSym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    stringifySym,
    stringifySafeSym,
    stringifiersSym,
    endSym,
    formatOptsSym,
    messageKeySym,
    errorKeySym,
    nestedKeySym,
    wildcardFirstSym,
    needsMetadataGsym,
    useOnlyCustomLevelsSym,
    formattersSym,
    hooksSym,
    nestedKeyStrSym,
    mixinMergeStrategySym,
    msgPrefixSym
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const slowRedact = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/slow-redact/index.js [app-ssr] (ecmascript)");
const { redactFmtSym, wildcardFirstSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
// Custom rx regex equivalent to fast-redact's rx
const rx = /[^.[\]]+|\[([^[\]]*?)\]/g;
const CENSOR = '[Redacted]';
const strict = false // TODO should this be configurable?
;
function redaction(opts, serialize) {
    const { paths, censor, remove } = handle(opts);
    const shape = paths.reduce((o, str)=>{
        rx.lastIndex = 0;
        const first = rx.exec(str);
        const next = rx.exec(str);
        // ns is the top-level path segment, brackets + quoting removed.
        let ns = first[1] !== undefined ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, '$1') : first[0];
        if (ns === '*') {
            ns = wildcardFirstSym;
        }
        // top level key:
        if (next === null) {
            o[ns] = null;
            return o;
        }
        // path with at least two segments:
        // if ns is already redacted at the top level, ignore lower level redactions
        if (o[ns] === null) {
            return o;
        }
        const { index } = next;
        const nextPath = `${str.substr(index, str.length - 1)}`;
        o[ns] = o[ns] || [];
        // shape is a mix of paths beginning with literal values and wildcard
        // paths [ "a.b.c", "*.b.z" ] should reduce to a shape of
        // { "a": [ "b.c", "b.z" ], *: [ "b.z" ] }
        // note: "b.z" is in both "a" and * arrays because "a" matches the wildcard.
        // (* entry has wildcardFirstSym as key)
        if (ns !== wildcardFirstSym && o[ns].length === 0) {
            // first time ns's get all '*' redactions so far
            o[ns].push(...o[wildcardFirstSym] || []);
        }
        if (ns === wildcardFirstSym) {
            // new * path gets added to all previously registered literal ns's.
            Object.keys(o).forEach(function(k) {
                if (o[k]) {
                    o[k].push(nextPath);
                }
            });
        }
        o[ns].push(nextPath);
        return o;
    }, {});
    // the redactor assigned to the format symbol key
    // provides top level redaction for instances where
    // an object is interpolated into the msg string
    const result = {
        [redactFmtSym]: slowRedact({
            paths,
            censor,
            serialize,
            strict,
            remove
        })
    };
    const topCensor = (...args)=>{
        return typeof censor === 'function' ? serialize(censor(...args)) : serialize(censor);
    };
    return [
        ...Object.keys(shape),
        ...Object.getOwnPropertySymbols(shape)
    ].reduce((o, k)=>{
        // top level key:
        if (shape[k] === null) {
            o[k] = (value)=>topCensor(value, [
                    k
                ]);
        } else {
            const wrappedCensor = typeof censor === 'function' ? (value, path)=>{
                return censor(value, [
                    k,
                    ...path
                ]);
            } : censor;
            o[k] = slowRedact({
                paths: shape[k],
                censor: wrappedCensor,
                serialize,
                strict,
                remove
            });
        }
        return o;
    }, result);
}
function handle(opts) {
    if (Array.isArray(opts)) {
        opts = {
            paths: opts,
            censor: CENSOR
        };
        return opts;
    }
    let { paths, censor = CENSOR, remove } = opts;
    if (Array.isArray(paths) === false) {
        throw Error('pino – redact must contain an array of strings');
    }
    if (remove === true) censor = undefined;
    return {
        paths,
        censor,
        remove
    };
}
module.exports = redaction;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/time.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const nullTime = ()=>'';
const epochTime = ()=>`,"time":${Date.now()}`;
const unixTime = ()=>`,"time":${Math.round(Date.now() / 1000.0)}`;
const isoTime = ()=>`,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability
;
const NS_PER_MS = 1_000_000n;
const NS_PER_SEC = 1_000_000_000n;
const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS;
const startHrTime = process.hrtime.bigint();
const isoTimeNano = ()=>{
    const elapsedNs = process.hrtime.bigint() - startHrTime;
    const currentTimeNs = startWallTimeNs + elapsedNs;
    const secondsSinceEpoch = currentTimeNs / NS_PER_SEC;
    const nanosWithinSecond = currentTimeNs % NS_PER_SEC;
    const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1_000_000n);
    const date = new Date(msSinceEpoch);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond.toString().padStart(9, '0')}Z"`;
};
module.exports = {
    nullTime,
    epochTime,
    unixTime,
    isoTime,
    isoTimeNano
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const diagChan = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-ssr] (ecmascript)");
const { mapHttpRequest, mapHttpResponse } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const SonicBoom = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const { lsCacheSym, chindingsSym, writeSym, serializersSym, formatOptsSym, endSym, stringifiersSym, stringifySym, stringifySafeSym, wildcardFirstSym, nestedKeySym, formattersSym, messageKeySym, errorKeySym, nestedKeyStrSym, msgPrefixSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { isMainThread } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
const asJsonChan = diagChan.tracingChannel('pino_asJson');
function noop() {}
function genLog(level, hook) {
    if (!hook) return LOG;
    return function hookWrappedLog(...args) {
        hook.call(this, args, LOG, level);
    };
    //TURBOPACK unreachable
    ;
    function LOG(o, ...n) {
        if (typeof o === 'object') {
            let msg = o;
            if (o !== null) {
                if (o.method && o.headers && o.socket) {
                    o = mapHttpRequest(o);
                } else if (typeof o.setHeader === 'function') {
                    o = mapHttpResponse(o);
                }
            }
            let formatParams;
            if (msg === null && n.length === 0) {
                formatParams = [
                    null
                ];
            } else {
                msg = n.shift();
                formatParams = n;
            }
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level);
        } else {
            let msg = o === undefined ? n.shift() : o;
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](null, format(msg, n, this[formatOptsSym]), level);
        }
    }
}
// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function asString(str) {
    let result = '';
    let last = 0;
    let found = false;
    let point = 255;
    const l = str.length;
    if (l > 100) {
        return JSON.stringify(str);
    }
    for(var i = 0; i < l && point >= 32; i++){
        point = str.charCodeAt(i);
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + '\\';
            last = i;
            found = true;
        }
    }
    if (!found) {
        result = str;
    } else {
        result += str.slice(last);
    }
    return point < 32 ? JSON.stringify(str) : '"' + result + '"';
}
/**
 * `asJson` wraps `_asJson` in order to facilitate generating diagnostics.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string}
 */ function asJson(obj, msg, num, time) {
    if (asJsonChan.hasSubscribers === false) {
        return _asJson.call(this, obj, msg, num, time);
    }
    const store = {
        instance: this,
        arguments
    };
    return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time);
}
/**
 * `_asJson` parses all collected data and generates the finalized newline
 * delimited JSON string.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string} The finalized log string terminated with a newline.
 * @private
 */ function _asJson(obj, msg, num, time) {
    const stringify = this[stringifySym];
    const stringifySafe = this[stringifySafeSym];
    const stringifiers = this[stringifiersSym];
    const end = this[endSym];
    const chindings = this[chindingsSym];
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const messageKey = this[messageKeySym];
    const errorKey = this[errorKeySym];
    let data = this[lsCacheSym][num] + time;
    // we need the child bindings added to the output first so instance logged
    // objects can take precedence when JSON.parse-ing the resulting log line
    data = data + chindings;
    let value;
    if (formatters.log) {
        obj = formatters.log(obj);
    }
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    let propStr = '';
    for(const key in obj){
        value = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
            if (serializers[key]) {
                value = serializers[key](value);
            } else if (key === errorKey && serializers.err) {
                value = serializers.err(value);
            }
            const stringifier = stringifiers[key] || wildcardStringifier;
            switch(typeof value){
                case 'undefined':
                case 'function':
                    continue;
                case 'number':
                    /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                        value = null;
                    }
                // this case explicitly falls through to the next one
                case 'boolean':
                    if (stringifier) value = stringifier(value);
                    break;
                case 'string':
                    value = (stringifier || asString)(value);
                    break;
                default:
                    value = (stringifier || stringify)(value, stringifySafe);
            }
            if (value === undefined) continue;
            const strKey = asString(key);
            propStr += ',' + strKey + ':' + value;
        }
    }
    let msgStr = '';
    if (msg !== undefined) {
        value = serializers[messageKey] ? serializers[messageKey](msg) : msg;
        const stringifier = stringifiers[messageKey] || wildcardStringifier;
        switch(typeof value){
            case 'function':
                break;
            case 'number':
                /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                    value = null;
                }
            // this case explicitly falls through to the next one
            case 'boolean':
                if (stringifier) value = stringifier(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            case 'string':
                value = (stringifier || asString)(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            default:
                value = (stringifier || stringify)(value, stringifySafe);
                msgStr = ',"' + messageKey + '":' + value;
        }
    }
    if (this[nestedKeySym] && propStr) {
        // place all the obj properties under the specified key
        // the nested key is already formatted from the constructor
        return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end;
    } else {
        return data + propStr + msgStr + end;
    }
}
function asChindings(instance, bindings) {
    let value;
    let data = instance[chindingsSym];
    const stringify = instance[stringifySym];
    const stringifySafe = instance[stringifySafeSym];
    const stringifiers = instance[stringifiersSym];
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    const serializers = instance[serializersSym];
    const formatter = instance[formattersSym].bindings;
    bindings = formatter(bindings);
    for(const key in bindings){
        value = bindings[key];
        const valid = (key.length < 5 || key !== 'level' && key !== 'serializers' && key !== 'formatters' && key !== 'customLevels') && bindings.hasOwnProperty(key) && value !== undefined;
        if (valid === true) {
            value = serializers[key] ? serializers[key](value) : value;
            value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe);
            if (value === undefined) continue;
            data += ',"' + key + '":' + value;
        }
    }
    return data;
}
function hasBeenTampered(stream) {
    return stream.write !== stream.constructor.prototype.write;
}
function buildSafeSonicBoom(opts) {
    const stream = new SonicBoom(opts);
    stream.on('error', filterBrokenPipe);
    // If we are sync: false, we must flush on exit
    if (!opts.sync && isMainThread) {
        onExit.register(stream, autoEnd);
        stream.on('close', function() {
            onExit.unregister(stream);
        });
    }
    return stream;
    //TURBOPACK unreachable
    ;
    function filterBrokenPipe(err) {
        // Impossible to replicate across all operating systems
        /* istanbul ignore next */ if (err.code === 'EPIPE') {
            // If we get EPIPE, we should stop logging here
            // however we have no control to the consumer of
            // SonicBoom, so we just overwrite the write method
            stream.write = noop;
            stream.end = noop;
            stream.flushSync = noop;
            stream.destroy = noop;
            return;
        }
        stream.removeListener('error', filterBrokenPipe);
        stream.emit('error', err);
    }
}
function autoEnd(stream, eventName) {
    // This check is needed only on some platforms
    /* istanbul ignore next */ if (stream.destroyed) {
        return;
    }
    if (eventName === 'beforeExit') {
        // We still have an event loop, let's use it
        stream.flush();
        stream.on('drain', function() {
            stream.end();
        });
    } else {
        // For some reason istanbul is not detecting this, but it's there
        /* istanbul ignore next */ // We do not have an event loop, so flush synchronously
        stream.flushSync();
    }
}
function createArgsNormalizer(defaultOptions) {
    return function normalizeArgs(instance, caller, opts = {}, stream) {
        // support stream as a string
        if (typeof opts === 'string') {
            stream = buildSafeSonicBoom({
                dest: opts
            });
            opts = {};
        } else if (typeof stream === 'string') {
            if (opts && opts.transport) {
                throw Error('only one of option.transport or stream can be specified');
            }
            stream = buildSafeSonicBoom({
                dest: stream
            });
        } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
            stream = opts;
            opts = {};
        } else if (opts.transport) {
            if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
                throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)');
            }
            if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
                throw Error('option.transport.targets do not allow custom level formatters');
            }
            let customLevels;
            if (opts.customLevels) {
                customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels);
            }
            stream = transport({
                caller,
                ...opts.transport,
                levels: customLevels
            });
        }
        opts = Object.assign({}, defaultOptions, opts);
        opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
        opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
        if (opts.prettyPrint) {
            throw new Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)');
        }
        const { enabled, onChild } = opts;
        if (enabled === false) opts.level = 'silent';
        if (!onChild) opts.onChild = noop;
        if (!stream) {
            if (!hasBeenTampered(process.stdout)) {
                // If process.stdout.fd is undefined, it means that we are running
                // in a worker thread. Let's assume we are logging to file descriptor 1.
                stream = buildSafeSonicBoom({
                    fd: process.stdout.fd || 1
                });
            } else {
                stream = process.stdout;
            }
        }
        return {
            opts,
            stream
        };
    };
}
function stringify(obj, stringifySafeFn) {
    try {
        return JSON.stringify(obj);
    } catch (_) {
        try {
            const stringify = stringifySafeFn || this[stringifySafeSym];
            return stringify(obj);
        } catch (_) {
            return '"[unable to serialize, circular reference is too complex to analyze]"';
        }
    }
}
function buildFormatters(level, bindings, log) {
    return {
        level,
        bindings,
        log
    };
}
/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */ function normalizeDestFileDescriptor(destination) {
    const fd = Number(destination);
    if (typeof destination === 'string' && Number.isFinite(fd)) {
        return fd;
    }
    // destination could be undefined if we are in a worker
    if (destination === undefined) {
        // This is stdout in UNIX systems
        return 1;
    }
    return destination;
}
module.exports = {
    noop,
    buildSafeSonicBoom,
    asChindings,
    asJson,
    genLog,
    createArgsNormalizer,
    stringify,
    buildFormatters,
    normalizeDestFileDescriptor
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { lsCacheSym, levelValSym, useOnlyCustomLevelsSym, streamSym, formattersSym, hooksSym, levelCompSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { noop, genLog } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const levelMethods = {
    fatal: (hook)=>{
        const logFatal = genLog(DEFAULT_LEVELS.fatal, hook);
        return function(...args) {
            const stream = this[streamSym];
            logFatal.call(this, ...args);
            if (typeof stream.flushSync === 'function') {
                try {
                    stream.flushSync();
                } catch (e) {
                // https://github.com/pinojs/pino/pull/740#discussion_r346788313
                }
            }
        };
    },
    error: (hook)=>genLog(DEFAULT_LEVELS.error, hook),
    warn: (hook)=>genLog(DEFAULT_LEVELS.warn, hook),
    info: (hook)=>genLog(DEFAULT_LEVELS.info, hook),
    debug: (hook)=>genLog(DEFAULT_LEVELS.debug, hook),
    trace: (hook)=>genLog(DEFAULT_LEVELS.trace, hook)
};
const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k)=>{
    o[DEFAULT_LEVELS[k]] = k;
    return o;
}, {});
const initialLsCache = Object.keys(nums).reduce((o, k)=>{
    o[k] = '{"level":' + Number(k);
    return o;
}, {});
function genLsCache(instance) {
    const formatter = instance[formattersSym].level;
    const { labels } = instance.levels;
    const cache = {};
    for(const label in labels){
        const level = formatter(labels[label], Number(label));
        cache[label] = JSON.stringify(level).slice(0, -1);
    }
    instance[lsCacheSym] = cache;
    return instance;
}
function isStandardLevel(level, useOnlyCustomLevels) {
    if (useOnlyCustomLevels) {
        return false;
    }
    switch(level){
        case 'fatal':
        case 'error':
        case 'warn':
        case 'info':
        case 'debug':
        case 'trace':
            return true;
        default:
            return false;
    }
}
function setLevel(level) {
    const { labels, values } = this.levels;
    if (typeof level === 'number') {
        if (labels[level] === undefined) throw Error('unknown level value' + level);
        level = labels[level];
    }
    if (values[level] === undefined) throw Error('unknown level ' + level);
    const preLevelVal = this[levelValSym];
    const levelVal = this[levelValSym] = values[level];
    const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
    const levelComparison = this[levelCompSym];
    const hook = this[hooksSym].logMethod;
    for(const key in values){
        if (levelComparison(values[key], levelVal) === false) {
            this[key] = noop;
            continue;
        }
        this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
    }
    this.emit('level-change', level, levelVal, labels[preLevelVal], preLevelVal, this);
}
function getLevel(level) {
    const { levels, levelVal } = this;
    // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
    return levels && levels.labels ? levels.labels[levelVal] : '';
}
function isLevelEnabled(logLevel) {
    const { values } = this.levels;
    const logLevelVal = values[logLevel];
    return logLevelVal !== undefined && this[levelCompSym](logLevelVal, this[levelValSym]);
}
/**
 * Determine if the given `current` level is enabled by comparing it
 * against the current threshold (`expected`).
 *
 * @param {SORTING_ORDER} direction comparison direction "ASC" or "DESC"
 * @param {number} current current log level number representation
 * @param {number} expected threshold value to compare with
 * @returns {boolean}
 */ function compareLevel(direction, current, expected) {
    if (direction === SORTING_ORDER.DESC) {
        return current <= expected;
    }
    return current >= expected;
}
/**
 * Create a level comparison function based on `levelComparison`
 * it could a default function which compares levels either in "ascending" or "descending" order or custom comparison function
 *
 * @param {SORTING_ORDER | Function} levelComparison sort levels order direction or custom comparison function
 * @returns Function
 */ function genLevelComparison(levelComparison) {
    if (typeof levelComparison === 'string') {
        return compareLevel.bind(null, levelComparison);
    }
    return levelComparison;
}
function mappings(customLevels = null, useOnlyCustomLevels = false) {
    const customNums = customLevels ? Object.keys(customLevels).reduce((o, k)=>{
        o[customLevels[k]] = k;
        return o;
    }, {}) : null;
    /* eslint-enable */ const labels = Object.assign(Object.create(Object.prototype, {
        Infinity: {
            value: 'silent'
        }
    }), useOnlyCustomLevels ? null : nums, customNums);
    const values = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    return {
        labels,
        values
    };
}
function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
    if (typeof defaultLevel === 'number') {
        const values = [].concat(Object.keys(customLevels || {}).map((key)=>customLevels[key]), useOnlyCustomLevels ? [] : Object.keys(nums).map((level)=>+level), Infinity);
        if (!values.includes(defaultLevel)) {
            throw Error(`default level:${defaultLevel} must be included in custom levels`);
        }
        return;
    }
    const labels = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    if (!(defaultLevel in labels)) {
        throw Error(`default level:${defaultLevel} must be included in custom levels`);
    }
}
function assertNoLevelCollisions(levels, customLevels) {
    const { labels, values } = levels;
    for(const k in customLevels){
        if (k in values) {
            throw Error('levels cannot be overridden');
        }
        if (customLevels[k] in labels) {
            throw Error('pre-existing level values cannot be used for new levels');
        }
    }
}
/**
 * Validates whether `levelComparison` is correct
 *
 * @throws Error
 * @param {SORTING_ORDER | Function} levelComparison - value to validate
 * @returns
 */ function assertLevelComparison(levelComparison) {
    if (typeof levelComparison === 'function') {
        return;
    }
    if (typeof levelComparison === 'string' && Object.values(SORTING_ORDER).includes(levelComparison)) {
        return;
    }
    throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type');
}
module.exports = {
    initialLsCache,
    genLsCache,
    levelMethods,
    getLevel,
    setLevel,
    isLevelEnabled,
    mappings,
    assertNoLevelCollisions,
    assertDefaultLevelFound,
    genLevelComparison,
    assertLevelComparison
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    version: '10.0.0'
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { EventEmitter } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { lsCacheSym, levelValSym, setLevelSym, getLevelSym, chindingsSym, parsedChindingsSym, mixinSym, asJsonSym, writeSym, mixinMergeStrategySym, timeSym, timeSliceIndexSym, streamSym, serializersSym, formattersSym, errorKeySym, messageKeySym, useOnlyCustomLevelsSym, needsMetadataGsym, redactFmtSym, stringifySym, formatOptsSym, stringifiersSym, msgPrefixSym, hooksSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { getLevel, setLevel, isLevelEnabled, mappings, initialLsCache, genLsCache, assertNoLevelCollisions } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { asChindings, asJson, buildFormatters, stringify, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {
};
const prototype = {
    constructor,
    child,
    bindings,
    setBindings,
    flush,
    isLevelEnabled,
    version,
    get level () {
        return this[getLevelSym]();
    },
    set level (lvl){
        this[setLevelSym](lvl);
    },
    get levelVal () {
        return this[levelValSym];
    },
    set levelVal (n){
        throw Error('levelVal is read-only');
    },
    get msgPrefix () {
        return this[msgPrefixSym];
    },
    get [Symbol.toStringTag] () {
        return 'Pino';
    },
    [lsCacheSym]: initialLsCache,
    [writeSym]: write,
    [asJsonSym]: asJson,
    [getLevelSym]: getLevel,
    [setLevelSym]: setLevel
};
Object.setPrototypeOf(prototype, EventEmitter.prototype);
// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function() {
    return Object.create(prototype);
};
const resetChildingsFormatter = (bindings)=>bindings;
function child(bindings, options) {
    if (!bindings) {
        throw Error('missing bindings for child Pino');
    }
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const instance = Object.create(this);
    // If an `options` object was not supplied, we can improve
    // the performance of child creation by skipping
    // the checks for set options and simply return
    // a baseline instance.
    if (options == null) {
        if (instance[formattersSym].bindings !== resetChildingsFormatter) {
            instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
        }
        instance[chindingsSym] = asChindings(instance, bindings);
        if (this.onChild !== noop) {
            this.onChild(instance);
        }
        return instance;
    }
    if (options.hasOwnProperty('serializers') === true) {
        instance[serializersSym] = Object.create(null);
        for(const k in serializers){
            instance[serializersSym][k] = serializers[k];
        }
        const parentSymbols = Object.getOwnPropertySymbols(serializers);
        /* eslint no-var: off */ for(var i = 0; i < parentSymbols.length; i++){
            const ks = parentSymbols[i];
            instance[serializersSym][ks] = serializers[ks];
        }
        for(const bk in options.serializers){
            instance[serializersSym][bk] = options.serializers[bk];
        }
        const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
        for(var bi = 0; bi < bindingsSymbols.length; bi++){
            const bks = bindingsSymbols[bi];
            instance[serializersSym][bks] = options.serializers[bks];
        }
    } else instance[serializersSym] = serializers;
    if (options.hasOwnProperty('formatters')) {
        const { level, bindings: chindings, log } = options.formatters;
        instance[formattersSym] = buildFormatters(level || formatters.level, chindings || resetChildingsFormatter, log || formatters.log);
    } else {
        instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
    }
    if (options.hasOwnProperty('customLevels') === true) {
        assertNoLevelCollisions(this.levels, options.customLevels);
        instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
        genLsCache(instance);
    }
    // redact must place before asChindings and only replace if exist
    if (typeof options.redact === 'object' && options.redact !== null || Array.isArray(options.redact)) {
        instance.redact = options.redact; // replace redact directly
        const stringifiers = redaction(instance.redact, stringify);
        const formatOpts = {
            stringify: stringifiers[redactFmtSym]
        };
        instance[stringifySym] = stringify;
        instance[stringifiersSym] = stringifiers;
        instance[formatOptsSym] = formatOpts;
    }
    if (typeof options.msgPrefix === 'string') {
        instance[msgPrefixSym] = (this[msgPrefixSym] || '') + options.msgPrefix;
    }
    instance[chindingsSym] = asChindings(instance, bindings);
    if (options.level !== undefined && options.level !== this.level || options.hasOwnProperty('customLevels')) {
        const childLevel = options.level || this.level;
        instance[setLevelSym](childLevel);
    }
    this.onChild(instance);
    return instance;
}
function bindings() {
    const chindings = this[chindingsSym];
    const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
    ;
    const bindingsFromJson = JSON.parse(chindingsJson);
    delete bindingsFromJson.pid;
    delete bindingsFromJson.hostname;
    return bindingsFromJson;
}
function setBindings(newBindings) {
    const chindings = asChindings(this, newBindings);
    this[chindingsSym] = chindings;
    delete this[parsedChindingsSym];
}
/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */ function defaultMixinMergeStrategy(mergeObject, mixinObject) {
    return Object.assign(mixinObject, mergeObject);
}
function write(_obj, msg, num) {
    const t = this[timeSym]();
    const mixin = this[mixinSym];
    const errorKey = this[errorKeySym];
    const messageKey = this[messageKeySym];
    const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy;
    let obj;
    const streamWriteHook = this[hooksSym].streamWrite;
    if (_obj === undefined || _obj === null) {
        obj = {};
    } else if (_obj instanceof Error) {
        obj = {
            [errorKey]: _obj
        };
        if (msg === undefined) {
            msg = _obj.message;
        }
    } else {
        obj = _obj;
        if (msg === undefined && _obj[messageKey] === undefined && _obj[errorKey]) {
            msg = _obj[errorKey].message;
        }
    }
    if (mixin) {
        obj = mixinMergeStrategy(obj, mixin(obj, num, this));
    }
    const s = this[asJsonSym](obj, msg, num, t);
    const stream = this[streamSym];
    if (stream[needsMetadataGsym] === true) {
        stream.lastLevel = num;
        stream.lastObj = obj;
        stream.lastMsg = msg;
        stream.lastTime = t.slice(this[timeSliceIndexSym]);
        stream.lastLogger = this; // for child loggers
    }
    stream.write(streamWriteHook ? streamWriteHook(s) : s);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw Error('callback must be a function');
    }
    const stream = this[streamSym];
    if (typeof stream.flush === 'function') {
        stream.flush(cb || noop);
    } else if (cb) cb();
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/pino.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const stdSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const caller = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
const time = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/time.js [app-ssr] (ecmascript)");
const proto = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)");
const symbols = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { configure } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/safe-stable-stringify/index.js [app-ssr] (ecmascript)");
const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const { createArgsNormalizer, asChindings, buildSafeSonicBoom, buildFormatters, stringify, normalizeDestFileDescriptor, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const { chindingsSym, redactFmtSym, serializersSym, timeSym, timeSliceIndexSym, streamSym, stringifySym, stringifySafeSym, stringifiersSym, setLevelSym, endSym, formatOptsSym, messageKeySym, errorKeySym, nestedKeySym, mixinSym, levelCompSym, useOnlyCustomLevelsSym, formattersSym, hooksSym, nestedKeyStrSym, mixinMergeStrategySym, msgPrefixSym } = symbols;
const { epochTime, nullTime } = time;
const { pid } = process;
const hostname = os.hostname();
const defaultErrorSerializer = stdSerializers.err;
const defaultOptions = {
    level: 'info',
    levelComparison: SORTING_ORDER.ASC,
    levels: DEFAULT_LEVELS,
    messageKey: 'msg',
    errorKey: 'err',
    nestedKey: null,
    enabled: true,
    base: {
        pid,
        hostname
    },
    serializers: Object.assign(Object.create(null), {
        err: defaultErrorSerializer
    }),
    formatters: Object.assign(Object.create(null), {
        bindings (bindings) {
            return bindings;
        },
        level (label, number) {
            return {
                level: number
            };
        }
    }),
    hooks: {
        logMethod: undefined,
        streamWrite: undefined
    },
    timestamp: epochTime,
    name: undefined,
    redact: null,
    customLevels: null,
    useOnlyCustomLevels: false,
    depthLimit: 5,
    edgeLimit: 100
};
const normalize = createArgsNormalizer(defaultOptions);
const serializers = Object.assign(Object.create(null), stdSerializers);
function pino(...args) {
    const instance = {};
    const { opts, stream } = normalize(instance, caller(), ...args);
    if (opts.level && typeof opts.level === 'string' && DEFAULT_LEVELS[opts.level.toLowerCase()] !== undefined) opts.level = opts.level.toLowerCase();
    const { redact, crlf, serializers, timestamp, messageKey, errorKey, nestedKey, base, name, level, customLevels, levelComparison, mixin, mixinMergeStrategy, useOnlyCustomLevels, formatters, hooks, depthLimit, edgeLimit, onChild, msgPrefix } = opts;
    const stringifySafe = configure({
        maximumDepth: depthLimit,
        maximumBreadth: edgeLimit
    });
    const allFormatters = buildFormatters(formatters.level, formatters.bindings, formatters.log);
    const stringifyFn = stringify.bind({
        [stringifySafeSym]: stringifySafe
    });
    const stringifiers = redact ? redaction(redact, stringifyFn) : {};
    const formatOpts = redact ? {
        stringify: stringifiers[redactFmtSym]
    } : {
        stringify: stringifyFn
    };
    const end = '}' + (crlf ? '\r\n' : '\n');
    const coreChindings = asChindings.bind(null, {
        [chindingsSym]: '',
        [serializersSym]: serializers,
        [stringifiersSym]: stringifiers,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [formattersSym]: allFormatters
    });
    let chindings = '';
    if (base !== null) {
        if (name === undefined) {
            chindings = coreChindings(base);
        } else {
            chindings = coreChindings(Object.assign({}, base, {
                name
            }));
        }
    }
    const time = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
    const timeSliceIndex = time().indexOf(':') + 1;
    if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true');
    if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
    if (msgPrefix && typeof msgPrefix !== 'string') throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`);
    assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels);
    const levels = mappings(customLevels, useOnlyCustomLevels);
    if (typeof stream.emit === 'function') {
        stream.emit('message', {
            code: 'PINO_CONFIG',
            config: {
                levels,
                messageKey,
                errorKey
            }
        });
    }
    assertLevelComparison(levelComparison);
    const levelCompFunc = genLevelComparison(levelComparison);
    Object.assign(instance, {
        levels,
        [levelCompSym]: levelCompFunc,
        [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
        [streamSym]: stream,
        [timeSym]: time,
        [timeSliceIndexSym]: timeSliceIndex,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [stringifiersSym]: stringifiers,
        [endSym]: end,
        [formatOptsSym]: formatOpts,
        [messageKeySym]: messageKey,
        [errorKeySym]: errorKey,
        [nestedKeySym]: nestedKey,
        // protect against injection
        [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
        [serializersSym]: serializers,
        [mixinSym]: mixin,
        [mixinMergeStrategySym]: mixinMergeStrategy,
        [chindingsSym]: chindings,
        [formattersSym]: allFormatters,
        [hooksSym]: hooks,
        silent: noop,
        onChild,
        [msgPrefixSym]: msgPrefix
    });
    Object.setPrototypeOf(instance, proto());
    genLsCache(instance);
    instance[setLevelSym](level);
    return instance;
}
module.exports = pino;
module.exports.destination = (dest = process.stdout.fd)=>{
    if (typeof dest === 'object') {
        dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
        return buildSafeSonicBoom(dest);
    } else {
        return buildSafeSonicBoom({
            dest: normalizeDestFileDescriptor(dest),
            minLength: 0
        });
    }
};
module.exports.transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
module.exports.multistream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)");
module.exports.levels = mappings();
module.exports.stdSerializers = serializers;
module.exports.stdTimeFunctions = Object.assign({}, time);
module.exports.symbols = symbols;
module.exports.version = version;
// Enables default and name export with TypeScript and Babel
module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function noOpPrepareStackTrace(_, stack) {
    return stack;
}
module.exports = function getCallers() {
    const originalPrepare = Error.prepareStackTrace;
    Error.prepareStackTrace = noOpPrepareStackTrace;
    const stack = new Error().stack;
    Error.prepareStackTrace = originalPrepare;
    if (!Array.isArray(stack)) {
        return undefined;
    }
    const entries = stack.slice(2);
    const fileNames = [];
    for (const entry of entries){
        if (!entry) {
            continue;
        }
        fileNames.push(entry.getFileName());
    }
    return fileNames;
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createRequire } = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
const getCallers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const { join, isAbsolute, sep } = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const ThreadStream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/index.js [app-ssr] (ecmascript)");
function setupOnExit(stream) {
    // This is leak free, it does not leave event handlers
    onExit.register(stream, autoEnd);
    onExit.registerBeforeExit(stream, flush);
    stream.on('close', function() {
        onExit.unregister(stream);
    });
}
function buildStream(filename, workerData, workerOpts, sync) {
    const stream = new ThreadStream({
        filename,
        workerData,
        workerOpts,
        sync
    });
    stream.on('ready', onReady);
    stream.on('close', function() {
        process.removeListener('exit', onExit);
    });
    process.on('exit', onExit);
    function onReady() {
        process.removeListener('exit', onExit);
        stream.unref();
        if (workerOpts.autoEnd !== false) {
            setupOnExit(stream);
        }
    }
    function onExit() {
        /* istanbul ignore next */ if (stream.closed) {
            return;
        }
        stream.flushSync();
        // Apparently there is a very sporadic race condition
        // that in certain OS would prevent the messages to be flushed
        // because the thread might not have been created still.
        // Unfortunately we need to sleep(100) in this case.
        sleep(100);
        stream.end();
    }
    return stream;
}
function autoEnd(stream) {
    stream.ref();
    stream.flushSync();
    stream.end();
    stream.once('close', function() {
        stream.unref();
    });
}
function flush(stream) {
    stream.flushSync();
}
function transport(fullOptions) {
    const { pipeline, targets, levels, dedupe, worker = {}, caller = getCallers(), sync = false } = fullOptions;
    const options = {
        ...fullOptions.options
    };
    // Backwards compatibility
    const callers = typeof caller === 'string' ? [
        caller
    ] : caller;
    // This will be eventually modified by bundlers
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    let target = fullOptions.target;
    if (target && targets) {
        throw new Error('only one of target or targets can be specified');
    }
    if (targets) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib"), 'worker.js');
        options.targets = targets.filter((dest)=>dest.target).map((dest)=>{
            return {
                ...dest,
                target: fixTarget(dest.target)
            };
        });
        options.pipelines = targets.filter((dest)=>dest.pipeline).map((dest)=>{
            return dest.pipeline.map((t)=>{
                return {
                    ...t,
                    level: dest.level,
                    target: fixTarget(t.target)
                };
            });
        });
    } else if (pipeline) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib"), 'worker.js');
        options.pipelines = [
            pipeline.map((dest)=>{
                return {
                    ...dest,
                    target: fixTarget(dest.target)
                };
            })
        ];
    }
    if (levels) {
        options.levels = levels;
    }
    if (dedupe) {
        options.dedupe = dedupe;
    }
    options.pinoWillSendConfig = true;
    return buildStream(fixTarget(target), options, worker, sync);
    //TURBOPACK unreachable
    ;
    function fixTarget(origin) {
        origin = bundlerOverrides[origin] || origin;
        if (isAbsolute(origin) || origin.indexOf('file://') === 0) {
            return origin;
        }
        if (origin === 'pino/file') {
            return join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib"), '..', 'file.js');
        }
        let fixTarget;
        for (const filePath of callers){
            try {
                const context = filePath === 'node:repl' ? process.cwd() + sep : filePath;
                fixTarget = createRequire(context).resolve(origin);
                break;
            } catch (err) {
                continue;
            }
        }
        if (!fixTarget) {
            throw new Error(`unable to determine transport target for "${origin}"`);
        }
        return fixTarget;
    }
}
module.exports = transport;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Represents default log level values
 *
 * @enum {number}
 */ const DEFAULT_LEVELS = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
};
/**
 * Represents sort order direction: `ascending` or `descending`
 *
 * @enum {string}
 */ const SORTING_ORDER = {
    ASC: 'ASC',
    DESC: 'DESC'
};
module.exports = {
    DEFAULT_LEVELS,
    SORTING_ORDER
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const metadata = Symbol.for('pino.metadata');
const { DEFAULT_LEVELS } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info;
function multistream(streamsArray, opts) {
    streamsArray = streamsArray || [];
    opts = opts || {
        dedupe: false
    };
    const streamLevels = Object.create(DEFAULT_LEVELS);
    streamLevels.silent = Infinity;
    if (opts.levels && typeof opts.levels === 'object') {
        Object.keys(opts.levels).forEach((i)=>{
            streamLevels[i] = opts.levels[i];
        });
    }
    const res = {
        write,
        add,
        remove,
        emit,
        flushSync,
        end,
        minLevel: 0,
        lastId: 0,
        streams: [],
        clone,
        [metadata]: true,
        streamLevels
    };
    if (Array.isArray(streamsArray)) {
        streamsArray.forEach(add, res);
    } else {
        add.call(res, streamsArray);
    }
    // clean this object up
    // or it will stay allocated forever
    // as it is closed on the following closures
    streamsArray = null;
    return res;
    //TURBOPACK unreachable
    ;
    // we can exit early because the streams are ordered by level
    function write(data) {
        let dest;
        const level = this.lastLevel;
        const { streams } = this;
        // for handling situation when several streams has the same level
        let recordedLevel = 0;
        let stream;
        // if dedupe set to true we send logs to the stream with the highest level
        // therefore, we have to change sorting order
        for(let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)){
            dest = streams[i];
            if (dest.level <= level) {
                if (recordedLevel !== 0 && recordedLevel !== dest.level) {
                    break;
                }
                stream = dest.stream;
                if (stream[metadata]) {
                    const { lastTime, lastMsg, lastObj, lastLogger } = this;
                    stream.lastLevel = level;
                    stream.lastTime = lastTime;
                    stream.lastMsg = lastMsg;
                    stream.lastObj = lastObj;
                    stream.lastLogger = lastLogger;
                }
                stream.write(data);
                if (opts.dedupe) {
                    recordedLevel = dest.level;
                }
            } else if (!opts.dedupe) {
                break;
            }
        }
    }
    function emit(...args) {
        for (const { stream } of this.streams){
            if (typeof stream.emit === 'function') {
                stream.emit(...args);
            }
        }
    }
    function flushSync() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
        }
    }
    function add(dest) {
        if (!dest) {
            return res;
        }
        // Check that dest implements either StreamEntry or DestinationStream
        const isStream = typeof dest.write === 'function' || dest.stream;
        const stream_ = dest.write ? dest : dest.stream;
        // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
        if (!isStream) {
            throw Error('stream object needs to implement either StreamEntry or DestinationStream interface');
        }
        const { streams, streamLevels } = this;
        let level;
        if (typeof dest.levelVal === 'number') {
            level = dest.levelVal;
        } else if (typeof dest.level === 'string') {
            level = streamLevels[dest.level];
        } else if (typeof dest.level === 'number') {
            level = dest.level;
        } else {
            level = DEFAULT_INFO_LEVEL;
        }
        const dest_ = {
            stream: stream_,
            level,
            levelVal: undefined,
            id: ++res.lastId
        };
        streams.unshift(dest_);
        streams.sort(compareByLevel);
        this.minLevel = streams[0].level;
        return res;
    }
    function remove(id) {
        const { streams } = this;
        const index = streams.findIndex((s)=>s.id === id);
        if (index >= 0) {
            streams.splice(index, 1);
            streams.sort(compareByLevel);
            this.minLevel = streams.length > 0 ? streams[0].level : -1;
        }
        return res;
    }
    function end() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
            stream.end();
        }
    }
    function clone(level) {
        const streams = new Array(this.streams.length);
        for(let i = 0; i < streams.length; i++){
            streams[i] = {
                level,
                stream: this.streams[i].stream
            };
        }
        return {
            write,
            add,
            remove,
            minLevel: level,
            streams,
            clone,
            emit,
            flushSync,
            [metadata]: true
        };
    }
}
function compareByLevel(a, b) {
    return a.level - b.level;
}
function initLoopVar(length, dedupe) {
    return dedupe ? length - 1 : 0;
}
function adjustLoopVar(i, dedupe) {
    return dedupe ? i - 1 : i + 1;
}
function checkLoopVar(i, length, dedupe) {
    return dedupe ? i >= 0 : i < length;
}
module.exports = multistream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const setLevelSym = Symbol('pino.setLevel');
const getLevelSym = Symbol('pino.getLevel');
const levelValSym = Symbol('pino.levelVal');
const levelCompSym = Symbol('pino.levelComp');
const useLevelLabelsSym = Symbol('pino.useLevelLabels');
const useOnlyCustomLevelsSym = Symbol('pino.useOnlyCustomLevels');
const mixinSym = Symbol('pino.mixin');
const lsCacheSym = Symbol('pino.lsCache');
const chindingsSym = Symbol('pino.chindings');
const asJsonSym = Symbol('pino.asJson');
const writeSym = Symbol('pino.write');
const redactFmtSym = Symbol('pino.redactFmt');
const timeSym = Symbol('pino.time');
const timeSliceIndexSym = Symbol('pino.timeSliceIndex');
const streamSym = Symbol('pino.stream');
const stringifySym = Symbol('pino.stringify');
const stringifySafeSym = Symbol('pino.stringifySafe');
const stringifiersSym = Symbol('pino.stringifiers');
const endSym = Symbol('pino.end');
const formatOptsSym = Symbol('pino.formatOpts');
const messageKeySym = Symbol('pino.messageKey');
const errorKeySym = Symbol('pino.errorKey');
const nestedKeySym = Symbol('pino.nestedKey');
const nestedKeyStrSym = Symbol('pino.nestedKeyStr');
const mixinMergeStrategySym = Symbol('pino.mixinMergeStrategy');
const msgPrefixSym = Symbol('pino.msgPrefix');
const wildcardFirstSym = Symbol('pino.wildcardFirst');
// public symbols, no need to use the same pino
// version for these
const serializersSym = Symbol.for('pino.serializers');
const formattersSym = Symbol.for('pino.formatters');
const hooksSym = Symbol.for('pino.hooks');
const needsMetadataGsym = Symbol.for('pino.metadata');
module.exports = {
    setLevelSym,
    getLevelSym,
    levelValSym,
    levelCompSym,
    useLevelLabelsSym,
    mixinSym,
    lsCacheSym,
    chindingsSym,
    asJsonSym,
    writeSym,
    serializersSym,
    redactFmtSym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    stringifySym,
    stringifySafeSym,
    stringifiersSym,
    endSym,
    formatOptsSym,
    messageKeySym,
    errorKeySym,
    nestedKeySym,
    wildcardFirstSym,
    needsMetadataGsym,
    useOnlyCustomLevelsSym,
    formattersSym,
    hooksSym,
    nestedKeyStrSym,
    mixinMergeStrategySym,
    msgPrefixSym
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const slowRedact = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/slow-redact/index.js [app-ssr] (ecmascript)");
const { redactFmtSym, wildcardFirstSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
// Custom rx regex equivalent to fast-redact's rx
const rx = /[^.[\]]+|\[([^[\]]*?)\]/g;
const CENSOR = '[Redacted]';
const strict = false // TODO should this be configurable?
;
function redaction(opts, serialize) {
    const { paths, censor, remove } = handle(opts);
    const shape = paths.reduce((o, str)=>{
        rx.lastIndex = 0;
        const first = rx.exec(str);
        const next = rx.exec(str);
        // ns is the top-level path segment, brackets + quoting removed.
        let ns = first[1] !== undefined ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, '$1') : first[0];
        if (ns === '*') {
            ns = wildcardFirstSym;
        }
        // top level key:
        if (next === null) {
            o[ns] = null;
            return o;
        }
        // path with at least two segments:
        // if ns is already redacted at the top level, ignore lower level redactions
        if (o[ns] === null) {
            return o;
        }
        const { index } = next;
        const nextPath = `${str.substr(index, str.length - 1)}`;
        o[ns] = o[ns] || [];
        // shape is a mix of paths beginning with literal values and wildcard
        // paths [ "a.b.c", "*.b.z" ] should reduce to a shape of
        // { "a": [ "b.c", "b.z" ], *: [ "b.z" ] }
        // note: "b.z" is in both "a" and * arrays because "a" matches the wildcard.
        // (* entry has wildcardFirstSym as key)
        if (ns !== wildcardFirstSym && o[ns].length === 0) {
            // first time ns's get all '*' redactions so far
            o[ns].push(...o[wildcardFirstSym] || []);
        }
        if (ns === wildcardFirstSym) {
            // new * path gets added to all previously registered literal ns's.
            Object.keys(o).forEach(function(k) {
                if (o[k]) {
                    o[k].push(nextPath);
                }
            });
        }
        o[ns].push(nextPath);
        return o;
    }, {});
    // the redactor assigned to the format symbol key
    // provides top level redaction for instances where
    // an object is interpolated into the msg string
    const result = {
        [redactFmtSym]: slowRedact({
            paths,
            censor,
            serialize,
            strict,
            remove
        })
    };
    const topCensor = (...args)=>{
        return typeof censor === 'function' ? serialize(censor(...args)) : serialize(censor);
    };
    return [
        ...Object.keys(shape),
        ...Object.getOwnPropertySymbols(shape)
    ].reduce((o, k)=>{
        // top level key:
        if (shape[k] === null) {
            o[k] = (value)=>topCensor(value, [
                    k
                ]);
        } else {
            const wrappedCensor = typeof censor === 'function' ? (value, path)=>{
                return censor(value, [
                    k,
                    ...path
                ]);
            } : censor;
            o[k] = slowRedact({
                paths: shape[k],
                censor: wrappedCensor,
                serialize,
                strict,
                remove
            });
        }
        return o;
    }, result);
}
function handle(opts) {
    if (Array.isArray(opts)) {
        opts = {
            paths: opts,
            censor: CENSOR
        };
        return opts;
    }
    let { paths, censor = CENSOR, remove } = opts;
    if (Array.isArray(paths) === false) {
        throw Error('pino – redact must contain an array of strings');
    }
    if (remove === true) censor = undefined;
    return {
        paths,
        censor,
        remove
    };
}
module.exports = redaction;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/time.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const nullTime = ()=>'';
const epochTime = ()=>`,"time":${Date.now()}`;
const unixTime = ()=>`,"time":${Math.round(Date.now() / 1000.0)}`;
const isoTime = ()=>`,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability
;
const NS_PER_MS = 1_000_000n;
const NS_PER_SEC = 1_000_000_000n;
const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS;
const startHrTime = process.hrtime.bigint();
const isoTimeNano = ()=>{
    const elapsedNs = process.hrtime.bigint() - startHrTime;
    const currentTimeNs = startWallTimeNs + elapsedNs;
    const secondsSinceEpoch = currentTimeNs / NS_PER_SEC;
    const nanosWithinSecond = currentTimeNs % NS_PER_SEC;
    const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1_000_000n);
    const date = new Date(msSinceEpoch);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond.toString().padStart(9, '0')}Z"`;
};
module.exports = {
    nullTime,
    epochTime,
    unixTime,
    isoTime,
    isoTimeNano
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const diagChan = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-ssr] (ecmascript)");
const { mapHttpRequest, mapHttpResponse } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const SonicBoom = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const { lsCacheSym, chindingsSym, writeSym, serializersSym, formatOptsSym, endSym, stringifiersSym, stringifySym, stringifySafeSym, wildcardFirstSym, nestedKeySym, formattersSym, messageKeySym, errorKeySym, nestedKeyStrSym, msgPrefixSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { isMainThread } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
const asJsonChan = diagChan.tracingChannel('pino_asJson');
function noop() {}
function genLog(level, hook) {
    if (!hook) return LOG;
    return function hookWrappedLog(...args) {
        hook.call(this, args, LOG, level);
    };
    //TURBOPACK unreachable
    ;
    function LOG(o, ...n) {
        if (typeof o === 'object') {
            let msg = o;
            if (o !== null) {
                if (o.method && o.headers && o.socket) {
                    o = mapHttpRequest(o);
                } else if (typeof o.setHeader === 'function') {
                    o = mapHttpResponse(o);
                }
            }
            let formatParams;
            if (msg === null && n.length === 0) {
                formatParams = [
                    null
                ];
            } else {
                msg = n.shift();
                formatParams = n;
            }
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level);
        } else {
            let msg = o === undefined ? n.shift() : o;
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](null, format(msg, n, this[formatOptsSym]), level);
        }
    }
}
// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function asString(str) {
    let result = '';
    let last = 0;
    let found = false;
    let point = 255;
    const l = str.length;
    if (l > 100) {
        return JSON.stringify(str);
    }
    for(var i = 0; i < l && point >= 32; i++){
        point = str.charCodeAt(i);
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + '\\';
            last = i;
            found = true;
        }
    }
    if (!found) {
        result = str;
    } else {
        result += str.slice(last);
    }
    return point < 32 ? JSON.stringify(str) : '"' + result + '"';
}
/**
 * `asJson` wraps `_asJson` in order to facilitate generating diagnostics.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string}
 */ function asJson(obj, msg, num, time) {
    if (asJsonChan.hasSubscribers === false) {
        return _asJson.call(this, obj, msg, num, time);
    }
    const store = {
        instance: this,
        arguments
    };
    return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time);
}
/**
 * `_asJson` parses all collected data and generates the finalized newline
 * delimited JSON string.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string} The finalized log string terminated with a newline.
 * @private
 */ function _asJson(obj, msg, num, time) {
    const stringify = this[stringifySym];
    const stringifySafe = this[stringifySafeSym];
    const stringifiers = this[stringifiersSym];
    const end = this[endSym];
    const chindings = this[chindingsSym];
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const messageKey = this[messageKeySym];
    const errorKey = this[errorKeySym];
    let data = this[lsCacheSym][num] + time;
    // we need the child bindings added to the output first so instance logged
    // objects can take precedence when JSON.parse-ing the resulting log line
    data = data + chindings;
    let value;
    if (formatters.log) {
        obj = formatters.log(obj);
    }
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    let propStr = '';
    for(const key in obj){
        value = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
            if (serializers[key]) {
                value = serializers[key](value);
            } else if (key === errorKey && serializers.err) {
                value = serializers.err(value);
            }
            const stringifier = stringifiers[key] || wildcardStringifier;
            switch(typeof value){
                case 'undefined':
                case 'function':
                    continue;
                case 'number':
                    /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                        value = null;
                    }
                // this case explicitly falls through to the next one
                case 'boolean':
                    if (stringifier) value = stringifier(value);
                    break;
                case 'string':
                    value = (stringifier || asString)(value);
                    break;
                default:
                    value = (stringifier || stringify)(value, stringifySafe);
            }
            if (value === undefined) continue;
            const strKey = asString(key);
            propStr += ',' + strKey + ':' + value;
        }
    }
    let msgStr = '';
    if (msg !== undefined) {
        value = serializers[messageKey] ? serializers[messageKey](msg) : msg;
        const stringifier = stringifiers[messageKey] || wildcardStringifier;
        switch(typeof value){
            case 'function':
                break;
            case 'number':
                /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                    value = null;
                }
            // this case explicitly falls through to the next one
            case 'boolean':
                if (stringifier) value = stringifier(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            case 'string':
                value = (stringifier || asString)(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            default:
                value = (stringifier || stringify)(value, stringifySafe);
                msgStr = ',"' + messageKey + '":' + value;
        }
    }
    if (this[nestedKeySym] && propStr) {
        // place all the obj properties under the specified key
        // the nested key is already formatted from the constructor
        return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end;
    } else {
        return data + propStr + msgStr + end;
    }
}
function asChindings(instance, bindings) {
    let value;
    let data = instance[chindingsSym];
    const stringify = instance[stringifySym];
    const stringifySafe = instance[stringifySafeSym];
    const stringifiers = instance[stringifiersSym];
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    const serializers = instance[serializersSym];
    const formatter = instance[formattersSym].bindings;
    bindings = formatter(bindings);
    for(const key in bindings){
        value = bindings[key];
        const valid = (key.length < 5 || key !== 'level' && key !== 'serializers' && key !== 'formatters' && key !== 'customLevels') && bindings.hasOwnProperty(key) && value !== undefined;
        if (valid === true) {
            value = serializers[key] ? serializers[key](value) : value;
            value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe);
            if (value === undefined) continue;
            data += ',"' + key + '":' + value;
        }
    }
    return data;
}
function hasBeenTampered(stream) {
    return stream.write !== stream.constructor.prototype.write;
}
function buildSafeSonicBoom(opts) {
    const stream = new SonicBoom(opts);
    stream.on('error', filterBrokenPipe);
    // If we are sync: false, we must flush on exit
    if (!opts.sync && isMainThread) {
        onExit.register(stream, autoEnd);
        stream.on('close', function() {
            onExit.unregister(stream);
        });
    }
    return stream;
    //TURBOPACK unreachable
    ;
    function filterBrokenPipe(err) {
        // Impossible to replicate across all operating systems
        /* istanbul ignore next */ if (err.code === 'EPIPE') {
            // If we get EPIPE, we should stop logging here
            // however we have no control to the consumer of
            // SonicBoom, so we just overwrite the write method
            stream.write = noop;
            stream.end = noop;
            stream.flushSync = noop;
            stream.destroy = noop;
            return;
        }
        stream.removeListener('error', filterBrokenPipe);
        stream.emit('error', err);
    }
}
function autoEnd(stream, eventName) {
    // This check is needed only on some platforms
    /* istanbul ignore next */ if (stream.destroyed) {
        return;
    }
    if (eventName === 'beforeExit') {
        // We still have an event loop, let's use it
        stream.flush();
        stream.on('drain', function() {
            stream.end();
        });
    } else {
        // For some reason istanbul is not detecting this, but it's there
        /* istanbul ignore next */ // We do not have an event loop, so flush synchronously
        stream.flushSync();
    }
}
function createArgsNormalizer(defaultOptions) {
    return function normalizeArgs(instance, caller, opts = {}, stream) {
        // support stream as a string
        if (typeof opts === 'string') {
            stream = buildSafeSonicBoom({
                dest: opts
            });
            opts = {};
        } else if (typeof stream === 'string') {
            if (opts && opts.transport) {
                throw Error('only one of option.transport or stream can be specified');
            }
            stream = buildSafeSonicBoom({
                dest: stream
            });
        } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
            stream = opts;
            opts = {};
        } else if (opts.transport) {
            if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
                throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)');
            }
            if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
                throw Error('option.transport.targets do not allow custom level formatters');
            }
            let customLevels;
            if (opts.customLevels) {
                customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels);
            }
            stream = transport({
                caller,
                ...opts.transport,
                levels: customLevels
            });
        }
        opts = Object.assign({}, defaultOptions, opts);
        opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
        opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
        if (opts.prettyPrint) {
            throw new Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)');
        }
        const { enabled, onChild } = opts;
        if (enabled === false) opts.level = 'silent';
        if (!onChild) opts.onChild = noop;
        if (!stream) {
            if (!hasBeenTampered(process.stdout)) {
                // If process.stdout.fd is undefined, it means that we are running
                // in a worker thread. Let's assume we are logging to file descriptor 1.
                stream = buildSafeSonicBoom({
                    fd: process.stdout.fd || 1
                });
            } else {
                stream = process.stdout;
            }
        }
        return {
            opts,
            stream
        };
    };
}
function stringify(obj, stringifySafeFn) {
    try {
        return JSON.stringify(obj);
    } catch (_) {
        try {
            const stringify = stringifySafeFn || this[stringifySafeSym];
            return stringify(obj);
        } catch (_) {
            return '"[unable to serialize, circular reference is too complex to analyze]"';
        }
    }
}
function buildFormatters(level, bindings, log) {
    return {
        level,
        bindings,
        log
    };
}
/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */ function normalizeDestFileDescriptor(destination) {
    const fd = Number(destination);
    if (typeof destination === 'string' && Number.isFinite(fd)) {
        return fd;
    }
    // destination could be undefined if we are in a worker
    if (destination === undefined) {
        // This is stdout in UNIX systems
        return 1;
    }
    return destination;
}
module.exports = {
    noop,
    buildSafeSonicBoom,
    asChindings,
    asJson,
    genLog,
    createArgsNormalizer,
    stringify,
    buildFormatters,
    normalizeDestFileDescriptor
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { lsCacheSym, levelValSym, useOnlyCustomLevelsSym, streamSym, formattersSym, hooksSym, levelCompSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { noop, genLog } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const levelMethods = {
    fatal: (hook)=>{
        const logFatal = genLog(DEFAULT_LEVELS.fatal, hook);
        return function(...args) {
            const stream = this[streamSym];
            logFatal.call(this, ...args);
            if (typeof stream.flushSync === 'function') {
                try {
                    stream.flushSync();
                } catch (e) {
                // https://github.com/pinojs/pino/pull/740#discussion_r346788313
                }
            }
        };
    },
    error: (hook)=>genLog(DEFAULT_LEVELS.error, hook),
    warn: (hook)=>genLog(DEFAULT_LEVELS.warn, hook),
    info: (hook)=>genLog(DEFAULT_LEVELS.info, hook),
    debug: (hook)=>genLog(DEFAULT_LEVELS.debug, hook),
    trace: (hook)=>genLog(DEFAULT_LEVELS.trace, hook)
};
const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k)=>{
    o[DEFAULT_LEVELS[k]] = k;
    return o;
}, {});
const initialLsCache = Object.keys(nums).reduce((o, k)=>{
    o[k] = '{"level":' + Number(k);
    return o;
}, {});
function genLsCache(instance) {
    const formatter = instance[formattersSym].level;
    const { labels } = instance.levels;
    const cache = {};
    for(const label in labels){
        const level = formatter(labels[label], Number(label));
        cache[label] = JSON.stringify(level).slice(0, -1);
    }
    instance[lsCacheSym] = cache;
    return instance;
}
function isStandardLevel(level, useOnlyCustomLevels) {
    if (useOnlyCustomLevels) {
        return false;
    }
    switch(level){
        case 'fatal':
        case 'error':
        case 'warn':
        case 'info':
        case 'debug':
        case 'trace':
            return true;
        default:
            return false;
    }
}
function setLevel(level) {
    const { labels, values } = this.levels;
    if (typeof level === 'number') {
        if (labels[level] === undefined) throw Error('unknown level value' + level);
        level = labels[level];
    }
    if (values[level] === undefined) throw Error('unknown level ' + level);
    const preLevelVal = this[levelValSym];
    const levelVal = this[levelValSym] = values[level];
    const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
    const levelComparison = this[levelCompSym];
    const hook = this[hooksSym].logMethod;
    for(const key in values){
        if (levelComparison(values[key], levelVal) === false) {
            this[key] = noop;
            continue;
        }
        this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
    }
    this.emit('level-change', level, levelVal, labels[preLevelVal], preLevelVal, this);
}
function getLevel(level) {
    const { levels, levelVal } = this;
    // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
    return levels && levels.labels ? levels.labels[levelVal] : '';
}
function isLevelEnabled(logLevel) {
    const { values } = this.levels;
    const logLevelVal = values[logLevel];
    return logLevelVal !== undefined && this[levelCompSym](logLevelVal, this[levelValSym]);
}
/**
 * Determine if the given `current` level is enabled by comparing it
 * against the current threshold (`expected`).
 *
 * @param {SORTING_ORDER} direction comparison direction "ASC" or "DESC"
 * @param {number} current current log level number representation
 * @param {number} expected threshold value to compare with
 * @returns {boolean}
 */ function compareLevel(direction, current, expected) {
    if (direction === SORTING_ORDER.DESC) {
        return current <= expected;
    }
    return current >= expected;
}
/**
 * Create a level comparison function based on `levelComparison`
 * it could a default function which compares levels either in "ascending" or "descending" order or custom comparison function
 *
 * @param {SORTING_ORDER | Function} levelComparison sort levels order direction or custom comparison function
 * @returns Function
 */ function genLevelComparison(levelComparison) {
    if (typeof levelComparison === 'string') {
        return compareLevel.bind(null, levelComparison);
    }
    return levelComparison;
}
function mappings(customLevels = null, useOnlyCustomLevels = false) {
    const customNums = customLevels ? Object.keys(customLevels).reduce((o, k)=>{
        o[customLevels[k]] = k;
        return o;
    }, {}) : null;
    /* eslint-enable */ const labels = Object.assign(Object.create(Object.prototype, {
        Infinity: {
            value: 'silent'
        }
    }), useOnlyCustomLevels ? null : nums, customNums);
    const values = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    return {
        labels,
        values
    };
}
function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
    if (typeof defaultLevel === 'number') {
        const values = [].concat(Object.keys(customLevels || {}).map((key)=>customLevels[key]), useOnlyCustomLevels ? [] : Object.keys(nums).map((level)=>+level), Infinity);
        if (!values.includes(defaultLevel)) {
            throw Error(`default level:${defaultLevel} must be included in custom levels`);
        }
        return;
    }
    const labels = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    if (!(defaultLevel in labels)) {
        throw Error(`default level:${defaultLevel} must be included in custom levels`);
    }
}
function assertNoLevelCollisions(levels, customLevels) {
    const { labels, values } = levels;
    for(const k in customLevels){
        if (k in values) {
            throw Error('levels cannot be overridden');
        }
        if (customLevels[k] in labels) {
            throw Error('pre-existing level values cannot be used for new levels');
        }
    }
}
/**
 * Validates whether `levelComparison` is correct
 *
 * @throws Error
 * @param {SORTING_ORDER | Function} levelComparison - value to validate
 * @returns
 */ function assertLevelComparison(levelComparison) {
    if (typeof levelComparison === 'function') {
        return;
    }
    if (typeof levelComparison === 'string' && Object.values(SORTING_ORDER).includes(levelComparison)) {
        return;
    }
    throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type');
}
module.exports = {
    initialLsCache,
    genLsCache,
    levelMethods,
    getLevel,
    setLevel,
    isLevelEnabled,
    mappings,
    assertNoLevelCollisions,
    assertDefaultLevelFound,
    genLevelComparison,
    assertLevelComparison
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    version: '10.0.0'
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { EventEmitter } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { lsCacheSym, levelValSym, setLevelSym, getLevelSym, chindingsSym, parsedChindingsSym, mixinSym, asJsonSym, writeSym, mixinMergeStrategySym, timeSym, timeSliceIndexSym, streamSym, serializersSym, formattersSym, errorKeySym, messageKeySym, useOnlyCustomLevelsSym, needsMetadataGsym, redactFmtSym, stringifySym, formatOptsSym, stringifiersSym, msgPrefixSym, hooksSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { getLevel, setLevel, isLevelEnabled, mappings, initialLsCache, genLsCache, assertNoLevelCollisions } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { asChindings, asJson, buildFormatters, stringify, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {
};
const prototype = {
    constructor,
    child,
    bindings,
    setBindings,
    flush,
    isLevelEnabled,
    version,
    get level () {
        return this[getLevelSym]();
    },
    set level (lvl){
        this[setLevelSym](lvl);
    },
    get levelVal () {
        return this[levelValSym];
    },
    set levelVal (n){
        throw Error('levelVal is read-only');
    },
    get msgPrefix () {
        return this[msgPrefixSym];
    },
    get [Symbol.toStringTag] () {
        return 'Pino';
    },
    [lsCacheSym]: initialLsCache,
    [writeSym]: write,
    [asJsonSym]: asJson,
    [getLevelSym]: getLevel,
    [setLevelSym]: setLevel
};
Object.setPrototypeOf(prototype, EventEmitter.prototype);
// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function() {
    return Object.create(prototype);
};
const resetChildingsFormatter = (bindings)=>bindings;
function child(bindings, options) {
    if (!bindings) {
        throw Error('missing bindings for child Pino');
    }
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const instance = Object.create(this);
    // If an `options` object was not supplied, we can improve
    // the performance of child creation by skipping
    // the checks for set options and simply return
    // a baseline instance.
    if (options == null) {
        if (instance[formattersSym].bindings !== resetChildingsFormatter) {
            instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
        }
        instance[chindingsSym] = asChindings(instance, bindings);
        if (this.onChild !== noop) {
            this.onChild(instance);
        }
        return instance;
    }
    if (options.hasOwnProperty('serializers') === true) {
        instance[serializersSym] = Object.create(null);
        for(const k in serializers){
            instance[serializersSym][k] = serializers[k];
        }
        const parentSymbols = Object.getOwnPropertySymbols(serializers);
        /* eslint no-var: off */ for(var i = 0; i < parentSymbols.length; i++){
            const ks = parentSymbols[i];
            instance[serializersSym][ks] = serializers[ks];
        }
        for(const bk in options.serializers){
            instance[serializersSym][bk] = options.serializers[bk];
        }
        const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
        for(var bi = 0; bi < bindingsSymbols.length; bi++){
            const bks = bindingsSymbols[bi];
            instance[serializersSym][bks] = options.serializers[bks];
        }
    } else instance[serializersSym] = serializers;
    if (options.hasOwnProperty('formatters')) {
        const { level, bindings: chindings, log } = options.formatters;
        instance[formattersSym] = buildFormatters(level || formatters.level, chindings || resetChildingsFormatter, log || formatters.log);
    } else {
        instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
    }
    if (options.hasOwnProperty('customLevels') === true) {
        assertNoLevelCollisions(this.levels, options.customLevels);
        instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
        genLsCache(instance);
    }
    // redact must place before asChindings and only replace if exist
    if (typeof options.redact === 'object' && options.redact !== null || Array.isArray(options.redact)) {
        instance.redact = options.redact; // replace redact directly
        const stringifiers = redaction(instance.redact, stringify);
        const formatOpts = {
            stringify: stringifiers[redactFmtSym]
        };
        instance[stringifySym] = stringify;
        instance[stringifiersSym] = stringifiers;
        instance[formatOptsSym] = formatOpts;
    }
    if (typeof options.msgPrefix === 'string') {
        instance[msgPrefixSym] = (this[msgPrefixSym] || '') + options.msgPrefix;
    }
    instance[chindingsSym] = asChindings(instance, bindings);
    if (options.level !== undefined && options.level !== this.level || options.hasOwnProperty('customLevels')) {
        const childLevel = options.level || this.level;
        instance[setLevelSym](childLevel);
    }
    this.onChild(instance);
    return instance;
}
function bindings() {
    const chindings = this[chindingsSym];
    const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
    ;
    const bindingsFromJson = JSON.parse(chindingsJson);
    delete bindingsFromJson.pid;
    delete bindingsFromJson.hostname;
    return bindingsFromJson;
}
function setBindings(newBindings) {
    const chindings = asChindings(this, newBindings);
    this[chindingsSym] = chindings;
    delete this[parsedChindingsSym];
}
/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */ function defaultMixinMergeStrategy(mergeObject, mixinObject) {
    return Object.assign(mixinObject, mergeObject);
}
function write(_obj, msg, num) {
    const t = this[timeSym]();
    const mixin = this[mixinSym];
    const errorKey = this[errorKeySym];
    const messageKey = this[messageKeySym];
    const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy;
    let obj;
    const streamWriteHook = this[hooksSym].streamWrite;
    if (_obj === undefined || _obj === null) {
        obj = {};
    } else if (_obj instanceof Error) {
        obj = {
            [errorKey]: _obj
        };
        if (msg === undefined) {
            msg = _obj.message;
        }
    } else {
        obj = _obj;
        if (msg === undefined && _obj[messageKey] === undefined && _obj[errorKey]) {
            msg = _obj[errorKey].message;
        }
    }
    if (mixin) {
        obj = mixinMergeStrategy(obj, mixin(obj, num, this));
    }
    const s = this[asJsonSym](obj, msg, num, t);
    const stream = this[streamSym];
    if (stream[needsMetadataGsym] === true) {
        stream.lastLevel = num;
        stream.lastObj = obj;
        stream.lastMsg = msg;
        stream.lastTime = t.slice(this[timeSliceIndexSym]);
        stream.lastLogger = this; // for child loggers
    }
    stream.write(streamWriteHook ? streamWriteHook(s) : s);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw Error('callback must be a function');
    }
    const stream = this[streamSym];
    if (typeof stream.flush === 'function') {
        stream.flush(cb || noop);
    } else if (cb) cb();
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/pino.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const stdSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const caller = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
const time = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/time.js [app-ssr] (ecmascript)");
const proto = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)");
const symbols = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { configure } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/safe-stable-stringify/index.js [app-ssr] (ecmascript)");
const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const { createArgsNormalizer, asChindings, buildSafeSonicBoom, buildFormatters, stringify, normalizeDestFileDescriptor, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const { chindingsSym, redactFmtSym, serializersSym, timeSym, timeSliceIndexSym, streamSym, stringifySym, stringifySafeSym, stringifiersSym, setLevelSym, endSym, formatOptsSym, messageKeySym, errorKeySym, nestedKeySym, mixinSym, levelCompSym, useOnlyCustomLevelsSym, formattersSym, hooksSym, nestedKeyStrSym, mixinMergeStrategySym, msgPrefixSym } = symbols;
const { epochTime, nullTime } = time;
const { pid } = process;
const hostname = os.hostname();
const defaultErrorSerializer = stdSerializers.err;
const defaultOptions = {
    level: 'info',
    levelComparison: SORTING_ORDER.ASC,
    levels: DEFAULT_LEVELS,
    messageKey: 'msg',
    errorKey: 'err',
    nestedKey: null,
    enabled: true,
    base: {
        pid,
        hostname
    },
    serializers: Object.assign(Object.create(null), {
        err: defaultErrorSerializer
    }),
    formatters: Object.assign(Object.create(null), {
        bindings (bindings) {
            return bindings;
        },
        level (label, number) {
            return {
                level: number
            };
        }
    }),
    hooks: {
        logMethod: undefined,
        streamWrite: undefined
    },
    timestamp: epochTime,
    name: undefined,
    redact: null,
    customLevels: null,
    useOnlyCustomLevels: false,
    depthLimit: 5,
    edgeLimit: 100
};
const normalize = createArgsNormalizer(defaultOptions);
const serializers = Object.assign(Object.create(null), stdSerializers);
function pino(...args) {
    const instance = {};
    const { opts, stream } = normalize(instance, caller(), ...args);
    if (opts.level && typeof opts.level === 'string' && DEFAULT_LEVELS[opts.level.toLowerCase()] !== undefined) opts.level = opts.level.toLowerCase();
    const { redact, crlf, serializers, timestamp, messageKey, errorKey, nestedKey, base, name, level, customLevels, levelComparison, mixin, mixinMergeStrategy, useOnlyCustomLevels, formatters, hooks, depthLimit, edgeLimit, onChild, msgPrefix } = opts;
    const stringifySafe = configure({
        maximumDepth: depthLimit,
        maximumBreadth: edgeLimit
    });
    const allFormatters = buildFormatters(formatters.level, formatters.bindings, formatters.log);
    const stringifyFn = stringify.bind({
        [stringifySafeSym]: stringifySafe
    });
    const stringifiers = redact ? redaction(redact, stringifyFn) : {};
    const formatOpts = redact ? {
        stringify: stringifiers[redactFmtSym]
    } : {
        stringify: stringifyFn
    };
    const end = '}' + (crlf ? '\r\n' : '\n');
    const coreChindings = asChindings.bind(null, {
        [chindingsSym]: '',
        [serializersSym]: serializers,
        [stringifiersSym]: stringifiers,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [formattersSym]: allFormatters
    });
    let chindings = '';
    if (base !== null) {
        if (name === undefined) {
            chindings = coreChindings(base);
        } else {
            chindings = coreChindings(Object.assign({}, base, {
                name
            }));
        }
    }
    const time = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
    const timeSliceIndex = time().indexOf(':') + 1;
    if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true');
    if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
    if (msgPrefix && typeof msgPrefix !== 'string') throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`);
    assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels);
    const levels = mappings(customLevels, useOnlyCustomLevels);
    if (typeof stream.emit === 'function') {
        stream.emit('message', {
            code: 'PINO_CONFIG',
            config: {
                levels,
                messageKey,
                errorKey
            }
        });
    }
    assertLevelComparison(levelComparison);
    const levelCompFunc = genLevelComparison(levelComparison);
    Object.assign(instance, {
        levels,
        [levelCompSym]: levelCompFunc,
        [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
        [streamSym]: stream,
        [timeSym]: time,
        [timeSliceIndexSym]: timeSliceIndex,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [stringifiersSym]: stringifiers,
        [endSym]: end,
        [formatOptsSym]: formatOpts,
        [messageKeySym]: messageKey,
        [errorKeySym]: errorKey,
        [nestedKeySym]: nestedKey,
        // protect against injection
        [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
        [serializersSym]: serializers,
        [mixinSym]: mixin,
        [mixinMergeStrategySym]: mixinMergeStrategy,
        [chindingsSym]: chindings,
        [formattersSym]: allFormatters,
        [hooksSym]: hooks,
        silent: noop,
        onChild,
        [msgPrefixSym]: msgPrefix
    });
    Object.setPrototypeOf(instance, proto());
    genLsCache(instance);
    instance[setLevelSym](level);
    return instance;
}
module.exports = pino;
module.exports.destination = (dest = process.stdout.fd)=>{
    if (typeof dest === 'object') {
        dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
        return buildSafeSonicBoom(dest);
    } else {
        return buildSafeSonicBoom({
            dest: normalizeDestFileDescriptor(dest),
            minLength: 0
        });
    }
};
module.exports.transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
module.exports.multistream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)");
module.exports.levels = mappings();
module.exports.stdSerializers = serializers;
module.exports.stdTimeFunctions = Object.assign({}, time);
module.exports.symbols = symbols;
module.exports.version = version;
// Enables default and name export with TypeScript and Babel
module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function noOpPrepareStackTrace(_, stack) {
    return stack;
}
module.exports = function getCallers() {
    const originalPrepare = Error.prepareStackTrace;
    Error.prepareStackTrace = noOpPrepareStackTrace;
    const stack = new Error().stack;
    Error.prepareStackTrace = originalPrepare;
    if (!Array.isArray(stack)) {
        return undefined;
    }
    const entries = stack.slice(2);
    const fileNames = [];
    for (const entry of entries){
        if (!entry) {
            continue;
        }
        fileNames.push(entry.getFileName());
    }
    return fileNames;
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createRequire } = __turbopack_context__.r("[externals]/module [external] (module, cjs)");
const getCallers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const { join, isAbsolute, sep } = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const ThreadStream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/index.js [app-ssr] (ecmascript)");
function setupOnExit(stream) {
    // This is leak free, it does not leave event handlers
    onExit.register(stream, autoEnd);
    onExit.registerBeforeExit(stream, flush);
    stream.on('close', function() {
        onExit.unregister(stream);
    });
}
function buildStream(filename, workerData, workerOpts, sync) {
    const stream = new ThreadStream({
        filename,
        workerData,
        workerOpts,
        sync
    });
    stream.on('ready', onReady);
    stream.on('close', function() {
        process.removeListener('exit', onExit);
    });
    process.on('exit', onExit);
    function onReady() {
        process.removeListener('exit', onExit);
        stream.unref();
        if (workerOpts.autoEnd !== false) {
            setupOnExit(stream);
        }
    }
    function onExit() {
        /* istanbul ignore next */ if (stream.closed) {
            return;
        }
        stream.flushSync();
        // Apparently there is a very sporadic race condition
        // that in certain OS would prevent the messages to be flushed
        // because the thread might not have been created still.
        // Unfortunately we need to sleep(100) in this case.
        sleep(100);
        stream.end();
    }
    return stream;
}
function autoEnd(stream) {
    stream.ref();
    stream.flushSync();
    stream.end();
    stream.once('close', function() {
        stream.unref();
    });
}
function flush(stream) {
    stream.flushSync();
}
function transport(fullOptions) {
    const { pipeline, targets, levels, dedupe, worker = {}, caller = getCallers(), sync = false } = fullOptions;
    const options = {
        ...fullOptions.options
    };
    // Backwards compatibility
    const callers = typeof caller === 'string' ? [
        caller
    ] : caller;
    // This will be eventually modified by bundlers
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    let target = fullOptions.target;
    if (target && targets) {
        throw new Error('only one of target or targets can be specified');
    }
    if (targets) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib"), 'worker.js');
        options.targets = targets.filter((dest)=>dest.target).map((dest)=>{
            return {
                ...dest,
                target: fixTarget(dest.target)
            };
        });
        options.pipelines = targets.filter((dest)=>dest.pipeline).map((dest)=>{
            return dest.pipeline.map((t)=>{
                return {
                    ...t,
                    level: dest.level,
                    target: fixTarget(t.target)
                };
            });
        });
    } else if (pipeline) {
        target = bundlerOverrides['pino-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib"), 'worker.js');
        options.pipelines = [
            pipeline.map((dest)=>{
                return {
                    ...dest,
                    target: fixTarget(dest.target)
                };
            })
        ];
    }
    if (levels) {
        options.levels = levels;
    }
    if (dedupe) {
        options.dedupe = dedupe;
    }
    options.pinoWillSendConfig = true;
    return buildStream(fixTarget(target), options, worker, sync);
    //TURBOPACK unreachable
    ;
    function fixTarget(origin) {
        origin = bundlerOverrides[origin] || origin;
        if (isAbsolute(origin) || origin.indexOf('file://') === 0) {
            return origin;
        }
        if (origin === 'pino/file') {
            return join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib"), '..', 'file.js');
        }
        let fixTarget;
        for (const filePath of callers){
            try {
                const context = filePath === 'node:repl' ? process.cwd() + sep : filePath;
                fixTarget = createRequire(context).resolve(origin);
                break;
            } catch (err) {
                continue;
            }
        }
        if (!fixTarget) {
            throw new Error(`unable to determine transport target for "${origin}"`);
        }
        return fixTarget;
    }
}
module.exports = transport;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Represents default log level values
 *
 * @enum {number}
 */ const DEFAULT_LEVELS = {
    trace: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60
};
/**
 * Represents sort order direction: `ascending` or `descending`
 *
 * @enum {string}
 */ const SORTING_ORDER = {
    ASC: 'ASC',
    DESC: 'DESC'
};
module.exports = {
    DEFAULT_LEVELS,
    SORTING_ORDER
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const metadata = Symbol.for('pino.metadata');
const { DEFAULT_LEVELS } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const DEFAULT_INFO_LEVEL = DEFAULT_LEVELS.info;
function multistream(streamsArray, opts) {
    streamsArray = streamsArray || [];
    opts = opts || {
        dedupe: false
    };
    const streamLevels = Object.create(DEFAULT_LEVELS);
    streamLevels.silent = Infinity;
    if (opts.levels && typeof opts.levels === 'object') {
        Object.keys(opts.levels).forEach((i)=>{
            streamLevels[i] = opts.levels[i];
        });
    }
    const res = {
        write,
        add,
        remove,
        emit,
        flushSync,
        end,
        minLevel: 0,
        lastId: 0,
        streams: [],
        clone,
        [metadata]: true,
        streamLevels
    };
    if (Array.isArray(streamsArray)) {
        streamsArray.forEach(add, res);
    } else {
        add.call(res, streamsArray);
    }
    // clean this object up
    // or it will stay allocated forever
    // as it is closed on the following closures
    streamsArray = null;
    return res;
    //TURBOPACK unreachable
    ;
    // we can exit early because the streams are ordered by level
    function write(data) {
        let dest;
        const level = this.lastLevel;
        const { streams } = this;
        // for handling situation when several streams has the same level
        let recordedLevel = 0;
        let stream;
        // if dedupe set to true we send logs to the stream with the highest level
        // therefore, we have to change sorting order
        for(let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)){
            dest = streams[i];
            if (dest.level <= level) {
                if (recordedLevel !== 0 && recordedLevel !== dest.level) {
                    break;
                }
                stream = dest.stream;
                if (stream[metadata]) {
                    const { lastTime, lastMsg, lastObj, lastLogger } = this;
                    stream.lastLevel = level;
                    stream.lastTime = lastTime;
                    stream.lastMsg = lastMsg;
                    stream.lastObj = lastObj;
                    stream.lastLogger = lastLogger;
                }
                stream.write(data);
                if (opts.dedupe) {
                    recordedLevel = dest.level;
                }
            } else if (!opts.dedupe) {
                break;
            }
        }
    }
    function emit(...args) {
        for (const { stream } of this.streams){
            if (typeof stream.emit === 'function') {
                stream.emit(...args);
            }
        }
    }
    function flushSync() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
        }
    }
    function add(dest) {
        if (!dest) {
            return res;
        }
        // Check that dest implements either StreamEntry or DestinationStream
        const isStream = typeof dest.write === 'function' || dest.stream;
        const stream_ = dest.write ? dest : dest.stream;
        // This is necessary to provide a meaningful error message, otherwise it throws somewhere inside write()
        if (!isStream) {
            throw Error('stream object needs to implement either StreamEntry or DestinationStream interface');
        }
        const { streams, streamLevels } = this;
        let level;
        if (typeof dest.levelVal === 'number') {
            level = dest.levelVal;
        } else if (typeof dest.level === 'string') {
            level = streamLevels[dest.level];
        } else if (typeof dest.level === 'number') {
            level = dest.level;
        } else {
            level = DEFAULT_INFO_LEVEL;
        }
        const dest_ = {
            stream: stream_,
            level,
            levelVal: undefined,
            id: ++res.lastId
        };
        streams.unshift(dest_);
        streams.sort(compareByLevel);
        this.minLevel = streams[0].level;
        return res;
    }
    function remove(id) {
        const { streams } = this;
        const index = streams.findIndex((s)=>s.id === id);
        if (index >= 0) {
            streams.splice(index, 1);
            streams.sort(compareByLevel);
            this.minLevel = streams.length > 0 ? streams[0].level : -1;
        }
        return res;
    }
    function end() {
        for (const { stream } of this.streams){
            if (typeof stream.flushSync === 'function') {
                stream.flushSync();
            }
            stream.end();
        }
    }
    function clone(level) {
        const streams = new Array(this.streams.length);
        for(let i = 0; i < streams.length; i++){
            streams[i] = {
                level,
                stream: this.streams[i].stream
            };
        }
        return {
            write,
            add,
            remove,
            minLevel: level,
            streams,
            clone,
            emit,
            flushSync,
            [metadata]: true
        };
    }
}
function compareByLevel(a, b) {
    return a.level - b.level;
}
function initLoopVar(length, dedupe) {
    return dedupe ? length - 1 : 0;
}
function adjustLoopVar(i, dedupe) {
    return dedupe ? i - 1 : i + 1;
}
function checkLoopVar(i, length, dedupe) {
    return dedupe ? i >= 0 : i < length;
}
module.exports = multistream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const setLevelSym = Symbol('pino.setLevel');
const getLevelSym = Symbol('pino.getLevel');
const levelValSym = Symbol('pino.levelVal');
const levelCompSym = Symbol('pino.levelComp');
const useLevelLabelsSym = Symbol('pino.useLevelLabels');
const useOnlyCustomLevelsSym = Symbol('pino.useOnlyCustomLevels');
const mixinSym = Symbol('pino.mixin');
const lsCacheSym = Symbol('pino.lsCache');
const chindingsSym = Symbol('pino.chindings');
const asJsonSym = Symbol('pino.asJson');
const writeSym = Symbol('pino.write');
const redactFmtSym = Symbol('pino.redactFmt');
const timeSym = Symbol('pino.time');
const timeSliceIndexSym = Symbol('pino.timeSliceIndex');
const streamSym = Symbol('pino.stream');
const stringifySym = Symbol('pino.stringify');
const stringifySafeSym = Symbol('pino.stringifySafe');
const stringifiersSym = Symbol('pino.stringifiers');
const endSym = Symbol('pino.end');
const formatOptsSym = Symbol('pino.formatOpts');
const messageKeySym = Symbol('pino.messageKey');
const errorKeySym = Symbol('pino.errorKey');
const nestedKeySym = Symbol('pino.nestedKey');
const nestedKeyStrSym = Symbol('pino.nestedKeyStr');
const mixinMergeStrategySym = Symbol('pino.mixinMergeStrategy');
const msgPrefixSym = Symbol('pino.msgPrefix');
const wildcardFirstSym = Symbol('pino.wildcardFirst');
// public symbols, no need to use the same pino
// version for these
const serializersSym = Symbol.for('pino.serializers');
const formattersSym = Symbol.for('pino.formatters');
const hooksSym = Symbol.for('pino.hooks');
const needsMetadataGsym = Symbol.for('pino.metadata');
module.exports = {
    setLevelSym,
    getLevelSym,
    levelValSym,
    levelCompSym,
    useLevelLabelsSym,
    mixinSym,
    lsCacheSym,
    chindingsSym,
    asJsonSym,
    writeSym,
    serializersSym,
    redactFmtSym,
    timeSym,
    timeSliceIndexSym,
    streamSym,
    stringifySym,
    stringifySafeSym,
    stringifiersSym,
    endSym,
    formatOptsSym,
    messageKeySym,
    errorKeySym,
    nestedKeySym,
    wildcardFirstSym,
    needsMetadataGsym,
    useOnlyCustomLevelsSym,
    formattersSym,
    hooksSym,
    nestedKeyStrSym,
    mixinMergeStrategySym,
    msgPrefixSym
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const slowRedact = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/slow-redact/index.js [app-ssr] (ecmascript)");
const { redactFmtSym, wildcardFirstSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
// Custom rx regex equivalent to fast-redact's rx
const rx = /[^.[\]]+|\[([^[\]]*?)\]/g;
const CENSOR = '[Redacted]';
const strict = false // TODO should this be configurable?
;
function redaction(opts, serialize) {
    const { paths, censor, remove } = handle(opts);
    const shape = paths.reduce((o, str)=>{
        rx.lastIndex = 0;
        const first = rx.exec(str);
        const next = rx.exec(str);
        // ns is the top-level path segment, brackets + quoting removed.
        let ns = first[1] !== undefined ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, '$1') : first[0];
        if (ns === '*') {
            ns = wildcardFirstSym;
        }
        // top level key:
        if (next === null) {
            o[ns] = null;
            return o;
        }
        // path with at least two segments:
        // if ns is already redacted at the top level, ignore lower level redactions
        if (o[ns] === null) {
            return o;
        }
        const { index } = next;
        const nextPath = `${str.substr(index, str.length - 1)}`;
        o[ns] = o[ns] || [];
        // shape is a mix of paths beginning with literal values and wildcard
        // paths [ "a.b.c", "*.b.z" ] should reduce to a shape of
        // { "a": [ "b.c", "b.z" ], *: [ "b.z" ] }
        // note: "b.z" is in both "a" and * arrays because "a" matches the wildcard.
        // (* entry has wildcardFirstSym as key)
        if (ns !== wildcardFirstSym && o[ns].length === 0) {
            // first time ns's get all '*' redactions so far
            o[ns].push(...o[wildcardFirstSym] || []);
        }
        if (ns === wildcardFirstSym) {
            // new * path gets added to all previously registered literal ns's.
            Object.keys(o).forEach(function(k) {
                if (o[k]) {
                    o[k].push(nextPath);
                }
            });
        }
        o[ns].push(nextPath);
        return o;
    }, {});
    // the redactor assigned to the format symbol key
    // provides top level redaction for instances where
    // an object is interpolated into the msg string
    const result = {
        [redactFmtSym]: slowRedact({
            paths,
            censor,
            serialize,
            strict,
            remove
        })
    };
    const topCensor = (...args)=>{
        return typeof censor === 'function' ? serialize(censor(...args)) : serialize(censor);
    };
    return [
        ...Object.keys(shape),
        ...Object.getOwnPropertySymbols(shape)
    ].reduce((o, k)=>{
        // top level key:
        if (shape[k] === null) {
            o[k] = (value)=>topCensor(value, [
                    k
                ]);
        } else {
            const wrappedCensor = typeof censor === 'function' ? (value, path)=>{
                return censor(value, [
                    k,
                    ...path
                ]);
            } : censor;
            o[k] = slowRedact({
                paths: shape[k],
                censor: wrappedCensor,
                serialize,
                strict,
                remove
            });
        }
        return o;
    }, result);
}
function handle(opts) {
    if (Array.isArray(opts)) {
        opts = {
            paths: opts,
            censor: CENSOR
        };
        return opts;
    }
    let { paths, censor = CENSOR, remove } = opts;
    if (Array.isArray(paths) === false) {
        throw Error('pino – redact must contain an array of strings');
    }
    if (remove === true) censor = undefined;
    return {
        paths,
        censor,
        remove
    };
}
module.exports = redaction;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/time.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const nullTime = ()=>'';
const epochTime = ()=>`,"time":${Date.now()}`;
const unixTime = ()=>`,"time":${Math.round(Date.now() / 1000.0)}`;
const isoTime = ()=>`,"time":"${new Date(Date.now()).toISOString()}"` // using Date.now() for testability
;
const NS_PER_MS = 1_000_000n;
const NS_PER_SEC = 1_000_000_000n;
const startWallTimeNs = BigInt(Date.now()) * NS_PER_MS;
const startHrTime = process.hrtime.bigint();
const isoTimeNano = ()=>{
    const elapsedNs = process.hrtime.bigint() - startHrTime;
    const currentTimeNs = startWallTimeNs + elapsedNs;
    const secondsSinceEpoch = currentTimeNs / NS_PER_SEC;
    const nanosWithinSecond = currentTimeNs % NS_PER_SEC;
    const msSinceEpoch = Number(secondsSinceEpoch * 1000n + nanosWithinSecond / 1_000_000n);
    const date = new Date(msSinceEpoch);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `,"time":"${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${nanosWithinSecond.toString().padStart(9, '0')}Z"`;
};
module.exports = {
    nullTime,
    epochTime,
    unixTime,
    isoTime,
    isoTimeNano
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const diagChan = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-ssr] (ecmascript)");
const { mapHttpRequest, mapHttpResponse } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const SonicBoom = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)");
const onExit = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)");
const { lsCacheSym, chindingsSym, writeSym, serializersSym, formatOptsSym, endSym, stringifiersSym, stringifySym, stringifySafeSym, wildcardFirstSym, nestedKeySym, formattersSym, messageKeySym, errorKeySym, nestedKeyStrSym, msgPrefixSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { isMainThread } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
const asJsonChan = diagChan.tracingChannel('pino_asJson');
function noop() {}
function genLog(level, hook) {
    if (!hook) return LOG;
    return function hookWrappedLog(...args) {
        hook.call(this, args, LOG, level);
    };
    //TURBOPACK unreachable
    ;
    function LOG(o, ...n) {
        if (typeof o === 'object') {
            let msg = o;
            if (o !== null) {
                if (o.method && o.headers && o.socket) {
                    o = mapHttpRequest(o);
                } else if (typeof o.setHeader === 'function') {
                    o = mapHttpResponse(o);
                }
            }
            let formatParams;
            if (msg === null && n.length === 0) {
                formatParams = [
                    null
                ];
            } else {
                msg = n.shift();
                formatParams = n;
            }
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level);
        } else {
            let msg = o === undefined ? n.shift() : o;
            // We do not use a coercive check for `msg` as it is
            // measurably slower than the explicit checks.
            if (typeof this[msgPrefixSym] === 'string' && msg !== undefined && msg !== null) {
                msg = this[msgPrefixSym] + msg;
            }
            this[writeSym](null, format(msg, n, this[formatOptsSym]), level);
        }
    }
}
// magically escape strings for json
// relying on their charCodeAt
// everything below 32 needs JSON.stringify()
// 34 and 92 happens all the time, so we
// have a fast case for them
function asString(str) {
    let result = '';
    let last = 0;
    let found = false;
    let point = 255;
    const l = str.length;
    if (l > 100) {
        return JSON.stringify(str);
    }
    for(var i = 0; i < l && point >= 32; i++){
        point = str.charCodeAt(i);
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + '\\';
            last = i;
            found = true;
        }
    }
    if (!found) {
        result = str;
    } else {
        result += str.slice(last);
    }
    return point < 32 ? JSON.stringify(str) : '"' + result + '"';
}
/**
 * `asJson` wraps `_asJson` in order to facilitate generating diagnostics.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string}
 */ function asJson(obj, msg, num, time) {
    if (asJsonChan.hasSubscribers === false) {
        return _asJson.call(this, obj, msg, num, time);
    }
    const store = {
        instance: this,
        arguments
    };
    return asJsonChan.traceSync(_asJson, store, this, obj, msg, num, time);
}
/**
 * `_asJson` parses all collected data and generates the finalized newline
 * delimited JSON string.
 *
 * @param {object} obj The merging object passed to the log method.
 * @param {string} msg The log message passed to the log method.
 * @param {number} num The log level number.
 * @param {number} time The log time in milliseconds.
 *
 * @returns {string} The finalized log string terminated with a newline.
 * @private
 */ function _asJson(obj, msg, num, time) {
    const stringify = this[stringifySym];
    const stringifySafe = this[stringifySafeSym];
    const stringifiers = this[stringifiersSym];
    const end = this[endSym];
    const chindings = this[chindingsSym];
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const messageKey = this[messageKeySym];
    const errorKey = this[errorKeySym];
    let data = this[lsCacheSym][num] + time;
    // we need the child bindings added to the output first so instance logged
    // objects can take precedence when JSON.parse-ing the resulting log line
    data = data + chindings;
    let value;
    if (formatters.log) {
        obj = formatters.log(obj);
    }
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    let propStr = '';
    for(const key in obj){
        value = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && value !== undefined) {
            if (serializers[key]) {
                value = serializers[key](value);
            } else if (key === errorKey && serializers.err) {
                value = serializers.err(value);
            }
            const stringifier = stringifiers[key] || wildcardStringifier;
            switch(typeof value){
                case 'undefined':
                case 'function':
                    continue;
                case 'number':
                    /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                        value = null;
                    }
                // this case explicitly falls through to the next one
                case 'boolean':
                    if (stringifier) value = stringifier(value);
                    break;
                case 'string':
                    value = (stringifier || asString)(value);
                    break;
                default:
                    value = (stringifier || stringify)(value, stringifySafe);
            }
            if (value === undefined) continue;
            const strKey = asString(key);
            propStr += ',' + strKey + ':' + value;
        }
    }
    let msgStr = '';
    if (msg !== undefined) {
        value = serializers[messageKey] ? serializers[messageKey](msg) : msg;
        const stringifier = stringifiers[messageKey] || wildcardStringifier;
        switch(typeof value){
            case 'function':
                break;
            case 'number':
                /* eslint no-fallthrough: "off" */ if (Number.isFinite(value) === false) {
                    value = null;
                }
            // this case explicitly falls through to the next one
            case 'boolean':
                if (stringifier) value = stringifier(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            case 'string':
                value = (stringifier || asString)(value);
                msgStr = ',"' + messageKey + '":' + value;
                break;
            default:
                value = (stringifier || stringify)(value, stringifySafe);
                msgStr = ',"' + messageKey + '":' + value;
        }
    }
    if (this[nestedKeySym] && propStr) {
        // place all the obj properties under the specified key
        // the nested key is already formatted from the constructor
        return data + this[nestedKeyStrSym] + propStr.slice(1) + '}' + msgStr + end;
    } else {
        return data + propStr + msgStr + end;
    }
}
function asChindings(instance, bindings) {
    let value;
    let data = instance[chindingsSym];
    const stringify = instance[stringifySym];
    const stringifySafe = instance[stringifySafeSym];
    const stringifiers = instance[stringifiersSym];
    const wildcardStringifier = stringifiers[wildcardFirstSym];
    const serializers = instance[serializersSym];
    const formatter = instance[formattersSym].bindings;
    bindings = formatter(bindings);
    for(const key in bindings){
        value = bindings[key];
        const valid = (key.length < 5 || key !== 'level' && key !== 'serializers' && key !== 'formatters' && key !== 'customLevels') && bindings.hasOwnProperty(key) && value !== undefined;
        if (valid === true) {
            value = serializers[key] ? serializers[key](value) : value;
            value = (stringifiers[key] || wildcardStringifier || stringify)(value, stringifySafe);
            if (value === undefined) continue;
            data += ',"' + key + '":' + value;
        }
    }
    return data;
}
function hasBeenTampered(stream) {
    return stream.write !== stream.constructor.prototype.write;
}
function buildSafeSonicBoom(opts) {
    const stream = new SonicBoom(opts);
    stream.on('error', filterBrokenPipe);
    // If we are sync: false, we must flush on exit
    if (!opts.sync && isMainThread) {
        onExit.register(stream, autoEnd);
        stream.on('close', function() {
            onExit.unregister(stream);
        });
    }
    return stream;
    //TURBOPACK unreachable
    ;
    function filterBrokenPipe(err) {
        // Impossible to replicate across all operating systems
        /* istanbul ignore next */ if (err.code === 'EPIPE') {
            // If we get EPIPE, we should stop logging here
            // however we have no control to the consumer of
            // SonicBoom, so we just overwrite the write method
            stream.write = noop;
            stream.end = noop;
            stream.flushSync = noop;
            stream.destroy = noop;
            return;
        }
        stream.removeListener('error', filterBrokenPipe);
        stream.emit('error', err);
    }
}
function autoEnd(stream, eventName) {
    // This check is needed only on some platforms
    /* istanbul ignore next */ if (stream.destroyed) {
        return;
    }
    if (eventName === 'beforeExit') {
        // We still have an event loop, let's use it
        stream.flush();
        stream.on('drain', function() {
            stream.end();
        });
    } else {
        // For some reason istanbul is not detecting this, but it's there
        /* istanbul ignore next */ // We do not have an event loop, so flush synchronously
        stream.flushSync();
    }
}
function createArgsNormalizer(defaultOptions) {
    return function normalizeArgs(instance, caller, opts = {}, stream) {
        // support stream as a string
        if (typeof opts === 'string') {
            stream = buildSafeSonicBoom({
                dest: opts
            });
            opts = {};
        } else if (typeof stream === 'string') {
            if (opts && opts.transport) {
                throw Error('only one of option.transport or stream can be specified');
            }
            stream = buildSafeSonicBoom({
                dest: stream
            });
        } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
            stream = opts;
            opts = {};
        } else if (opts.transport) {
            if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
                throw Error('option.transport do not allow stream, please pass to option directly. e.g. pino(transport)');
            }
            if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === 'function') {
                throw Error('option.transport.targets do not allow custom level formatters');
            }
            let customLevels;
            if (opts.customLevels) {
                customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels);
            }
            stream = transport({
                caller,
                ...opts.transport,
                levels: customLevels
            });
        }
        opts = Object.assign({}, defaultOptions, opts);
        opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
        opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
        if (opts.prettyPrint) {
            throw new Error('prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)');
        }
        const { enabled, onChild } = opts;
        if (enabled === false) opts.level = 'silent';
        if (!onChild) opts.onChild = noop;
        if (!stream) {
            if (!hasBeenTampered(process.stdout)) {
                // If process.stdout.fd is undefined, it means that we are running
                // in a worker thread. Let's assume we are logging to file descriptor 1.
                stream = buildSafeSonicBoom({
                    fd: process.stdout.fd || 1
                });
            } else {
                stream = process.stdout;
            }
        }
        return {
            opts,
            stream
        };
    };
}
function stringify(obj, stringifySafeFn) {
    try {
        return JSON.stringify(obj);
    } catch (_) {
        try {
            const stringify = stringifySafeFn || this[stringifySafeSym];
            return stringify(obj);
        } catch (_) {
            return '"[unable to serialize, circular reference is too complex to analyze]"';
        }
    }
}
function buildFormatters(level, bindings, log) {
    return {
        level,
        bindings,
        log
    };
}
/**
 * Convert a string integer file descriptor to a proper native integer
 * file descriptor.
 *
 * @param {string} destination The file descriptor string to attempt to convert.
 *
 * @returns {Number}
 */ function normalizeDestFileDescriptor(destination) {
    const fd = Number(destination);
    if (typeof destination === 'string' && Number.isFinite(fd)) {
        return fd;
    }
    // destination could be undefined if we are in a worker
    if (destination === undefined) {
        // This is stdout in UNIX systems
        return 1;
    }
    return destination;
}
module.exports = {
    noop,
    buildSafeSonicBoom,
    asChindings,
    asJson,
    genLog,
    createArgsNormalizer,
    stringify,
    buildFormatters,
    normalizeDestFileDescriptor
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { lsCacheSym, levelValSym, useOnlyCustomLevelsSym, streamSym, formattersSym, hooksSym, levelCompSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { noop, genLog } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const levelMethods = {
    fatal: (hook)=>{
        const logFatal = genLog(DEFAULT_LEVELS.fatal, hook);
        return function(...args) {
            const stream = this[streamSym];
            logFatal.call(this, ...args);
            if (typeof stream.flushSync === 'function') {
                try {
                    stream.flushSync();
                } catch (e) {
                // https://github.com/pinojs/pino/pull/740#discussion_r346788313
                }
            }
        };
    },
    error: (hook)=>genLog(DEFAULT_LEVELS.error, hook),
    warn: (hook)=>genLog(DEFAULT_LEVELS.warn, hook),
    info: (hook)=>genLog(DEFAULT_LEVELS.info, hook),
    debug: (hook)=>genLog(DEFAULT_LEVELS.debug, hook),
    trace: (hook)=>genLog(DEFAULT_LEVELS.trace, hook)
};
const nums = Object.keys(DEFAULT_LEVELS).reduce((o, k)=>{
    o[DEFAULT_LEVELS[k]] = k;
    return o;
}, {});
const initialLsCache = Object.keys(nums).reduce((o, k)=>{
    o[k] = '{"level":' + Number(k);
    return o;
}, {});
function genLsCache(instance) {
    const formatter = instance[formattersSym].level;
    const { labels } = instance.levels;
    const cache = {};
    for(const label in labels){
        const level = formatter(labels[label], Number(label));
        cache[label] = JSON.stringify(level).slice(0, -1);
    }
    instance[lsCacheSym] = cache;
    return instance;
}
function isStandardLevel(level, useOnlyCustomLevels) {
    if (useOnlyCustomLevels) {
        return false;
    }
    switch(level){
        case 'fatal':
        case 'error':
        case 'warn':
        case 'info':
        case 'debug':
        case 'trace':
            return true;
        default:
            return false;
    }
}
function setLevel(level) {
    const { labels, values } = this.levels;
    if (typeof level === 'number') {
        if (labels[level] === undefined) throw Error('unknown level value' + level);
        level = labels[level];
    }
    if (values[level] === undefined) throw Error('unknown level ' + level);
    const preLevelVal = this[levelValSym];
    const levelVal = this[levelValSym] = values[level];
    const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
    const levelComparison = this[levelCompSym];
    const hook = this[hooksSym].logMethod;
    for(const key in values){
        if (levelComparison(values[key], levelVal) === false) {
            this[key] = noop;
            continue;
        }
        this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
    }
    this.emit('level-change', level, levelVal, labels[preLevelVal], preLevelVal, this);
}
function getLevel(level) {
    const { levels, levelVal } = this;
    // protection against potential loss of Pino scope from serializers (edge case with circular refs - https://github.com/pinojs/pino/issues/833)
    return levels && levels.labels ? levels.labels[levelVal] : '';
}
function isLevelEnabled(logLevel) {
    const { values } = this.levels;
    const logLevelVal = values[logLevel];
    return logLevelVal !== undefined && this[levelCompSym](logLevelVal, this[levelValSym]);
}
/**
 * Determine if the given `current` level is enabled by comparing it
 * against the current threshold (`expected`).
 *
 * @param {SORTING_ORDER} direction comparison direction "ASC" or "DESC"
 * @param {number} current current log level number representation
 * @param {number} expected threshold value to compare with
 * @returns {boolean}
 */ function compareLevel(direction, current, expected) {
    if (direction === SORTING_ORDER.DESC) {
        return current <= expected;
    }
    return current >= expected;
}
/**
 * Create a level comparison function based on `levelComparison`
 * it could a default function which compares levels either in "ascending" or "descending" order or custom comparison function
 *
 * @param {SORTING_ORDER | Function} levelComparison sort levels order direction or custom comparison function
 * @returns Function
 */ function genLevelComparison(levelComparison) {
    if (typeof levelComparison === 'string') {
        return compareLevel.bind(null, levelComparison);
    }
    return levelComparison;
}
function mappings(customLevels = null, useOnlyCustomLevels = false) {
    const customNums = customLevels ? Object.keys(customLevels).reduce((o, k)=>{
        o[customLevels[k]] = k;
        return o;
    }, {}) : null;
    /* eslint-enable */ const labels = Object.assign(Object.create(Object.prototype, {
        Infinity: {
            value: 'silent'
        }
    }), useOnlyCustomLevels ? null : nums, customNums);
    const values = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    return {
        labels,
        values
    };
}
function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
    if (typeof defaultLevel === 'number') {
        const values = [].concat(Object.keys(customLevels || {}).map((key)=>customLevels[key]), useOnlyCustomLevels ? [] : Object.keys(nums).map((level)=>+level), Infinity);
        if (!values.includes(defaultLevel)) {
            throw Error(`default level:${defaultLevel} must be included in custom levels`);
        }
        return;
    }
    const labels = Object.assign(Object.create(Object.prototype, {
        silent: {
            value: Infinity
        }
    }), useOnlyCustomLevels ? null : DEFAULT_LEVELS, customLevels);
    if (!(defaultLevel in labels)) {
        throw Error(`default level:${defaultLevel} must be included in custom levels`);
    }
}
function assertNoLevelCollisions(levels, customLevels) {
    const { labels, values } = levels;
    for(const k in customLevels){
        if (k in values) {
            throw Error('levels cannot be overridden');
        }
        if (customLevels[k] in labels) {
            throw Error('pre-existing level values cannot be used for new levels');
        }
    }
}
/**
 * Validates whether `levelComparison` is correct
 *
 * @throws Error
 * @param {SORTING_ORDER | Function} levelComparison - value to validate
 * @returns
 */ function assertLevelComparison(levelComparison) {
    if (typeof levelComparison === 'function') {
        return;
    }
    if (typeof levelComparison === 'string' && Object.values(SORTING_ORDER).includes(levelComparison)) {
        return;
    }
    throw new Error('Levels comparison should be one of "ASC", "DESC" or "function" type');
}
module.exports = {
    initialLsCache,
    genLsCache,
    levelMethods,
    getLevel,
    setLevel,
    isLevelEnabled,
    mappings,
    assertNoLevelCollisions,
    assertDefaultLevelFound,
    genLevelComparison,
    assertLevelComparison
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    version: '10.0.0'
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-prototype-builtins: 0 */ const { EventEmitter } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { lsCacheSym, levelValSym, setLevelSym, getLevelSym, chindingsSym, parsedChindingsSym, mixinSym, asJsonSym, writeSym, mixinMergeStrategySym, timeSym, timeSliceIndexSym, streamSym, serializersSym, formattersSym, errorKeySym, messageKeySym, useOnlyCustomLevelsSym, needsMetadataGsym, redactFmtSym, stringifySym, formatOptsSym, stringifiersSym, msgPrefixSym, hooksSym } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { getLevel, setLevel, isLevelEnabled, mappings, initialLsCache, genLsCache, assertNoLevelCollisions } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { asChindings, asJson, buildFormatters, stringify, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
// note: use of class is satirical
// https://github.com/pinojs/pino/pull/433#pullrequestreview-127703127
const constructor = class Pino {
};
const prototype = {
    constructor,
    child,
    bindings,
    setBindings,
    flush,
    isLevelEnabled,
    version,
    get level () {
        return this[getLevelSym]();
    },
    set level (lvl){
        this[setLevelSym](lvl);
    },
    get levelVal () {
        return this[levelValSym];
    },
    set levelVal (n){
        throw Error('levelVal is read-only');
    },
    get msgPrefix () {
        return this[msgPrefixSym];
    },
    get [Symbol.toStringTag] () {
        return 'Pino';
    },
    [lsCacheSym]: initialLsCache,
    [writeSym]: write,
    [asJsonSym]: asJson,
    [getLevelSym]: getLevel,
    [setLevelSym]: setLevel
};
Object.setPrototypeOf(prototype, EventEmitter.prototype);
// exporting and consuming the prototype object using factory pattern fixes scoping issues with getters when serializing
module.exports = function() {
    return Object.create(prototype);
};
const resetChildingsFormatter = (bindings)=>bindings;
function child(bindings, options) {
    if (!bindings) {
        throw Error('missing bindings for child Pino');
    }
    const serializers = this[serializersSym];
    const formatters = this[formattersSym];
    const instance = Object.create(this);
    // If an `options` object was not supplied, we can improve
    // the performance of child creation by skipping
    // the checks for set options and simply return
    // a baseline instance.
    if (options == null) {
        if (instance[formattersSym].bindings !== resetChildingsFormatter) {
            instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
        }
        instance[chindingsSym] = asChindings(instance, bindings);
        if (this.onChild !== noop) {
            this.onChild(instance);
        }
        return instance;
    }
    if (options.hasOwnProperty('serializers') === true) {
        instance[serializersSym] = Object.create(null);
        for(const k in serializers){
            instance[serializersSym][k] = serializers[k];
        }
        const parentSymbols = Object.getOwnPropertySymbols(serializers);
        /* eslint no-var: off */ for(var i = 0; i < parentSymbols.length; i++){
            const ks = parentSymbols[i];
            instance[serializersSym][ks] = serializers[ks];
        }
        for(const bk in options.serializers){
            instance[serializersSym][bk] = options.serializers[bk];
        }
        const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
        for(var bi = 0; bi < bindingsSymbols.length; bi++){
            const bks = bindingsSymbols[bi];
            instance[serializersSym][bks] = options.serializers[bks];
        }
    } else instance[serializersSym] = serializers;
    if (options.hasOwnProperty('formatters')) {
        const { level, bindings: chindings, log } = options.formatters;
        instance[formattersSym] = buildFormatters(level || formatters.level, chindings || resetChildingsFormatter, log || formatters.log);
    } else {
        instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
    }
    if (options.hasOwnProperty('customLevels') === true) {
        assertNoLevelCollisions(this.levels, options.customLevels);
        instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
        genLsCache(instance);
    }
    // redact must place before asChindings and only replace if exist
    if (typeof options.redact === 'object' && options.redact !== null || Array.isArray(options.redact)) {
        instance.redact = options.redact; // replace redact directly
        const stringifiers = redaction(instance.redact, stringify);
        const formatOpts = {
            stringify: stringifiers[redactFmtSym]
        };
        instance[stringifySym] = stringify;
        instance[stringifiersSym] = stringifiers;
        instance[formatOptsSym] = formatOpts;
    }
    if (typeof options.msgPrefix === 'string') {
        instance[msgPrefixSym] = (this[msgPrefixSym] || '') + options.msgPrefix;
    }
    instance[chindingsSym] = asChindings(instance, bindings);
    if (options.level !== undefined && options.level !== this.level || options.hasOwnProperty('customLevels')) {
        const childLevel = options.level || this.level;
        instance[setLevelSym](childLevel);
    }
    this.onChild(instance);
    return instance;
}
function bindings() {
    const chindings = this[chindingsSym];
    const chindingsJson = `{${chindings.substr(1)}}` // at least contains ,"pid":7068,"hostname":"myMac"
    ;
    const bindingsFromJson = JSON.parse(chindingsJson);
    delete bindingsFromJson.pid;
    delete bindingsFromJson.hostname;
    return bindingsFromJson;
}
function setBindings(newBindings) {
    const chindings = asChindings(this, newBindings);
    this[chindingsSym] = chindings;
    delete this[parsedChindingsSym];
}
/**
 * Default strategy for creating `mergeObject` from arguments and the result from `mixin()`.
 * Fields from `mergeObject` have higher priority in this strategy.
 *
 * @param {Object} mergeObject The object a user has supplied to the logging function.
 * @param {Object} mixinObject The result of the `mixin` method.
 * @return {Object}
 */ function defaultMixinMergeStrategy(mergeObject, mixinObject) {
    return Object.assign(mixinObject, mergeObject);
}
function write(_obj, msg, num) {
    const t = this[timeSym]();
    const mixin = this[mixinSym];
    const errorKey = this[errorKeySym];
    const messageKey = this[messageKeySym];
    const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy;
    let obj;
    const streamWriteHook = this[hooksSym].streamWrite;
    if (_obj === undefined || _obj === null) {
        obj = {};
    } else if (_obj instanceof Error) {
        obj = {
            [errorKey]: _obj
        };
        if (msg === undefined) {
            msg = _obj.message;
        }
    } else {
        obj = _obj;
        if (msg === undefined && _obj[messageKey] === undefined && _obj[errorKey]) {
            msg = _obj[errorKey].message;
        }
    }
    if (mixin) {
        obj = mixinMergeStrategy(obj, mixin(obj, num, this));
    }
    const s = this[asJsonSym](obj, msg, num, t);
    const stream = this[streamSym];
    if (stream[needsMetadataGsym] === true) {
        stream.lastLevel = num;
        stream.lastObj = obj;
        stream.lastMsg = msg;
        stream.lastTime = t.slice(this[timeSliceIndexSym]);
        stream.lastLogger = this; // for child loggers
    }
    stream.write(streamWriteHook ? streamWriteHook(s) : s);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw Error('callback must be a function');
    }
    const stream = this[streamSym];
    if (typeof stream.flush === 'function') {
        stream.flush(cb || noop);
    } else if (cb) cb();
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/pino.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/node:os [external] (node:os, cjs)");
const stdSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)");
const caller = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/caller.js [app-ssr] (ecmascript)");
const redaction = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/redaction.js [app-ssr] (ecmascript)");
const time = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/time.js [app-ssr] (ecmascript)");
const proto = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/proto.js [app-ssr] (ecmascript)");
const symbols = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/symbols.js [app-ssr] (ecmascript)");
const { configure } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/safe-stable-stringify/index.js [app-ssr] (ecmascript)");
const { assertDefaultLevelFound, mappings, genLsCache, genLevelComparison, assertLevelComparison } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/levels.js [app-ssr] (ecmascript)");
const { DEFAULT_LEVELS, SORTING_ORDER } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/constants.js [app-ssr] (ecmascript)");
const { createArgsNormalizer, asChindings, buildSafeSonicBoom, buildFormatters, stringify, normalizeDestFileDescriptor, noop } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/tools.js [app-ssr] (ecmascript)");
const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/meta.js [app-ssr] (ecmascript)");
const { chindingsSym, redactFmtSym, serializersSym, timeSym, timeSliceIndexSym, streamSym, stringifySym, stringifySafeSym, stringifiersSym, setLevelSym, endSym, formatOptsSym, messageKeySym, errorKeySym, nestedKeySym, mixinSym, levelCompSym, useOnlyCustomLevelsSym, formattersSym, hooksSym, nestedKeyStrSym, mixinMergeStrategySym, msgPrefixSym } = symbols;
const { epochTime, nullTime } = time;
const { pid } = process;
const hostname = os.hostname();
const defaultErrorSerializer = stdSerializers.err;
const defaultOptions = {
    level: 'info',
    levelComparison: SORTING_ORDER.ASC,
    levels: DEFAULT_LEVELS,
    messageKey: 'msg',
    errorKey: 'err',
    nestedKey: null,
    enabled: true,
    base: {
        pid,
        hostname
    },
    serializers: Object.assign(Object.create(null), {
        err: defaultErrorSerializer
    }),
    formatters: Object.assign(Object.create(null), {
        bindings (bindings) {
            return bindings;
        },
        level (label, number) {
            return {
                level: number
            };
        }
    }),
    hooks: {
        logMethod: undefined,
        streamWrite: undefined
    },
    timestamp: epochTime,
    name: undefined,
    redact: null,
    customLevels: null,
    useOnlyCustomLevels: false,
    depthLimit: 5,
    edgeLimit: 100
};
const normalize = createArgsNormalizer(defaultOptions);
const serializers = Object.assign(Object.create(null), stdSerializers);
function pino(...args) {
    const instance = {};
    const { opts, stream } = normalize(instance, caller(), ...args);
    if (opts.level && typeof opts.level === 'string' && DEFAULT_LEVELS[opts.level.toLowerCase()] !== undefined) opts.level = opts.level.toLowerCase();
    const { redact, crlf, serializers, timestamp, messageKey, errorKey, nestedKey, base, name, level, customLevels, levelComparison, mixin, mixinMergeStrategy, useOnlyCustomLevels, formatters, hooks, depthLimit, edgeLimit, onChild, msgPrefix } = opts;
    const stringifySafe = configure({
        maximumDepth: depthLimit,
        maximumBreadth: edgeLimit
    });
    const allFormatters = buildFormatters(formatters.level, formatters.bindings, formatters.log);
    const stringifyFn = stringify.bind({
        [stringifySafeSym]: stringifySafe
    });
    const stringifiers = redact ? redaction(redact, stringifyFn) : {};
    const formatOpts = redact ? {
        stringify: stringifiers[redactFmtSym]
    } : {
        stringify: stringifyFn
    };
    const end = '}' + (crlf ? '\r\n' : '\n');
    const coreChindings = asChindings.bind(null, {
        [chindingsSym]: '',
        [serializersSym]: serializers,
        [stringifiersSym]: stringifiers,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [formattersSym]: allFormatters
    });
    let chindings = '';
    if (base !== null) {
        if (name === undefined) {
            chindings = coreChindings(base);
        } else {
            chindings = coreChindings(Object.assign({}, base, {
                name
            }));
        }
    }
    const time = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
    const timeSliceIndex = time().indexOf(':') + 1;
    if (useOnlyCustomLevels && !customLevels) throw Error('customLevels is required if useOnlyCustomLevels is set true');
    if (mixin && typeof mixin !== 'function') throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
    if (msgPrefix && typeof msgPrefix !== 'string') throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`);
    assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels);
    const levels = mappings(customLevels, useOnlyCustomLevels);
    if (typeof stream.emit === 'function') {
        stream.emit('message', {
            code: 'PINO_CONFIG',
            config: {
                levels,
                messageKey,
                errorKey
            }
        });
    }
    assertLevelComparison(levelComparison);
    const levelCompFunc = genLevelComparison(levelComparison);
    Object.assign(instance, {
        levels,
        [levelCompSym]: levelCompFunc,
        [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
        [streamSym]: stream,
        [timeSym]: time,
        [timeSliceIndexSym]: timeSliceIndex,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [stringifiersSym]: stringifiers,
        [endSym]: end,
        [formatOptsSym]: formatOpts,
        [messageKeySym]: messageKey,
        [errorKeySym]: errorKey,
        [nestedKeySym]: nestedKey,
        // protect against injection
        [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : '',
        [serializersSym]: serializers,
        [mixinSym]: mixin,
        [mixinMergeStrategySym]: mixinMergeStrategy,
        [chindingsSym]: chindings,
        [formattersSym]: allFormatters,
        [hooksSym]: hooks,
        silent: noop,
        onChild,
        [msgPrefixSym]: msgPrefix
    });
    Object.setPrototypeOf(instance, proto());
    genLsCache(instance);
    instance[setLevelSym](level);
    return instance;
}
module.exports = pino;
module.exports.destination = (dest = process.stdout.fd)=>{
    if (typeof dest === 'object') {
        dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
        return buildSafeSonicBoom(dest);
    } else {
        return buildSafeSonicBoom({
            dest: normalizeDestFileDescriptor(dest),
            minLength: 0
        });
    }
};
module.exports.transport = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/transport.js [app-ssr] (ecmascript)");
module.exports.multistream = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/lib/multistream.js [app-ssr] (ecmascript)");
module.exports.levels = mappings();
module.exports.stdSerializers = serializers;
module.exports.stdTimeFunctions = Object.assign({}, time);
module.exports.symbols = symbols;
module.exports.version = version;
// Enables default and name export with TypeScript and Babel
module.exports.default = pino;
module.exports.pino = pino;
}),
];

//# sourceMappingURL=89298_%40reown_3c8977f8._.js.map