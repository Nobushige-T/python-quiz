// 読み込んだらフェードアウト
$(window).on('load',function(){
    // 消えるタイミング
    $('.loading').delay(1500).fadeOut(400);
});

// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
    $('.loading').delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);

//四角のアニメーション
var squaremoments = anime({
  targets:'.square',
});

//リストのボタン動作
$(function() {
    $('menu-list').on('click', function() {
        $(this).toggleClass('active');
    });
});
