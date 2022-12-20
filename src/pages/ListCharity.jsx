import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCharity } from '../redux/actions/charity';
import SideBar from '../components/SideBar.jsx/SideBar';
import Header from '../components/navbar/Header';
import CharityCards from '../components/Cards/CharityCards';
import Navbar from '../components/navbar/Navbar';

const ListCharity = () => {

    var charities = useSelector(state => state.charity);

    const [search, setsearch] = useState()
    const [data, setData] = useState()

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharity());
    }, [dispatch]);

    const onChangeSearch = (event) => {
        setsearch(event.target.value);
        charities = charities.filter(charity => {
            return charity.title.toLowerCase().includes(search) || charity.description.toLowerCase().includes(search);
        });
        setData(charities);
    }

    return (
        <>
            <Navbar></Navbar>
            <main>
        
        <Header title="Charity"/> 

        <section className="news-section section-padding">
            <div className="container">
                <div className="row">


                    <div className="col-lg-7 col-12 row align-items-start justify-content-start">
                        { search ? (
                            <h4 className='text-center mb-5 p-0'>Search for "{search}"</h4>
                        ) : <></>}
                        

                        { data ? data.map((charity, index) => (
                            <CharityCards 
                                image={charity.image} 
                                title={charity.title} 
                                description={charity.description}
                                raised={charity.raise}
                                goal={charity.goal} />
                        )) : charities.map((charity, index) => (
                            <CharityCards 
                                image={charity.image} 
                                title={charity.title} 
                                description={charity.description}
                                raised={charity.raise}
                                goal={charity.goal} />
                        )) }
                    </div>

                    <SideBar onChange={onChangeSearch}/>

                </div>
            </div>
        </section>
        </main>
        
        </>
        
    );
};

export default ListCharity;