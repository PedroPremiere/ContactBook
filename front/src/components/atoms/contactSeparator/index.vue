<template>
    <div :id="generateId()" class="mt-0 pt-0" data-cy="contactSeparator">
        <div v-if="sort === 'date'">
            <p>
                <span data-cy="contactSeparatorDateText">{{
                    createdTimeToNow(value)
                }}</span>

                <v-tooltip activator="parent" location="top">
                    {{ value }}
                </v-tooltip>
            </p>
        </div>

        <v-avatar
            v-if="sort === 'name'"
            color="success"
            data-cy="contactSeparatorAvatar"
        >
            {{ value }}
        </v-avatar>
    </div>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MyContactsSeparator',
    props: {
        value: {
            type: String,
            default: ''
        },
        sort: {
            type: String,
            default: 'name'
        }
    },
    methods: {
        createdTimeToNow(value: string): string {
            dayjs.extend(relativeTime);
            return dayjs(value).fromNow();
        },
        generateId() {
            return `contactSeparator${this.value}`;
        }
    }
});
</script>
