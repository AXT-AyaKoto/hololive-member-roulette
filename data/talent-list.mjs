//@ts-check

/**
 * @typedef {string} LangTag - TODO: あとでUnion型にしてください
 */
/**
 * @typedef {"JP"|"EN"|"ID"|"DEV_IS"} Group - 便宜上JPを使います 許して
 */
/**
 * @typedef {"active"|"graduated"|"concluded"|"terminated"} TalentsStatus - graduated: 卒業 concluded: 活動終了 terminated: 契約終了
 */

/**
 * @type {Array<{name: Object<LangTag, string>, color: string, group: Group, status: TalentsStatus}>}
 */
const talents = [
    {
        "name": {
            "ja_JP": "ときのそら",
            "en_US": "Tokino Sora",
        },
        "color": "#245eff",
        "group": "JP",
        "status": "active",
    },
    {
        "name": {
            "ja_JP": "ロボ子さん",
            "en_US": "Robocosan",
        },
        "color": "#a36694",
        "group": "JP",
        "status": "active",
    },
];

export { talents };
