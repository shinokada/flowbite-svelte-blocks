---
layout: componentLayout
title: Publisher UI - Flowbite Svelte Blocks
breadcrumb_title: ''
no_of_components:
dir: publisher
description: Get started with a collection of free Tailwind CSS UI components for publishing blog posts, articles, comment sections, sidebar widgets, and more.
category: true
---

<script lang="ts">
  import type { PageData } from './$types';
  import SectionCompo from '../utils/Sectioncompo.svelte';
  export let data: PageData;
</script>

<SectionCompo {data} section="publisher"/>
