import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Exprement = () => {
    const [course, setCourse] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/courseDetail`)
        .then(res=>res.json())
        .then(data=>{
            setCourse(data);
        })
    },[])
    return (
        <div>
            <h2>Hello from exprement {course.length}</h2>
        </div>
    );
};

export default Exprement;