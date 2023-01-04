<script>
    import { db } from "../firebase";
    import { addDoc, collection } from "firebase/firestore";

    let task = {
        title: "",
        description: ""
    }

    const handleSubmit = async() => {
        console.log(task)
        await addDoc(collection(db, "tasks"), task)
        console.log("Tarea guardada!")
    }


</script>


<div class="Page">
    <h2>Inicio</h2>

    <form on:submit|preventDefault ={handleSubmit}>
        <label for="title">Title</label>
        <input type="text" placeholder="Write a new task" bind:value={task.title}>

        <label for="description">Description</label>
        <textarea rows="3" placeholder="Write a task description" bind:value={task.description}></textarea>

        <button>Save</button>
    </form>
</div>

