<script>
	import { page } from '$app/stores';
</script>

<div id="header-container">
	<span id="title">Hi!</span>
	<header>
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">👨🏻</a>
				</li>
				<li>
					<span id="modeToggle">🌕</span>
				</li>
			</ul>
		</nav>
	</header>
</div>
