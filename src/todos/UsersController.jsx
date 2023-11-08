import React, { useEffect } from "react";
import users from "./users";

// TODO - 2
// Import variabel users dari file users.js
const UsersController = () => {
  useEffect(() => {
    (async () => {
      console.log(await formatUser());
      console.log(await findByName("Ariel"));
      console.log(await filterByMajor("Web"));
    })();
  }, []);

  return (
    <div>
      <h3>Cek hasilnya pada konsole</h3>
    </div>
  );
};

// TODO - 3
// Buatlah function formatUser yang menampilkan seluruh nama users
// Gunakan metode async await
// Gunakan metode map untuk format user
const formatUser = async () => {
  return users.map(
    (user) => `Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`
  );
};

// TODO - 4
// Buatlah function findByName yang mencari 1 user berdasarkan nama
// Gunakan metode async await
// Gunakan metode find untuk mencari user
const findByName = async (name) => {
  const user = users.find(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  return user
    ? `Found User - Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`
    : "User not found";
};

// TODO - 5
// Buatlah function filterByMajor yang mencari semua user berdasarkan major
// Gunakan metode async await
// Gunakan metode filter untuk menyaring user
const filterByMajor = async (major) => {
  const usersByMajor = users.filter(
    (user) => user.major.toLowerCase() === major.toLowerCase()
  );
  return usersByMajor.length > 0
    ? usersByMajor.map(
        (user) => `Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`
      )
    : "No users found for this major";
};

export default UsersController;
