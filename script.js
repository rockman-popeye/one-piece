let start = document.getElementById('start'); // 開始ボタン
let image = document.getElementById('image'); // ロゴ画像
// スタートボタンをクリックしたら
start.addEventListener('click', () => {
  // 画像を反時計回りに1回転させる
  image.animate(
    // 途中の状態を表す配列
    [
      { transform: 'rotate(360deg)' }, // 開始時の状態（360度）
      { transform: 'rotate(0deg)' } // 終了時の状態（0度）
    ], 
    // タイミングに関する設定
    {
      fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
      duration: 1000, // 再生時間（1000ミリ秒）
    },
  );
});