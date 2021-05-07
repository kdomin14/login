<template>
<header>
    <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url(https://sportsamericasportscards.com/product_images/uploaded_images/img-1203-sports-cards.jpg);">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
            </div>
        </div>
    </div>
</header>
  <div class="mt-8">
    <p class="text-3xl mx-auto text-center m-16 tracking-wider font-thin">
    Welcome {{ user?.displayName || 'New User' }}    
    </p>
  </div>

  <section class="m-4 md:m-8 bg-coolGray-100 text-coolGray-800">
		<div class="container mx-auto p-4 my-6 space-y-2 text-center">
			<h2 class="text-5xl font-bold">Sign Up and Become a VIP Member</h2>
		</div>
		<div class="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-lightBlue-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-3xl font-semibold">Exclusive Content</h3>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-lightBlue-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-3xl font-semibold">Early Access</h3>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-lightBlue-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-3xl font-semibold">Discouts on product</h3>
				<div class="space-y-1 leading-tight">
				</div>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-lightBlue-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-3xl font-semibold">Up-to-Date info</h3>
				<div class="space-y-1 leading-tight">
				</div>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-lightBlue-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-3xl font-semibold">Member Only Page</h3>
				<div class="space-y-1 leading-tight">
				</div>
			</div>
			<div class="flex flex-col items-center p-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-lightBlue-600">
					<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
				</svg>
				<h3 class="my-3 text-3xl font-semibold">First to Choose</h3>
				<div class="space-y-1 leading-tight">
				</div>
			</div><!---->
		</div>
	</section>

</template>

<script setup>
import { user } from '../helpers/useAuth'
</script>