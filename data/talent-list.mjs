/**
 * @param {String} v - CSVやTSVなどの"特定の文字と改行で区切られたデータ群"形式の文字列
 * @param {String} [s=","] - 区切り文字
 * @returns {Array[]} - vを二次元配列にしたもの
 */
const CSV_to_2dArray = (v, s = ",") => {
    const r = [];
    v.split("\n").forEach(e => { r.push(e.split(s)) });
    return r;
};

const tsv = await fetch(new URL('./talent-list.tsv', import.meta.url));
const tsv_text = await tsv.text();
const tsv_2dArray = CSV_to_2dArray(tsv_text, "\t");

// 1行目がヘッダー行なので、2行目以降について1行目をkey、i行目をvalueとしてオブジェクト化する
const talents = [];
const tsv_header = tsv_2dArray[0];
for (let i = 1; i < tsv_2dArray.length; i++) {
    const tsv_row = tsv_2dArray[i];
    const talent = {};
    tsv_header.forEach((key, index) => {
        talent[key] = tsv_row[index];
    });
    talents.push(talent);
}

export { talents };
