import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './createForm.module.scss'

export default function CreateForm({ form }) {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    function renderInputBox(name, type, validation, options?) {
        const id = name.replaceAll(' ', '_')
        switch(type) {
            case 'select':
                return (
                    <select name={name} id={id} className={styles.input} {...register(name, validation)}>
                        {options.map(option => <option value={option} key={option.replaceAll(' ', '_')}>{option}</option>)}
                    </select>
                )
            case 'textarea':
                return <textarea name={name} id={id} rows={3} className={styles.input} {...register(name, validation)}></textarea>
            default:
                return <input type={type || 'text'} id={id} className={styles.input} {...register(name, validation)} />
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {form.map(set => (
                <fieldset key={set.set.replaceAll(' ', '_')}>
                    <legend className={styles.legend}>{set.set}</legend>
                    {set.items.map(item => {
                        const validation = {
                            required: item.required || false,
                            maxLength: item.maxLength || 255
                        }
                        if (item.type === 'radio' || item.type === 'checkbox') {
                            return <p>TODO</p>
                        } else {
                            return (
                            <label className={styles.label} key={item.name.replaceAll(' ', '_')}>
                                <span>{ item.name }</span>
                                {renderInputBox(item.name, item.type, validation, item.options)}
                            </label>
                            )
                        }
                    })}
                </fieldset>
            ))}
            <input type="submit" />
        </form>
    )
}