const username = (input) => {
  return new Promise((resolve) => {
    resolve(input);
  });

}

const password = (user,password) => {
  return new Promise((resolve) => {
    resolve(user,password);
  })
}

const session = (user) => {
  return new Promise((resolve) => {
    resolve(user);
  })
}

const getUser = async () => {
  let user = await username("Abdulaziz");
  console.log(user);
}
const checkPassword = async () => {
  let pswCheck = await password(['Abdulaziz',1234]);
  console.log(pswCheck);
}
const createSession = async () => {
  let ss = await session('1');
  console.log(ss);
  

}

username();
password();
session();

getUser();
checkPassword();
createSession();