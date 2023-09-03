<script lang="ts">
  import ProjectItem from '$lib/components/ProjectItem/ProjectItem.svelte';
  import StandardPage from '$lib/layout/StandardPage/StandardPage.svelte';

  interface ProjectProps {
    name: string;
    stack: string[];
    link?: string;
    description: string;
  }

  const projects: ProjectProps[] = [
    {
      name: 'Supervision Hour Tracker',
      stack: ['Java', 'Spring Boot', 'Quarkus', 'TypeScript', 'Svelte', 'Elm'],
      link: 'https://app.supervision-hour-tracker.com',
      description:
        'Tracks supervision hours for students. Provides dashboard for supervisors and administrators to review submissions.',
    },
    {
      name: 'Interactive CE Training',
      stack: ['Java', 'Spring Boot', 'ReScript', 'React'],
      link: 'https://interactivecetraining.net',
      description:
        'A small business website that does live CE training. The dashboard provides a space to purchase courses, manage courses, and view certificates as well as an admin management dashboard.',
    },
    {
      name: 'CU Well',
      stack: ['Java', 'Quarkus', 'Remix', 'React', 'Redux', 'TypeScript'],
      link: 'https://cu-well.com',
      description:
        'Website for CU Well counseling. Provides dashboard for admin, supervisors, and students. Includes blogging, gathering client feedback, client submission forms, and other features',
    },
  ];
</script>

<StandardPage title="Projects">
  <h1>My Side Projects</h1>
  <img src="/static_assets.svg" alt="static assets html css javascript" />

  {#each projects as project}
    <ProjectItem {...project} />
    <hr />
  {/each}
</StandardPage>

<style lang="scss">
  img {
    width: 400px;
    max-width: 100%;
    margin: auto;
    margin-bottom: 2em;
    display: block;
    aspect-ratio: 400/283;
  }
</style>
