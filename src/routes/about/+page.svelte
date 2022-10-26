<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import StandardPage from '$lib/layout/StandardPage/StandardPage.svelte';
</script>

<StandardPage title="About Me">
  <h1>About me</h1>
  <div class="flex">
      <img
        class="me-img"
        src="/me.png"
        alt="Rob Bertram"
      />
    <div>
      <p>
        I'm a software engineer and love what I do. I've mainly worked on the front end, but love
        working on the back end as well. At work, we use Svelte and React for our front end apps and
        Java for our back end.
      </p>
      <p>
        I look forward to getting off of work after a long day of code to come home and do side
        projects ;P I've come to enjoy creating my APIs with Java and creating my front end code
        with compile to js options such as Elm or Rescript.
      </p>
      <p>
        I've always intended to create a personal site and I'm finally doing one that I hope turns
        out okay. This site itself is one of my many side projects and I've built it using Svelte
        Kit (which is amazing... check out <a
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=860d8usGC0o"
          target="_blank">Rich Harris' talk</a
        > about some of the value it provides!)
      </p>
      <p>
        Anyway, this is a place for me to share what I've written and to showcase what I'm working
        on. I hope this site doesn't just become about work and code. I enjoy thinking about a lot
        of other things so you may find some of my musings about life here as well.
      </p>
    </div>
  </div>
  <hr />
  <div>
    <ul>
      <li>
        <a rel="noreferrer" href="https://www.javascript.com/" target="_blank"
          ><img src="/js.png" alt="JS" /></a
        >
      </li>
      <li>
        <a rel="noreferrer" href="https://www.typescriptlang.org/" target="_blank"
          ><img src="/ts.png" alt="TS" /></a
        >
      </li>
      <li>
        <a rel="noreferrer" href="https://rescript-lang.org/" target="_blank"
          ><img src="/rescript.png" alt="ReScript" /></a
        >
      </li>
      <li>
        <a
          rel="noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
          target="_blank"><img src="/html.png" alt="HTML" /></a
        >
      </li>
      <li>
        <a rel="noreferrer" href="https://css-tricks.com/" target="_blank"
          ><img src="/css.png" alt="CSS" /></a
        >
      </li>
      <li>
        <a rel="noreferrer" href="https://quarkus.io/" target="_blank"
          ><img src="/quarkus.png" alt="Quarkus" /></a
        >
      </li>
      <li>
        <a rel="noreferrer" href="https://spring.io/" target="_blank"
          ><img src="/sb-logo.png" alt="Spring Boot" /></a
        >
      </li>
    </ul>
  </div>
</StandardPage>

<style lang="scss">
  .me-img {
    min-width: 250px;
    width: 250px;
    max-width: 100%;
    margin: 1em auto;
    border-radius: 50%;
    border: 2px solid #dadada;
    aspect-ratio: 1/1;

    @media(min-width: 400px) {
      min-width: 400px;
      width: 400px;
    }

    @media (min-width: 950px) {
      margin: 1em;
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    @media (min-width: 950px) {
      flex-wrap: nowrap;
    }

    p {
      min-width: 320px;
    }
  }

  ul {
    margin: auto;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 32px;
    padding: 0;

    img {
      width: 175px;
      border-radius: 50%;
    }

    li {
      display: grid;
      place-items: center;
      min-width: 100%;

      @media (min-width: 501px) {
        min-width: 200px;
      }
    }
  }
</style>
