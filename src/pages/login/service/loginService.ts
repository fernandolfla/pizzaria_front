import api from "../../../api/api";
import LoginType from "../../../types/LoginType";
import LoginResponseType from "../../../types/LoginResponseType";

export default class loginService {
  async login(login: LoginType) {
    const data: LoginResponseType = {
      email: undefined,
      token: undefined,
      error: undefined,
    };
    await api
      .post<LoginResponseType>("api/Usuario/Logar", {
        email: login.email,
        senha: login.senha,
      })
      .then((res) => {
        data.email = res.data.email;
        data.token = res.data.token;
      })
      .catch((err) => {
        data.error =
          err.response.status === 500
            ? "erro ao fazer o login"
            : "email ou senha inválidos";
      });

    return data;
  }
}
