<script lang="ts">
	import { Section, Quotes, Testimonial, TestimonialCard, TestimonialCardItem } from '$lib';
	import { QuoteSolid } from 'flowbite-svelte-icons';
</script>

<Section name="testimonial">
	<Testimonial Icon={Quotes}>
		<blockquote>
			<p class="text-2xl font-medium text-gray-900 dark:text-white">
				"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
			</p>
		</blockquote>
		{#snippet footer()}
			<img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="michael profile" />
			<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
				<div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
				<div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
			</div>
		{/snippet}
	</Testimonial>
</Section>
