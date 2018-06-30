<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>pageScroll</title>
</head>
<body>
<template>

</template>
<script>
    export default {
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll () {
                console.log(window.scrollY)
                console.log(window.scrollX)
            }
        }
    }
</script>
</body>
</html>