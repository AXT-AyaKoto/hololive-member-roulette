//@ts-check
/**
 * @typedef {"JP"|"EN"|"ID"|"DEV_IS"} Group - 便宜上JPを使います 許して
 */
/**
 * @typedef {"active"|"graduated"|"concluded"|"terminated"} TalentsStatus - graduated: 卒業 concluded: 活動終了 terminated: 契約終了など(現在COVERのタレント一覧ページに表記されていない、過去活動していたタレント)
 */
/**
 * @typedef {Object} Talent - タレント情報
 * @property {string} name - タレント名
 * @property {string} color - タレントカラー (16進数カラーコード)
 * @property {Group} group - 所属グループ
 * @property {TalentsStatus} status - タレントの活動状況
 * @property {string} icon_filename - タレントのアイコン画像ファイル名
 */

/**
 * @type {Array<Talent>}
 */
const talents = [
    {
        "name": "ときのそら",
        "color": "#245eff",
        "group": "JP",
        "status": "active",
        "icon_filename": "tokino_sora.png",
    },
    {
        "name": "ロボ子さん",
        "color": "#a36694",
        "group": "JP",
        "status": "active",
        "icon_filename": "robocosan.png",
    },
    {
        "name": "さくらみこ",
        "color": "#ff9cb4",
        "group": "EN",
        "status": "active",
        "icon_filename": "sakura_miko.png",
    },
    {
        "name": "星街すいせい",
        "color": "#50e5f9",
        "group": "JP",
        "status": "active",
        "icon_filename": "hoshimachi_suisei.png",
    },
    {
        "name": "AZKi",
        "color": "#f4348b",
        "group": "JP",
        "status": "active",
        "icon_filename": "azki.png",
    },
    {
        "name": "白上フブキ",
        "color": "#76dfff",
        "group": "JP",
        "status": "active",
        "icon_filename": "shirakami_fubuki.png",
    },
    {
        "name": "夏色まつり",
        "color": "#ffa227",
        "group": "JP",
        "status": "active",
        "icon_filename": "natsuiro_matsuri.png",
    },
    {
        "name": "アキ・ローゼンタール",
        "color": "#ff1c9a",
        "group": "JP",
        "status": "active",
        "icon_filename": "aki_rosenthal.png",
    },
    {
        "name": "赤井はあと",
        "color": "#fc123f",
        "group": "JP",
        "status": "active",
        "icon_filename": "akai_haato.png",
    },
    {
        "name": "夜空メル",
        "color": "#ffdd17",
        "group": "JP",
        "status": "terminated",
        "icon_filename": "yozora_mel.png",
    },
    {
        "name": "大空スバル",
        "color": "#e0ff2c",
        "group": "JP",
        "status": "active",
        "icon_filename": "ozora_subaru.png",
    },
    {
        "name": "癒月ちょこ",
        "color": "#ff6e9b",
        "group": "JP",
        "status": "active",
        "icon_filename": "yuzuki_choco.png",
    },
    {
        "name": "百鬼あやめ",
        "color": "#ed3a4f",
        "group": "JP",
        "status": "active",
        "icon_filename": "nakiri_ayame.png",
    },
    {
        "name": "紫咲シオン",
        "color": "#ad6ce0",
        "group": "JP",
        "status": "graduated",
        "icon_filename": "murasaki_shion.png",
    },
    {
        "name": "湊あくあ",
        "color": "#ffa6ea",
        "group": "JP",
        "status": "graduated",
        "icon_filename": "minato_aqua.png",
    },
    {
        "name": "大神ミオ",
        "color": "#ff314a",
        "group": "JP",
        "status": "active",
        "icon_filename": "ookami_mio.png",
    },
    {
        "name": "猫又おかゆ",
        "color": "#e27dfd",
        "group": "JP",
        "status": "active",
        "icon_filename": "nekomata_okayu.png",
    },
    {
        "name": "戌神ころね",
        "color": "#ffcc29",
        "group": "JP",
        "status": "active",
        "icon_filename": "inugami_korone.png",
    },
    {
        "name": "兎田ぺこら",
        "color": "#88d2ff",
        "group": "JP",
        "status": "active",
        "icon_filename": "usada_pekora.png",
    },
    {
        "name": "白銀ノエル",
        "color": "#89939d",
        "group": "JP",
        "status": "active",
        "icon_filename": "shirogane_noel.png",
    },
    {
        "name": "不知火フレア",
        "color": "#ff5028",
        "group": "JP",
        "status": "active",
        "icon_filename": "shiranui_flare.png",
    },
    {
        "name": "宝鐘マリン",
        "color": "#ca3c28",
        "group": "JP",
        "status": "active",
        "icon_filename": "houshou_marin.png",
    },
    {
        "name": "潤羽るしあ",
        "color": "#30f9d2",
        "group": "JP",
        "status": "terminated",
        "icon_filename": "uruha_rushia.png",
    },
    {
        "name": "天音かなた",
        "color": "#99d8ff",
        "group": "JP",
        "status": "active",
        "icon_filename": "amane_kanata.png",
    },
    {
        "name": "常闇トワ",
        "color": "#cabaff",
        "group": "JP",
        "status": "active",
        "icon_filename": "tokoyami_towa.png",
    },
    {
        "name": "姫森ルーナ",
        "color": "#fe84c2",
        "group": "JP",
        "status": "active",
        "icon_filename": "himekawa_luna.png",
    },
    {
        "name": "角巻わため",
        "color": "#fff29e",
        "group": "JP",
        "status": "active",
        "icon_filename": "tsunomaki_watame.png",
    },
    {
        "name": "桐生ココ",
        "color": "#fe8b04",
        "group": "JP",
        "status": "graduated",
        "icon_filename": "kiryu_coco.png",
    },
    {
        "name": "桃鈴ねね",
        "color": "#fe7a0f",
        "group": "JP",
        "status": "active",
        "icon_filename": "momosuzu_nene.png",
    },
    {
        "name": "尾丸ポルカ",
        "color": "#cf2830",
        "group": "JP",
        "status": "active",
        "icon_filename": "omaru_polka.png",
    },
    {
        "name": "雪花ラミィ",
        "color": "#6bcdf8",
        "group": "JP",
        "status": "active",
        "icon_filename": "yukihana_lamy.png",
    },
    {
        "name": "獅白ぼたん",
        "color": "#a3e5cf",
        "group": "JP",
        "status": "active",
        "icon_filename": "shishiro_botan.png",
    },
    {
        "name": "魔乃アロエ",
        "color": "#f78ac4",
        "group": "JP",
        "status": "terminated",
        "icon_filename": "mano_aloe.png",
    },
    {
        "name": "ラプラス・ダークネス",
        "color": "#936cc6",
        "group": "JP",
        "status": "active",
        "icon_filename": "laplus_darknesss.png",
    },
    {
        "name": "鷹嶺ルイ",
        "color": "#831550",
        "group": "JP",
        "status": "active",
        "icon_filename": "takane_lui.png",
    },
    {
        "name": "博衣こより",
        "color": "#ffacd3",
        "group": "JP",
        "status": "active",
        "icon_filename": "hakui_koyori.png",
    },
    {
        "name": "風真いろは",
        "color": "#93dcd8",
        "group": "JP",
        "status": "active",
        "icon_filename": "kazama_iroha.png",
    },
    {
        "name": "沙花叉クロヱ",
        "color": "#cf4c4a",
        "group": "JP",
        "status": "concluded",
        "icon_filename": "sakamata_chloe.png",
    },
    {
        "name": "火威青",
        "color": "#1d3467",
        "group": "DEV_IS",
        "status": "graduated",
        "icon_filename": "hiodoshi_ao.png"
    },
    {
        "name": "一条莉々華",
        "color": "#f47da9",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "ichijo_ririka.png"
    },
    {
        "name": "音乃瀬奏",
        "color": "#ffe7b5",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "otonose_kanade.png"
    },
    {
        "name": "儒烏風亭らでん",
        "color": "#3c7c71",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "juufuutei_raden.png"
    },
    {
        "name": "轟はじめ",
        "color": "#b6b9ff",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "todoroki_hajime.png"
    },
    {
        "name": "響咲リオナ",
        "color": "#fe3480",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "isaki_riona.png"
    },
    {
        "name": "虎金妃笑虎",
        "color": "#f58017",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "koganei_niko.png"
    },
    {
        "name": "輪堂千速",
        "color": "#71e5ff",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "rindo_chihaya.png"
    },
    {
        "name": "水宮枢",
        "color": "#37baba",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "minamiya_suu.png"
    },
    {
        "name": "綺々羅々ヴィヴィ",
        "color": "#ff90cc",
        "group": "DEV_IS",
        "status": "active",
        "icon_filename": "kikirara_vivi.png"
    },
];

export { talents };
