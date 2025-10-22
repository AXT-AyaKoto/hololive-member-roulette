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
 * @type {Array<{name: string, color: string, group: Group, status: TalentsStatus}>}
 */
const talents = [
    {
        "name": "ときのそら",
        "color": "#245eff",
        "group": "JP",
        "status": "active",
    },
    {
        "name": "ロボ子さん",
        "color": "#a36694",
        "group": "JP",
        "status": "active",
    },
];

export { talents };
