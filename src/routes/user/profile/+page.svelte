<script lang="ts">
	import Page from '$components/Page.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data.session;
</script>

<Page title="Profile" description="Update user profile settings">
	<div class="card bg-base-200 p-4">
		<div class="flex gap-2">
			<div class="flex-1">
				<div class="avatar">
					<div class="w-24 rounded">
						<!-- On click, display change profile image -->
						<img alt="profile" src={user?.image} />
						<!-- Hover overlay -->
						<input type="file" id="profile-upload" style="display:none" />
						<label for="profile-upload">
							<div
								class="absolute top-0 bottom-0 left-0 right-0 flex justify-center cursor-pointer bg-base-200 opacity-0 hover:opacity-80 transition-opacity"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									class="w-8 h-8 m-auto"
									viewBox="0 0 16 16"
								>
									<path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
									<path
										d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
									/>
								</svg>
							</div>
						</label>
					</div>
				</div>
			</div>
			<div class="flex-1 w-fit">
				<h1 class="text-4xl font-bold mb-2">{user?.name}</h1>
			</div>
		</div>
	</div>
</Page>
