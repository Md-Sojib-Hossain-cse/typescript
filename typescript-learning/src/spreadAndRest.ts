//spread operator

const friends = [];

const bestFriends = ["mahin", "sakib"];

const schoolFriends = ["shahin", "sumaiya"];

const collegeFriends = ["Imran", "Neamul"];

friends.push(...bestFriends, ...schoolFriends, ...collegeFriends);

console.log(friends);

const user = {
  name: "sojib",
  phone: "+8801906479901",
};

const otherInfo = {
  hobby: "nothing",
  favoriteColor: "black",
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

//rest operator
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`),
  );
};

sendInvite("mahin", "sakib", "sumu");
