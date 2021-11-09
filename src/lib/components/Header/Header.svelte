<script>
  import Content from '$lib/layout/Content/Content.svelte';
  import { onMount } from 'svelte';
  import { currentRoute } from '../../../store/navigation';
  import DarkModeToggle from '../DarkModeToggle/DarkModeToggle.svelte';
  import Hambuger from '../Hamburger/Hambuger.svelte';

  let dmToggled;
  onMount(() => {
    const body = document.body;
    try {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
      } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
      }
    } catch (e) {
      console.warn('Failed to detect dark mode preference: ', e);
    }
  });

  function handleDmToggle({ detail: toggled }) {
    dmToggled = toggled;
    const body = document.body;
    body.classList.toggle('dark-mode', toggled);
    body.classList.toggle('light-mode', !toggled);
  }

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
    <div class="mobile">
      <Hambuger>
        <div class="mobile-options">
          {#each routesArray as r}
            <a sveltekit:prefetch href={r.href}
              ><h3 class={`link ${r.href === $currentRoute ? 'link--selected' : ''}`}>
                {r.name}
              </h3></a
            >
          {/each}
          <div style="float:right;">
            <DarkModeToggle on:toggle={handleDmToggle} toggled={dmToggled} />
          </div>
        </div>
      </Hambuger>
    </div>
    <nav class="not-mobile">
      {#each routesArray as r}
        <a sveltekit:prefetch href={r.href}
          ><div class={`link ${r.href === $currentRoute ? 'link--selected' : ''}`}>{r.name}</div></a
        >
      {/each}
    </nav>
  </Content>
  <div class="dm-toggle not-mobile">
    <DarkModeToggle on:toggle={handleDmToggle} toggled={dmToggled} />
  </div>
</header>

<style lang="scss">
  .dm-toggle {
    float: right;
    position: absolute;
    top: 20px;
    right: 4px;
  }
  .mobile {
    display: block;
    @media (min-width: 500px) {
      display: none;
    }
  }
  .not-mobile {
    display: none;
    @media (min-width: 500px) {
      display: flex;
    }
  }
  .mobile-options {
    width: 100%;
  }
  header {
    padding: 1rem 0.5rem;
    background-color: var(--theme-primary-color);
    @media (min-width: 500px) {
      padding: 1rem 3rem;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  h1 {
    font-size: 1.5rem;
    color: var(--pure-mode-color);
    font-weight: 400;
    margin: 0;
  }
  .logo {
    cursor: pointer;
    text-decoration: none;
  }
  .link {
    color: var(--text-color);
    text-align: right;
    cursor: pointer;
    font-weight: normal;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &--selected {
      text-decoration: underline;
      font-weight: bold;
    }

    @media (min-width: 500px) {
      color: var(--pure-mode-color);
      text-align: left;
    }
  }
</style>
