<template>
    <div>
        <h1>Welcome to Vue + CI4</h1>
        <p v-if="error" style="color: red;">{{ error }}</p>
        <p v-else>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            message: '',
            error: null
        }
    },
    mounted() {
        fetch('/api/home')
            .then(res => {
                if (!res.ok) throw new Error('API request failed')
                return res.json()
            })
            .then(data => this.message = data.message)
            .catch(err => {
                console.error('Error:', err)
                this.error = 'Failed to load data'
            })
    }
}
</script>