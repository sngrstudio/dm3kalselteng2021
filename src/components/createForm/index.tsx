import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './createForm.module.scss'

export default function CreateForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label}>
                <span>Name</span>
                <input type="text" className={styles.input} {...register('name')} />
            </label>
            <input type="submit" />
        </form>
    )
}