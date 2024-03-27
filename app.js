const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello world Nikhil Singh"), React.createElement("h1", {}, "Hello world from h2")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

