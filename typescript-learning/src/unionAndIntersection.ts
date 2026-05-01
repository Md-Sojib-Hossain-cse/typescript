// union |

type TRole = "admin" | "user" | "guest";

const getDashboard = (role: TRole) => {
  if (role === "admin") {
    return "Welcome to admin dashboard!";
  } else if (role === "user") {
    return "Welcome to user dashboard!";
  } else {
    return "Welcome to guest dashboard!";
  }
};

getDashboard("guest");

// intersection

type TEmployee = {
  id: string;
  name: string;
  contactNo: string;
};

type TManager = {
  designation: string;
  teamSize: number;
};

type TEmployeeManager = TEmployee & TManager;

const chowdhuriShaheb: TEmployeeManager = {
  id: "123",
  name: "SOJIB",
  contactNo: "+8801906479901",
  teamSize: 12,
  designation: "Manager",
};
