
const system = {
  users: {
    admin: {
      permissions: {
        read: true,
        write: false
      }
    }
  }
};
system.users.admin.permissions.write = true;
console.log(system.users.admin.permissions);

