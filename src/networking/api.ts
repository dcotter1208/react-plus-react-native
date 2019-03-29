import * as firebase from "firebase";

export const firebaseSignUp = (
  email: string,
  password: string
): Promise<any> => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      //Also store profile information at this time
      console.log("User Created: ", user);
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
};
