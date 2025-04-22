// This function is used to send a verification email to the user during the signup process.
export const verifyEmail = async (email: string, otp: string,setLoading:any,setError:any,setData:any) => {
    try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_DEV}/auth/verify-email`, {
            method: "POST",
            body: JSON.stringify({ email, otp }),
            headers: { "Content-Type": "application/json" }
        });
        setLoading(false);

        if (!response.ok) {
            throw new Error('Failed to verify email');
        }

        const data = await response.json();
        setData(data)
    } catch (error) {
        setError(error)
        console.error('Error:', error);
        throw error;
    }
}