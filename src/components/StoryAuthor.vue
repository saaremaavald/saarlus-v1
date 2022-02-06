<script setup>

    defineProps({
        author : {
            type: String
        },
        origin : {
            type: String
        }
    });
</script>

<template>
    <div class="flex gap-4 pt-4 my-8 border-t border-t-gray-200">
        <IconAuthors class="text-2xl" />
        <div>
            <p class="italic" v-if="author"><span class="font-bold">Autor:</span> {{author}}<br/>
            <span v-if="origin">{{origin}}</span></p>
        </div>
            
    </div>
</template>