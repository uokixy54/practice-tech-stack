/**
 * day 4 typescript
 */

/**
 * Utility Types（p105）
 * - 型の取り回しを便利にする型
 * - 型を受け取って型を返す
 */
type AA = Partial<{ a: number }>; // { a?: number }型
type BB = Required<{ a?: number }>; // { a: number }型
type CC = Pick<{ a: number; b: string; }, "b"> // { b: string }型
type DD = Omit<{ a: number; b: string; }, "b"> // { a: number }型
type EE = Readonly<{ a: number }>; // { readonly a: number }型

/**
 * 型パズル（pp106~110）
 * - TSの型システムはチューリング完全
 * - 処理系により型検査に制限があり無限に再起処理をしない
 * - 型だけでいろんなプログラムを書くことができる
 *     - コンパイル後のJSは空
 */

/**
 * 型定義（pp111~117）
 * - 外部ライブラリをTSから利用するには型定義ファイルが必要！
 * - 型定義のみを記述しているファイルの拡張子は.d.ts
 * - ライブラリの型定義はどこにあるか
 *     - パッケージに同梱されてる
 *         - npm installした時点で使用可
 *         - package.jsonに"types": "index.d.ts"などの記載がある
 *     - 第三者が提供
 *         - npm i @types/(ライブラリ名)でインストールできる
 *     - 自分で型定義
 *     - anyで妥協
 */

/**
 * モジュール（pp118~119）
 * - ES2015（ECMAScript2015）で初めてモジュールに関する構文が仕様化
 * - それまではJSにモジュールという仕様はなかった
 * - JSの環境によってモジュールのスタイルが異なるため利用するモジュールローダーを使い分ける必要がある
 * - TSでは基本的にESで記述
 * - コンパイル時にランタイムで使用するモジュールローダーを指定すると、変換できる
 * - tsconfig.jsonのmodule: に指定
 *     - commonjs: Node.jsなど
 *     - esnext: ブラウザの<script type="module">使うときなど
 */
