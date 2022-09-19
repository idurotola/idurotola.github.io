$(() => {
	$('#find').click(findUser);
});

const findUser = (evt) => {
	evt.preventDefault();
	const userID = $.getJSON({
		url: `https://jsonplaceholder.typicode.com/users/${$(
			'#user-id'
		).val()}`,
		contentType: 'application/json; charset=utf-8',
	}).done((data) => {
		$.getJSON({
			url: `https://jsonplaceholder.typicode.com/posts?userId=${$(
				'#user-id'
			).val()}`,
			contentType: 'application/json; charset=utf-8',
		}).done((posts) => {
			var user {
				data: data,
				posts: posts
			}
			displayUserInfo(user);
		});
	});
};

const displayUserInfo = (user) => {
	let listItem = '';
	user.data.forEach(
		(el) =>
			(listItem += `<dt style="color: hsl(240, 96%, 72%); font-size: 1.5em;">${el.title}</dt><dd>${el.body}</dd>`)
	);

	userData = user.data;

	$('#username').text('Username: ' + userData.username);
	$('#email').text('Email: ' + data.email);
	$('#address').text('Address: ' + data.address.street);
	$('#posts').html(listItem);
};
