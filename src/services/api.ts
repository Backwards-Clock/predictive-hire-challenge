const endpoint = "https://example-domain.com.au/api";

interface Login {
  username: string;
  password: string;
}

export const login = ({ username, password }: Login) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: { "Content-Type": "application/json" },
  };

  /**
   * Call to fake endpoint to log in
   * fetch(endpoint + "/login", options)
   *   .then(res = res.json())
   *   .then(res => console.log(res));
   */

  // Fake a login response
  if (username === "user@company.com" && password === "apples") {
    return { username: username, token: "totallylegittoken" };
  } else {
    throw new Error("Incorrect username or password");
  }
};
