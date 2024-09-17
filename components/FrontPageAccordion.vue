<script lang="ts" setup>
const { data } = await useAsyncData('frontpageaccordion', () => queryContent().where({ _partial: true }).find())
</script>

<template>
  <div class="border-2 border-[#063]/25 rounded-lg bg-[url(/paperbackground2.webp)] bg-repeat drop-shadow-md drop-shadow-color-[#063]/25">
    <h1 class="text-center text-4xl text-[#063] font-bold font-body">
      Modules and Features
    </h1>
    <AccordionRoot
      class="flex flex-col rounded-sm pa-1 divide-y-1" default-value="1" :multiple="true"
      :collapsible="true"
    >
      <template v-for="item in data" :key="item._id">
        <AccordionItem :value="item._id">
          <AccordionHeader>
            <AccordionTrigger class="min-w-2xl text-justify text-4xl text-[#063] leading-none font-headline">
              {{ item.title }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent class="max-w-2xl border-t-1 py-1 text-justify text-base leading-none font-body">
            {{ item.description }}
          </AccordionContent>
        </AccordionItem>
      </template>
    </AccordionRoot>
  </div>
</template>

<style>

</style>
