<template>
    <div>
        <div v-if="sort === 'date'">
            <p>
                {{ createdTimeToNow(value) }}
                <v-tooltip activator="parent" location="top">
                    {{ value }}
                </v-tooltip>
            </p>
        </div>

        <v-avatar v-if="sort === 'name'" color="indigo">{{ value }}</v-avatar>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default {
    name: 'MyContactsSeparator',
    props: {
        value: String,
        sort: String
    },
    methods: {
        createdTimeToNow() {
            dayjs.extend(relativeTime);
            return dayjs(this.createDate).fromNow();
        }
    }
};
</script>
