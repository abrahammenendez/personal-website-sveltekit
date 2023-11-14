<script>
	import { page } from '$app/stores';
</script>

<div id="header-container">
	<span id="title">Hi!</span>
	<header>
		<nav>
			<ul>
				<!-- <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">👨🏻</a>
				</li> -->
				<li>
					<span id="modeToggle">🌕</span>
				</li>
			</ul>
		</nav>
	</header>
</div>

<style>
	/* //////////////// HEADER, NAV ////////////////// */

	#header-container {
		margin-top: 25px;
		display: flex;
		justify-content: space-between;
		align-self: flex-start;
		font-family: 'Inter-Bold', 'Arial', sans-serif;
		font-size: 1.5em;
	}

	#title {
		align-self: flex-start;
	}

	header {
		align-self: flex-end;
	}

	nav ul {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 15px;
		margin-top: 0;
		margin-bottom: 0;
	}

	nav ul li {
		text-decoration: none;
		cursor: pointer;
	}
</style>
