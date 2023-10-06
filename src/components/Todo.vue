<script setup>
import { useTodoList } from "../stores/todoStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

const TodoItems = ref("");

const todo = useTodoList();

const { ListItems } = storeToRefs(todo);

function addTask() {
  const success = todo.addItems(TodoItems.value);
  if (success) {
    TodoItems.value = null;
    ElNotification({
      title: "Success",
      message: "Successfully Add Task",
      type: "success",
      position: "top-right",
      duration: 2000,
    });
  } else {
  }
}

function changeStatus(id) {
  todo.changeStatus(id);
  ElNotification({
    title: "Success",
    message: "Successfully Read the Task",
    type: "success",
    position: "top-right",
    duration: 2000,
  });
}

function changeStatusUnread(id) {
  todo.changeStatusUnread(id);
  ElNotification({
    title: "Warning",
    message: "Successfully URead the Task",
    type: "warning",
    position: "top-right",
    duration: 2000,
  });
}

const dialogVisible = ref(false);

function deleteItem(id) {
  ElMessageBox.confirm("Are you sure to Delete This item", "Warning", {
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    type: "warning",
    draggable: true,
  })

    .then(() => {
      const success = todo.deleteItem(id);
      if (success) {
        ElMessage({
          title: "Success",
          message: "Delete completed",
          type: "success",
        });
      } else {
        ElNotification({
          title: "Error",
          message: "Something went Wrong",
          type: "error",
        });
      }
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Delete canceled",
      });
    });
}
</script>
<template>
  <section class="bg-img h-screen flex flex-col justify-center items-center">
    <div
      class="p-10 mt-5 rounded bg-white sm:w-1/2 w-auto flex flex-col justify-center items-center"
    >
      <h1 class="text-center text-lg sm:text-3xl italic">To-do list</h1>
      <div class="h-1 w-20 mx-auto bg-[#00DCBD] mt-1"></div>

      <div
        class="mt-10 mb-3 border flex justify-between border-[#00DCBD] rounded bg-white"
      >
        <input
          class="sm:w-[350px] w-auto focus:outline-none rounded py-2 px-3"
          id="taskInput"
          type="text"
          placeholder="Add your task ..."
          v-model="TodoItems"
        />
        <button
          class="p-2 bg-green-100 rounded text-sm italic"
          type="button"
          id="addTaskBtn"
          @click.prevent="addTask()"
        >
          Add
        </button>
      </div>

      <div class="">
        <table class="text-center text-sm text-gray-500">
          <thead class="text-xs border-b">
            <tr>
              <th scope="col" class="px-6 py-3">Serial No</th>
              <th scope="col" class="px-6 py-3">Task Name</th>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="(item, index) in ListItems" :key="item.id">
              <th class="px-6 py-4">{{ index + 1 }}</th>
              <td class="px-6 py-4">{{ item.list }}</td>
              <td class="px-6 py-4">{{ item.date }}</td>

              <template v-if="item.status === 0">
                <td class="px-6 py-4" @click="changeStatus(item.id)">
                  <input type="checkbox" name="" id="" />
                  <span class="text-red-600 ml-1">Undone</span>
                </td>
              </template>

              <template v-if="item.status === 1">
                <td class="px-6 py-4" @click="changeStatusUnread(item.id)">
                  <input type="checkbox" checked name="" id="" />
                  <span class="text-green-800 ml-1">Done</span>
                </td>
              </template>
              <td class="px-6 py-4" @click="deleteItem(item.id)">
                <a href="javascript:void(0)"
                  ><svg
                    xmlns=" http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-img {
  background-image: url("https://cdn.create.vista.com/api/media/medium/476623116/stock-vector-colored-background-different-accessories?token=");
  min-height: 100vh;
}
</style>
