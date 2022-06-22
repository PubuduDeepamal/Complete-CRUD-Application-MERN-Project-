window.addEventListener('load', () => {
	const form = document.querySelector("#new-information-form");
	const input = document.querySelector("#new-information-input");
	const list_el = document.querySelector("#information");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const information = input.value;

		const information_el = document.createElement('div');
		information_el.classList.add('information');

		const information_content_el = document.createElement('div');
		information_content_el.classList.add('content');

		information_el.appendChild(information_content_el);

		const information_input_el = document.createElement('input');
		information_input_el.classList.add('text');
		information_input_el.type = 'text';
		information_input_el.value = information;
		information_input_el.setAttribute('readonly', 'readonly');

		information_content_el.appendChild(information_input_el);

		const information_actions_el = document.createElement('div');
		information_actions_el.classList.add('actions');
		
		const information_edit_el = document.createElement('button');
		information_edit_el.classList.add('edit');
		information_edit_el.innerText = 'Edit';

		const information_delete_el = document.createElement('button');
		information_delete_el.classList.add('delete');
		information_delete_el.innerText = 'Delete';

		information_actions_el.appendChild(information_edit_el);
		information_actions_el.appendChild(information_delete_el);

		information_el.appendChild(information_actions_el);

		list_el.appendChild(information_el);

		input.value = '';

		information_edit_el.addEventListener('click', (e) => {
			if (information_edit_el.innerText.toLowerCase() == "edit") {
				information_edit_el.innerText = "Save";
				information_input_el.removeAttribute("readonly");
				information_input_el.focus();
			} else {
				information_edit_el.innerText = "Edit";
				information_input_el.setAttribute("readonly", "readonly");
			}
		});

		information_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(information_el);
		});
	});
});