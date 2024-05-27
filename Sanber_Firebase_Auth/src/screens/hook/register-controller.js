import {getAuth, createUserWithEmailAndPassword} from "firebase";
import { Alert } from "react-native";

const useRegisterController = () => {
    const register = (email, password) => {
        const auth = getAuth();

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    console.log(user);

    Alert.alert("Register Success", `${user.email} are now registered`);
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});
};

return { register };
};
