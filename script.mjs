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
