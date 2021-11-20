<script lang="ts">
  import BlogPage from '$lib/layout/BlogPage/BlogPage.svelte';
  const title = 'Growing as a software engineer';
  const mediumLink = 'https://robbertram.medium.com/growing-as-a-software-engineer-4fa1bff6b89b';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<BlogPage {title} {mediumLink}>
  <em
    >For poor performers to recognize their ineptitude would require them to possess the very
    expertise they lack.</em
  >
  <div>- David Dunning</div>
  <p>
    The hardest problem in growing as a software engineer is that you do not know what you don’t
    know. If you’re like me, you face challenges such as these:
  </p>
  <ol>
    <li>
      You often find that assumptions you rely on are wrong which can throw your outlook on what is
      good software into disarray.
    </li>
    <li>
      Feeling an unjustified sense of confidence in your skills is the norm because you can’t see
      the next steps in your development as an engineer.
    </li>
    <li>
      Feeling an unjustified sense of confidence because of consistent positive feedback from
      managers and teammates who are incentivized to make you feel valued and appreciated on your
      team.
    </li>
  </ol>
  <p>
    As someone that has less than 4 years of professional experience at the time of writing this, I
    can tell you that if you’re early in your career (like I am), you are almost certainly not as
    good as you think you are. The sooner you accept that you’re more likely delusional in your
    confidence than actually as good as you will be at the end of your career, the sooner you can
    work towards identifying better ways of thinking, better patterns, and better code.
  </p>
  <p>Here’s a few helpful strategies that help me grow even when I don’t know the way forward.</p>
  <hr />
  <h3>Constantly Seek Feedback</h3>
  <p>
    This should seem obvious, but its really not. The fundamental barrier to getting the feedback we
    need is that it feels like we don’t need it. Early on, we develop skills and patterns that
    enable us to build applications. In other words, the skills work and so it can seem like we’ve
    got what we need figured out.
  </p>
  <p>
    The problem with this is that there are many ways to build software. Real expertise comes from
    knowing many ways to build something and using the best way to build whatever project you’re
    working on.
  </p>
  <p>
    If possible, you should find people who are further along in their careers (in years and
    proficiency) and explain to them the way you think about a problem. They’re likely to expose you
    to nuanced ways of thinking about the issue at hand that you may never have come to on your own.
  </p>
  <p>
    You should also try to diversify your feedback. Find people from outside your company to
    interact with so you can understand ways of building outside of the enforced patterns in your
    organization.
  </p>
  <h3>Think Deeply about your Assumptions</h3>
  <p>
    Taking time to reflect about what you already know is invaluable. We build structures of
    understanding where one belief is predicated on another. When you can identify an improvement in
    how you think about something, it can have cascading benefits in how you think about many
    things.
  </p>
  <p>
    We deal with complicated topics in software so it can be helpful to find ways to explain your
    thoughts in a complete way. For me, writing blogs has been helpful because it forces me to
    articulate what I think in a coherent and complete form. You can also do something along the
    lines of finding someone you can explain a thought to or making an outline.
  </p>
  <h3>Never save face. Own your ignorance.</h3>
  <p>
    This is the hardest part, but it’s really important. I truly believe that there are people who
    likely think less of my technical knowledge when I ask questions about things I don’t know, but
    I’ve decided that it’s better to own my ignorance so that I can get the resources I need to
    learn more.
  </p>
  <p>
    When you are honest with others about things you don’t know, you’ll often get instant feedback
    on how to learn about whatever the topic is. It also allows potential mentors to more accurately
    gauge your deficiencies so that they can more appropriately guide you to the next steps in your
    learning.
  </p>
  <h3>Meditate on the Excellence Qualities of Engineers you Respect</h3>
  <p>
    You should always do this ^^^ A problem you’ll face is that it’s easy to do things like you’ve
    always done them. It’s far too easy to turn a blind eye to people that do it differently because
    it can feel pointless — you can already build what need to build. In reality, this is a great
    way to impede your growth.
  </p>
  <p>
    There should always be people you work with that you respect and can learn from. When you find
    something that they do that you don’t, you should consider reasons that their approach is valid
    — even when its something you generally disagree about.
  </p>
</BlogPage>

<style>
  img {
    max-width: 100%;
  }
</style>
