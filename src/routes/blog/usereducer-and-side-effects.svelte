<script lang="ts">
	import BlogPage from '$lib/layout/BlogPage/BlogPage.svelte';
	let title = 'useReducer and local side effects';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<BlogPage {title}>
	<p>
		<em
			>“How many state items do I need before I should use useReducer instead of multiple
			useStates?”</em
		>
		If you’re like me, this might be a question you often ask yourself while working on local state for
		your React components. Upon reflection, I believe this way of thinking lacks adequate nuance.
	</p>
	<p>To frame things first, we need to clarify the purpose of a reducer.</p>
	<p>
		For a long time, I fundamentally understood actions and reducers as complicated setters. I was
		wrong. The redux website <a
			href="https://redux.js.org/style-guide/style-guide#model-actions-as-events-not-setters"
			>tells us</a
		> that we shouldn’t think of actions as merely setters, but as events. In this way, reducers interpret
		actions from events which involves both logic and potentially updating multiple state values.
	</p>
	<p>
		So to say that again in different terms. Thinking in terms of interpretation of events means:
	</p>
	<ol>
		<li>Our reducers should often have logic in them.</li>
		<li>Our reducers may update multiple state items for one action.</li>
	</ol>
	<p>
		So what does this mean for our useReducer hook? It means that we now have a way of managing
		local state that utilizes the reducer pattern where the logic that updates state lives in the
		reducer, not the body of the component. Organizationally, the logic impacting state updates is
		now clearly tied to the state update itself in the reducer.
	</p>
	<p>
		(By the way, this means that we can import testable functions that keep our reducers easy to
		read. When we add functions to the body of our component, we lose the ability to test the
		function in isolation with unit tests, so this is a win itself.)
	</p>
	<p>
		Here’s a contrived example with counter (IRL, state this simple would be with useState). But the
		benefit with my reducer is not only that I’m avoiding multiple useStates for components with a
		lot of state, but also that I can organize the state update logic to exist in the reducer which
		is the more important benefit.
	</p>
	<img src="/blog/redux-fns.png" alt="Funcions in Redux" />
</BlogPage>

<style>
	img {
		max-width: 100%;
	}
</style>
