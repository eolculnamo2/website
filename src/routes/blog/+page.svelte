<script lang="ts">
  import BlogBox from '$lib/components/BlogBox/BlogBox.svelte';
  import StandardPage from '$lib/layout/StandardPage/StandardPage.svelte';

  const posts: { name: string; slug: string; mediumLink: string }[] = [
    {
      name: 'Core and Incidental State',
      slug: 'core-incidental-states',
      mediumLink: 'https://robbertram.medium.com/core-and-incidental-state-c831763c4800',
    },
    {
      name: 'Growing as a software engineer',
      slug: 'growing-as-software-engineer',
      mediumLink: 'https://robbertram.medium.com/growing-as-a-software-engineer-4fa1bff6b89b',
    },
    {
      name: 'useReducer and local side effects',
      slug: 'usereducer-and-side-effects',
      mediumLink: 'https://robbertram.medium.com/usereducer-and-local-side-effects-b75337d27c5b',
    },
    {
      name: 'What’s the purpose of actions, state, and selectors?',
      slug: '',
      mediumLink:
        'https://robbertram.medium.com/whats-the-purpose-of-actions-state-and-selectors-c0091d71062c',
    },
    {
      name: 'State as Interaction with the Outside World',
      slug: '',
      mediumLink:
        'https://robbertram.medium.com/state-as-interaction-with-the-outside-world-f2390d97717',
    },
    {
      name: 'How to mock Writables, Readables, and Derived values in Svelte',
      slug: '',
      mediumLink:
        'https://robbertram.medium.com/how-to-mock-writables-readables-and-derived-values-in-svelte-79e70e723227',
    },
    {
      name: 'Functional React',
      slug: '',
      mediumLink: 'https://robbertram.medium.com/functional-react-c29beefb9078',
    },
    {
      name: 'Minimize side effects in front end apps by limiting state updates to interactions with the outside world',
      slug: '',
      mediumLink:
        'https://robbertram.medium.com/minimize-side-effects-in-front-end-apps-by-limiting-state-updates-to-interactions-with-the-outside-c4c4a891d2a9',
    },
    {
      name: 'TypeScript is best simple',
      slug: '',
      mediumLink: 'https://robbertram.medium.com/typescript-is-best-simple-427e8f2827a7',
    },
    {
      name: 'Are Languages that Compile to JS worth it?',
      slug: '',
      mediumLink:
        'https://robbertram.medium.com/are-languages-that-compile-to-js-worth-it-6a849719afe7',
    },
  ];
</script>

<StandardPage title="Blog">
  <h1>Blog</h1>
  {#each posts as post}
    <BlogBox name={post.name} slug={post.slug} mediumLink={post.mediumLink} />
  {/each}
</StandardPage>
