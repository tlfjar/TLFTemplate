<script lang="ts" setup>
const { data } = await useAsyncData('frontpageaccordion', () => queryContent().where({ _partial: true }).find())
</script>

<template>
  <AccordionRoot
    class="max-w-2xl w-full rounded-sm pa-1 divide-y-1" default-value="1" :multiple="true"
    :collapsible="true"
  >
    <template v-for="item in data" :key="item._id">
      <AccordionItem :value="item._id">
        <AccordionHeader class="flex">
          <AccordionTrigger class="flex-1 text-justify text-4xl text-[#063] leading-none font-headline">
            {{ item.title }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="border-t-1 py-1 text-justify text-base leading-none font-body">
          {{ item.description }}
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<style>

</style>
