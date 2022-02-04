<script setup>

    defineProps({
        terms : {
            type: Array
        },
    });
</script>

<template>
    <div class="flex gap-4 my-8">
        <IconTextMessage class="inline text-2xl" />
        <div>
            <h3 class="text-lg font-bold mb-4">Sõnaseletused:</h3>
            <ul class="list-disc list-inside">
                <li v-for="(term, i) in terms" :key="i">
                    <strong>{{term[0]}}</strong> – {{term[1]}}
                </li>
            </ul>
        </div>
    </div>
</template>
