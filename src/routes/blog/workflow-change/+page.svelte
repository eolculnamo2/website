<script lang="ts">
  import BlogPage from '$lib/layout/BlogPage/BlogPage.svelte';
  const title = 'My changing workflow';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<BlogPage {title}>
  <p>This might be uninteresting. I want to reflect on my changing workflow.</p>
  <p>
    In the past couple months, my workflow has drastically changed. Here's some of the changes that
    I'll write about in this post:
  </p>
  <ol>
    <li>Spending way more time in the terminal</li>
    <li>Dedicating more time to ReScript and Rust in my personal coding</li>
    <li>I feel more technical</li>
  </ol>
  <h3>Spending way more time in the terminal</h3>
  <p>
    Compared to my workflow before, I'm much more focused on what I can get done in the terminal.
    Switching to NeoVim from VS Code got me started on this style of computer interaction. After a
    week or so with NeoVim, I realized how much time I could save by learning keyboard shortcuts.
    The productivity boost and the ability to shop around for nvim plugins that boost my workflow
    made me feel like an absolute hacker. NeoVim made me enjoy my terminal. On top of that, I've
    started revisiting linux commands that I've neglected and am on the look out for awesome TUIs. I
    also added Vimium to my browser so I can move fast with using keyboard shortcuts -- I never
    realized before how much using a mouse slows me down.
  </p>
  <h3>Dedicating more time to ReScript and Rust</h3>
  <p>
    My reasons for learning ReScript are different than my reasons for learning Rust, but both
    languages represent excellent languages in my opinion. To give this some context, people value
    different things in programming languages. For some it's ease of use, simplicity, and
    productivity.
  </p>
  <p>
    For me, I value languages that make my work easy to understand later and change. The ML style of
    programming, such as ReScript, jives well with what I like. My experience with ML languages is
    that they expect developers to adhere to functional programming by default, but allow for
    explicit opt out when necessary(i.e. ReScript is mostly immutable, but I can use refs which are
    explicitly mutabled). I also like features that go with ML languages such as pattern matching,
    excellent type inference, etc.
  </p>
  <p>
    Rust also has strong ML influences -- which I love. My reason for liking Rust is more than just
    the functional language features. My approach could be wrong here, but I feel that learning Rust
    gives me greater exposure to thinking through things like memory, lower level systems, network
    protocolos when working with Tokio, etc. I use Rust as the language to explore such topics.
  </p>
  <p>
    I'm also hopeful that Rust will be a "go to" language in WASM someday for some of the most
    interesting and challenging projects on the web. Today, big wasm projects like Google Earth,
    Figma, and Photoshop(brought to the web thanks to wasm) are largely written C++. My hope is that
    the hardest of UI projects of tomorrow will be written in Rust and that I get a chance to work
    on one someday.
  </p>
  <h3>I feel more techinal</h3>
  <p>
    Over the past 8 or so months, I've grown quite a bit technically. By technically, I mean
    something like my ability to comfortably approach technical tools/problems and to quickly become
    effective. For example, a big reason that Rust is finally sticking for me is that I'm
    comfortable enough now with reading what a library is supposed to do then going to a
    documentation/api reference to make it work.
  </p>
  <p>
    On top of that, I've started reading a lot more programming books -- in the past, I mostly
    watched tutorials in video format. Tutorials were great for helping me to get things to
    basically work. I've found that it's easier to get a more complete explanation from books. I've
    also found that the advanced topics I want to dig into are better absorbed from books.
  </p>
  <h3>Looking forward</h3>
  <p>
    I still have a ton to learn. One goal that I need to work on more is to become excellent at
    Java. Java is our back end language of choice at work, and I believe with some effort, I could
    become good enough at the language to where I could make significant contributions at work in
    harder repos. Some other areas of interest are:
  </p>
  <ol>
    <li>Exploring API/Library design to provide more ergonomic interfaces</li>
    <li>
      Digging into OOP to give balance to the functional focus I've had over the past year or two.
    </li>
    <li>
      To dig into the source code of libraries I like to understand how they work. I'd love to
      contribute or create a well thought out, well designed library of my own.
    </li>
  </ol>
</BlogPage>
