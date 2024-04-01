import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { useAuth } from "../../context/AuthContext";

export const GoogleAuth = () => {
  const { signInWithGoogle } = useAuth();
  //const [email, setEmail] = useState<string | null>(null);

  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      signInWithGoogle({ token: credentialResponse.credential });
    }
  };

  const handleGoogleLoginFailure: () => void = () => {
    console.log("Google login failed");
  };

  return (
    <>
      <>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            useOneTap
            onSuccess={handleGoogleLogin}
            onError={handleGoogleLoginFailure}
          />
        </GoogleOAuthProvider>
      </>
    </>
  );
};
