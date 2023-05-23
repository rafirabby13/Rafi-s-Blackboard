import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SignleCourseDetail from '../Detail/SignleCourseDetail.js';
import './CourseDetail.css'

const CourseDetail = () => {
    // const [course, setCourse] = useState();
    const data = useLoaderData();
    console.log("data from course details", data);
    const {id, name}=data;

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/courseDetail`)
    //     .then(res => res.json())
    //     .then(data=>{
    //         setCourse(data);

    //     })
    // },[])
    return (
        <div className='courseDetail'>
            
            {
                data.map(data=> <SignleCourseDetail 
                // key={data.id}
                data={data}
                ></SignleCourseDetail>)
            }
        </div>
    );
};

export default CourseDetail;