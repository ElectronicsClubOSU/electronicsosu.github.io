import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, 'https://drive.google.com/drive/folders/19F0j8cfizQoxXsG3ttz9KgC7h1FJWhx9?usp=sharing');
}