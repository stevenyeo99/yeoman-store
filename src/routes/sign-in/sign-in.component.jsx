import { useEffect } from 'react';

import { auth, signInWithGooglePopUp, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const signInWithGoogle = async () => {
    const response = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(response.user);
}

const SignIn = () => {
    useEffect(() => {
        auth.onAuthStateChanged(async (userCredential) => {
            if (userCredential) {
                await createUserDocumentFromAuth(userCredential);
            }
        });
    }, []);

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={signInWithGoogle}>Sign in with Google</button>

            <SignUpForm />
        </div>
    );
};

export default SignIn;