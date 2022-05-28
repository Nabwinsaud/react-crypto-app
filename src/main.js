let location = {
  pathname: "/users/id",
  hash: "",
  search: "?query=Nabinsaud&popular=false",
  state: null,
  key: "24sdbc4d",
};

let params = new URLSearchParams(location.search);
console.log(params.get("query"));

console.log(params.get("hash"));
console.log(params.get("key"));
