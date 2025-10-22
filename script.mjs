/** ================================================================================================
 * テンプレート
================================================================================================= */

// --------------------------------------------------------------------------------
// ページのロード完了を待つ
// --------------------------------------------------------------------------------
await /** @type {Promise<void>} */ (new Promise(resolve => {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () =>
            resolve());
    } else {
        resolve();
    }
}));

/**
 * document.querySelectorのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element | null}
 */
const $ = selector => document.querySelector(selector);

/**
 * document.querySelectorAllのエイリアス
 * @param {String} selector - CSSセレクタ
 * @returns {Element[]}
 */
const $$ = selector => Array.from(document.querySelectorAll(selector));

/** ================================================================================================
 * 個別処理
================================================================================================= */

/* 引く人数に応じて.section_result>ul.resultsの中のli.result_itemの数を変える(動的に生成する) */
const numberOfDrawsInput = $("#number_of_draws");
const resultsList = $(".section_result > ul.results");
const resultItemTemplate = $("#result_item_template");
const regenerateResultsList = () => {
    const numberOfDraws = Number(numberOfDrawsInput.value);

    // 現在のli.result_itemの数
    const currentCount = resultsList.children.length;

    // 今あるやつ全部削除してから再生成する
    resultsList.innerHTML = "";

    for (let i = 0; i < numberOfDraws; i++) {
        const clone = resultItemTemplate.content.cloneNode(true);
        resultsList.appendChild(clone);
    }
};

numberOfDrawsInput.addEventListener("change", () => {
    regenerateResultsList();
});
regenerateResultsList();

/* 画像ないときのフォールバック用に、色塗り単色のSVGのobjectURLを返す関数を用意する */
/** @type {(color: string) => string} - 500×500px, 四角形color単色塗りのSVG画像のobjectURLを返す */
const generateSolidColorSVGDataURL = color => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500"><rect width="500" height="500" fill="${color}"/></svg>`;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    return URL.createObjectURL(blob);
};

/* ボタンを押したときにランダムにメンバーを引く */
import { talents } from "./data/talent-list.mjs";

const drawButton = $("#draw_button");
const drawTalents = () => {
    const numberOfDraws = Number(numberOfDrawsInput.value);
    const resultItems = $$(".result_item");

    // filter条件の取得
    // グループ(JP, EN, ID, DEV_IS)
    const group_filter = new Set();
    const group_checkboxes = $$(".option_item input[type='checkbox'][name='groups[]']");
    group_checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            group_filter.add(checkbox.value);
        }
    });
    // 活動状況(現役, 卒業, 活動終了, 契約終了)
    const status_filter = new Set(["active"]);
    const status_checkboxes = $$(".option_item input[type='checkbox'][name='statuses[]']");
    status_checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            status_filter.add(checkbox.value);
        }
    });

    // filteredTalentsにはfilter条件を満たすタレントのみを入れる
    const filteredTalents = talents.filter(talent => {
        return group_filter.has(talent.group) && status_filter.has(talent.status);
    });

    const result = [];
    for (let i = 0; i < numberOfDraws; i++) {
        const randomIndex = Math.floor(Math.random() * filteredTalents.length);
        result.push(filteredTalents[randomIndex]);
        // 重複を許さない場合、引いたメンバーを配列から削除する
        if (!$("#allow_duplicates").checked) {
            filteredTalents.splice(randomIndex, 1);
        }
    }

    resultItems.forEach(async (item, index) => {
        const talent = result[index];
        const icon = item.querySelector(".icon");
        const name = item.querySelector(".name");

        // srcは一旦fetchして404が返ってきたらフォールバック画像を使うようにする
        const icon_response = await fetch(`./images/talents/${talent.icon_filename}`);
        if (!icon_response.ok) {
            // 画像が存在しない場合、単色SVG画像を使う
            icon.src = generateSolidColorSVGDataURL(talent.color);
        } else {
            // 画像が存在する場合、そのまま使う
            icon.src = `./images/talents/${talent.name}.png`;
        }

        // 代替テキストと名前を設定する
        icon.alt = talent.name;
        name.textContent = talent.name;
    });
};
drawButton.addEventListener("click", () => {
    drawTalents();
});
