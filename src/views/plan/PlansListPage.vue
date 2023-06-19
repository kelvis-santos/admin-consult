<template>
    <div>
      Plans Page
      <router-link to="/home">Home</router-link>
    </div>
    <!-- Create a dashboard show a list of plans saved and get from http request listing on table -->
    <div>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="plan, index in plans" :key="index">
            <td>{{ plan.name }}</td>
            <td>{{ plan.price }}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    name: 'DashboardPage',
  
    data() {
      return {
        plans: [
          {
            id: 0,
            name: 'Basic',
            price: '$9.99',
          },
          {
            id: 1,
            name: 'Pro',
            price: '$19.99',
          },
          {
            id: 2,
            name: 'Enterprise',
            price: '$49.99',
          },
        ],
      };
    },
  }
  </script>
  <style>
  div {
    justify-content: center;
    text-align: center;
  }
  table {
    margin: 1rem auto;
    border-collapse: collapse;
    width: 100%;
  }
  tbody {
    background-color: var(--charcoal);
  }
  th, td {
    padding: 8px;
  }
  th {
    background-color: #4CAF50;
    color: white;
  }
  
  </style>