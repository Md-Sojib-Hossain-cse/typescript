//as const assertion

// enum TUserRole {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

// const UserRole = {
//   Admin: "Admin",
//   Editor: "Editor",
//   Viewer: "Viewer",
// } as const;

const UserRole = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

// {
//   readonly Admin: "Admin",
//   readonly Editor: "Editor",
//   readonly Viewer: "Viewer",
// }

//typeof operator & keyof operator

/*

const user = {
id : 222,
name : "SOJIB"
}


typeof user


type user = {
id : number;
name : string;
}


typeof UserRoles 

type UserRoles {
Admin : "Admin",
Editor : "Editor",
Viewer : "Viewer"
} //Fixed string value as type


keyof typeof UserRoles 
"Admin" | "Editor" | "Viewer"


"ADMIN" | "EDITOR" | "VIEWER"

UserRoles["admin"] == "ADMIN"
 */

const canEdit2 = (role: (typeof UserRole)[keyof typeof UserRole]) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible2 = canEdit2(UserRole.Admin);

console.log(isEditPermissible);
