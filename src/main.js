import { init, recoverSecret, getSecret, forgetSecret } from "alphabill-sso-login/web3auth.js";

export const connect = () => {
    recoverSecret().then(console.log);
}

window.onload = () => {
    console.log("C1");
    init('BIm6wkge8Pvzp1r8NDX644Ki-CIU2F3TYa2EUoXCx5QBvgVG5bGHI8VhgPa5JFe7SYAOy8Cx0pFdAClt15rGvtA');
    console.log("C2");
}
