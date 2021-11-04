<script>
  import Content from '$lib/layout/Content/Content.svelte';
  import { currentRoute } from '../../../store/navigation';
  const routesArray = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/about',
      name: 'About',
    },
    {
      href: '/projects',
      name: 'Projects',
    },
    {
      href: '/blog',
      name: 'Blog',
    },
  ];
</script>

<header>
  <Content split>
    <a href="/" class="logo"><h1>Rob Bertram</h1></a>
    <nav>
      {#each routesArray as r}
        <a sveltekit:prefetch href={r.href}
          ><div class={`link ${r.href === $currentRoute ? 'link--selected' : ''}`}>{r.name}</div></a
        >
      {/each}
    </nav>
  </Content>
</header>

<style lang="scss">
  header {
    padding: 1rem 0.5rem;
    background-color: #0892d0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  h1 {
    font-size: 1.5rem;
    color: white;
    font-weight: 400;
    margin: 0;
  }
  .logo {
    cursor: pointer;
    text-decoration: none;
  }
  .link {
    color: white;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &--selected {
      text-decoration: underline;
      font-weight: bold;
    }
  }
</style>
