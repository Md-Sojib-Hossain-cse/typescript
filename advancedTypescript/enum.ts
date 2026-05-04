//enum

//set of string literal ek jaygay rakhe

type TRole = "Admin" | "Editor" | "Viewer";

enum TUserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: TUserRole) => {
  if (role === TUserRole.Admin || role === TUserRole.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible = canEdit(TUserRole.Admin);

console.log(isEditPermissible);
