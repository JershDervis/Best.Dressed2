<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
</script>

<div class="card bg-base-200 p-6">
	<p class="mb-2">Sign in with</p>
	<div class="flex flex-wrap gap-4 w-full">
		<button on:click={() => signIn('google')} class="btn btn-active btn-ghost gap-2 flex-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-google"
				viewBox="0 0 16 16"
			>
				<path
					d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
				/>
			</svg>
			Google
		</button>
		<button on:click={() => signIn('facebook')} class="btn btn-active btn-ghost gap-2 flex-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-facebook"
				viewBox="0 0 16 16"
			>
				<path
					d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
				/>
			</svg>
			Facebook
		</button>
		<button on:click={() => signIn('spotify')} class="btn btn-active btn-ghost gap-2 flex-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-spotify"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"
				/>
			</svg>
			Spotify
		</button>
	</div>

	<div class="divider">OR</div>

	<form method="post">
		<div class="flex flex-wrap gap-4">
			<input type="text" placeholder="Email Address" class="input input-bordered w-full" />
			<input type="text" placeholder="Password" class="input input-bordered w-full" />
			<button class="btn btn-primary w-full">Create your account</button>
		</div>
	</form>

	<div class="divider" />

	<div>
		By signing up, you agree to our non-existent
		<a href="/terms" class="link">terms of service</a>
		and
		<a href="/privacy-policy" class="link">privacy policy</a>.
	</div>
</div>
