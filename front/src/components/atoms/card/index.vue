<template>
    <v-card class="mx-auto" :subtitle="subtitle" :title="title">
        <template #prepend>
            <my-avatar :initials="initials" />
        </template>
        <template #append>
            <p>
                {{ createdTimeToNow }}
                <v-tooltip activator="parent" location="top">{{
                    createDate
                }}</v-tooltip>
            </p>
        </template>
    </v-card>
</template>

<script>
import './index.css';
import MyAvatar from '../avatar/index.vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default {
    name: 'MyCard',
    components: { MyAvatar },
    props: {
        title: String,
        subtitle: String,
        createDate: String
    },
    emits: ['click'],
    computed: {
        createdTimeToNow() {
            dayjs.extend(relativeTime);
            return dayjs(this.createDate).fromNow();
        },
        initials() {
            const split = this.title.split(' ');
            const initials = [];
            for (let item of split) {
                initials.push(item[0]);
            }

            return initials.join('');
        }
    }
};
</script>
