import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => { 
        // console.log(data);

        axios.post('http://localhost:5000/services', data) 
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                alert('successfully added');
                reset();
            }
        })
    }      

    return (
        <div className='add-service'>
            <h2>Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="img url" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;