const btn = document.getElementById('button');

document.getElementById('form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		btn.value = 'Enviando...';

		const serviceID = 'default_service';
		const templateID = 'template_h2yb9ng';

		emailjs.sendForm(serviceID, templateID, this)
			.then(() => {
				btn.value = 'Enviar Mensaje';
				alert('Tu mensaje ha sido enviado!');
			}, (err) => {
				btn.value = 'Enviar Mensaje';
				alert(JSON.stringify(err));
			});
	});

