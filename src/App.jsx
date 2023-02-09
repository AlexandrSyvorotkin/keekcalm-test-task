import React from 'react';
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import styles from './App.module.scss'
import Layout from "./Layout/Layout/Layout";

const App = () => {
    return (
        <>
            <Header/>
                <main>
                    <Layout/>
                </main>
            <Footer/>
        </>

    );
};

export default App;
