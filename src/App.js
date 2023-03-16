import "./App.css";
import Home from "./pages/home/Home";
import {Entry} from "./pages/entry/Entry.page"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="login" element={<Entry />} />
                        <Route path="users">
                            {/*<Route index element={<List />} />*/}
                            {/*<Route path=":userId" element={<Single />} />*/}
                            {/*<Route*/}
                            {/*    path="new"*/}
                            {/*    element={<New inputs={userInputs} title="Add New User" />}*/}
                            {/*/>*/}
                        </Route>
                        <Route path="products">
                            {/*<Route index element={<List />} />*/}
                            {/*<Route path=":productId" element={<Single />} />*/}
                            {/*<Route*/}
                            {/*    path="new"*/}
                            {/*    element={<New inputs={productInputs} title="Add New Product" />}*/}
                            {/*/>*/}
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;