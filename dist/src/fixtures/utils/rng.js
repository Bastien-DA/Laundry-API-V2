"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mulberry32 = mulberry32;
exports.pick = pick;
function mulberry32(seed) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
}
//# sourceMappingURL=rng.js.map