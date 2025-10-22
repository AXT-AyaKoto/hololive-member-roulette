//@ts-check

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
 * 初期化処理
================================================================================================= */
// .result_areaに各メンバーの要素を追加する
import { talents } from "./data/talent-list.mjs";
const userLanguage = navigator.language || "ja-JP";
const resultArea = /** @type {HTMLElement} */ ($(".result_area"));
talents.forEach(talent => {
    const talentElem = document.createElement("div");
    talentElem.classList.add("talent_item");
    talentElem.style.borderColor = talent.color;
    talentElem.textContent = talent.name[userLanguage] || talent.name["ja_JP"] || "---";
    resultArea.appendChild(talentElem);
});
