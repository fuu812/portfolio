document.addEventListener('DOMContentLoaded', () => {
    // 必要な要素を取得
    const thumbnails = document.querySelectorAll('.thumbnail'); // 全てのサムネイル画像
    const modal = document.getElementById('imageModal'); // ポップアップ全体
    const modalImage = document.getElementById('modalImage'); // ポップアップ内の画像
    const captionText = document.getElementById('caption'); // キャプション
    const closeButton = document.querySelector('.close-button'); // 閉じるボタン

    // 各サムネイルにクリックイベントリスナーを追加
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            modal.style.display = 'block'; // ポップアップを表示
            modalImage.src = thumbnail.src; // クリックされた画像のsrcをポップアップ画像に設定
            captionText.innerHTML = thumbnail.alt; // alt属性をキャプションに設定
        });
    });

    // 閉じるボタンがクリックされたらポップアップを非表示にする
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // ポップアップの背景がクリックされたらポップアップを非表示にする
    modal.addEventListener('click', (event) => {
        // クリックされたのがモーダル自身（背景部分）であるかを確認
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});