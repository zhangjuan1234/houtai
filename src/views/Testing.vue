<template>
    <div class="contaniner" id="container" >
        <span id="left">left</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
#left{
    color: white !important;
}
#container #left{
    color: red;
}
#left{
    color:green !important;
}
.container #left{
    color:blue;
}

</style>