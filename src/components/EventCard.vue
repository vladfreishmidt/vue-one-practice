<template>
  <div class="card">
    <h4>{{ event.title }}</h4>
    <h5>{{ event.description }}</h5>
    <h6>{{ event.location }}</h6>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.3);
}
</style>
