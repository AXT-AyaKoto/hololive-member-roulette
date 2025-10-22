/**
 * @typedef {string} LangTag - TODO: あとでUnion型にしてください
 */

/**
 * @type {Array<{name: Object<LangTag, string>, color: string, tag: string[]}>}
 */
const talents = [
    {
        "name": {
            "ja_JP": "ときのそら",
            "en_US": "Tokino Sora",
        },
        "color": "#245eff",
        "tag": [
            "ホロライブ",
            "ホロライブ > 0期生",
        ]
    },
    {
        "name": {
            "ja_JP": "ロボ子さん",
            "en_US": "Robocosan",
        },
        "color": "#a36694",
        "tag": [
            "ホロライブ",
            "ホロライブ > 0期生",
        ]
    },
];

export { talents };
