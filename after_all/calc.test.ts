import { afterAll, expect, test } from "bun:test";
import { addition } from "./calc.js";

// 下記のテストはsimpleフォルダと同じ
// 和が一致することを検証するテスト
test('match', () => {
    expect(addition(2,3)).toBe(5);
});

// 和が一致しないことを検証するテスト
test('not match', () => {
    expect(addition(2,4)).not.toBe(5);
});

// 全てのテストケースが終了した後に実行される関数
afterAll(() => {
    console.log('all end.')
});
  