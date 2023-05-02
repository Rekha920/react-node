// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setEmail, setPassword, setLoading, setError, setLoggedIn } from './authSlice';
// import { login } from './authAPI';

// import  '../../App.css'

// function Login() {
//   const [rememberMe, setRememberMe] = useState(false);
//   const dispatch = useDispatch();
//   const { email, password, isLoading, error } = useSelector((state) => state.auth);

//   const handleEmailChange = (e) => {
//     dispatch(setEmail(e.target.value));
//   };

//   const handlePasswordChange = (e) => {
//     dispatch(setPassword(e.target.value));
//   };

//   const handleRememberMeChange = (e) => {
//     setRememberMe(e.target.checked);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(setLoading(true));
//     dispatch(setError(null));
//     try {
//       await login(email, password, rememberMe);
//       dispatch(setLoggedIn(true));
//     } catch (err) {
//       dispatch(setError(err.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
    
//   return (
//     <form onSubmit={handleSubmit}>
//     <input type="email" value={email} onChange={handleEmailChange} />
//     <input type="password" value={password} onChange={handlePasswordChange} />
//     <label>
//       <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
//       Remember me
//     </label>
//     {isLoading && <p>Loading...</p>}
//     {error && <p>{error}</p>}
//     <button type="submit">Log in</button>
//   </form>
//   );
// }

// export default Login;
