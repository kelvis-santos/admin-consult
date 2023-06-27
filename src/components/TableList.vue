<template>
    <v-table fixed-header class="table-size">
        <thead>
            <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Email</th>
                <th class="text-left">Role</th>
                <th class="text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user, index in users" :key="index">
                <td>{{ user.firstname }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role ?? 'N/A' }}</td>
                <td>
                    <v-btn
                        color="primary"
                        :to="`/user/${user.id}`"
                        text
                    >
                        Details
                    </v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>
<script>
export default {
    data() {
        return {
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                },
                {
                    name: 'Donut',
                    calories: 452,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                },
            ],
        }
    },
    props: {
        users: {
            type: Array,
            required: true,
        },
    },
}
</script>
<style scoped>
.table-size {
    width: 100vh;
    height: auto;
}
</style>