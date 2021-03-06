# タッチタイピングにおける各指の使用頻度を概算する
- 作成者:YukiOtake
- git:https://github.com/Yuki-Otk/typeCount
- OS: Windwos10Home
- Editer: Visual Studio Code
- 使用言語: HTML,JavaScript,CSS
- 使用API:GoogleChartAPI
- 実行環境: (動作確認済み)
    - Google Chrome ver(65.0.3325.181)
    - Microsoft Edge ver(41.16299.248.0)
- 実行結果(GitHubPages)
  - [type.html](https://yuki-otk.github.io/typeCount/type.html)
---
## ファイル一覧
|ファイル名|概要|
|:-------:|:--:|
|type.html|任意の文字列を入力し、結果を表示する|
|type.js|文字列を解析しどの指が使用されたのか判定する|
|type.css|[type.html]([type.html](https://yuki-otk.github.io/typeCount/type.html)) のレイアウト調整|
|type.jpg|参考資料:[「ちびむすドリル」ホームポジション](http://happylilac.net/sy-keyboard03.html)|
|考察.pdf|レポートの考察部のみを抜き出したもの|
## 概要(仕様)
- ***本プログラムは大学でレポートとして提出したものを少し修正したものである***
- キーボードと各指のホームポジション・段数は参考資料の通りとする。
- 「Ctrl」、「英数・カナ変換」、「Alt」、「矢印」、「ファンクションキー」…等の画面に文字として出力されないキーについては判別することができないため今回の結果には含めないこととする。
- 親指についてはスペースのみで使用し左右の指定はないため1スペースにつき左右の親指カウンタを0.5ずつカウントアップすることとする。
- 1段目についても同様でスペースしかないため0.5ずつアップする。
- shiftキーに関しては入力する手の反対側のshiftキーを押すことを想定とする。
    - 例:Aをタイプしたい場合は右小指でaと左小指でshiftを同時にタイプ
- また、入力文字については1バイト文字のみ(日本語不可)を判定とする。(入力されたものは無視)
## 考察
- レポートとして提出した考察のみを抜き出したPDFを参照することとする。 [PDFリンク](https://github.com/Yuki-Otk/typeCount/blob/master/%E8%80%83%E5%AF%9F.pdf)