import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
function FormHook() {
    const nav = useNavigate()
    const schema = z.object({
        name: z.string().min(5, "must be more than 5").max(15, 'must be less than 15'),
        age: z.string().min(2, 'must be more than 11'),
        email: z.string().email()
    })
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(schema)
    })
    function save(data) {
        console.log(data);
        localStorage.setItem('token', 'ddddd');
        nav('/', { replace: true, state: { data: "hi from login" } });
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input {...register('name')} type="text" placeholder='enter name' />
            <br />
            <br />
            <small style={{ color: 'red' }}>{errors.name?.message}</small>
            <br />
            <input {...register('age')} type="text" placeholder='enter age' />
            <br />
            <input {...register('email')} type="text" placeholder='enter email' />
            <small style={{ color: 'red' }}>{errors.email?.message}</small>

            <br />
            <small style={{ color: 'red' }}>{errors.age?.message}</small>

            <button >save</button>
        </form>
    )
}

export default FormHook