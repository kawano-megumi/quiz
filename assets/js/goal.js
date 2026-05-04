const messages = [
	"一から学び直ししましょう",
	"一つ一つ積み上げていきましょう",
	"理解度はもう少しですが、わかっていることもある！",
	"惜しい！もう少しです！",
	"よく理解できています。頑張りました！"
]

// 結果取得
const displayResult = () => {
	// スコアの取得
	const score = Number(sessionStorage.getItem('score'));

	// 問題数
	const max = Number(sessionStorage.getItem('max'));

	// スコアの表示
	document.getElementById("score").innerHTML = score + " / " + max;

	// メッセージの表示
	document.getElementById("message").textContent = messages[(score-1)];
};

displayResult();


const restartBtn = document.getElementById('restartBtn');
restartBtn.addEventListener('click', ()=>{
	sessionStorage.removeItem('score');
	sessionStorage.removeItem('max');
	location.href = 'index.html';
});
