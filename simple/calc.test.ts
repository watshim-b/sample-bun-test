import { descraibe, expect, test } from "bun:test";
import { addition } from "./calc.js";

// describeというのは同じようなテストをグルーピングするという機能

// 和関数のテストグループ
descraibe('addtional func test',() => {

    // 下記のテストはsimpleフォルダと同じ
    // 和が一致することを検証するテスト
    test('match', () => {
        expect(addition(2,3)).toBe(5);
    });

    // 和が一致しないことを検証するテスト
    test('not match', () => {
        expect(addition(2,4)).not.toBe(5);
    });

});
