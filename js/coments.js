
	let comments = [];
	loadComments();
	document.getElementById('comment-add').onclick = function(){
		event.preventDefault();
		let commentBody = document.getElementById('comment-body');

		let comment = {
			body : commentBody.value
		}

		commentBody.value = '';
	 	comments.push(comment);
	 	saveComments();
	 	showComments();
	}

	function saveComments(){
		localStorage.setItem('comments', JSON.stringify(comments));
	}
	function loadComments(){
		if (localStorage.getItem("comments")) comments = JSON.parse(localStorage.getItem("comments"));
		showComments();
	}
	function showComments()	{
		let commentField = document.getElementById('message-box-content')
		let out = `<div>Добро пожаловать на сервер Universe Project №1, <span id="userName">DiiX</span>! 
					<li>Ознакомиться с основной информацией о проекте Вы можете использовав команду /help</li>
					<li>Для связи с администрацией используйте кнопку “Report”</li>
				</div>`;
		comments.forEach(function(item) {
			out+= ` <div class="message-content"> <div class="tag BlackFox">Black Fox</div> <div class="name">DiiX</div> <div class="message">${item.body}</div> </div>`;
		});
		commentField.innerHTML = out;
		commentField.scrollTop = commentField.scrollHeight;
	}

	
