/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, dir, no_of_components } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		dir,
		no_of_components
	};
}
