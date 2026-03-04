/* <div id="parent">
    <div id="child">
        <h1>this is an h1 tag</h1>
        <h2>this is an h2 tag</h2>
    </div> 
</div> */

const parent = React.createElement("div", {id: "parent"},
    
               React.createElement("div", {id: "child"},
                [
                    React.createElement("h1", {}, "this is an h1 tag"),
                    React.createElement("h2", {}, "this is an h2 tag")
                ]
               )
           );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);    


/* <div id="parent">
    <div id="child">
        <h1>this is an h1 tag</h1>
        <h2>this is an h2 tag</h2>
    </div>
    <div id="child1">
        <h1>this is an h1 tag</h1>
        <h2>this is an h2 tag</h2>
    </div>
</div> */


// const parent = React.createElement("div", {id: "parent"},
//     [
//         React.createElement("div", {id: "child"},
//             [
//                 React.createElement("h1", {}, "this is an h1 tag"),
//                 React.createElement("h2", {}, "this is an h2 tag")
//             ]
//         ),
//         React.createElement("div", {id: "child1"},
//             [
//                 React.createElement("h1", {}, "this is an h1 tag"),
//                 React.createElement("h2", {}, "this is an h2 tag")
//             ]
//         )
//     ]
// );   