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
    <div class="flex gap-4 pt-4 my-8 items-center border-t border-t-gray-200">
        <IconAuthors class="scale-150 text-2xl" />
        <div>
            <p class="italic" v-if="author"><span class="font-bold">Autor:</span> {{author}}</p>
            <p class="italic" v-if="origin">{{origin}}</p>
        </div>
            
    </div>
</template>