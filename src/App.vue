<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="container">
        <p class="brand">Xaurum Fintech Pvt Ltd</p>
        <nav class="site-nav" aria-label="Main navigation">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <main class="container page-content">
      <RouterView />
    </main>
  </div>
</template>
