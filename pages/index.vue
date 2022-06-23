<template>
    <div>
        <div>

        </div>

        <div>
            <article :key="post.$id" v-for="post in posts.documents">
                <h1>{{ post.title }}</h1>
                <p>{{ post.content }}</p>
            </article>
        </div>
    </div>
</template> 

<script setup>

    const appwrite = useAppwrite();

    const postCollection = '6283d321017dd78d96e0';

    const posts = await appwrite.database.listDocuments(postCollection);

</script>
