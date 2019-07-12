export let whiteHTML = `<div className="white-card">
<div className="white-card-body">
    <!-- JSON card content -->
</div>
</div>`

export let whiteCSS = `.white-card {
	width: 225px;
	height: 350px;
	border-radius: 10px;
	background-image: url('../img/white-card.png');
	display: flex;
	box-sizing: border-box;
	padding: 20px 30px 10px 30px;
	line-height: 25px;
}
	
.white-card-body {
	color: #0e0e0e;
	text-align: left;
	font-weight: 600;
	font-size: 17px;
	width: 200px;
}`

export let blackHTML = `<div className="black-card">
<div className="black-card-body">
    <!-- JSON card content -->
</div>
</div>`

export let blackCSS = `.black-card {
	width: 225px;
	height: 350px;
	border-radius: 10px;
	background-image: url('../img/black-card.png');
	display: flex;
	box-sizing: border-box;
	padding: 20px 30px 10px 30px;
	line-height: 25px;
}

.black-card-body {
	color: #fafafa;
	text-align: left;
	font-weight: 600;
	font-size: 17px;
	width: 200px;
}`

export let scoreboardHTML = `<div className="scoreboard">
	<div className="sb-header">// number of players</div>
	<div className="sb-body">// list of players</div>
</div>`

export let scoreboardCSS = `.scoreboard {
	display: flex;
	flex-direction: column;
	width: 250px;
	height: auto;
	background-color: #5c5c5c;
	border-radius: 10px;
	box-sizing: border-box;
	padding: 5px;
	line-height: 25px;
}

.sb-body {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	border-radius: 0 0 7px 7px;
	box-sizing: border-box;
	padding: 10px 20px 10px 20px;
	background-color: #202020;
}

.sb-header {
	background-color: #da8300;
	width: 100%;
	height: 40px;
	text-align: center;
	box-sizing: border-box;
	padding: 10px;
	border-radius: 5px 5px 0 0;
	font-weight: 600;
}

.sb-player {
	font-weight: 600;
	color: #fafafa;
	word-wrap: break-word;
}`