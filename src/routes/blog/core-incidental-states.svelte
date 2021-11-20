<script lang="ts">
  import BlogPage from '$lib/layout/BlogPage/BlogPage.svelte';
  const title = 'Core and Incidental State';
  const mediumLink = 'https://robbertram.medium.com/core-and-incidental-state-c831763c4800';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<BlogPage {title} {mediumLink}>
  <p>
    Core state and incidental state are categories that I use to describe two kinds of state in
    front end applications. I’ve made the terms up to help describe a helpful distinction, but I
    imagine that my thoughts on this aren’t exactly original. The basic idea is this: <em
      >Core State refers to the most basic mutable representations of a UI system whereas Incidental
      States exist as a consequence of one or more Core States.</em
    > The concepts appear organically in frameworks like Svelte with writables vs derived states or in
    redux with state vs selectors so the idea isn’t especially novel, but people haven’t given this much
    attention, so here it goes.
  </p>
  <p>
    Core state describes the most basic changing parts of an application. Core states rarely
    describe anything visual. Instead, they generally describe either what the app is doing or how
    it exists abstractly. An example is when a user clicks login, the app is authenticating which
    means that something like isAuthenticating would be a core stateful variable. Core states are
    changeable by outside influences and not impacted directly by other states.
  </p>
  <p>So core states are:</p>
  <ol>
    <li>Not visual</li>
    <li>Describe what the app is doing or its current abstract state</li>
    <li>Are changed by the outside world, not other internals of the application</li>
  </ol>
  <p>
    Core state is not sufficient for describing how our application should react to inputs. This is
    the job of incidental state. If isAuthenticating is our core state, our incidental state might
    be isLoginButtonDisabled and isSpinnerDisplaying. Both of the incidental variables are, at least
    in part, dependent on the Core State, but are distinct in the sense that their job is to
    describe the state of visual elements on the page.
  </p>
  <p>
    It’s possible that isLoginButtonDisabled has an equivalent value to isAuthenticating (when
    isAuthenticating is true, isLoginButtonDisabled is also true and vice versa), but that does not
    mean they should be the same variable because they describe two different concepts. In the
    future, we may want to change the terms for when the login button is disabled and its useful to
    have a variable that describes just that.
  </p>
  <p>Incidental states:</p>
  <ol>
    <li>
      Generally give feedback to the user or modify the user’s ability to interact with the
      application.
    </li>
    <li>
      Are a result of Core State and potentially other Incidental State. They are not directly
      impacted by the outside world (without first going through some core variable)
    </li>
  </ol>
  <p>So now the question is: so what?</p>
  <p>
    The distinction between core state and incidental state is useful for creating highly modifiable
    front end applications where adjustments to the code are predictable. This predictability
    results from variables that strictly have one purpose.
  </p>
  <p>
    When variables are conflated to mean different things, weirdness occurs. You may set
    isLoginButtonDisabled to true directly as a result of clicking the login button, but later you
    might want a spinner. You have to then decide if isLoginButtonDisabled is solely dependent on
    when the login button is clicked or if it used elsewhere. You must also decide whether or not to
    use a single variable or multiple variables to represent both the button and the spinner. Little
    thought is generally given to these decisions and you end up with state that is hard to change.
  </p>
  <p>
    With core and incidental state, the user clicking the login button can mean only one thing in
    terms of core state which is that isAuthenticating is true. From there, descriptive names are
    given to incidental states which describe one concept at a time and infer their meaning from
    core state.
  </p>
  <p>
    I hope this is helpful. I could be wrong about all of it, but its helped clarify projects I
    build.
  </p>
</BlogPage>

<style>
  img {
    max-width: 100%;
  }
</style>
