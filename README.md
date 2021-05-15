# cetkaik_board_svg_generator

「机戦（パイグ将棋）（cetkaik）の盤面SVGを編集するのに毎回 Inkscape を立ち上げて云々するのが面倒」ということなので[エディタを作った](https://sozysozbot.github.io/cetkaik_board_svg_generator/index.html)。SVGでダウンロードできるので便利。


## 駒の種類を増やしたいとき

必要なもの: TypeScriptをコンパイルする環境

* `src/main.ts` にある `GLOBAL_OFFSET_TABLE` に、「KAマスに駒を置いたときに、画像が0度回転したときと180度回転したときとで path の冒頭の `m ??? ???` がどうなるか」を記録する。
* `GLOBAL_PIECE_PATH_TABLE` に、駒のグリフを構成するsvgのpathの中身を書く。先頭は `m 0 0` で始めること。
* `Profession` の型定義を変更し、それに従って `ALL_PROFESSIONS` を編集するなどする
