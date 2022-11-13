<script setup lang="ts">
import { RouteRecordName } from "vue-router";
</script>

<template>
  <main class="flex">
    <router-view name="sidebar"></router-view>

    <div class="w-full">
      <router-view name="navbar"></router-view>

      <router-view v-slot="{ Component, route }">
        <template v-if="Component">
          <KeepAlive>
            <Suspense>
              <component :is="Component" />
              <template #fallback>
                <div class="h-screen bg-red-50 text-center">Loading...</div>
              </template>
            </Suspense>
          </KeepAlive>
        </template>
      </router-view>
      <router-view name="footer"></router-view>
    </div>
  </main>
</template>
