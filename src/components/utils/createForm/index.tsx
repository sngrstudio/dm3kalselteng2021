import * as React from 'react'
import { useForm } from 'react-hook-form'
import styles from './createForm.module.scss'

export default function CreateForm({ form, title }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data, event) => {
        function encode(data) {
            return Object.keys(data)
                .map(
                    key=> `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                ).join('&')
        }

        event.preventDefault()
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: new URLSearchParams({
                'form-name': event.target.getAttribute('name'),
                ...data
            }).toString()
        }).then(()=>alert('Form telah dikirim')).catch(error => alert(error))
    }

    function renderInputBox(name, type, validation, options?) {
        const id = name.replaceAll(' ', '_')
        switch(type) {
            case 'select':
                return (
                    <select name={name} id={id} className={styles.input} {...register(id, validation)}>
                        {options.map(option => <option value={option} key={option.replaceAll(' ', '_')}>{option}</option>)}
                    </select>
                )
            case 'textarea':
                return (
                    <textarea name={name} id={id} rows={7} className={styles.input} {...register(id, validation)}></textarea>
                )
            default:
                return (
                    <input type={type || 'text'} name={name} id={id} className={styles.input} {...register(id, validation)} />
                )
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} name={title.replaceAll(' ', '_')} data-netlify="true">
            <input type="hidden" name="form-name" value={title.replaceAll(' ', '_')} />
            {form.map(set => (
                <fieldset key={set.set.replaceAll(' ', '_')}>
                    <legend className={styles.legend}>{set.set}</legend>
                    {set.items.map(item => {
                        const validation = {
                            required: item.required || false,
                            maxLength: item.maxLength || 255
                        }
                        if (item.type === 'radio' || item.type === 'checkbox') {
                            return null
                        } else {
                            return (
                            <label className={styles.label} key={item.name.replaceAll(' ', '_')}>
                                <span className={styles.labelName}>{ item.name }</span>
                                {renderInputBox(item.name, item.type, validation, item.options)}
                                {validation.required ?
                                    errors[item.name.replaceAll(' ', '_')] && <span className={styles.error}>Kolom ini wajib diisi.</span>
                                    : <span></span>      
                                }
                            </label>
                            )
                        }
                    })}
                </fieldset>
            ))}
            <input className={styles.submit} type="submit" />
        </form>
    )
}