/**
 * クイズ用JavaScript
 * @created_at 2026-04-29
 */

// グローバル関数
let currentIndex = 0;
let score = 0;

// データ
const quizDatas = [
	{
		question: "JavaScriptはどこで動く？",
		choices: ["ブラウザ", "冷蔵庫", "電子レンジ"],
		answer: 0,
		hint: "テキストテキスト",
		setsumei: ["ブランざに対する説明", "冷蔵庫に対する説明", "電子レンジに対する説明"]
	},
	{
		question: "HTMLの役割は？",
		choices: ["見た目", "構造", "動き"],
		answer: 1
	},
	{
		question: "CSSの役割は？",
		choices: ["見た目", "構造", "動き"],
		answer: 0
	},
	{
		question: "JavaScriptの役割は？",
		choices: ["見た目", "構造", "動き"],
		answer: 3
	}
];

/**
 * 問題表示
 */
const displayQuestion = ()=> {
	const quest = quizDatas[currentIndex];

	// 次へボタンを非アクティブに
	document.getElementById("nextBtn").disabled = true;

	// 結果表示をリセット
	document.getElementById("result").textContent = "";

	// プログレス
	document.getElementById("progress").innerHTML = (currentIndex + 1) + ' / ' + quizDatas.length;
	
	// 問題文の表示
	document.getElementById("question").textContent = quest.question;

	// 選択肢の取得
	const choices = quest.choices;

	// 選択肢を入れる親
	const choicesParent = document.getElementById('choices');
	choicesParent.innerHTML = '';

	// 回答の表示
	for(let i = 0; i < choices.length; i++) {
		// 回答1件
		const choice = choices[i];

		const label = document.createElement('label');
		const input = document.createElement('input');
		const text = document.createTextNode(choice);
		label.classList.add('choice');
		input.type = 'radio';
		input.name = 'op';
		label.appendChild(input);
		label.appendChild(text);

		choicesParent.appendChild(label);
	}

	// 回答するボタンをアクティブに
	document.getElementById("checkBtn").disabled = false;
};

// 初期表示
displayQuestion();


/**
 * イベント処理：回答ボタン
 */
const checkBtn = document.getElementById('checkBtn');
checkBtn.addEventListener('click', ()=> {
	const quiz = quizDatas[currentIndex];
	const ops = document.forms.form1.op;
	let answer = -1;
	for(let i = 0; i < ops.length; i++ ) {
		const op = ops[i];
		if (op.checked) {
			answer = i;
		}
	}
	// 未選択
	if (answer === -1) {
		alert('選択してください');
		return ;
	}
	// 選択されていた場合
	if (answer == quiz.answer) {
		document.getElementById("result").innerHTML = "<span class='correct'>⚪︎正解！</span>";
		document.getElementById("nextBtn").disabled = false;
		document.getElementById("checkBtn").disabled = true;
		score++;
		console.log(score);
	} else {
		document.getElementById("result").innerHTML = "<span class='mistake'>×不正解！</span>";
		document.getElementById("nextBtn").disabled = false;
		document.getElementById("checkBtn").disabled = true;
	}
});

/**
 * イベント処理：次へボタン
 */
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener('click', () => {
	currentIndex++;
	if (currentIndex >= quizDatas.length) {
		console.log(score);
		// sessionStorage.setItem('score', score);
		// sessionStorage.setItem('max', quizDatas.length);
		// location.href = 'goal.html';
		return;
	}
	displayQuestion();

});
