<template>
  <div
    :id="options.readMore.ID"
    :class="options.readMore.classes"
    v-bind="options.readMore.attributes"
    v-if="isSet(options.readMore.show) && isSet(options.readMore.moreText)">
    <card-link
      :theId="options.readMore.link.ID"
      :classes="options.readMore.link.classes"
      :attributes="options.readMore.link.attributes"
      :theHref="getUrl(options.sources.readMoreUrl)"
      :renderLink="renderElement(getUrl(options.sources.readMoreUrl) && isSet(options.readMore.link.show))">
      <span
        slot="content"
        :id="options.readMore.text.ID"
        :class="options.readMore.text.classes"
        v-bind="options.readMore.text.attributes">{{ isSet(options.readMore.moreText) }}</span>
    </card-link>
  </div>
</template>

<script>
import { components, props, methods } from '@/mixins/cardElements'

export default {
  name: 'card-readMore',
  mixins: [components, props, methods]
}
</script>
