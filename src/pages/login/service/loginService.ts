class loginService {
  login(email: string, password: string) {
    return email === "teste@gmail.com" && password === "teste";
  }
}

export default new loginService();
