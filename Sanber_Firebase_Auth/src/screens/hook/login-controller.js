import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";

export const useLoginController = () => {
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Alert.alert("Login Success", `${user.email} is now logged in`);
        return { success: true }; // Mengembalikan objek success jika login berhasil
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Login Failed", errorMessage); // Menampilkan pesan kesalahan
        return { success: false, message: errorMessage }; // Mengembalikan objek error jika login gagal
      });
  };

  return { login };
};
